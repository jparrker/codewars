

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((acc, c) => acc+c, 0) / classPoints.length 
  return yourPoints > average
}