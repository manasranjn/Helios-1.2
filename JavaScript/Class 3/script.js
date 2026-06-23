//! Array inbuilt methods
// let arr = [10, 20, 30, 40, 50, 60]
//? push()
// arr.push(true, undefined, "Hello")
// console.log(arr);

//? pop()
// let a1 = arr.pop()
// console.log(arr);
// console.log(a1);

//? unshift()
// arr.unshift(1, 2, 3, 4)
// console.log(arr);

//? shift()
// arr.shift()
// console.log(arr);

//? slice()
// let subArr = arr.slice(2, 5)
// let subArr2 = arr.slice(1)
// console.log(subArr);

//? includes()
// console.log(arr.includes(1));
// console.log(arr.includes(10));

//? reverse()
// console.log(arr.reverse());
// console.log(arr);

//? toString()
// let strArr = arr.toString()
// console.log(strArr);
// console.log(typeof strArr);
// console.log(arr);

//? splice()
// arr.splice(startIndex, dltCount, newElements)
//* Add
// arr.splice(1, 0, "Hi", 2, 3, 4, 5,)
// console.log(arr);

//* Replace
// arr.splice(2, 1, "Hi", 2, 3)
// console.log(arr);

//* Delete
// arr.splice(0, 3)
// console.log(arr);


// let arr = [10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
//! map()
// let newArr = arr.forEach((item, index) => {
//     console.log('Value of index', index, "is", item);

//     return item + 10
// })
// console.log(newArr);

// let newMarks = arr.map((mark, idx) => {
//     // console.log(idx, mark);

//     // return mark + 10
// })
// console.log(newMarks);


//! filter()
// let Marks = arr.map((mark, idx) => {
//     // console.log(idx, mark);

//     // return mark >= 50
//     if (mark >= 50) {
//         return mark
//     }
// })
// console.log(Marks);

// let Marks = arr.filter((mark, idx) => {
//     return mark >= 50
// })
// console.log(Marks);

//! reduce()
// let total = arr.reduce((item, sum) => sum += item, 0)
// console.log(total);
// let sum = 0
// sum += 10 // 10
// sum += 20 // 10 +20 = 30
// sum += 30 // 30 +30 = 60
// sum += 40 // 60 +40 = 100


//! sort()
let arr = [10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
//? Asscending
arr.sort((a, b) => a - b)
// a = 10, b = 40
// a = 40, b = 50
// a = 50, b = 1
// a= 50, b=60

//[10,40,1, 50, 20, 30, 60,70...]
//[10,1,40,20,30,50....]
//[1,10,20,30,40...]
// console.log(arr);

//? Descending
[10, 40, 50, 1, 60, 20, 30, 70, 80, 90]
a = 10
b = 40 //40-10 50-10 1-10
arr.sort((a, b) => b - a)
//[40,50, 10,60, 20,30,70...1 ]
//[50, 40, 60, 20, 30..., 10,1]
//[50, 60, 40, 30, 70,80,90, 20, 10,1]
//[60, 50, 40, 70, 80, 90, 30, 20,10,1]
//[60, 50, 70, 80, 90, 40...]
//[60, 70, 80, 90, 50, 40...]
//[70, 80, 90, 60, 50...]
//[80, 90, 70, 60....]
//[90, 80, 70, 60, 50,...]
// console.log(arr);