module.exports = arr => {
  return arr.length === 1 ? arr[0] : `{${arr.join(',')}}`
}
