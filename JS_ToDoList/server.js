const toDoBtn = document.getElementById('toDoBtn')
const inputField = document.getElementById("inputText");
const todoSpace = document.getElementById("toDoContainer");



toDoBtn.addEventListener("click", () => {

// creates a new element which will hold the text from the input field

let newText = document.createElement("p")

// puts new element inside our div container
todoSpace.appendChild(newText)

// add the value from the inputfield into the paragraph element

newText.innerText = inputField.value;

// allows to clear the value after it has been added
inputField.value = "";

newText.classList.add("text-styling");

newText.addEventListener("click", () => {

newText.style.textDecoration = "line-through";


})

newText.addEventListener("dblclick", () => {

todoSpace.removeChild(newText);


})



})
