const calibrations = require('./data.js')

// Takes in an array of obscured calibrations and
// returns their sum.
  // Input/ouput example:
  // ['19one7sev', '9vxfg']  -->  116 (result of 17 + 99)
function calculateSumOf(obscuredCalibrations) {
  return obscuredCalibrations.reduce((sum, calibration) => {
    return sum + unobscure(calibration)
  }, 0)
}

// Takes in a single obscured calibration and returns
// the correct two-digit number.
  // Input/ouput examples:
  // '19one7sev'  -->  17
  // '9vxfg'      -->  99
function unobscure(obscuredCalibration) {
  let firstNum = findFirstNumber(obscuredCalibration)
  let secondNum = findSecondNumber(obscuredCalibration)

  return Number(firstNum + secondNum)
}

function findFirstNumber(obscuredCalibration) {
  for (let i = 0; i < obscuredCalibration.length; i++) {
    const char = obscuredCalibration[i]
    const charAsNumber = Number(char)
    
    if (!Number.isNaN(charAsNumber)) {
      return char
    } 
  }
}

function findSecondNumber(obscuredCalibration) {
  const reversed = obscuredCalibration.split('').reverse().join('')

  for (let i = 0; i < reversed.length; i++) {
    const char = reversed[i]
    const charAsNumber = Number(char)
    
    if (!Number.isNaN(charAsNumber)) {
      return char
    }
  }
}

const calibrationSum = calculateSumOf(calibrations)

console.log('The solution to Part One is 54390:', calibrationSum)
