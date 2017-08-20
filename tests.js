//THESE ARE THE TEXT FUNCTIONS FOR SPLITTING THE WORD

        displayWord = splitWord.forEach(displayWord.push("_ "));

        console.log(displayWord, "<-- the displayWord");

        if (req.body.guess===)

//TESTS FOR DISPLAYING THE word AS DASHES
    let displayWord=[];
    let wordLines;


//THESE ARE THE TEST FUNCTIONS FOR THE COUNTER


        function firstCounter (theWord){
            let back = 0;
            let string = '_ ';
            for (var i = 0; i < theWord.length; i++) {
                let currentLetter = theWord[i];
                if (string.indexOf(currentLetter) === -1 ){
                    back+=0;
                } else {
                    back +=1;
                }
            }
            return back;
        };

        firstCounter(word);

        function secondCounter (theWord){
            let back = 0;
            let string = '_ ';
            for (var i = 0; i < theWord.length; i++) {
                let currentLetter = theWord[i];
                if (string.indexOf(currentLetter)=== -1 ){
                    back+=0;
                } else {
                    back +=1;
                }
            }
            return back;
        };

        let subtractMe;

        console.log("first count", firstCounter(word));
        secondCounter(word);
        console.log("second count", secondCounter(word));

        function counterCompare (first, second, req){
            if (first === second){
                req.session.guesscount -= 1;
            } else {
                req.session.guesscount+=0;
            }
        };

                    let displayCount = counterCompare(firstCounter, secondCounter);
                    , displayCount: displayCount

        let oldDisplay = checker(word, allUserGuesses); //******* POSSIBLY WILL USE THIS FOR COUNTER



//tests for guessHandler
        console.log(guessHandler, " gh is working");
        guessHandler();
