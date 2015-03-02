# styles for Respoke web properties

This repo has shared styles for Respoke websites.

```bash
# this format tells NPM to use github.com/respoke/style
npm i --save-dev respoke/style
```

## Stylesheet usage

Be sure to add the include paths to the SASS configuration in your build
process. Otherwise you will need to provide the full path to the file you wish
to import.

```js
var sass = require('gulp-sass');
var respokeStyle = require('respoke-style');

gulp.task('sass', function () {
    return gulp.src('styles')
        .pipe(sass({
            includePaths: respokeStyle.includeStylePaths()
        }));
});
```

```scss
@import 'base';

.my-content {
    color: $text;
}
```

The basic usage is to just include the `base.scss` file which includes all the
components, helpers, bourbon, neat, config options, and base element styles.
(See example above).

To use Bourbon, Neat, and Respoke variables and helpers without the added cruft
of the actual styles then just import `respoke-style.scss`.

```scss
@import 'respoke-style';

.my-content {
    color: $text;
}

.my-button {
    @include button-dark;
}
```

### SassDoc generation

To generate the [SassDoc](http://sassdoc.com/) run the gulp task and open the
generated html file.

```bash
gulp sassdoc && open sassdoc/index.html
```

## Jade template usage

To include the provided mixins for Jade just include the mixins.jade file at the
top of your template.

```jade
@include node_modules/respoke-style/mixins

doctype html
html
    head
    body
        +navbar('dark')
        p Some custom paragraph text
```

To include a shared template you will need to provide the Jade helpers to the
template compilation method either globally or locally. There is a
`renderSharedTemplate` method that will output the compiled shared template. It
can take an option second `locals` object to pass variables.

```js
var jade = require('gulp-jade');
var respokeStyle = require('respoke-style');

gulp.task('jade', function () {
    return gulp.src('templates')
        .pipe(jade({
            locals: respokeStyle.templateLocals
        }))
});

```

```jade
doctype html
html
    head
        != renderSharedTemplate('head')
    body
        p Some custom paragraph text

        != renderSharedTemplate('footer')
```

## Assets

These are files you may want to reuse. You will probably want to copy them
during your build. See the example Gruntfile `copy` task.

`./assets/`
`./assets/images/`
`./assets/js/`

## Exported paths

See the list of exported asset paths in `./index.js`.

You can use these paths as local variables for your SCSS and Jade, or in your
build script. See the example Gruntfile.

```js
var respokeStyle = require('respoke-style');

assetPaths = respokeStyle.paths.assets
assetPaths = respokeStyle.paths.styles
assetPaths = respokeStyle.paths.templates
```

## Your project structure

When you copy the `./assets` to your local project, you must serve the
`./assets/js/` folder at the root of your website such that it is at the `/js/`
path (required by `./templates/head.jade`).

## Example Gruntfile

See `./SampleGruntfileUsage.js` for an example of building the Respoke styles into one of your projects.

## Style guide

To view the style guide run the gulp task and open your browser to
`http://localhost:1236`.

```bash
gulp style-guide
```
