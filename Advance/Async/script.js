// Synchronous code

// function myFunc() {
//     console.log("Inside Function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

//------------------------------------------------------------

// Asynchronous code

// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 2000);

// console.log("End");

//------------------------------------------------------------

// Callback Hell

// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside callback hell function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }

// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processData = `${data} - Processed First`;
//     console.log("Inside firstFunc Function");
//     callback(processData);
//   }, 2000);
// }

// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const processData = `${data} - Processed Second`;
//     console.log("Inside secondFunc Function");
//     callback(processData);
//   }, 2000);
// }

// callbackHell((data) => {
//   firstFunc(data, (processData1) => {
//     secondFunc(processData1, (processData2) => {
//       console.log(`Final result of all funtion : ${processData2}`);
//     });
//   });
// });

// callback is not always a async it can be sync func also

//------------------------------------------------------------

// Promise in javascript

// new Promise((resolve , reject)=>{}) syntax for promise

