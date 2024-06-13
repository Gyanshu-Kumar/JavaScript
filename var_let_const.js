// Var in Javascript 
// var is function scoped but not block scoped
// var is hoisted means it can be used before it is declared
// var can be redeclared
// var can be reinitialized
// var can be reassigned
// it is used to define a variable.

// function f1 (){ 
//     var i = 5
//     console.log(i)
// }
// f1()
// console.log(i) // ReferenceError: i is not defined

// {
//     var i = 5 // no block scope
// }
// console.log(i)

// var is hoisted
// console.log(i)
// var i = 23; // it works internally goes and defines a variable i at the top and this is called as hoisted
// // if i write console.log after this then it is printed.
// console.log(i);

//_____________________________________________________________________________________________________________________

// let in javascript
// No hoisting
// It also has block Scope

// console.log(i)
// let i = 5; // it has not being hoisted not define outside

// {
//     let name = "Gyanshu";
// }
// console.log(name);// ti gives error because we define the name inside the block.

//_______________________________________________________________________________________

// const in Javascript
// - Scope is exactly same as let
// - Const variable are final can't reassign the value / can't change the value

const country = "India";
country = "USA"; // TypeError: Assignment to constant variable.
console.log(country);