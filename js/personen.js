"use strict";
document.getElementById("toevoegen").onclick = function () {
    const tbody = document.querySelector("tbody");
    const tr = tbody.insertRow(); 
    const voornaamTd = tr.insertCell(); 
    const voornaamInput = document.getElementById("voornaam");
    voornaamTd.innerText = voornaamInput.value; 
    const familienaamTd = tr.insertCell();
    const familienaamInput = document.getElementById("familienaam");
    familienaamTd.innerText = familienaamInput.value;
    const verwijderId = tr.insertCell();
    const verwijderHyperlink = document.createElement("a");
    verwijderHyperlink.innerText = "X";
    verwijderHyperlink.href = "#";
    verwijderId.appendChild(verwijderHyperlink);
    verwijderHyperlink.onclick = function () {
        const tr = this.parentElement.parentElement;
        tr.remove();
    }
    voornaamInput.value = "";
    familienaamInput.value = "";
    voornaamInput.focus();
   };
   
