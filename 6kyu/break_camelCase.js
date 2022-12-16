// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  return string.split("").reduce((acc, elem) => {
    elem === elem.toUpperCase() ? acc.push(" ") : null
    acc.push(elem)
    return acc
  }, []).join("")
}
