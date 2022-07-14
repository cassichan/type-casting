// function sum(x,y) {
//     return x + y 
// }



const sum = (x,y) => {
    if (typeof(x) != "number") {
        return "No!"
    }
    if (y == undefined) {
        return x
    } else {
        return x + y
    }
}

const result = sum(3, 4)
console.log(result)