//For loop
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
//factorial loop
var n = 6;
var factorial = 1;
while (n >= 1) {
    factorial = factorial * n;
    n--;
}
console.log("The factorial  is " + factorial);
//do while
var nu = 10;
do {
    console.log(nu);
    nu--;
} while (nu >= 0);
