import { arrayOf } from 'prop-types'

const createValidator = validators => {
  const validator = (props, propName, componentName, ...rest) => {
    if (props[propName] === undefined) {
      return null
    }
    const errors = validators
      .map(v => v(props, propName, componentName, ...rest))
      .filter(error => error)
    if (errors.length >= validators.length) {
      return new Error(`Invalid value supplied to ${propName} in ${componentName}.`)
    }
    return null
  }
  validator.isRequired = (props, propName, componentName, ...rest) => {
    if (props[propName] === undefined) {
      return new Error(
        `The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is ${
          props[propName]
        }.`
      )
    }
    const errors = validators
      .map(v => v(props, propName, componentName, ...rest))
      .filter(error => error)

    if (errors.length === validators.length) {
      return new Error(
        `Invalid value ${errors} supplied to required prop \`${propName}\` in \`${componentName}\`.`
      )
    }
    return null
  }
  return validator
}

const or = validators => {
  if (!Array.isArray(validators)) {
    throw new Error('2 or more validators are required to use or')
  }

  if (validators.length < 2) {
    throw new Error('2 or more validators are required to use or')
  }

  return createValidator([arrayOf(createValidator(validators)), ...validators])
}

export default or
