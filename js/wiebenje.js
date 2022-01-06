"use strict";
document.getElementById("onthoudMe").onclick = function () {
    sessionStorage.setItem("voornaam", document.getElementById("voornaam").value);
}