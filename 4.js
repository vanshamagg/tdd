function add(numbers) {
  const delimiter = numbers[0];
  return numbers.replace(new RegExp(`[\\n${ delimiter }]+`, 'g'), ',')
    .split(',')
    .reduce((acc, num) => acc + Number(num), 0);
}

console.info(add(';\n1;2'));
console.info(add(',1\n2,3'));
