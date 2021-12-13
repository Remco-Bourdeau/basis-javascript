"use strict";
for (const hyperlink of document.querySelectorAll("a[data-verbergen]")){
    hyperlink.onclick = function() {
        const afbeeldingen = document.getElementById(this.dataset.verbergen);
        if (this.innerText === "Zonder afbeeldingen"){
            afbeeldingen.hidden = true;
            this.innerText = "Met afbeeldingen";
        } else {
            afbeeldingen.hidden = false;
            this.innerText = "Zonder afbeeldingen";
        }
    }
}
