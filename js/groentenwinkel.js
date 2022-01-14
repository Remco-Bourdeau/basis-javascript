"use strict";
maakFooter();
leesGroenten();
const opties = document.getElementById("groente");
document.getElementById("toevoegen").onclick = function () {
    if (valideren()) {
        const gekozenGroente = opties.options[opties.selectedIndex];
        const aantalGroente = document.getElementById("aantal").value;
        if (!isGroenteAlAanwezig(gekozenGroente)) {
            toevoegenAanMandje(gekozenGroente, aantalGroente);
        }
    }
}

async function leesGroenten() {
    const response = await fetch("../js/groenten.json");
    if (response.ok) {
        const groenten = await response.json();
        document.getElementById("nietGevonden").hidden = true;
        maakKeuzeLijst(groenten);
        
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}

function maakKeuzeLijst(groenten) {
    for (const groente of groenten){
        const optieLijst = document.getElementById("groente");
        const optie = document.createElement("option");
        optie.value = groente.naam;
        optie.dataset.prijs = groente.prijs;
        optie.dataset.eenheid = groente.eenheid;
        optie.dataset.naam = groente.naam;
        optie.innerText = `${groente.naam} (€${groente.prijs}/${groente.eenheid})`;
        optieLijst.appendChild(optie);
    }
}

function maakFooter(){
    const tfoot = document.querySelector("tfoot");
    const tr = tfoot.insertRow();
    const textTotaal = tr.insertCell();
    textTotaal.innerText = "Totaal";
    let legeCell = tr.insertCell();
    legeCell = tr.insertCell();
    const totaalTeBetalen = tr.insertCell();
    totaalTeBetalen.id = "totaal";
    legeCell = tr.insertCell();
}

function toevoegenAanMandje(groente, aantal) {
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow();
    const naamGroente = tr.insertCell();
    naamGroente.innerText = groente.dataset.naam;
    naamGroente.dataset.naam = groente.dataset.naam;
    const aantalGroente = tr.insertCell();
    aantalGroente.innerText = aantal;
    const prijsGroente = tr.insertCell();
    prijsGroente.innerText = groente.dataset.prijs;
    const teBetalen = tr.insertCell();
    teBetalen.innerText = (Number(prijsGroente.innerText) * Number(aantalGroente.innerText)).toFixed(2);
    const verwijderGroente = tr.insertCell();
    const verwijderGroenteButton = document.createElement("button");
    const verwijderGroenteImg = document.createElement("img");
    verwijderGroenteImg.src = "../img/vuilbak.png";
    verwijderGroente.appendChild(verwijderGroenteButton);
    verwijderGroenteButton.appendChild(verwijderGroenteImg);
    verwijderGroenteButton.onclick = function () {
        tr.remove();
        toonTotaal();
    }
    toonTotaal();
}

function toonTotaal(){
    document.querySelector("tfoot").hidden = false;
    let totaalPrijs = 0;
    for (const row of document.querySelector("tbody").rows){
        totaalPrijs += Number(row.cells[3].innerText);
    }
    const cellTotaalTeBetalen = document.getElementById("totaal");
    cellTotaalTeBetalen.innerText = `€${totaalPrijs.toFixed(2)}`;
}

function valideren() {
    let allesOK = true;
    document.getElementById("geenGroenteGekozen").hidden = true;
    document.getElementById("geenAantalGekozen").hidden = true;
    if (!document.getElementById("groente").checkValidity()) {
        document.getElementById("geenGroenteGekozen").hidden = false;
        allesOK = false;
    }
    if (!document.getElementById("aantal").checkValidity()) {
        document.getElementById("geenAantalGekozen").hidden = false;
        allesOK = false;
    }
    return allesOK;
}

function isGroenteAlAanwezig(groente){
    for (const row of document.querySelector("tbody").rows){
        if (row.cells[0].dataset.naam === groente.dataset.naam){
            const huidigAantal = row.cells[1].innerText;
            const aantalBijTellen = document.getElementById("aantal").value;
            let nieuwAantal = Number(huidigAantal) + Number(aantalBijTellen);
            row.cells[1].innerText = nieuwAantal;
            const prijsGroente = groente.dataset.prijs;
            const teBetalen = (nieuwAantal * Number(prijsGroente)).toFixed(2);
            row.cells[3].innerText = teBetalen;
            toonTotaal();
            return true;
        }
    }
}
