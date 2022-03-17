topScreen = [];
mainScreen = [];

///////////////////////////////////////////DOM Manipulation Begin///////////////////////////////////////////
//Create container variables
const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const rowThree = document.querySelector(".rowThree");
const rowFour = document.querySelector(".rowFour");
const rowFive = document.querySelector(".rowFive");
const rowSix = document.querySelector(".rowSix")

//Create "mod" button
const modButton = document.createElement("button");
modButton.classList.add('modButton');
modButton.innerHTML = "%";
modButton.type = "submit";
modButton.name = "formBtn";
modButton.onclick = function () {
    //call mod operator
}
rowOne.appendChild(modButton);

//Create "Clear everything (CE)" button
const CEButton = document.createElement("button");
CEButton.classList.add('CEButton');
CEButton.innerHTML = "CE";
CEButton.type = "submit";
CEButton.name = "formBtn";
CEButton.onclick = function () {
    //Clear everything
}
rowOne.appendChild(CEButton);

//Create "Clear line (C)" button
const clearButton = document.createElement("button");
clearButton.classList.add('clearButton');
clearButton.innerHTML = "C";
clearButton.type = "submit";
clearButton.name = "formBtn";
clearButton.onclick = function () {
    //Clear line
}
rowOne.appendChild(clearButton);

//Create "<--" button
const backspaceButton = document.createElement("button");
backspaceButton.classList.add('backspaceButton');
backspaceButton.innerHTML = "<--";
backspaceButton.type = "submit";
backspaceButton.name = "formBtn";
backspaceButton.onclick = function () {
    //add multiply to operator field
}
rowOne.appendChild(backspaceButton);

//Create "inverse" button
const inverseButton = document.createElement("button");
inverseButton.classList.add('inverseButton');
inverseButton.innerHTML = "1/n";
inverseButton.type = "submit";
inverseButton.name = "formBtn";
inverseButton.onclick = function () {
    //call inverse operator
}
rowTwo.appendChild(inverseButton);

//Create "Squared" button
const squaredButton = document.createElement("button");
squaredButton.classList.add('squaredButton');
squaredButton.innerHTML = "n²";
squaredButton.type = "submit";
squaredButton.name = "formBtn";
squaredButton.onclick = function () {
    //Clear everything
}
rowTwo.appendChild(squaredButton);

//Create "Square root" button
const sqrrootButton = document.createElement("button");
sqrrootButton.classList.add('sqrrootButton');
sqrrootButton.innerHTML = "√";
sqrrootButton.type = "submit";
sqrrootButton.name = "formBtn";
sqrrootButton.onclick = function () {
    //Clear line
}
rowTwo.appendChild(sqrrootButton);

//Create "/" button
const divideButton = document.createElement("button");
divideButton.classList.add('divideButton');
divideButton.innerHTML = "/";
divideButton.type = "submit";
divideButton.name = "formBtn";
divideButton.onclick = function () {
    //add multiply to operator field
}
rowTwo.appendChild(divideButton);

//Create "7" button
const sevenButton = document.createElement("button");
sevenButton.classList.add('sevenButton');
sevenButton.innerHTML = "7";
sevenButton.type = "submit";
sevenButton.name = "formBtn";
sevenButton.onclick = function () {
    //add 7 to number on display screen
}
rowThree.appendChild(sevenButton);

//Create "8" button
const eightButton = document.createElement("button");
eightButton.classList.add('eightButton');
eightButton.innerHTML = "8";
eightButton.type = "submit";
eightButton.name = "formBtn";
eightButton.onclick = function () {
    //add 2 to number on display screen
}
rowThree.appendChild(eightButton);

//Create "9" button
const nineButton = document.createElement("button");
nineButton.classList.add('nineButton');
nineButton.innerHTML = "9";
nineButton.type = "submit";
nineButton.name = "formBtn";
nineButton.onclick = function () {
    //add 9 to number on display screen
}
rowThree.appendChild(nineButton);

//Create "multiply" button
const multiplyButton = document.createElement("button");
multiplyButton.classList.add('multiplyButton');
multiplyButton.innerHTML = "x";
multiplyButton.type = "submit";
multiplyButton.name = "formBtn";
multiplyButton.onclick = function () {
    //add multiply to operator field
}
rowThree.appendChild(multiplyButton);

//Create "4" button
const fourButton = document.createElement("button");
fourButton.classList.add('fourButton');
fourButton.innerHTML = "4";
fourButton.type = "submit";
fourButton.name = "formBtn";
fourButton.onclick = function () {
    //add 4 to number on display screen
}
rowFour.appendChild(fourButton);

