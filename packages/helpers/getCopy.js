const getCopy = (dictionary, copy) => {
  if (typeof copy === 'undefined' || copy === null) {
    return {}
  }
  if (typeof copy === 'string') {
    return dictionary[copy]
  }
  return copy
}

export default getCopy
