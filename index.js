var readlineSync=require('readline-sync');
var userName=prompt("What is your name?");

console.log('Welcome '+userName);
var year=prompt("What is your year of birth?");

if((year%4==0&&year%100!=0)||(year%4==0&&year%100==0&&year%400==0)){
  console.log("You were born in a leap year")
  console.log("Share this on social media")
}
else{
  console.log("You were born in a non-leap year")
}
