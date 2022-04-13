
const quizData = [
{
    question: "How many fish in the sea?",
    a: "10",
    b: "24",
    c: "110",
    d: "3 million",
    correct: "a",
},

{
    question: "What is the most popular sport in the world?",
    a: "Soccer",
    b: "Cricket",
    c: "Basketball",
    d: "Tennis",
    correct: "a",


},

{
    question: "How many reindeer does Santa have?",
    a: "3",
    b: "53",
    c: "9",
    d: "23",
    correct: "c",

},

];


// first start by selecting what options that you actually want to change.

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit-btn");



let currentQuiz = 0;

loadQuiz();

// everytime we click "submit" we are going to call "loadQuiz" function.

function loadQuiz() {
const currentQuizData = quizData[currentQuiz];
questionEl.textContent = currentQuizData.question;
a_text.textContent = currentQuizData.a;
b_text.textContent = currentQuizData.b;
c_text.textContent = currentQuizData.c;
d_text.textContent = currentQuizData.d;

}



submitBtn.addEventListener("click", () => {

currentQuiz < quizData.length ? loadQuiz() : alert("Congrats you finished the Quiz!");

currentQuiz++


})
