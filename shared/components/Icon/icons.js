const icons = {
  default: {
    fontFamily:
      "'TELUS Core Icons'" /* stylelint-disable-line font-family-no-missing-generic-family-keyword */,
    display: 'inline-block',
    fontWeight: 'normal',
    fontStyle: 'normal',
    speak: 'none',
    textDecoration: 'inherit',
    textTransform: 'none',
    textRendering: 'auto',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    lineHeight: 1,
    verticalAlign: 'middle',
  },
  caretDown: {
    '&::before': {
      content: "'\f105'",
    },
  },
  caretUp: {
    '&::before': {
      content: "'\f106'",
    },
  },
  checkmark: {
    '&::before': {
      content: "'\f101'",
    },
  },
  chevron: {
    '&::before': {
      content: "'\f107'",
    },
  },
  leftChevron: {
    '&::before': {
      content: "'\f107'",
      display: 'inline-block',
      transform: 'rotate(-180deg) translateY(1.5px)',
    },
  },
  exclamationPointCircle: {
    '&::before': {
      content: "'\f103'",
    },
  },
  expander: {
    '&::before': {
      content: "'\f113'",
    },
  },
  hamburger: {
    '&::before': {
      content: "'\f112'",
    },
  },
  location: {
    '&::before': {
      content: "'\f110'",
    },
  },
  minus: {
    '&::before': {
      content: "'\f109'",
    },
  },
  plus: {
    '&::before': {
      content: "'\f108'",
    },
  },
  questionMarkCircle: {
    '&::before': {
      content: "'\f102'",
    },
  },
  spyglass: {
    '&::before': {
      content: "'\f111'",
    },
  },
  times: {
    '&::before': {
      content: "'\f104'",
    },
  },
}
export default icons
