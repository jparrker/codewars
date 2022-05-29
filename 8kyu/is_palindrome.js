
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  let result = x.toLowerCase()
  return result.split("").reverse().join("") === result
}