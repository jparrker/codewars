function sc(floor){
  let str = ''
  for (let i = 1; i<floor; i++) {
    str += 'Aa~ '
  }
  return (floor <=1) ? "" : (floor <= 6) ? str += 'Pa! Aa!' : str += 'Pa!'
}
