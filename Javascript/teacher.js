console.log("Hi there!");

//create a variable named botName
let botName = "teacherBot";

//use string literal for a greeting

let greeting = `My name is ${botName}.`;
console.log(greeting);

//create two more variables
let subject = "JavaScript";
let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

//practice with the length property 
let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(subject.length);
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

//practice with accessing character from a string 

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]);
console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);
console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
console.log(subject[9]);

//working some more with the character sequence with length method
// this was the final answer for step 13.   

const lastCharacter = subject[subject.length - 1];
// console.log(lastCharacter[lastCharacter.length - 1]);
// lastCharacter[lastCharacter - 1];
console.log(lastCharacter);

//substring practice
const learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the poositions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning"));
console.log(learningIsFunSentence.indexOf("learning"));
console.log(learningIsFunSentence.indexOf("fun"));
console.log("I hope you enjoyed learning today.");