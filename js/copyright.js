"use strict";
const vdabHyperLink = document.getElementById("vdab");
console.log(vdabHyperLink);
console.log(vdabHyperLink.href);
console.log(vdabHyperLink.innerText);

const jaarSpan = document.getElementById("jaar");
jaarSpan.innerText = new Date().getFullYear();
//korter
document.getElementById("jaar").innerText = new Date().getFullYear();


