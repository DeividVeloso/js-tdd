/*
ES6
*/
const fizzBuzz = n1 => {
  if (n1 === 0) return n1;
  let result = '';
  if (n1 % 3 === 0) {
    result += 'Fizz';
  }
  if (n1 % 5 === 0) {
    result += 'Buzz';
  }
  return result === '' ? n1 : result;
};

export { fizzBuzz };
