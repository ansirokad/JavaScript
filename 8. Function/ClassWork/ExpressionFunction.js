/* Expession Function */

// i] without argument and without return type 
     
var printData = function ()
{
    console.log("Hello World");
}
printData();


// ii] with argument and without return type 

var addition = function (n1,n2){
    console.log("sum is : ",n1+n2);
}
addition(2,3);


// iii] without argument and with return type 

let PI = function (){
    return 3.14;
}
console.log(PI());


// iv] with argument and with return type

const result = function (marks){
    if(marks>=33){
        return "Pass";
    }else{
        return "Fail";
    }
}
console.log(result(5));