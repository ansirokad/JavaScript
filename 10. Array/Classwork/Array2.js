var arr = [12, 24, 67, 5, 2, 89, 67, 4]; // [12,32,24,5,2,89,67,4] -> Element
console.log(arr);

// Length : Property (return array No element)
console.log("Length : ", arr.length);

/* Method */

// indexof :
console.log("indexof : ", arr.indexOf(67));
console.log("indexof : ", arr.indexOf(50));

// lastIndexOf :
console.log("lastIndexOf : ", arr.lastIndexOf(67));
console.log("lastIndexOf : ", arr.lastIndexOf(5)); // wrong

// include : (true/false)
console.log(arr.includes(24));
console.log(arr.includes(50));

// foreach :
console.log("ForEach : ");
var ans1 = arr.forEach((element) => {
  return element;
});
console.log(ans1);

// map :
console.log("Map : ");
var ans2 = arr.map((element) => {
  return element;
});
console.log(ans2);

var ans2 = arr.map((element) => {
  return element * 2; // modification
});
console.log(ans2);

var ans2 = arr.map((element) => {
  return element < 50; // Condition -> return true/false
});
console.log(ans2);

// filter :
console.log("Filter : ");
var ans3 = arr.filter((element) => {
  return element;
});
console.log(ans3);

var ans3 = arr.filter((element) => {
  return element * 2; // no modification
});
console.log(ans3);

var ans3 = arr.filter((element) => {
  return element < 50; // Condition -> return value
});
console.log(ans3);

// every : work same as like && (output : true/false)
var out1 = arr.every((element) => {
  console.log(element);
  return element < 50;
});
console.log("Every : ", out1);

// some : work same as like || (output : true/false)
var out1 = arr.some((element) => {
  console.log(element);
  return element < 10;
});
console.log("Some : ", out1);

// sort :

var array = [12, 64, 35, 2, 45, 37];
console.log("Original Array : ", array);

// Ascending
array.sort((a, b) => {
  return a - b;
});
console.log("Ascending Number : ", array);

// Descending
array.sort((a, b) => {
  return b - a;
});
console.log("Descending Number : ", array);
