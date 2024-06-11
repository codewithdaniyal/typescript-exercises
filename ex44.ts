// Function to accept a variable number of sandwich items and print a summary
function make_sandwich(...items: string[]): void {
    console.log(`Sandwich with the following items: ${items.join(', ')}`);
}

// Call the function three times with different numbers of arguments
make_sandwich('Lettuce', 'Tomato', 'Chicken');
make_sandwich('Ham', 'Cheese');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
