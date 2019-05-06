/* eslint-disable import/prefer-default-export */

export const base = {
  '&': {
    paddingLeft: '3rem',
  },

  '& &': {
    marginTop: '1rem',
    marginBottom: '0.5rem',
  },
}

export const nestedListSpacing = {
  ...base,

  '& :last-child &': {
    marginBottom: 0,
  },
}
