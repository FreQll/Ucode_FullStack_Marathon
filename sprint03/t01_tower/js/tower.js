class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
}

class Tower extends Building {
    constructor(floors, material, address, hasElevator, arcCapacity, height) {
        super(floors, material, address);
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    getFloorHeight() {
        return this.height / this.floors;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Has Elevator: ${this.hasElevator}`,
            `Arc Capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
}

// const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
// starkTower.hasElevator = true;
// starkTower.arcCapacity = 70;
// starkTower.height = 1130;
// console.log(starkTower.toString());