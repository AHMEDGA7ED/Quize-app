const quizData = [
    {
        question: "In what US State is the city Nashville?",
        a: 'Mississippi',
        b: 'Tennessee',
        c: 'Alabama',
        d: 'South Carolina',
        correct: 'b'
    },
    {
        question: "How many human players are there on each side in a polo match?",
        a: 'Five',
        b: 'Three',
        c: 'Four',
        d: 'Two',
        correct: 'c'
    },
    {
        question: "What kind of food is Penne?",
        a: 'Soup',
        b: 'Sandwich',
        c: 'Pasta',
        d: 'Bread',
        correct: 'c'
    },
    {
        question: "How many notes are there in a musical scale?",
        a: 'Seven',
        b: 'Eight',
        c: 'Six',
        d: 'Nine',
        correct: 'a'
    },
    {
        question: "What temperature Celsius does water boil at?",
        a: '212',
        b: '240',
        c: '120',
        d: '100',
        correct: 'd'
    },
    {
        question: "What is the LONGEST river in the world?",
        a: 'Amazon River',
        b: 'Nile River',
        c: 'Congo River',
        d: 'Yangtze River',
        correct: 'b'
    },
    {
        question: "What is the LARGEST river in the world?",
        a: 'Amazon River',
        b: 'Nile River',
        c: 'Congo River',
        d: 'Yangtze River',
        correct: 'a'
    },
    {
        question: "What is the tallest mountain in the world?",
        a: 'Mt.Everest',
        b: 'Mt.Kilimanjaro',
        c: 'Mt.Denali',
        d: 'Mt.McKinley',
        correct: 'a'
    }
]

const questionText = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const currentQuestion = document.getElementById('currentQuestion')
const questionsTotal = document.getElementById('questionsTotal')
const submitButton = document.getElementById('submit')
const answerElements = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')

let currentQuiz = 0
let score = 0
questionsTotal.innerHTML = quizData.length
currentQuestion.innerHTML = 1

loadQuiz()

function loadQuiz() {
    answerElements.forEach(answerEl => answerEl.checked = false)
    questionText.innerHTML = quizData[currentQuiz].question
    a_text.innerHTML = quizData[currentQuiz].a
    b_text.innerHTML = quizData[currentQuiz].b
    c_text.innerHTML = quizData[currentQuiz].c
    d_text.innerHTML = quizData[currentQuiz].d
}

function getSelected() {
    let answer = undefined
    answerElements.forEach(answerEl => {
        if (answerEl.checked) answer = answerEl.id
    })
    return answer
}

submitButton.addEventListener("click", () => {
    const answer = getSelected()
    const reaction = score > quizData.length / 2 ? "Good Job!" : "You can do better, try again!"
    if (answer) {
        ((answer === quizData[currentQuiz].correct) && score++)
        currentQuiz++
        currentQuestion.innerHTML++
        currentQuiz < quizData.length ? loadQuiz() : quiz.innerHTML = `<h2 class="finished">You correctly answered ${score} out of ${quizData.length} Questions. ${reaction}</h2><button class="finished-btn" onClick="location.reload()">Play Again</button>`
    }
})