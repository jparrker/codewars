function uniTotal(str) {
  return [...str].reduce((acc, c) => acc + c.charCodeAt(0), 0);
}