function whoIsPaying(name){
  return name.length < 3 ? [name]: [name, name[0] + name[1]]
}