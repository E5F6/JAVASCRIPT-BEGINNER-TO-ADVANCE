// Control Flows In JavaScript

// if else

// let money =100000000

// if(money > 0){
//     console.log(`You Have $${money}`);
// }
// else{
//     console.log("Go Earn Money");
// }

//---------------------------------------------------------------------

// Switch & Break

// let x = 1;
// let name;

// switch (x) {
//     case 0:
//         name = "Priyanshu";
//         console.log(name);
//         break;
//     case 1:
//         name ="Priyanxhu"
//         console.log(name);
//         break;
//     default:
//         name = "No Name";
//         console.log(name);
// }

//---------------------------------------------------------------------

// For loop

// for(i = 0 ; i < 3 ; i++){
//     console.log("For Loop");
// }

//---------------------------------------------------------------------

// While Loop

// let i =0;

// while(i<7){
//     console.log("Hello World" ,i);
//     i++;
// }

// Do While Loop

// let i= 0;

// do{
//     console.log("Hello World" , i);
//     i++;
// } while(i < 5);

//---------------------------------------------------------------------

// Logical Operators

// 1. Logical AND &&

// const a = true;
// const b = false;
// const c = 4;

// console.log(a && b);

//* Both should be true for true if any one is fasle then it will give false

// 2. Logical OR (||)

// console.log(a || b);

//* If any one is true this will give true

// 3. Logical NOT (!)

// console.log(!a);

//* If variable is false then it will become true and vice versa

//---------------------------------------------------------------------

// Data Structure

// Arrays --> 0 index base

// let fruits = ["Mango" , "Banana" , "Litchi"];
// let shake = ["mangoShake" , "bananaShake" , "litchiShake"];

// console.log(fruits);
// console.log(fruits[2],shake[2]);
// console.log(fruits.length);
// console.log(fruits.concat(shake));
// console.log(...fruits , ...shake);

// push pop slice sort and other methods too

// fruits.push("Apple");
// console.log(fruits);
// shake.pop();
// console.log(shake);

//---------------------------------------------------------------------

// Object a collection of data

// const user = {
//     firstName : "Priyanshu",
//     lastName : "Chahar",
//     userName : "Priyannxhuu",
//     location : "India",
//     age : 19,
//     dob : "21/11/2004",
//     isProgrammer : true,
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user.isProgrammer);
// console.log(user["age"]);
// console.log(user.age , user.location);

//---------------------------------------------------------------------

// Functions a code of block that performs specific task

// function hello(){
//     console.log("Hello From A Function");
// }
// // call the function
// hello();

// function hello(e){
//     console.log(`Hello ${e}`);
// }
// //e is a parametere here and this can be accessible using same function name only
// hello("Priyanshu");

// function add(a,b){
//     return a+b;
// };

// console.log(add(3,4));

// Function declaration

// function name (userName){
//     console.log(`Hello ${userName}`);
// }
// name("Priyanshu");

// // Function expression

// const hello = function(user){
//     console.log(`Hello ${user}`);
// }
// hello("Priyanxhu");

//---------------------------------------------------------------------

// Callback
// function as a argument to other funtion while calling the function
//in simple calling a funtion in other function

// function showCallFunc(fn){
//     const value = 7;
//     fn(value);
// }
// showCallFunc(function(value){
//     console.log(value);
// })

// function greet(name , cb){
//     console.log(`Hello ${name}`);
//     cb();
// }

// greet("Priyanshu" , function cb(){
//     console.log("I am callback funtion");
// });

//---------------------------------------------------------------------

// Scopes(variables) are used for accessibility of variables

// Global Scope declare outside of a block

// Local Scope declared inside of a block

// let textMessage = "Global Variable";
//this is a global variable
// {
//     let textMessage = "Local Variable";
//     console.log(textMessage);
// }
// this is a local variable these variable are not accessible outside this block

// console.log(textMessage);

//---------------------------------------------------------------------

// Method is a function inside a object

// const person = {
//     name : "Priyanshu",
//     age : 19,
//     greet:function(){
//         return `Hello my name is ${person.name} and my age is ${person.age}`;
//     },
// };

// console.log(person.greet());

//---------------------------------------------------------------------


// JSON
// json is just like a object in js but its attributes are with ""

// const person = {
//   name: "Priyanshu",
//   age: 19,
//   email: "priyanxhuchahar@gmail.com",
//   isLoggedIn: true,
//   location: "India",
//   hobby: "Programming",
// };

// // JSON.stringfy(); this will convert object to json

// const jsonString = JSON.stringify(person);
// const parsedObject = JSON.parse(jsonString);

// console.log(jsonString);
// console.log(parsedObject);

//---------------------------------------------------------------------

// Date and time

// const currenDate = new Date();
// console.log(currenDate);

// const currentYear = currenDate.getFullYear();
// const currentMonth = currenDate.getMonth();
// const currentDay = currenDate.getDay();
// const currentHour = currenDate.getHours();
// const currentMinutes = currenDate.getMinutes();
// const currentSeconds = currenDate.getSeconds();

// console.log(currentYear);
// console.log(currentMonth);
// console.log(currentDay);
// console.log(currentHour);
// console.log(currentMinutes);
// console.log(currentSeconds);

// console.log(currenDate.toDateString());
// console.log(currenDate.toTimeString());
// console.log(currenDate.toLocaleString());

// currenDate.setDate(currenDate.getDate()+1);
// console.log(currenDate);

//---------------------------------------------------------------------

// Set Interval

// it is used for update the data by time delay

// setInterval(() => {
//     console.log("This function will excectes every one second");
// }, 1000);

// Set Timeout

// setTimeout(() => {
//     console.log("This function will be executed after 2 second");
// }, 2000);

// const Interval = setInterval(() => {
//     console.log("Interval");
// }, 1000);

// setTimeout(() => {
//     clearInterval(Interval);
//     console.log("Interval Cleared");
// }, 10000);