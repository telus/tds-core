/* eslint-disable */

// From: https://reactjs.org/blog/2017/09/26/react-v16.0.html
// "React also depends on requestAnimationFrame (even in test environments). A simple shim for test environments would be:"

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}
