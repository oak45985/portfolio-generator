const fs = require("fs");
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);


fs.writeFile("./index.html", pageHTML , err => {
    if(err) throw new err;
    console.log("Portfolio complete! Checkout index.html to see the output!");
});