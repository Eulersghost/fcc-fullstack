// let result = '';
let year = '2024';

function isLeapYear(year) {
    if (year/4 && year != % 4) {
        return console.log (`${year} is a leap year.`);
    } else if (year/400 && % 400){
        return console.log (`${year} is a leap year.`);
    } else if (year %= 100) {
        return console.log (`${year} is not a leap year.`);
    }
    else {
        return console.log ("Please try your answer again");
    }
}
// let result = year;

console.log(isLeapYear());

// need to use the modulo operator