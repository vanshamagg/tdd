function add(numbers) {
  const delimiter = numbers[0];
  const nums = numbers.replace(new RegExp(`[\\n${delimiter}]+`, 'g'), ',')
    .split(',')
    .map(num => Number(num));

  if (nums.some(num => num < 0))
    throw new Error(`negatives not allowed { ${nums.filter(num => num < 0)} }`);

  return nums.reduce((acc, num) => acc + Number(num), 0);
}

console.info(add(';\n1;2'));
console.info(add(';\n1;-2'));
