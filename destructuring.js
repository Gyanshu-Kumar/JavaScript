// Destructuring in arrays
// const nums = [1, 2, 3, 4, 5];
// const [num1, num2, num3, num4, num5] = nums; // destructuring the array
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(num3); // 3
// console.log(num4); // 4
// console.log(num5); // 5

// const [p, q, r] = [1, 2, [3, 4]];
// console.log(p); // 1
// console.log(q); // 2
// console.log(r); // [ 3, 4 ]


// Destructuring in an Object
const per = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
};
const { name, age, address : {city, country}, hobby} = per;
console.log(name)
console.log(age)
console.log(hobby) // undefined
console.log(city) // New York



