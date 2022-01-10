"use strict";
leesGeslachten();
const opties = document.querySelectorAll("#links a");

async function leesGeslachten () {
    const response = await fetch("../js/geslachten.json");
    if (response.ok){
        const info = await response.json();
        document.getElementById("nietGevonden").hidden = true;
        maakTabel("allen", info);
        for (const optie of opties) {
            optie.onclick = function () {
                deleteTabel(document.querySelector("tbody"));
                const gekliktElement = this.dataset.naam;
                maakTabel(gekliktElement, info);
            }
        }
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}

function maakTabel(gekliktGeslacht, info) {
    for (const element of info) {
        const tbody = document.querySelector("tbody");
        if (element.geslacht === gekliktGeslacht || gekliktGeslacht === "allen") {
            const tr = tbody.insertRow();
            const naam = tr.insertCell();
            naam.innerText = element.voornaam;
            const familienaam = tr.insertCell();
            familienaam.innerText = element.familienaam;
            const geslacht = tr.insertCell();
            const geslachtImg = document.createElement("img");
            geslachtImg.src = `../img/${element.geslacht}.png`;
            geslacht.appendChild(geslachtImg);
            const foto = tr.insertCell();
            const fotoImg = document.createElement("img");
            fotoImg.src = `../img/${element.foto}`;
            foto.appendChild(fotoImg);
        }
    }
}

function deleteTabel (element) {
    while (element.lastChild !== null){
        element.lastChild.remove();
    }
}