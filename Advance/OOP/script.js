// Js is not a oop lang its a way of writing code in js

// console.log(window);

// function printThis(){
//     return this;
// }

// const res = printThis();
// console.log(res);

// const obj = {
//     username: 'Priyanshu',
//     age: 19,

//     detail: function(){
//         return `${this.username}`; // 'owner' obj
//     },
// };

// const res = obj.detail();
// console.log(res);

// const person = {
//     name: 'Priyanshu',
//     age: 19,

//     greetRegular: function(){
//         return `Hello my name is ${this.name} & my age is ${this.age}`
//     },
// };

// const greetArrow = person.greetRegular();
// console.log(greetArrow);

//------------------------------------------------------------

// factory function is a type of function that is used to create and return objects

// let hello = {
//     name: 'Priyanshu',
//     age: 19,

//     greeting: ()=>{
//         console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
//     },
// };

// function introDuction() {
//     return {

//     }
// }

// function createPerson(firstName , lastName , age) {
//     return{
//         firstName: firstName,
//         lastName: lastName,
//         age: age,

//         intro : function (){
//             console.log(`Hello my name is ${this.firstName} ${this.lastName} & my age is ${this.age}`);
//         },
//     };
// };

// const priyanshu = createPerson("Priyanshu" , "Chahar" , 19);
// const priyanxhu = createPerson("Priyanxhu" , "Chahar" , 19);

// console.log(priyanshu);
// console.log(priyanxhu);

// priyanshu.intro();

//------------------------------------------------------------

// constructor function in javascript are regular functions used with the new keyword to create and initialize objects with shared properties and methods

// function CreatePeople(firstName , lastName , age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const priyanxhu = new CreatePeople("Priyanshu" , "Chahar" , 19);

// console.log(priyanxhu);

//------------------------------------------------------------

// built in constructor

// const number = new Number(10);
// console.log(number);

// for all data types

//------------------------------------------------------------

// Object.create() method creates a new obj using existing object

// let person = {
//     greet: function(){
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const priyanshu = Object.create(person);
// priyanshu.name = "Priyanshu Chahar";

// priyanshu.greet();

//------------------------------------------------------------

// Prototype is the anonymous property of js objects

// const obj= {

// }

// console.log(obj.__proto__);

// function Persom(firstName , lastName , age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const priyanxhu = new Persom("Priyanshu" , "Chahar" , 19);
// console.log(priyanxhu.__proto__);

//------------------------------------------------------------

// Prototype inheritance is a mechanism in js that allows objects to inherit properties and methods from other objects

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.sound = function(){
//     return "Animal Sound";
// }

// function Dog(name , breed){
//     this.breed = breed;
//     this.name = name;
// }

// Dog.prototype.sound = function(){
//     return "Animal Sound";
// }

// const dog1 = new Dog("Buddy" , "Genus");
// console.log(dog1.name);

//------------------------------------------------------------

// Classes In Javascript

// class declaration

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.personInfo = function () {
//       return `Name : ${this.firstName} ${this.lastName} , Age: ${this.age}`;
//     };
//   }

//   // prototype members

//   greet() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
// }

// const priyanshu = new Person("Priyanshu", "Chahar", 19);
// console.log(priyanshu);
// console.log(priyanshu.personInfo());
// console.log(priyanshu.greet());

// // inheritance in classes

// class Programmer extends Person{
//     constructor(firstName , lastName ,age , experience){
//         super(firstName , lastName , age)
//         this.experience = experience;
//     }
// }

// const priyanxhu = new Programmer("Priyanxhu" , "Chahar" , 19 , "Intermediate Level");

// console.log(priyanxhu);
// console.log(priyanxhu.personInfo());
// console.log(priyanxhu.greet());

// challenge

// class Hero{
//     constructor(name , level){
//         this.name = name;
//         this.level = level;

//         this.heroInfo = ()=>{
//             return `Name ${this.name} Level ${this.level}`;
//         }
//     }
// }

// const hero1 = new Hero("Priyanshu" , 99);
// console.log(hero1);
// console.log(hero1.heroInfo());

// class Mega extends Hero{
//     constructor(name , level , age){
//         super(name , level);
//         this.age = age;
//     }
// }

// const mega1 = new Mega("Priyanshu Chahar" , 99 , 19);
// console.log(mega1);
// console.log(mega1.heroInfo());

//------------------------------------------------------------

// Modifiers

// class modifiers are also known as access specifiers or visibility specifiers

// private
// public
// protected

// function MyClass(publicField , privateField , protectedField){

//     this.publicField = publicField;

//     const _privateField = privateField;

//     const _protectedField = protectedField;

//     // public method

//     this.publicMethod = function(){
//         return `Public Field : ${this.publicField}`
//     }

//     // private method

//     function _privateMethod(){
//         return `Private Field : ${_privateField}`
//     }

//     // protected method

//     function _protectedMehtod(){
//         return `Protected Field : ${_protectedField}`
//     }

//     // method to access protected method

//     this.accessProtectedMethod = function(){
//         return _protectedMehtod()
//     }
// }

// const MyObject = new MyClass("Public Data" , "Private Class" , "Protected Data");

// console.log(MyObject.publicField);
// console.log(MyObject.privateField);
// console.log(MyObject.protectedField);
// console.log(MyObject.accessProtectedMethod);

// these are some methods used for access specifiers in javascript

//------------------------------------------------------------

// 4 Pillers of oop

// Encapsulation a method for modifying private modifier data

// function Counter(){
//     let _count = 0; // Private variable

//     // public method

//     this.increment = function (){
//         _count ++
//     }

//     this.decrement = function(){
//         _count --
//     }

//     this.getCount = function(){
//         return _count
//     }
// }

// const counter = new Counter()
// console.log(counter.getCount()); //0
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getCount());

// Abstraction hides the unnecessary details and give only required things

// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     // abstract method

//     makeSound(){
//         throw new error("Method (makesound) must be implemented");
//     }
// }
// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }

//     // implementing abstract method
//     makeSound(){
//         return "Woof!"
//     }
// }

// // concrete class

// class Cat extends Animal{
//     constructor(name){
//         super(name)
//     }

//     makeSound(){
//         return "Meow"
//     }
// }

// const dog = new Dog("Buddy");
// console.log(dog);
// console.log(dog.makeSound());

// const cat = new Cat("Pussy");
// console.log(cat);
// console.log(cat.makeSound());

// Inheritance allows a class to inherit properties and method from another class

// ES5 version of code

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.makeSound = function(){
//     return "Unknown Sound"
// }

// function Dog(name){
//     Animal.call(this , name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.makeSound = function(){
//     return "Woof"
// }

// const genericAnimals = new Animal("Generic Animal");

// const dog = new Dog("Buddy");
// console.log(dog);
// console.log(dog.makeSound());

// ES6 version of code

// class Animal{
//     constructor(name){
//         this.name= name;
//     }

//     makeSound(){
//         return "Unknown Sound"
//     }
// }

// class dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     makeSound(){
//         return "Woof"
//     }
// }

// class cat extends Animal{
//     constructor(name){
//         super(name)
//     }
//     makeSound(){
//         return "Meow"
//     }
// }

// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal);

// const Dog = new dog("Buddy");
// console.log(Dog);
// console.log(Dog.makeSound());

// const Cat = new cat("Pussy");
// console.log(Cat);
// console.log(Cat.makeSound());

// Polymorphism multiple forms

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Unknown Sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Wooof";
  }
}

const dog = new Dog("Buddy");
console.log(dog);
console.log(dog.makeSound());