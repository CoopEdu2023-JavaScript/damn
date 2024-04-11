const prompt = require('prompt-sync')();
height = prompt("Enter the value of height:  ");
console.log(((parseInt(height) + 1) % 2));
mid = Math.ceil(height / 2);
for(i = 1; i <= height; ++i) {
  line = "";
  if(i <= mid) {
    for(j = 1; j <= mid - i; ++j) {
      line += " ";
    }
    for(j = 1; j <= 2 * i - 1; ++j) {
      line += "*";
    }
  }
  else {
    for(j = 1; j <= i - mid - ((parseInt(height) + 1) % 2); ++j) {
      line += " ";
    }
    for(j = 1; j <= (height - i) * 2 + 1; ++j) {
      line += "*";
    }
  }
  console.log(line);
}