const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
// const AWS    = require('aws-sdk');
const { readFileContentSync } = require('./utils/fsutils.js');
const { extractFileName } = require('./utils/fsutils.js');
const { putObject, S3Param } = require('./utils/s3utils.js');

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
const jsTopFolder   = `${projectFolder}/out/_next/static/chunks/*.js`;   
const jsTopFolderList = shell.ls(jsTopFolder);
const jsSubFolder1   = `${projectFolder}/out/_next/static/chunks/pages/*.js`;    
const jsSubFolderList1 = shell.ls(jsSubFolder1);
const jsSubFolder2   = `${projectFolder}/out/_next/static/chunks/pages/blog/*.js`;  
const jsSubFolderList2 = shell.ls(jsSubFolder2);
const jsSubFolder3   = `${projectFolder}/out/_next/static/chunks/pages/blog/page/*.js`; 
const jsSubFolderList3 = shell.ls(jsSubFolder3);
const jsSubFolder4   = `${projectFolder}/out/_next/static/chunks/pages/resources/*.js`; 
const jsSubFolderList4 = shell.ls(jsSubFolder4);

//*******************************************************************
// Main 
//*******************************************************************
log("=================================================================")
log("Upload the javascript to S3")
log("=================================================================")

uploadJavaScriptFiles(bucketName1)

// uploadJavaScriptFiles(bucketName2)  /* not required in invite domain */

//*******************************************************************
// Function to load the javascript files to S3 site
//*******************************************************************
function uploadJavaScriptFiles(bucketName) {
  log(`Upload javascript files into bucket ${bucketName}`)
    /* Upload js in app folder */
    bucketPath = '_next/static/chunks'; 
    uploadFiles(jsTopFolderList, bucketName, bucketPath);
    /* Upload js in pages folder */
    bucketPath = '_next/static/chunks/pages'; 
    uploadFiles(jsSubFolderList1, bucketName, bucketPath);
    /* Upload js in pages/blog folder */
    bucketPath = '_next/static/chunks/pages/blog'; 
    uploadFiles(jsSubFolderList2, bucketName, bucketPath);
    /* Upload js in pages/blog folder */
    bucketPath = '_next/static/chunks/pages/blog/page'; 
    uploadFiles(jsSubFolderList3, bucketName, bucketPath);
    /* Upload js in pages/blog folder */
    bucketPath = '_next/static/chunks/pages/resources'; 
    uploadFiles(jsSubFolderList4, bucketName, bucketPath);
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
