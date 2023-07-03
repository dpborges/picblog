const fs     = require('fs');
const shell  = require('shelljs');
const log    = console.log;

log("=================================================================")
log("Generate static build by running: 'yarn run build-export'")
log("=================================================================")
const projectFolder    = 'C:/Users/dpbor/Projects/picblog';

shell.cd(projectFolder);
shell.exec('yarn run build-export');