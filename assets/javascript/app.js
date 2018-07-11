
//Array of question objects, globally stated
var questions = [{
    text: "Which element is ductile, malleable, and a good conductor?",
    choices: ["Argon", "Tungsten", "Silicon", "Bromine"],
    rightAnswer: "Tungsten",
    image: "assets/images/tungsten.jpg",
}, {
    text: "How many valence electrons does one atom of sodium have?",
    choices: ["1", "2", "3", "4"],
    rightAnswer: "1",
    image: "../images/sodium.jpg",
}, {
    text: "Which of the following is a noble gas?",
    choices: ["Chlorine", "Oxygen", "Nitrogen", "Xenon"],
    rightAnswer: "Xenon",
    image: "../images/xenon.jpg",
}, {
    text: "How many protons is in one atom of Fluorine?",
    choices: ["2", "9", "17", "18"],
    rightAnswer: "9",
    image: "../images/fluorine.png",
}, {
    text: "Who organized the first periodic table?",
    choices: ["Nicolas Copernicus", "Gregor Mendel", "Dmitri Mendeleev", "Isaac Newton"],
    rightAnswer: "Dmitri Mendeleev",
    image: "../images/mendeleev.jpg",
}];

//Global variables
var currentQuestion;
var currentAnswer;
var userSelection;
var intervalID;
var timer;
var correctQuestions;
var incorrectQuestions;
var userChoice;
var timeRemaining;

//////HUGE LIST OF ALL THE FUNCTIONS
//startGame
function startGame() {
    $('#start').hide();
    $('#start').empty();
    $('#rules').empty();
    $('#rules').hide();
    correctQuestions = 0;
    incorrectQuestions = 0;
    currentQuestion = 0;
}
//A new Question Appears
function questionAppears() {
    $('#current-answer').hide();
    $('#current-question').html('<h3>' + questions[currentQuestion].text + '</h3>');

    //Answer choices appear as buttons

    $('#answer-list1').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[0] + '">' + questions[this.currentQuestion].choices[0] + '</button>');
    $('#answer-list2').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[1] + '">' + questions[this.currentQuestion].choices[1] + '</button>');
    $('#answer-list3').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[2] + '">' + questions[this.currentQuestion].choices[2] + '</button>');
    $('#answer-list4').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[3] + '">' + questions[this.currentQuestion].choices[3] + '</button>');

}
function nextQuestion() {
    currentQuestion++;
    questionAppears();
}

//Timer is started

function startClock() {
    timer = 3;
    $('#timer').html('<h3>Time Left: ' + timer + '</h3>');
    intervalID = setInterval(decrement, 1000);
}
//Timer counts down from 20 to zero
//Timer stops if it hits zero
//Message appears if the player runs out of time
function decrement() {
    timer--;
    $('#timer').html('<h3>Time Left: ' + timer + '</h3>');
    if (timer === 0) {
        clearInterval(intervalID);
        $('#timer').html('<h3>' + "Well, that sucks. You ran out of time." + '</h3>');
        wrongOrNoAnswer();
    }
}

//If the user selects the wrong answer, the correct answer appears
//An image of the correct answer appears
//A next question button appears
function wrongOrNoAnswer() {
    $('#answer-list1').hide();
    $('#answer-list2').hide();
    $('#answer-list3').hide();
    $('#answer-list4').hide();
    $('#answer-list1').empty();
    $('#answer-list2').empty();
    $('#answer-list3').empty();
    $('#answer-list4').empty();
    incorrectQuestions++;
    $('#answer-message').html('<h4>' + "The correct answer was " + questions[currentQuestion].rightAnswer + '</h4>');
    $('#right-or-wrong').html('<h4>' + "Did you even pay attention in chemistry?" + '<h4>')
    $('#answer-image').html("<img src=" + questions[currentQuestion].image + ">");
    if (currentQuestion === questions.length - 1){
        setTimeout(results, 3 * 1000);
      } else {
        setTimeout(nextQuestion, 3 * 1000);
      }
}

function rightAnswerClicked() {
    $('#answer-list1').hide();
    $('#answer-list2').hide();
    $('#answer-list3').hide();
    $('#answer-list4').hide();
    $('#answer-list1').empty();
    $('#answer-list2').empty();
    $('#answer-list3').empty();
    $('#answer-list4').empty();
    correctQuestions++;
    $('#answer-message').html('<h4>' + "GOOD JOB! The correct answer was " + questions[currentQuestion].rightAnswer + '</h4>');
    $('#right-or-wrong').html('<h4>' + "Walter White would be proud." + '<h4>')
    $('#answer-image').html("<img src=" + questions[currentQuestion].image + ">");
    if (currentQuestion === questions.length - 1){
        setTimeout(results, 3 * 1000);
      } else {
        setTimeout(nextQuestion, 3 * 1000);
      }
}


$(document).ready(function () {
    //This hides the start button
    $('#start').click(function () {
        startGame();
        questionAppears();
        startClock();
    });

})


