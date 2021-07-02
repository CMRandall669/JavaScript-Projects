function length_Function() { //function created
    var X = "Hello World!"; //variable used by the function declared
    var Y = X.length; //variable that will be the result of the length function
    document.getElementById("long").innerHTML = Y; //displays the result of the method
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Creates a variable with multiple values assigned that can be called separately
var Content = ""; //Creates a variable used in the addition operation
var Y; //creates the variable the will be used as the check on the loop

function for_Loop() { //function created
    for (Y = 0; Y < Instruments.length; Y++) { //Y is set as 0 for the check. The loop checks if Y is less than the variable length. If not Y is upped
        Content += Instruments[Y] + "<br>"; //assigns the result of the loop to the variable Content
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //calls content to be displayed on the page
}

function cat_pics() { //function created for using an array 
    var Cat_Picture = []; //declared the variable being used
    Cat_Picture[0] = "sleeping"; //assigned a string to values along the array that can be called separately
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + //calling the 3rd element in the array and displaying on the page
        Cat_Picture[2] + ".";
}

function constant_function() { //function created to set a constant 
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" }; //assings Musical_Instruments as a constant with the values assigned
    Musical_Instrument.color = "blue"; //changes the black value to blue
    Musical_Instrument.price = "$900"; //adds the price value in
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price; //calls the constant and displays it
}

let G = 16; //let assigns the value to G

{
    let G = 61; //within these brackets G is 61 instead of 16
}
//Here G would be 16



function myFunction(name) { //Function to show return
    return "Hello " + name; //calling for return and concatenating the strings
}
document.getElementById("haha_haha").innerHTML = myFunction("Lucas"); //Displays it on the Page

let car = { //Creates the car object with several different values added in
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description: function() { //declares the function being used to display car variable result
        return "The car is a " + this.color + this.year + this.make + this.model; //calls each value and adds them to the string
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //Displays it on the Page

let text = ""; //Loop with a break statement when it hits 3
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
};

document.getElementById("end_it").innerHTML = text; //displays the result

let Z = ""; //loop with a continue statement as long as its less than 10
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    Z += "The number is " + i + "<br>";
}
document.getElementById("keep_it_alive").innerHTML = Z;