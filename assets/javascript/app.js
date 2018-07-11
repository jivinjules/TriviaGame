
//Array of question objects, globally stated
var questions = [{
    text: "Which element is ductile, malleable, and a good conductor?",
    choices: ["Argon", "Tungsten", "Silicon", "Bromine"],
    rightAnswer: 1,
    image: "images/tungsten.jpg",
}, {
    text: "How many valence electrons does one atom of sodium have?",
    choices: ["1", "2", "3", "4"],
    rightAnswer: 0,
    image: "images/sodium.jpg",
}, {
    text: "Which of the following is a noble gas?",
    choices: ["Chlorine", "Oxygen", "Nitrogen", "Xenon"],
    rightAnswer: 3,
    image: "images/xenon.jpg",
}, {
    text: "How many protons is in one atom of Fluorine?",
    choices: ["2", "9", "17", "18"],
    rightAnswer: 1,
    image: "images/fluorine.png",
}, {
    text: "Who organized the first periodic table?",
    choices: ["Nicolas Copernicus", "Gregor Mendel", "Dmitri Mendeleev", "Isaac Newton"],
    rightAnswer: 2,
    image: "images/mendeleev.jpg",
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

//Messages to be displayed
var correctMessage = "Way to go! Walter White would be proud!"
var incorrectMessage = "Did you even pay attention in chemistry?"

//functions
//startGame
function startGame() {
    $('#start').hide();
    $('#start').empty();
    $('#rules').empty();
    $('#rules').hide();
    $('#play-again').hide();
    correctQuestions = 0;
    incorrectQuestions = 0;
    currentQuestion = 0;
}
//A new Question Appears
function questionAppears() {
    $('#current-answer').hide();
    $('#answer-message').hide();
    $('#answer-image').hide();
    $('#current-question').html('<h3>' + questions[currentQuestion].text + '</h3>');

    //Answer choices appear as buttons

    $('#answer-list1').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[0] + '">' + questions[this.currentQuestion].choices[0] + '</button>');
    $('#answer-list2').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[1] + '">' + questions[this.currentQuestion].choices[1] + '</button>');
    $('#answer-list3').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[2] + '">' + questions[this.currentQuestion].choices[2] + '</button>');
    $('#answer-list4').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[3] + '">' + questions[this.currentQuestion].choices[3] + '</button>');
}
function nextQuestion(){
    currentQuestion++;
    questionAppears();
  }

//Timer is started

function startClock() {
    timer = 20;
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
        nextQuestion();
    }
}

//When the question is answered, the image of the answer appears in the image tag
function displayImage() {

}

$(document).ready(function () {
    //This hides the start button
    $('#start').click(function () {
        startGame();
        questionAppears();
        startClock();
    });

})


