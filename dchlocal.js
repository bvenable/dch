#!/usr/bin/env node
var path = require("path");
var util = require("util");
var Browser = require("zombie");
var assert = require("assert");
var indexfile = util.format('file://%s/index.html', __dirname);
Browser.visit(indexfile, function(error,browser) {
	console.log(browser.html());
});
