// Function for Number sequence****************

function getNumber_seq(n){
    let num="";
    for (let i=1; i<=n; i++){
        num+= i+" ";    
    }
    return(num)
    }
    
    // Function for Reverse Number Sequence***************
    
    function getRevNumber_seq(n){
    let num="";
    for (let i=n; i>=1; i--){
        num+=i+ " ";    
    }
    return(num)
    }
    
    // Function for space**************
    
    function getSpaces(n){
    let num="";
    for(let i=1; i<=n; i++){
        num+= "  ";
    }
    return(num)
    }

    // *************Diamond starircase of reverse numbers**********

// let n=4;
// for(let i = 1; i<=n; i++){
//     console.log(getSpaces(n-i)+ getNumber_seq(i)+getRevNumber_seq(i-1));
// }
// for(let j = n-1; j>=1; j--){
//     console.log(getSpaces(n-j)+ getNumber_seq(j)+getRevNumber_seq(j-1));
// }

// **********For Pattern M in numbers**********

// let n=10;
// for(let i = 1; i<=n; i++){
//     console.log(getNumber_seq(i-1)+getSpaces(2*(n-i)+1)+getRevNumber_seq(i-1))
// }
// console.log(getNumber_seq(n)+getRevNumber_seq(n-1))