const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;
const AWS    = require('aws-sdk');
const { readFileContentSync, writeFileContentSync } = require('./utils/fsutils.js');
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
const outFolder  = `${projectFolder}/out`;    // Static html output folder
const blogPostsFolder = `${outFolder}/blog`;  // blog post folder
const blogPages = `${blogPostsFolder}/*.html`;             // used as param for ls command to return blog posts      
const navigationPages = `${blogPostsFolder}/page/*.html`;  // used as param for ls command to return navigation pages

//*******************************************************************
// Main 
//*******************************************************************

uploadBlogAndNavPages(bucketName1)

//*******************************************************************
// Function to upload blog and nav pages
//*******************************************************************
function uploadBlogAndNavPages(bucketName) {
  log("=================================================================")
  log("Upload the Blog pages and Navigation pages ")
  log("=================================================================")

  let fileList = bucketPath = '';
  /* Upload the individual blog pages */
  fileList = shell.ls(blogPages);
  bucketPath = 'blog'; 
  uploadFiles(fileList, bucketName, bucketPath);

  /* Upload navigation pages */
  fileList = shell.ls(navigationPages);
  bucketPath = 'blog/page'; 
  log("Calling upload navigation files")
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
    console.log("  file:", localFileName);
    /* read file synchronously */
    let fileContent = readFileContentSync(localFileName);
    /* update s3 param object */
    let s3FileName  = stripHtmlSuffixFromFileName(localFileName);
    s3param.key = `${bucketPath}/${s3FileName}`;
    s3param.content = fileContent;
    // log(s3param)
    /* upload object */
    let error = await putObject(s3param);
    if (error) { log(`Encounered error uploading file ${localFileName}; see log`)}
  });
}

//*******************************************************************
// Get filename from path string and strip out html suffix 
//*******************************************************************
function stripHtmlSuffixFromFileName(longFileName) {
  /* pull out file name from path*/
  let splitLocalFileName  = longFileName.split('/');
  let s3FileNameWithSuffix = splitLocalFileName[splitLocalFileName.length-1];
  /* strip the html suffix from filename */
  let splitFileName  = s3FileNameWithSuffix.split('.');
  let s3FileNameWithHtmlSuffix = splitFileName[0];
  return s3FileNameWithHtmlSuffix;
}

