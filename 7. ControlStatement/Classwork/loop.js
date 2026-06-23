var bill = 0;
var quantity = 0;

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
    p_name: "Bottle",
    price: 100,
  },
];

for (let i = 0; i < products.length; i++) {
  alert(JSON.stringify(products[i]));
}

var choice = prompt(
  "1. for pen\n2. for pencil\n3. for bottle \n\nEnter Your Choice :",
);
console.log(choice);

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

console.log(bill);
