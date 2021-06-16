window.alert(Math.random()); //alert shown at top of page displays random number

function subtraction_Function() { //creates the subtraction function and operation used in the call
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function addition_Function() { //creates the addition function and operation used in the call
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2+2 = " + addition;
}

function multiplication() { //creates the multiplication function and operation used in the call
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

function division() { //creates the division function and operation used in the call
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48/6 = " + simple_Math;
}

function more_Math() { //creates the more_Math function and operation used in the call
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and the subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { //creates the modulus_Operator function and operation used in the call
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //creates the negation_Operator function and operation used in the call
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var y = 5; //writes increment of 5 up 1 displays as 6 at top of page
y++;
document.write(y);

var X = 5; //writes decrement of 5 down 1 displays as 4 at top of page
X--;
document.write(X);

function pi_Operator() { //creates the pi_Operator function and operation used in the call
    document.getElementById("Math").innerHTML = Math.PI;
}