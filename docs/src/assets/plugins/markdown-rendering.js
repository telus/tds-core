/**
 * WinterSmith plugin to customize the list renderer.
 *
 * This plugin implements custom marked renders for "list" and "listitem"
 * so the HTML generated from Markdown-formatted lists makes use of Thorium's
 * list-related BEM classes. Without these classes, <ul>, <ol>, and <li>
 * elements appear un-styled.
 */

var marked = require('marked');

/**
 * Add the .list, .list--bulleted, or .list--numbered classes to
 * <ul> and <ol> tags.
 *
 * @param body contents of the list block, given by marked
 * @param ordered true if this is an ordered list
 * @returns {string} List HTML with BEM classes
 */
function list(body, ordered) {
  var tag = ordered ? 'ol' : 'ul';
  var modifier = ordered ? 'numbered' : 'bulleted';

  return '<' + tag + ' class="list list--' + modifier + '">\n' +
    body + '</' + tag + '>\n';
}

/**
 * Add the .list__item class to <li> elements.
 *
 * @param text contents of the list item
 * @returns {string} List item HTML with BEM class
 */
function listitem(text) {
  return '<li class="list__item">' + text + '</li>\n';
}

/**
 * Create an instance of a marked Renderer which has the custom list and
 * listitem rendering functions.
 *
 * @returns {marked.Renderer}
 */
function createRenderer() {
  var renderer = new marked.Renderer();
  renderer.list = list;
  renderer.listitem = listitem;

  return renderer;
}

module.exports = function(env, callback) {
  // env.config is WinterSmith's object containing the settings read from
  // config.json. Flags and other basic values can be defined in config.json
  // on the 'markdown' property.
  var markdown = env.config.markdown || {};

  // Internally, WinterSmith passes config.markdown straight to the marked
  // module as the options parameter: https://github.com/chjj/marked#options-1
  // Since marked supports a 'renderer' property an expects it to be an
  // instance of marked.Renderer, we can use it to pass in the custom
  // list rendering logic.
  markdown.renderer = createRenderer();
  env.markdown = markdown;

  callback();
};
