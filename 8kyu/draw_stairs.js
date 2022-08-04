function drawStairs(n) {
  let result = ''
  if(n == 1) {
    return "I"
  }
  for(let i=1; i < n; i++) {
    result += "I\n"
    for(let j=0; j < i; j++) {
      result += " "
    }
  }
  return result + 'I'
}