"use strict";

maakDeuren();
const hyperlinks = document.querySelectorAll("#deuren a");
const hyperlinkMetFriet =
    hyperlinks[Math.floor((Math.random() * hyperlinks.length))];
let beurten = 0;
for (const hyperlink of hyperlinks) {
    hyperlink.onclick = function () {
        beurten++;
        const img = this.querySelector("img");
        if (this === hyperlinkMetFriet) {
            img.src = "../img/gevonden.png";
            img.alt = "gevonden";
            document.getElementById("beurten").innerText = beurten;
            document.getElementById("resultaat").hidden = false;
        } else {
            img.src = "../img/deuropen.png";
            img.alt = "deur open";
        }
    };
}
function maakDeuren() {
    const body = document.getElementById("deuren");
    for (let index = 1; index <= 7; index++) {
        const img = document.createElement("img");
        img.src = "../img/deurtoe.png";
        img.alt = "deur toe";
        const hyperlink = document.createElement("a");
        hyperlink.href = "#";
        hyperlink.appendChild(img);
        body.appendChild(hyperlink);
    }
}