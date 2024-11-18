import { fizzBuzz, shouldFizz, shouldBuzz } from '../src/index';

describe('fizzBuzz function', () => {
    it('should print Fizz for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should print Buzz for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should print FizzBuzz for multiples of 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should print the number for non-multiples of 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
});

describe('shouldFizz and shouldBuzz functions', () => {
    it('shouldFizz returns true for multiples of 3', () => {
        expect(shouldFizz(3)).toBeTruthy();
    });

    it('shouldBuzz returns true for multiples of 5', () => {
        expect(shouldBuzz(5)).toBeTruthy();
    });
}); 