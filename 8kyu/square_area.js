
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.


function squareArea(A){
  let arc = A / (2 * Math.PI * (90 / 360));
  let area = Math.pow(arc, 2);
  return +area.toFixed(2)
}