# Calculator
## Description
The HTML/CSS portion of the code works by sectioning off portions of the calculator and styling them (calcpad, rows, screen). The JavaScript works by creating buttons corresponding to necessary calculator functions. You can add, subtract, divide, and multiply numbers and the calculator will display your input on the screen. There is a joke button, DIV/0, which immediately takes your input and warns you - don't divide by zero! If you do divide by zero manually elsewhere, the calculator will also warn you here. After you have written your expression via the buttons, you can press the equal sign to calculate the answer. You can also calculate the factorial or squared value of an expression via their respective buttons. Decimal numbers are allowed. The calculator is constrained such that no invalid input can be entered. Clicking two operator buttons in a row (example: +/), clicking the decimal button more than once for a single button (example: 4.444.22), or clicking the equal button with a trailing operator (example: 3+2+=), among other things, are not allowed; if it is attempted, the invalid input buttons will not add values to the screen. 

## JavaScript Logic
#### DOM Manipulation
The JavaScript code creates the buttons in the HTML by appending them as children to the various rows. This is a major weakness in this application, as there is significant repetition.

### Buttons
Depending on the button pressed, it will check through various conditionals to ensure that the previous input is aceptable to pair with the current desired input. If it is, it will be added to the HTML of the screen. Buttons that add numbers to the screen aren't checked because they cannot create an invalid expression, but other types of input (such as operators or evaluators) can. 

### Evaluation
Once the user has pressed an evaluator button (=, 1/n, sqrt(n), +/-), the values on screen are stored to a new array. This new array is altered so that numbers and decimals are combined to form a single number then added back to a reformattedArray so that now each element contains either a number followed by an operator followed by another number (or nothing if it's the end of the expression). The reformattedArray is evaluated in chunks of three elemeents - the first element, a number, is used against the second element, an operator, which is used against the third element. As array is altered as each three element are condensed into a single element. When there is one element left, the evaluateArray method returns the result. Depending on the evaluator button used, the result is modified to be inversed, the square root, reciprocal, etc.

## Demo
This demo can be viewed at: https://chayre.github.io/calculator/
### Inputting an expression using the calculator buttons
![image](https://user-images.githubusercontent.com/88121502/165216000-bae081ec-b937-4266-b4e9-bdbef232144b.png)

## Improvements
The JavaScript file should be refactored to loop through DOM manipulation elements (buttons). The formatArray method is too verbose and could be condensed. There is far too much repetition in the current JS code. The application could also be restyled to be more visually appealing. There could be a secondary mode in which the input is evaluated using PEMDAS rather than sequentially.
