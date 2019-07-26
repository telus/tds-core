import { colorWhite, colorText } from '@tds/core-colours'
import { fontTelus, helveticaNeueLight45 } from '@tds/shared-typography'

const globals = {
  '*': {
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',

    // only OS X
    '-moz-osx-font-smoothing': 'grayscale',

    // we put this here to overcome webkit bug when doing -webkit-transforms
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',

    font: 'inherit',
    letterSpacing: '-0.8px',

    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  },

  html: {
    ...helveticaNeueLight45,
    fontFamily: fontTelus,
    fontSize: '100%',
    fontKerning: 'normal',
  },

  body: {
    backgroundColor: colorWhite,
    color: colorText,
    lineHeight: '1.5',
  },
}

export default globals
