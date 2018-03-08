var {execSync} = require('child_process');
var {resolve, normalize} = require('path');
var {watch} = require('fs');

var less = process.platform !== "win32" ? resolve(normalize('./node_modules/.bin/lessc')) : resolve(normalize('./node_modules/.bin/lessc.cmd'));

watch('./src', (e, f) => {
    console.log(`${f} changed. Building...`);
    console.log(execSync(`${less} src/index.less dist/index.css`).toString());
    console.log(`Built`);
})