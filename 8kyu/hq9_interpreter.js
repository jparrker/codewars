function HQ9(code) {
  let song = ''
  for (let i = 99; i > 2; i--) {
    song += `${i} bottles of beer on the wall, ${i} bottles of beer.
 Take one down and pass it around, ${i-1} bottles of beer on the wall.\n`
  }
   song += `2 bottles of beer on the wall, 2 bottles of beer.
 Take one down and pass it around, 1 bottle of beer on the wall.
 1 bottle of beer on the wall, 1 bottle of beer.
 Take one down and pass it around, no more bottles of beer on the wall.
 No more bottles of beer on the wall, no more bottles of beer.
 Go to the store and buy some more, 99 bottles of beer on the wall.`
   
 if (code == 'H') {
   return 'Hello World!'
 } else if (code == 'Q') {
   return code
 } else if (code == '9') {
   return song
 }
 }