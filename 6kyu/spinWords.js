function spinWords(string) {
  let arr = string.split(" ");
  let result = "";
  arr.map((str, index) => {
    if (str.length >= 5) {
      arr[index] = str.split("").reverse().join("");
    } else {
      arr[index] = str;
    }
    result = arr.join(" ");
  });
  return result;
}
