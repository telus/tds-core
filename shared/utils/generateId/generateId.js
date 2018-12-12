import find from 'array-find-es6'

const sanitize = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')

const generateId = (...choices) => {
  const id = sanitize(find(choices, choice => choice))

  return {
    identity: () => id,
    postfix: value => `${id}_${sanitize(value)}`,
  }
}

export default generateId
