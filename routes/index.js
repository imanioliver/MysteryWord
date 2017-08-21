const express           = require('express');
const router            = express.Router();
const fs                = require ("fs");
const wordss            = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

let gameWords = ["BLOOM", "FLOWER", "BURST", "CATHARTIC", "BLOOMINGDALES", "AMAZING", "YES", "rambunctious"];
let allUserGuesses = [];
let word = (gameWords[Math.floor(Math.random()*gameWords.length)]).toLowerCase(); //this is where you will lowercase the word
    console.log('The computer chose:' + word);
    //turn word into array here


splitWord = [word.split('')];
console.log('the split up ' + splitWord);



router.post('/', function(req, res){

    req.session.word = word;
    req.session.guesscount= 8;
    let theGuessCount= req.session.guesscount;
    console.log(theGuessCount, "<-- guesscount is defined here");

    function checker (theWord, guesses, req) {
        let giveMeBack = [];
        // guesses = req.body.guess;
        for (var i = 0; i < theWord.length; i++) {
            let currentLetter = theWord[i];
            if (guesses.indexOf(currentLetter) === -1) {
                giveMeBack.push("_ ") ;
                // theGuessCount - 1;
            } else {
                giveMeBack.push(currentLetter);
            }
        }
        return giveMeBack;
    }; //****
    function pleaseWorkNow (theWord, guesses, req) {
        let giveMeBack = 0;
        // guesses = req.body.guess;
        for (var i = 0; i < theWord.length; i++) {
            let currentLetter = theWord[i];
            if (guesses.indexOf(currentLetter) === -1) {
                giveMeBack+= -1;
                // theGuessCount - 1;
            } else {
                giveMeBack+= 0;
            }
        }
        return giveMeBack;
        console.log(giveMeBack, " the giveMeBack number inside of pleaseWorkNow");
    }; //****


    allUserGuesses.push(req.body.guess.toLowerCase()); //changed it to lowercase entries
    console.log("the user has guessed ", allUserGuesses);
    let output = checker(word, allUserGuesses);
    let testCountOutput = pleaseWorkNow(allUserGuesses, word);
    console.log(testCountOutput, "<-- is it counting here? line 102");


    console.log(theGuessCount, "<--the guesscount is checked a second time here");
    // console.log(req.session, " the session");
    let countSum = theGuessCount + testCountOutput;
    theGuessCount = theGuessCount +testCountOutput;
    let string = '_ ';
    if (countSum <= 0){
        res.redirect('/lost');
    }


    else if (!output.includes(string, 0)){
        res.redirect('/won');

    }    else {
        res.render('gamesession', {word: output, allUserGuesses:allUserGuesses, countSum: countSum, theGuessCount:theGuessCount});
    };
});



    //duplicate word into the new possibleWord and we will display that.
    //replace

router.get('/lost', function (req, res) {
 res.render('lost', {word:word});
});

router.post('/lost', function(req, res){
    req.session.destroy();
    reset();
    res.redirect('/');
});

router.get('/won', function (req, res){
    res.render('won', {word:word});
});

router.post('/won', function(req, res){
    req.session.destroy();
    reset();
    res.redirect('/');
});


let wordLines = '';
router.get('/', function(req, res){

    for (var i = 0; i < word.length; i++) {
        wordLines += "_ ",
        // console.log(wordLines);
        console.log("_ "+ " here each line"); {wordLines}
    }
    req.session.word = word;
    req.session.guesses=8
    res.render('gamesession', {wordLines:wordLines});
    // console.log(req.session, " session on get home");
    // console.log(req, "req on get home");
        // console.log(req.session, " the session for get /");
});

router.get("/playagain", function(req, res) {
  req.session.destroy();
  reset();
  res.redirect("/");
});


function reset () {
    word = (gameWords[Math.floor(Math.random()*gameWords.length)]).toLowerCase(); //this is where you will lowercase the word
        console.log('The computer chose:' + word);
    allUserGuesses = [];
    wordLines = '';

}



module.exports = router;
