/*  Expression Function */

// Q-1. Build a modular billing system using functions.

var products = [
  {
    p_name: "Pen",
    price: 10,
  },
  {
    p_name: "Pencil",
    price: 5,
  },
  {
    p_name: "Book",
    price: 50,
  },
];

var showProduct = function () {
  for (let i = 0; i < products.length; i++) {
    alert(JSON.stringify(products[i]));
  }
};
showProduct();

var bill = 0;
var quantity = 0;

var choice = prompt(
  "1. for pen\n 2. for pencil\n 3. for Book \n\n Enter Your Choice :",
);
console.log(choice);

var quantity = function () {
  switch (choice) {
  case "1":
    quantity = prompt("Enter Quantity : ");
    bill += products[0].price * quantity;
    break;

  case "2":
    quantity = prompt("Enter Quantity : ");
    bill += products[1].price * quantity;
    break;

  case "3":
    quantity = prompt("Enter Quantity : ");
    bill += products[2].price * quantity;
    break;

  default:
    break;
  }
};

function totalBill() {
    if(bill >= 500){
        bill = bill * 0.10;
        console.log(bill)
    }
} totalBill();

// Q-2. Check if a number is Perfect using function.

// var perfectNumber = function (num){
//     var sum = 0;

//     for(let i = 0; i < num/2; i++)
//     {
//         sum += i;
//     }
// }
// perfectNumber();
