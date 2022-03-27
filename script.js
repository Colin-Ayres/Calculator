mainScreen = ["Awaiting input"];
decimalCounter = 0;


///////////////////////////////////////////DOM Manipulation Begin///////////////////////////////////////////
//Create container variables
const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const rowThree = document.querySelector(".rowThree");
const rowFour = document.querySelector(".rowFour");
const rowFive = document.querySelector(".rowFive");
const rowSix = document.querySelector(".rowSix")

const mainScreenText = document.createElement("h1")
mainScreenText.classList.add('mainScreenText')
mainScreenText.innerHTML = mainScreen;
rowOne.appendChild(mainScreenText);
mainScreen = " ";

//Create "mod" button
const modButton = document.createElement("button");
modButton.classList.add('modButton');
modButton.innerHTML = "%";
modButton.type = "submit";
modButton.name = "formBtn";
modButton.onclick = function () {
    addOperator("%");
}
rowOne.appendChild(modButton);

//Create "Divide by 0" button
const dzButton = document.createElement("button");
dzButton.classList.add('dzButton');
dzButton.innerHTML = "Div by 0";
dzButton.type = "submit";
dzButton.name = "formBtn";
dzButton.onclick = function () {
    mainScreen = ["You can't divide by 0"];
    mainScreenText.innerHTML = mainScreen;
    resultHitCounter = 1;
    mainScreen = " ";
}
rowOne.appendChild(dzButton);

//Create "Clear line (C)" button
const clearButton = document.createElement("button");
clearButton.classList.add('clearButton');
clearButton.innerHTML = "C";
clearButton.type = "submit";
clearButton.name = "formBtn";
clearButton.onclick = function () {
    mainScreen = "Cleared, awaiting input";
    mainScreenText.innerHTML = mainScreen; 
}
rowOne.appendChild(clearButton);

//Create "<--" button
const backspaceButton = document.createElement("button");
backspaceButton.classList.add('backspaceButton');
backspaceButton.innerHTML = "<--";
backspaceButton.type = "submit";
backspaceButton.name = "formBtn";
backspaceButton.onclick = function () {
    //mainScreen = mainScreen - mainScreen[mainScreen.length - 1];
    //mainScreenText.innerHTML = mainScreen; 
}
rowOne.appendChild(backspaceButton);

//Create "inverse" button
const inverseButton = document.createElement("button");
inverseButton.classList.add('inverseButton');
inverseButton.innerHTML = "1/n";
inverseButton.type = "submit";
inverseButton.name = "formBtn";
inverseButton.onclick = function () {
    //execute operation immediately
    if (noOperatorOnEnd() == true){
        mainScreen = "inverse";
        mainScreenText.innerHTML = mainScreen;
        mainScreen = " ";
        decimalCounter = 0;    
    }
}
rowTwo.appendChild(inverseButton);

//Create "Squared" button
const squaredButton = document.createElement("button");
squaredButton.classList.add('squaredButton');
squaredButton.innerHTML = "n²";
squaredButton.type = "submit";
squaredButton.name = "formBtn";
squaredButton.onclick = function () {
    //
    //immediately square mainScreen and output result
    //ResultHitcounter = 1;
    if (noOperatorOnEnd() == true){
        mainScreen = "squared";
        mainScreenText.innerHTML = mainScreen;
        mainScreen = " ";
        decimalCounter = 0;    
    }

}
rowTwo.appendChild(squaredButton);

//Create "Square root" button
const sqrrootButton = document.createElement("button");
sqrrootButton.classList.add('sqrrootButton');
sqrrootButton.innerHTML = "√";
sqrrootButton.type = "submit";
sqrrootButton.name = "formBtn";
sqrrootButton.onclick = function () {
    //if main screen only has numbers
    //topScreen = sqrt(mainScreen)
    //immediately square mainScreen and output result
    //resulthitcounter = 1;
    if (noOperatorOnEnd() == true){
        mainScreen = "square root";
        mainScreenText.innerHTML = mainScreen;
        mainScreen = " ";
        decimalCounter = 0;    
    }

}
rowTwo.appendChild(sqrrootButton);

//Create "/" button
const divideButton = document.createElement("button");
divideButton.classList.add('divideButton');
divideButton.innerHTML = " / ";
divideButton.type = "submit";
divideButton.name = "formBtn";
divideButton.onclick = function () {
    addOperator("/");
}
rowTwo.appendChild(divideButton);

