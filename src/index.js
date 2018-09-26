
module.exports = function solveEquation(equation) {
  let regexp = /(-?\d+) \* x\^2 ([+-] \d+) \* x ([+-] \d+)/;
  let values = equation.match(regexp);
  let a = values[1];
  let b = values[2].replace(/ /, '');
  let c = values[3].replace(/ /, '');
  let D = b * b - 4 * a * c;
  let x1 = (- b + Math.round(Math.sqrt(D))) / 2 / a;
  let x2 = (- b - Math.round(Math.sqrt(D))) / 2 / a;

  return [x1, x2].sort((x1, x2) => x1 - x2);
}