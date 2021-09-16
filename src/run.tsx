// function longestPalindromeOLD(str: string): string {
//   const length = str.length;
//   const resMap: { [index: string]: { p: boolean, l: number } } = {};

//   const stringIsPalindrome = (str: string): boolean => {
//     const length = str.length;
//     for (let i = 0; i < length; i++) {
//       if (str[i] !== str[length - 1 - i]) {
//         return false
//       }
//     }
//     return true
//   }

//   for (let i = 0; i < length; i++) {
//     for (let j = i; j < length; j++) {
//       if (str[i] === str[j]) {
//         const myString = str.slice(i, j + 1);
//         if (!resMap[myString]) {
//           resMap[myString] = { p: stringIsPalindrome(myString), l: myString.length }
//         }
//       }
//     }
//   }
//   console.log(resMap);

//   const temp = Object.entries(resMap).filter(it => it[1].p).sort((a, b) => b[1].l - a[1].l)
//   return temp[0][0]
// }

// console.clear();
// console.log('START============>');

// // console.log('TOT res => ', longestPalindromeOLD('bb'));
// // console.log('TOT res => ', longestPalindromeOLD('ac'));
// // console.log('TOT res => ', longestPalindromeOLD('forgeeksskeegfor'));
// // console.log('TOT res => ', longestPalindrome('iptmykvjanwiihepqhzupneckpzomgvzmyoybzfynybpfybngttozprjbupciuinpzryritfmyxyppxigitnemanreexcpwscvcwddnfjswgprabdggbgcillisyoskdodzlpbltefiz'));

// function longestPalindrome(str: string): string {
//   const length = str.length;
//   let start: number = 0;
//   let end: number = 0;

//   const expandFromMiddle = (left: number, right: number): number => {
//     while (left >= 0 && right < length && str[left] === str[right]) {
//       left--
//       right++
//     }
//     return right - left - 1
//   }

//   for (let i = 0; i < length; i++) {

//     const lenODD = expandFromMiddle(i, i);
//     const lenEVEN = expandFromMiddle(i, i + 1);
//     const len = Math.max(lenODD, lenEVEN);

//     if (len > end - start + 1) {
//       const half = Math.floor(len / 2);
//       start = lenODD > lenEVEN ? i - half : i - half + 1;
//       end = i + half;
//       console.log('inx:', i, "start:", start, ' end = ', end, ' END-START=', end - start + 1, 'RES=',);
//     }
//   }
//   return str.slice(start, end + 1)
// }

// console.log('longestPalindrome =>', longestPalindrome('babad'));
