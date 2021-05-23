// import fs from 'fs-extra';
import fs from 'fs';
import path from 'path';

// Function returns the metadata for a given slug (aka blogpost)
// If no parameter is provided, it returns all metadata, as array.
export default async function getContent(cid) {

  return new Promise (
    function resolver(resolve, reject) {

      const filePath = path.join(process.cwd(), 'markdown', `${cid}.mdx`)  /* cwd returns project folder */
      fs.readFile(filePath, "utf-8", (err, mdxContent) => {
        if (err) {
          reject(err)
          return;
        }
                
        resolve(mdxContent);
      });
    }
  )
}



