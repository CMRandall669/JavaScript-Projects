function full_sentence() { //function created to concatenate the sentence
    var part_1 = "I have "; //4 parts of the sentence. All separated as variables
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Creates the variable that will display as the full sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; //displays the concatenated string
}

function slice_Method() { //Defines the slice method function 
    var Sentence = "All work and no play makes Johnny a dull boy."; //Creates the variable that will be affected by the slice method
    var Section = Sentence.slice(27, 33); //defines where on the string the slice method will pull from
    document.getElementById("Slice").innerHTML = Section; //displays the slice method result
}

function capital_Function() { //creates the function for toUpperCase
    var X = "Hello World!"; //creates the variable that will be affected by the the method
    var Y = X.toUpperCase(); //creates the variable that will store the result of the method
    document.getElementById("Capital").innerHTML = Y; //displays the result of the method
}

function string_Method() { //creates the strung method function
    var Z = 182; //creates the variable that will be affected by the the method
    document.getElementById("Numbers_to_string").innerHTML = Z.toString(); //displays the result of the method
}

function precision_Method() { //creates the precision method function
    var X = 12938.3012987376112; //creates the variable that will be affected by the method
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //displays the result of the method to the set value
}

function fixed_Method() { //creates the fixed_Method function 
    var X = 5.56789; //creates the variable that will be affected by the the method
    var Y = X.toFixed(2); //creates the variable that is stored as a result of the method fixing the number to 2 slots
    document.getElementById("Fixed").innerHTML = Y; //displays the result of the method
}

function value_Method() { //creates the value_Method function
    var X = "Hello World!"; //creates the variable that will be affected by the method
    var Y = X.valueOf(); //creates the variable that is stored as a result of the method 
    document.getElementById("Value").innerHTML = Y; //displays the result of the method and returns the primitive value of the string
}