"use strict";
document.getElementById("zonderOfMetAfbeeldingen").onclick = function () {
    if (this.innerText === "Zonder afbeeldingen") {
        wijzigHiddenNaar(true);
        this.innerText = "Met afbeeldingen";
    } else {
        wijzigHiddenNaar(false);
        this.innerText = "Zonder afbeeldingen";
    }
}
function wijzigHiddenNaar (hidden){
    for (const img of document.querySelectorAll("#standbeelden img")){
        img.hidden = hidden;
    }
}