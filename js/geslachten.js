"use strict";
leesGeslachten();
const opties = document.querySelectorAll("#links a");

async function leesGeslachten() {
    const response = await fetch("../js/geslachten.json");
    if (response.ok) {
        const personen = await response.json();
        document.getElementById("nietGevonden").hidden = true;
        maakTabel(personen);
        for (const optie of opties) {
            optie.onclick = function () {
                const gekozenGeslacht = this.dataset.geslacht;
                controleerGeslacht(gekozenGeslacht);
            }
        }
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}

function maakTabel(personen) {
    for (const persoon of personen) {
        const tbody = document.querySelector("tbody");
        const tr = tbody.insertRow();
        tr.dataset.geslacht = persoon.geslacht;
        tr.hidden = false;
        const naam = tr.insertCell();
        naam.innerText = persoon.voornaam;
        const familienaam = tr.insertCell();
        familienaam.innerText = persoon.familienaam;
        const geslacht = tr.insertCell();
        const geslachtImg = document.createElement("img");
        geslachtImg.src = `../img/${persoon.geslacht}.png`;
        geslacht.appendChild(geslachtImg);
        const foto = tr.insertCell();
        const fotoImg = document.createElement("img");
        fotoImg.src = `../img/${persoon.foto}`;
        foto.appendChild(fotoImg);
        
    }
}

function controleerGeslacht(geslacht){
    for (const row of document.querySelector("tbody").rows) {
        if (row.dataset.geslacht === geslacht){
            row.hidden = false;
        } else {
            row.hidden = true;
            if (geslacht === "allen"){
                row.hidden = false;
            }
        }
    }
}