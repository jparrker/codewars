
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7


var findAverage = function (nums) {
  return nums.reduce((acc, c) => acc + c, 0) / nums.length
}