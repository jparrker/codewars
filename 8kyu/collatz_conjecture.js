let hotpo = function(n){
    let count = 0
    while(n !==1) {
      count++
      n = (n % 2) ? 3 * n + 1 : n/2
    }
  return count
}