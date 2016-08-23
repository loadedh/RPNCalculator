const add = a => b => a + b;
const minus = a => b => a - b;
const divide = a => b => a / b;
const multiply = a => b => a * b;

const operatorMap = new Map([
  ['+', add],
  ['-', minus],
  ['/', divide],
  ['*', multiply],
]);

const calculate = ([ item, ...rest ], stack = []) => {
  if (!item) {
    if (stack.length === 1) {
      return stack[0];
    } else {
      return (...args) => calculate(stack.concat(args));
    }
  }

  if (Number.isFinite(item)) {
    return calculate(rest, stack.concat(item));
  }

  const operatorFunc = operatorMap.get(item);
  if (operatorFunc) {
    const _stack = stack.slice(0);
    const num1 = _stack.pop() || 0;
    const num2 = _stack.pop() || 0;

    return calculate(rest, _stack.concat(operatorFunc(num2)(num1)));
  }

  throw new Error(`unknown item: ${item}`);
};

module.exports = (...args) => calculate(args);
