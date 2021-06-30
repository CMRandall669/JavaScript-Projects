var X = 10; //start Gloabl variable

function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2(); //End Gloabl variable

function Add_numbers_3() { //Start local variable
    var Y = 10;
    document.write(20 + Y + "<br>");
}

function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4(); //end local variable

function get_Date() { //get_Date function created and linked to index.html
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() { //creates the Age check box and returns a positive or negative
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote"
    } else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() { //creates the Time function and operation used by the HTML Page
    var Time = new Date().getHours(); //defines time as a variable
    var Reply; //defines replay as a variable
    if (Time < 12 == Time > 0) { //conditional statement that check time and compares values
        Reply = "It is morning time!" //if the IF statement fails the code goes to Else If and checks against that
    } else if (Time >= 12 == Time < 18) { //Checks time against the Else If statement if it fails it goes to the else step
        Reply = "It is afternoon!";
    } else { //Returns it is evening if both IF and Else If statements fail
        Reply = "It is evening!";
    }

    document.getElementById("Time_of_day").innerHTML = Reply; //prints the Reply variable with the appropriate time
}