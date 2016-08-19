
function rpn (...inputs) {
    let arr2 = [];
    return calculate(inputs, arr2);
}


function calculate(inputs, arr2) {
    let arrayOfInputs = inputs;
    const firstElementInArray = arrayOfInputs.shift();

    if (Number.isFinite(firstElementInArray)) {
        arrayOfInputs.push(firstElementInArray);
        // console.log(arr2);
    } else if (operators.includes(firstElementInArray)) {
        const number2 = arrayOfInputs.pop(), number1 = arrayOfInputs.pop();
        let operator = firstElementInArray;


        if (operator === '+') {
            arr2.push(number1 + number2);
        } else if (operator === '-') {
            arr2.push(number1 - number2);
        } else if (operator === '/') {
            arr2.push(number1 / number2);
        } else if (operator === '*') {
            arr2.push(number1 * number2);
        }
    } else {
        throw "Argument was of an invalid type"
    }


    if (arrayOfInputs.length > 0) {    //fuck this off
        return calculate(inputs, arr2);        //If the array contains no operators then return our inputs as they are
    } else if (arrayOfInputs.length === 2) {
        console.log("There is one too many values/operators")
        return arr2.pop();
    } else {
        return arr2.pop();
    }
}

const operators = ['+', '-', '/', '*'];

module.exports = rpn;

// if (!operators.includes(arrayOfInputs)) {
//     return;
// }
// if (inputs.contains(!operators)) {
//     return;
// }
