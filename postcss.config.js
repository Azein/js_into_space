const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const assets  = require('postcss-assets');
const nested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssImport,
    assets,
    nested,
    autoprefixer
  ]
}
