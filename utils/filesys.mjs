import fs from 'fs';
import path from 'path';

// *************************************************
// File system utilities
// As of 6/24/2021 was not using any of the functions in this file
// *************************************************

/* The __dirname node global variable does not work with ES CommonJs Modules; This is a workaroud. 
   import the dirname function below in your client code. 
   To access __dirname in client, do following ==> const __dirname = dirname(import.meta); 
   IMPORTANT: Do not use. As of 6/24/2021 this was not working. The paths generated using __dirname
   would give error message that readFile could not find file name. Although when I console log the paths, 
   they look ok, but internally the readFile function seemed to have duplicate C:/ in directory path
   like so:  C:/C:/Users/dpbor/....
   */
export function dirname(meta) {
  return new URL("", meta.url).pathname;
}

/* Standard asyn nodejs readFile wrapped in a promise */
export function readFile(fname) {
  const promise = new Promise(
    function resolver(resolve, reject) {
      fs.readFile(fname, 'utf8', function (err,data) {
        if (err) {
          reject(err);
        }
        console.log(data);
        resolve(data);
      });
    }
  )
  return promise;
}

/* Standard asyn nodejs readFile wrapped in a promise except it converts json file to javascript object*/
export function readJsonFile(fname) {
  const promise = new Promise(
    function resolver(resolve, reject) {
      fs.readFile(fname, 'utf8', function (err,data) {
        if (err) {
          reject(err);
        }
        const jsData = JSON.parse(data); /* converts json to javascript object */
        console.log(jsData);
        resolve(jsData);
      });
    }
  )
  return promise;
}




