import { Payload } from './Payload';

export class Astronaut implements Payload {
    // CLASS VARIABLES
    massKg: number;
    name: string;


    // CONSTRUCTOR
    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}