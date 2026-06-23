// const image = document.getElementById('image')

//! Attribute manipulation
//? getAttribute()
// console.log(image.getAttribute('src'));
// console.log(image.getAttribute('height'));
// const imgSrc = image.getAttribute('src')

// //? setAttribute()
// image.setAttribute('class', 'thisIsImage class1 class2 class3')
// console.log(image);
// image.setAttribute('src', 'https://cdn.pixabay.com/photo/2026/02/03/15/16/old-library-10102767_1280.jpg')
// image.style.border = '10px solid red'
// image.style.width = '600px'

const heading = document.querySelector('.heading')
heading.style.color = 'white'
heading.style.fontSize = '50px'
heading.style.backgroundColor = 'blueviolet'

// heading.innerHTML = '<h1> This is subheading </h1>'
// console.log(heading);

// heading.innerText = 'This is text manipulation'
// heading.textContent = 'This is Updated heading'

//! Insert a new Element
//? createElement()
const paragraph = document.createElement('p')
paragraph.textContent = 'This is a new paragraph'
paragraph.style.fontSize = '30px'
paragraph.style.color = 'blue'

// console.log(paragraph);

const box = document.getElementById('box')
//? append()
// box.append(paragraph)

//? prepend()
// box.prepend(paragraph)

//? before()
// box.before(paragraph)
// heading.before(paragraph)

//? after()
// box.after(paragraph)
// heading.after(paragraph)

//! Remove an element
// heading.remove()

//! Error
//? Syntax Error
// clas CName{

// }

//? Runtime error
a = 10 / 2
b = 10 / 0
// console.log(a);
// console.log(b);

//? Logical error
// console.log("Addition Value of 10 and 2 is ", 10 - 2);

//! Exception Handling
// try {
//     let s = Number(prompt("Enter a value"))
//     console.log(s.toLowerCase());
//     console.log(s);

// } catch {
//     console.log("Number can't be changed in lowercase");
// } finally {
//     console.log("Finally block always executes");
// }

//! Synchronous and Asynchronous
// console.log("One");
// console.log("Two");
// console.log("Three");
// setTimeout(() => {
//     console.log("Four");
// }, 2000)
// console.log("Five");
// setTimeout(() => {
//     console.log("Six");
// }, 2000)

//! Callback Hell
// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{
//                 ()=>{

//                 }
//             }
//         }
//     }
// }