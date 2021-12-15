"use strict";

for (const element of document.querySelectorAll("#ingrediënten li, #werkwijze li")){
    element.onclick = function () {
        this.classList.toggle("opvallend");
        volgendeElementenGeenKleur(element);
        vorigeElementenGeenKleur(element);
    }
}
function volgendeElementenGeenKleur(element){
    let volgende = element.nextElementSibling;
    while (volgende !== null){
        if (volgende.classList.contains("opvallend")){
            volgende.classList.remove("opvallend");
        }
        console.log(volgende);
        volgende = volgende.nextElementSibling;
    }
}
function vorigeElementenGeenKleur(element){
    let vorige = element.previousElementSibling;
    while (vorige !== null) {
        if (vorige.classList.contains("opvallend")){
            vorige.classList.remove("opvallend");
        }
        console.log(vorige);
        vorige = vorige.previousElementSibling;
    }
}