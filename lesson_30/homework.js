// Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.
const car = {
    manufacturer: "Toyota",
    model: "AYGO",
    year_of_release: "2019",
    average_speed: "80",
    printProp() {
        console.log(`Manufacturer: ${this.manufacturer},\n Model: ${this.model},\n Year of release: ${this.year_of_release},\n Average speed: ${this.average_speed}`);
    },
    countTime(distance) {
        // number checking
        while (!Boolean(Number(distance)) || distance < 0) { distance = prompt("Please input a correct integer"); }
        let drivingTime = distance / this.average_speed;
        console.log(`You can cover ${distance}km in ${Math.floor(drivingTime)} hour/s, with ${Math.floor(drivingTime / 4)} hour/s of break`);
    }
}

// 2. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 
// A method for displaying the time. 
// A method for changing the time by a given amount of seconds. 
// A method for changing the time by a given amount of minutes.  
// A method for changing the time by a given amount of hours. 
const Time = {
    second: 0,
    minute: 0,
    hour: 0,
    addSecond(userSecond) {
        this.second += userSecond;
        // carry over
        if (this.second >= 60) {
            this.minute += Math.floor(this.second / 60);
            this.second %= 60;
        }
        if (this.minute >= 60) {
            this.hour += Math.floor(this.minute / 60);
            this.minute %= 60;
        }
        if (this.hour >= 24) { this.hour %= 24; }
    },
    addMinute(userMinute) {
        this.minute += userMinute;
        // carry over
        if (this.minute >= 60) {
            this.hour += Math.floor(this.minute / 60);
            this.minute %= 60;
        };
        if (this.hour >= 24) { this.hour %= 24; };
    },
    addHour(userHour) {
        this.hour += userHour;
        // carry over
        if (this.hour >= 24) { this.hour %= 24; };
    },
    getTime() {
        // add leading 0 to single digits
        const formattedHour = () => { return this.hour < 10 ? String(this.hour).padStart(2, '0') : this.hour };
        const formattedMinute = () => { return this.minute < 10 ? String(this.minute).padStart(2, '0') : this.minute };
        const formattedSecond = () => { return this.second < 10 ? String(this.second).padStart(2, '0') : this.second };
        console.log(`${formattedHour(this.hour)}:${formattedMinute(this.minute)}:${formattedSecond(this.second)}`);
    }
}