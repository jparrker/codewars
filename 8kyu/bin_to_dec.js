// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

// SOLUTION:

function arr2bin(arr){
 return arr.reduce((x, y) => typeof(y)  === "number" ? x + y : x, 0).toString(2)
}
