var quizQuestions = [{
    question: "whats css stand for?",
    answers: ["css", "html", "api"],
    correctAnswer: 0,

}]


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//current index represents the index of the question we are currently on
var currentIndex = 0,
var currentIndex = 1,
var currentIndex = 2,
var currentIndex = 3,
var currentIndex = 4,
var currentIndex = 5,


// WHEN I answer a question
// THEN I am presented with another question
function clickanswer(){
    // user clicks answer
    //save value of ansewr to answer variable 
    //user answer is the value of the answer the user clicks on
    var userAnswer = 'css'
    var answerIndex = quizQuestions[currentIndex].answers.indexOf(userAnswer);
    if (answerIndex = quizQuestions[currentIndex].correctAnswer){
        //go to next question
        currentIndex ++
    }else wrong(){
        alert("!!WRONG!!")
    }



}



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function wrong(){
    currentIndex ++
    //subtract time of clock

}




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over








// WHEN the game is over
// THEN I can save my initials and score



