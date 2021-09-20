function convert2(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const result = new Array<string>(numRows).fill('');

  let row: number = 0;
  let down: boolean = true;

  for (let i = 0; i < s.length; i++) {
    result[row] += s[i];

    if (row === numRows - 1) {
      down = false;
    } else if (row === 0) {
      down = true;
    }

    down ? row++ : row--;
  }

  return result.join('');
}

console.log('RES===>', convert2('PAYPALISHIRING', 3), '<=RES');
console.log('RES===>', convert2('AB', 1));
