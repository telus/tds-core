/* eslint-disable import/prefer-default-export, consistent-return */
// TODO: write unit tests

export const componentWithName = passedName => {
  const checkProp = (props, propName, componentName) => {
    if (Array.isArray(props[propName])) {
      props[propName].forEach((_, index) => checkProp(props[propName], index, componentName))
    } else if (props[propName] && props[propName].type.name !== passedName) {
      throw new Error(
        `${componentName}: Component passed to \`${propName}\` prop should be ${passedName}`
      )
    }
  }

  const checkRequired = (props, propName, componentName) => {
    if (props[propName] === undefined) {
      throw new Error(
        `The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is ${
          props[propName]
        }.`
      )
    }
  }

  const createValidate = isRequired => {
    if (isRequired) {
      return (props, propName, componentName) => {
        checkProp(props, propName, componentName)
        checkRequired(props, propName, componentName)
      }
    }

    return checkProp
  }

  const validate = createValidate()
  validate.isRequired = createValidate(true)

  return validate
}
