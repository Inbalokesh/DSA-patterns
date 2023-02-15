let n = 4;

for (let i = 1; i <= n; i++) {
  let num = "";
  for (let j = 1; j <= n - i; j++) {
     num+= "  ";
  }
  for (let k = 1; k <= i; k++) {
    num += k + " ";
  }
  console.log(num);
}