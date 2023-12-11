function leapYear(year){
    return(year % 4 === 0 && year % 100 !==0 || (year % 400 === 0));
}
console.log(leapYear(2020));

function yearLeap(year){
    return(year % 4 === 0 && year % 100 !==0 )||(year % 400 === 0);
}
console.log(yearLeap(3901));

function leap(year){
    return(year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);
}
console.log(leap(3090));
