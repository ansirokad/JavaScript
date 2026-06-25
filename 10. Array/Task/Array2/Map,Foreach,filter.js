// - Create an array of 10 numbers and use forEach() to display each number in the console.

var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("ForEach : ");
arr.forEach(() => {

  console.log(arr);
});
console.log("\n");

// - Create an array of 5 numbers and use map() to create a new array containing the square of each number.

var array = [1, 2, 3, 4, 5];

var square = array.map((element) => {
  return element * element;
});
console.log("Square : ",square);
console.log("\n");

// - Create an array of numbers from 1 to 20 and use filter() to create a new array containing only odd numbers.

var number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

var odd = number.filter((element) => {
  return element % 2 != 0;
});
console.log("Odd Number :",odd);
console.log("\n");

// - Create an array of 10 numbers and use filter() to find all numbers greater than 50.

var num = [20,25,67,95,15,32,76,27,12,84];

var greater = num.filter((element) => {
  return element > 50;
});
console.log("Grater than 50 : ",greater);
console.log("\n");


// - Create an array of 8 numbers and :

var arr1 = [10,36,94,57,84,108,67,29];
console.log(arr1);

    // • Use map() to multiply each number by 5.
    console.log("Map : ");
    var multiply = arr1.map((element) => {
      return element * 5;
    });
  console.log(multiply);

    // • Use filter() to keep only numbers greater than 100.

    console.log("filter : ");
    var greaterNum = arr1.filter((element) => {
      return element > 100;
    });
    console.log(greaterNum);

    // • Use forEach() to display the final result in the console.

    console.log("ForEach : ");
    var result = arr1.forEach((element) => {
        return element;
    });
    console.log(result);

