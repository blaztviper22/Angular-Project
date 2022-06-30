let isOdd = (number) => {
  return number % 2 != 0;
}

let filter = (numeros, fn) => {
  let results = [];
  for (const number of numeros) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));