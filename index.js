'use strict';

var path = require('path');
var bourbon = require('node-bourbon');

var basePath = __dirname;

module.exports = {
  paths: {
    assets: path.resolve(basePath, 'assets'),
    images: path.resolve(basePath, 'assets', 'images'),
    scripts: path.resolve(basePath, 'assets', 'js'),
    styles: path.resolve(basePath, 'styles'),
    templates: path.resolve(basePath, 'templates')
  },
  bourbon: bourbon
};
