
import {it,expect} from 'vitest';
import {transformToNumber} from './numbers';

it('should transform a string number to a number of type number'), () => {
    //Arrange
    const string = '2';
    //Act
    const result = transformToNumber(string);
    //Assert
    expect(result).toBeTypeOf('number');
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

it('should return NaN if a string not numerical is passed'), () => {
    //Arrange
    const string = 'hi';
    //Act
    const result = transformToNumber(string);
    //Assert
    //expect(result).toBe('NaN');
    expect(result).toBeNaN();
};

