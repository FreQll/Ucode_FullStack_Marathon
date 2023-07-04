const films = [
    {
        title: "Drive",
        poster_src: "assets/images/drive.jpg",
        prod_date: "May 20, 2011",
        info: "\"Drive\" (2011) is a captivating neo-noir crime thriller directed by Nicolas Winding Refn. The film follows a mysterious and enigmatic Hollywood stunt driver (played by Ryan Gosling) who moonlights as a getaway driver for heists. When he becomes involved with his neighbor Irene (Carey Mulligan) and her son, he embarks on a dangerous journey to protect them from the violent consequences of her husband's criminal past. With its stylish cinematography, intense action sequences, and a hauntingly atmospheric soundtrack, \"Drive\" delves into themes of love, loyalty, and the consequences of one's choices in a gripping and unforgettable way.",
        actors: ["Ryan Gosling", "Carey Mulligan", "Bryan Cranston", "Christina Hendricks", "Ron Perlman", "Oscar Isaac", "Albert Brooks"],
    },

    {
        title: "Taxi Driver",
        poster_src: "assets/images/taxi.jpg",
        prod_date: "February 9, 1976",
        info: "\"Taxi Driver\" (1976) is a gritty and iconic psychological drama directed by Martin Scorsese. The film revolves around Travis Bickle (played by Robert De Niro), a socially alienated and mentally unstable Vietnam War veteran who works as a nighttime taxi driver in New York City. Plagued by loneliness, disillusionment, and a growing obsession with a young woman named Betsy (Cybill Shepherd), Travis descends into a twisted moral descent, fueled by his encounters with the seedy underbelly of society. As he becomes increasingly disturbed, Travis sets out on a violent mission to cleanse the city of its perceived filth, leading to a shocking and climactic confrontation.",
        actors: ["Robert De Niro", "Jodie Foster", "Albert Brooks", "Harvey Keitel"],
    },

    {
        title: "American Psycho",
        poster_src: "assets/images/american.jpg",
        prod_date: "January 21. 2000",
        info: "\"American Psycho\" (2000) is a dark and satirical psychological thriller that follows the wealthy and disturbed Patrick Bateman (Christian Bale), an investment banker living a double life as a violent psychopath in 1980s Manhattan. The film explores themes of materialism, identity, and the masks we wear in society, offering a chilling and thought-provoking portrayal of a twisted mind.",
        actors: ["Christian Bale", "Willem Dafoe", "Jared Leto", "Josh Lucas", "Samantha Mathis", "Matt Ross", "Bill Sage"],
    },
]

function changeInfo(id) {
    for (let i = 0; i < films.length; i++) document.getElementById(i).style.borderLeft = "none";
    console.log(id);
    actors.innerHTML = "";
    
    title.innerHTML = films[id].title;
    date.innerHTML = films[id].prod_date;
    info.innerHTML = films[id].info;
    poster.src = films[id].poster_src;
    //let actors_str = "";
    for (let i = 0; i < films[id].actors.length; i++) {
        let actor = document.createElement('div');
        actor.innerHTML = films[id].actors[i];
        actor.classList.add('actor-name');
        actors.appendChild(actor);
    }
    document.getElementById(id).style.borderLeft = "4px solid blue";
}

document.addEventListener('DOMContentLoaded', () => {
    changeInfo('0');
});


