const startButton = document.getElementById("startBtn")
const questionContainerElement = document.getElementById('questionContainer')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerBtn')
const nextButton = document.getElementById('nextBtn')
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")

var currentIndex = 0

startButton.addEventListener('click', startGame)


function startGame(){
  console.log("start")
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  currentIndex = 0
  setNextQuestion()
}

function setNextQuestion(){
  showQuestion(quizQuestions[currentIndex])
}

function showQuestion(questionObj){
  questionElement.innerText = questionObj.question
  console.log(questionObj.answers)
answer1.innerText = questionObj.answers[0]
answer2.innerText = questionObj.answers[1]
answer3.innerText = questionObj.answers[2]

  // 1. get html element into javascript "getelementbyid"
  //2. load dummy data "consolelog(asdf)"
  //3. get data in right location "question.question"
  //4. replace dummy data w/ real data ""
}

function selectAnswer(answerBtn){
  answerButtonsElement.innerText = answerbtn
  console.log(answerBtn)

}

var quizQuestions = [{
    question: "whats css stand for?",
    answers: ["css", "html", "api"],
    correctAnswer: 0,

}]












//          /// test








// // WHEN I click the start button
// // THEN a timer starts and I am presented with a question
// //current index represents the index of the question we are currently on


// // var currentIndex = 1,
// var currentIndex = 2,
// var currentIndex = 3,
// var currentIndex = 4,
// var currentIndex = 5,


// // WHEN I answer a question
// // THEN I am presented with another question
// function clickanswer(){
//     // user clicks answer
//     //save value of ansewr to answer variable 
//     //user answer is the value of the answer the user clicks on
//     var userAnswer = 'css'
//     var answerIndex = quizQuestions[currentIndex].answers.indexOf(userAnswer);
//     if (answerIndex = quizQuestions[currentIndex].correctAnswer){
//         //go to next question
//         currentIndex ++
//     }else wrong(){
//         alert("!!WRONG!!")
//     }



// }



// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// function wrong(){
//     currentIndex ++
//     //subtract time of clock

// }




// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over








// // WHEN the game is over
// // THEN I can save my initials and score



