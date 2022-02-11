pic-pvc.yaml
============================================================
Note that a storageclass was not specified because we want to 
allow kubernetes to default to the storageclass for the given 
environment.
If cluster is running on our local machine, it will use 
whatever the default storageclass is on my local machine. 
If cluster is running on GKE, it will default to 
storageclass that maps to GCEPersistentDisk, which is fine.
