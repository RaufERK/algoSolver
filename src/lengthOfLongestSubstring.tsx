
function lengthOfLongestSubstringNEW(str: string): number {
  let result = 0;
  const length = str.length;
  // let resString: string = '';

  for (let i = 0; i < length; i++) {
    const visited: {
      [index: string]: boolean
    } = {};


    for (let j = i; j < length; j++) {
      const char = str[j];
      // console.log(i, j, ' CHAR=', str[j], ' STRING=', str.substring(j + 1, i), 'MAP=', visited);

      if (visited[char]) {
        // console.log('BREAK');

        break
      } else {
        // console.log('HERE!!!');
        visited[str[j]] = true;
        if (j - i + 1 > result) {
          result = j - i + 1;
          // resString = str.substring(i, j + 1);
          // console.log('SUMM = ', j - i, 'LONGEST===>', resString);
        }
      }
    }
  }
  // console.log('  resString ===>', resString);
  return result
};



function lengthOfLongestSubstring(str: string): number {
  const length = str.length;
  let result: number = 0;

  for (let i = 0; i < length; i++) {

    for (let j = i; j < length; j++) {
      const visited: {
        [index: string]: boolean
      } = {};
      const char = str[j]

      if (visited[char]) {
        break
      } else {
        visited[char] = true
        if (j - i + 1 > result) {
          result = j - i + 1;
        }
      }
    }
  }
  return result
};





console.log('-------->>>>');

console.log(lengthOfLongestSubstring("12345"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("pp"));
console.log(lengthOfLongestSubstring("ppww"));
console.log(lengthOfLongestSubstring("ppwwqweer"));
console.log(lengthOfLongestSubstring("abcabcbb"));
