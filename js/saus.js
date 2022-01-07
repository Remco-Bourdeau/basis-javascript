"use strict";
let saus;
let puntjes;
let foutePogingen = 0;
leesSauzen();
async function leesSauzen() {
    const response = await fetch("../js/sauzen.json");
    if (response.ok) {
        const sauzen = await response.json();
        saus = sauzen[Math.floor((Math.random() * sauzen.length))];
        puntjes = ".".repeat(saus.length);
        document.getElementById("puntjes").innerText = puntjes;
        document.querySelector("body").hidden = false;
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}
document.getElementById("raden").onclick = function () {
    const letterInput = document.getElementById("letter");
    if (letterInput.value === "") {
        letterInput.focus();
    }
    else {
        gok(letterInput.value);
        document.getElementById("puntjes").innerText = puntjes;
        document.getElementById("foutePogingen").src = `../img/${foutePogingen}.png`;
        if (gewonnen()) {
            document.getElementById("gewonnenSaus").innerText = saus;
            document.getElementById("gewonnen").hidden = false;
        } else {
            if (verloren()) {
                document.getElementById("verlorenSaus").innerText = saus;
                document.getElementById("verloren").hidden = false;
            } else {
                letterInput.value = "";
                letterInput.focus();
            }
        }
    }
};
function gok(letter) {
    if (!saus.includes(letter)) {
        foutePogingen++;
    }
    const oudePuntjes = puntjes;
    puntjes = "";
    for (let teller = 0; teller != saus.length; teller++) {
        puntjes += letter === saus[teller] ? letter : oudePuntjes[teller];
    }
}
function verloren() {
    return foutePogingen === 10;
}
function gewonnen() {
    return !puntjes.includes(".");
}