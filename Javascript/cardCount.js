//1. define let variable for count
let count = 0;

// 2. build function with switch statement

function cc(card) {
        // setup the switch statement
        for (let turn = 0; turn <= 100; turn++) {
            // it was a good start need to impliment a control mechanism some more.
            switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                console.log(count, "Bet");
            break;
            case 10:
            case "K":
            case "Q":
            case "J":
            case "A":
                count--;
                console.log(count, "Hold");
            break;
            default:
                console.log("Please try again!");
                break;
        }  
        }
    
}
cc("A");
cc(6);