// a button to start the quiz

// html that has the timer starting at 0

var highscore = {};
var currentQuestion = 0;

var quizQuestions = [
  {
    question: "What is javascript?",
    a: "i dont know",
    b: "not sure",
    c: "super fun",
    d: "not fun",
    correct: "c",
  },

  {
    question: "What is javascript 22222?",
    a: "i dont know",
    b: "not sure",
    c: "super fun",
    d: "not fun",
    correct: "d",
  },
];

// loop thru questions
var currentTime = 5 * 60 * 1000;
window.localStorage.setItem("currentQuestion", 0);
console.log(window.localStorage.getItem("currentQuestion"));

document.getElementById("start").addEventListener("click", () => {
  // START TIMER
  setInterval(() => {
    currentTime = currentTime - 1000;
    document.getElementById("countdown").innerHTML = currentTime / 1000;
  }, 1000);

  let firstQuetion = quizQuestions[0];

  // setup first question
  document.getElementById("question-text").innerHTML = firstQuetion.question;
  document.getElementById("a-text").innerHTML = firstQuetion.a;
  document.getElementById("b-text").innerHTML = firstQuetion.b;
  document.getElementById("c-text").innerHTML = firstQuetion.c;
  document.getElementById("d-text").innerHTML = firstQuetion.d;
  //   ++currentQuestion;
});
// console.log(quizQuestions[currentTime].question);

document.getElementById("submitbtn").addEventListener("click", () => {
  console.log(currentQuestion);
  //   console.log("here'");
  //   window.localStorage.setItem(
  //     "currentQuestion",
  //     window.localStorage.getItem("currentQuestion") + 1
  //   );

  //   let question =
  //     quizQuestions[parseInt(window.localStorage.getItem("currentQuestion"))];
  let question = quizQuestions[currentQuestion];
  //   console.log(question);
  let answer = question.correct;
  //   console.log(answer);

  // add logic to check selected answer against question.correct
  if (document.getElementById("answer-a").checked && answer == "a") {
    console.log("correct!!!");
  } else if (document.getElementById("answer-b").checked && answer == "b") {
    console.log("correct!!!");
  } else if (document.getElementById("answer-c").checked && answer == "c") {
    console.log("correct!!!");
  } else if (document.getElementById("answer-d").checked && answer == "d") {
    console.log("correct!!!");
  } else {
    console.log("INCORRECT!!!!!");
    alert("INCORRECT!!!");
    // wrong...
  }
  ++currentQuestion;
  if (currentQuestion >= quizQuestions.length) {
    alert("quiz complete");
    return;
  }

  let questionAfter = quizQuestions[currentQuestion];
  //   console.log(questionAfter);

  document.getElementById("question-text").innerHTML = questionAfter.question;
  document.getElementById("a-text").innerHTML = questionAfter.a;
  document.getElementById("b-text").innerHTML = questionAfter.b;
  document.getElementById("c-text").innerHTML = questionAfter.c;
  document.getElementById("d-text").innerHTML = questionAfter.d;
});

// }

// a heading and instruction on how to play the game
var body = document.body;
var h1El = document.createElement("h1");
var para = document.createElement("p");

// var btn = document.createElement("start");

//Set text content of elements
h1El.textContent = "Coding Quiz Challenge";
para.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind the incorrect answers will penalize your score time by five seconds ";

// setInterval(() => {
// }, 1000);
// when you hit start quiz the timer should start

// some type of array that can iterate over for all questions

// array of objects

// objects should include
// title of question
// key for choices
// answer key
// compar ethe user choice to the acutal answer
// counter for number of f=correct answers
// grab he value of their initals and their score and save to local storage
var numCorrect = 0;
var numIncorrect = 0;

//APPEND ELEMENTS
body.appendChild(h1El);
body.appendChild(para);

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
para.setAttribute(
  "style",
  "margin:auto; width:50%; font:arial; font-size: 20px; text-align:center;"
);

// document.addEventListener("on click");

// var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       speedRead();
//       clearInterval(timeInterval);
//     }

//   }, 1000);

// loop thru questuiokbs check see what what user clicked,
//  check what user clicked agains correct answer.
//  iff correct time remains same
//  else subtract 5 seconds.
