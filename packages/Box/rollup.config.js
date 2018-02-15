import configure from '../../config/rollup.config'

export default configure({
  input: './Box.jsx',
  external: '@tds/core-responsive',
})
