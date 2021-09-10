Use this directory to build any chart depenencices that are needed.
Assume you have a chart called chartx and you want to create 
a dependency called chartd

1) Create the chart structure for a chart dependency using command
    helm create <chartname>  , in this case chartd
2) Create the tgz package file here by issuing command
   helm package <chartname>  , in this case chartd
3) Copy chartd  package to the /charts folder of the  chartx chart.
4) Finally update the Chart.yaml file in your chartx chart with the dependency
   as follows:
      dependencies:
        - name: chartd
          version: "0.1.0"
          repository: "file://../chartd/chartd-0.1.0.tgz"

NOTE: if the file repository does not work; consider create a local 
See if video here is helpful