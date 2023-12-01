const calibrations = require('./data.js')
const { digitStrings,
        digitMap,
        reversedDigitStrings,
        reversedDigitMap } = require('./textToDigit.js')

// Uncomment 👇 this to peek at the data structures
// that facilitate my solution for dealing with the
// increased complexity of the findFirstNumber and
// findSecondNumber functions:
// console.log(
//   'Important stuff imported from textToDigit.js:',
//   {
//     digitStrings,
//     digitMap,
//     reversedDigitStrings,
//     reversedDigitMap
//   }
// )

function calculateSumOf(calibrations) {
  return calibrations.reduce((sum, calibration) => (sum + unobscure(calibration)), 0)
}

function unobscure(calibration) {
  const firstNum = findFirstNumber(calibration)
  const secondNum = findSecondNumber(calibration)

  return Number(`${firstNum}${secondNum}`)
}

function findFirstNumber(calibration) {
  let charsSeen = ''

  for (let char of calibration) {
    const charAsNumber = Number(char)
    
    // If char is a number, return it:
    if (!Number.isNaN(charAsNumber)) {
      return char
    } 

    // The current value of char is not a number, so
    // we add it to the charsSeen string:
    charsSeen += char
    
    // Next, we need to check and see if the
    // history of letters we've seen includes
    // a digit. The shortest digits are three
    // characters, so we needn't waste time
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

function findSecondNumber(calibration) {
  let charsSeen = ''

  const reversed = calibration.split('').reverse().join('')

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
