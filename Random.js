
let rpn = (input) => {
    let inputArgs = input.split("");

    let result = calculation(inputArgs);

    return result.pop();
};

let calculation = (input) => {
    let inputArgs = input, resultArr = [], i;

    let arLoop = () => {
        i = inputArgs.shift();
        if (isFinite(inputArgs[i])) {
            resultArr.push(inputArgs[i])
        } else {
            let number1 = resultArr.pop(), number2 = resultArr.pop();

            //Check what operator was used and apply the correct formula
            if (inputArgs[i] === "+") {
                resultArr.push(parseInt(number1) + parseInt(number2));
            } else if (inputArgs[i] === "-") {
                resultArr.push(parseInt(number1) - parseInt(number2));
            } else if (inputArgs[i] === "*") {
                resultArr.push(parseInt(number1) * parseInt(number2));
            } else if (inputArgs[i] === "/") {
                resultArr.push(parseInt(number1) / parseInt(number2));
            }
        }
        if (resultArr.length > 1) {
            return arLoop();
        }
        return resultArr;
    }
};
