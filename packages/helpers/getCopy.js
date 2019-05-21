const getCopy = (dictionary, copy) => {
  if (typeof copy === 'string') {
    return dictionary[copy]
  }
  return copy
}

export default getCopy
