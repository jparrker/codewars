function colorOf(r,g,b){
  let [red, green, blue] = [r.toString(16), g.toString(16), b.toString(16)]
  if(red.length < 2) red = '0'+red
  if(green.length < 2) green = '0'+green
  if(blue.length < 2) blue = '0'+blue
  return `#${red}${green}${blue}`
}
