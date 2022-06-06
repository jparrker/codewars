// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){  
  const position = letter.charCodeAt(0) - 96
  return `Position of alphabet: ${position}`
}