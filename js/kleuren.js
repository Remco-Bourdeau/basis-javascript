"use strict";
for (const button of document.querySelectorAll("button[data-achtergrondkleur]")){
    button.onclick = function () {
        const kleur = this.dataset.achtergrondkleur;
        localStorage.setItem("achtergrondkleur", kleur);
        document.querySelector("body").style.backgroundColor = kleur;
    }
}
for (const button of document.querySelectorAll("button[data-tekstkleur")){
    button.onclick = function () {
        const kleur = this.dataset.tekstkleur;
        localStorage.setItem("tekstkleur", kleur);
        document.querySelector("body").style.color = kleur;
    }
}
const achtergrondkleur = localStorage.getItem("achtergrondkleur");
if (achtergrondkleur !== null) {
    document.querySelector("body").style.backgroundColor =achtergrondkleur;
}
const tekstkleur = localStorage.getItem("tekstkleur");
if (tekstkleur !== null) {
    document.querySelector("body").style.color =tekstkleur;
}
document.getElementById("vergeet").onclick = function () {
    localStorage.removeItem("achtergrondkleur");
    localStorage.removeItem("tekstkleur");
    const body = document.querySelector("body");
    body.style.backgroundColor = "";
    body.style.color = "";
}