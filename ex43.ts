// Array of magician names
const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to return a new array with "the Great" added to each magician's name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Create a new array with the modified names
const great_magicians = make_great([...magicians]);

// Show the original list
console.log('Original Magicians:');
show_magicians(magicians);

// Show the modified list
console.log('\nGreat Magicians:');
show_magicians(great_magicians);
