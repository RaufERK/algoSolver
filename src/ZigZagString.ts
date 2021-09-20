function convert(s: string, numRows: number): string {
  if (numRows <= 1) return s
  const bigArray = new Array<Array<string>>()
  const length = s.length;

  for (let index = 0; index < numRows; index++) {
    bigArray[index] = new Array<string>()
  }

  let pointer = 0;
  let row = 0;
  let left = 0;
  let acc: 1 | -1 = 1;

  while (pointer < length) {
    bigArray[row][left] = s[pointer++]

    row = row + acc;
    if (row > numRows - 1) {
      acc = -1
      row -= 2;
    }

    if (acc < 0) {
      left++
    }

    if (row === 0) {
      acc = 1
    }
  }

  for (let index = 0; index < numRows; index++) {
    console.log(index, bigArray[index].join(''));
  }

  return bigArray.map(row => row.filter(ch => ch).join('')).join('')
};

console.log('RES===>', convert("PAYPALISHIRING", 3));
console.log('RES===>', convert("AB", 1));
console.log('RES===>', convert("AweqweqeB", 0));

