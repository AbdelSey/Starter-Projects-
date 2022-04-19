let container = document.getElementById("container");


const names = [

{
    name: "Patrick",
    age: 47
},

]

// gets name from data

const getName = () => {


setTimeout(() => {
let output= "";
names.map(name => output += `${name.name}`)

container.innerHTML = output;

}, 1000)

};




// creates a new name

const createName = (name, callback) => {

setTimeout(() => {
    names.push(name);
    callback();

}, 2000)

};





// event listener to get and create a new name.

container.addEventListener("click", () => {

    createName({name: "Alan"}, getName);

})
