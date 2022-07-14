function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600)
  seconds = seconds - hours *3600
  hours = hours.toString().padStart(2, '0')
  let minutes = Math.floor(seconds/60)
  seconds = (seconds - minutes*60).toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')
  
  return `${hours}:${minutes}:${seconds}`
   }