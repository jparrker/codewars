function charFreq(message) {
  let freq = {}
  for(let i = 0; i < message.length; i++) {
    let char = message.charAt(i)
    if(freq[char]) {
      freq[char]++
    }else {
      freq[char] = 1
    }
  }
   return freq
 }