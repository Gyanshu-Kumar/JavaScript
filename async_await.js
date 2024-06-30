// async function getMessage(){
//     return 'Hello Students';
// }
// //console.log(getMessage()); // Promise { 'Hello World' } // This is a promise
// getMessage().then(result => console.log(result)); // Hello World 
// This is a promise 
// if the function is returning a promise then we have to use then to get the result


// Function to print hello after a wait
// function printHelloAfterWait(){
//     console.log("First Line")
//    setTimeout(()=>{
//     console.log("Hello Students")
//    },3000)
//    console.log("Last Line") 
// }
// printHelloAfterWait()
console.log("Hello From The Beginning")
async function printHelloAfterWait(){
    console.log("First Line")

    let data = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello Students")
           },3000)
    })
    let result = await data // This will wait for the data to be completed
    console.log(result)
   console.log("Last Line") 
}
printHelloAfterWait()
console.log("Hello From the End")