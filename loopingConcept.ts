//For loop
var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)

//factorial loop
var n:number = 6; 
var factorial:number = 1; 

while(n >=1) { 
   factorial = factorial * n; 
   n--; 
} 
console.log("The factorial  is "+factorial); 

//do while
var nu:number = 10;
do { 
   console.log(nu); 
   nu--; 
} while(nu>=0); 