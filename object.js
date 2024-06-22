// const user = {
//     name: 'John',
//     age: 30
// };
// console.log(user.name); // John
// console.log(user['name']); // John // we can access the object properties using the dot notation 


// // Adding data to an object
// user.country = 'India';
// user["continent"] = 'Asia';
// console.log(user); // { name: 'John', age: 30, country: 'India', continent: 'Asia' }

// // Deleting data from an object
// delete user.age;
// console.log(user); // { name: 'John', country: 'India', continent: 'Asia' } // age is removed from the object

let person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
};
for (let key in person) {
    console.log(key);
    console.log(key, "=>", person[key]);
}
console.log(Object.keys(person)); // [ 'name', 'age', 'address' ] // it will return the keys of an object
console.log(Object.values(person)); // [ 'John', 30, { city: 'New York', country: 'USA' } ] // it will return the values of an object

// Get both keys and values of an object
console.log(Object.entries(person)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'address', { city: 'New York', country: 'USA' } ] ] // it will return the keys and values of an object


// cloning an object using assign() method
const new_person = Object.assign({}, person);
console.log(new_person); // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }// it will clone the object

const new_person1 =  Object.assign({} , person, {role : 'Admin'});
console.log(new_person1); // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' }, role: 'Admin' } // it will add the role property to the object

