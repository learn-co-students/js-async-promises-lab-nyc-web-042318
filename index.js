const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const container = document.querySelector(".question-container")
  container.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {
    setTimeOut(function() {
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function () {
    const container = document.querySelector(".question-container")
    container.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  const list = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return list
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.getElementById('askAway')
  // debugger
  btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(500)
  })
}
