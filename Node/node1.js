// const character = "yoda";

// console.log(character);

// console.log(global);

const int = setInterval(() => {
    console.log("this is the interval");
    clearInterval(int);
}, 1000);

setTimeout(() => {
    console.log("This is the timeout method.");
}, 3000);

console.log(__dirname);
console.log(__filename);