// Method 1 Pure JS
/*
"use strict";
document.getElementById("toevoegen").onclick = function () {
    verbergAlleFoutMeldingen();
    let allesOK = true;
    const voornaam = document.getElementById("voornaam").value ;
    if (voornaam === "") {
        document.getElementById("voornaamFout").hidden = false;
        allesOK = false;
    }
    const kinderen = document.getElementById("kinderen").value ;
    if (kinderen === "") {
        document.getElementById("kinderenFout").hidden = false;
        allesOK = false;
    }
    const geslacht = document.getElementById("geslacht").value ;
    if (geslacht === "") {
        document.getElementById("geslachtFout").hidden = false;
        allesOK = false;
    }
    document.getElementById("toegevoegd").hidden = !allesOK
};
function verbergAlleFoutMeldingen() {
    for (const melding of document.querySelectorAll("span.fout")) {
        melding.hidden = true;
    }
}
*/
//Method 2 HTML + JS
/*
"use strict";
document.getElementById("toevoegen").onclick = function () {
 verbergAlleFoutMeldingen();
 let allesOK = true;
 if (! document.getElementById("voornaam").checkValidity()) { 
 document.getElementById("voornaamFout").hidden = false;
 allesOK = false;
 }
 if (! document.getElementById("kinderen").checkValidity()) {
 document.getElementById("kinderenFout").hidden = false;
 allesOK = false;
 }
 if (! document.getElementById("geslacht").checkValidity()) {
 document.getElementById("geslachtFout").hidden = false;
 allesOK = false;
 }
 document.getElementById("toegevoegd").hidden = ! allesOK;
};
function verbergAlleFoutMeldingen() {
 for (const melding of document.querySelectorAll("span.fout")) {
 melding.hidden= true;
 }
}
*/

"use strict";
document.getElementById("toevoegen").onclick = function () {
    const verkeerdeElementen = document.querySelectorAll("input:invalid, select:invalid");
    for (const element of verkeerdeElementen){
        document.getElementById(`${element.id}Fout`).hidden = false;
    }
    const correcteElementen = document.querySelectorAll("input:valid, select:valid");
    for (const element of correcteElementen) {
        document.getElementById(`${element.id}Fout`).hidden = true;
    }
    document.getElementById("toegevoegd").hidden = verkeerdeElementen.length !== 0;
};

