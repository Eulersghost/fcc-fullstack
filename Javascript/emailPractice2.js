//define the variable to find the key
const emailString = "doej25346@gmail.com";

function findKey(emailString) {
    let key = "@";
    let keyAnswer =  emailString.indexOf(key) - 1; 
    let stringSlice = emailString.slice(1,keyAnswer);
    let stringReplace = emailString.

// return console.log(stringSlice);
    return console.log(stringReplace);
}

findKey(emailString);

// // simple slice function
// function sliceString(){
//     let stringSlice = emailString.slice(0,findKey);
//     return console.log(stringSlice);
// }
