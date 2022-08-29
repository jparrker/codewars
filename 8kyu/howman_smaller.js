
function howManySmaller(arr,n){
  let result = arr.map( num => num.toFixed(2))
  return result.filter(num => num < n).length
  
}
