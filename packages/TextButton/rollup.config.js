import configure from '../../config/rollup.config'
import { dependencies } from './package.json'

export default configure({
  input: './TextButton.jsx',
  dependencies,
})
