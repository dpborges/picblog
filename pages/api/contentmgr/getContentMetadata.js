// import fs from 'fs-extra';
import fs from 'fs';
import path from 'path';

// Function returns the metadata for a given slug (aka blogpost)
// If no parameter is provided, it returns metadata for all blogs posts, as an array.
export default async function getContentMetaData(slug) {
  // console.log(`>> Inside getContentMetaData(slug)`)

  return new Promise (
    function resolver(resolve, reject) {
      // console.log("   getContentMetaData slug: ", slug);
      const filePath = path.join(process.cwd(), 'data', 'contentmetadata.json')  /* cwd returns project folder */
      fs.readFile(filePath, "utf-8", (err, fileContents) => {
          if (err) {
            reject(err)
            return;
          }
          
          // console.log("This is data from file ", fileContents)       
          let metadataArray = JSON.parse(fileContents); /* convert to javascript object */

          /* if no slug, filter on return all posts; other get the content meta data for the single slug */
          let blogMetadata = !slug 
                  ? metadataArray.filter((mdObject) => mdObject.type === "post") 
                  : metadataArray.find((contentmetada) => contentmetada.slug === slug);
            
          // console.log("This is metadata array returned from getContentMetadata")       
          // console.log(blogMetadata);
          if (!blogMetadata)  {console.log("getContentMetaData resulted in No Blog metadata")}      
          resolve(blogMetadata);
      });
    }
  )
}



