"use strict";
if (localStorage.pagecount)
 {
 localStorage.pagecount=Number(localStorage.pagecount) +1;
 }
else
 {
 localStorage.pagecount=1;
 }
document.getElementById("totaalAantalBezoeken").innerText = "Aantal bezoeken: " + localStorage.pagecount;
const datum = new Date();
if (localStorage.getItem("laatsteBezoek") === null){
    document.getElementById("laatsteBezoek").innerText = "Eerste bezoek."
}
document.getElementById("laatsteBezoek").innerText = localStorage.getItem("laatsteBezoek");
localStorage.setItem("laatsteBezoek", datum);