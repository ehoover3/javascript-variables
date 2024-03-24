### JavaScript Variables can be declared:

Creating a variable in JavaScript is called "declaring" a variable.
You declare a JavaScript variable with the var, let, or const keyword:

- Using var (do not use this... this the old way)
- Using let (use this when you expect the variable to change)
- Using const (use this when the variable will not change)

### History:

- The var keyword was used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- The var keyword should only be used in code written for older browsers.

### Examples:

- let inventoryItems = 50
- let amountOfMoney = 1000
- let dogs = 2
- const PI = 3.14
- const METERS_TO_FEET = 3.28084;
- const POUNDS_TO_KILOGRAMS = 0.453592;

### Just Like Algebra:

Just like in algebra, variables hold values:

- let x = 5;
- let y = 6;

Just like in algebra, variables are used in expressions:

- let z = x + y;

### JavaScript Identifiers

<img src='./images/variableDiagram.png' alt='variable diagram'>

All JavaScript variables must be identified with unique names. These unique names are identifiers.

Identifiers can be short names (like x and y) or more descriptive (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with $ and \_ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.

### JavaScript Assignment Operator

In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.
This is different from algebra. The following does not make sense in algebra:

x = x + 5

In JavaScript, it assigns the value of x + 5 to x.

For example:

- let myVariable = 10 // Expect myVariable's value to be 10
- myVariable = myVariable + 5 // Expect myVariable's value to be 15

Note: The "equal to" operator is written like == in JavaScript.
