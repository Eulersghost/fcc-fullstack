//1. create a function named mutation

function mutation(array){
let sentence1 = array[0].toLowerCase();
let sentence2 = array[1].toLowerCase();
for(let letter of sentence2){
    if (!sentence1.includes(letter)){
        return false;
    }
}
return true;
}


mutation (["hello", "wazzup"]);
//2. run some test string to convert them to lowercase strings 

let testString = ["helllo", "Hello"];

console.log(testString[0]);
console.log(testString[1]);

//testing the lowercase method on the strings in the array

console.log(testString[0].toLowerCase());

console.log(testString[1].toLowerCase());
