var readlineSync=require('readline-sync');
var userName=prompt("What is your name?");

console.log('Welcome '+userName);
var year=prompt("What is your year of birth?");

if(isNaN(year)){
  console.log("Error: Entered value is invalid, please enter your birth year in number format(e.g: 1999)")
  
}
else{
if((year%4==0&&year%100!=0)||(year%4==0&&year%100==0&&year%400==0)){
  console.log("You were born in a leap year")
  console.log("Share this on social media")
}
else{
  console.log("You were born in a non-leap year")
}
}