/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let myname: string = "Daniyal";

console.log(myname == "Daniyal")
console.log(myname !== "daniyal")

let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True

console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana'); // True

console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple'); // False

console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != 'apple'); // False

console.log("Is fruit === 'apple'? I predict True.");
console.log(fruit === 'apple'); // True

let number = 10;

console.log("Is number == 10? I predict True.");
console.log(number == 10); // True

console.log("Is number != 10? I predict False.");
console.log(number != 10); // False

console.log("Is number > 5? I predict True.");
console.log(number > 5); // True

console.log("Is number < 5? I predict False.");
console.log(number < 5); // False

console.log("Is number >= 10? I predict True.");
console.log(number >= 10); // True

console.log("Is number <= 10? I predict True.");
console.log(number <= 10); // True

console.log("Is number > 10? I predict False.");
console.log(number > 10); // False

console.log("Is number < 10? I predict False.");
console.log(number < 10); // False