function addTouchEvents(e){if(hasTouch){e.addEventListener("touchstart",touch2Mouse,!0);e.addEventListener("touchmove",touch2Mouse,!0);e.addEventListener("touchend",touch2Mouse,!0)}}function touch2Mouse(e){var t=e.changedTouches[0],n;switch(e.type){case"touchstart":n="mousedown";break;case"touchend":n="mouseup";break;case"touchmove":n="mousemove";break;default:return}if(n=="mousedown"){eventTimer=(new Date).getTime();startX=t.clientX;startY=t.clientY;mouseDown=!0}if(n=="mouseup"){(new Date).getTime()-eventTimer<=500?n="click":(new Date).getTime()-eventTimer>1e3&&(n="longclick");eventTimer=0;mouseDown=!1}if(n=="mousemove"&&mouseDown){deltaX=t.clientX-startX;deltaY=t.clientY-startY;moveDirection=deltaX>deltaY?"horizontal":"vertical"}var r=document.createEvent("MouseEvent");r.initMouseEvent(n,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null);t.target.dispatchEvent(r);e.preventDefault()}var hasTouch="ontouchend"in window,eventTimer,moveDirection="undefined",startX,startY,deltaX,deltaY,mouseDown=!1;