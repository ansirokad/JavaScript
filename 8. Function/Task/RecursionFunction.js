// Q-1. Write a recursive function to generate Armstrong Number series up to n terms.

var n = 153;
var originalNumber = n;
var str = String(153);
var sum = 0;

while (n > 0) {
  var temp = n % 10;
  n = parseInt(n / 10);
  var mul = 1;

  for (let i = 0; i < str.length; i++) {
    mul = mul * temp;
  }
  sum += mul;
}

if(sum == originalNumber)
{
  console.log("Armstrong");
}else{
    console.log("Not Armstrong");
}
