function outerFn(){
    let outerVar = "I am from outer var Fn"
    function innerFn(){
        console.log(outerFn)
    }
    return innerFn
}
let fn = outerFn()

fn() // It still able to hold local variable of outer it is called closures
// Closures are used when you deal something called as encapsulation.


function customerCount(){
    let count = 0;
    return function(){
        count++
        console.log("New Customer Count is ", count);
    }
}
let counter = customerCount();

counter()
counter()
counter()