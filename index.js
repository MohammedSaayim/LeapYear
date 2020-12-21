var readlineSync=require('readline-sync');
const chalk = require('chalk');

var userName=prompt("What is your name?");

console.log(chalk.bgGreenBright('Welcome '+userName));
var year=prompt("What is your year of birth?");

if(isNaN(year)){
  console.log("Error: Entered value is invalid, please enter your birth year in number format(e.g: 1999)")
}
else{
if((year%4==0&&year%100!=0)||(year%4==0&&year%100==0&&year%400==0)){
  console.log(chalk.bgCyan("You were born in a leap year"))
  console.log(chalk.bgBlackBright("Share this on social media"))
}
else{
  console.log(chalk.bgCyan("You were born in a non-leap year"))
}
}