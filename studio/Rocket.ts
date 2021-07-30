import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    // CLASS VARIABLES
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    // CONSTRUCTOR
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }


    // METHODS
    // Returns the sum of all items using each item's massKg property
    sumMass(items: Payload[]): number {
        let totalMass = 0;
        for (let i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }

    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    // Uses this.canAdd() to see if another item can be added.
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        // If false, return false
        return false;
    }

    // Uses this.canAdd() to see if another astronaut can be added.
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        } 
        return false;
    }


}