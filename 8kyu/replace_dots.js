
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


var replaceDots = function(str) {
  // '.' will match the first word in the string. need to escape with \ to skip that.
  return str.replace(/\./g, '-');
}