"use strict";

async function leesUser(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const nietGevondenDiv = document.getElementById("nietGevonden");
    if (response.ok) {
        const user = await response.json();
        document.getElementById("nummer").innerText = user.data.id;
        document.getElementById("voornaam").innerText = user.data.first_name;
        document.getElementById("familienaam").innerText = user.data.last_name;
        document.getElementById("emailAdres").innerText = user.data.email;
        document.getElementById("avatar").src = user.data.avatar;
        nietGevondenDiv.hidden = true;
    } else {
        nietGevondenDiv.hidden = false;
    }
}

document.getElementById("zoeken").onclick = function () {
    const nummerInput = document.getElementById("zoekNummer");
    const nummerFout = document.getElementById("nummerFout");
    if (nummerInput.checkValidity()) {
        nummerInput.hidden = true;
        leesUser (nummerInput.value);
    } else {
        nummerFout.hidden = false;
    }
}