import fs from 'fs-extra';
// const fs = require('fs');

import path from 'path';
// const path = require('path');

// ***********************************************************************
// Read file
// ***********************************************************************
export default async function readFromFile(filePath) {
  // console.log(`>> Inside readFromFile`)

  return new Promise (
    function resolver(resolve, reject) {
      // console.log("   getContentMetaData slug: ", slug);
      fs.readFile(filePath, "utf-8", (err, fileContents) => {
          if (err) {
            reject(err)
            return;
          }
          // console.log("This is data from file ", fileContents)       
          // let metadataArray = JSON.parse(fileContents); /* convert to javascript object */
          // let blogMetadata = !slug 
          //         ? metadataArray 
          //         : metadataArray.find((contentmetada) => contentmetada.slug === slug);
            
          // // console.log("This is metadata array returned from getContentMetadata")       
          // // console.log(blogMetadata);
          // if (!blogMetadata)  {console.log("metadata is undefined")}      
          resolve(fileContents);
      });
    }
  )
}

// exports.readFromFile = readFromFile