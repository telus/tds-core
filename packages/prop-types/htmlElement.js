const htmlElement = element => {
  if (typeof element !== 'string') {
    throw new Error('element must be a string')
  }

  const checkProp = (props, propName, componentName) => {
    if (typeof props[propName] === 'undefined' || props[propName] === null) {
      return undefined
    }

    if (Array.isArray(props[propName])) {
      // Iterates through every child and try to find the first element that does not match the passed name
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
      return props[propName]
        .map((_, index) => checkProp(props[propName], index, componentName))
        .find(Boolean)
    }

    if (typeof props[propName] === 'object' && typeof props[propName].type === 'string') {
      if (props[propName].type === element) {
        return undefined
      }

      return new Error(
        `${componentName}: Expected \`${propName}\` to be an HTML \`<${element}>\` tag`
      )
    }
    return undefined
  }

  const checkRequired = (props, propName, componentName) => {
    if (props[propName] === undefined) {
      return new Error(
        `The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is ${
          props[propName]
        }.`
      )
    }
    return undefined
  }

  const createValidate = isRequired => {
    if (isRequired) {
      return (props, propName, componentName) => {
        const checkForError = checkProp(props, propName, componentName)
        if (checkForError) {
          return checkForError
        }

        return checkRequired(props, propName, componentName)
      }
    }

    return checkProp
  }

  const validate = createValidate()
  validate.isRequired = createValidate(true)
  return validate
}

export default htmlElement
