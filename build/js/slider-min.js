"use strict";var depth=document.querySelector(".value-level__depth"),line=document.querySelector(".value-level__line"),firstPin={pin:document.querySelector(".value-level__pin--first"),value:document.querySelector(".value-level__value--first"),label:document.querySelector(".value-level__label--first"),getX:function(e){return e<MIN&&(e=MIN),e>MAX&&(e=MAX),e>secondPin.pin.offsetLeft&&(e=secondPin.pin.offsetLeft),this.pin.style.left=e+"px",depth.style.left=e+"px",e}},mx=0,secondPin={pin:document.querySelector(".value-level__pin--second"),value:document.querySelector(".value-level__value--second"),label:document.querySelector(".value-level__label--second"),getX:function(e,t){return e<MIN&&(e=MIN),e>MAX&&(e=MAX),e<firstPin.pin.offsetLeft&&(e=firstPin.pin.offsetLeft),firstPin.pin.offsetLeft===secondPin.pin.offsetLeft&&secondPin.pin.offsetLeft-e>-1&&0!=t&&(e=firstPin.pin.offsetLeft+t,e=firstPin.getX(e),firstPin.value.value=Math.floor(e/MAX*maxValue)),this.pin.style.left=e+"px",depth.style.right=MAX-e+"px",e}},MIN=0,MAX=line.offsetWidth-firstPin.pin.offsetWidth,maxValue=firstPin.value.getAttribute("data-max"),toValue=function(e){return e.classList.contains("value-level__pin--first")?firstPin.value:secondPin.value},sliderHandler=function(e){e.preventDefault();var t=function(t){if(t.preventDefault(),e.target.classList.contains("value-level__pin--first")){var n=firstPin.pin.offsetLeft+t.movementX;n=firstPin.getX(n),firstPin.value.value=Math.floor(n/MAX*maxValue)}else{n=secondPin.pin.offsetLeft+t.movementX;n=secondPin.getX(n,t.movementX),secondPin.value.value=Math.floor(n/MAX*maxValue)}},n=function(e){e.preventDefault(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)},mobileSliderHandler=function(e){e.preventDefault();var t=e.changedTouches[0].pageX,n=function(n){var i=n.changedTouches[0].pageX-t;if(e.target.classList.contains("value-level__pin--first")){var l=firstPin.pin.offsetLeft+i;l=firstPin.getX(l),firstPin.value.value=Math.floor(l/MAX*maxValue)}else{l=secondPin.pin.offsetLeft+i;l=secondPin.getX(l,i),secondPin.value.value=Math.floor(l/MAX*maxValue)}t=n.changedTouches[0].pageX},i=function(e){e.preventDefault(),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i)};document.addEventListener("touchmove",n),document.addEventListener("touchend",i)},numberChange=function(e){if(0===e){var t=firstPin.value.value*MAX/maxValue;(t=firstPin.getX(t))<firstPin.value.value*MAX/maxValue&&(firstPin.value.value=secondPin.value.value)}else{t=secondPin.value.value*MAX/maxValue;(t=secondPin.getX(t))>secondPin.value.value*MAX/maxValue&&(secondPin.value.value=firstPin.value.value)}},initSlider=function(){MAX=line.offsetWidth-firstPin.pin.offsetWidth,firstPin.getX(firstPin.value.value*MAX/maxValue),secondPin.getX(secondPin.value.value*MAX/maxValue)};document.querySelectorAll(".value-level__value").forEach(function(e,t){e.addEventListener("change",function(){numberChange(t)})}),document.querySelectorAll(".value-level__pin").forEach(function(e,t){e.addEventListener("mousedown",function(e){sliderHandler(e)}),e.addEventListener("touchstart",function(e){mobileSliderHandler(e)}),e.addEventListener("keydown",function(n){39===n.keyCode&&toValue(e).value<parseInt(maxValue)&&(toValue(e).value=parseInt(toValue(e).value)+1,numberChange(t)),37===n.keyCode&&toValue(e).value>MIN&&(toValue(e).value=parseInt(toValue(e).value)-1,numberChange(t))})}),window.addEventListener("resize",function(){if(currentDevice!==getCurrentDevice()){var e=line.closest(".filter__category");e.classList.contains("filter__category--active")?initSlider():(e.classList.toggle("filter__category--active"),initSlider(),e.classList.toggle("filter__category--active"))}}),initSlider();