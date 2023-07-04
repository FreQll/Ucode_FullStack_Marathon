class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set age(newAge) {
        newAge = Number(newAge);
        if (newAge >= 1 && newAge < 100) this._age = newAge;
    }

    set salary(newSalary) {
        newSalary = Number(newSalary);
        if (newSalary >= 100 && newSalary < 10000) this._salary = newSalary;
    }

    toObject() {
        return this;
    }
}

// worker = new HardWorker;
// worker.name= 'Bruce';
// console.log(worker.name); // Bruce
// worker.age = 50;
// worker.salary= 1500;
// console.log(worker.toObject()); // Object { name: "Bruce", age: 50, salary: 1500 }
// worker.name= 'Linda';
// worker.age = 140;
// console.log(worker.toObject()); // Object { name: "Linda", age: 50, salary: 1500 }