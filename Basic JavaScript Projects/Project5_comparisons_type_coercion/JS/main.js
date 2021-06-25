function NaN_function() { //displays the NaN function declared in the HTML code
    document.getElementById("Test").innerHTML = 0/0;
}

function infinity_Positive() { //displays the isNanN function declared in the HTML
    document.getElementById("Test").innerHTML = isNaN("This is a string");
}

function infinity_Negative() { //displays the isNaN "007" declared in the HTML
    document.getElementById("Test").innerHTML = isNaN("007");
}

function not_Function() { //The not operator used in the HTML page displays 
    document.getElementById("Test").innerHTML = !!(20 > 10);
}

function add_function() {
    var X = 10
    document.getElementById("Test").innerHTML = ("This string is being combined with a number like" + "X");
}

document.write(2e310); // displays infinity
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(-3e310); //displays -infinity
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 > 2); //displays true greater than less than boolean
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 < 2); //displays false greater than less than boolean
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 == 10); //displays the abstract equal operator
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 == 11); //displays the abstract equal operator
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 === 11); //displays the strictly equal operator
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(10 === 10); //displays the strictly equal operator
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(typeof "Word"); //typeof method being declared and displayed
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(5 > 2 && 10 > 4); // returns true when both sides of the argument are true
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(5 > 10 && 10 > 4); //returns false when both sides of the argument arent true
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(5 > 10 || 10 > 4); //returns false when both sides are false
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write(5 > 10 || 10 > 20); //returns false only when both sides are false
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");

document.write("This string will add a number"+ 20); //combines a string and an integer
