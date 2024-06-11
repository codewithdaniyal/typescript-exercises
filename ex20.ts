// Step 1: Create an array to store city names
let cities: string[] = ["Karachi", "Hyderabad", "Lahore", "Peshawar", "Abbottabad"];

// Step 2: Function to add a city to the list
function addCity(city: string) {
    cities.push(city);
}

// Step 3: Function to display the list of cities
function displayCities() {
    console.log("List of Cities:");
    cities.forEach((city, index) => {
        console.log(`${index + 1}. ${city}`);
    });
}

// Add a few more cities to the list
addCity("Swat");
addCity("Murree");

// Display the list of cities
displayCities();
