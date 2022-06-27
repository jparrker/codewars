function sameCase(a, b){
  if (!(a.match(/[a-z]/i)) || !(b.match(/[a-z]/i)))  {
    return -1
  } else if ((a + b) == (a + b).toUpperCase() || (a + b) == (a + b).toLowerCase()){
    return 1
  } else {
    return 0
  }
}