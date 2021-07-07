let activePlayer = 'X'; //Variable keeps track of whose turn it is
let selectedSquare = []; //The array stores an array of moves. Used to determine the win conditions

function placeXOrO(squareNumber) { //this function is for placing an x or o in a square
    //This condition ensures a square hasn't been selected already
    //This .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquare.some(element => element.includes(squareNumber))) { //this variable retrieves the html element id that was clicked

        let select = document.getElementById(squareNumber); //this condition checks who's turn it is


        if (activePlayer === 'X') { //if activePlayer is equal to 'X', the x.png is placed in the html.
            select.style.backgroundImage = 'url("IMG/x.png")';

        } else { //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
            select.style.backgroundImage = 'url("IMG/o.png")';
        }
        selectedSquare.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to the array
        checkWinConditions(); //this calls a function to check for any win conditions.

        if (activePlayer === 'X') { //this is for checking the active player
            activePlayer = 'O';
        } else { //if activePlayer is anything other 'X' it changes activePlayer to 'X'
            activePlayer = 'X'; //Changes the active player to 'X'
        }

        audio('media/place2.mp3'); //function that plays the placement sound.
        if (activePlayer === 'O') { //Checks to see if it is the computers turn
            disableClick(); //this disables clicking for computer choice.
            setTimeout(function() { computersTurn(); }, 1000)
        }
        return true; //Returning true is needed for the computersTurn() function to work

    }
    //This function results in a random square being selected
    function computersTurn() {
        let success = false; //this boolean is used in the while loop
        let pickASquare; //This variable stores a random number 0-8
        while (!success) { //this condition allows the while loop to keep trying if a square is selected already
            pickASquare = String(Math.floor(Math.random() * 9)); //A random number between 0 and 8 is selected
            if (placeXOrO(pickASquare)) { //the random number checks for true, if it returns true the square hasnt been selected yet.
                placeXOrO(pickASquare); //this calls the function
                success = true; //this changes the boolean and ends the Loop
            };

        }
    }
}

function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 1000) } // X 0, 1, 2 condition 
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) } // X 3, 4, 5 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) } // X 6, 7, 8 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) } // X 0, 3, 6 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) } // X 1, 4, 7 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) } // X 2, 5, 8 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) } // X 6, 4, 2 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) } // X 0, 4, 8 condition

    //Starts the O condition Checks
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) } // O 3, 4, 5 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) } // O 6, 7, 8 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) } // O 0, 3, 6 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) } // O 1, 4, 7 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) } // O 2, 5, 8 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) } // O 6, 4, 2 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) } // O 0, 4, 8 condition
    else if (selectedSquare.length >= 9) {
        audio('media/tie2.mp3');
        setTimeout(function() { resetGame(); }, 1000);
    }
}

//This function checks if an array includes 3 strings. It is used to check for each win condition
function arrayIncludes(squareA, squareB, squareC) {
    //These 3 variables will be used to check for 3 in a row.
    const a = selectedSquare.includes(squareA)
    const b = selectedSquare.includes(squareB)
    const c = selectedSquare.includes(squareC)

    //If the 3 variables passed are all included in the our array true is 
    //returned and our else if condition executes the drawWinLine function
    if (a === true && b === true && c === true) { return true }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none'; //this makes our body unclickable
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000); //Makes the body clickable again after 1 second
}

//this function takes a string parameter of the path you set earlier for
//placement Sound
function audio(audioURL) {
    let audio = new Audio(audioURL); //Create a new audio object that passes the path as a parameter
    audio.play(); //play method plays our audio sound
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //Uses the html canvas to draw win lines
    const canvas = document.getElementById('win-lines') //accessing the html canvas element
    const c = canvas.getContext('2d'); //gives access to methods and properties to use on the canvas
    let x1 = coordX1, //indicates where the start of a lines x axis is
        y1 = coordY1, //indicates where the start of a lines y axis is
        x2 = coordX2, //indicates where the end of a lines x axis is 
        y2 = coordY2, //indicaties where the end of a lines y axis is
        x = x1, //variable stores temporary x axis data from the animation loop
        y = y1; //variable stores temporary y axis data from the animation loop

    function animateLineDrawing() { //interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); //creates a loop
        c.clearRect(0, 0, 608, 608) //clears content from the last loop iteration
        c.beginPath() //starts a new path
        c.moveTo(x1, y1) //moves to a starting point for the line
        c.lineTo(x, y) //indicates end of the line 
        c.lineWidth = 10; //sets the width of the line 
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //sets the color of the line
        c.stroke(); //draws everything laid out above

        if (x1 <= x2 && y1 <= y2) { //checks if the end point was reached
            if (x < x2) { x += 10; } //this adds 10 to the previous end x point
            if (y < y2) { y += 10; } //this adds 10 to the previous end y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) { //Needed for 6, 4, 2 condition
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }


    function clear() { //clears the canvas after the win line is drawn
        const animationLoop = requestAnimationFrame(clear); //starts the animationLoop
        c.clearRect(0, 0, 608, 608); //clears the canvas
        cancelAnimationFrame(animationLoop); //stops the animation Loop
    }

    disableClick(); //line disables clicking when win sound is playing
    audio('media/win2.mp3'); //plays the win sound
    animateLineDrawing(); //Calls the main animation loop
    setTimeout(function() {
        clear();
        resetGame();
    }, 1000);
}

function resetGame() { //resets the game in the event of tie or win 
    for (let i = 0; i < 9; i++) { //loop iterates through each HTML square element
        let square = document.getElementById(String(i)) //variable gets the html element of i
        square.style.backgroundImage = '' //removes the elements from backgroundImage
    }
    selectedSquare = []; //Resets the array so it is empty and its starts over
}