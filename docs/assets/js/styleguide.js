/**
 * A small collection of scripts used in the styleguide's example pages. These
 * are not part of the Thorium API.
 */

(function () {
  var TRIGGERS_SELECTOR = '.ex-page .hint__trigger';
  var ACTIVE_HINT_CLASS = 'hint__text--active';
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  function eachElement(nodeList, callback) {
    Array.prototype.forEach.call(nodeList, callback);
  }

  function hasClass(el, className) {
    return (el.classList && el.classList.contains(className));
  }

  function closeHints() {
    eachElement(document.querySelectorAll('.hint__text'), function (el, i) {
      el.classList.remove(ACTIVE_HINT_CLASS);
    });
  }

  function activateHintText(hint) {
    eachElement(hint.parentNode.childNodes, function(el, i) {
      if (hasClass(el, 'hint__text')) {
        el.classList.toggle(ACTIVE_HINT_CLASS);
      }
    });
  }

  function openHintsOnClick() {
    eachElement(document.querySelectorAll(TRIGGERS_SELECTOR), function (el, i) {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        activateHintText(el)
      });
    });
  }

  function openHintsOnEnter() {
    eachElement(document.querySelectorAll(TRIGGERS_SELECTOR), function (el, i) {
      el.addEventListener('keydown', function (e) {
        if (e.keyCode === ENTER_KEYCODE) {
          e.preventDefault();
          activateHintText(el);
        }
      });
    });
  }

  function closeHintsOnClickAway() {
    var handleClick = function (e) {
      if (!hasClass(e.srcElement, 'icon-core-help')) {
        closeHints();
      }
    };

    document.body.addEventListener('click', handleClick);
    document.body.addEventListener('touchend', handleClick);
  }

  function closeHintsOnEscape() {
    document.body.addEventListener('keydown', function (e) {
      if (e.keyCode === ESC_KEYCODE) {
        closeHints()
      }
    });
  }

  function initHintExamples() {
    openHintsOnClick();
    openHintsOnEnter();
    closeHintsOnClickAway();
    closeHintsOnEscape();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHintExamples();
  });
})();
