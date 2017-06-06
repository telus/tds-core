/**
 * WinterSmith plugin to customize the list renderer.
 *
 * This plugin implements custom marked renders for "list" and "listitem"
 * so the HTML generated from Markdown-formatted lists makes use of TDS'
 * list-related BEM classes. Without these classes, <ul>, <ol>, and <li>
 * elements appear un-styled.
 *
 * This file extends some code from the marked Markdown library:
 *
 * https://github.com/chjj/marked
 *
 * For instance, list, link, and text rendering functions are re-implemented
 * to add TDS' CSS classes to their output.
 *
 * marked's license:
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey (https://github.com/chjj/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var marked = require('marked');
var tdsVersion = 'v' + require('../../../../../core/package.json').version;

/**
 * Private helper from marked's source code, for escaping contents of some
 * <code> blocks.
 * @param html
 * @param encode
 * @returns {XML|string}
 */
function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Helper function to replace tokens in Markdown text.
 *
 * @param text
 * @returns {String}
 */
function replaceTokens(text) {
  var tokens = {
    '!!TDS_VERSION!!': tdsVersion
  };
  var re = new RegExp(Object.keys(tokens).join('|'), 'gi');
  return text.replace(re, function (token) {
    return tokens[token]
  });
}

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

  return '<' + tag + ' class="tds-list tds-list--' + modifier + '">\n' +
    body + '</' + tag + '>\n';
}

/**
 * Add the .tds-list__item class to <li> elements.
 *
 * @param text contents of the list item
 * @returns {string} List item HTML with BEM class
 */
function listitem(text) {
  return '<li class="tds-list__item">' + replaceTokens(text) + '</li>\n';
}

/**
 * Replace tokens in paragraph text.
 *
 * @param text
 * @returns {string}
 */
function paragraph(text) {
  return '<p>' + replaceTokens(text) + '</p>';
}

/**
 * Replace tokens in headings.
 *
 * @param text
 * @param level
 * @param raw
 * @returns {string}
 */
function heading(text, level, raw) {

  // quick fix to TOC bugs because we are not going to be using wintersmith
  if(text == "Display Heading 1"){
    return '<h'
      + level
      + ' class="'
      + this.options.headerPrefix
      + raw.toLowerCase().replace(/[^\w]+/g, '-')
      + '">'
      + replaceTokens(text)
      + '</h'
      + level
      + '>\n';
  }

  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + replaceTokens(text)
    + '</h'
    + level
    + '>\n';
}

/**
 * Replace tokens in bold text.
 *
 * @param text
 * @returns {string}
 */
function strong(text) {
  return '<strong>' + replaceTokens(text) + '</strong>';
}

/**
 * Replace tokens in italic text.
 *
 * @param text
 * @returns {string}
 */
function em(text) {
  return '<em>' + replaceTokens(text) + '</em>';
}

/**
 * Replace tokens in text
 * @param t
 * @returns {String}
 */
function text(t) {
  return replaceTokens(t);
}

/**
 * Replace tokens in code blocks.
 *
 * @param c
 * @param lang
 * @param escaped
 * @returns {string}
 */
function code(c, lang, escaped) {
  c = replaceTokens(c);

  if (this.options.highlight) {
    var out = this.options.highlight(c, lang);
    if (out != null && out !== c) {
      escaped = true;
      c = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? c : escape(c, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? c : escape(c, true))
    + '\n</code></pre>\n';
}

/**
 * Replace tokens in inline code.
 *
 * @param text
 * @returns {string}
 */
function codespan(text) {
  return '<code>' + replaceTokens(text) + '</code>';
}

function link(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a class="tds-link tds-link--descent" href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
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
  renderer.paragraph = paragraph;
  renderer.heading = heading;
  renderer.strong = strong;
  renderer.em = em;
  renderer.text = text;
  renderer.code = code;
  renderer.codespan = codespan;
  renderer.link = link;

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
