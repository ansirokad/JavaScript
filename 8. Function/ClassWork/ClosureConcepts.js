function main(){
    var a = 12;
    return function (){
        return a;
    }
}


var print =  main();

console.log(print());