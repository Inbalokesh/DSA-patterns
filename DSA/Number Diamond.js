// ***********Number diamond**********

// let n = 4;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += i + " ";
//   }
//   string += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += i + " ";
//   }
//   string += "\n";
// }
// console.log(string);

// **********Solution 2**********

let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
    string += " ".repeat(n-i) + Array(i+1).join(i + " ") + "\n";
}
for (let i = n - 1; i >= 1; i--) {
    string += " ".repeat(n-i) + Array(i+1).join(i + " ") + "\n";
}
console.log(string);
