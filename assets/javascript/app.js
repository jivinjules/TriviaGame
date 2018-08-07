
//Array of question objects, globally stated
var questions = [{
    text: "Which element is ductile, malleable, and a good conductor?",
    choices: ["Argon", "Tungsten", "Silicon", "Bromine"],
    rightAnswer: "Tungsten",
    image: "assets/images/tungsten.jpg",
}, {
    text: "How many valence electrons does one atom of sodium have?",
    choices: ["one", "two", "three", "four"],
    rightAnswer: "one",
    image: "assets/images/sodium.jpg",
}, {
    text: "Which of the following is a noble gas?",
    choices: ["Chlorine", "Oxygen", "Nitrogen", "Xenon"],
    rightAnswer: "Xenon",
    image: "assets/images/xenon.jpg",
}, {
    text: "How many protons are in one atom of Fluorine?",
    choices: [2, 9, 17, 18],
    rightAnswer: 9,
    image: "assets/images/fluorine.png",
}, {
    text: "Who organized the first periodic table?",
    choices: ["Nicolas Copernicus", "Gregor Mendel", "Dmitri Mendeleev", "Isaac Newton"],
    rightAnswer: "Dmitri Mendeleev",
    image: "assets/images/mendeleev.jpg",
}];

//Global variables
var currentQuestion;
var intervalID;
var timer;
var correctQuestions;
var incorrectQuestions;
var userChoice;
var timeRemaining;
var unansweredQuestions;

//Event Listeners for clicked buttons
$(document).on('click', '.answer-button', function (e) {
    answerclicked(e);
});
$(document).on('click', '.play-again-button', function () {
    playAgain();
});

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
    $('#current-question').html('<h3>' + questions[currentQuestion].text + '</h3>');

    //Answer choices appear as buttons

    $('#triva-area1').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[0] + '">' + questions[this.currentQuestion].choices[0] + '</button>');
    $('#triva-area2').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[1] + '">' + questions[this.currentQuestion].choices[1] + '</button>');
    $('#triva-area3').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[2] + '">' + questions[this.currentQuestion].choices[2] + '</button>');
    $('#triva-area4').html('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].choices[3] + '">' + questions[this.currentQuestion].choices[3] + '</button>');

}

//sets up listener event for when the user clicks and answer and then checks it against the array
answerclicked = function (e) {

    if ($(e.target).data("name") === questions[currentQuestion].rightAnswer) {
        clearInterval(intervalID);
        rightAnswerClicked();
    } else {
        clearInterval(intervalID);
        wrongOrNoAnswer();
    }
}

//Activates play again function at the end of the game
function playAgain() {
    $('#current-question').show();
    correctQuestions = 0;
    incorrectQuestions = 0;
    currentQuestion = 0;
    questionAppears();
    startClock();
    answerclicked();
}

//Pulls up the next question
function nextQuestion() {
    currentQuestion++;
    questionAppears();
    startClock();

}

//Timer is started

function startClock() {
    timer = 15;
    $('#timer').html('<h3>Time Left: ' + timer + '</h3>');
    intervalID = setInterval(decrement, 1000);
}
//Timer counts down from 15 to zero
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
//After 5 seconds, the next question appears
function wrongOrNoAnswer() {
    incorrectQuestions++;
    $('#triva-area1').html('<h4>' + "The correct answer was " + questions[currentQuestion].rightAnswer + '</h4>');
    $('#triva-area2').html('<h4>' + "Did you even pay attention in chemistry?" + '<h4>')
    $('#triva-area3').html("<img src=" + questions[currentQuestion].image + ">");
    $('#triva-area4').empty();
    if (currentQuestion === questions.length - 1) {
        setTimeout(finalPage, 4 * 1000);
    } else {
        setTimeout(nextQuestion, 4 * 1000);
    }
}

function finalPage() {
    $('#current-question').hide();
    $('#timer').html('<h3>' + "Thanks for playing! Here are your results:" + '</h3>');
    $('#triva-area1').html('<h4>' + "You got " + correctQuestions + " correct." + '</h4>');
    $('#triva-area2').html('<h4>' + "You got " + incorrectQuestions + " wrong." + '<h4>')
    $('#triva-area3').html('<button class="play-again-button" id="button">' + "Play Again?" + '</button>');
    $('#triva-area4').empty();
}

//If the user selects the correct answer, the messages change
//An image of the correct answer appears
//After 5 seconds, the next question appears
function rightAnswerClicked() {

    correctQuestions++;
    $('#triva-area1').html('<h4>' + "GOOD JOB! The correct answer was " + questions[currentQuestion].rightAnswer + '</h4>');
    $('#triva-area2').html('<h4>' + "Walter White would be proud." + '<h4>')
    $('#triva-area3').html("<img src=" + questions[currentQuestion].image + ">");
    $('#triva-area4').empty();
    if (currentQuestion === questions.length - 1) {
        setTimeout(finalPage, 4 * 1000);
    } else {
        setTimeout(nextQuestion, 4 * 1000);
    }
}

//Document ready...press start to get the game activated
$(document).ready(function () {
    //This hides the start button
    $('#start').click(function () {
        startGame();
        questionAppears();
        startClock();
        answerclicked();

    });

})

