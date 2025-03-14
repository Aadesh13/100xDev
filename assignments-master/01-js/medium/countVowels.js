/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelCount = 0;
    const letter = str.toLowerCase().split("")
    let vowels = ["a","e","i","o","u"]

    letter.forEach((ltr) => {
      vowels.forEach((vowel) => {
        if(vowel === ltr) {
          vowelCount += 1
        }
      });
    });

    return vowelCount
}

module.exports = countVowels;