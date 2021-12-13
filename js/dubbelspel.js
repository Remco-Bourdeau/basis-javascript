"use strict";
const foutDiv = document.getElementById("fout");
/*
for (const speler of document.getElementsByTagName("input")){
    speler.onblur = function () {
        foutDiv.hidden = this.value !== "";
    }
}
*/
for (const speler of document.querySelectorAll("#spelers input")){
    speler.onblur = function() {
        foutDiv.hidden = this.value !== "";
    }
}