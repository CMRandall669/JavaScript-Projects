function my_Dictionary() { //creates the function to be called 
    var Animal = { //creats and defines the variable used in the function
        Species: "Dog", //These next few lines are creating Key Value Pairs that can be called
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //deletes the key value sound before it is called
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //calls the Key value pair and displays it on the HTML page
}