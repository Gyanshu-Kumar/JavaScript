/**  var num = 20
if(num % 2 === 0) {
    console.log("Even")
}else {
    console.log("Odd")
} **/


// ternary operator
// var num = 20
// num % 2 === 0 ? console.log("Even") : console.log("Odd") // Even

// Nested Conditionals
var num = 20
if(num >= 0) {
        if(num > 5) {
        console.log("Greater than 5")
    }else {
        console.log("Less than 5")
    }
}

// Nested Ternary Operator
var num = 20
num >= 0 ? num > 5 ? console.log("Greater than 5") : console.log("Less than 5") : console.log("Negative number");

// Switch Case
var fruit = "apple"
switch(fruit) {
    case "banana":
        console.log("Banana")
        break;
    case "apple":
        console.log("Apple")
        break;
    case "mango":
        console.log("Mango")
        break;
    default:
        console.log("No fruit")
}