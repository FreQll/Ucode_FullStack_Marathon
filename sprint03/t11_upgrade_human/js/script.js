class Timer {
    constructor(title, delay, stopCount, mode) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.mode = mode;
    }

    start() {
        let count = (this.delay * this.stopCount) / 1000;
        let timerId = setInterval(() => this.tick(count--, timerId), this.delay);
        if (this.mode == 'eat') {
            status_bar.innerHTML = "Nom nom nom";
            eat_button.disabled = true;
            sleep_button.disabled = true;
        }

        if (this.mode == 'not hungry') {
            status_bar.innerHTML = "I`m not hungry";
        }

        if (this.mode == 'sleep') {
            status_bar.innerHTML = "I`m sleeping...";
            eat_button.disabled = true;
            sleep_button.disabled = true;
        }

        if (this.mode == 'flying') {
            status_bar.innerHTML = "I`m flying!";
            eat_button.disabled = true;
            sleep_button.disabled = true;
        }

        if (this.mode == 'fight') {
            status_bar.innerHTML = "Khhhh-chh...";
            eat_button.disabled = true;
            sleep_button.disabled = true;
        }
    }

    tick(count, timerId) {
        if (this.mode == 'loss' && human.calories > 0) {
            status_bar.innerHTML = "I`m hungry!!!";
            human.sub_calories();
        }
        else if (this.mode == 'loss' && human.calories == 0) {
            status_bar.innerHTML = "I WANT TO EAT! FEED ME!!!";
        }
        if (this.mode == 'fight') {
            if (count == 6 || count == 5) {
                status_bar.innerHTML = "Khhhh-chh...";
            }
            else if (count == 4 || count == 3) {
                status_bar.innerHTML = "Ora ora ora";
            }
            else {
                status_bar.innerHTML = "Dio defeated...";
            }
        }
        if (count == 0) this.stop(timerId);
    }

    stop(timerId) {
        clearInterval(timerId);

        if (this.mode == 'awake') {
            status_bar.innerHTML = "I`m awake now";
        }
        else if (this.mode == 'eat' && human.calories < 500) {
            status_bar.innerHTML = "I`m still hungry(";
        }
        else {
            status_bar.innerHTML = "...";
        }
        eat_button.disabled = false;
        sleep_button.disabled = false;
    }
};

function runTimer(id, delay, counter, mode) {
    let temp = new Timer(id, delay, counter, mode);
    temp.start();
}

class Human {
    constructor(name, lastName, gender, age) {
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = Number(200);
        calories.innerHTML = (this.calories);
        this.img_source = "https://pngimg.com/d/children_PNG18064.png";

        document.getElementById('name').innerHTML = this.name;
        document.getElementById('lastName').innerHTML = this.lastName;
        document.getElementById('age').innerHTML = this.age;
        document.getElementById('gender').innerHTML = this.gender;
        hero_image.src = this.img_source;
    }

    add_calories() {
        this.calories += 200;
        calories.innerHTML = this.calories;
    }

    sub_calories() {
        this.calories -= 200;
        calories.innerHTML = this.calories;
    }

    eat() {
        if (human.calories >= 500) {
            runTimer("b", 5000, 0, "not hungry");
        }
        else {
            human.add_calories();
            runTimer("b", 10000, 0, "eat");
        }
        
    }

    sleep() {
        let to_sleep = parseInt(document.getElementById('sleep_range').value);
        if (to_sleep >= 1) {
            runTimer("s", to_sleep * 1000, 0, "sleep");
            runTimer("s", 5000, 0, "awake");
        }
    }
}

class SuperHero extends Human {
    constructor(name, lastName, gender, age, calories) {
        super(name, lastName, gender, age, calories);
        this.upgrade();
        this.eat;
        this.sleep;
        this.calories = calories;
    }

    upgrade() {
        eat_button.innerHTML = 'Fly';
        sleep_button.innerHTML = 'Fight';
        this.img_source = "https://freepngimg.com/thumb/anime/118756-jotaro-png-file-hd.png";
        hero_image.src = this.img_source;
        header.innerHTML = "Superhero";
        container.style.background = "#ee47ec";
        calories.innerHTML = human.calories;
    }

    eat() {
        runTimer("b", 10000, 0, "flying");
    }

    sleep() {
        runTimer("b", 3000, 2, "fight");
    }
}

let firstName = prompt("Name: ");
let lastName = prompt("Last name: ");
let gender = prompt("Gender: ");
let age = prompt("Age: ");

let human = new Human(firstName, lastName, gender, age);

eat_button.onclick = human.eat;
sleep_button.onclick = human.sleep;

turn_to_hero.onclick = function() {
    if (human.calories >= 500) {
        human = new SuperHero(human.name, human.lastName, human.gender, human.age);
        eat_button.onclick = human.eat;
        sleep_button.onclick = human.sleep;
        document.getElementById('sleep_range').style.display = 'none';
        document.getElementById('turn_to_hero').style.display = 'none';
        status_bar.innerHTML = "Now i'm hero!";
    }
}

runTimer('loss', 60000, -1, 'loss')