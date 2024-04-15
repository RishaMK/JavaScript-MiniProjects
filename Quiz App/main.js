const questions=[
    {
        question: "which is the largest mammal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "whale", correct: true},
            {text: "hyena", correct: false},
            {text: "lizard", correct: false}
        ]
    },
    {
        question: "what is the capital of india?",
        answers: [
            {text: "bengaluru", correct: false},
            {text: "chennai", correct: false},
            {text: "delhi", correct: true},
            {text: "mumbai", correct: false}
        ]
    },
    {
        question: "which popular singer sang the song 'Hello'",
        answers: [
            {text: "Lorde", correct: false},
            {text: "Taylor Swift", correct: false},
            {text: "Lana Del Ray", correct: false},
            {text: "Adele", correct: true}
        ]
    },
    {
        question: "which of these is a 1000cc bike",
        answers: [
            {text: "Yamaha r15", correct: false},
            {text: "Ninja h2", correct: true},
            {text: "Triumph Street Triple", correct: false},
            {text: "Yamaha r6", correct: false}
        ]
    }
];

var question = document.getElementById('question');
var answers = document.getElementById('answers');
var next = document.getElementById('next');
var finaltext = document.getElementById('finaltext');

let current=0,score=0;

function startQuiz(){
    current=0;
    score=0;
    next.innerHTML="Next";
    next.classList.add('next');
    showQuestion();
}

function showQuestion(){
    resetState();
    question.innerHTML=(current+1) + ". " + questions[current].question;

    questions[current].answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    next.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    var iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answers.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add('correct');
        }
        button.disabled=true;
    });

    next.style.display="block";
}

next.addEventListener('click',function(){
    if(current<questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
});

function handleNextBtn(){
    current++;
    if(current<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    question.innerHTML=`You scored ${score} out of ${questions.length}`;
    next.innerHTML="Restart";
    next.style.display="block";
}

startQuiz();