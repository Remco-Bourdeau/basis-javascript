"user strict";
const persoon = {voornaam: "Hans", kinderen: 3, gehuwd: true};
const persoonInJSONFormaat = JSON.stringify(persoon);
console.log(persoonInJSONFormaat);
const hierIsDePersoonTerug = JSON.parse(persoonInJSONFormaat);
console.log(hierIsDePersoonTerug.voornaam);

let bezoeken = JSON.parse(localStorage.getItem("bezoeken"));
if (bezoeken === null) {
    bezoeken = [];
} else {
    if (bezoeken.length === 10) {
        bezoeken.shift();
    }
}
bezoeken.push(new Date().toLocaleTimeString("nl-BE"));
localStorage.setItem("bezoeken", JSON.stringify(bezoeken));

const ul = document.getElementById("bezoeken");
for (const bezoek of bezoeken) {
    const li = document.createElement("li");
    li.innerText = bezoek;
    ul.appendChild(li);
}