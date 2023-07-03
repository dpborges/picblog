const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
// const AWS    = require('aws-sdk');
const { readFileContentSync, writeFileContentSync } = require('./utils/fsutils.js');
const { extractFileNameAndStripExt, extractFileName } = require('./utils/fsutils.js');
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
const resourcesPages   = `${projectFolder}/out/resources/*.html`;    // Static html output folder
const resourcePageList = shell.ls(resourcesPages);
//*******************************************************************
// Main 
//*******************************************************************

uploadResourcePages(bucketName1)

//*******************************************************************
// Upload resources pages
//*******************************************************************
function uploadResourcePages(bucketName) {
  log("=================================================================")
  log("Upload the Resource pages ")
  log("=================================================================")

  let fileList = resourcePageList;
  /* Upload the resources pages */
  bucketPath = 'resources'; 
  uploadFiles(fileList, bucketName, bucketPath);
}

//*******************************************************************
// Function to upload list of files from ls command
//*******************************************************************
async function uploadFiles(fileList, bucketName, bucketPath) {
  console.log(">> Processing files ")
  /* init s3 param object */
  let s3param = new S3Param(bucketName)
  s3param.contentType = 'html';
  /* upload each file in fileList  */
  fileList.forEach(async (localFileName) => {
    /* read file synchronously */
    let fileContent = readFileContentSync(localFileName);
    /* update s3 param object */
    let s3FileName  = extractFileNameAndStripExt(localFileName);
    s3param.key = `${bucketPath}/${s3FileName}`;
    s3param.content = fileContent;
    /* upload object */
    let error = await putObject(s3param);
    if (error) { log(`Encounered error uploading file ${localFileName}; see log`)}
  });
}
