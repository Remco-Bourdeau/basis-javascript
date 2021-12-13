"use strict";
const datum = new Date();
let uur = datum.getHours();
if (uur < 12){
    console.log("Goede morgen");
} else if (uur < 18){
    console.log("Goede middag");
} else {
    console.log("Goede avond");
}