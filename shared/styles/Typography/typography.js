import { colours } from '@tds/core-colours/colours.js'

const variables = {
  fontTelus: 'TELUS-Web, Helvetica Neue, Helvetica, Arial, sansSerif',
  fontIcons: 'TELUS Core Icons',
  fontSizeBase: '100%',
}

const mixins = {
  helveticaNeueThin35: {
    fontWeight: 300,
  },

  helveticaNeueLight45: {
    fontWeight: 400,
  },

  helveticaNeueRoman55: {
    fontWeight: 500,
  },

  helveticaNeueMedium65: {
    fontWeight: 700,
  },

  sizeSmall: {
    fontSize: '0.875rem',
    letterSpacing: -0.6,
    lineHeight: 1.42857,
  },

  sizeMedium: {
    fontSize: '1rem',
    letterSpacing: -0.8,
    lineHeight: 1.5,
  },

  sizeLarge: {
    fontSize: '1.25rem',
    letterSpacing: -1,
    lineHeight: 1.6,
  },
}

// classes
const wordBreak = {
  wordWrap: 'break-word',
}

const baseSupSubScripts = {
  position: 'relative',
  verticalAlign: 'baseline',
  paddingLeft: '0.1em',
}

const sup = {
  ...baseSupSubScripts,
  top: '-0.5em',
  fontSize: '0.875rem',
}

const base = {
  ...wordBreak,

  fontSize: 'inherit',
}

const baseFont = {
  fontWeight: 'inherit',
}

const small = {
  ...wordBreak,

  ...mixins.sizeSmall,
}

const smallFont = {
  ...mixins.helveticaNeueRoman55,
}

const medium = {
  ...wordBreak,

  ...mixins.sizeMedium,
}

const mediumFont = {
  ...mixins.helveticaNeueLight45,
}

const large = {
  ...wordBreak,

  ...mixins.sizeLarge,
}

const largeFont = {
  ...wordBreak,

  ...mixins.helveticaNeueLight45,
}

const boldFont = {
  ...wordBreak,

  ...mixins.helveticaNeueMedium65,
}

const color = {
  color: colours.colorText,
}

const invertedColor = {
  color: colours.colorWhite,
}

const inheritColor = {
  color: 'inherit',
}

const blockText = {
  display: 'block',
}

export const typography = {
  fontTelus: variables.fontTelus,
  fontIcons: variables.fontIcons,

  fontSizeBase: variables.fontSizeBase,

  helveticaNeueThin35: mixins.helveticaNeueThin35,

  helveticaNeueLight45: mixins.helveticaNeueLight45,

  helveticaNeueRoman55: mixins.helveticaNeueRoman55,

  helveticaNeueMedium65: mixins.helveticaNeueMedium65,

  sizeSmall: mixins.sizeSmall,

  sizeMedium: mixins.sizeMedium,

  sizeLarge: mixins.sizeLarge,

  wordBreak: wordBreak,

  baseSupSubScripts: baseSupSubScripts,

  sup: sup,

  base: base,

  baseFont: baseFont,

  small: small,

  smallFont: smallFont,

  medium: medium,

  mediumFont: mediumFont,

  large: large,

  largeFont: largeFont,

  boldFont: boldFont,

  color: color,

  invertedColor: invertedColor,

  inheritColor: inheritColor,

  blockText: blockText,
}