//Create "7" button
const sevenButton = document.createElement("button");
sevenButton.classList.add('sevenButton');
sevenButton.innerHTML = "7";
sevenButton.type = "submit";
sevenButton.name = "formBtn";
sevenButton.onclick = function () {
    addNumbertoScreen("7");

}
rowThree.appendChild(sevenButton);

//Create "8" button
const eightButton = document.createElement("button");
eightButton.classList.add('eightButton');
eightButton.innerHTML = "8";
eightButton.type = "submit";
eightButton.name = "formBtn";
eightButton.onclick = function () {
    addNumbertoScreen("8");
}
rowThree.appendChild(eightButton);

//Create "9" button
const nineButton = document.createElement("button");
nineButton.classList.add('nineButton');
nineButton.innerHTML = "9";
nineButton.type = "submit";
nineButton.name = "formBtn";
nineButton.onclick = function () {
    addNumbertoScreen("9");
}
rowThree.appendChild(nineButton);

//Create "multiply" button
const multiplyButton = document.createElement("button");
multiplyButton.classList.add('multiplyButton');
multiplyButton.innerHTML = " x ";
multiplyButton.type = "submit";
multiplyButton.name = "formBtn";
multiplyButton.onclick = function () {
    addOperator("*");
}
rowThree.appendChild(multiplyButton);

//Create "4" button
const fourButton = document.createElement("button");
fourButton.classList.add('fourButton');
fourButton.innerHTML = "4";
fourButton.type = "submit";
fourButton.name = "formBtn";
fourButton.onclick = function () {
    addNumbertoScreen("4");
}
rowFour.appendChild(fourButton);

//Create "5" button
const fiveButton = document.createElement("button");
fiveButton.classList.add('fiveButton');
fiveButton.innerHTML = "5";
fiveButton.type = "submit";
fiveButton.name = "formBtn";
fiveButton.onclick = function () {
    addNumbertoScreen("5");
}
rowFour.appendChild(fiveButton);

//Create "6" button
const sixButton = document.createElement("button");
sixButton.classList.add('sixButton');
sixButton.innerHTML = "6";
sixButton.type = "submit";
sixButton.name = "formBtn";
sixButton.onclick = function () {
    addNumbertoScreen("6");
}
rowFour.appendChild(sixButton);

//Create "minus" button
const minusButton = document.createElement("button");
minusButton.classList.add('sixButton');
minusButton.innerHTML = " - ";
minusButton.type = "submit";
minusButton.name = "formBtn";
minusButton.onclick = function () {
    addOperator("-");
}
rowFour.appendChild(minusButton);

//Create "1" button
const oneButton = document.createElement("button");
oneButton.classList.add('oneButton');
oneButton.innerHTML = "1";
oneButton.type = "submit";
oneButton.name = "formBtn";
oneButton.onclick = function () {
    addNumbertoScreen("1");
}
rowFive.appendChild(oneButton);

//Create "2" button
const twoButton = document.createElement("button");
twoButton.classList.add('twoButton');
twoButton.innerHTML = "2";
twoButton.type = "submit";
twoButton.name = "formBtn";
twoButton.onclick = function () {
    addNumbertoScreen("2");
}
rowFive.appendChild(twoButton);

//Create "3" button
const threeButton = document.createElement("button");
threeButton.classList.add('threeButton');
threeButton.innerHTML = "3";
threeButton.type = "submit";
threeButton.name = "formBtn";
threeButton.onclick = function () {
    addNumbertoScreen("3");
}
rowFive.appendChild(threeButton);

//Create "plus" button
const plusButton = document.createElement("button");
plusButton.classList.add('plusButton');
plusButton.innerHTML = " + ";
plusButton.type = "submit";
plusButton.name = "formBtn";
plusButton.onclick = function () {
    addOperator("+");
}
rowFive.appendChild(plusButton);

//Create "+/-" button
const oppositeButton = document.createElement("button");
oppositeButton.classList.add('oppositeButton');
oppositeButton.innerHTML = "+/-";
oppositeButton.type = "submit";
oppositeButton.name = "formBtn";
oppositeButton.onclick = function () {
    addOperator("*(-1)");
}
rowSix.appendChild(oppositeButton);

