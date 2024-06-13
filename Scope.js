// What is scope in JavaScript?
// Scope is the context in which the variables are declared. JavaScript has two scopes - Local Scope and Global Scope.

// What is Global Scope in JavaScript?
// The variables declared outside of the function are called Global Scope. It can be accessed from any part of the code.
// var name = "John"; // Global Scope because it is declared outside of the function
// console.log(name); // John

// function func(){
//     console.log(name); // John // This name variable is accessible inside the function because it is declared in the global scope
// }
// func();

// What is Local Scope/Function Scope in JavaScript?
// The variables declared inside the function are called Local Scope. It can be accessed only within the function.
// function func(){
//     var num = 55
//     console.log(num); // 55
// }
// func();
// console.log(num); // ReferenceError: num is not defined

// What is Block Scope in JavaScript?
// The variables declared inside the block {} are called Block Scope. It can be accessed only within the block.
// {
//     let num = 55
//     console.log(num); // 55
// }
// console.log(num); // 55 // because the let keyword is not accessed outside the function