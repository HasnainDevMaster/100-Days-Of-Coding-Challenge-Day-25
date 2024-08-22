// 100 Days If Coding Challenge!

/** Question 75:
Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.*/

//-----------------------------------------------------------------------------------------------------------------------------------------

// Function compoundAssignments() to perform a series of operations on x using compound operators
function compoundAssignments() {
  // Initialize variable x
  let x = 4;

  // Perform a series of operations using compound operators
  x += 2; // x = x + 2
  console.log("After addition: x =", x);

  x -= 1; // x = x - 1
  console.log("After subtraction: x =", x);

  x *= 3; // x = x * 3
  console.log("After multiplication: x =", x);

  x /= 2; // x = x / 2
  console.log("After division: x =", x);
}

// Call the function compoundAssignments()
compoundAssignments();
