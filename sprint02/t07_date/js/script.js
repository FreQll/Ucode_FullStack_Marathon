function getFormattedDate(dateObject) {
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1; //прибавляю + 1 так как в примере происходит какая то магия, и никто толком не объяснил че делать
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let day_of_week = dateObject.getDay();

    let final_date;

    if (day < 10) final_date = '0' + day + '.';
    else final_date = day + '.';

    if (month < 10) final_date += '0' + month + '.';

    else final_date += month + '.';

    final_date += year + ' ';

    if (hours < 10) final_date += '0' + hours + ':';

    else final_date += hours + ':';


    if (minutes < 10) final_date += '0' + minutes + ' ';

    else final_date += minutes + ' ';


    switch (day_of_week) {
        case 0:
            final_date += "Sunday";
            break;
        case 1:
            final_date += "Monday";
            break;
        case 2:
            final_date += "Tuesday";
            break;
        case 3:
            final_date += "Wednesday";
            break;
        case 4:
            final_date += "Thursday";
            break;
        case 5:
            final_date += "Friday";
            break;
        case 6:
            final_date += "Saturday";
            break;
    }

    return(final_date);
}

// const date0 = new Date(1993, 11, 1);
// const date1 = new Date(1998, 0, -33);
// const date2 = new Date('42 03:24:00');
// console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday