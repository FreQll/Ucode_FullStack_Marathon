let arr = [
    ['Black<br>Panther',    66,    53],
    ['Captain<br>America',  79,    137],
    ['Captain<br>Marvel',   97,    26],
    ['Hulk',             80,    49],
    ['Iron<br>Man',         88,    48],
    ['Spider<br>-Man',       78,    16],
    ['Thanos',           99,    1000],
    ['Thor',             95,    1000],
    ['Pucci',            100,   25],
    ['Jotaro',           85,    36],
]

placeholder.remove();
notification.remove();

let table = document.createElement('table');
let label = document.createElement('span');
let name_asc = true;
let str_asc = true;
let age_asc = true;

function createTable(arr) {
    table.remove();
    
    table = document.createElement('table');
    document.body.appendChild(table);
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Name";
    td.id = "Name";
    td.classList.add('head');

    td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Strength";
    td.id = 'Strength';
    td.classList.add('head')

    td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Age";
    td.id = 'Age';
    td.classList.add('head')

    for (let i = 0; i < arr.length; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < 3; j++) {
            td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
    }

    Name.onclick = function() {
       sortBy(arr, name_asc, 0);
       createNotification("Name", name_asc);
       if (name_asc) name_asc = false;
       else name_asc = true;
    }

    Strength.onclick = function() {
        sortBy(arr, str_asc, 1);
        createNotification("Strength", str_asc);
        if (str_asc) str_asc = false;
        else str_asc = true;
    }

    Age.onclick = function() {
        sortBy(arr, age_asc, 2);
        createNotification("Age", age_asc);
        if (age_asc) age_asc = false;
        else age_asc = true;
    }
}

function sortBy(arr, asc, variable) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j][variable] > arr[j + 1][variable] && asc) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            if (arr[j][variable] < arr[j + 1][variable] && !asc) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    createTable(arr);
}

function createNotification(par, order) {
    label.remove();
    label = document.createElement('span');
    let str;
    if (order) str = "ASC";
    else str = "DESC";
    label.innerHTML = "Sorting by " + par + ", order: " + str;
    document.body.appendChild(label);
}
    
createTable(arr);