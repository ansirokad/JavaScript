// String : It is a collection of character.

// Using Double Quote
var name = "Sita";
console.log(name, typeof name);

// Using Single Quote
var name = "Shreeja";
console.log(name, typeof name);

// Using Backtick : 1.string formating  2.multiline string
var name = `Rahi`;
console.log(name, typeof name);

// Print Statement : Your Name is Nija. Your Age is 15.
var fname = "Nija";
var age = 15;

console.log("Youe Name is ", fname, ". Your Age is ", age, ".");
console.log("Youe Name is ", fname, ". Your Age is ", age, ".");


/* String Formating : */

console.log(`Your Name is ${fname}. Your Age is ${age}.`);
// console.log('Your Name is ${fname}. Your Age is ${age}.'); // wrong
// console.log("Your Name is ${fname}. Your Age is ${age}."); // wrong

console.log(`This is
     New Line.`);
/*
console.log("This is
     New Line.");       // wrong
console.log('This is
     New Line.');       // wrong
*/        

console.log("\n");


var para = "This is Paragraph.";
console.log(para);

// 1. Property : Length 
console.log("Length : ",para.length);


// 2. Method :

// toUpperCase
console.log(para.toUpperCase());

// toLowerCase
console.log(para.toLowerCase());

// Include
console.log(para.includes("This"));

// Spilt
console.log(para.split()); // sentence
console.log(para.split("")); // Single letter
console.log(para.split(" ")); // Single Word


