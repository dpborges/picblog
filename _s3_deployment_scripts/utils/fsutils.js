const fs  = require('fs');
const log = console.log; 

/**
 * Reads a file synchronously and returns content. If options parameter is not
 * provided, it will use the default options. If options is provided, it will merge 
 * with defaultOptions object allowing you to override existing defaults or provide
 * additional options properties as needed.
 * @param {string} filePath 
 * @param {Object} options 
 * @returns fileContents
 */
function readFileContentSync(filePath, options) {
  let defaultOptions = {encoding: 'utf8', flag: 'r'}
  options = options ? Object.assign({}, defaultOptions, options): defaultOptions;
  return fs.readFileSync(filePath, options);
}

/**
 * Writes a file synchronously and returns content.
 * @param {string} filePath 
 * @param {*} content
 * @returns void
 */
function writeFileContentSync(filePath, content) {
  let defaultOptions = undefined;
  // options = options ? Object.assign({}, defaultOptions, options): defaultOptions;
  return fs.writeFileSync(filePath, content);
}

/**
 * Reads an image file and returns it as a base64 string
 * @param {string} filePath 
 * @returns 
 */
// function readImageFileSync(filePath) {
//   const img = fs.readFileSync(filePath);
//   const base64String = Buffer.from(img).toString('base64');
//   const fileName = extractFileName(filePath); 
//   const fileExt = extractFileExtension(fileName); 
//   const withPrefix = `data:image/${fileExt};base64,${base64String}`;
//   return withPrefix;
// }
// function readImageFileSync(filePath) {

//   const readable = fs.createReadStream(filePath);

//   let data = '';

//   readable.on('data', function(chunk) {
//     data += chunk
//   });

//   readable.on('end', function() {
//     console.log(data)
//     return data;
//   })
// }



/*****************************************************************
/* Helpers
/*****************************************************************
/* pull out file name from path*/

function extractFileName(filePath, separator='/') {
  /* verify we have a filePath and not just a file name */
  const isPath = filePath.includes(separator);
  if (isPath) {
    let splitFilePath = filePath.split('/');
    let fileName = splitFilePath[splitFilePath.length-1];
    return fileName;
  }
  /* return as-is (just filename) */
  return filePath;
}

/* pull out file extension from file name */
function extractFileExtension(fileName) {
  let splitLocalFileName = fileName.split('.');
  let fileExtension = splitLocalFileName[splitLocalFileName.length-1];
  return fileExtension;
}

/* strip out file extension from file name or file path  */
function stripOffFileExtension(fileName) {
  let splitFile = fileName.split('.');
  return splitFile[0];
}

/* does both extract filename from path and strips off extension and return just file name */
function extractFileNameAndStripExt(longFileName) {
  const fileName  = extractFileName(longFileName);
  const fileNameNoExt  = stripOffFileExtension(fileName);
  return fileNameNoExt;
}

module.exports = { 
  readFileContentSync, writeFileContentSync, 
  extractFileName, extractFileExtension,
  stripOffFileExtension, extractFileNameAndStripExt
}

