function add(...numbers) {
  return numbers.reduce((acc, num) => acc + Number(num), 0);
}


console.info(add('', ''));
console.info(add('', '', 1));
console.info(add('', '', 1, 4));
console.info(add('', '', 1, 4, '', '', 1, 4, '', '', 1, 4, '', '', 1, 4));
