// import fs from 'fs-extra';
import fs from 'fs';
import path from 'path';

// function used to ultimately use graphql to query the conent metadata, 
// get content id (cid) and return the markdown. Until I 
export default async function getContentMetaData(slug) {
   console.log(">> Inside getContentMetadata")
   console.log("   slug outside promise: ", slug);

  return new Promise (
    function resolver(resolve, reject) {
      console.log("   slug inside promise: ", slug);

      const filePath = path.join(process.cwd(), 'data', 'contentmetadata.json')  /* cwd returns project folder */
      fs.readFile(filePath, "utf-8", (err, data) => {
         if (err) {
           reject(err)
           return;
          }
         console.log('File data')
         console.log(data);
         let metadataObj = JSON.parse(data); /* convert to javascript object */
         let slugMetadata = metadataObj.find((contentmetada) => contentmetada.slug === slug);
         console.log("This is slug's md ", slugMetadata);
         resolve(slugMetadata);
      });
    }
  )
}



