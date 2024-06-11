// Array to store the names of friends
const names: string[] = ["Omair", "Junaid", "Arbaz", "Haseeb"];

// Print the number of people being invited to dinner
console.log(`You are inviting ${names.length} people to dinner.`);

// Print a personalized message to each friend
names.forEach(name => {
    console.log(`Hello, ${name}! Hope you are having a great day!`);
});