let fccSentence =  "freeCodeCamp is a great place to learn web development.";
let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log("Here are some examples of the includes() method:");

let fccString = `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCampe is in the sentence.`;
let hasJavaScript = fccSentence.includes("JavaScript");
let hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`)
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`)
console.log(fccSentence);
