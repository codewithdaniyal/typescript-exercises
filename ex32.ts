// List of current usernames
const current_users: string[] = ["daniyal", "omair", "juanid", "ali", "hassan"];

// List of new usernames to check
const new_users: string[] = ["umar", "usman", "arbaz", "muneeb", "safeer"];

// Function to check for unique usernames
function checkUsernames(currentUsers: string[], newUsers: string[]): void {
    newUsers.forEach(newUser => {
        // Convert both currentUsers and newUser to lowercase to ensure case-insensitive comparison
        const lowerCaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
        const lowerCaseNewUser = newUser.toLowerCase();

        if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
            console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
        } else {
            console.log(`The username "${newUser}" is available.`);
        }
    });
}

// Call the function to check usernames
checkUsernames(current_users, new_users);