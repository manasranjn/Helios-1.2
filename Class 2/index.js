//! Functions
//? Predefined Functions
// console.log("Hello World!");
// alert("Hello World!");
// confirm("Are you sure?");
// prompt("What is your name?");

//? Userdefined Functions
function greet() {
    // console.log("Hello World!");
    return "Hello World!";
}

// let s1 = greet()
// console.log(s1);


//* Function without parameters
function add() {
    return 10 + 20
}
// console.log(add());

//* Function with parameters
function addNumbers(a, b) {
    console.log(a);
    console.log(b);

    return a + b;
}
// console.log(addNumbers(10, 20));
// console.log(addNumbers(10, 200));
// console.log(addNumbers(10));

//* Function with default parameters
function sum(a = 0, b = 0) {
    console.log(a);
    console.log(b);

    return a + b;
}
// console.log(sum(10));
// console.log(sum(10, 20));
// console.log(sum());

//! Normal Function
// function sayHello() {
//     console.log("Hello World!");
// }

// sayHello();

//! Arrow Function
let subtract = (a, b) => {
    return a - b;
}
// subtract(10, 5);

//! Anonymous Function
const sayHello = function () {
    console.log("Hello World!");
}
// sayHello();

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, idx) => {
//     console.log(item);
//     console.log(idx);
// })

const prices = [100, 200, 300, 400, 500];
let newPrices = prices.forEach((price) => {
    return price - price * 0.1;
});

console.log(newPrices);

const prices = [100, 200, 300, 400, 500];
let newPrices = prices.forEach((price) => {
    return price - price * 0.1;
});

console.log(newPrices);

const prices = [100, 200, 300, 400, 500];
let newPrices = prices.forEach((price) => {
    return price - price * 0.1;
});

console.log(newPrices);

const prices = [100, 200, 300, 400, 500];
let newPrices = prices.forEach((price) => {
    return price - price * 0.1;
});

console.log(newPrices);