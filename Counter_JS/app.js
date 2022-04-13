const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn")


let count = 0;

btns.forEach((btn) => {

btn.addEventListener("click", (item) => {
const styles = item.currentTarget.classList;

if (styles.contains("decrease")) {
    count--;
}
else if (styles.contains("increase")) {
    count++;
}
else {
    count = 0;
}

if (count > 0) {
    value.style.color = "green"
}
if (count < 0) {
    value.style.color = "red";
}
if (count === 0) {
    value.style.color = "black"
}
value.textContent = count;

});


});





// Trouble using switch statement to replace the if statement.

/*
switch (count) {
            case (count > 0):
            value.style.color = "green";
            break;
            case (count < 0):
            value.style.color = "red";
            break;
            case (count === 0):
                value.style.color = "black";
                break;
        }

        if(count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if ( count === 0) {
            value.style.color = "black"
        }
        */
