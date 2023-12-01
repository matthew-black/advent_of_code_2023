const calibrations = require('./data.js')
const { digitStrings,
        reversedDigitStrings,
        digitMap,
        reversedDigitMap } = require('./textToDigit.js')


function calculateSumOf(obscuredCalibrations) {
  return obscuredCalibrations.reduce((sum, calibration) => {
    return sum + unobscure(calibration)
  }, 0)
}

function unobscure(obscuredCalibration) {
  let firstNum = findFirstNumber(obscuredCalibration)
  let secondNum = findSecondNumber(obscuredCalibration)

  return Number(firstNum + secondNum)
}

function findFirstNumber(obscuredCalibration) {
  let charsSeen = ''

  for (let char of obscuredCalibration) {
    const charAsNumber = Number(char)
    
    // If char is a number, return it!
    if (!Number.isNaN(charAsNumber)) {
      return char
    } 

    // Else: charsSeen += char.
    charsSeen += char
    // Then, we need to check and see if the
    // history of letters we've seen constitutes
    // a digit. The shortest digits are three
    // characters, so we shouldn't waste time
    // checking until charsSeen.length is >= 3.
    if (charsSeen.length >= 3) {
      for (let digitString of digitStrings) {
        if (charsSeen.includes(digitString)) {
          return digitMap.get(digitString)
        }
      }
    }
  }
}

function findSecondNumber(obscuredCalibration) {
  const reversed = obscuredCalibration.split('').reverse().join('')

  let charsSeen = ''

  for (let char of reversed) {
    const charAsNumber = Number(char)
    
    if (!Number.isNaN(charAsNumber)) {
      return char
    } 

    charsSeen += char

    if (charsSeen.length >= 3) {
      for (let digitString of reversedDigitStrings) {
        if (charsSeen.includes(digitString)) {
          return reversedDigitMap.get(digitString)
        }
      }
    }
  }
}

const calibrationSum = calculateSumOf(calibrations)

console.log('The solution to Part Two is 54277:', calibrationSum)
