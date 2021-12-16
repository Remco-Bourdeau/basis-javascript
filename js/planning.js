"use strict";
const datum = new Date();
const tbody = document.querySelector("tbody");
for (let i = 1; i <= 10; i++){
    const tr = tbody.insertRow();
    const datumId = tr.insertCell();
    datumId.innerText = datum.toLocaleDateString("nl-BE");
    const todo = tr.insertCell();
    todo.appendChild(document.createElement("input"));
    datum.setDate(datum.getDate()+1);
    
}