let num=prompt("Enter a number");
let num1;

for (let count = 0; count < 11; count++) {
    num1=num*count
    if (num1 %5 ==0) {
        continue;
    }
    else{
        console.log(num, "X", count, "=", num1);
    }
}