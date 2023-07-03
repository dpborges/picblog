// DONE - delete sitemap.xml file locally and confirm its getting built as part of 
// DONE-cont...   the buildAndExport.js script
// DONE - (done) migrate BingSiteAuth.xml to local picblog folder 
// DONE - create script 'uploadMiscFiles.js' to upload miscellaneous files such as sitemap.xml, BingSiteAuth.xml, robots.txt
// DONE - clean up S3 folder in test website & test-invite website
// DONE - build and export site locally
// DONE - modify and run thru each upload script to update both primary & invite domain
// DONE - deploy latest pitchinclub app to test S3 website
// DONE - test the contactForm; 
// DONE - test invite ; 

//-------------------------------------------------------
//PRODUCTION RELEASE
//-------------------------------------------------------
// DONE - clean up unneeded files from prod primary S3 bucket 
// DONE - clean up unneeded files from prod invite  S3 bucket 
// DONE - deploy to PICBLOG to prod bucket
// DONE - deploy to PIC SPA to prod & invite bucket
// DONE - configure cloudfront to make origin the s3 bucket for pic domain
// DONE - configure cloudfront to make origin the s3 bucket for invite domain
// DONE      - test that I can load pic application using cloudfront endpoint
// DONE cont - test that I can load pic blogs and resources using cloudfron endpoint
// DONE cont - test that I can load an invite page using cloudfront url
// DONE - update dns entry for both primary domain and subdomain to cloudfront endpoints
// DONE - check sitemap.xml file is upto date
// DONE - comment out files other than sitemap.xml in uploadPublic files
// DONE - revert back from pod to test env in scripts
// TODO - check in picblog changes/additions
// TODO - check in pic services changes
// TODO - shutdown EKS cluster
//-------------------------------------------------------
//POST MIGRATION
//-------------------------------------------------------
//TODO - check cloudfront ids in scripts
//TODO      - update documentation to note you can use aws sync command to sync a local
//TODO update documentation to be sure to run build step before deployment
//TODO-cont - directory to S3. I did not use it for 2 reasons: 1) I do not want to load
//TODO-cont - html files with .html file extensison 2) I wanted to start writing
//TODO-cont - an S3 API I can use going forward.
//TODO fix picservices issue:user feedback on contact form gets posted to 
//TODO-cont - pic-dev instead of test or prod, where is configured for.

//TODO - 1 Wk after migration, check that I am still registered and getting traffic to bing 
//TODO-cont... google/webmasters 