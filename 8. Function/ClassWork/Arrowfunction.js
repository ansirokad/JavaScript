/* Arrow Function */

// i] without argument and without return type 
     
var printData = () => {
    console.log("Hello World");
}
printData();
     
var printData = () => console.log("Hello World");
printData();


// ii] with argument and without return type 

var addition = (n1,n2) => {
    console.log("sum is : ",n1+n2);
}
addition(2,3);


// iii] without argument and with return type 

let PI = () => {
    return 3.14;
}
console.log(PI());

let Pi = () =>  22/7;
console.log(Pi());


// iv] with argument and with return type

const result = (marks) => {
    if(marks>=33){
        return "Pass";
    }else{
        return "Fail";
    }
}
console.log(result(5));