/**
 * WinterSmith plugin to gather a Table of Contents, to be displayed in the
 * documentation site's left-hand navigation menu.
 */

var fs = require('fs');

// Items in the ToC should be named according to this pattern. The numeric
// prefix lets us control the exact order of elements in the menu.
var NAMING_PATTERN = /^([0-9]+)-(.+)$/;

// Directory containing top-level categories.
var ROOT_DIR = './docs/';

/**
 * Custom comparator function for sorting the Table of Contents. Each
 * element is expected to be an object with a property named "order". The value
 * of that "order" property should be a number representing the element's
 * position in the nav menu.
 *
 * Elements aren't required to have sequential "order" properties. This is
 * perfectly fine:
 *
 * [ { title: "Overview", order: 10 }, { title: "How to use", order: 20 } ]
 *
 * As is:
 *
 * [ { title: "Overview", order: 1 }, { title: "How to use", order: 2 } ]
 *
 * @param a
 * @param b
 * @returns {number}
 */
function tocCompare(a, b) {
  if (a.order < b.order) {
    return -1;
  } else if (a.order > b.order) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Build up an array of pages within a category, in the order they should
 * appear in the navigation menu underneath their parent category. Each page
 * key is expected to follow the format "[n]-[slug].[format]" where n is a
 * number representing its position in the nav, slug is the string used to
 * build its URL, and format is the file format.
 *
 * Ex: "1-overview.md"
 *
 * The scope of this helper function is private to this plugin.
 *
 * @param {Object} category Subset of the WinterSmith content tree, containing
 *   all the child pages of a certain category.
 * @returns {Array} of objects containing child page titles and URLs, in the
 *   order they should appear in the navigation menu.
 */
function buildChildren(category) {
  // Using an array because Objects don't guarantee order.
  var children = [];

  for (var key in category) {
    if (!category.hasOwnProperty(key)) {
      continue;
    }

    // Check that the key of this item is formatted like "1-overview.md".
    var matches = key.match(NAMING_PATTERN);
    var child = category[key];

    if (matches === null || child.title === undefined) {
      // Don't include any pages which don't have a title, or don't match the
      // expected naming pattern.
      continue;
    }

    children.push({
      title: child.title,
      url: child.url,
      order: parseInt(matches[1])
    });
  }

  // Sort this category's children, since they came from an Object where order
  // isn't guaranteed.
  children.sort(tocCompare);

  return children;
}

/**
 * Build up a data structure representing the Table of Contents, which appears
 * in the left-hand navigation. The final result looks like this:
 *
 * [
 *  {
 *    title: "Category A",
 *    children: [
 *      {
 *        title: "Child 1",
 *        url: "/category-a/child-1.html"
 *      }
 *    ]
 *  }
 * ]
 *
 * @param {Object} contents The WinterSmith content tree
 * @returns {Array}
 */
function getNav(contents) {
  // Using an array because Objects don't guarantee order.
  var toc = [];

  // Loop over the top-level WinterSmith content tree items, finding category
  // folders and collecting all their child pages.
  for (var dir in contents) {
    if (!contents.hasOwnProperty(dir)) {
      continue;
    }

    var isDir = fs.lstatSync(ROOT_DIR + dir).isDirectory();
    var matches = dir.match(NAMING_PATTERN);

    if (!isDir || matches === null) {
      // Only process directories named like "1-Overview".
      continue;
    }

    var entry = {
      title: matches[2],
      children: buildChildren(contents[dir]),
      order: parseInt(matches[1])
    };

    toc.push(entry);
  }

  // Sort the top level categories.
  toc.sort(tocCompare);

  return toc;
}

module.exports = function(env, callback) {
  env.helpers.getNav = getNav;

  callback();
};
