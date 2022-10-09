function roundIt(n){
  if (n.toString().split('.')[0].length < n.toString().split('.')[1].length) {
    return Math.ceil(n)
  } else if (n.toString().split('.')[0].length > n.toString().split('.')[1].length) {
    return Math.floor(n)
  } else {
    return Math.round(n)
  }
  
}
