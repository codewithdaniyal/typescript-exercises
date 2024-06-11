// Function that builds a car object
function buildCar(manufacturer: string, model: string, options: Record<string, any>): Record<string, any> {
    // Create the base car object
    let car = { manufacturer, model };

    // Add all the additional options to the car object
    return { ...car, ...options };
}

// Calling the function with required parameters and additional options
const myCar = buildCar('Toyota', 'Corolla', { color: 'red', hasSunroof: true, year: 2022 });

// Print the object to check if all information is stored correctly
console.log(myCar);