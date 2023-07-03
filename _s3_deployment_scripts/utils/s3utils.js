// const AWS    = require('aws-sdk');
// const multer = require('multer');
// const multers3 = requre('multer-s3');
const fs = require('fs');
const { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsCommand,
        DeleteObjectsCommand
} = require('@aws-sdk/client-s3');
const REGION = "us-east-1"; 
const s3Client = new S3Client({ region: REGION });

const log    = console.log;
const theJson = (value) => JSON.stringify(value, null, 2);

/**
 * Does a Put into s3 bucket
 * @param {values}   s3Params - an s3 params values; Note for image content/BODY must 
 *                              be a readable stream
 * @returns status - if sucessful status is undefined, otherwise status has error message
 */
async function putObject(s3Params) {
  let status = undefined;
  const putCommand = new PutObjectCommand(s3Params.object);
  // log("s3 params ",  s3Params.object)

  try {
    let response = await s3Client.send(putCommand); // returns undefined on success
  } catch (err) {
    status = `Error: ${err}`;
    console.log(status);
  }
  return status;
}

/**
 * Create Folder in S3 bucket, providing folder name at end of full path
 * @param {string} bucketName 
 * @param {string} fullFolderPath 
 * @returns 
 */
async function createFolder(bucketName, fullFolderPath) {
  let s3FolderParams = new S3Param(bucketName);
  s3FolderParams.contentType = "Folder";
  s3FolderParams.key = fullFolderPath + "/";
  return await putObject(s3FolderParams);
}

// async function deleteFolder(bucketName, fullFolderPath) {
//   let status = undefined;
//   let s3ObjectParams = new S3Param(bucketName);
//   s3ObjectParams.key = fullFolderPath + "/";
//   log(s3ObjectParams.object)
//   const deleteCommand = new DeleteObjectCommand(s3ObjectParams.object);
//   try {
//     status = await s3Client.send(deleteCommand); // returns undefined on success
//   } catch (err) {
//     status = `Error: ${err}`;
//     console.log(status);
//   }
//   return status;
// }

async function deleteFolder(bucketName, folderName) {
  /* initialize objectKey list */
  let objectKeys = []; 
  /* define param with bucket name and folder name as prefix  */
  let listParam = new S3Param(bucketName);
  listParam.prefix = folderName;
  
  /* retrieve object key list */
  let result = await listObjects(bucketName, listParam);
  let {Contents: objectList } = result;
  if (!objectList)  { return `Folder ${folderName} does not exist` };
  objectKeys = objectList.map((object)=> object.Key);

  /* return error if list of objects exceeds 1000 */
  if (objectKeys.length > 1000) return "Error: Cannot delete folder in batch mode if it exceeds 1000 objects"

  /* define s3 param by setting deleteList to objectKeys list  */
  let deleteParam = new S3Param(bucketName);
  deleteParam.deleteList = objectKeys;
  let deleteResult = await deleteObjects(bucketName, deleteParam);
  
  return deleteResult;
}


async function listObjects(bucketName, s3Params) {
  let status = undefined;
  // let s3Params = new S3Param(bucketName);
  // s3Params.marker = folderName;
  log(s3Params.object)
  const listObjectsCommand = new ListObjectsCommand(s3Params.object);
  try {
    status = await s3Client.send(listObjectsCommand); // returns undefined on success
  } catch (err) {
    status = `Error: ${err}`;
    console.log(status);
  }
  return status;
}

/**
 * Can delete upto 1000 objects.
 * @param {string} bucketName 
 * @param {string} s3Param 
 * @returns 
 */
async function deleteObjects(bucketName, s3Param) {
  let status = undefined;
  log(">>> Inside delete Objects")
  log(s3Param.object)
  const deleteObjectsCommand = new DeleteObjectsCommand(s3Param.object);
  try {
    status = await s3Client.send(deleteObjectsCommand); // returns undefined on success
  } catch (err) {
    status = `Error: ${err}`;
    console.log(status);
  }
  return status;
}

// ==============================================================
/**
 * S3 param generator
 */
class S3Param {
  paramObj = {};
  constructor(bucketName) {
    this.paramObj = { Bucket: bucketName };
  }

  toString() {
    return theJson(this.paramObj);
  }

  get values() { return this.toString(); }

  get object() { return this.paramObj }

