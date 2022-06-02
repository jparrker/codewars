


function multiTable(number) {
  let result = []
  for(let i = 1; i <= 10; i++){
    result.push(`${i} * ${number} = ${number *i}`)
  } 
  return result.join('\n')
}