function describe_city(city: string, country: string = 'Unknown Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Explicit country
describe_city('Lahore', 'Pakistan');  // Explicit country
describe_city('Paris', 'France');     // Different country
describe_city('New York');            // Default country