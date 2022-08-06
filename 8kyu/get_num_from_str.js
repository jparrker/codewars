function getNumberFromString(s) {
  let num =  s.match(/\d/g).join("")
  return +num
}