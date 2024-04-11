range = 100;
sum_even = 0;
sum_odd = 0;
for(i = 1; i<= range; ++i) {
  if(i % 2 == 0) {
    sum_even += i;
  }
  else {
    sum_odd += i;
  }
}
console.log("sum of even numbers:  " + String(sum_even));
console.log("sum of odd numbers:  " + String(sum_odd));