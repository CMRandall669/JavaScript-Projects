function myFunction() { //declares the function being used by the JavaScript
    var sentence = "I am learning"; //1st part of the sentence being used
    sentence += " a lot from this JavaScript course"; //2nd part of the sentence being used and added on to the first sentence has a space behind the first quote to add the space after learning
    document.getElementById("concatenate").innerHTML = sentence; //How the HTML page is calling and displaying the concatenating strings
}