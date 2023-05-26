const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const comments = require('postcss-discard-comments')
const fs = require('fs')

const cssFiles = ['style']

cssFiles.map(name => fs.readFile(`src/${name}.css`, (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .process(css, { from: `src/${name}.css`, to: `src/${name}.css` })
    .then(result => {
      fs.writeFile(`src/${name}.css`, result.css, () => true)
      if ( result.map ) {
        fs.writeFile(`src/${name}.map`, result.map.toString(), () => true)
      }
    })
  }));
