"use strict";
document.getElementById("isHetWeekend").onclick = function(){
    const dagInWeek = new Date().getDay();
    document.getElementById("weekend").innerText = 
    dagInWeek === 6 || dagInWeek === 0 ? "Ja" : "Nee";
}
function toonStandbeeld(){
    document.getElementById("afbeelding").src=`../img/${this.id}.jpg`;
}
/*
document.getElementById("vrijheidsbeeld").onclick=toonStandbeeld;
document.getElementById("moederland").onclick=toonStandbeeld;
document.getElementById("mannekepis").onclick=toonStandbeeld;
*/
/*
const standbeeldenUl = document.getElementById("standbeelden");
for (const hyperlink of standbeeldenUl.getElementsByTagName("a"))
*/
for (const hyperlink of document.querySelectorAll("#standbeelden a")){
    hyperlink.onclick = toonStandbeeld;
}