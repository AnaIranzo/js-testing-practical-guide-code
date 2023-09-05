export function add(numbers) {//numbers -> array of numbers
  let sum = 0;

  for (const number of numbers) {
    sum += +number; //force conversion to number
  }
  return sum;
}
