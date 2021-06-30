function Ride_Function() { //Creates Ride Function for first button
    var Height, Can_ride; //creates the variable Height and Can_ride
    Height = document.getElementById("Height").value; //Defines what is being called on by the HTML element
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough"; //Defines what the height input needs to be higher than
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; //Calls out if you are tall enough to ride
}

function Vote_Function() { //Creates Vote Function button
    Age = document.getElementById("Age").value; //Creates the variable Age
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough"; //Creates Can_Vote and defines the number needed for either string 
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //Writes the answer to the javascript function on the html page
}

function Vehicle(Make, Model, Year, Color) { //Vehicle function is defined and creates constructors for the class
    this.Vehicle_Make = Make; //these define each constuctor
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Entries for different values
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() { //creates function used to call on the HTML page
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function more_Function() { //creates function writing New and this
    document.getElementById("New_and_This").innerHTML = "New and This"
}

function count_Function() { //This is the nested function
    document.getElementById("Counting").innerHTML = Count();

    function Count() { //creates the function used to count
        var Starting_point = 9;

        function Plus_One() { Starting_point += 1; } //creates the function that adds 1 to the starting point
        Plus_One();
        return Starting_point; //returns to the starting point after the plus one function is run
    }
}