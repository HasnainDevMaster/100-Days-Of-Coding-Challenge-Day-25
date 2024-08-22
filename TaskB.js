"use strict";
// 100 Days If Coding Challenge!
/** Question 74:
Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.*/
//----------------------------------------------------------------------------------------------------------------
// Function "swapVariables()" to swap the values of two variables
function swapVariables() {
    // Initialize variables a and b
    let a = 5;
    let b = 10;
    console.log("Before swap - a:", a, "b:", b);
    // Swap the values of a and b
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap - a:", a, "b:", b);
}
// Call the function to swap the variables
swapVariables();
