(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{251:function(o,t,n){"use strict";n.r(t);n(59),n(43),n(239),n(60),n(92),n(130),n(131);var e=n(241),r=n.n(e),f=function(o){var t,n,e=[],r=[],f=["#1D2B53","#7E2553","#83769C","#008751","#00E436","#29ADFF","#FF77A8","#FF77A8","#FF004D","#FF004D","#FFA300","#FFA300","#FFEC27","#FFEC27","#ffffff","#ffffff"];function a(o,t){for(var n=0;n<o;n++){e[n]=[];for(var f=0;f<t;f++)e[n][f]=0}e.forEach(function(o,t){r[t]=o.slice(0)}),l(!0)}function l(t){e.forEach(function(n,a){n.forEach(function(n,l){var h=r[a][l];(Math.floor(n)!=Math.floor(h)||t)&&function(t,n){var r=Math.floor(e[t][n]);r>=f.length&&(r=f.length-1),r<0&&(r=0),o.fill(f[r]),o.rect(10*t,10*n,5,5)}(a,l)})}),e.forEach(function(o,t){r[t]=o.slice(0)})}function h(o,t){var n=Math.random()/8;e[o][t]-n<0?e[o][t]=0:(e[o][t]>f.length&&(e[o][t]=f.length),e[o][t]=e[o][t]-n)}function i(o,t,n){o<e.length&&o>=0&&t>=0&&(e[o][t]=n||f.length)}o.preload=function(){n=o.loadImage("/logo.png")},o.setup=function(){o.createCanvas(o.windowWidth,o.windowHeight),o.frameRate(30),o.noStroke(),o.background(34,34,34),a(Math.floor(o.width/10)+1,Math.floor(o.height/10)+1),t=document.querySelector("#logo")},o.draw=function(){o.frameCount%30==0&&i(Math.floor(o.random(0,e.length-1)),Math.floor(o.random(0,e[0].length-1)),o.random(f.length,2e3*f.length)),function(){var e=t.getBoundingClientRect(),r=Math.floor((e.right-e.left)/10);Math.floor((e.bottom-e.top)/10);n.resize(r,0),n.loadPixels();for(var a=0;a<n.width;a++)for(var l=0;l<n.height;l++){var h=n.get(a,l);0!==h[3]&&i(Math.floor(e.left/10)+a,Math.floor(e.top/10)+l,o.map(h[3],0,255,0,f.length))}}(),function(){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++){var r=e[t][n],f=o.random(0,r)/48,a=o.random(0,r/1.5)/6;0!=Math.floor(r)&&(n-1>=0&&e[t][n-1]<r&&(e[t][n-1]=e[t][n-1]+f),n+1<e[t].length&&e[t][n+1]<r&&(e[t][n+1]=e[t][n+1]+f),t-1>=0&&e[t-1][n]<r&&(e[t-1][n]=e[t-1][n]+f),t+1<e.length&&e[t+1][n]<r&&(e[t+1][n]=e[t+1][n]+f)),e[t][n]-a<0?e[t][n]=0:e[t][n]=e[t][n]-a}}(),function(){for(var o=0;o<e.length;o++)for(var t=0;t<e[o].length;t++)h(o,t)}(),l()},o.windowResized=function(){o.resizeCanvas(o.windowWidth,o.windowHeight),o.background(34,34,34),a(Math.floor(o.width/10)+1,Math.floor(o.height/10)+1)},o.touchStarted=function(){i(Math.floor(o.mouseX/10),Math.floor(o.mouseY/10),500*f.length)},o.touchMoved=function(){i(Math.floor(o.mouseX/10),Math.floor(o.mouseY/10),o.random(f.length,200*f.length))},o.mouseMoved=function(){i(Math.floor(o.mouseX/10),Math.floor(o.mouseY/10),o.random(f.length,f.length))}},a={mounted:function(){new r.a(f,"pixelGrid")}},l=n(42),h=Object(l.a)(a,function(){var o=this.$createElement;return(this._self._c||o)("section",{attrs:{id:"pixelGrid"}})},[],!1,null,null,null);h.options.__file="pixel-grid.vue";t.default=h.exports}}]);