//Create "5" button
const fiveButton = document.createElement("button");
fiveButton.classList.add('fiveButton');
fiveButton.innerHTML = "5";
fiveButton.type = "submit";
fiveButton.name = "formBtn";
fiveButton.onclick = function () {
    //add 5 to number on display screen
}
rowFour.appendChild(fiveButton);

//Create "6" button
const sixButton = document.createElement("button");
sixButton.classList.add('sixButton');
sixButton.innerHTML = "6";
sixButton.type = "submit";
sixButton.name = "formBtn";
sixButton.onclick = function () {
    //add 6 to number on display screen
}
rowFour.appendChild(sixButton);

//Create "minus" button
const minusButton = document.createElement("button");
minusButton.classList.add('sixButton');
minusButton.innerHTML = "-";
minusButton.type = "submit";
minusButton.name = "formBtn";
minusButton.onclick = function () {
    //add minus to operator field
}
rowFour.appendChild(minusButton);

//Create "1" button
const oneButton = document.createElement("button");
oneButton.classList.add('oneButton');
oneButton.innerHTML = "1";
oneButton.type = "submit";
oneButton.name = "formBtn";
oneButton.onclick = function () {
    //add 1 to number on display screen
}
rowFive.appendChild(oneButton);

//Create "2" button
const twoButton = document.createElement("button");
twoButton.classList.add('twoButton');
twoButton.innerHTML = "2";
twoButton.type = "submit";
twoButton.name = "formBtn";
twoButton.onclick = function () {
    //add 5 to number on display screen
}
rowFive.appendChild(twoButton);

//Create "3" button
const threeButton = document.createElement("button");
threeButton.classList.add('threeButton');
threeButton.innerHTML = "3";
threeButton.type = "submit";
threeButton.name = "formBtn";
threeButton.onclick = function () {
    //add 3 to number on display screen
}
rowFive.appendChild(threeButton);

//Create "plus" button
const plusButton = document.createElement("button");
plusButton.classList.add('plusButton');
plusButton.innerHTML = "+";
plusButton.type = "submit";
plusButton.name = "formBtn";
plusButton.onclick = function () {
    //add plus to operator field
}
rowFive.appendChild(plusButton);

//Create "+/-" button
const oppositeButton = document.createElement("button");
oppositeButton.classList.add('oppositeButton');
oppositeButton.innerHTML = "+/-";
oppositeButton.type = "submit";
oppositeButton.name = "formBtn";
oppositeButton.onclick = function () {
    //make number opposite
}
rowSix.appendChild(oppositeButton);

//Create "0" button
const zeroButton = document.createElement("button");
zeroButton.classList.add('zeroButton');
zeroButton.innerHTML = "0";
zeroButton.type = "submit";
zeroButton.name = "formBtn";
zeroButton.onclick = function () {
    //add 0 to number on display screen
}
rowSix.appendChild(zeroButton);

//Create "." button
const decimalButton = document.createElement("button");
decimalButton.classList.add('decimalButton');
decimalButton.innerHTML = ".";
decimalButton.type = "submit";
decimalButton.name = "formBtn";
decimalButton.onclick = function () {
    //add decimal
}
rowSix.appendChild(decimalButton);

//Create "equal" button
const equalButton = document.createElement("button");
equalButton.classList.add('equalButton');
equalButton.innerHTML = "=";
equalButton.type = "submit";
equalButton.name = "formBtn";
equalButton.onclick = function () {
    //add equal to operator field
}
rowSix.appendChild(equalButton);
///////////////////////////////////////////DOM Manipulation End///////////////////////////////////////////


function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo){
    if (numberTwo == 0)
    {
        return "ERROR DIV BY ZERO";
    }
    else 
    {
        return numberOne / numberTwo;
    }
}

function mod(numberOne, numberTwo){
    return numberOne % numberTwo;
}

function operate(numberOne, numberTwo, inputOperator){
    if (inputOperator == "+"){
        add(numberOne, numberTwo);
    }
    else if (inputOperator == "-"){
        subtract(numberOne,numberTwo)
    }
    else if (inputOperator == "*"){
        multiply(numberOne,numberTwo)
    }
    else if (inputOperator == "/"){
        divide(numberOne,numberTwo)
    }
    else if (inputOperator == "%"){
        mod(numberOne,numberTwo)
    }
}