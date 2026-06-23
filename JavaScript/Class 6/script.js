// const promise = new Promise()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         console.log(res);
//         res.json()
//             .then((result) => {
//                 console.log(result);
//             }).catch((failed) => {
//                 console.log(failed);
//             })
//     }).catch((err) => {
//         console.log(err);
//     })

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()

    console.log(data);
}

fetchData()

console.log("One");
console.log("Two");
console.log("Three");
