const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
// const AWS    = require('aws-sdk');
const { readFileContentSync, writeFileContentSync } = require('./utils/fsutils.js');
const { extractFileNameAndStripExt, extractFileName, extractFileExtension } = require('./utils/fsutils.js');
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
// Define working variables
//*******************************************************************
const publicFolder = 'C:/Users/dpbor/Projects/picblog/public';
let fileList = [
  publicFolder + "/sitemap.xml",       // upload when adding/deleting content
  // publicFolder + "/BingSiteAuth.xml",  // upload 1x only
  // publicFolder + "/robots.txt",        // upload 1x only 
  // publicFolder + "/favicon-16.ico",    // upload 1x only
  // publicFolder + "/favicon-32.ico",    // upload 1x only
  // publicFolder + "/favicon-192.ico"    // upload 1x only
];

//*******************************************************************
// Main 
//*******************************************************************
log("=================================================================")
log(`Upload the files in public folder in both domains ${env}  `)
log("=================================================================")
log(`Uploading files ${fileList} `)
/* upload in bucket for primary domain */
bucketPath = ''; 
uploadFiles(fileList, bucketName1, bucketPath);

/* upload in bucket for invite domain */
bucketPath = ''; 
uploadFiles(fileList, bucketName2, bucketPath);

//*******************************************************************
// Function to upload list of files from ls command
//*******************************************************************
async function uploadFiles(fileList, bucketName, bucketPath) {
  console.log(">> Processing files for bucket Name: " + bucketName)
  /* init s3 param object */
  let s3param = new S3Param(bucketName)
   /* upload each file in fileList  */
  fileList.forEach(async (localFileName) => {
    /* read file synchronously */
    let fileContent = readFileContentSync(localFileName);
    /* update s3 param object */
    let s3FileName  = extractFileName(localFileName);
    /* if no bucketPath don't concat bucketPath and file name using forward slash */ 
    s3param.key = !bucketPath ? s3FileName : `${bucketPath}/${s3FileName}`;
    log(s3param.key)
    s3param.contentType = extractFileExtension(s3FileName);
    s3param.content = fileContent;
    /* upload object */
    let error = await putObject(s3param);
    if (error) { log(`Encounered error uploading file ${localFileName}; see log`)}
  });
}
