const startButton = document.getElementById("startBtn")
const questionContainerElement = document.getElementById('questionContainer')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerBtn')
const nextButton = document.getElementById('nextBtn')
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer3 = document.getElementById("answer4")
var answer3 = document.getElementById("answer5")
var answer3 = document.getElementById("answer6")

//questions array
// var n = quizQuestions.length;
    var quizQuestions = [{
      question: "whats CSS stand for?",
      answers: ["Cascading Style Sheets", "Corrupt Style String", "api", "jscript", "boolean", "jquerey"],
      correctAnswer: 0,
    
    }, {
      question: "whats HTML stand for?",
      answers: ["hyper text man link", "hyper text markup language", "for loop", "jscript", "boolean", "jquerey"],
      correctAnswer: 1,
    
    }, {
      question: "what is a boolean?",
      answers: ["true/false", "data type", "api", "jscript", "null", "array"],
      correctAnswer: 0,
    
    }];
console.log(quizQuestions[0].correctAnswer)

const correct = document.getElementsByName("correctAnswer")
const ans = document.getElementsByName("answers")

var currentQuestion = 0
var score = 0;
startButton.addEventListener('click', startGame)
// answerBtn.addEventListener('click', selectAnswer)
// // ("answer1")
// console.log(answerBtn)


function startGame() {
  console.log("start")
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  currentQuestion = 0
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(quizQuestions[0])
}

function showQuestion(questionObj) {
  questionElement.innerText = questionObj.question
  console.log(questionObj.answers)
  answer1.innerText = questionObj.answers[0]
  answer1.addEventListener("click", selectAnswer)
  console.log("answer1")
  answer2.innerText = questionObj.answers[1]
  answer2.addEventListener("click", selectAnswer)
  answer3.innerText = questionObj.answers[2]
  answer3.addEventListener("click", selectAnswer)
  answer4.innerText = questionObj.answers[3]
  answer4.addEventListener("click", selectAnswer)
  answer5.innerText = questionObj.answers[4]
  answer5.addEventListener("click", selectAnswer)
  answer6.innerText = questionObj.answers[5]
  answer6.addEventListener("click", selectAnswer)
  for (var i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i])
    console.log(quizQuestions[i].correctAnswer)
    //grab user input 
    // if (selectAnswer.quizQuestions[i].correctAnswer) {
    //   quizQuestions[i]


    // }
    // var userAnswer = selectAnswer(quizQuestions[i].question);
    // if((userAnswer === true && quizQuestions[i].correctAnswer))
  }
  //   (userAnswer === false && quizQuestions[i].correctAnswer)
  //   )
  //   console.log("ok?")
  // }

  // selectAnswer()

  // 1. get html element into javascript "getelementbyid"
  //2. load dummy data "consolelog(asdf)"
  //3. get data in right location "question.question"
  //4. replace dummy data w/ real data ""
}
// selectanswer is going to get the info if its true or false then setnext question.
function selectAnswer(event) {
 var trueAnswer = quizQuestions[currentQuestion].correctAnswer;
  if(event.target.id === 'answer'+(trueAnswer+1)){
    console.log("correct")
  } else {
    console.log("false")
  }


//   console.log("hello", event.path[0])
//   if (event.path[0] === answer1) {
//     setNextQuestion(quizQuestions[0])
//         for (let i = 0; i < quizQuestions.length; i++) {
//           setNextQuestion(quizQuestions[i]);
          
//         }
//    console.log('correct')
//  }
  // console.log(answerBtn)
  // answerButtonsElement.innerText = setNextQuestion(quizQuestions[i])

}












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



