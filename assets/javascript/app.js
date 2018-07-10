
//Global variables for questions
var question1 = [
    text = "Which element is ductile, malleable, and a good conductor?",
    wrongAnswers = ["Argon", "Silicon", "Bromine"],
    rightAnswer = "Tungsten",
    image = "images/tungsten.jpg",
];
var question2 = [
    text = "How valence electrons does one atom of sodium have?",
    wrongAnswers = ["2", "3", "4"],
    rightAnswer = 1,
    image = "images/sodium.jpg",
];
var question3 = [
    text = "Which of the following is a noble gas?",
    wrongAnswers = ["Chlorine", "Oxygen", "Nitrogen"],
    rightAnswer = "Xenon",
    image = "images/xenon.jpg",
];
var question4 = [
    text = "How many protons is in one atom of Fluorine?",
    wrongAnswers = ["2", "18", "17"],
    rightAnswer = "9",
    image = "images/fluorine.png",
];
var question5 = [
    text = "Who organized the first periodic table?",
    wrongAnswers = ["Nicolas Copernicus", "Gregor Mendel", "Isaac Newton"],
    rightAnswer = "Dmitri Mendeleev",
    image = "images/mendeleev.jpg",
];

var questionArray = ["question1", "question2", "question3", "question4", "question5"];
var currentQuestion;
var currentAnswer;
var userSelection;
var intervalID;

//Messages to be displayed
var correctMessage = "Way to go! Walter White would be proud!"
var incorrectMessage = "Did you even pay attention in chemistry?"
var outOfTimeMessage = "Well that sucks. You ran out of time"

//functions
//startGame
function startGame() {
    $('#start').hide();
    $('#rules').hide();
    $('#play-again').hide();

}

function questionAppears () {
    
}

$(document).ready(function () {
    //This hides the start button
    $('#start').click(function () {
        startGame();
    });

})


