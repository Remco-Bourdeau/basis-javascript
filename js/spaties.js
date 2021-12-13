"use strict";
let aantalSpaties;
document.getElementById("text").oninput = function() {
    const text = this.value;
    aantalSpaties = text.split(" ").length - 1
}
document.getElementById("toonSpaties").onclick = function() {
    const toonAantalSpaties = "Aantal spaties: " + aantalSpaties
    document.getElementById("confirm").innerText = toonAantalSpaties;
}