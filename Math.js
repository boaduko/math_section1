#!/usr/bin/env node


var operator = process.argv[2];
var number1 =  parseInt(process.argv[3]);
var number2 =  parseInt(process.argv[4]);



console.log( operator = "Add:" );
console.log(number1 + number2);
console.log(operator = "Subtract: " );
console.log( number1 - number2);
console.log(operator = "Multiply: ");
console.log(number1 * number2);

if (number2 = 0) 
{
 console.log(" Dude, you can't divide by zero! ");
}
 else 
console.log( operator = "Divide: ");
console.log(number1 / number2);
