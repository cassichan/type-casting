// console.log('is working');
let num = 23
num = 45
// console.log(num)

const toText = String(num)
// console.log(toText)

const myString = '24'
const toNum = Number(myString)
// console.log(toNum)
//If tries to convert string with letters to number, will return NaN. can convert string with numbers into a number type.

//boolean to number
// console.log(Number(false))
// console.log(Number(true))

//boolean to string
const falseStr = String(false)
const trueStr = String(true)
// console.log(`first str ${falseStr} & second str ${trueStr}`)
//output -> first str false & second str true

const num2 = 2345
const numToString = num2.toString()
// console.log(`first str ${falseStr} & second str ${trueStr} & ${numToString}`)
//could also use .tostring()

//check type
const str = '23'
const strType = typeof(str)
// console.log(strType)

const num1 = 234
const numType = typeof(num1)
// console.log(numType)

/**** Booleans */

// console.log(true == true)
// console.log(true == 'true')
// console.log(3 == '3')
// //checks data type for above and returns true
// console.log(1 == true) 
// //above returns true (converts true to 1)
// console.log(true === 'true')

const checkNum = 100
// console.log(checkNum == true)

const checkNum2 = 7 + 1 +2.34
// console.log(checkNum2 === true)
// console.log(checkNum2 && true)
// console.log(checkNum2 && false)

// console.log(checkNum2 || false)
// console.log(undefined || false)
// console.log(null || nullNum || 'test' && true) //Returns true

/**Comparisons */

let isEqual = 78 < 90
isEqual = 78 <= 78
isEqual = 78 != 100
console.log(isEqual)


