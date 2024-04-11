const prompt = require('prompt-sync')();
num = prompt("Enter the number:  ");
while(num > 1) {
  for(i = 2; i <= num; ++i) {
    while(num % i == 0) {
      console.log(i);
      num /= i;
    }
  }
}