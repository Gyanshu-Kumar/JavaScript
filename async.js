console.log("Hello From The First line")

setTimeout(() => { // Callback Function
    console.log('Hello From Callback Fn') //
}, 3000) // After 3 second it start executing

console.log("Hello From The Last line") // This line doesn't wait for second function to print
// This is called as the asynchronus processing
// Event loop -> the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop works by making a request to some internal or external "event provider", then calls the relevant event handler.

