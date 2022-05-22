function stringClean(s){
  return s.split("").map((item) => (isNaN(item) || (item ==' ')) ? item : "").join("")
}
