

let button = document.getElementById("btn");



const loadText = () => {

let xhr = new XMLHttpRequest();

xhr.open("GET", "info.json", true);



xhr.onload = () => {
let output = "";

const x = xhr.responseText;

const info = JSON.parse(x);

for (let i = 0; i < info.length; i++) {

    output += `My dog's name is ${info[i].name}`
}


document.body.innerHTML = output;
}




xhr.send();


};




button.addEventListener("click", loadText)
