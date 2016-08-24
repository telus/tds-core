/**
 * Table of Contents Generator plugin
 *
 * This file takes the Wintergreen-generated "contents" tree,
 * prunes it, and re-arranges the ordering of its items.
 * The new content tree ordering is defined by the "TOC" key
 * in the config.json
 */

var TOC = require('../../config.json').TOC;

module.exports = function(env, callback) {

  function gen(contents, callback) {
    var item, page, subpage, page_clean, subpage_clean, re;
    var subitems = {};
    var results = {};

    // PRUNE ITEMS NOT NEEDED IN THE STYLEGUIDE DOCS
    //
    delete(contents.assets.plugins);
    delete(contents.assets.templates);
    delete(contents['config.json']);

    // RE-ARRANGE TOP-LEVEL ITEMS
    //
    for (item in TOC) {
      for (page in contents) {
        // remove leading "1-", "2-", etc. if any
        re = page.match(/\d-([\w-]*)/);
        page_clean = re ? re[1] : page;
        page_clean = page_clean.replace('-',' ');

        // RE-ARRANGE SUB-ITEMS
        //
        if (item.toLowerCase() === page_clean.toLowerCase()) {
          subitems = [];
          TOC[item].forEach(function(subitem) {
            for (subpage in contents[page]) {
        			subpage_clean = subpage.replace('-',' ');
              subpage_clean = subpage_clean.replace('.md', '');
              if (subitem.toLowerCase() === subpage_clean.toLowerCase()) {
                subitems[subpage] = contents[page][subpage];
              }
            }
          });

          results[page] = subitems; // contents[page];
        }
      }
    }

    // MANUALLY COPY ASSETS, INDEX
    results['index.md'] = contents['index.md'];
    results['assets'] = contents['assets'];

    // console.log(contents, results);
    contents = results;


    callback(null, {});
  }

  env.registerGenerator('assetify', gen);
  callback();
};