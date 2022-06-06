// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true




function arrayMadness(a, b) {
  const sumSquares = a.reduce((acc, c) => acc += c **2, 1)
  const sumCubes = b.reduce((acc, c) => acc += c **3, 1)
  
  return sumSquares > sumCubes
}