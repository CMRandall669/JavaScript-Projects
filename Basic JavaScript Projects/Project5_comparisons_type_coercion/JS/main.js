function NaN_function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function infinity_Positive() {
    document.getElementById("Test").innerHTML = isNaN("This is a string");
}

function infinity_Negative() {
    document.getElementById("Test").innerHTML = isNaN("007");
}

document.write(2e310);

document.write(-3e310);

document.write(10 > 2);

document.write(10 < 2);

