

function datingRange(age){
  let [min, max] = [0]
  if (age <= 14) {
    min = (age - 0.10 * age)
    max = (age + 0.10 * age)
  }else {
  	min = (age/2) + 7
     max = (age - 7) * 2
  }
  return `${Math.floor(min)}-${Math.floor(max)}`
}
