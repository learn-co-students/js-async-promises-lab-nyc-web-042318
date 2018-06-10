const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

// Append the question to the "question-container"

function appendQuestion(question){

  let test = document.querySelector(".question-container")
  test.innerHTML = question.questionText

};

// Assigns a global variable 'question' to equal the first question.
// It also returns a promise that is resolved after a specified amount of time
// The amount of time to wait is provided as an argument to the function.

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(question)
    },time)
  });
};

// Removes the questions from the 'question-container', it returns a promise.

function removeQuestion() {
  return new Promise (function(){
    return document.querySelector('.question-container').innerHTML = ''
  })
};

// Appends the question to the 'question-container'.
// After a certain amount of time, it removes the question.
// Takes an argument of time indicatiing how long question will be displayed.

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
};

// Returns the collection of true and false buttons already provided
// in the index.html file.

function trueAndFalseButtons () {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
};

// Adds the hide class if not on the buttons
// Remvoes the hide class if it is on the buttons

function toggleTrueAndFalseButtons () {
  trueAndFalseButtons().forEach((btn) => btn.classList.toggle("hide"));
};

// Adds both true and false buttons and the question for five seconds.
// Then hides both of the true and false questions and remvoes the tet of the question

function displayQuestionOnClick() {
  let ask = document.querySelector('.waves-effect')
  ask.addEventListener('click',() => {
    askQuestionThenRemoveQuestion(500)
    toggleTrueAndFalseButtons()
  });
};
