"use strict";
document.getElementById("burgers").onchange = function () {
    const gekozen = burgers.options[burgers.selectedIndex];
    gekozen.remove(gekozen.selectedIndex);
}
