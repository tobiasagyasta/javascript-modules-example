export function average(numbers) {
  if (!numbers.length) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

export function max(numbers) {
  return numbers.reduce((highest, n) => (n > highest ? n : highest), -Infinity);
}

export function min(numbers) {
  return numbers.reduce((lowest, n) => (n < lowest ? n : lowest), Infinity);
}
