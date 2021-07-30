import { Payload } from './Payload';

export class Cargo implements Payload {
    // CLASS VARIABLES
    massKg: number;
    material: string;

    // CONSTRUCTOR
    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
 }