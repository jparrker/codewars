let ops = {
  "AND": (a, b) => a && b,
  "OR": (a, b) => a || b,
  "XOR": (a, b) => a !== b
}

function logicalCalc(array, op){
return array.reduce(ops[op])
}

//loop solution

function calcLoop(array, op) {
  let result = array[0]
  for(let i = 0; i < array.length; i++) {
    if(op =="AND") result = result && array[i]
    if(op =="OR") result = result || array[i]
    if(op == "XOR") result = result != array[i]
  }

  return result
}