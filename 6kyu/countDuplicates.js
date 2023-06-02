function duplicateCount(text) {
  //using a hashmap
  //if not in hashmap, add it and set val to 1.
  //if already in map, +1
  let letterMap = {};
  let count = 0;
  for (let i of text) {
    i = i.toLowerCase(); //must be case insensitive
    if (!letterMap[i]) {
      letterMap[i] = 1;
    } else {
      letterMap[i]++;
    }
  }

  for (let i in letterMap) {
    if (letterMap[i] > 1) {
      count++;
    }
  }
  return count;
}
