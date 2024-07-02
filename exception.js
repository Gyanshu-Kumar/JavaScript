//syntax related error
//console.log('Hello);

//Runtime exception
// let x = 10;
// console.log(x.toUpperCase()); // This will throw an error because toUpperCase is not a function of number

//Logical Error
// let num = 5;
// for(i =- 3 ;i < 5;++i){
//     console.log(num/i); // Logical Error because we are dividing by 0
// }

// To Handle the exception we use try catch & final block
// try{
//     let x = 10;
//     console.log(x.toUpperCase());
// }catch(error){
//     console.log(error);
// }finally{
//     console.log("This will always run");
// }

// try {
//     let obj = undefined;
//     console.log(obj.name) // This will throw an error
// }catch(error){ // This will catch the error
//     console.log("Exception Occured")
// }

try {
    let obj = {
        name: "Gyanshu" // This will not throw an error
    }
    console.log(obj.name)
}catch(error){ // This will not catch the error
    console.log("Exception Occured")
}finally {
    console.log("This will always run")
}