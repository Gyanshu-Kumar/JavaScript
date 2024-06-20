// Q - What is String in JavaScript?
// A - The String object lets you work with a series of characters; it wraps Javascript's string primitive data type with a number of helper methods.
// A string is a sequence of characters used to represent text. It is a primitive data type in JavaScript.
// A string is Considered as a immutable data type because once a string is created, it is not possible to modify it. However, we can create a new string based on the existing string.

// let name = "Gyanshu";
// let city = 'Delhi';
// console.log(name, city); // Gyanshu Delhi
// console.log(typeof name); // string


// Accessing characters in a string
// let str = "Hello World";
// console.log(str[0]); // H
// console.log(str[1]); // e

// String length
// let str = "Hello World";
// console.log(str.length); // 11

// string concatenation
// let firstName = "Gyanshu";
// let lastName = "Kumar";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Gyanshu Kumar
// console.log(firstName + " " + lastName); // Gyanshu Kumar

// convert string into uppercase
// let name = "Gyanshu";
// console.log(name.toUpperCase()); // GYANSHU

// character at any index
// let str1 = "Hello World";
// console.log(str1.charAt(0)); // H

// string slicing
// let str2 = "Hello World";
// console.log(str2.slice(0, 5)); // Hello
// console.log(str2.slice(6)); // World
// console.log(str2.slice(-5)); // World // it will start from last
// console.log(str2.slice(2)); // llo World // it will start from 2 index

//indexOf
// let str3 = "Hello World";
// console.log(str3.indexOf("o")); // 4
// if the character is not present then it will return -1

// trim
// let str
// str = " Hello World ";
// console.log(str); //  Hello World
// console.log(str.trim()); // Hello World
// it will remove the extra space from the string

// split
// let str = "Hello World";
// console.log(str.split(" ")); // [ 'Hello', 'World' ] // it will split the string based on the space
// console.log(str.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ] // it will split the string based on the character