/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let i: number = 0;
  let j: number = s.length - 1;

  while (i < j) {
    let temp: string = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
}
