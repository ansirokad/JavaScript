// Array :-
// It's a Collection Of Element which is Same Datatype / Different Datatype.
// index : starting -> 0

// Syntax : []

// Empty Array
var arr=[];
var arr = [1,2,3,4,5];
var arr = ["Ram","Sita"];
var arr = [1,2,3,4,5,"Ram","Sita",null,undefined];

// var arr = [21,22,23,24,25];

console.log(arr);


// 1. push -> add a new Element > last index, return : new length

var data = arr.push(99);
console.log(arr);
console.log(data); // arr length

// 2. pop -> remove elemnt  : last index,  return : removed value
var data = arr.pop();
console.log(data);
console.log(arr); // arr length

// 3. unshift -> add a new Element  : 0 index, return : new length
arr.unshift(95);
arr.unshift(100,true);
console.log(data);
console.log(arr); // arr length


// 4. shift -> remove elemnt  : 0 index,  return : removed value
arr.shift();
console.log(arr);


// 5. splice :- 
// arr.splice(3); // 2 index
arr.splice(1,5); // 1 index  : 5 num of element
console.log(arr);


var str = "Java";
console.log(str[1]);

