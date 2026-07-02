var index = 1;
document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  document.querySelectorAll("span")[0].innerHTML =
    document.querySelector(".input1").value;
  document.querySelectorAll("span")[1].innerHTML =
    document.querySelector(".input2").value;
  document.querySelectorAll("span")[2].innerHTML =
    document.querySelector(".input3").value;
  document.querySelectorAll("span")[3].innerHTML =
    document.querySelector(".input4").value;

  document.querySelector("table").innerHTML +=
    `<tr><td>${index++}</td><td>${document.querySelector(".input1").value}</td><td>${document.querySelector(".input2").value}</td><td>${document.querySelector(".input3").value}</td><td>${document.querySelector(".input4").value}</td></tr>`;
};
