import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  //Smoke tests
  describe('Smoke tests', () => {
       it('should exist the method sum', () => {
      expect(sum).to.exist;
      //expect(sum).to.be.a.function;
    });
    it('should exist the method sub', () => {
      expect(sub).to.exist;
      //expect(sum).to.be.a.function;
    });
    it('should exist the method mult', () => {
      expect(mult).to.exist;
      //expect(sum).to.be.a.function;
    });
    it('should exist the method div', () => {
      expect(div).to.exist;
      //expect(sum).to.be.a.function;
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('Sub', () => {
    it('should return 0 when sub(2,2)', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
  });
  describe('Mult', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
  describe('div', () => {
    it('should return 1 when sum(2,2)', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
  });
});
