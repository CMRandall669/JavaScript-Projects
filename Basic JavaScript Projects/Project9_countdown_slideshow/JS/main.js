function countdown() { //creates the countdown function 
    var seconds = document.getElementById("seconds").value; //seconds variable is created and displays whatever value inputted

    function tick() { //Creates the tick function used by countdown function
        seconds = seconds - 1; //The code checks seconds against seconds if they are equal the number is subtracted by 1 and displays the result 
        timer.innerHTML = seconds; //Shows the result of the tick function
        setTimeout(tick, 1000); //end point for tick function

        if (seconds == -1) { //check if the value of seconds is -1. If it is it kills the code and alerts the window.
            alert("Time's up!");
        }
    }
    tick(); //ends the tick function
}