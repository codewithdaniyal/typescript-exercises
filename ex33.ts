// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to get the ordinal ending for a given number
function getOrdinalEnding(num: number): string {
    if (num === 1) {
        return "st";
    } else if (num === 2) {
        return "nd";
    } else if (num === 3) {
        return "rd";
    } else {
        return "th";
    }
}

// Loop through the array and print the proper ordinal ending for each number
numbers.forEach(num => {
    console.log(`${num}${getOrdinalEnding(num)}`);
});
