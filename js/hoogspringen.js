"use strict";
let rij = 0;
let maxHoogte = 0;
document.getElementById("toevoegen").onclick = function () {
    const row = document.createElement("tr");
    for (let i = 0; i <= 3; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    document.querySelector("tbody").appendChild(row);
    let naam = document.getElementById("naam").value;
    let hoogte = document.getElementById("hoogte").value;
    controleerInput(naam, hoogte);
    winnaar();
    rij++;
    document.getElementById("naam").value = "";
    document.getElementById("hoogte").value = "";
    document.getElementById("naam").focus;
}

function controleerInput (naam, hoogte) {
    if (document.getElementById("naam").checkValidity() &&
     document.getElementById("hoogte").checkValidity()){
        document.getElementById("naamFout").hidden = true;
        document.getElementById("hoogteFout").hidden = true;
        document.querySelector("tbody").rows[rij].cells[0].innerText = naam;
        document.querySelector("tbody").rows[rij].cells[1].innerText = hoogte;
        if (hoogte > maxHoogte){
            maxHoogte = hoogte;
        }
    } else if (!document.getElementById("naam").checkValidity()){
        document.getElementById("naamFout").hidden = false;
    } else if (!document.getElementById("hoogte").checkValidity()){
        document.getElementById("hoogteFout").hidden = false;
    }
}

function winnaar () {
    for (const element of document.querySelector("tbody").rows){
        const hoogte = Number(element.cells[1].innerText);
        
        if (hoogte === maxHoogte){
            element.cells[2].innerText = "*";
        } else {
            element.cells[2].innerText = "";
        }
        //element.cells[2].innerText = hoogte === maxHoogte ? "*" : "";
    }
    
}