var user = {
    firstname : "Shree",
    lastname : "Maheta",
    age :24,
    gender : "Female",
    contactNo : 1234567890
};
console.log(user);

// console.log(user.first name);  //error
// console.log(user."first name");  //error
console.log(user["first name"]); 

/* Loop : basic for loop, for-of loop, for-in loop */

// for-in Loop : Object Loop  
for (const key in user) {
   console.log(typeof key,user[key]);
}

// Computing Object : []

var k1 = "fname";
var k2 = "lname";

var v1 = "shreeja";
var v2 = "shah";

var obj1 = {
    k1 : v1,
    k2 : v2
}
console.log(obj1);

var obj2 = {
    [k1] : v1,
    [k2] : v2
}
console.log(obj2);


// Nested Object

var user = {
    firstname : "Rinal",
    lastname : "Shingala",
    age :25,
    gender : "Female",
    contactNo : 1234567890,
    // address : {
    //     city : "Rajkot",
    //     state : "Gujarat",
    //     nation : "India"
    // }
};

console.log(user);
console.log(user.address);
console.log(user["address"]);
// console.log(user.address.city);
// console.log(user.address["state"]);
console.log("\n");


// console.log(user.address.nation);
// console.log(user["address"].city);
// console.log(user.address["state"]);
// console.log(user["address"]["city"]);


//  Optional Chaining : (?.)

console.log(user?.address?.nation);
console.log(user?.["address"]?.city);
console.log(user?.address?.["state"]);
console.log(user?.["address"]?.["city"]);


// Array in Object : 
var user = {
    firstname : "Rahi",
    lastname : "Gohil",
    age :15,
    gender : "Female",
    hobbies : ["Vollyball","Football"]
};
console.log(user);
console.log(user.hobbies);
console.log(user.hobbies[1]);

// Object in Array  : 
var arr = [
    {id : 1,"fname" : "Ram"},
    {id : 2,"fname" : "Sahil"},
    {id : 3,"fname" : "Ravi"}
]
console.log(arr);
console.log(arr[2]);



// Array Descruturing :
// Object Descruturing :