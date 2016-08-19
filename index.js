
function rpn (number1, number2, operator) {
    let result;
    // let inputArr = inputs;

    if (operator === '+') {
        result = number1 + number2
    } else if (operator === '-') {
        result = number1 - number2
    } else if (operator === '/') {
        result = number1 / number2
    } else if (operator === '*') {
        result = number1 * number2
    }


    // function recursion() {
    //     let shiftThroughInputs = inputArr.shift();
    //
    // }

    return result;
}


//
// function calculate(inputs, result) {
//
//
//     if (operator === '+') {
//         result = number1 + number2
//     } else if (operator === '-') {
//         result = number1 - number2
//     } else if (operator === '/') {
//         result = number1 / number2
//     } else if (operator === '*') {
//         result = number1 * number2
//     }
//
//     return result;
// }

module.exports = rpn;

//
// const calculations = {
//
// };
//
//
// const myMethods = {
//       '+'(a) {
//           return b => a + b;
//       },
//     '-'(a, b) {
//         return a - b;
//     },
//     '/'(a, b) {
//         return a / b;
//     },
//    '*'(a, b) {
//         return a * b;
//     },
// };
//
// const myMethods = new Map([
//    ['*', mult],
// ]);
//
// myMethods.get('*');
//
// const withA = myMethods[operator](a);
// a(b) === a + b;



// const withA = myMethods[operator](a);
// a(b) === a + b;

// let calculation = (input) => {
//     let result = 0;
//
//     let arLoop = () => {
//         let inputArgs = input, values = [], i;
//         i = inputArgs.shift();
//
//         if (isFinite(inputArgs[i])) {
//             values.push(inputArgs[i])
//         } else {
//             let number1 = values.pop(), number2 = values.pop();
//
//             //Check what operator was used and apply the correct formula
//             if (inputArgs[i] === "+") {
//                 result = number1 + number2;
//             } else if (inputArgs[i] === "-") {
//                 result = number1 - number2;
//             } else if (inputArgs[i] === "*") {
//                 result = number1 * number2;
//             } else if (inputArgs[i] === "/") {
//                 result = number1 / number2;
//             }
//         } if (values.length > 1) {
//             return arLoop();
//         } else if (isNaN(result) || result === "undefined") {
//             console.log("Ohh you fucked up!")
//         } else {
//             return result;
//         }
//     }
// };
