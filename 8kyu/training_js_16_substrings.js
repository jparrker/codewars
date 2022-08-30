function cutIt(arr){
  let smallest = Math.min(...arr.map(word => word.length))
  return arr.map(item => item.slice(0,smallest))
}