  /* allows you to pass in file suffixes and sets ContentType to the expanded text */
  set contentType(type) {
    switch (type) {
      case 'html':    this.paramObj['ContentType'] = "text/html";  break;
      case 'css':     this.paramObj['ContentType'] = "text/css";  break;
      case 'js':      this.paramObj['ContentType'] = "application/x-javascript";  break;
      case 'png':     this.paramObj['ContentType'] = "image/png";  break;
      case 'jpg':     this.paramObj['ContentType'] = "image/jpeg";  break;
      case 'jpeg':    this.paramObj['ContentType'] = "image/jpeg";  break;
      case 'web':     this.paramObj['ContentType'] = "image/jpeg";  break;
      case 'folder':  this.paramObj['ContentType'] = "Folder";  break;
      case 'Folder':  this.paramObj['ContentType'] = "Folder";  break;
      case 'svg':     this.paramObj['ContentType'] = "image/svg+xml";  break;
      case 'xml':     this.paramObj['ContentType'] = "application/xml"; break;
      case 'txt':     this.paramObj['ContentType'] = "text/plain"; break;
      case 'ico':     this.paramObj['ContentType'] = "image/x-icon"; break;
      case 'ttf':     this.paramObj['ContentType'] = "image/ttf";  break;
      case 'woff':    this.paramObj['ContentType'] = "image/woff";  break;    /* unsupported content type */
      case 'woff2':   this.paramObj['ContentType'] = "image/woff2";  break;  /* unsupported content type */
      case 'eot':     this.paramObj['ContentType'] = "image/eot";  break;     /* unsupported content type */
    }
  }
  get contentType() { return this.paramObj.ContentType }
  
  set content(theContent) {
    this.paramObj['Body'] = theContent
  }
  get content() { return this.paramObj.Body }

  set key(theKey) {
    this.paramObj['Key'] = theKey
  }
  get key() { return this.paramObj.Key }

  set contentEncoding(theEncoding) {
    this.paramObj['ContentEncoding'] = theEncoding
  }
  get contentEncoding() { return this.paramObj.ContentEncoding }

  /* set a marker string where you want s3 to start listing objects from */
  set marker(marker) {
    this.paramObj['Marker'] = marker;
  }

  /* limits response to keys that begin with the specified prefix */
  set prefix(prefixString) {
    this.paramObj['Prefix'] = prefixString;
  }

  /* provide an array objects with key name (eg.  { Key: objectname }) */
  set deleteList(arrayOfObjectNames) {
    /* create  list of objects with Key name */
    let arrayOfObjects = arrayOfObjectNames.map((name) => { return {Key: name}});
    // log(arrayOfObjects);
    this.paramObj['Delete'] = { Objects: arrayOfObjects }
  }
}


//*************************************************************** */
// Main 
//*************************************************************** */
// /* upload html file */
// let s3HtmlParam = new S3Param("mybucketName");
// s3HtmlParam.key = "file/path";
// s3HtmlParam.contentType = "html";
// s3HtmlParam.content = "some html content";
// console.log(s3HtmlParam.values);
// console.log(s3HtmlParam.toString());
// console.log(s3HtmlParam.object);
// putObject(s3HtmlParams);



// /* upload image file */
// let s3ImageParams = new S3Param("mybucketName", "myfile/key");
// s3ImageParams.contentType = "image";
// s3ImageParams.content = "some image content";
// putObject(s3ImageParams);


// /* add folder */
// createFolder("test.pitchinclub.com", "_next/foofoo");

// /* delete folder */
// deleteObject("test.pitchinclub.com", "testfolder/").then(result=> log(result));

/* list objects folder */
// let listParam = new S3Param("test.pitchinclub.com");
// listParam.prefix = "_next";
// let objectKeys; 
// listObjects("test.pitchinclub.com", listParam).then(result => {
//   let {Contents: objectList } = result;
//   objectKeys = objectList.map((object)=> object.Key);
//   /* delete objects */
//   let deleteParam = new S3Param("test.pitchinclub.com");
//   deleteParam.deleteList = objectKeys;
//   // log(deleteParam.toString())
//   return deleteObjects("test.pitchinclub.com", deleteParam)
// }).then((result)=> {
//    log("Delete result");
//    log(result)
// })
// let nextFolderList  = await listObjects("test.pitchinclub.com", listParam);


module.exports = { 
  putObject, 
  createFolder, 
  deleteFolder, 
  listObjects,
  deleteObjects,
  S3Param,
}
// module.exports = { putvalues, S3Param }