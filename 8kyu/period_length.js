function periodIsLate(last, today, cycleLength){
  let diff_time = today.getTime() - last.getTime()
  let diff_days = diff_time / (1000 * 3600 *24)
  return diff_days > cycleLength
}