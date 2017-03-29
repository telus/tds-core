/**
 * Script to generate the icon web fonts from a source OTF file.
 *
 * Usage:
 *     node icons.js
 *
 * Uses ../fonts/core-icons.otf as its input, and produces ttf, eot, woff, and svg
 * files in the same directory.
 *
 * @requires ttfautohint v1.5+
 * https://www.freetype.org/ttfautohint/#download
 */

var Fontmin = require('fontmin');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');
var ttf2woff2 = require('ttf2woff2');

// destPath is the directory in which the generated webfonts will be saved.
var destPath = path.resolve(__dirname, '..', 'fonts');

// otfPath is the full path to an .OTF file from which all web fonts will be generated.
var otfPath = path.resolve(__dirname, '..', 'fonts', 'core-icons.otf');

/**
 * Run ttfautohint on a TTF file to improve its appearance on Windows.
 *
 * @param ttfFile The file to be hinted. It'll be replaced with its hinted version.
 * @returns {Promise}
 */
function applyAutohinting(ttfFile) {
  var dest = path.resolve(
    path.dirname(ttfFile),
    path.basename(ttfFile, '.ttf') + '-hinted.ttf'
  );

  var hintCommand = [
    `ttfautohint ${ttfFile} ${dest}`,
    `rm ${ttfFile}`,
    `mv ${dest} ${ttfFile}`
  ].join(' && ');

  return new Promise(function (resolve, reject) {
    exec(hintCommand, function (err, stdout, stderr) {
      if (err) {
	reject(err);
      } else {
	resolve(ttfFile);
      }
    });
  });
}

/**
 * Promisify Fontmin's run() function.
 *
 * @param job A Fontmin instance to be run
 * @returns {Promise}
 */
function runFontminJob(job) {
  return new Promise(function (resolve, reject) {
    job.run(function (err, files) {
      if (err) {
	reject(err);
      } else {
	resolve(files);
      }
    });
  });
}

/**
 * Convert the source OTF to TTF
 * Auto-hint the TTF
 * Convert the TTF to EOT and WOFF
 */
runFontminJob(new Fontmin().src(otfPath).dest(destPath).use(Fontmin.otf2ttf()))
  .then(function (files) {
    if (files.length !== 1) {
      throw 'Unable to find generated TTF webfont';
    } else {
      return applyAutohinting(files[0].path);
    }
  })
  .then(function (hintedTtf) {

    var input = fs.readFileSync(hintedTtf);
    fs.writeFileSync('fonts/core-icons.woff2', ttf2woff2(input));

    return Promise.all([
      runFontminJob(new Fontmin().src(hintedTtf).dest(destPath).use(Fontmin.ttf2eot())),
      runFontminJob(new Fontmin().src(hintedTtf).dest(destPath).use(Fontmin.ttf2woff()))
    ])
  })
  .catch(function (err) {
    console.log('Failed to generate webfonts:', err);
    process.exit(1);
  });
