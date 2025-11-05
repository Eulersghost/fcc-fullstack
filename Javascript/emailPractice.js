const str1 = "doej2babdfasldkfjal;sdkjfa;lskdjf;alskdjfla;ksdjgl;aksdjgl;kashdgl;aksdhglk;ajsdhg;lkasdhg;lasdhgl;asdhgl;asdghals;dhg@gmail.com";

// console.log(str1.endsWith("best!"));
// Expected output: true
    let key = "@";
    let keyFind1 = str1.indexOf(key) - 1;
    let keyFind2 = str1.indexOf(1);
    var keyFindTotal = keyFind1 + keyFind2;
function keyFind(str1) {
    let key = "@";
    let keyFind1 = str1.indexOf(key) - 1;
    let keyFind2 = str1.indexOf(1);
    var keyFindTotal = keyFind1 + keyFind2;
    // // let keySlice = str1.slice(1,keyFind);
    // let keyReplace = str1.replace(keyFind,"*");
    // // let keyRepeat = 
    // // let keyRepeat = str1.repeat(keyFind + keyReplace);
    return console.log(keyFindTotal);
}

function wordSwap(str1) {
    let wordKey = keyFind(str1);
    let wordStart = "X".repeat(1);
    let wordEnd = "X".repeat(wordKey);
    console.log(wordStart + wordEnd);
    
}
keyFind(str1);
wordSwap(str1);