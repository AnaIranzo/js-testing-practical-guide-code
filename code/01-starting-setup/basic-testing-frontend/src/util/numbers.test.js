
import {it,expect, describe} from 'vitest';
import {cleanNumbers, transformToNumber} from './numbers';

describe('transformNumber', ()=> {
    it('should transform a string number to a number of type number'), () => {
        //Arrange
        const string = '2';
        //Act
        const result = transformToNumber(string);
        //Assert
        expect(result).toBeTypeOf('number');
    };
    
    it('should transform a string number to a number of type number and be equal to that naumber transformed'), () => {
        //Arrange
        const string = '2';
        //Act
        const result = transformToNumber(string);
        //Assert
        expect(result).toBe(+input);
    };
    
    it('should return the same number if a number is provided'), () => {
        //Arrange
        const number = 1;
        //Act
        const result = transformToNumber(number);
        //Assert
        expect(result).toEqual(number);
    };
    
    it('should return NaN if no argument is passed'), () => {
        //Arrange
        //Act
        const result= () => {
            transformToNumber(); // only executed when i call the constant
        };
        //Assert
        expect(result).toBe('NaN');
    };
    
    it('should return NaN if for non-transformable values'), () => {
        //Arrange
        const string = 'hi';
        const input = {};
    
        //Act
        const result = transformToNumber(string);
        const result2 = transformToNumber(input);
        //Assert
        //expect(result).toBe('NaN');
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    };

});

describe('cleanNumbers', () => {
    it('should return an array of number values if an array of string number values is provided', ()=>{
        const numberValues = ['1','2'];
        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty string is provided', ()=> {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    })
})



