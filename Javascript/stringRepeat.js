/* Working on making a function that repeats a given string a specified number of times.

1. Create a function named repeatStringNumTimes
2. Function takes a string and and integer as parameters
3. Function repeats the string based on the second number parameter
4. If the number is less than or equal to zero the function returns and empty string.
*/

/* Pseudocode

1. create function repeatStringNumTimes with words and number parameter
    create variable emptyString = "";
    for (let w = 0; w < number; w++)
{   emptyString += words;
    if (number <= 0){
        emptyString = "";
    }
    }
 return emptyString;   
*/

function repeatStringNumTimes(words, number){
    let emptyString = "";
    if (number <= 0){
        return emptyString;
    }
    for (let w = 0; w < number; w++){
        emptyString += words;
    }
    return emptyString;
}