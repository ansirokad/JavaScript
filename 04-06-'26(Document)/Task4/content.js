console.log("Before Modification:");
console.log(document.getElementById('heading').innerText);
console.log(document.getElementById('paragraph').innerText);
console.log(document.getElementById('content').innerText);


console.log("After Modification:");
console.log(document.getElementById('heading').innerText = "Welcome to JavaScript DOM");
console.log(document.getElementById('paragraph').innerText = "Learning Content Modification in JavaScript");
console.log(document.getElementById('content').innerText = "Frontend Development with JavaScript");