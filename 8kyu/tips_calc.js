// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

function calculateTip(amount, rating) {
  let tip = 0
 switch (rating.toLowerCase()) {
     case 'terrible' :
      tip = 0
      break;
     case 'poor':
      tip = .05
      break;
     case 'good':
      tip = .1
      break;
     case 'great':
      tip = .15
      break;
     case 'excellent':
       tip = .2
      break;
     default:
      return "Rating not recognised"
 }
  return Math.ceil(tip * amount)
}
