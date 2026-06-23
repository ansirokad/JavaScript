/* Recursion */

var a = 0;
var b = 1;
var n = 10;

function Fibonacci(count,a,b,c){

    if(count == 0) return;

    console.log(a); // start 0
    // console.log(b); // start 1

    var c = a + b;
    a = b;
    b = c;
    count--;

    Fibonacci(count,a,b);
}

Fibonacci(n,a,b);