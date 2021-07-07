const Calculator = { //creates an object that tracks values 
    Display_Value: '0', //displays 0 on the screen
    First_Operand: null, //holds the first operand for any expression
    Wait_Second_Operand: false, //checks if a second operand has been input
    operator: null, //holds the operator
};

function Input_Digit(digit) { //modifies the value each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) { //Checing to see if Wait_Second_Operand is true and sets Display_Value to key that was hit
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { //overwrite Display_Value if the current value is 0 
        //if not add onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) { //handles decimal points inputted
    if (Calculator.Wait_Second_Operand === true) return; //makes accidental clicking of decimal points not cause bugs
    if (!Calculator.Display_Value.includes(dot)) {
        //If display_value does not have a decimal. Add a decimal point.
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //Handles operators
    const { First_Operand, Display_Value, operator } = Calculator
    //when an operator is clicked can the current number on screen to a number and then store the result
    //in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);


    if (operator && Calculator.Wait_Second_Operand) { //checks if the operator already exists and if Wait_Second_Operand is true, updates and exits function
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        //if the operator exists, properties are looked up in the perform_calculation object and the matching function executes
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9); //adding a fixed amount of numbers after the decimal
        result = (result * 1).toString() //this removes any trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = { //Defines the formulas used in all operations
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { //updates the screen with current display value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); //This section covers button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => { //target variable is an object that represents the element that was clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) { //ensures that the AC clears the numbers
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})