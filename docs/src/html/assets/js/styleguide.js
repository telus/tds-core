/**
 * A small collection of scripts used in the styleguide's example pages. These
 * are not part of the Thorium API.
 */

(function () {

  /**
   * Form hints example.
   */

  var TRIGGERS_SELECTOR = '.ex-page .tds-hint__trigger';
  var ACTIVE_HINT_CLASS = 'tds-hint--active';
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
      if (hasClass(el, 'tds-hint__text')) {
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
      if (!hasClass(e.srcElement, 'tds-hint__trigger')) {
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
  var HELLO_FORM;
  var HELLO_FIELD;
  var HELLO_INPUT;
  var HELLO_BTN;
  var RULES;

  function cacheStatesElements() {
    HELPER = document.getElementById('hello-world-description');
    HELLO_FORM = document.getElementById('greeting-form');
    HELLO_FIELD = document.getElementById('hello-world-field');
    HELLO_INPUT = document.getElementById('hello-world');
    HELLO_BTN = document.getElementById('greeting-button');
    RULES = document.querySelector('#hello-world-description > ul');
  }

  function resetHelper() {
    HELPER.setAttribute('class', 'tds-helper');
    RULES.setAttribute('class', 'tds-list tds-list--compact');
    [].forEach.call(RULES.children, function (child) {
      child.setAttribute('class', 'tds-list__item');
    });
  }

  function hideIcon(el) {
    el.setAttribute('class', 'tds-list__item tds-list__item--no-icon');
  }

  function showIcon(el) {
    el.setAttribute('class', 'tds-list__item');
  }

  function showAllIcons() {
    [].forEach.call(RULES.children, showIcon);
  }

  function setListMode(mode) {
    RULES.setAttribute('class', 'tds-list tds-list--compact ' + ((mode) ? 'tds-list--' + mode : ''));
  }

  function setHelperMode(mode) {
    HELPER.setAttribute('class', 'tds-helper' + ((mode) ? ' tds-helper--' + mode : ''));
  }

  function validateGreeting() {
    if (!HELLO_INPUT.value) {
      resetHelper();
      HELLO_INPUT.setAttribute('aria-invalid', true);
      return false;
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
      HELLO_INPUT.setAttribute('aria-invalid', true);
      HELLO_FIELD.setAttribute('class', 'tds-field tds-field--error');
      return false;
    } else {
      setListMode('checked');

      if (correct === 1) {
	setHelperMode();
	HELLO_INPUT.setAttribute('aria-invalid', true);
	HELLO_FIELD.setAttribute('class', 'tds-field');
	return false;
      } else if (correct === 2) {
	setHelperMode('success');
	HELLO_INPUT.setAttribute('aria-invalid', false);
	HELLO_FIELD.setAttribute('class', 'tds-field');
	return true;
      }
    }
  }

  function handleGreetingChange(e) {
    validateGreeting();
  }

  function handleSendGreeting(e) {
    e.preventDefault();

    if (!validateGreeting()) {
      HELLO_INPUT.focus();
    }
  }

  function resetShapeChoices() {
    [].forEach.call(document.querySelectorAll('.choice-states-example .tds-choice'), function (node) {
      if (!node.children[0].checked) {
	node.setAttribute('class', 'tds-choice');
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
      e.currentTarget.setAttribute('class', 'tds-choice tds-choice--error');
      e.target.setAttribute('aria-invalid', true);
    } else {
      e.currentTarget.setAttribute('class', 'tds-choice');
      e.target.setAttribute('aria-invalid', false);
    }
  }

  function initStatesExample() {
    cacheStatesElements();

    HELLO_FORM.addEventListener('submit', handleSendGreeting);
    HELLO_INPUT.addEventListener('keyup', validateGreeting);

    [].forEach.call(document.querySelectorAll('.choice-states-example .tds-choice'), function (node) {
      node.addEventListener('change', handleShapeChoice);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHintExamples();
    initStatesExample();
  });
})();
