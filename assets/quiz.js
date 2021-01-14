// Timer
var startBtn = document.getElementById('start-quiz');
var timerEl = document.getElementById('countdown');


function countdown() {
  var timeLeft = 60;

var timeInterval = setInterval(function() {
    if(timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if(timeLeft === 1) {
      timerEl.contentText = timeLeft + ' seconds remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
  };
// Timer Ends

//Quiz Container
var currentPlayer = 0;
var correct = 0;
var quiz, testStatus, question, choice, choices, chA, chB, chC, chD;

// Multiple choice questions
var questions = [
  {
      question: "Which of the following does not define a variable?",
      a: "const",
      b: "for",
      c: "let",
      d: "var",
      answer: "B"
    },
  {
      question: "Which of the following is the best way to define a function?",
      a: "function = myFunction()",
      b: "function myFunction()",
      c: "function myFunction ",
      d: "myFunction()",
      answer: "B"
    },
  {
      question: "Where do you put the script src in the HTML file?",
      a: "head",
      b: "body",
      c: "footer",
      d: "head or body section ",
      answer: "D"
    },
  {
      question: "How do you comment out a single line in JS?",
      a: "//",
      b: "/*",
      c: "*/*",
      d: "*/",
      answer: "A"
    },
    {
      question: "Which of the following are not one of the types of data in JS?",
      a: "null",
      b: "booleans",
      c: "functions",
      d: "numbers",
      answer: "C"
    },
    {
      question: "What does the length() method stand for?",
      a: "how long the function is",
      b: "joins 2 or more strings",
      c: "returns the length of the string",
      d: "puts different functions together",
      answer: "C"
    },
    {
      question: "Which of the following best represents camel notation?",
      a: "Camelnotation",
      b: "CamelNotation",
      c: "camelnotation",
      d: "camelNotation",
      answer: "D"
    },
    {
      question: "What are variables used for?",
      a: "holding or storing data",
      b: "changing language settings",
      c: "assigning it to a function",
      d: "changing the value of the data type",
      answer: "A"
    },
    {
      question: "Which is the correct syntax for displaying date in the console?",
      a: "console.log[];",
      b: "consolelog();",
      c: "console.log();",
      d: "console.log[]",
      answer: "C"
    },
    {
      question: "Which of the following function of array objects adds an item to the end of an array?",
      a: ".add()",
      b: ".push()",
      c: ".pop()",
      d: ".length()",
      answer: "B"
    }
  ];

function get(x){
  return document.getElementById(x);
}
// To get question
function renderQuestion(){
  quiz = get("quiz");
  if(currentPlayer >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>";
    get("testStatus").innerHTML = "Quiz Completed";
// Restarts the test
    currentPlayer = 0;
    correct = 0;
    return false;
  }
  get("testStatus").innerHTML = "Question "+(currentPlayer+1)+" of "+questions.length;
  
  question = questions[currentPlayer].question;
  chA = questions[currentPlayer].a;
  chB = questions[currentPlayer].b;
  chC = questions[currentPlayer].c;
  chD = questions[currentPlayer].d;

  // Display the question
  quiz.innerHTML = "<h3>"+question+"</h3>";

  // display the answer options
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
     
    }
  }
  // Check to see if the answer is correct
  if(choice == questions[currentPlayer].answer){
  //Every time the answer is correct, you score a point
    correct++;
   alert('Your answer is Correct!');
  } else {
      alert('Your answer is incorrect');
} if(choice === " " ) {
    alert('You need to provide a valid answer');
}
 currentPlayer++; 
  renderQuestion();
}


document.getElementById('start-quiz').addEventListener('click',renderQuestion,);
startBtn.onclick = countdown;