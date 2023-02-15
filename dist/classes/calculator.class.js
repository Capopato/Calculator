"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    addition(input1, input2) {
        const output = input1 + input2;
        console.log(output);
        return output;
    }
    subtraction(input1, input2) {
        const output = input1 - input2;
        console.log(output);
        return output;
    }
    division(input1, input2) {
        const output = input1 / input2;
        console.log(output);
        return output;
    }
    multiplication(input1, input2) {
        const output = input1 * input2;
        console.log(output);
        return output;
    }
}
exports.Calculator = Calculator;
