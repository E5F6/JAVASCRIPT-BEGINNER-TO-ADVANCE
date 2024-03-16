// DOM document object model

// console.dir(document);

// console.log(document.head);
// console.log(document.body);

// by this method document Element can be accessed

//--------------------------------------------------------------------

// Accessing the DOM by using log and Storing in variables

// 1. getElementByTagName

// console.log(document.getElementsByTagName('h1'));

// const byTagName = document.getElementsByTagName('h1');

// // 2. getElementById

// // console.log(document.getElementById('getElementByIdName'));

// const byIdName = document.getElementById('getElementByIdName');

// // 3. getElementByClassName

// // console.log(document.getElementsByClassName('getElementByClassName'));

// const byClassName = document.getElementsByClassName('getElementByClassName');

// // 4. querySelector

// // console.log(document.querySelector('#querySelector'));

// const byQuery = document.querySelector('#querySelector');

// // 5. querySelectorAll

// // console.log(document.querySelectorAll('#querySelector'));

// const byQueryAll = document.querySelectorAll('#querySelector');

//--------------------------------------------------------------------

// inner text , inner content , innerHTML

// const para = document.querySelector('.para');

// para.innerText = "Hello This is A Paragraph";
// para.innerHTML = "<i>Priyanshu</i>";

// console.log(para);

//--------------------------------------------------------------------

// classlist // used for accessing the classname for any tag and for controll class

// const classlist = document.getElementById('classlist');

// console.log(classlist.classList);

//--------------------------------------------------------------------

// Attributes

//getting attributes

// const a = document.querySelector('a');
// const input = document.querySelector('input');

// console.log(a.href);
// console.log(input.value);

//set attribute

// input.setAttribute('placeholder' , 'Password');

//--------------------------------------------------------------------

 // siblings

//  const parent = document.querySelector('li');

//  console.log(parent.parentElement);

// const child = document.querySelector('ul');

// console.log(child.children);

//--------------------------------------------------------------------

// style

// const applyStyle = document.getElementById('style');

// applyStyle.style.color = 'teal';
// applyStyle.style.border = '2px solid #ccc';
// applyStyle.style.backgroundColor = "#212121";


//--------------------------------------------------------------------

// creating elements & appending it to the DOM

// const h2 = document.createElement("h2");
// const body = document.getElementById('container');

// h2.classList.add('h2tag');
// h2.innerText = "This is a H2 tag created using javascript";
// body.appendChild(h2);

// const ul = document.querySelector('ul');

// const newLi = document.querySelector('li');

// newLi.innerText = `I'm li tag`;

// ul.appendChild(newLi);

// and there are some more methods explore using documentations

//--------------------------------------------------------------------

// Events

// const button = document.querySelector('button');

// button.addEventListener('click' , function(){
//     alert('You clicked me !')
//     console.log('You clicked me !');
// })

// there are some more events explore using docs

// const input = document.querySelector('#input');
// const button = document.querySelector('button');

// input.addEventListener('input' , function(){
//     const value = input.value;
//     console.log(value);
// })

// button.addEventListener('click' , function(){
//     const value = input.value;
//     console.log(value);
// })

// this is used for form control

//--------------------------------------------------------------------

// Mouse event and keyboard events explore using docs

//--------------------------------------------------------------------