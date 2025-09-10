let pin= 1234;
let userPin;

do {
    userPin=prompt("Please enter your PIN");
    if (userPin != pin) {
        console.log("Incorrect PIN, Try Again")
    }
    
} while (userPin != pin);
console.log("PIN Verified")