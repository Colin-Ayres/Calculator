

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