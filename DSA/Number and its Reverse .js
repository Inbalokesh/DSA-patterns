
// let n = 5
// let num = "";
// for(let i = 1; i <=n; i++) {
//   num += i + " ";
// }
// for(let i = n-1; i >=1; i--) {
//     num += i + " ";
// }
// console.log(num);

let n = 5
let fnum = ""
let num = "";
for(let i = 1; i <=n; i++) {
    num+= i + " ";
    fnum = i + " " + fnum;
}
console.log(num + fnum);