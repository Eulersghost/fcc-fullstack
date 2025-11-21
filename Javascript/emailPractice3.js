const str1 = "doej2babdfasldkfjal;sdkjfa;lskdjf;alskdjfla;ksdjgl;aksdjgl;kashdgl;aksdhglk;ajsdhg;lkasdhg;lasdhgl;asdhgl;asdghals;dhg@gmail.com";

function maskEmail(str1) {
   const key = '@';
   const keyFind1 = str1.indexOf(key);
   const keyFind2 = keyFind1 - 1;

//    let keyFintTotal = keyFind1 + keyFind2; 

//    slice method based on the AI solution
    const userNameSlice = str1.slice(0,keyFind2);
    const domainNameSlice = str1.slice(str1.indexOf(key));

//    for loop to iterate character 
    let emailMasked = " ";
    for (let index = 0; index < emailMasked.length; index++){
       if (index === 0 || index === emailMasked.length - 1){
        emailMasked += userNameSlice[index];
       } 
       else {
        emailMasked += "X";
       }
    }
}

console.log(maskEmail(str1));
