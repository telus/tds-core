import { fontTelus } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'

export const inputHeight = {
  height: '3rem', // 48px
}

export const font = {
  fontFamily: fontTelus,
}

export const baseButton = {
  margin: 0,
  padding: '0 2rem',
  cursor: 'pointer',
  background: 'none',
  transition: 'background 0.2s',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: '3.25rem', // 52px
  ...media.from('md').css({
    display: 'inline-flex',
    width: 'auto',
    minWidth: '180px',
  }),
  // this is to fix the IE 11 bug to center text. For more info: https://github.com/philipwalton/flexbugs/issues/231
  '&:after': {
    content: `""`,
    minHeight: 'inherit',
    fontSize: 0,
  },
}
