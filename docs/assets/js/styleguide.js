/**
 * A small collection of scripts used in the styleguide's example pages. These
 * are not part of the Thorium API.
 */

(function () {
  var TRIGGERS_SELECTOR = '.ex-page .hint__trigger';
  var ACTIVE_HINT_CLASS = 'hint--active';
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  function eachElement(nodeList, callback) {
    Array.prototype.forEach.call(nodeList, callback);
  }

  function hasClass(el, className) {
    return (el.classList && el.classList.contains(className));
  }

  function closeHints() {
    eachElement(document.querySelectorAll('.hint'), function (el, i) {
      el.classList.remove(ACTIVE_HINT_CLASS);
    });
  }

  function toggleHint(hint) {
    var active = hint.classList.toggle(ACTIVE_HINT_CLASS);

    eachElement(hint.childNodes, function(el, i) {
      if (hasClass(el, 'hint__text')) {
        el.setAttribute('aria-hidden', !active);
      }
    });
  }

  function openHintsOnClick() {
    eachElement(document.querySelectorAll(TRIGGERS_SELECTOR), function (el, i) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        toggleHint(el.parentNode)
      });
    });
  }

  function openHintsOnEnter() {
    eachElement(document.querySelectorAll(TRIGGERS_SELECTOR), function (el, i) {
      el.addEventListener('keydown', function (e) {
        if (e.keyCode === ENTER_KEYCODE) {
          e.preventDefault();
          toggleHint(el.parentNode);
        }
      });
    });
  }

  function closeHintsOnClickAway() {
    var handleClick = function (e) {
      if (!hasClass(e.srcElement, 'hint__trigger')) {
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

  function handleSendGreeting(e) {
    e.preventDefault();

    var input = document.getElementById('hello-world');
    var instructions = document.querySelector('#hello-world-description > ul');
    var fieldClass = "field field--error";
    var helperClass = "helper helper--error";
    var ulClass = "list-error";

    if (input.value === "Hello, World!") {
      fieldClass = "field";
      helperClass = "helper helper--success";
      ulClass = "list-checked";
    }

    document.getElementById('hello-world-field').setAttribute('class', fieldClass);
    document.getElementById('hello-world-description').setAttribute('class', helperClass);
    instructions.setAttribute('class', ulClass);
    [].forEach.call(instructions.children, function (child) {
      child.setAttribute('class', ulClass + '__item');
    });
  }

  function initStatesExample() {
    var btn =  document.getElementById('greeting-button');

    btn.addEventListener('click', handleSendGreeting);
    btn.addEventListener('touchend', handleSendGreeting);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHintExamples();
    initStatesExample();
  });
})();
