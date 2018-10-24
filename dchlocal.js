#!/usr/bin/env node
var path = require("path");
var util = require("util");
var Browser = require("zombie");
var assert = require("assert");
var argstring = "";
if (process.argv.length > 2 ) {
 process.argv.forEach(function (val, index, array) {
   if (index > 1) { 
    if (index == 2) {
     argstring += "?"
    } else {
      argstring += "&"
    }
    argstring += val 
   }
 });
}
var indexfile = util.format('file://%s/index.html%s', __dirname, argstring);
console.log(indexfile);
Browser.visit(indexfile, function(error,browser) {
	console.log(browser.html());
});
