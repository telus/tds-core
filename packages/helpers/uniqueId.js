// Taken from lodash: https://github.com/lodash/lodash/blob/master/uniqueId.js

let idCounter = 0

const uniqueId = prefix => {
  const id = ++idCounter // eslint-disable-line no-plusplus
  return `${prefix}${id}`
}

export default uniqueId
