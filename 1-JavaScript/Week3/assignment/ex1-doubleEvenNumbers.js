module.exports = doubleEvenNumbers;

function doubleEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0).map(num => num * 2);
}

