function twoHighest(arr) {
  let result = arr.sort((a, b) => b -a)
  let final = [...new Set(result)]
  return final.slice(0,2)
}