function validateCode (code) {
  let numbers = /^[1-3]/
  return numbers.test(code)
}