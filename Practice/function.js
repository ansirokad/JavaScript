// a] Without Argument & Without Return Type

// Q-1. Write a named function to print "Hello World".
function printData() {
  console.log("Hello World");
}
printData();

// Q-2. Write a named function to display numbers 1 to 5.
function PrintNumber() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
PrintNumber();

// b] With Argument & Without Return Type

// Q-3. Write a named function that prints a given name.
function printName(name) {
  console.log(name);
}
printName("Ansi");

// Q-4. Write a named function that prints the multiplication table of a given number.
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
printTable(10);

// c] Without Argument & With Return Type

// Q-5. Write a named function that returns today's date.
function dateToday() {
  return Date();
}
console.log(dateToday());

// Q-6. Write a named function that returns a random number between 1 and 100.
function randomNumber() {
  return parseInt(Math.random() * 100);
}
console.log(randomNumber());

// d] With Argument & With Return Type

// Q-7. Write a named function that returns the sum of two numbers.
function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(90, 10));

// Q-8. Write a named function that returns the square of a given number.
function square(num) {
  return num * num;
}
console.log(square(5));

// Q-9. Write a named function that returns the factorial of a number.
function factorial(n) {
/*
  let factorialValue = 1;
  for (let i = 1; i <= n; i++) {
    factorialValue *= i;
  }
  return factorialValue;
*/

  var fact = 1;
  
  while(n>1)
  {
    fact*=n;
    n--;
  }
  return fact;
}
console.log(factorial(3));

// Q-10. Write a named function that checks whether a string is a palindrome and returns true or false.
function palindrome(str) {
  var revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  // console.log(revstr)
  if (str == revstr) return true;
  else return false;
}
console.log(palindrome("level"));
