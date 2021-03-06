/*
*Question and brief Description

Problem Statement
A string is called a k-string if it can be represented as k concatenated copies of some string. For example, the string "aabaabaabaab" is at the same time a 1-string, a 2-string and a 4-string, but it is not a 3-string, a 5-string, or a 6-string and so on. Obviously any string is a 1-string.

You are given a string s, consisting of lowercase English letters and a positive integer k. Your task is to reorder the letters in the string s in such a way that the resulting string is a k-string.

Input
The first input line contains integer k (1 ≤ k ≤ 1000). The second line contains s, all characters in s are lowercase English letters. The string length s satisfies the inequality 1 ≤ |s| ≤ 1000, where |s| is the length of string s.

Output
Rearrange the letters in string s in such a way that the result is a k-string. Print the result on a single output line. If there are multiple solutions, print any of them.

If the solution doesn't exist, print "-1" (without quotes).


Examples
Input
2
aazz
Output
azaz
Input
3
abcabcabz
Output
-1
*/
function kstringConverter(str, key) {
    const strObj = str.split("").reduce((a, b) => {
      if (!a[b]) {
        a[b] = 1;
      } else {
        a[b] += 1;
      }
      return a;
    }, {});
    const strObjArr = Object.entries(strObj);
    const countArr = Object.values(strObj);
  
    const nodDivArr = countArr.filter(a => a % key !== 0);
  
    if (key === 1) {
      return str;
    } else if (nodDivArr.length === 0) {
      let finalStr = "";
      for (let j = 0; j < key; j += 1) {
        strObjArr.forEach(st => {
          const loopCount = st[1] / key;
          for (let i = 0; i < loopCount; i += 1) {
            finalStr += st[0];
          }
        });
      }
      return finalStr;
    } else {
      return -1;
    }
  }
  console.log(kstringConverter("abbccad", 4));