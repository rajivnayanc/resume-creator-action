const core = require('@actions/core')
const github = require('@actions/github')

const fs = require('fs')
const path = require('path')
const generateHtml = require('./generateHtml');
const run = require('@jamesives/github-pages-deploy-action').default;

try{
    const resumeFileName = core.getInput('FileName');
    const ACCESS_TOKEN = process.env['ACCESS_TOKEN']
    const data = fs.readFileSync(`./${resumeFileName}`);
    const resumeJson = JSON.parse(data);

    const output = generateHtml(resumeJson);
    console.log("HTML String Generated");

    fs.mkdir('build',()=>{
        fs.writeFileSync('build/index.html',output);
    });
    console.log("Created index.html file in build/ directory");

    run({
        accessToken: ACCESS_TOKEN,
        branch: "gh-pages",
        folder: "build"
    });
    console.log("Published on Github Pages of this repository");
    
}catch(error){
    console.log(error.message);
}