// Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
const Car = {
    manufacturer: "Toyota",
    model: "AYGO",
    year_of_release: "2019",
    average_speed: "80",
    printProp() {
        console.log(`Manufacturer: ${this.manufacturer},\n Model: ${this.model},\n Year of release: ${this.year_of_release},\n Average speed:${this.average_speed}`);
    },
    countTime(distance) {
        // number checking
        while (!(Number.isInteger(distance)) || distance === "" || distance <= 0) { distance = +prompt("Please input a correct integer"); }
        let drivingTime = distance / this.average_speed;
        console.log(`You can cover ${distance}km in ${Math.floor(drivingTime)} hour/s, with ${Math.floor(drivingTime / 4)} hour/s of break`);
    }
}

// 2. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 
// A method for displaying the time. 
// A method for changing the time by a given amount of seconds. 
// A method for changing the time by a given amount of minutes.  
// A method for changing the time by a given amount of hours. 
 