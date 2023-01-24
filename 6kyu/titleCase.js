function titleCase(title, minorWords) {
  if (title == "") return title;
  if (minorWords == undefined) minorWords = "";
  result = [];
  let minArr = minorWords.toLowerCase().split(" ");

  let titleArr = title.toLowerCase().split(" ");

  for (let i = 0; i < titleArr.length; i++) {
    if (!minArr.includes(titleArr[i]) || i == 0) {
      result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1));
      continue;
    }
    result.push(titleArr[i]);
  }
  return result.join(" ");
}

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
