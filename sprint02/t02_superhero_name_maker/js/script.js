const firstRegex = /^[a-zA-Z]{1,20}$/;
const secondRegex = new RegExp("^(male|female|)$", "i");
const thirdRegex = /^[1-9]\d{1,4}$/;

let animal_name = prompt('Animal name of hero:');

if (!firstRegex.test(animal_name)) {
    alert("Wrong!")
}
else {
    let gender = prompt('Gender: ');
    if (!secondRegex.test(gender)) {
        alert("Wrong!");
    }
    else {
        let age = prompt('Age: ');
        if (!thirdRegex.test(age)) {
            alert("Wrong!");
        }
        else if (gender.toLowerCase == "male") {
            if (age < 18) alert(animal_name + "-boy");
            else alert(animal_name + "-man");
        }
        else if (gender.toLowerCase == "female") {
            if (age < 18) alert(animal_name + "-girl");
            else alert(animal_name + "-woman");
        }
        else {
            if (age < 18) alert(animal_name + "-kid");
            else alert(animal_name + "-hero");
        }
    }
}