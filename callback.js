// Callback in JS -> A callback is a function that is passed as an argument to another function and is executed at a later point in time. 
//It allows for asynchronous programming and is commonly used in JavaScript to handle events, make API requests, and perform other tasks that require waiting for a certain condition to be met.

// function greet(name, callback){ // This function is passed as an argument
//     const greeting = "Hello " + name
//     callback(greeting)
// }

// function displayGreeting(message){
//     console.log(message)
// }

// greet("Gyanshu", displayGreeting)


// Callback Hell -> The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. 
getUser(function(user){ // layer of callback nesting
    getPosts(user.id, function(post){ // layer of callback nesting
        displayUserInfoPost(user, posts, function(){  // layer of callback nesting
            console.log("User Info and post successfully displayed")
        })
    })
})
// We Can avoid callback hell with help of promiss and async await