let city = 'Kharkiv';
let key = '975f725e6c3f4e719c5131915232605';
let numberOfDays = Number(6);

function formatDate(date) {
    let arr = date.split('-');
    let result = "";
    result += arr[2];
    result += ".";
    result += arr[1];
    return result;
}

let response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${numberOfDays}&aqi=no&alerts=no`)
.then(resp => {return resp.json()}).then(data => {
    let date_elem = document.getElementsByClassName('data');
    let temp_elem = document.getElementsByClassName('temperature');
    let img_elem = document.getElementsByClassName('weather_img');

    for (let i = 0; i < numberOfDays; i++) {
        date_elem[i].innerHTML = formatDate(data.forecast.forecastday[i].date);
        let temp = data.forecast.forecastday[i].day.avgtemp_c;
        temp = Math.ceil(temp);
        if (temp == 0) temp_elem[i].innerHTML = temp + "&#176;";
        else if (temp > 0) temp_elem[i].innerHTML = "+" + temp + "&#176;";
        else temp_elem[i].innerHTML = "-" + temp + "&#176;";

        img_elem[i].src = data.forecast.forecastday[i].day.condition.icon;
    }
})