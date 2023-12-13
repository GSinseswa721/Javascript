function leapYear(year){
    return(year % 4 === 0 && year % 100 !==0 || (year % 400 === 0));
}
console.log(leapYear(2020));

function yearLeap(year){
    return(year % 4 === 0 && year % 100 !==0 )||(year % 400 === 0);
}
console.log(yearLeap(3901));

function leap(year){
    return(year % 4 === 0 && year % 100 !==0) 
}
console.log(leap(2020));
function leapYea(years){
    return years % 4 === 0 && years % 100 !== 0
}
console.log(leapYea(2010));