function NaN_function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function Infinity_positive() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

function Infinity_negative() {
    document.getElementById("Test").innerHTML = isNaN('007');
}