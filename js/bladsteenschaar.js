"use strict";
let keuzePersoon = 0;

for (const keuze of document.querySelectorAll("#keuze img")){
    keuze.onclick = function () {/*
        switch (keuze.id){
            case "blad":
                keuzePersoon =  1;
                break;
            case "steen":
                keuzePersoon =  2;
                break;
            case "schaar":
                keuzePersoon =  3;
        }*/
        //console.log("Keuze gebruiker: ", keuzePersoon);
        //console.log("Keuze computer: ", keuzeComputer());
        winnaar(Number(keuze.dataset.keuze), keuzeComputer());
    }
}



function winnaar (keuzePersoon, keuzeComputer) {
    let winnaar = "";
    if (keuzePersoon === keuzeComputer ){
        winnaar = "Gelijkspel";
    } else if (keuzePersoon === 1 && keuzeComputer === 2) {
        winnaar = "Gebruiker";
    } else if (keuzePersoon === 2 && keuzeComputer === 3) {
        winnaar = "Gebruiker";
    } else if (keuzePersoon === 3 && keuzeComputer === 1) {
        winnaar = "Gebruiker";
    } else {
        winnaar = "Computer";
    }
    document.getElementById("uitkomst").innerText = winnaar;
    //console.log(winnaar);
}

function keuzeComputer() {
    const keuzeComputer = Math.floor((Math.random()*3)+1);
    switch (keuzeComputer){
        case 1:
            document.getElementById("keuzeComputer").src = "../img/blad.png";
            break;
        case 2:
            document.getElementById("keuzeComputer").src = "../img/steen.png";
            break;
        case 3:
            document.getElementById("keuzeComputer").src = "../img/schaar.png";
    }
    return keuzeComputer;
}