//Heigher Order Function - A function that takes another function as an argument or returns a function as a result is called a higher order function.

// function operation(operatorFn, a, b) { // operation is a higher order function
//     return operatorFn(a, b); // when we call operatorFn, it will call the function that is passed as an argument
// }
// function add(a, b) { // add is a callback function
//     return a + b;
// }
// let result = operation(add, 10, 20); // 30 // add function is passed here as an argument
// console.log(result); 


// Another type of heigher order in that inside a function we are returning another function
// function getGreetMethod(){
//     return function(){
//         console.log("Hello World");
//     }
// }
// let greet = getGreetMethod();
// console.log(typeof greet);
// greet()

//Now We see few array function which behave like a higher order function
// First Example -> For Each Method in Array - It takes a each element of array and perform some operation on it
// players = ["Sachin", "Virat", "Dhoni", "Rohit"];
// players.forEach((player)=>console.log(player));


// Second Example -> Map Method in Array - It takes a each element of array and perform some operation on it and return a new array
//Program to Print Cube of each element of array
// let numbers = [1, 2, 3, 4, 5];
// cube_arr = numbers.map(num => num**3);
// console.log(cube_arr);
// console.log(numbers); // It doesn't change 

// Third Example -> Filter Method in Array - It takes a each element of array and perform some operation on it and return a new array based on some condition
//Program to filter even numbers from an array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// even_numbers = numbers.filter(num => num%2==0);
// console.log(even_numbers);
// console.log(numbers); // It doesn't change

// Fourth Example -> Reduce Method in Array - It takes a each element of array and perform some operation on it and return a single value
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((curr, next) => curr+next)
console.log(sum)
