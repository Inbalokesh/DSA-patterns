// ***********Reverse number staircase**********
let n=5;
let num="";
for(let i=1; i<=n;i++){
    num+="  ".repeat(i-1);
    for(let j=i; j<=n;j++){
        num+= j+" ";
    }
    num+="\n"
   
}
console.log(num)