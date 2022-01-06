"use strict";
// ul id beschikbaar
//mandje span id aantal
//mandje ul id mandje
let mandje = JSON.parse(localStorage.getItem("mandje"));
let aantal = JSON.parse(localStorage.getItem("aantal"));
const ul = document.getElementById("mandje");
if (mandje === null) {
    mandje = [];
}
for (const optie of document.querySelectorAll("#beschikbaar li a")) {
    optie.onclick = function () {
        let keuze = optie.value;
        aantal++;
        document.getElementById("aantal").innerText = aantal;
        mandje.push(keuze);
        const li = document.createElement("li");
        li.innerText = keuze;
        ul.appendChild(li);
    }
}

localStorage.setItem("aantal", JSON.stringify(aantal));
localStorage.setItem("mandje", JSON.stringify(mandje));
/*
const ul = document.getElementById("mandje");
for (const burger of mandje) {
    const li = document.createElement("li");
    li.innerText = burger;
    ul.appendChild(li);
}*/
//localStorage.removeItem("mandje");