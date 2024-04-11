const prompt = require('prompt-sync')();
num = prompt("Enter the number:  ");
for(i = 1; i <= num; ++i) {
  if(num % i == 0) {
    console.log(i);
  }
}