import { expect } from 'chai';
import {fizzBuzz} from '../src/main';

describe('Main', () => {
  it('should return FIZZ when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal("Fizz");
  });
  it('should return FIZZ when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal("Buzz");
  });

  it('should return FIZZBUZZ when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal("FizzBuzz");
  });

  it('should return number when not is multiple of 3 and 5', () => {
    expect(fizzBuzz(13)).to.be.equal(13);
  });
});
