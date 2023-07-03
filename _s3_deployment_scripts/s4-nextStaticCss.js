const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
// const AWS    = require('aws-sdk');
const { 
  readFileContentSync, writeFileContentSync, extractFileName, extractFileExtension
} = require('./utils/fsutils.js');
const { putObject, putImage, S3Param } = require('./utils/s3utils.js');

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
// Intialize config variables
//*******************************************************************
/* Set base config variables */
const projectFolder = "C:/Users/dpbor/Projects/picblog";
/* Set script variables */
const imagesFolder  = `${projectFolder}/out/images`;    
const imageFileList = getImageFileList(imagesFolder);    
const mediaFolder   = `${projectFolder}/out/_next/static/media`;  
const mediaFileList   = shell.ls(`${mediaFolder}/*`);
const cssFolder     = `${projectFolder}/out/_next/static/css`;    
const cssFileList   = shell.ls(`${cssFolder}/*.css`);

//*******************************************************************
// Main 
//*******************************************************************
log("=================================================================")
log("Upload _next/static/css files")
log("=================================================================")

uploadNextCssFiles(bucketName1)

// uploadNextCssFiles(bucketName2)  /* not requred in invite domain */

//*******************************************************************
// Function upload css files
//*******************************************************************
/* Upload cssFiles */
function uploadNextCssFiles(bucketName) {
  log(`Upload css files into bucket ${bucketName}`)
  let s3CssPath = '_next/static/css';
  uploadFiles(cssFileList, bucketName, s3CssPath);
  log("css files loaded into s3 css folder");
}

//*******************************************************************
// Function to upload list of files to S3
//*******************************************************************
async function uploadFiles(fileList, bucketName, s3Path) {
  console.log(">> Processing files ")
  fileList.forEach(async (file, index) => {
    /* pull file information from path */
    let s3FileName  = extractFileName(file);
    let s3FileNameExt = extractFileExtension(s3FileName);
    /* read file synchronously */
    let fileContent = readFileContentSync(file);
    /* create s3Param object  */
    let s3param = new S3Param(bucketName);
    s3param.contentType = s3FileNameExt;
    s3param.key = `${s3Path}/${s3FileName}`;
    s3param.content = fileContent;
    /* upload file */
    let error = await putObject(s3param);
    if (error) { log(`Encounered error uploading file ${file}; see log`)};
    if (index === fileList.length - 1) { log(`completed loading files into s3 ${s3Path} folder`)}
  });
}

//*******************************************************************
// Functions to upload images
//*******************************************************************
/**
 * Calls uploadImage function for each image in the fileLilst
 * @param {string[]} fileList 
 * @param {string} toBucketName 
 */
async function uploadImages(fileList, toBucketName, s3Path) {
  console.log(">> Processing files ")
  fileList.forEach(async (localFileName, index) => {
    await uploadImage(localFileName, toBucketName, s3Path);
    if (index === fileList.length - 1) { log(`completed loading files into s3 ${s3Path} folder`)}
  });
}

/**
 * Uploads an image by passing a readable stream to the s3Param
 * Body(alias content)
 * @param {string} fromFilePath 
 * @param {string} toBucketName 
 */
async function uploadImage(fromFilePath, toBucketName, s3Path) {
  log(">> Processing files ")

  /* pull file information from file path */
  let s3FileName  = extractFileName(fromFilePath);
  let s3FileNameExt = extractFileExtension(s3FileName);
  log("   file: ", s3FileName)

  /* create read stream */
  const fileStream = fs.createReadStream(fromFilePath); 

  /* create s3 param object */
  let s3Param = new S3Param(toBucketName);
  s3Param.contentType = s3FileNameExt;
  s3Param.key = `${s3Path}/${s3FileName}`;
  s3Param.content = fileStream;       /* assign stream to s3 param.Body */

  /* upload image */
  const res =  await putObject(s3Param);
}


//*******************************************************************
// Create lists of image various type of image files.
//*******************************************************************
function getImageFileList(imagePath) {
  let fileList1 = shell.ls(`${imagePath}/*.png`);
  let fileList2 = shell.ls(`${imagePath}/*.jpg`);
  let fileList3 = shell.ls(`${imagePath}/*.webp`);
  // let fileList4 = shell.ls(`${imagePath}/*.gif`);
  // let fileList5 = shell.ls(`${imagePath}/*.svg`);
  let imageFileList = fileList1
                     .concat(fileList2)
                     .concat(fileList3)
                     // .concat(fileList4)
                     // .concat(fileList5);             
                     .sort();
  return imageFileList;
}
