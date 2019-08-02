let idCounter = 0

const uniqueId = prefix => {
  const id = ++idCounter // eslint-disable-line no-plusplus
  return `${prefix}-${id}`
}

export default uniqueId
