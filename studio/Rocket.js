"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    // CONSTRUCTOR
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // METHODS
    // Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    };
    // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    };
    // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    // Uses this.canAdd() to see if another item can be added.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        // If false, return false
        return false;
    };
    // Uses this.canAdd() to see if another astronaut can be added.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
