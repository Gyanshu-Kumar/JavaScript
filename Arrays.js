// Q - What is Arrays in JavaScript?
// A - An array is a special variable, which can hold more than one value at a time. It is a data structure that contains a group of elements.
// An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

// arr = [1, 2, 3, 4, 5];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr[0]); // 1
// console.log(typeof arr); // object // array has not its own data type it is an object

// other way to create an array
// let arr1 = new Array();
// console.log(arr1); // []

//Accessing the elements of an array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0]); // 1
// console.log(arr[1]); // 2 // it is zero based index 
// console.log(arr[20]); // undefined // if the index is not present then it will return undefined
// arr[1] = 10;
// console.log(arr); // [ 1, 10, 3, 4, 5 ] // we can update the value of an array

// Inserting elements in an array
// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] // push() method is used to insert an element at the end of an array


// unshift() method is used to insert an element at the beginning of an array
// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

// Removing elements from an array
// pop() method is used to remove an element from the end of an array
// let arr1 = [1, 2, 3, 4, 5];
// arr1.pop();
// console.log(arr1); // [ 1, 2, 3, 4 ] // 5 is removed from the array


// shift() method is used to remove an element from the beginning of an array
// console.log(arr1.shift()); // 1 // it will remove the first element from the array
// console.log(arr1); // [ 2, 3, 4 ] // 1 is removed from the array

// concat() method is used to merge two or more arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// size of an array
// console.log(arr3.length); // 6

// converting an array to a string
// let arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
// console.log(arr.join("")); // hello world // join() method is used to convert an array to a string
// ("") is used to remove the comma from the string

// Another way to convert an array to a string
// let arr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
// console.log(arr.toString()); // h,e,l,l,o, ,w,o,r,l,d // toString() method is used to convert an array to a string
// it will add the comma in the string
// it will return the string

// slicing of the array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nums.slice(0, 3)); // [ 1, 2, 3 ] // it will return the elements from 0 to 3 index
// console.log(nums.slice(3)); // [ 4, 5, 6, 7, 8, 9 ] // it will return the elements from 3 index to end
// console.log(nums.slice(-3)); // [ 7, 8, 9 ] // it will return the last 3 elements
// console.log(nums.slice(-3, -1)); // [ 7, 8 ] // it will return the last 3 elements
// it will return the elements from -3 to -1 index


// splicing of the array , it will change/modifies the original array 
// let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let removed = numbers.splice(2, 2, 11, 12); // it will remove the elements from 2 to 2+2 index and add 11 and 12 at that index
// console.log(removed); // [ 3, 4 ] // it will remove the elements from 2 to 2+2 index
// console.log(nums1); // [ 1, 2, 5, 6, 7, 8, 9 ] // it will remove the elements from 2 to 2+2 index

// Reverse the array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// nums.reverse()
// console.log(nums); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ] // it will reverse the array


// For Knowing the element present in the array or not
let nums = [4, 1, 5, 7, 19, 2]
console.log(nums.indexOf(5)); // 2 // it will return the index of the element
console.log(nums.indexOf(100)); // -1 // if the element is not present then it will return -1

// Sorting the array
let my_arr = [5,4,1,2,3]
my_arr.sort()
console.log(my_arr)