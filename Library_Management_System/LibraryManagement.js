let Books = [
  {
    BookID: 1,
    BookName: "Math's",
    AuthorName: "Aryabhatt",
    Category: "Mathematics",
    Quantity: 5,
  }
];

document.querySelector(".addBook").onclick = function () {
  let book = {
    BookID: Number(prompt("Enter Book Id : ")),
    BookName: prompt("Enter Book Name : "),
    AuthorName: prompt("Enter Book Author Name : "),
    Category: prompt("Enter Book Category : "),
    Quantity: Number(prompt("Enter Book Quantity : ")),
  };
  Books.push(book);

  document.querySelector("div").innerHTML += `Book Added successfully! <br>`;
};

document.querySelector(".displayBooks").onclick = function () {
  for (const element of Books) {
    document.querySelector("div").innerHTML += `<p>BookID : ${element.BookID}</p>`;
    document.querySelector("div").innerHTML += `<p>BookName : ${element.BookName}</p>`;
    document.querySelector("div").innerHTML += `<p>AuthorName : ${element.AuthorName}</p>`;
    document.querySelector("div").innerHTML += `<p>Category : ${element.Category}</p>`;
    document.querySelector("div").innerHTML += `<p>Quantity : ${element.Quantity}</p>`;
  }
};

document.querySelector(".issueBook").onclick = function () {
  let name = prompt("Enter Book Name : ");

  for (const element of Books) {
    if (element.BookName == name) {
      if (element.Quantity > 0) {
        element.Quantity--;
        document.querySelector("div").innerHTML += `Book issue successfully! <br>`;
      } else {
        document.querySelector("div").innerHTML += `Book issue not available! <br>`;
      }
    } 
  }
  document.querySelector("div").innerHTML += `Book not found! <br>`;
};

document.querySelector(".returnBook").onclick = function () {
  let bName = prompt("Enter Book Name : ");

  for (const element of Books) {
    if (element.BookName == bName) {
      if (element.Quantity > 0) {
        element.Quantity++;
        document.querySelector("div").innerHTML += `Book return successfully! <br>`;
      } else {
        document.querySelector("div").innerHTML += `Book return not available! <br>`;
      }
    } 
  }
  document.querySelector("div").innerHTML += `Book not found! <br>`;
};

document.querySelector(".deletebook").onclick = function () {
  let bookName = prompt("Enter Book Name : ");
  let index = 0;

  for (const element of Books) {
    if (element.BookName == bookName) {
      Books.splice(index, 1);
      document.querySelector("div").innerHTML += `Book delete successfully! <br>`;
    }
  }
  document.querySelector("div").innerHTML += `Book not found! <br>`;
};

document.querySelector(".getBookStatus").onclick = function () {
  let b_Name = prompt("Enter Book Name : ");

  for (const element of Books) {
    if (element.BookName == b_Name) {
      if (element.Quantity > 0) {
        document.querySelector("div").innerHTML += `Book is Available! <br>`;
      } else {
        document.querySelector("div").innerHTML += `Book not available! <br>`;
      }
    }
  }
  document.querySelector("div").innerHTML += `Book not found! <br>`;
};

document.querySelector(".totalBook").onclick = function () {
  document.querySelector("div").innerHTML += `Total Book : ${Books.length} <br>`;
};
