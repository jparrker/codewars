class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives === 0) throw 'Error!'
    if(n === this.number) return true
    else {
      this.lives--
      return false
    }
  }
}