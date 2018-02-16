import configure from '../../config/rollup.config'

export default configure({
  input: './Card.jsx',
  external: '@tds/core-box',
})
