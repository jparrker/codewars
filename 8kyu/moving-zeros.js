function moveZeros(array) {
  let placeholder = []
  let zeros = []
  
  for (let i = 0; i < array.length; i++) {
    array[i] === 0 ? zeros.push(array[i]) : placeholder.push(array[i])
   
  }
  return ([...placeholder,...zeros])
 }