// SHOW HOME PAGE FIRST

document.getElementById(
"home").style.display = "flex";

// PAGE SWITCHING

function showPage(pageId){

  // SELECT ALL PAGES

  const pages =
  document.querySelectorAll(".page");

  // HIDE ALL PAGES

  pages.forEach(page => {

    page.style.display = "none";

  });

  // SHOW SELECTED PAGE

  if(pageId === "home" ||
     pageId === "contact" ||
     pageId === "feedbackPage"){

    document.getElementById(pageId)
    .style.display = "flex";

  }

  else{

    document.getElementById(pageId)
    .style.display = "block";

  }

}

// QUIZ DATA

const quizzes = {

  html: [

    {
      question:"HTML stands for?",

      options:[
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Language",
        "Home Tool Markup Language"
      ],

      answer:"Hyper Text Markup Language"
    },

    {
      question:"Which tag is used for paragraph?",

      options:[
        "<p>",
        "<h1>",
        "<div>",
        "<br>"
      ],

      answer:"<p>"
    },

    {
      question:"Which tag is used for image?",

      options:[
        "<img>",
        "<image>",
        "<pic>",
        "<src>"
      ],

      answer:"<img>"
    },

    {
      question:"HTML file extension is?",

      options:[
        ".html",
        ".ht",
        ".hml",
        ".php"
      ],

      answer:".html"
    },

    {
      question:"Which tag creates line break?",

      options:[
        "<br>",
        "<break>",
        "<lb>",
        "<hr>"
      ],

      answer:"<br>"
    }

  ],

  css: [

    {
      question:"CSS is used for?",

      options:[
        "Styling",
        "Database",
        "Server",
        "Programming"
      ],

      answer:"Styling"
    },

    {
      question:"CSS stands for?",

      options:[
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Sheet",
        "Colorful Style Sheet"
      ],

      answer:"Cascading Style Sheets"
    },

    {
      question:"Which property changes text color?",

      options:[
        "color",
        "background",
        "font-size",
        "text-style"
      ],

      answer:"color"
    },

    {
      question:"Which property changes background color?",

      options:[
        "background-color",
        "bgcolor",
        "color",
        "background-image"
      ],

      answer:"background-color"
    },

    {
      question:"Which symbol is used for class selector?",

      options:[
        ".",
        "#",
        "*",
        "@"
      ],

      answer:"."
    }

  ],

  js: [

    {
      question:"JavaScript is?",

      options:[
        "Programming Language",
        "Database",
        "Server",
        "Browser"
      ],

      answer:"Programming Language"
    },

    {
      question:"Which keyword declares variable?",

      options:[
        "let",
        "int",
        "string",
        "define"
      ],

      answer:"let"
    },

    {
      question:"Which symbol is used for comments?",

      options:[
        "//",
        "**",
        "##",
        "<!-- -->"
      ],

      answer:"//"
    },

    {
      question:"JavaScript file extension is?",

      options:[
        ".js",
        ".java",
        ".javascript",
        ".jsx"
      ],

      answer:".js"
    },

    {
      question:"Which function prints in console?",

      options:[
        "console.log()",
        "print()",
        "echo()",
        "write()"
      ],

      answer:"console.log()"
    }

  ],

  cpp: [

    {
      question:"C++ developed by?",

      options:[
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Guido van Rossum"
      ],

      answer:"Bjarne Stroustrup"
    },

    {
      question:"Which symbol ends statement in C++?",

      options:[
        ";",
        ":",
        ".",
        ","
      ],

      answer:";"
    },

    {
      question:"Which header is used for input/output?",

      options:[
        "<iostream>",
        "<stdio>",
        "<conio>",
        "<math>"
      ],

      answer:"<iostream>"
    },

    {
      question:"Which keyword is used for class?",

      options:[
        "class",
        "Class",
        "define",
        "object"
      ],

      answer:"class"
    },

    {
      question:"Which operator is used for output?",

      options:[
        "<<",
        ">>",
        "::",
        "=="
      ],

      answer:"<<"
    }

  ]

};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

// LOAD QUIZ

function loadQuiz(subject){

  currentQuiz =
  quizzes[subject];

  currentQuestion = 0;

  score = 0;

  document.getElementById(
  "score").innerText = score;

  document.getElementById(
  "quizBox").style.display =
  "block";

  document.getElementById(
  "subjectTitle").innerText =
  subject.toUpperCase()
  + " Quiz";

  showQuestion();

}

// SHOW QUESTION

function showQuestion(){

  clearInterval(timer);

  timeLeft = 15;

  document.getElementById(
  "time").innerText = timeLeft;

  timer = setInterval(() => {

    timeLeft--;

    document.getElementById(
    "time").innerText = timeLeft;

    if(timeLeft <= 0){

      clearInterval(timer);

      nextQuestion();

    }

  },1000);

  const q =
  currentQuiz[currentQuestion];

  document.getElementById(
  "question").innerText =
  q.question;

  const optionsDiv =
  document.getElementById(
  "options");

  optionsDiv.innerHTML = "";

  q.options.forEach(option => {

    const btn =
    document.createElement("div");

    btn.classList.add("option");

    btn.innerText = option;

    btn.onclick = () =>
    checkAnswer(btn, option);

    optionsDiv.appendChild(btn);

  });

  document.getElementById(
  "quizFeedback").innerText =
  "";

  updateProgress();

}

// CHECK ANSWER

function checkAnswer(element,
selected){

  // STOP TIMER

  clearInterval(timer);

  // GET ALL OPTIONS

  const allOptions =
  document.querySelectorAll(".option");

  // DISABLE MULTIPLE CLICKS

  allOptions.forEach(option => {

    option.style.pointerEvents =
    "none";

  });

  // CORRECT ANSWER

  const correct =
  currentQuiz[currentQuestion]
  .answer;

  // IF CORRECT

  if(selected === correct){

    element.classList.add(
    "correct");

    document.getElementById(
    "quizFeedback").innerText =
    "✅ Correct Answer";

    // SCORE +1 ONLY ONE TIME

    score++;

    document.getElementById(
    "score").innerText = score;

  }

  // IF WRONG

  else{

    element.classList.add(
    "wrong");

    document.getElementById(
    "quizFeedback").innerText =
    "❌ Wrong Answer";

    // SHOW CORRECT ANSWER

    allOptions.forEach(option => {

      if(option.innerText === correct){

        option.classList.add(
        "correct");

      }

    });

  }

}

// NEXT QUESTION

function nextQuestion(){

  currentQuestion++;

  if(currentQuestion <
  currentQuiz.length){

    showQuestion();

  }

  else{

    document.getElementById(
    "quizBox").innerHTML =

    `
    <h2>
      Quiz Completed 🎉
    </h2>

    <h3>
      Final Score : ${score}
    </h3>
    `;

  }

}

// UPDATE PROGRESS

function updateProgress(){

  const progress =
  ((currentQuestion + 1)
  / currentQuiz.length)
  * 100;

  document.getElementById(
  "progressBar").style.width =
  progress + "%";

}

// FEEDBACK FORM

const form =
document.getElementById(
"feedbackForm");

form.addEventListener(
"submit",

function(e){

  e.preventDefault();

  alert(
  "Feedback Submitted  ✅"
  );

  form.reset();

});