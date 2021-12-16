"use strict";
for (const element of document.getElementsByTagName("div")){
    element.onclick = function () {
        console.log(this.innerText);
    }
}