const sanitize = text => text.toLowerCase().replace(/ /g, '-')

const generateId = (...choices) => {
  const id = sanitize(choices.find(choice => choice))

  return {
    identity: () => id,
    postfix: value => `${id}_${sanitize(value)}`
  }
}

export default generateId
