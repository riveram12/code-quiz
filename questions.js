// a button to start the quiz

// html that has the timer starting at 0

var numCorrect = 0;
var numIncorrect = 0;

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
    question: "What is a variable",
    a: "i dont know",
    b: "not sure",
    c: "super fun",
    d: "not fun",
    correct: "d",
  },

  {
    question: "which is a correct for loop?",
    a: "i dont know",
    b: "not sure",
    c: "super fun",
    d: "not fun",
    correct: "d",
  },
];

// loop thru questions
var currentTime = 5 * 60 * 60;

//

document.getElementById("start").addEventListener("click", () => {
  hideStuff();
  // START TIMER
  setInterval(() => {
    currentTime = currentTime - 1000;
    document.getElementById("countdown").innerHTML = currentTime / 1000;
  }, 1000);

  let firstQuetion = quizQuestions[0];

  // setup first question and calling answers
  document.getElementById("question-text").innerHTML = firstQuetion.question;
  document.getElementById("a-text").innerHTML = firstQuetion.a;
  document.getElementById("b-text").innerHTML = firstQuetion.b;
  document.getElementById("c-text").innerHTML = firstQuetion.c;
  document.getElementById("d-text").innerHTML = firstQuetion.d;
  //   ++currentQuestion;
}); // end of start quiz event handler

// hiding jumbotron
function hideStuff() {
  document.querySelector(".jumbotron").classList.add("hide");

  // docuement ... hide elements
} // end function

//when user clicks submit next question loads.
document.getElementById("submitBtn").addEventListener("click", () => {
  console.log(currentQuestion);

  let question = quizQuestions[currentQuestion];
  let answer = question.correct;

  // add logic to check selected answer against question.correct
  if (document.getElementById("answer-a").checked && answer == "a") {
    console.log("correct!!!");
    alert("CORRECT!!!");
    ++numCorrect;
  } else if (document.getElementById("answer-b").checked && answer == "b") {
    console.log("correct!!!");
    alert("CORRECT!!!");
    ++numCorrect;
  } else if (document.getElementById("answer-c").checked && answer == "c") {
    console.log("correct!!!");
    alert("CORRECT!!!");
    ++numCorrect;
  } else if (document.getElementById("answer-d").checked && answer == "d") {
    console.log("correct!!!");
    alert("CORRECT!!!");
    ++numCorrect;
  } else {
    console.log("INCORRECT!!!!!");
    alert("INCORRECT!!! Subtract 5 seconds");

    // wrong...
    // take off 5 seconds...
    currentTime = currentTime - 5000;
  }

  document.getElementById("answer-a").checked = false;
  document.getElementById("answer-b").checked = false;
  document.getElementById("answer-c").checked = false;
  document.getElementById("answer-d").checked = false;

  ++currentQuestion;

  var yourName = document.getElementById("your-name");

  if (currentQuestion >= quizQuestions.length) {
    alert("quiz complete" + "Your Score is:" + numCorrect);
    //  QUIZ IS NOW COMPLETE, collect name...
    var yourScoreText = document.createElement("P");
    yourScoreText.innerHTML = "Your score is " + numCorrect + "";
    //input name field
    var newInput = document.createElement("INPUT");
    newInput.placeholder = "Your name...";
    newInput.type = "text";
    newInput.id = "your-name";
    //creating a submit button
    var button = document.createElement("BUTTON");
    button.innerHTML = "Submit";
    button.addEventListener("click", () => {
      var json = JSON.parse(localStorage.getItem("highscores"));

      if (json == null) {
        window.localStorage.setItem("highscores", JSON.stringify({}));
      }
      json = JSON.parse(localStorage.getItem("highscores"));
      console.log(yourName.value, numCorrect);
      json[yourName.value] = numCorrect;
      localStorage.setItem("highscores", JSON.stringify(json));

      location.href = "score.html";
    });

    var yourName = document.getElementById("your-name");

    hideStuff(); // implement this later to hide all non wanted UI
    return;
  }

  let questionAfter = quizQuestions[currentQuestion];

  document.getElementById("question-text").innerHTML = questionAfter.question;
  document.getElementById("a-text").innerHTML = questionAfter.a;
  document.getElementById("b-text").innerHTML = questionAfter.b;
  document.getElementById("c-text").innerHTML = questionAfter.c;
  document.getElementById("d-text").innerHTML = questionAfter.d;
}); // end of submit event handler

// a heading and instruction on how to play the game
var body = document.body;
var para = document.createElement("p");

//Set text content of elements

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
para.setAttribute(
  "style",
  "margin:auto; width:50%; font:arial; font-size: 20px; text-align:center;"
);

//APPEND ELEMENTS
body.appendChild(h1El);
body.appendChild(para);
document.body.appendChild(button);
document.body.appendChild(newInput);
document.body.appendChild(yourScoreText);
