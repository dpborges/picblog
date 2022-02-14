import fs from 'fs-extra';
import path from 'path';
import intersectionWith from 'lodash';
import { filterObjArrayBy } from './object.mjs';

// IMPORTANT NOTE: Because the __dirname node js global does not working in
// this environment, which provides flexibility to run from any directory. 
// Since __dirname is not working, I put an if stmnt that enables me to run
// it from utils when testing and then from project directory from package.json
// or root directory.

// **********************************************************************
// Define main function to generate sitemap, and call it immediatedly after.
// **********************************************************************

let runFrom = "project-folder";  /* set to utils-folder or project-folder */
/* Set the source data file */
const fileName   = 'contentmetadata.json';
let filePath   = "";
let outputFile = "";
if (runFrom === "utils-folder") {
  filePath   = path.join(process.cwd(), '../', 'data', fileName );         /* cwd returns project folder */
  outputFile = path.join(process.cwd(), '../', 'public', 'sitemap.xml' );  
}
if (runFrom === "project-folder") {
  filePath   = path.join(process.cwd(), 'data', fileName )         /* cwd returns project folder */
  outputFile = path.join(process.cwd(), 'public', 'sitemap.xml' )  
}

/* Define main function to generate sitemap from data file provided  */
async function genSiteMap(filePath) {
  let mdObjectArray      = await fs.readJson(filePath); /* read JSON md file and convert to object array */
  let blogPostsArray     = filterObjArrayBy(mdObjectArray, { type: "post" });
  let landingPageArray   = filterObjArrayBy(mdObjectArray, { type: "landingPage" });
  let resourcePagesArray = filterObjArrayBy(mdObjectArray, { type: "sme" }); /* sme (sitemap entry)*/
  let sitemap  = new SiteMap("picblog-sitemap");     /* instantiate a sitemap */
  sitemap.addUrlsetOpenTag();  /* add <urlset ...> tag */
  addLandingPageToSiteMap(landingPageArray, sitemap);
  addResourcePagesToSiteMap(resourcePagesArray, sitemap);
  addBlogPostsToSiteMap(blogPostsArray, sitemap);
  sitemap.addUrlsetCloseTag(); /* close </urlset>  tag */
  // sitemap.print();
  sitemap.writeTo(outputFile);
  console.log("Sitemap generated")
}

/* Call the generate site map function  */
genSiteMap(filePath);


// **********************************************************************
// SiteMap Class allows you to instantiate a sitemap, add the relevant xml
// tags and write it to file 
// **********************************************************************
class SiteMap {

  constructor(name) { 
    this.name = name; 
    this.sitemapData = [];
  }

  _append(data) {
    this.sitemapData.push(data);
  }

  addUrlsetOpenTag() {
    let xmlDeclTag = "<?xml version='1.0' encoding='UTF-8'?>" + "\n";
    let urlsetOpenTag = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
    this._append(xmlDeclTag);
    this._append(urlsetOpenTag + "\n");
    return this;
  }
  addUrlsetCloseTag() {
    this._append("</urlset>");
  }

  addUrlOpenTag() {
    this._append("<url>" + "\n");
    return this;
  }
  addUrlCloseTag() {
    this._append("</url>" + "\n");
    return this;
  }
  
  addLocTag(url) {
    const locTag = `  <loc>${url}</loc>`;
    this._append(locTag + "\n");
    return this;
  }

  addImageTag(image) {
    const imageTag = `  <image:image>
    <image:loc>${image.loc}</image:loc>
    <image:title>${image.title}</image:title>
  </image:image>`;
    this._append(imageTag + "\n");
    return this;
  }

  addCommentBLock(comment) {
    const commentBlock = `<!--  ****************************************************************************  -->
<!--  ${comment}  -->
<!--  ****************************************************************************  -->`
    this._append(commentBlock + "\n");
    return this;
  }
  
  print() {
    this.sitemapData.map((textblock) => {
      console.log(textblock)
    })
  }

  writeTo(file) {
    let data = "";
    this.sitemapData.map((textblock) => {
      data = data + textblock
    })
    fs.writeFileSync(file, data);
  }
} /* end of SiteMap class */


// **********************************************************************
// PIC Helper function specifically to add the individual the landingpage,
// resource pages, and individual blog posts to the sitemap
// **********************************************************************
const addBlogPostsToSiteMap = (postsObjArray, sitemap) => {

  let blogUrl   = "https://pitchinclub.com/blog";
  let baseUrl  = "https://pitchinclub.com";

  sitemap.addCommentBLock("INDIVIDUAL BLOG POSTS");
  /* add array of blogposts to sitemap */
  postsObjArray.map( (post) => {
    sitemap.addUrlOpenTag();
      sitemap.addLocTag(`${blogUrl}/${post.slug}`);
      // sitemap.addImageTag({loc: `${baseUrl}${post.images[0].src}`, title: `${post.images[0].alt}`});
      // Uncomment below to render images in sitemap; after moving to new folder 
      // if (post.images.length > 0 ) {
      //   post.images.map( (imageObj) => {
      //     sitemap.addImageTag({loc: `${baseUrl}${imageObj.src}`, title:`${imageObj.alt}`});
      //   })
      // }
    sitemap.addUrlCloseTag();
  }) 
}

/* Add landing page to sitemap */
const addLandingPageToSiteMap = (postsObjArray, sitemap) => {

  let baseUrl  = "https://pitchinclub.com";
  
  sitemap.addCommentBLock("LANDING PAGE AND LANDING PAGE IMAGES");
  postsObjArray.map( (post) => {
    sitemap.addUrlOpenTag();
      sitemap.addLocTag(`${baseUrl}`);
      if (post.images.length > 0 ) {
        sitemap.addImageTag({loc: `${baseUrl}${post.images[0].src}`, title: `${post.images[0].alt}`});
        sitemap.addImageTag({loc: `${baseUrl}${post.images[1].src}`, title: `${post.images[1].alt}`});
        sitemap.addImageTag({loc: `${baseUrl}${post.images[2].src}`, title: `${post.images[2].alt}`});
        sitemap.addImageTag({loc: `${baseUrl}${post.images[3].src}`, title: `${post.images[3].alt}`});
        sitemap.addImageTag({loc: `${baseUrl}${post.images[4].src}`, title: `${post.images[4].alt}`});
      }
    sitemap.addUrlCloseTag();
  }) 
}
/* Add resource pages to sitemap */
const addResourcePagesToSiteMap = (postsObjArray, sitemap) => {

  let baseUrl      = "https://pitchinclub.com";
  let resourcesUrl = "https://pitchinclub.com/resources";

  sitemap.addCommentBLock("RESOURCE PAGES");
  /* add array of blogposts to sitemap */
  postsObjArray.map( (post) => {
    sitemap.addUrlOpenTag();
      sitemap.addLocTag(`${resourcesUrl}/${post.slug}`);
      // Uncomment below to render images in sitemap; after moving to new folder 
      // if (post.images.length > 0 ) {
      //   post.images.map( (imageObj) => {
      //     sitemap.addImageTag({loc: `${baseUrl}${imageObj.src}`, title:`${imageObj.alt}`});
      //   })
      // }
    sitemap.addUrlCloseTag();
  }) 
}


