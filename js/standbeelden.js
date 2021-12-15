"use strict";
document.getElementById("isHetWeekend").onclick = function(){
    const dagInWeek = new Date().getDay();
    document.getElementById("weekend").innerText = 
    dagInWeek === 6 || dagInWeek === 0 ? "Ja" : "Nee";
}
function toonStandbeeld(){
    //document.getElementById("afbeelding").src=`../img/${this.id}.jpg`;
    const img = document.getElementById("afbeelding");
    img.title = this.dataset.plaats;
    import.src = `${this.dataset.foto}.jpg`;
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
const eersteLi = document.querySelector("li");
console.log(eersteLi.parentElement.id);
for (const sibling of eersteLi.parentElement.children){
    if (sibling !== eersteLi){
        console.log(sibling);
    }
}
const standbeeldenLijst = document.getElementById("standbeelden");
for (const childElement of standbeeldenLijst.children){
    console.log(childElement);
}
const tweedeLi = document.querySelector("li:nth-child(2)");
let volgendeSibling = tweedeLi.nextElementSibling;
while (volgendeSibling !== null){
    console.log(volgendeSibling);
    volgendeSibling = volgendeSibling.nextElementSibling;
}
const voorlaatsteLi = document.querySelector("li:nth-last-child(2)");
let vorigeSibling = voorlaatsteLi.previousElementSibling;
while (vorigeSibling !== null){
    console.log(vorigeSibling);
    vorigeSibling = vorigeSibling.previousElementSibling;
}