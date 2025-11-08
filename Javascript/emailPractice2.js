//define the variable to find the key
const emailString = "doej25346@gmail.com";

function findKey(emailString) {
    let key = "@";
    let keyAnswer =  emailString.indexOf(key) - 1; //I had before the (key) - 1
    // let stringSlice = emailString.slice(1,keyAnswer);
    // let stringSubstring = emailString.substring(1,keyAnswer);
    let stringReplace = emailString.replace(stringSubstring, "x");


    // let stringReplace = emailString.replace(stringSlice,"x");
    let stringRepeat = stringReplace.repeat(1, keyAnswer);

// return console.log(keyAnswer);
    // return console.log(stringSlice);
    // return console.log(stringSubstring);
    // return console.log(stringReplace);
    // return console.log(stringRepeat);
}

findKey(emailString);
const test1 = prompt("What is your name?");

console.log(test1);