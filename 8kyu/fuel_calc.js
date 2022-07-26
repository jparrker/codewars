function fuelPrice(litres, pricePerLitre) {
  if (litres >= 10) {
    return +((litres*(pricePerLitre-.25)).toFixed(2))
  } else if (litres >= 8) {
    return +((litres*(pricePerLitre-.2)).toFixed(2))
  } else if (litres >= 6) {
    return +((litres*(pricePerLitre-.15)).toFixed(2))
  } else if (litres >= 4) {
    return +((litres*(pricePerLitre-.1)).toFixed(2))
  } else if (litres >= 2) {
    return +((litres*(pricePerLitre-.05)).toFixed(2))
  } else {
    return +(litres*pricePerLitre.toFixed(2))
  }
}