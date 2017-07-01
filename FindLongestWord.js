// Find the Longest Word in a String 
// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  // variable to store the result
  var longestWord = 0;
  // convert the string into an array of words
  var strArray = str.split(" ");
  
  for(var i = 0; i < strArray.length; i++ ) {
    // if the length of the word is greater than the value of longestWord ...
    if(strArray[i].length > longestWord) {
      // ...store the result into the longestWord variable
      longestWord = strArray[i].length;
    }
  }
  // return the longestWord
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
