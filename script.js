const quizz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const quizEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const timeCount = document.querySelector(".timer_sec");
const submitbtn = document.getElementById("submit");

// global declaration

let Counter = 0;
let Score = 0;
let timer;
let TimeValue;
let duration;
let duree;

AvanceQuizz();
countDown(30, 10);

// function of answers

function AvanceQuizz() {
    getanswer();

    const QuizData = CounterData[Counter];
    quizEl.innerText = QuizData.question;
    a_text.innerText = QuizData.a;
    b_text.innerText = QuizData.b;
    c_text.innerText = QuizData.c;
    d_text.innerText = QuizData.d;
}
// function that check answers

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
    clearInterval(duree);
    countDown(30, 10);
    if (Counter < CounterData.length) {
        AvanceQuizz();
        // StartTimer(TimeValue);
    } else {
        quizz.innerHTML = `<h2>You Answerd ${Score}/${CounterData.length}
        <button oncklick="show()">Show Answers</button>`;
    }
});

function countDown(duration, q_count) {
    if (Counter < q_count) {
        duree = setInterval(() => {
            timeCount.innerHTML = "00:" + duration;
            // duration = duration < 10 ? `0 ${duration}` : `${duration}`;

            if (--duration < 0) {
                clearInterval(timer);
                submitbtn.click();
            }
        }, 1000);
    }
}

function getspan(num) {
    for (i = 0; i < num; i++) {
        let addbullet = document.createElement("span");
    }
}