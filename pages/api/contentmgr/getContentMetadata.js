// import fs from 'fs-extra';
import fs from 'fs';
import path from 'path';

// Function returns the metadata for a given slug (aka blogpost)
// If no parameter is provided, it returns all metadata, as array.
export default async function getContentMetaData(slug) {

  return new Promise (
    function resolver(resolve, reject) {
      console.log("   slug inside promise: ", slug);

      const filePath = path.join(process.cwd(), 'data', 'contentmetadata.json')  /* cwd returns project folder */
      fs.readFile(filePath, "utf-8", (err, data) => {
         if (err) {
           reject(err)
           return;
          }
          
         let metadataArray = JSON.parse(data); /* convert to javascript object */
         let blogMetadata = !slug 
                ? metadataArray 
                : metadataArray.find((contentmetada) => contentmetada.slug === slug);
                
         resolve(blogMetadata);
      });
    }
  )
}



