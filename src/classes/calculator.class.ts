import { calculatorModel } from "../models/calculator.model";

export class Calculator implements calculatorModel {
  addition(input1: number, input2: number): number {
    const output = input1 + input2;
    console.log(output);
    return output;
  }
  subtraction(input1: number, input2: number): number {
    const output = input1 - input2;
    console.log(output);
    return output;
  }
  division(input1: number, input2: number): number {
    const output = input1 / input2;
    console.log(output);
    return output;
  }
  multiplication(input1: number, input2: number): number {
    const output = input1 * input2;
    console.log(output);
    return output;
  }
}
