/* eslint-disable import/prefer-default-export */
export const flexMain = {
  'html, body': {
    height: '100%',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
  },
  'body > main': {
    flex: '1 0 auto',
  },
}
