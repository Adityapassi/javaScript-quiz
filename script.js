let startBtn = document.querySelector("#start-btn")
let nextBtn = document.querySelector("#next-btn")
let questionContainer = document.querySelector(".question-container")
let questionBox = document.querySelector(".question")
let answerBtns = document.querySelector("#answer-btn")
let score = document.querySelector("#score")

startBtn.addEventListener("click", startGame)

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

let shuffledQuestion, currentQuestionIndex
let scoreGet=0

// For Starting Game
function startGame() {
    startBtn.classList.add("hide")
    questionContainer.classList.remove("hide")
    // For Shuffle the Question Every Time
    shuffledQuestion = questions.sort(() => Math.random() - 0.5)

    // Return the index of the current Question
    currentQuestionIndex = 0;
    console.log(shuffledQuestion)
    setNextQuestion()
}


// For Calling the next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])

}


function showQuestion(question) {
    questionBox.textContent = currentQuestionIndex + 1 + ". " + question.question

    question.answer.forEach(answer => {
        let btn = document.createElement("button")
        btn.innerText = answer.text
        btn.classList.add("btn")
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }

        btn.addEventListener("click", selectAnswer)
        answerBtns.appendChild(btn)
    });

}

// For Checking the Answer If it is wrong or right
function selectAnswer(e) {
    let selectedBtn = e.target
    let correct = selectedBtn.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(btn => {
        setStatusClass(btn, btn.dataset.correct)
    })

    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
    }
    else {
        startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
    }
}

// For Setting the Status of the Elements when the answer is wrong or right
function setStatusClass(element, correct) {
    
    clearStatus(element)
    if (correct) {
        element.classList.add("correct")
    }
    else {
        element.classList.add("wrong")

    }

}

// Removing Classes from the element for next question
function clearStatus(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Javascript is an _______ language?",
        answer: [
            { text: "Object Oriented", correct: true },
            { text: "Procedural", correct: false },
            { text: "Object Based", correct: false },
            { text: "None of the Above", correct: false }
        ]
    },

    {
        question: "which of the following keywords is used to define a variable in Javascript?",
        answer: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "A and B both", correct: true },
            { text: "None of the Above", correct: false }
        ]
    },

    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: [
            { text: "getElementById", correct: false },
            { text: "getElementsByClassName", correct: false },
            { text: "A and B both", correct: true },
            { text: "None of the Above", correct: false }
        ]
    },

    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answer: [
            { text: "document.write", correct: false },
            { text: "console.log()", correct: false },
            { text: "window.alert()", correct: false },
            { text: "All of the Above", correct: true }
        ]
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        answer: [
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "let", correct: false },
            { text: "constant", correct: false }
        ]
    },

    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: [
            { text: "Both the datatype and the result of the expression are compared.", correct: true },
            { text: "Only the datatype of the expression is compared.", correct: false },
            { text: "Only the value of the expression is compared.", correct: false },
            { text: "None of the above.", correct: false }
        ]
    },


    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answer: [
            { text: "in", correct: true },
            { text: "is in", correct: false },
            { text: "exists", correct: false },
            { text: "lies", correct: false }
        ]
    },

    {
        question: "What is the use of the <noscript> tag in Javascript?",
        answer: [
            { text: "Clears all the cookies and cache.", correct: false },
            { text: "The contents are displayed by non-JS-based browsers.", correct: true },
            { text: "Both A and B.", correct: false },
            { text: "None of the above.", correct: false }
        ]
    },

    {
        question: "What does the Javascript “debugger” statement do?",
        answer: [
            { text: "It will debug all the errors in the program at runtime.", correct: false },
            { text: "It acts as a breakpoint in a program.", correct: true },
            { text: "It will debug error in the current statement if any.", correct: false },
            { text: "All of the above.", correct: false }
        ]
    },

    {
        question: "What is the output of the following code snippet ? 'console.log(NaN === NaN);'",
        answer: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "undefined", correct: false },
            { text: "error", correct: false }
        ]
    },

]


// For Resting buttons and next btn for next Question
function resetState() {
    clearStatus(document.body)
    nextBtn.classList.add("hide")

    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

