# styles for Respoke web properties

This repo has shared styles for Respoke websites.

```bash
# this format tells NPM to use github.com/respoke/style
npm i --save-dev respoke/style
```

## Stylesheet usage

See `SampleGruntfileUsage.js` for building the stylesheet.

Recommended usage is from your own `.scss` stylesheet file:

```scss
@import '../node_modules/respoke-style/styles/base.scss';

/* Now use the styles */

```

## Jade template usage

Inside your local Jade template:

```jade
doctype html
html
    head
        include ../node_modules/respoke-style/head.jade
    body
        include ../node_modules/respoke-style/navbar.jade

        p Some custom paragraph text

        include ../node_modules/respoke-style/footer.jade
```

## Assets

There is no need to use these files, but you will probably want to copy them during your build process.

`./assets/images`
`./assets/js`

## Exported paths

`./index.js` exports the paths to all of the asset folders which are exported.

Then you could inject the paths as local variables for your SCSS and Jade.

## Your project structure

Make sure when you copy the `./assets` to serve the `./assets/js/` folder at the root of your website such that it is at the `/js/` path.


## Example Gruntfile

See `./SampleGruntfileUsage.js` for an example of building the Respoke styles into one of your projects.
