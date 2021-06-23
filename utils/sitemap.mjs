import fs from 'fs-extra';
import path from 'path';
import readFromFile from './filesystem.mjs';
// import toPairs from 'lodash';
import intersectionWith from 'lodash';
// import * as R from 'ramda';
// const { includes } = R;
// import includes from 'ramda/src/includes'
import R from 'ramda';


const fileName = 'contentmetadata.json';
const filePath = path.join(process.cwd(), '../', 'data', fileName )  /* cwd returns project folder */

/* Read content meta data */
// async function getJsonMetaData(filePath)  {
//   readFromFile(filePath).then((metadata) => {
//     // console.log(JSON.stringify(metadata,null,2));
//     return metadata;
//   }).catch(function(e) {
//     console.log(e)
//   });
// }

const filterObj = { id: "0015", wordCount: 915}
const filterInputBy = (inputArray, filterObj) => {
  let filteredData = inputArray.filter((contentmd) => {    
    console.log("looping thru contentmd ", contentmd)
    return contentmd.id === "0022"
  })
  console.log(`filteredata is : ${JSON.stringify(filteredData,null,2)}`);
  return filteredData
}

async function genSiteMap(filePath) {
  /* getJsonMetadata
     convertToJsObject
     filterBlogPosts
     writeUrlsetTag
     writeCommentBLock("the comment")
     writeUrlTag(object with metadata for single blogpost)
  */
  let jsonMetadata   = await readFromFile(filePath);
  let jsMetadataObjs = JSON.parse(jsonMetadata);
  // console.log(JSON.stringify(jsMetadataObjs,null,2));
  // let filteredObjs   = filterInputBy(jsMetadataObjs, filterObj);
  let result = R.includes({ wordCount: 915}, jsMetadataObjs)
  console.log(`is included in metadataObjs ${result}`)
}

// R.includes DID NOT WORK. CREATE MY OWN FUNCTION CALLED matchProperties(obj1, obj2), THAT RETURNS
// TRUE IF PROPERTIES IN OBJ1 ARE IN OBJ2 AND VALUES ARE EQUAL

genSiteMap(filePath);
// console.log(Object.keys(filterObj))
// let inter = intersectionWith([{ id: "0015"}], )
// console.log(`intersection ${inter}`)