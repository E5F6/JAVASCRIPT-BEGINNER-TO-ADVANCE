// Template Strings
// This is a feature of javascript allows to create strings with embedded expressions they are denoted bye backticks ``

// const name = "Priyanshu";
// const age = 19;
// const hobby = "Programming";

// console.log(`My name is ${name} and i am ${age} years old my hobby is ${hobby}`);

//---------------------------------------------------------------------

// Arrow Function

// Normal Function
// function user(userName) {
//     console.log(`Hello ${userName}`);
// }
// user("Priyanshu");

// Arrow Function
// greet = (userName) => {
//     console.log(`Hello ${userName}`);
// }
// greet("Priyanshu");

// const double = (number) => {
//     return number * 2
// }
// console.log(double(2));

//---------------------------------------------------------------------

// Ecmascript 6 or ES6
// a set of enhancement to the syntax for defning objects in javascript

// function user(name , age , work){
//     return{
//         name ,
//         age ,
//         work ,
//     };
// };
// const priyanshu = user("Priyanshu" , 19 , "Developer");
// const priyanxhu = user("Priyanxhu" , 19 , "Developer")
// console.log(priyanshu);
// console.log(priyanxhu);

//---------------------------------------------------------------------

// Default function parameters

// function countTo5(count) {
//     if(count === true){
//         for(let i=1 ; i<=5 ; i++)
//         {
//             console.log(`Count ${i}`);
//         }
//     }
// }

// countTo5(true);

// default value is specified in parameter

//---------------------------------------------------------------------

// Spread operators is a new addition to the set of operators in js ES6
// these can take values from arrays to increase the readability and enhancement

//... this is spread operator used to concatination

// function giveMe4(a,b,c,d){
//     console.log("a" , a);
//     console.log("b" , b);
//     console.log("c" , c);
//     console.log("d" , d);
// }

// const arr = ["apple" , "banana" , "chiku" , "dragonfruit"];

// giveMe4(...arr);

// const strNums = ['one' , 'two' , 'three'];
// const moreStrNum = ['four' , 'five' , 'six'];
// const concat = [...strNums , ...moreStrNum];

// console.log(concat);

// const obj1 = {x:1 , y:2}
// const obj2 = {z:3}
// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

//---------------------------------------------------------------------

// Variadic Functions

// function user(...userData){
//     console.log(userData);
// }
// user("Priyanxhu" , 19 , "Programming" , "India");

// this is a variadic function where the userdata is concating

//---------------------------------------------------------------------

// Destructuring allows us to unpack values from data structures into seperate distinct variables

// const distinct = [1,2,3,4,5,6,7];

// console.log(distinct[0]);
// console.log(distinct[1]);
// console.log(distinct[2]);
// console.log(distinct[3]);
// console.log(distinct[4]);
// console.log(distinct[5]);
// console.log(distinct[6]);

//---------------------------------------------------------------------

// Ternary operator in js is a concise way of writing conditional expression it is the only js operator that takes three operands

// condition ? exprIfTrue : exprIfFalse;

// let password = "Priyanshu";

// function passwordChecker(ps){
//     // if(ps.length === 8)
//     // {
//     //     return "Good Password";
//     // }
//     // else{
//     //   return "Password should be 8 character long";
//     // }

//     return ps.length === 8 ? `Strong Password` : `Password Should Be 8 Character Long`;
// }

// const res = passwordChecker(password);
// console.log(res);

// let money = 200;

// function output(money){
//     return money === 300 ? "Enough Money" : "More money required";
// }

// console.log(output(money));

//---------------------------------------------------------------------

// for (let key in object)

// const person = {
//     name : "Prianshu",
//     age : 19,
//     location : "IN",
// }

// for(let keys in person){
//     console.log(keys ,person[keys]);
// }

// const list = ["Priyanshu" , "Priyanxhu"]

// for(let keys in list){
//     console.log(keys , list[keys]);
// }

// in array this will give index along with the keys

//---------------------------------------------------------------------

// For of loope ES6

// let peoples = ["Priyanshu" , "Ryuk"]

// for( let people of peoples){
//     console.log(people);
// }
// this will not give index as let in

// const name = "Priyanshu";

// for( let char of name){
//     console.log(char);
// }

//---------------------------------------------------------------------

// For each helper