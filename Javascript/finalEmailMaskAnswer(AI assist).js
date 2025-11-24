let email = "user@domain.org"

function maskEmail(email) {
    const keyIndex = email.indexOf('@');
    const usernameSlice = email.slice(0, keyIndex)
    const domainSlice = email.slice(keyIndex+1);

    let emailMasked = '';
    for (let i = 0; i < usernameSlice.length; i++){
        if ( i === 0 || i === usernameSlice.length-1) {
            emailMasked += usernameSlice[i];
        } else {
            emailMasked += '*';
        }
    }

    return emailMasked +'@'+ domainSlice;
}



console.log(maskEmail(email));