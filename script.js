const quizz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const quizEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let Counter = 0;
let Score = 0;

AvanceQuizz();

function AvanceQuizz() {
    getanswer();

    const QuizData = CounterData[Counter];
    quizEl.innerText = QuizData.question;
    a_text.innerText = QuizData.a;
    b_text.innerText = QuizData.b;
    c_text.innerText = QuizData.c;
    d_text.innerText = QuizData.d;
}

function getanswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitbtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === CounterData[Counter].correct) Score++;
    }
    Counter++;
    if (Counter < CounterData.length) {
        AvanceQuizz();
    } else {
        quizz.innerHTML = `<h2>You Answerd ${Score}/${CounterData.length}
        <button oncklick="show()">Show Answers</button>`;
    }
});