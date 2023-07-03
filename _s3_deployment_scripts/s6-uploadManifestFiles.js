const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
// const AWS    = require('aws-sdk');
const { readFileContentSync } = require('./utils/fsutils.js');
const { extractFileName } = require('./utils/fsutils.js');
const { putObject, createFolder, S3Param } = require('./utils/s3utils.js');

//*******************************************************************
// Set target environment variables
//*******************************************************************
const env = "test";
/* Default bucket names for test environment */
let bucketName1  = 'test.pitchinclub.com';
let bucketName2  = 'test-invite.pitchinclub.com';
if (env === "prod") {
  bucketName1  = 'www.pitchinclub.com';
  bucketName2  = 'invite.pitchinclub.com';
}
//*******************************************************************
// Define domain name and work variables
//*******************************************************************
const projectFolder = 'C:/Users/dpbor/Projects/picblog';
const jsNextFolder   = `${projectFolder}/out/_next`;   
const jsNextFolderList = shell.ls(jsNextFolder);
const generatedFolderName = getGeneratedFolderNameIn(jsNextFolderList) 

const jsManifestFolder = `${projectFolder}/out/_next/static/${generatedFolderName}/*.js`; 
const jsManifestFileList = shell.ls(jsManifestFolder);

//*******************************************************************
// Main 
//*******************************************************************

loadManifestFiles(bucketName1);

//*******************************************************************
// Create generated manifest folder and upload manifest files
//*******************************************************************
function loadManifestFiles(bucketName) {
  log("=================================================================")
  log("Create generated manifest folder and upload manifest files in "+bucketName)
  log("=================================================================")

  /* Create generated folder name in _next folder */
  createFolder(bucketName, `_next/${generatedFolderName}`)

  /* Upload js manifest files */
  let bucketPath = `_next/static/${generatedFolderName}`;   // see name in folder out/_next/static/<generatedFolder>
  uploadFiles(jsManifestFileList, bucketName, bucketPath);
}
//*******************************************************************
// Function to upload list of files from ls command
//*******************************************************************
async function uploadFiles(fileList, bucketName, bucketPath) {
  console.log(">> Processing files ")
  /* init s3 param object */
  let s3param = new S3Param(bucketName)
  s3param.contentType = 'js';
  /* upload each file in fileList  */
  fileList.forEach(async (localFileName) => {
    /* read file synchronously */
    let fileContent = readFileContentSync(localFileName);
    /* update s3 param object */
    let s3FileName  = extractFileName(localFileName);
    s3param.key = `${bucketPath}/${s3FileName}`;
    s3param.content = fileContent;
    /* upload object */
    let error = await putObject(s3param);
    if (error) { log(`Encounered error uploading file ${localFileName}; see log`)}
  });
}

// Helper Function to obtain generated file name in _next folder
function getGeneratedFolderNameIn(jsNextFolderList) {
  let filteredList = jsNextFolderList.filter(f => f.length > 10); /* other folder are less than 10 chars*/
  return  filteredList[0];
}