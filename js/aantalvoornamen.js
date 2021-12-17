"use strict";

document.getElementById("toevoegen").onclick = function () {
    const voornaamInput = document.getElementById("voornaam");
    const voornaam = voornaamInput.value;
    const listItem = zoekListItemMetNaam(voornaam);
    if (listItem === null) {
        maakListItemMetNaam(voornaam);
    } else {
        verhoogAantalListItem(listItem);
    }
    voornaamInput.value = "";
    voornaamInput.focus();
}

function zoekListItemMetNaam(naam) {
    // itereren over alle list-items, en list-item met zelfde naam returnen
    for (const element of document.querySelectorAll("#voornamen li")) {
        if (element.dataset.naam === naam) {
            return element;
        }
    } 
    return null;
}

function maakListItemMetNaam(naam) {
    const li = document.createElement("li");
    li.dataset.naam = naam;
    li.dataset.aantal = 1;
    li.innerText = li.dataset.naam + ": " + li.dataset.aantal;
    document.getElementById("voornamen").appendChild(li);
}

function verhoogAantalListItem(listItem) {
    listItem.dataset.aantal++;
    listItem.innerText = listItem.dataset.naam + ": " + listItem.dataset.aantal;

}