"use strict";
document.getElementById("text").onblur = function () {
    const text = document.getElementById("text").value;
    let achterstevoren = "";
    for (const letter of text){
        achterstevoren = letter + achterstevoren;
    }
    document.getElementById("palindroom").innerText = achterstevoren === this.value ?
    "Palindroom" : "Geen palindroom." ;
}