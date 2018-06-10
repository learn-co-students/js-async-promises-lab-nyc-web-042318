const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

const qContainer = document.querySelector('.question-container')
let question;

function displayQuestionOnClick() {
  let clickMe = document.querySelector('.waves-light')
  return clickMe.addEventListener('click', () => {
  askQuestionThenRemoveQuestion(5000)
  })
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    if (btn.classList.contains('hide')) {
      btn.classList.remove("hide")
    } else {
    btn.classList.add("hide")
    }
  })
}

function appendQuestion(q) {
  const qContainer = document.querySelector('.question-container')
  qContainer.innerText = q.questionText
}
//
function removeQuestion(q) {
  return new Promise((resolve, reject) => {
    qContainer.innerText = ''
    toggleTrueAndFalseButtons()
  })
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}
