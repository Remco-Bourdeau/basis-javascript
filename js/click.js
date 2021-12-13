"use strict";
/*
function hoeLaatIsHet(){
    document.getElementById("nu").innerText = new Date().toLocaleTimeString("nl-BE");
}
document.getElementById("zegEens").onclick = hoeLaatIsHet;
*/
//Anonieme Functie
document.getElementById("zegEens").onclick = function (){
    document.getElementById("nu").innerText = new Date().toLocaleTimeString("nl-BE");
}