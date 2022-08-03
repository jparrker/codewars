function padIt(str,n){
  let count = 0
  while (count < n){
    str = (count %2 === 0) ? "*" + str : str + "*"
    count++
  }
  return str
}