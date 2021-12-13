"use strict";
for (const eenClass of document.getElementById("beschrijving").classList){
    console.log(eenClass);
}
for (const element of document.querySelectorAll("#ingrediënten, #werkwijze")){
    element.onclick=function(){/*
        if(this.classList.contains("opvallend")){
            this.classList.remove("opvallend");
        } else{
            this.classList.add("opvallend");
        }*/
        this.classList.toggle("opvallend");
    }
}
for (const hyperlink of document.querySelectorAll("a[data-teverbergenid]")){
    hyperlink.onclick=function(){
        document.getElementById(this.dataset.teverbergenid).hidden = true;
        const bijbehorendElement = document.getElementById(this.dataset.teverbergenid);
if(this.innerText === "Verbergen"){
    bijbehorendElement.hidden = true;
    this.innerText = "Tonen";
} else {
    bijbehorendElement.hidden = false;
    this.innerText = "Verbergen";
}
    }
}
