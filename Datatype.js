/**Datatypes
1. Primitive -> Simple/Immutable
    a. Number
    b. String
    c. Boolean
    d. Undefined
    e. Null
    f. Symbol
2. Non-Primitive -> Complex/Mutable
    a. Object
        i. Array
        ii. Object
        iii. Function
        iv. Date
        v. RegExp
**/
/** 
//String
var name = "John";
console.log(name);
console.log(typeof name);
**/

/** 
//Number
var age = 25;
console.log(age);
console.log(typeof age);

//BigInt
var bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);
console.log(typeof NaN); // NaN -> Not a Number 
//NaN is a property of the global object. In other words, it is a variable in global scope.
**/


/** null
The value null represents the intentional absence of any object value.
console.log(null);
console.log(typeof null); -> Object **/

/**Boolean
var isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);
**/

/**Symbol
var sym1 = Symbol("foo");**/



//Non-Primitive

// Objects
/**var obj = {
    name: "John",
    age: 25,
    isTrue: true,
    bigInt: 1234567890123456789012345678901234567890n,
}
console.log(obj);**/

