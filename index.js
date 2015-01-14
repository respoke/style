'use strict';

var path = require('path');
var bourbon = require('node-bourbon');
var jade = require('jade');
var _ = require('lodash');

var basePath = __dirname;

var paths = {
    assets: path.resolve(basePath, 'assets'),
    images: path.resolve(basePath, 'assets', 'images'),
    scripts: path.resolve(basePath, 'assets', 'js'),
    styles: path.resolve(basePath, 'styles'),
    templates: path.resolve(basePath, 'templates')
};

var RespokeStyle = (function RespokeStyle() {
    var includeStylePaths = function includeStylePaths(myPaths, noBourbonPaths) {
        var allPaths = myPaths || [];

        if (!noBourbonPaths) {
            allPaths = bourbon.with(paths);
        }

        allPaths.push(paths.styles);

        return allPaths;
    };
    var renderSharedTemplate = function renderSharedTemplate(name, locals) {
        var templatePath = path.join(paths.templates, name + '.jade');
        var options = _.merge({}, locals, {
            filename: templatePath
        });

        return jade.renderFile(templatePath, options);
    };

    return {
        paths: paths,
        bourbon: bourbon,
        includeStylePaths: includeStylePaths,
        templateLocals: {
            renderSharedTemplate: renderSharedTemplate
        }
    };
})();

module.exports = RespokeStyle;
