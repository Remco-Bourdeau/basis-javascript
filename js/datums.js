"use strict";
const datum = new Date(1966, 7, 1, 19, 50, 55); 
console.log(datum.getFullYear()); 
console.log(datum.getMonth()); 
console.log(datum.getDate()); 
console.log(datum.getDay()); 
console.log(datum.toLocaleDateString("nl-BE")); 
console.log(datum.getHours()); 
console.log(datum.getMinutes()); 
console.log(datum.getSeconds()); 
console.log(datum.toLocaleTimeString("nl-BE")); 
console.log(datum.toLocaleString("nl-BE")); 