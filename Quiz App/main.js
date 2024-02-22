const questions=[
    {
        question: "which is the largest mammal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "ur mom", correct: true},
            {text: "hyena", correct: false},
            {text: "nimmakkan", correct: false}
        ]
    },
    {
        question: "what is the capital of india?",
        answers: [
            {text: "shark", correct: false},
            {text: "whale", correct: false},
            {text: "delhi", correct: true},
            {text: "nimmakkan", correct: false}
        ]
    },
    {
        question: "hello,____",
        answers: [
            {text: "shark", correct: false},
            {text: "whale", correct: false},
            {text: "hyena", correct: false},
            {text: "can you hear me?", correct: true}
        ]
    },
    {
        question: "ninna poojege",
        answers: [
            {text: "shark", correct: false},
            {text: "bande", correct: true},
            {text: "hyena", correct: false},
            {text: "nimmakkan", correct: false}
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