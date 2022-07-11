function cookie(x){
  const type = typeof x
  const who =  (type === 'number') ? "Monica!" : (type === 'string') ? "Zach!" : "dog!"
  
  return `Who at the last cookie? It was ${who}!`
}