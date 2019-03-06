/* eslint-disable import/prefer-default-export */
/*
By default, browsers outline links in their own way. (Chrome/Safari do a light blue outline, Firefox/IE do a dotted line, etc)
Firefox also uses the text color for the outline, causing it to be invisible for primary and secondary ButtonLinks.

So, reset the outlines to fix Firefox and use browser defaults.

Solution from here: https://stackoverflow.com/questions/7538771/what-is-webkit-focus-ring-color
*/

export const focusOutline = {
  ':focus': {
    // outline: 'dotted 1px Highlight', // TOOD: cannot have duplicate keys with style-objects.
    outline: 'auto 5px -webkit-focus-ring-color',
  },
}
