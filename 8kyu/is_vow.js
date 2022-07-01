function isVow(a){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return a.map(item => vowels.includes(String.fromCharCode(item)) ? String.fromCharCode(item) : item )
  }