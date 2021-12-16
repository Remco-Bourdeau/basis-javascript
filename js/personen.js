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
    voornaamInput.value = "";
    familienaamInput.value = "";
    voornaamInput.focus();
   };
   