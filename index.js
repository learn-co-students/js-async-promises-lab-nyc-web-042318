const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  qContainer = document.getElementsByClassName('question-container')
  qContainer[0].innerHTML = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)

  return new Promise(function(resolve) {
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function(){
    return document.querySelector('.question-container').innerHTML = ''
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return  document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach((btn) => btn.classList.toggle("hide"))
}

function displayQuestionOnClick() {
  let ask = document.querySelector('.waves-effect')
  ask.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(500)
    toggleTrueAndFalseButtons()
  })
}
