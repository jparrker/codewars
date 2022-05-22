// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let mass_index = weight / height **2
  return (mass_index <= 18.5) ? 'Underweight' :
  (mass_index <= 25.0) ? "Normal" : 
  (mass_index <= 30.0) ? "Overweight": "Obese"
  }