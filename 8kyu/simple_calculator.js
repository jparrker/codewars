

function calculator(a,b,sign){
  if (isNaN(a) || isNaN(b)){
    return 'unknown value'
  }
  let operations = ["+", "/", "-", "*"]
  if(!operations.includes(sign)){
    return "unknown value"
  }
  return (sign === '+') ? a + b: (sign === "-") ? a -b : (sign === "/")? a / b : a * b
}