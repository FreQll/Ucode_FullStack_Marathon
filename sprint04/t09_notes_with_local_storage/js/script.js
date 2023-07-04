function addData() {
    let text = document.getElementById("input_field");
    let str = text.value;

    if (str == "" || str == null || str == undefined) {
        alert('It\'s empty. Try to input something in "Text input"');
        return;
    }

    let value = str + " " + getCurrentDate();

    localStorage.setItem(localStorage.length, value);
    updateList();
    console.log(localStorage.length);
}

function getCurrentDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear() % 100; 
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    day = (day < 10 ? '0' : '') + day;
    month = (month < 10 ? '0' : '') + month;
    year = (year < 10 ? '0' : '') + year;
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;

    let formattedDate = '[' + day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + ':' + seconds + ']';
    return formattedDate;
}

function clearData() {
    let answer = confirm("Are you sure?");
    if (answer) {
        localStorage.clear();
    }
    updateList();
}

function updateList() {
    let output = document.getElementById("archive");

    if (localStorage.length == 0) {
        output.innerHTML = "[Empty]";
        return;
    }
    output.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        output.innerHTML += "--> " + localStorage.getItem(i) + "<br>";
    }
}

updateList();