const componentWithName = (passedName, checkDisplayName) => {
  if (typeof passedName !== 'string') {
    throw new Error('passedName must be a string')
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

    const testNameInObject = () =>
      typeof props[propName] === 'object' &&
      ((!checkDisplayName && props[propName].type.name !== passedName) ||
        (checkDisplayName && props[propName].type.displayName !== passedName))
    const testNameInFunction = () =>
      typeof props[propName] === 'function' &&
      ((!checkDisplayName && props[propName].name !== passedName) ||
        (checkDisplayName && props[propName].displayName !== passedName))

    if (
      (props[propName] &&
        typeof props[propName] !== 'object' &&
        typeof props[propName] !== 'function') ||
      testNameInObject() ||
      testNameInFunction()
    ) {
      return new Error(
        `${componentName}: Component passed to \`${propName}\` prop should be ${passedName}`
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

export default componentWithName
