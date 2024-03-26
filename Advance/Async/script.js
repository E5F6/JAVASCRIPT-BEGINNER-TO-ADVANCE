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

// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(`${number} is an even number`);
//     } else {
//       reject(`${number} is odd number`);
//     }
//   });
// }

// const numberCheck = 7;

// checkNumber(numberCheck)
//   .then((message) => {
//     console.log(`Success : ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Error : ${error}`);
//   });

//---------------------------------------------------------------

// async function

// function fetchDataFromServer() {
//     return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//         resolve("User data retrieved from the server");
//         }, 2000);
//     })
// }

// async function getUserData(){
//     try{
//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log("Remaining tasks can be excuted here");
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getUserData();

//-------------------------------------------------------------

// fetch("robot.txt")

// .then((res) => res.text())
// .then(data => console.log(data))
// .catch((err) => console.log(err))

// const result = document.querySelector(".userdata");

// async function readData(){

//     try {
//         console.log("Retrieving Data Successfully");
//     } catch (error) {
//         console.log(error);
//     }

//     const response = await fetch("robot.txt")
//     const data = await response.text()
//     result.textContent = data
//     console.log(data);
// }

// readData()

//-------------------------------------------------------------

// fetch api

// const btn = document.querySelector(".btn");
// btn.addEventListener('click' , makeRequest)

// function makeRequest() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => {
//         if(!res.ok)
//         new Error(res.statusText);
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data.id);
//         console.log(data.title);
//         console.log(data.body);
//         let output = document.querySelector(".all-post")
//         data.forEach(element => {
//             output.innerHTML += `
//             <div>(ID) : ${element.id}</div>
//             <div>(Title) : ${element.title}</div>
//             <div>(Body) : ${element.body}</div>
//             `
//         });
//     })
// }