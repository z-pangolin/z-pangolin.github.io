// function fn1(error) {
//     console.log("Caught error in fn1:", error);
//     return Promise.reject();
// }
// function fn2() {
//     console.log(2);
// }
// function fn3() {
//     console.log(3);
// }
// let p1 = new Promise((resolve, reject) => {
//     reject("error")
// });
// p1.catch(fn1).then(fn2, fn3)

let p = new Promise((resolve, reject) => {
    resolve("1")
})
console.log(p);