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

