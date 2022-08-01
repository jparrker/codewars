function integrate(coefficient, exponent) {
  let result = coefficient / (exponent + 1)
  return `${result}x^${exponent+1}`
}