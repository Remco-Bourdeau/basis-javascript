"use strict";
const mandjeUl = document.getElementById("mandje");
const aantal = document.getElementById("aantal");
let mandje = JSON.parse(localStorage.getItem("mandje"));

if (mandje === null) {
    mandje = [];
} else {
    for(const burger of mandje) { //wat er al in zat tonen
        const li = document.createElement("li");
        li.innerText = burger;
        mandjeUl.appendChild(li);
    }
    aantal.innerText = mandje.length;
}
//nieuwe elementen toevoegen
for (const hyperlink of document.querySelectorAll("#beschikbaar a")) {
    hyperlink.onclick = function () {
        const burger = this.innerText;
        mandje.push(burger);
        localStorage.setItem("mandje", JSON.stringify(mandje));
        const li = document.createElement("li");
        li.innerText = burger;
        mandjeUl.appendChild(li);
        aantal.innerText = Number(aantal.innerText) + 1;
    }
}