import * as colors from '@tds/core-colours'

const theme = {
  colors,
  spacing: {
    buttons: {
      padding: '0rem 1rem',
    },
    Box: {
      '1': '2px',
      '2': 1,
    },
  },
  sizing: {
    buttons: {
      height: '40px',
      minWidth: '150px',
    },
    forms: {
      labelTextSize: 'small',
      Box1: {
        paddingWithFeedbackIcon: '0.25rem 0.75rem',
        paddingWithoutFeedbackIcon: '0.25rem 3rem 0.25rem 0.75rem',
      },
    },
  },
}

// theme.colors.colorPrimary = '#000'
const application = Object.assign({}, theme, {
  colors: { colorPrimary: '#000', colorWhite: '#fff' },
})

export default application
