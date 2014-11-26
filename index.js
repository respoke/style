'use strict';

var path = require('path');

var basePath = __dirname;

module.exports = {
  paths: {
    assets: path.join(basePath, 'assets'),
    images: path.join(basePath, 'assets', 'images'),
    scripts: path.join(basePath, 'assets', 'js'),
    styles: path.join(basePath, 'styles'),
    templates: path.join(basePath, 'templates')
  }
};
