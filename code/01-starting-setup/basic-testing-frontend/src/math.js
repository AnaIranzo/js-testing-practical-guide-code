export function add(numbers) {//numbers -> array of numbers
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
