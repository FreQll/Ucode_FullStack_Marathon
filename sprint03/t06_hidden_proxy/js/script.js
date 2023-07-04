const validator = {
    get(target, prop) {
        if (prop in target) {
            console.log("Trying to access the property \'" + prop + "\'");
            return target[prop];
        }
        else return false;
    },
    set(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                console.log("The age is not an integer");
                throw new TypeError("The age is not an integer");
            }
        }
        if (value > 200 || value < 0) {
            throw new RangeError("The age is invalid");
        }

        obj[prop] = value;
        console.log("Setting value \'" + value + "\' to \'" + prop + '\'');
        return true;
    },
};

// let person = new Proxy({}, validator);

// person.age = 100;
// // Setting value '100' to 'age'
// console.log(person.age);
// // Trying to access the property 'age'...
// // 100
// person.gender = "male";
// // Setting value 'male' to 'gender'
// person.age = 5;
// console.log(person.age);
// // Uncaught TypeError: The age is not an integer
// person.age = 300;
// // Uncaught RangeError: The age is invalid
