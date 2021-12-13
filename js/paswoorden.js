"use strict";
document.getElementById("paswoord").oninput = function (){
    //const paswoord = document.getElementById("paswoord").value;
    //Verkort
    const paswoord = this.value;
    const paswoordFeedbackSpan = document.getElementById("paswoordFeedback");
    /*
    if (paswoord.length >=6) {
        paswoordFeedbackSpan.innerText = "OK";
    } else {
        paswoordFeedbackSpan.innerText = "Te kort";
    }
    */
   //Verkorte IF
   paswoordFeedbackSpan.innerText = 
   paswoord.length >= 6 ?
   "OK" :
   "Te kort" ;
}
document.getElementById("herhaal").onblur = function () {
    const herhaalFeedbackSpan = document.getElementById("herhaalFeedback");
    herhaalFeedbackSpan.innerText = 
    this.value === document.getElementById("paswoord").value ?
    "OK" :
    "Beide paswoorden moeten gelijk zijn" ;
}