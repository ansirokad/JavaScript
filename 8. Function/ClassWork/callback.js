function SecondFunction(){
    console.log("Function");
}


function main(callback){
    console.log("Main Function");
    callback();
}

main(SecondFunction);






function main(scanf){
    console.log("Main Function");
    scanf("Enter the data : ")
}

main(prompt);