let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

if (firstName == undefined || lastName == undefined 
    || firstName.length == 0 || lastName.length == 0) {
    alert("Wrong input!");
    console.log("Wrong input!");
}
else {
    let error = false;
    for (let i = 0; i < firstName.length; i++) {
        if (!isNaN(firstName[i])) {
            alert("Wrong input!");
            console.log("Wrong input!");
            error = true;
            break;
        }
    }

    for (let i = 0; i < lastName.length; i++) {
        if (!isNaN(lastName[i])) {
            alert("Wrong input!");
            console.log("Wrong input!");
            error = true;
            break;
        }
    }

    if (!error) {
        const capitalizedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        let result = capitalizedName + " " + capitalizedLastName + ", hello!";
        alert(result);
        console.log(result);
    }
}