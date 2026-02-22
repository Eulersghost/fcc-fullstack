/* Pseudocode:
1. define function fearNotLetter
    1a. function accepts a range of letters in alphabetical order which can have a missing letter.
2. function finds the missing letter in the letter range passed in the parameters and return it.
3. if all the passed letter range are present function returns "undefined".

function fearNotLetter(range){
    for (i = 0; i <= range.length -2; i++) {
    let range_result1 = range.charCodeAt(i);
    let range_result2 = range.charCodeAt(i+1);
        if range_result1 > range_result2
    Compare the character code of str[i] and stri[i+1] *** side note how do I do that?
    If the difference is greater than 1, what does that mean?
        what should you return?
    if range.length()
    }
    If you finish the loop and found no missing letter,  what should you return?
}
    
*/
