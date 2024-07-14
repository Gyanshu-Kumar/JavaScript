// Promise in Javascript -> Promise is an object that may produce a single value some time in the future:
//either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

// There is two outcome of promise:
// 1. Resolved or Positive outcome -> The promise is resolved when the operation is successful.
// 2. Rejected or Negative outcome -> The promise is rejected when the operation is unsuccessful.

//                                   |-> Callback Function / Resolve and Reject are the action that we can perform on promise
/** const simranPromise = new Promise((resolve, reject) => {
    let parentDecision = false;

    if(parentDecision){
        resolve("Simran is happy with the marriage" , parentDecision)
    }else{
        reject("Simran is not happy with the marriage", parentDecision)
    }
});
// After Decison of simran we will perform some action
simranPromise.then((message, pd) => { // then is used to handle the resolve case/ Positive outcome
    console.log("Simran Message :" + message)
    console.log("Parent Message :" + pd)

    console.log("Let's book a wedding hall")
}).catch((message, pd) => { // catch is used to handle the reject case/ Negative outcome
    console.log("Simran Message :" + message)
    console.log("Parent Message :" + pd)
    console.log("Let's cancel the wedding")
}).finally(() => console.log("Finally we are done with the marriage")) // finally is used to handle the both resolve and reject case **/

// Why we use promise?
// 1. To avoid callback hell
// 2. To avoid multiple callback
// 3. To avoid nested callback
// 4. To avoid callback pyramid of doom
// 5. To avoid callback chaining
// 6. To avoid callback spaghetti
// 7. To avoid callback christmas tree
// 8. Read from database
// 9. Process data

/** const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Math.random() > 0.5) {
        resolve("Friend1 : Hey I am in for Goa")
    }else{
        reject("Friend1 :Sorry I can't make it for Goa")
    }
  },1000)
})

const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Math.random() > 0.5) {
        resolve("Friend2 :Hey I am in for Goa")
    }else{
        reject("Friend2 :Sorry Mai nhi aa Paunga")
    }
  },2000)
})
const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Math.random() > 0.5) {
        resolve("Friend3 :Hey I am in for Goa")
    }else{
        reject("Friend3 :Sorry Mujhe Padhai Karni Hai")
    }
  },3000)
})
Promise.all([f1Promise, f2Promise, f3Promise]).then((messages) => {
    console.log(messages)
    console.log("All Friends are in for Goa")
}).catch((messages) => {
    console.log(messages)
    console.log("All Friends are not in for Goa")
}) **/

    

// const gf1Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("GF1 : I Will Come for dinner");
//     } else {
//       reject("GF1 : Phone is Unreachable");
//     }
//   }, 1000);
// });

// const gf2Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("GF2 : I Will Come for dinner");
//     } else {
//       reject("GF2 : Phone is Unreachable");
//     }
//   }, 2000);
// });
// const gf3Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("GF3 : I Will Come for dinner");
//     } else {
//       reject("GF3 : Phone is Unreachable");
//     }
//   }, 3000);
// });
// Promise.any([gf1Promise, gf2Promise, gf3Promise])
//   .then((messages) => {
//     console.log(messages);
//     console.log("All GF are in for dinner");
//   })
//   .catch((messages) => {
//     console.log(messages);
//     console.log("All GF are not in for dinner");
//   });

// // Difference between promise.all and promise.any -> Promise.all() is a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects.
// //Promise.any() is a promise that resolves as soon as any of the promises in the iterable argument resolves, or rejects if all of the promises reject.
// //If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.
// //If all of the promises are rejected,
// //Promise.any is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// // In Promise.all if any anyone reject then all go to catch block but in Promise.any if any one resolve then all go to then block
