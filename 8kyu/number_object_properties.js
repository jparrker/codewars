function whatNumberIsIt(n){
  switch (n) {
      case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE"
      case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE";
      case isNaN():return "Input number is Number.NaN"
      case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY"
      case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY"
     
  }
  return isNaN(n) ? 'Input number is Number.NaN' : 'Input number is ' + n
  
}