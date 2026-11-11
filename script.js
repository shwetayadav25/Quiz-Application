const questions = [
    {
        question: "1. Which language is used to create web pages?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: "HTML"
    },
    {
        question: "2. Which language is used for styling web pages?",
        options: ["CSS", "SQL", "C", "Python"],
        answer: "CSS"
    },
    {
        question: "3. What does JS stand for?",
        options: ["Java System", "JavaScript", "Just Script", "Java Software"],
        answer: "JavaScript"
    },
    {
        question: "4. Which tag is used for a paragraph in HTML?",
        options: ["<h1>", "<div>", "<p>", "<br>"],
        answer: "<p>"
    },
    {
        question: "5. Which symbol is used for comments in JavaScript (single line)?",
        options: ["##", "//", "<!-- -->", "**"],
        answer: "//"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

function showQuestion() {
    const current = questions[currentQuestion];

    questionElement.innerText = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(function(option) {
        const button = document.createElement("button");

        button.innerText = option;
        button.classList.add("option-btn");

        button.addEventListener("click", function() {
            selectAnswer(button, option);
        });

        optionsElement.appendChild(button);
    });

    nextButton.disabled = true;
}

function selectAnswer(selectedButton, selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    const allButtons = optionsElement.querySelectorAll("button");

    allButtons.forEach(function(button) {
        button.disabled = true;

        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.style.display = "none";
    resultBox.style.display = "block";

    document.getElementById("score").innerText =
        "Your Score: " + score + " / " + questions.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    resultBox.style.display = "none";
    quizBox.style.display = "block";

    showQuestion();
}

showQuestion();