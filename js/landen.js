"use strict";
for (const hyperlink of document.querySelectorAll("#landen a")){
    hyperlink.onclick=function(){
        document.getElementById("hoofdstad").innerText = this.dataset.hoofdstad;
        document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
    }
}