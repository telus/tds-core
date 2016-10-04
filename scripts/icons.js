/**
 * Script to generate the icon web fonts from a source OTF file.
 *
 * Usage:
 *     node icons.js
 *
 * Uses ../fonts/core-icons.otf as its input, and produces ttf, eot, woff, and svg
 * files in the same directory.
 */

var Fontmin = require('fontmin');
var path = require('path');

var destPath = path.resolve(__dirname, '..', 'fonts');
var otfPath = path.resolve(__dirname, '..', 'fonts', 'core-icons.otf');
var ttfPath = path.resolve(__dirname, '..', 'fonts', 'core-icons.ttf');

var conversions = [
  Fontmin.ttf2eot(),
  Fontmin.ttf2woff()
];

// First produce a TTF file from the OTF.
var fontmin = new Fontmin()
  .src(otfPath)
  .dest(destPath)
  .use(Fontmin.otf2ttf());

fontmin.run(function (err, files) {
  if (err) {
    throw err;
  } else {
    // Now use the TTF as the source for building EOT, WOFF, and SVG fonts.
    conversions.forEach(function (conversion) {
      var job = new Fontmin()
        .src(ttfPath)
        .dest(destPath)
        .use(conversion);

      job.run(function (err2, files2) {
        if (err2) {
          throw err2;
        }
      });
    });
  }
});
