// create a function with an email argument
let email;

function maskEmail(email) {
    if (email.indexOf(0) <= email.indexOf(-1))
    {
        return email.repeat("*", -1);
    }
    else
    {
        return console.log("Try again!");
    }
}

maskEmail("doej2546@gmail.com");
