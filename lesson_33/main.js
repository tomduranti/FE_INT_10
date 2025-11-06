// 1) Implement a class that describes a circle. It must have the following components:

// a field that stores the radius of the circle;
// get-property that returns the radius of the circle;
// set-property that sets the radius of the circle;
// get-property that returns the diameter of the circle;
// a method that calculates the area of a circle;
// a method that calculates the length of the circle

// Demonstrate the work of properties and methods.

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() { return this.radius; }
    get getDiameter() { return this.radius * 2; }
    set setRadius(value) { this.radius = value; }
    getArea() { return Math.floor(Math.PI * (this.radius ^ 2)); }
    getCircum() { return Math.floor(Math.PI * (this.radius * 2)); }

}

// 2) Implement a class that describes a stationery marker. It must have the following components:

// a field that stores the color of the marker;
// a field that stores the amount of ink in the marker (in percent);
// an input method (accepts a string and prints the text in the corresponding color;
// the text is displayed as long as there is ink in the marker;
// one non-whitespace character is 0.5% of the ink in the marker).

// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.
class StationeryMarker {

    constructor(color) {
        this.color = color;
        this.ink = 0.4;
    }

    inputColor() {

        const userPrompt = prompt("Write something in your favorite color");
        const span = document.createElement("span");
        let text = "";
        span.style.color = this.color;

        for (const char of userPrompt) {
            if (!/\s/.test(char)) this.ink -= 0.5;
            text += char;
            if (this.ink <= 0) {
                console.log("Run out of ink!");
                break;
            }
        }

        span.appendChild(document.createTextNode(`${text} `));
        document.body.appendChild(span);
    }
}

const red = new StationeryMarker("red");
const blue = new StationeryMarker("blue");

class RefillableStationeryMarker {
    //TODO
}