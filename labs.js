// LAB 1 - What number's bigger?
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// let num1 = 4
// let num2 = 1

// const greaterNum = (num1, num2) => {
//     if (num1 > num2) {
//         return num1
//     } else if (num2 > num1) {
//         return num2
//     } else {
//         return ('The two numbers are equal')
//     }
// }
// const largestNum = greaterNum (num1, num2)
// console.log(`The greater number of ${num1} and ${num2} is ${largestNum}`)





// console.log(greaterNum(4,2)) -> logs function output but not the requested string
// console.log(greaterNum(1,3))
// console.log(greaterNum(2,2))





// LAB 2 - The World Translator
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// const helloWorld = (language) => {
//     let greeting = ""

//     switch(language) {
//         case "fr":
//             greeting = "Bonjour le monde"
//             break;
//         case "es":
//             greeting = "Hola, Mundo"
//             break;
//         case "it":
//             greeting = "Ciao Mondo"
//             break;
//         default:
//             greeting = "Hello, World"
//     }
//     return greeting
// }
// console.log(helloWorld("fr"))
// console.log(helloWorld("es"))
// console.log(helloWorld("it"))





// LAB 3 - The Grade Assigner
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// const assignGrade = (numberScore) => {
//     switch (numberScore) {
//         case 1:
//             return "A"
//             break;
//         case 2:
//             return "B"
//             break;
//         case 3:
//             return "C"
//             break;
//         case 4:
//             return "D"
//             break;
//         case 5:
//             return "F"
//             break;
//     }
// }
// console.log(assignGrade(1))
// console.log(assignGrade(5))

// function assignGradeAgain(gradeNumber) {
//     let gradeNumber = "F"

//     if (gradeNumber >= 90) {
//         gradeNumber = "A"
//     } else if (gradeNumber >= 80) {
//         gradeNumber = "B"
//     } else if (gradeNumber >= 70) {
//         gradeNumber = "C"
//     }
//     return gradeNumber
// }

// console.log(assignGradeAgain(80))

// LAB 4 -  The Pluralizer
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


const pluralize = (noun, number) => {
    return number + " " + noun + 's'
}

console.log(pluralize("cat", 6))
console.log(pluralize("dog",4))


// / LAB 5 - Check if input variable is a number or not
// // Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function. Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp.
// // Print "Variable is not a number" if isNaN() returns true.
// // Else print "Variable is a valid number" if isNaN() returns false.

const isNumber = (number) => {
if (isNaN(number)) {
    return "Variable is not a number";
} else {
    return "Variable is a valid number";
}
}
console.log(isNumber("hi"));
console.log(isNumber(5));





// LAB 6 - Find the largest of two number
// Function `findLargest()` finds the largest between two number by using ">" and "=" operator in JavaScript.
// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.


const findLargest = (num1, num2) => {
    if (num1 > num2) {
        return `${num1} is the largest`;
    } else if (num1 < num2) {
        return `${num2} is the largest`;
    } else {
        return `${num1} and ${num2} are equal`
    }
}
console.log(findLargest(10,9));





// LAB 7 - Find the largest of three number
// Function `findLargest()` finds the largest of three number by using ">" and "&&" operator in JavaScript.
// Print num1 is the largest if num1>num2 and num1>num3. 
// Print num2 is the largest if num2<num3. (meant to write if num2 > num3 && num2 > num1?)
// Else print num3.

const findLargestAgain = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is the largest`;
    } else if (num2 > num3 && num2 > num1) {
        return `${num2} is the largest`;
    } else {
        return `${num3} is the largest`;
    }
}
console.log(findLargestAgain(12, 5, 10)); //printing both 12, and 10- why?
console.log(findLargestAgain(2, 40, 11));
console.log(findLargestAgain(13, 7, 39));

// LAB 8 - Find the a number is present in given range
// Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.
// Print "Between the range" if num is between start and end values
// Else Print "Outside the range" since num is outside start and end values.

let start = 1;
let end = 10;
const checkInRange = (num) => {
    if (num >= start && num <= 10) {
        return "Between the range";
    } else {
        return "Outside the range";
    }
}

console.log(checkInRange(9));
console.log(checkInRange(1));
console.log(checkInRange(11));


// LAB 9 - Perform arithmetic operations on two numbers
// Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
// Print result of num1+num2 if operation is "add"
// Print result of num1-num2 if operation is "subtract"
// Print result of num1*num2 if operation is "multiply"
// Print result of num1/num2 if operation is "divide"
// Print result of num1%num2 if operation is "modulus"
// Else print "Invalid operation"

let num1 = 8;
let num2 = 2;

const evalNumbers = (operation) => {
    switch (operation) {
        case "add":
            return num1 + num2
            break;
            case "subtract":
            return num1 - num2
            break;
            case "multiply":
            return num1 * num2
            break;
            case "divide":
            return num1 / num2
            break;
            case "modulus":
            return num1 % num2
            break;
            default:
                return "Invalid operation";
    }
}

console.log(evalNumbers("multiply"));
console.log(evalNumbers("divide"));
console.log(evalNumbers("stareat"));


// LAB 10 - Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print "S grade" if marks is between 90 and 100.
// Print "A grade" if marks is between 80 and 90.
// Print "B grade" if marks is between 70 and 80.
// Print "C grade" if marks is between 60 and 70.
// Print "D grade" if marks is between 50 and 60.
// Print "E grade" if marks is between 40 and 50.
// Print "Student has failed" if marks is between 0 and 40.
// Else print "Invalid marks".


const findGrade = (gradeNumber) => {
    if (gradeNumber >= 90 && gradeNumber <= 100) {
        gradeNumber = "S grade";
    } else if (gradeNumber >= 80 && gradeNumber < 90) {
        gradeNumber = "A grade";
    } else if (gradeNumber >= 70 && gradeNumber < 80) {
        gradeNumber = "B grade";
    } else if (gradeNumber >= 60 && gradeNumber < 70) {
        gradeNumber = "C grade";
    } else if (gradeNumber >= 50 && gradeNumber < 60) {
        gradeNumber = "D grade";
    } else if (gradeNumber >= 40 && gradeNumber < 50) {
        gradeNumber = "E grade";
    } else if (gradeNumber >= 0 && gradeNumber < 40) {
        gradeNumber = "Student has failed";
    } else {
        gradeNumber = "Invalid marks";
    }
    return gradeNumber;
}
console.log(findGrade(95));
console.log(findGrade(75))
console.log(findGrade(40));
console.log(findGrade(10));
console.log(findGrade(-10))

// LAB 11 - Find if someone is old enough to go in the bar.
// Use a Function `findAge()` and If-else statements to find the age of the student based on their age.

// Print "Come on in." if age is 21 or older.
// Print "Go Home, you are not old enough to get in." if age is less than 21.
// Else print "please give me your age." if a number is not given.

const findAge = (age) => {
    if (age >= 21) {
        return "Come on in.";
    } else if (age < 21) {
        return "Go Home, you are not old enough to get in.";
    } else {
        return "please give me your age."
    }
}

console.log(findAge(21));
console.log(findAge(17));
console.log(findAge(25));
console.log(findAge());