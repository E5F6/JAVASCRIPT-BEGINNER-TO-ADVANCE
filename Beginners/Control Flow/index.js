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

