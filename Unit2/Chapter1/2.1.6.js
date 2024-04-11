const prompt = require('prompt-sync')();
num = prompt("Enter the number:  ");
flag = 1;
for(i = 2; i * i < num; ++i) {
  if(num % i == 0) {
    console.log("No");
    flag = 0;
  }
} 
if(flag == 1) {
  console.log("Yes");
}