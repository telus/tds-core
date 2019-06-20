import { color } from '@tds/shared-typography'
import { noSpacing } from './spacing'
import { none } from './borders'
import { font } from './forms'

/* eslint-disable import/prefer-default-export */

export const noStyle = {
  ...noSpacing,
  ...none,
  ...font,
  ...color,
  appearance: 'none',
  background: 'none',
  boxShadow: 'none',
  cursor: 'pointer',
}
