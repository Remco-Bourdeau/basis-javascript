"use strict";
document.getElementById("delen").onclick = function () {
    const verkeerde = document.querySelectorAll("input:invalid");
    for (const element of verkeerde) {
        document.getElementById(`${element.id}Fout`).hidden = false;
    }
    const correcte = document.querySelectorAll("input:valid");
    for (const element of correcte) {
        document.getElementById(`${element.id}Fout`).hidden = true;
    }
    if (verkeerde.length !== 0) {
        document.getElementById("uitkomst").hidden = true;
    } else {
        document.getElementById("uitkomst").hidden = false;
        document.getElementById("uitkomst").innerText = 
        document.getElementById("getal1").value / document.getElementById("getal2").value;
    }
}