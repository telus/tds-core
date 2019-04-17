/* eslint-disable import/prefer-default-export */

export const nestedListSpacing = {
  '&': {
    paddingLeft: '3rem',
  },

  '& &': {
    marginTop: '1rem',
    marginBottom: '0.5rem',
  },

  '& :last-child &': {
    marginBottom: 0,
  },
}
