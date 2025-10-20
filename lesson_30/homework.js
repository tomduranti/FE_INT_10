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
const Time = {
    second: 0,
    minute: 0,
    hour: 0,
    // getCurrentTime() {
    //     const d = new Date();
    //     this.hour = d.getHours();
    //     this.minute = d.getMinutes();
    //     this.second = d.getSeconds();
    //     console.log(`${this.hour}:${this.minute}:${this.second}`) //22:33:24
    // },
    addSecond() {
        const userSecond = +prompt("Add second(s)")
        this.second += userSecond;
        if (this.second >= 60) {
            let carrySecond = this.second % 60;
            this.minute++;
            this.second = carrySecond;
        }
        if (this.minute === 60) {
            this.minute = 0;
            this.hour++;
        }
    },
    addMinute() {
        const userMinute = +prompt("Add minute(s)")
        this.minute += userMinute;
        if (this.minute >= 60) {
            let carryMinute = this.minute % 60;
            this.hour++;
            this.minute = carryMinute;
        }
        if (this.hour === 24) {
            this.hour = 0;
        }
    },
    addHour() {
        const userHour = +prompt("Add hour(s)")
        this.hour += userHour;
        if (this.hour >= 24) {
            let carryHour = this.hour % 24;
            this.hour = carryHour;
        }
    },
    getTime() { console.log(`${this.hour}:${this.minute}:${this.second}`); }
}

Time.hour = 23;
Time.minute = 59;
Time.second = 59;
Time.addSecond();
Time.addMinute();
Time.addHour();
Time.getTime();