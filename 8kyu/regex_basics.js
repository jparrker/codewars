String.prototype.digit = function() {
  //^ = starts with; $ = ends with; [0-9]
  return  /^[0-9]$/.test(this)
};