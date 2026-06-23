//! String and It's inbuilt methods
let str = 'Lorem ipsum dolor ipsum sit amet ipsum ipsum consectetur adipisicing elit.'
// console.log(str);
// console.log(str[10]);

let name = "Smith"
let age = 25
let job = 'Software Developer'

// console.log("Hello, my name is", name, "and my age is", age, ", I'm working as a", job);
// console.log("Hello, my name is name, and my age is age, I'm working as a job");

//? Template String
let example = `Hello I'm smith`

//? Template Literal
// ${name}

//? Template Interpolation
// console.log(`Hello, my name is ${name}, my age is ${age}, and I'm working as a ${job}`);

//! Methods
//? charAt()
// console.log(str.charAt(10));

//? indexOf()
// console.log(str.indexOf('ipsum', 7));

//? lastIndexOf()
// console.log(str.lastIndexOf('ipsum'));

//? toLowerCase()
// console.log(str.toLowerCase());

//? toUperCase()
// console.log(str.toUpperCase());

//? slice()
// let subStr = str.slice(0, 10)
// console.log(subStr);

//? split()
// [lorem, ispusm, dolor, ipsum]
//[lorem , dolor , sit amet ]

// let arr = str.split(' ')
// console.log(arr);

//? length
// console.log(str.length);

//? replace()
let newStr = str.replace('ipsum', 'hi')
// console.log(newStr);

//? replaceAll()
let newStr2 = str.replaceAll('ipsum', 'hi')
// console.log(newStr2);


// console.log(window);
// console.log(document);

//! DOM Selection Methods
//? getElementById()
const headingEle = document.getElementById('heading')
// console.log(headingEle);

//? getElementsByClassName()
const headings = document.getElementsByClassName('head')
// console.log(headings);

//? getElementsByTagName()
const elements = document.getElementsByTagName('h1')
// console.log(elements);

//? getElementsByName()
const nameElements = document.getElementsByName('email')
// console.log(nameElements);

//? querySelector()
// const qElem = document.querySelector('#heading') 
// const qElem = document.querySelector('.head')
// const qElem = document.querySelector('h1')
// console.log(qElem);

//? querySelectorAll()
const allElements = document.querySelectorAll('.head')
console.log(allElements);
