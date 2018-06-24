const questionContainer = document.getElementsByClassName('question-container')[0]
const tfList = document.querySelector('.true-false-list')
const wavesEffect = document.querySelector('.waves-effect')
const questions = [
  {questionText: 'Lightning never strikes in the same place twice', answer: false},
  {questionText: 'Humans can distinguish between over one trillion different smells', answer: true},
  {questionText: 'Goldfish only have a memory of about three seconds', answer: false}
]

let question

function appendQuestion (question) {
  questionContainer.innerHTML = question.questionText
}

function askQuestionThen (time) {
  return new Promise(function (resolve, reject) {
    question = questions[0]
    appendQuestion(question)
    return new Promise(function (resolve) {
      setTimeout(function () { resolve(question) }, time)
    })
  })
}

function removeQuestion () {
  return new Promise(function () {
    return questionContainer.innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion (time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons () {
  return tfList.querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons () {
  trueAndFalseButtons().forEach(function (btn) { btn.classList.toggle('hide') })
}

function displayQuestionOnClick () {
  wavesEffect.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(500)
    toggleTrueAndFalseButtons()
  })
}
// function displayQuestionOnClick () {

// }
