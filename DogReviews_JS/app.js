const reviews = [
 {
     id: 1,
     name: "Mookie",
     job: "Cool Dog",
     img: "https://res.cloudinary.com/dj7m2pvha/image/upload/v1648575216/pic_4_exukac.jpg",
     text: "Amazing Experience",
 },

 {
     id: 2,
     name: "Mr. Amazing",
     job: "Superstar",
     img: "https://res.cloudinary.com/dj7m2pvha/image/upload/v1648575214/pic_3_gaf0ts.jpg",
     text: 'Dog Food bores me',
 } ,

 {
    id: 3,
    name: "SpongeBob S.",
    job: "Rap Artist",
    img: 'https://res.cloudinary.com/dj7m2pvha/image/upload/v1648578690/karsten-winegeart-oU6KZTXhuvk-unsplash_l01tgb.jpg',
    text: 'Ive seen better',
 },

{
    id: 4,
    name: "Sally Super",
    job: "Model",
    img: 'https://res.cloudinary.com/dj7m2pvha/image/upload/v1648578733/charlesdeluvio-pOUA8Xay514-unsplash_ihdthp.jpg',
    text: 'Not too Shabby',

}
];




// select buttons
const prevButton = document.querySelector(".left-btn");
const forwardButton = document.querySelector(".right-btn");

// select items that you'd want to change
const profilePic = document.getElementById("profilePic");
const jobTitle = document.getElementById("title");
const description = document.getElementById("description");
const personName = document.getElementById("person");

// currentPerson is a global item.
let currentPerson = 0;

window.addEventListener("DOMContentLoaded", () => {
showPerson();
});


forwardButton.addEventListener("click", () => {
currentPerson++;

if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
}

showPerson();
});

// previous Button
prevButton.addEventListener("click", () => {
currentPerson--;

if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
}


showPerson();
});







function showPerson() {
    let items = reviews[currentPerson];
    profilePic.src = items.img;
    jobTitle.textContent = items.job;
    description.textContent = items.text;
    personName.textContent = items.name;
};
