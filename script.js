const questions = [
    {
        question: "Who is the current President of Nigeria?",
        options: ["Bola Tinubu", "Yemi Osinbajo", "Atiku Abubakar", "Goodluck Jonathan"],
        correctAnswer: "Bola Tinubu"
    },
    {
        question: "Which Nigerian city hosted the 2022 FIFA World Cup qualifying match against Ghana?",
        options: ["Lagos", "Abuja", "Port Harcourt", "Kano"],
        correctAnswer: "Abuja"
    },
    {
        question: "Who is the governor of Lagos State as of 2025?",
        options: ["Babajide Sanwo-Olu", "Akinwunmi Ambode", "Bola Tinubu", "Rauf Aregbesola"],
        correctAnswer: "Babajide Sanwo-Olu"
    },
    {
        question: "Which Nigerian company became the first in Africa to reach a $1 billion valuation in 2021?",
        options: ["Jumia", "Flutterwave", "Paystack", "Andela"],
        correctAnswer: "Flutterwave"
    },
    {
        question: "In 2022, who was appointed as the new Chairman of the Economic and Financial Crimes Commission (EFCC)?",
        options: ["Abdulrasheed Bawa", "Ibrahim Magu", "Nuhu Ribadu", "Magu Ibrahim"],
        correctAnswer: "Abdulrasheed Bawa"
    },
    {
        question: "Which Nigerian musician won the 2022 Grammy Award for Best Global Music Album?",
        options: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"],
        correctAnswer: "Burna Boy"
    },
    {
        question: "In 2022, Nigeria launched its first digital currency called?",
        options: ["Bitcoin", "E-Naira", "CryptoNaira", "NairaToken"],
        correctAnswer: "E-Naira"
    },
    {
        question: "Which Nigerian state has the largest population?",
        options: ["Lagos", "Kano", "Rivers", "Kaduna"],
        correctAnswer: "Lagos"
    },
    {
        question: "In 2021, which Nigerian state became the first to implement a state-wide ban on open grazing?",
        options: ["Kaduna", "Benue", "Ekiti", "Kogi"],
        correctAnswer: "Kaduna"
    },
    {
        question: "Which Nigerian football club won the 2020/2021 Nigeria Professional Football League (NPFL) season?",
        options: ["Rivers United", "Enyimba", "Kano Pillars", "Heartland FC"],
        correctAnswer: "Rivers United"
    }
];

//making the questions to be randomed

function RandomQuestions(array){
for(let i=0; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]]=[array[j], array[i]]


}
}


let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressText = document.getElementById("progress-text");
const nextButton = document.getElementById("next-button");
const finalScoreText = document.getElementById("final-score");
const resultsContainer = document.getElementById("results-container");
const quizContainer = document.getElementById("quiz-container");
const restartButton = document.getElementById("restart-button");


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = ""; 

    currentQuestion.options.forEach(option => {
        const answerDiv = document.createElement("div");
        answerDiv.textContent = option;
        answerDiv.classList.add("answer-option");
        answerDiv.addEventListener("click", () => handleAnswer(option, answerDiv));
        answersContainer.appendChild(answerDiv);
    });

    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function handleAnswer(selectedAnswer, answerDiv) {
    const currentQuestion = questions[currentQuestionIndex];

    
    const allOptions = document.querySelectorAll(".answer-option");
    allOptions.forEach(option => option.classList.add("disabled"));

    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        answerDiv.classList.add("correct");
    } else {
        answerDiv.classList.add("incorrect");
        const correctOption = Array.from(allOptions).find(option => option.textContent === currentQuestion.correctAnswer);
        correctOption.classList.add("correct");
    }

    
    nextButton.disabled = false;
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    finalScoreText.textContent = `Your final score is: ${score} / ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true; 
    } else {
        showResults();
    }
});
