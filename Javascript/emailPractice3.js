
// function maskEmail(email) {
//    const key = '@';
//    const keyFind1 = email.indexOf(key);
//    const keyFind2 = keyFind1 - 1;

// //    let keyFintTotal = keyFind1 + keyFind2; 

// //    slice method based on the AI solution
//     const userNameSlice = email.slice(0,keyFind2);
//     const domainNameSlice = email.slice(email.indexOf(key));

// //    for loop to iterate character 
//     let emailMasked = " ";
//     for (let index = 0; index < emailMasked.length; index++){
//        if (index === 0 || index === emailMasked.length - 1){
//         emailMasked += userNameSlice[index];
//        } 
//        else {
//         emailMasked += "X";
//        }
//     }
// }
// const email = "doej2babdfasldkfjal;sdkjfa;lskdjf;alskdjfla;ksdjgl;aksdjgl;kashdgl;aksdhglk;ajsdhg;lkasdhg;lasdhgl;asdhgl;asdghals;dhg@gmail.com";

// console.log(maskEmail(email));

// let email = "doej2546@gmail.com";
// let email = "freecodecamp@example.com";
let email = "user@domain.org";
// let email = "apple.pie@example.com";

function maskEmail(email){
    const keyIndex = email.indexOf('@') - 1;
    const usernameSlice = email.slice(0, keyIndex)
    const domainSlice = email.slice(keyIndex);

    let emailMasked = " ";
    for (let i = 0; i < usernameSlice.length; i++){
        if ( i === 0 || i === usernameSlice.length) {
            emailMasked += usernameSlice[i];
        } else {
            emailMasked += '*';
        }
    }

    return emailMasked + '@' + domainSlice;
}

console.log(maskEmail(email));
