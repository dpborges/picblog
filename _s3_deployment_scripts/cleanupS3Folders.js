// const fs     = require('fs');
// const shell  = require('shelljs');
const { extractFileName } = require('./utils/fsutils.js');
const { deleteFolder, S3Param } = require('./utils/s3utils.js');

const log = console.log;

//*******************************************************************
// Define domain name and work variables
//*******************************************************************
const bucketName  = 'test.pitchinclub.com';

//*******************************************************************
// Main 
//*******************************************************************
log("=================================================================")
log("Delete NextJs Folders")
log("=================================================================")

/* Create generated folder name in _next folder */
// deleteFolder(bucketName, "_next").then((result)=>{
//   log("Delete _next folder result");
//   log(result);
//   return deleteFolder(bucketName, 'blog')
// }).then((result)=>{
//   log("Delete blog folder result");
//   log(result);
//   return deleteFolder(bucketName, 'images');
// }).then((result)=> {
//   log("Delete images folder result");
//   log(result);
//   return deleteFolder(bucketName, 'resources');
// }).then((result)=> {
//   log("Delete resources folder result");
//   log(result);
// })


// async function delete_next_folder() {
//   let result = await deleteFolder(bucketName, "_next");
//   log("Delete _next folder result");
//   log(result);
// }
// delete_next_folder()

/* list objects in folder */
let result = "";
async function deleteFolders() {
  result = await deleteFolder(bucketName, "_next");
  log(result);
  result = await deleteFolder(bucketName, "blog");
  log(result);
  result = await deleteFolder(bucketName, "images");
  log(result);
  result = await deleteFolder(bucketName, "resources");
  log(result);
}

deleteFolders();

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