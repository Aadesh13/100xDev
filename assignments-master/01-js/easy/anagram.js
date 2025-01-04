/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //change both strings to lowercase
  const word1 = str1.toLowerCase();
  const word2 = str2.toLowerCase();

  //check length of both strings
  if(word1.length != word2.length) {
    return false
  }

  //declare an empty object used to store the count of each letter in the first word
  const letterCount = {}

  for(let letter of word1) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  //check the count of letter in word2
  for(let letter of word2) {
    if(!letterCount[letter]) {
      return false;
    }
    letterCount[letter]--;
  }

  return true

}

module.exports = isAnagram;
