function longestPalindrome(str: string): string {
  const length = str.length;
  let start: number = 0;
  let end: number = 0;

  const expandFromMiddle = (left: number, right: number): number => {
    while (left >= 0 && right < length && str[left] === str[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  for (let i = 0; i < length; i++) {

    const lenODD = expandFromMiddle(i, i);
    const lenEVEN = expandFromMiddle(i, i + 1);
    const len = Math.max(lenODD, lenEVEN);

    if (len > end - start + 1) {
      const half = Math.floor(len / 2);
      start = lenODD > lenEVEN ? i - half : i - half + 1;
      end = i + half;
      console.log('inx:', i, "start:", start, ' end = ', end, ' END-START=', end - start + 1, 'RES=',);
    }
  }
  return str.slice(start, end + 1)
}

console.log('longestPalindrome =>', longestPalindrome('babad'));
