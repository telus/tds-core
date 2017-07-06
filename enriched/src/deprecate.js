/* eslint-disable import/prefer-default-export */

export const warn = (componentName, message) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.log(`[TDS] [Deprecate] ${componentName}: ${message}`); // eslint-disable-line no-console
};
