let text = document.querySelector(".writing");
let circle = document.querySelector(".container")

text.addEventListener("mouseenter", textChange);
text.addEventListener("mouseleave", textLeave);

circle.addEventListener("mouseenter", enterCircle);

circle.addEventListener("mouseleave",leaveCircle )


function textChange() {
    text.style.color = "red";
}

function textLeave() {
    text.style.color = "blue";
}

function enterCircle() {
    circle.style.backgroundColor = "black";
}

function leaveCircle() {
    circle.style.backgroundColor = "coral";
}
