// sentence analyzer will count the number of words, vowels, consonants and punctuation marks.  

//create function first
// vowels

function getVowelCount(sentence){
    let count = 0;
    let find_vowels = "aeiouyAEIOUY";
    for (let char of sentence){
        if (find_vowels.indexOf((char)) != -1){
            count ++;
        }
    }
    return count;
}

// consonants
function getConsonantCount(sentence){
    // let large_letters = "BCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;
    let find_consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    for (let char of sentence){
        if (find_consonants.indexOf((char)) != -1){
            count++;
        }
    }
    return count;
}

//punctuation
function getPunctuationCount(sentence){
    let count = 0;
    let find_punctuation = ".,!?;:'\"|-()[]{}&^%$#@";
    for (let char of sentence){
        if (find_punctuation.indexOf((char)) != -1){
            count++
        }
    }
    return count;
}

//words
function getWordCount(sentence){
let words = sentence.trim().split(" ").filter(word => word != "");
return words.length;
}

/* The answer that they use is as follows

function getWordCount(sentence){
if (sentence.trim() === ""){
    return 0;
    }
    const words = sentence.trim().split(' ');
    let count = 0;

    for (const word of words){
    if (word !== ''){
    count++;
    }
    }
    return count;
    }
*/
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

// tests 

// console.log(getVowelCount("Hello World!")); // should return 3
// console.log(getVowelCount("Apples are tasty fruits.")); // should return 8
// console.log(getVowelCount("JavaScript is fun.")); // should return 5

//tests for consontants 
console.log(getConsonantCount("Hello")); // should return 3
console.log(getConsonantCount("Coding is fun"));
