// Q-1. Write a function to validate a 6-digit OTP.

(function (){
    var RandomNumber = parseInt(Math.random() * 100000) + 100000;
    console.log(RandomNumber);
    var OTP = Number(prompt ("Enter the 6-digit OTP : "));

    if(OTP == RandomNumber){
        console.log("OTP Successfully!");
    }
    else{
        console.log("Invalid OTP!");
    }
})();