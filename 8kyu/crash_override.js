function aliasGen(first, last){
  if (!first[0].match(/[a-z]/i) || !last[0].match(/[a-z]/i)) return 'Your name must start with a letter from A - Z.'
  return firstName[first[0].toUpperCase()] + ' ' + surname[last[0].toUpperCase()]
}