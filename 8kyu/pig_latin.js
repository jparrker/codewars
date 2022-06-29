function pigIt(str){
  let marks = [".", "!", "?", '""',","]
  let result = str.split(" ").map(word => word.slice(1) + word[0] + (marks.includes(word) ? "" : 'ay'))
  return result.join(" ")
}