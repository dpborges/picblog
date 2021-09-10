DEPENDENCIES
=======================================================
> To support google analytics, need to install react-ga
  npm install react-ga@2.7.0

 ** Research approach ** First take a look at my notes. If not there, take 
  a look at GCP book notes. If not, there take a look at Mastering Kubernetes 
  book. If still not clear, take a look at the udemy kubernetes course I took
  Combine notes if needed.


TODOS
======================================================

> (DONE) See why when I switch to production mode, the blog links
  maintain port 8080 instead of switching to 3000.
  Solution: changed Dev PORT to 3000 to match port used with prod
    build and top match port set in AppConfig.js

> (DONE) See if I can rename picblog-new to picblog. I would like picblog
  to become the new app name for the blog portion of the application
  
> (DONE) Once I know the new picblog evironment is operational and able to 
   push to remote, I can delete  picblog-new-DELETE       

> (DONE) See why Blog Post "How to Plan a Watch Party" on page 2 is returning 404

> (DONE) Look at previous razzle implemention to see how I set 
  up the k8s and docker folder structure and follow same structure in nextjs.

INGRESS implemenation

> (DONE) Dockerize my nextjs picblog server; decide how I will 
  distinguish between a picblog test and prod docker container.
  Document recommended approach for building and retrieving 
  docker images associated to test and prod environment. If you can have
  labels in docker images, then use an env label for test and prod.
  Solution: The only image you need in docker hub is your production image

>  (DONE) Stand up a basic kubernetes cluster with a single picblog container 
  where I can access it from the browser. This will require setting up
  a ingress nginx controller. 

> (DONE) Check in code after successfully deployment

STORAGE IMPLEMENTATION

> Allocate some storage I can attach to either the cluster or pod itself 
  (not sure which one), and document it  (if not documented already).
  Follow  ** Research approach ** noted above.

> Find out how to attach storage structure to pod; Document steps (follow 
 ** Research approach ** outlined above)

> Copy markdown content and content metadata to storage device

> Spin up the single picblog container using markdown content and content meta data 
  on the storage device. Test by renaming folders in the project folder

> Check in code after validating its working.

> Run through steps of deploying application to the Google Cloud -
  Once I get it working, delete cluster and document steps.

S3 SPA (single page application) INTEGRATION.

> Research as how to use ingress controller to access external sites,
  to acess my S3 single page application.

> Implement and test integration in dev/test

> Run through steps of deploying application to the Google Cloud  -
  Once I test that it is working, delete cluster and document steps.

HTTPS IMPLEMENTATION

> Implement same solution above with an HTTS IMPLEMENTATION

> Run through steps of deploying application to the Google Cloud -
  Once I get it working, delete cluster and document steps.
  
IMPLEMENT DEPLOYMENT STRATEGY 

> After getting a single container working, see my kubnernetes
  documenation and decide on number of replicas and deployment strategy 

> Implement deployment strategy and autoscaling directives.

> Test autoscaling feature, if simple to test, other wise I would assume
  we can trust that the k8 capabilites will work as they are tried and tested.

> Run through steps of deploying application to the Google Cloud again -
  Once I get it working, delete cluster and document steps.

IMPLEMENT COMPRESSION ON Kubernetes

> Look into the nextjs documenation on how to disable their compression features
  then see how to implement kubernetes compression

> Implement compressions in dev/test and  test that it is working

> Run through steps of deploying application to the Google Cloud again -
  Once I test that it is working, delete cluster and document steps.


Set up following capabilites with winston logging
> (DONE) test env     - be able to log to files so I can keep test output clean (without console.logs) 
> (DONE) dev env      - be able to log info/trace messages on a javasript file level and/or application level 
> (Pending) prod env  - be able to log errors and warnings to console in development and production 

> (Pending) After deploying to test enviroment; test google analytics
> (Pending) After deploying to test enviroment; test google ads

Continue on with Phase 3 of Target State

