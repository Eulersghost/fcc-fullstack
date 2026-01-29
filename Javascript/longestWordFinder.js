// function findLongestWordLength(sentence){
//     let wordCount = sentence.split(" ");
//     let counter = 0;
//     for (const char of wordCount) {
//         char.length
//     }
// }

/*
How do you find individual words in a sentence?

You've done this before! What method breaks a string into pieces?
Hint: Think back to getWordCount() — what did you use?
Once you have all the words, how do you find the longest one?

How would you check the length of a single word? split method
How could you compare lengths to find the longest? length property
Would you need a loop? yes we're doing a loop exercise, could I make this a loop that iterates over an array
What should you track? 

Should you track the longest word itself, or just its length?
What does the function need to return?
Edge cases:

What if the sentence is empty?
What if there are extra spaces?
*/

function findLongestWordLength(sentence) {
  let words = sentence.split(" "); //.split makes whatever the string is into an array
  let longestWordCount = 0;
  for (let word of words) {
        if(word.length > longestWordCount){
            longestWordCount = word.length; 
        }
  }
  return longestWordCount;
}

// ...existing code...

// Test cases
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("Hello world")); // 5
console.log(findLongestWordLength("A")); // 1
console.log(findLongestWordLength("")); // 0
console.log(findLongestWordLength("   ")); // 0
console.log(findLongestWordLength("short longestword tiny")); // 11
console.log(findLongestWordLength("multiple   spaces between words")); // 8