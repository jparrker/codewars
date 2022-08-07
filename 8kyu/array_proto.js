Array.prototype.filter = function (func) {
  let result = []
  for(let i = 0; i < this.length; i++){
    //if item meets the test provided by the callback push to result arr
    if(func(this[i])) {
      result.push(this[i])
    }
  }
  return result
}
