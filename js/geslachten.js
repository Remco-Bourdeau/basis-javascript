"use strict";
leesGeslachten();
const opties = document.getElementById("keuzes");

async function leesOpties (){
    const response = await fetch ("../js/geslachtenOpties.json");
    if (response.ok){
        const opties = await response.json();
        document.getElementById("optiesNietGevonden").hidden = true;
        for (const optie of opties){
            const select = document.querySelector("select");
            const option = document.createElement("option");
            option.value = optie.geslacht;
            option.innerText = optie.naam;
            select.appendChild(option);
        }
    }
    else {
        document.getElementById("optiesNietGevonden").hidden = false;
    }
}

async function leesGeslachten() {
    const response = await fetch("../js/geslachten.json");
    if (response.ok) {
        const personen = await response.json();
        leesOpties();
        document.getElementById("nietGevonden").hidden = true;
        maakTabel(personen);
        document.getElementById("filter").onclick = function () {
            if (!document.getElementById("keuzes").checkValidity()) {
                document.getElementById("fout").hidden = false;
            } else {
                document.getElementById("fout").hidden = true;
                const gekozenGeslacht = opties.options[opties.selectedIndex].value;
                controleerGeslacht(gekozenGeslacht);
                toonAantalPersonen();
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

function controleerGeslacht(geslacht) {
    for (const row of document.querySelector("tbody").rows) {
        
        if (row.dataset.geslacht === geslacht) {
            row.hidden = false;
        } else {
            row.hidden = true;
            if (geslacht === "allen") {
                row.hidden = false;
            }
        }
        
       //row.hidden = (geslacht !== "allen" && row.dataset.geslacht === geslacht);
    }
}

function toonAantalPersonen() {
    const footer = document.querySelector("tfoot");
    while (footer.lastChild !== null){
        footer.lastChild.remove();
    }
    const tr = footer.insertRow();
    let index = 0;
    for (const row of document.querySelector("tbody").rows){
        if (! row.hidden){
            index++;
        }
    }
    tr.innerText = `Er worden ${index} personen weergegeven.`
}