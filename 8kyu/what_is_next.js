function nextItem(xs, item) {
  let arr = xs[Symbol.iterator]()
  for(let el of arr) 
    if(el == item) 
      return  arr.next().value 
  
}