//Create "0" button
const zeroButton = document.createElement("button");
zeroButton.classList.add('zeroButton');
zeroButton.innerHTML = "0";
zeroButton.type = "submit";
zeroButton.name = "formBtn";
zeroButton.onclick = function () {
    addNumbertoScreen("0");
}
rowSix.appendChild(zeroButton);

//Create "." button
const decimalButton = document.createElement("button");
decimalButton.classList.add('decimalButton');
decimalButton.innerHTML = ".";
decimalButton.type = "submit";
decimalButton.name = "formBtn";
decimalButton.onclick = function () {
    if ((decimalCounter == 0) && (mainScreen[mainScreen.length-2] !== (")"))){
        if (mainScreen[mainScreen.length - 1] == (" ")){
            mainScreen = mainScreen + "0" + ".";
            mainScreenText.innerHTML = mainScreen;
            decimalCounter = 1;
        } else if ((mainScreen !== (" ")) && ((mainScreen[mainScreen.length-2] !== ("%")) && (mainScreen[mainScreen.length-1] !== (".")) && (mainScreen[mainScreen.length-2] !== ("+")) && (mainScreen[mainScreen.length-2] !== ("-")) && (mainScreen[mainScreen.length-2] !== ("/")) && (mainScreen[mainScreen.length-2] !== ("*")))){
            mainScreen = mainScreen + ".";
            mainScreenText.innerHTML = mainScreen
            decimalCounter = 1;
        }
    }
}
rowSix.appendChild(decimalButton);

//Create "equal" button
const equalButton = document.createElement("button");
equalButton.classList.add('equalButton');
equalButton.innerHTML = "=";
equalButton.type = "submit";
equalButton.name = "formBtn";
equalButton.onclick = function () {
    if (noOperatorOnEnd() == true){
        mainScreen = "equals";
        mainScreenText.innerHTML = mainScreen;
        mainScreen = " ";
        decimalCounter = 0;    
    }
}
rowSix.appendChild(equalButton);
///////////////////////////////////////////DOM Manipulation End///////////////////////////////////////////

function noOperatorOnEnd(){
    if ((mainScreen !== (" ")) && ((mainScreen[mainScreen.length-2] !== ("%")) && (mainScreen[mainScreen.length-1] !== (".")) && (mainScreen[mainScreen.length-2] !== ("+")) && (mainScreen[mainScreen.length-2] !== ("-")) && (mainScreen[mainScreen.length-2] !== ("/")) && (mainScreen[mainScreen.length-2] !== ("*")))){
        console.log("true")
        return true;
        
    } else {
        console.log("false")
        return false;
    }
}

function addOperator(operatorInput){
    if ((mainScreen !== (" ")) && ((mainScreen[mainScreen.length-2] !== ("%")) && (mainScreen[mainScreen.length-1] !== (".")) && (mainScreen[mainScreen.length-2] !== ("+")) && (mainScreen[mainScreen.length-2] !== ("-")) && (mainScreen[mainScreen.length-2] !== ("/")) && (mainScreen[mainScreen.length-2] !== ("*")))){
        mainScreen = mainScreen + " " + operatorInput + " ";
        mainScreenText.innerHTML = mainScreen;
        decimalCounter = 0;
    }
}

function addNumbertoScreen(numberInput){
    if (mainScreen[mainScreen.length-2] !== (")")){
    mainScreen = mainScreen + numberInput;
    mainScreenText.innerHTML = mainScreen;
    }
}

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
        return "You can't divide by 0";
    }
    else 
    {
        return numberOne / numberTwo;
    }
}

function opposite(numberOne){
    return numberOne * -1;
}

function mod(numberOne, numberTwo){
    return numberOne % numberTwo;
}

function operate(numberOne, numberTwo, inputOperator){
    if (inputOperator == "+"){
        add(numberOne, numberTwo);
    }
    else if (inputOperator == "-"){
        subtract(numberOne,numberTwo);
    }
    else if (inputOperator == "*"){
        multiply(numberOne,numberTwo);
    }
    else if (inputOperator == "/"){
        divide(numberOne,numberTwo);
    }
    else if (inputOperator == "%"){
        mod(numberOne,numberTwo);
    }
    else if (inputOperator == "("){
        opposite(numberOne);
    }

}

//convert maintext to array, get rid of all spaces, collect number, operator, then number 2nd number
//"("" ounts as operator then skip ahead 4 places for next operator) 
//bubble search, execute to end of string