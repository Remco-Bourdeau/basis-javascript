"use strict";
document.getElementById("alleenstaande").onchange = function(){
    document.getElementById("naamPartner").disabled = this.checked;
}