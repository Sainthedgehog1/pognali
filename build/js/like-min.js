"use strict";var hearts=document.querySelectorAll(".catalog-user__like"),likesNumbers=document.querySelectorAll(".catalog-user__likes-count");Array.from(hearts).forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=e.nextElementSibling;e.classList.toggle("catalog-user__like--active");var r=n.dataset.count;e.classList.contains("catalog-user__like--active")?r++:r--,n.dataset.count=r,n.textContent=converNumberToString(r)})});var converNumberToString=function(e){return e>=1e6?(e/1e6).toFixed(1)+" M":String(e)},btns=document.querySelectorAll(".filter__toggle");function btnTabindex(e){window.screen.width>=768&&window.screen.width<1440?e.setAttribute("tabindex","-1"):e.setAttribute("tabindex","0")}window.addEventListener("resize",function(){btns.forEach(btnTabindex)}),btns.forEach(btnTabindex);var letter=document.querySelectorAll(".countries-filter__letter--active");function actLetTabindex(e){e.setAttribute("tabindex","-1")}letter.forEach(actLetTabindex);var number=document.querySelector(".pagination__link--active"),prev=document.querySelector(".pagination__prev--inactive");function tabindex(e,t){e.setAttribute("tabindex","-1"),t.setAttribute("tabindex","-1")}tabindex(number,prev);