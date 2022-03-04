function add(number1, number2) {
  // THIS WILL AUTOMATICALLY CONVERT EMPTY STRINGS TO 0
  return Number(number1) + Number(number2);
}

console.info(add('', ''));
console.info(add('', 1));
console.info(add(2, ''));
console.info(add(1, 2));