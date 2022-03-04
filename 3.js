function add(numbers) {
  return numbers.replace(new RegExp('[\\n,]+', 'g'), ',')
  .split(',')
  .reduce((acc, num)=> acc + Number(num), 0)
}

console.info(add('1\n2,3'));
console.info(add('1\n2,3\n4\n5\n6,7'));
