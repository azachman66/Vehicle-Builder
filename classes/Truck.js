// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Truck extends Vehicle {
    
    constructor(type, vin, color, make, model, year, weight, topSpeed, towingCapacity, wheelie, wheels) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Truck class
        this.type = 'Truck';
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        this.wheelie = false;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    tow(vehicle) {
        get: (vehicle.make);
        get: (vehicle.model);
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Vehicle ${vehicle.make} ${vehicle.model} is being towed.`);
        }
        else {
            console.log(`Vehicle ${vehicle.make} ${vehicle.model} is too heavy to be towed!`);
        }
    }
    
    printDetails() {
        // Call the printDetails method of the parent class, Vehicle
        super.printDetails();
        // Print details of the Truck class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        // Print details of the wheels
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
}
// Export the Truck class as the default export
export default Truck;
