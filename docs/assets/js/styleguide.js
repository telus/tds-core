/**
 * A small collection of scripts used in the styleguide's example pages. These
 * are not part of the Thorium API.
 */

(function () {

  /**
   * Form hints example.
   */

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

  /**
   * Form states example
   */

  var HELPER;
  var HELLO_INPUT;
  var HELLO_BTN;
  var RULES;

  function cacheStatesElements() {
    HELPER = document.getElementById('hello-world-description');
    HELLO_INPUT = document.getElementById('hello-world');
    HELLO_BTN = document.getElementById('greeting-button');
    RULES = document.querySelector('#hello-world-description > ul');
  }

  function resetHelper() {
    HELPER.setAttribute('class', 'helper');
    RULES.setAttribute('class', 'list list--compact');
    [].forEach.call(RULES.children, function (child) {
      child.setAttribute('class', 'list__item');
    });
  }

  function hideIcon(el) {
    el.setAttribute('class', 'list__item list__item--no-icon');
  }

  function showIcon(el) {
    el.setAttribute('class', 'list__item');
  }

  function showAllIcons() {
    [].forEach.call(RULES.children, showIcon);
  }

  function setListMode(mode) {
    RULES.setAttribute('class', 'list list--compact ' + ((mode) ? 'list--' + mode : ''));
  }

  function setHelperMode(mode) {
    HELPER.setAttribute('class', 'helper' + ((mode) ? ' helper--' + mode : ''));
  }

  function validateGreeting() {
    if (!HELLO_INPUT.value) {
      resetHelper();
      return;
    }

    var correct = 0;

    if (HELLO_INPUT.value.indexOf('Hello, World!') !== -1) {
      correct++;
      showIcon(RULES.children[0]);
    } else {
      hideIcon(RULES.children[0]);
    }

    if (HELLO_INPUT.value.indexOf('"') === -1) {
      correct++;
      showIcon(RULES.children[1]);
    } else {
      hideIcon(RULES.children[1]);
    }

    if (correct == 0) {
      setHelperMode('error');
      setListMode('error');
      showAllIcons();
    } else {
      setListMode('checked');

      if (correct === 1) {
        setHelperMode();
      } else if (correct === 2) {
        setHelperMode('success');
      }
    }
  }

  function handleSendGreeting(e) {
    e.preventDefault();

    validateGreeting();
  }

  function resetShapeChoices() {
    [].forEach.call(document.querySelectorAll('.choice-states-example .choice'), function (node) {
      if (!node.children[0].checked) {
        node.setAttribute('class', 'choice');
      }
    });
  }

  function handleShapeChoice(e) {
    resetShapeChoices();

    var answers = {
      'ten-sided-shape': ['decagon'],
      'four-sided-shape': ['pentagon', 'square']
    };

    if (answers[e.target.name].indexOf(e.target.value) === -1 && e.target.checked) {
      e.currentTarget.setAttribute('class', 'choice choice--error');
    } else {
      e.currentTarget.setAttribute('class', 'choice');
    }
  }

  function initStatesExample() {
    cacheStatesElements();

    HELLO_BTN.addEventListener('click', handleSendGreeting);
    HELLO_BTN.addEventListener('touchend', handleSendGreeting);
    HELLO_INPUT.addEventListener('keyup', validateGreeting);

    [].forEach.call(document.querySelectorAll('.choice-states-example .choice'), function (node) {
      node.addEventListener('change', handleShapeChoice);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHintExamples();
    initStatesExample();
  });
})();
