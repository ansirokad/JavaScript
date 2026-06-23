// function main(){
    // console.log("Main Function");
    // function innerFunction(){
        // console.log("Inner Function");
    // }
    // innerFunction();
// }main();


function main(){
    console.log("Main Function");

    function innerFunction(){
        console.log("Inner Function");

        function innerFuntion1(){
            console.log("Inner Function 1");
        }
        innerFuntion1();
    }
    innerFunction();
}main();