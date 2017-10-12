// DO NOT MODIFY THIS FILE. IT IS COPIED DIRECTLY FROM AN NPM PACKAGE

// This was copied from the element-closest polyfill: github.com/jonathantneal/closest
// This version does not attempt to polyfill `Element` because window.Element is not available server side. This version
// is less invasive.

const matches = (element, selector) => {
  const elements = (element.document || element.ownerDocument).querySelectorAll(selector)
  let index = 0

  while (elements[index] && elements[index] !== element) {
    index += 1
  }

  return Boolean(elements[index])
}

const closest = (element, selector) => {
  let currentElement = element

  while (currentElement && currentElement.nodeType === 1) {
    if (matches(currentElement, selector)) {
      return currentElement
    }

    currentElement = currentElement.parentNode
  }

  return null
}

export default closest
