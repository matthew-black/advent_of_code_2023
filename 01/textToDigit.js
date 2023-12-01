const digitStrings = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

const reversedDigitStrings = digitStrings
  .map((digit) => (
    digit.split('').reverse().join('')
  )
)

// Create a Map that looks something like:
  // {'zero' => 0, 'one' => 1, 'two' => 2, ...}
const digitMap = new Map()
digitStrings.forEach((digit, i) => {
  digitMap.set(digit, String(i))
})

// Create a Map that looks something like:
  // {'orez' => 0, 'eno' => 1, 'owt' => 2, ...}
const reversedDigitMap = new Map()
reversedDigitStrings.forEach((reversedDigit, i) => {
  reversedDigitMap.set(reversedDigit, String(i))
})

module.exports = {
  digitStrings,
  reversedDigitStrings,
  digitMap,
  reversedDigitMap
}
