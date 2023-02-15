// ************* Find the Max array **************
// let a = [1,2,4,2,5,9];
// let max = a[0];

// for(let i = 1; i<a.length; i++){
//     if(max < a[i]){
//         max = a[i];
//     }    
// }
// console.log(max)

// ************* Find the Min array **************

let a = [1,2,4,2,5,9];
let max = a[0];

for(let i = 1; i<a.length; i++){
    if(max > a[i]){
        max = a[i];
    }    
}
console.log(max)