"use strict";
document.getElementById("text").onkeyup = function(){
    const text = document.getElementById("text").value;
    document.getElementById("aantalKlinkers").innerText =
    "Aantal Klinkers: " + telKlinkers(text);
}
function telKlinkers(text) {
    let aantalKlinkers = text.match(/[aeiou]/gi);
    return aantalKlinkers === null ? 0:
    aantalKlinkers.length;
}
