"use strict";

document.getElementById("links").onchange = eenNaarRechts;
document.getElementById("rechts").onchange = eenNaarLinks;
document.getElementById("allesNaarLinks").onclick = allesNaarLinks;
document.getElementById("allesNaarRechts").onclick = allesNaarRechts;
document.onchange = knoppenAllesOverzetten;
function eenNaarRechts() {
    document.getElementById("eenNaarRechts").disabled = false;
    const gekozen = links.options[links.selectedIndex];
    console.log("eenNaarRechts");
    document.getElementById("eenNaarRechts").onclick = function () {
        rechts.add(gekozen);
        document.getElementById("eenNaarRechts").disabled = true;
    }
}

function eenNaarLinks() {
    const gekozen = rechts.options[rechts.selectedIndex];
    document.getElementById("eenNaarLinks").disabled = false;
    document.getElementById("eenNaarLinks").onclick = function () {
        links.add(gekozen);
        document.getElementById("eenNaarLinks").disabled = true;
    }
}

function allesNaarRechts() {
    let lengte = document.getElementById("links").length;
    for (let i = 0; i < lengte; i++) {
        rechts.add(links.options[0]);
    }
}

function allesNaarLinks() {
    let lengte = document.getElementById("rechts").length;
    for (let i = 0; i < lengte; i++) {
        links.add(rechts.options[0]);
    }
}

function knoppenAllesOverzetten() {
    if (document.getElementById("links").length === 0){
        document.getElementById("allesNaarRechts").disabled = true;
        document.getElementById("eenNaarRechts").disabled = true;
    } else {
        document.getElementById("allesNaarRechts").disabled = false;
    }
    if (document.getElementById("rechts").length === 0){
        document.getElementById("allesNaarLinks").disabled = true;
        document.getElementById("eenNaarLinks").disabled = true;
    } else {
        document.getElementById("allesNaarLinks").disabled = false;
    }
}