function digitalRoot(n) {
  let sum = n;
  if (!n) sum = 0;
  while (sum > 9) {
    let nums = sum.toString().split("");
    sum = nums.reduce((a, b) => Number(a) + Number(b));
  }
  return sum;
}
