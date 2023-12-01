const calibrations = require('./data.js')


// Takes in an array of obscured calibrations and
// returns their sum.
  // Input/ouput example:
  // ['19one7sev', '9vxfg']  -->  116 (result of 17 + 99)
function calculateSumOf(calibrations) {
  return calibrations.reduce((sum, calibration) => (sum + unobscure(calibration)), 0)
}

// Takes in a single obscured calibration and returns
// the correct two-digit number.
  // Input/ouput examples:
  // '19one7sev'  -->  17
  // '9vxfg'      -->  99
function unobscure(calibration) {
  const firstNum = findFirstNumber(calibration)
  const secondNum = findSecondNumber(calibration)

  return Number(`${firstNum}${secondNum}`)
}

// Takes in a single obscured calibration and returns
// the first character that is a number.
  // Input/ouput examples:
  // '19one7sev'  -->  '1'
  // '9vxfg'      -->  '9'
function findFirstNumber(calibration) {
  for (const char of calibration) {
    if (!Number.isNaN(Number(char))) {
      return char
    } 
  }
}

// Takes in a single obscured calibration and returns
// the final character that is a number.
  // Input/ouput examples:
  // '19one7sev'  -->  '7'
  // '9vxfg'      -->  '9'
function findSecondNumber(calibration) {
  const reversedCalibration = calibration.split('').reverse().join('')

  for (const char of reversedCalibration) {
    if (!Number.isNaN(Number(char))) {
      return char
    }
  }
}


const calibrationSum = calculateSumOf(calibrations)
console.log('The solution to Part One is 54390:', calibrationSum)
