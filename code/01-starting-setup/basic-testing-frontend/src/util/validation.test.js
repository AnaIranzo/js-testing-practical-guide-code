import {it,expect, describe} from 'vitest';
import {validateStringNotEmpty,validateNumber} from './validation';

describe('validateStringNotEmpty()', () => {
    it('should throw invalid input - must not be empty if empty string is provided', () => {
        //Arrange
        const input = '';
        const resultFn = () => {
            validateStringNotEmpty(input); // only executed when i call the constant
        };
        expect(resultFn).toThrow(/must not be empty/); //expect(resultFn).toThrow()
    });
    
    it('should throw cannot read properties os undefined (reading trim) if empty input is provided', () => {
        //Arrange
        ;
        const resultFn = () => {
            validateStringNotEmpty(); // only executed when i call the constant
        };
        expect(resultFn).toThrow(/Cannot read properties of undefined/);
    });
    
    it('should throw value.trim is not a function at validateStringNotEmpty  if  no string input is provided', () => {
        //Arrange
        const number = 2;
        const inputBool = true;
        const obj = {};
    
        const resultFn = () => {
            validateStringNotEmpty(number); // only executed when i call the constant
        };
        const resultFn2 = () => {
            validateStringNotEmpty(inputBool); // only executed when i call the constant
        };
        const resultFn3 = () => {
            validateStringNotEmpty(obj); // only executed when i call the constant
        };
    
        expect(resultFn).toThrow(/value.trim is not a function/);
        expect(resultFn2).toThrow(/value.trim is not a function/);
        expect(resultFn3).toThrow(/value.trim is not a function/);
    });
    
    
    it('should yield undefined if an string is provided', () =>{
        //Arrange
        const input = '1';
        //Act
        const result = validateStringNotEmpty(input)
        //Assert
        
        expect(result).toBe(undefined); // expect(validationFn).not.toThrow();
    
    });
    
    
});


describe('validateNumber()', ()=>{
it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
});

it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
});

it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
});

it('should not throw an error, if a number is provided', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
});
})
