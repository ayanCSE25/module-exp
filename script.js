const quiz = [
{
question:"Which language is used for web development?",
options:["HTML","Python","C","Java"],
answer:0
},
{
question:"Which tag creates a hyperlink?",
options:["img","a","link","href"],
answer:1
},
{
question:"CSS stands for?",
options:[
"Creative Style Sheets",
"Cascading Style Sheets",
"Colorful Style Sheets",
"Computer Style Sheets"
],
answer:1
},
{
question:"JavaScript is used for?",
options:[
"Styling",
"Database",
"Interactivity",
"Hardware"
],
answer:2
},
{
question:"Which is frontend language?",
options:[
"HTML",
"SQL",
"Python",
"PHP"
],
answer:0
}
];

let current=0;
let score=0;
let time=15;
let timer;
function loadQuestion(){

document.getElementById("question").innerHTML=
quiz[current].question;

for(let i=0;i<4;i++){
document.getElementById("opt"+i).innerHTML=
quiz[current].options[i];
}document.getElementById("progressBar").value=current+1;

document.querySelectorAll('input[name="answer"]')
.forEach(r=>r.checked=false);

startTimer();
}function startTimer(){

clearInterval(timer);
time=15;

timer=setInterval(function(){

document.getElementById("timer").innerHTML=
"Time Left: "+time+" sec";

time--;

if(time<0){
clearInterval(timer);
nextQuestion();
}

},1000);

}
function nextQuestion(){

clearInterval(timer);

let selected=document.querySelector(
'input[name="answer"]:checked'
);

if(selected && 
parseInt(selected.value)===quiz[current].answer){
score++;
}

current++;
if(current<quiz.length){
loadQuestion();
}
else{
document.querySelector(".quiz-box").innerHTML=
"<h1>Quiz Completed</h1>"+
"<h2>Your Score: "+score+"/"+quiz.length+"</h2>";
}

}

loadQuestion();