(this.webpackJsonpwheels=this.webpackJsonpwheels||[]).push([[0],[,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),i=(n(11),n(5)),o=n(2),u=(n(12),n(13),n(14),n.p+"static/media/wheel.369afc68.png"),l=n.p+"static/media/spin.4295bf12.png",m=n.p+"static/media/loading.b0997f97.gif",d=n.p+"static/media/tiker.02fd30c0.png",j=n.p+"static/media/tick.2e9e79dd.mp3",f=(n(15),n(3),n(0)),g=function(){return Object(f.jsx)("div",{className:"message technical-error",children:Object(f.jsx)("p",{children:" Congrats "})})},b=function(){return Object(f.jsx)("div",{className:"message technical-error",children:Object(f.jsx)("p",{children:" Used spin "})})},p=function(){return Object(f.jsx)("div",{className:"message technical-error",children:Object(f.jsx)("p",{children:" Expired campaign "})})},h=function(){return Object(f.jsx)("div",{className:"message technical-error",children:Object(f.jsx)("p",{children:" Technical Error "})})},O=function(e){switch(e.messageStatus){case"Congrats":return Object(f.jsx)(g,{});case"UsedSpin":return Object(f.jsx)(b,{});case"TechnicalError":return Object(f.jsx)(h,{});case"ExpiredCampaign":return Object(f.jsx)(p,{});default:return Object(f.jsx)("div",{})}},x=function(e){var t=e.messageStatus;return Object(f.jsx)("div",{className:"messages-container messageAnimation",children:Object(f.jsx)(O,{messageStatus:t})})},v=5;var w=function(e){var t=e.params,n=Object(a.useState)("none"),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),g=Object(o.a)(i,2),b=g[0],p=g[1],h=Object(a.useRef)(null),O=new Audio(j);Object(a.useEffect)((function(){document.querySelector(".ticker").addEventListener("animationend",(function(){document.querySelector(".ticker").classList.remove("ticker-animation")}))}),[]);var w=function(){O.play(),document.querySelector(".ticker").classList.add("ticker-animation")},k=function(){var e=360/v,n=720+t.randomChosenPackage*e;h.current.style.transition="transform ".concat(8,"s ease-out 0s"),h.current.style.transform="rotate(".concat(n,"deg)");var a=setInterval((function(){var t=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("-moz-transform")||t.getPropertyValue("-ms-transform")||t.getPropertyValue("-o-transform")||t.getPropertyValue("transform")||"none";if("none"!=n){var a=n.split("(")[1].split(")")[0].split(","),c=Math.round(Math.atan2(a[1],a[0])*(180/Math.PI));return c<0?c+360:c}return 0}(h.current)%e;e/2-4<=t&&t<=e/2+4&&w()}),10);setTimeout((function(){s("Congrats"),window.clearInterval(a)}),8e3)};return Object(f.jsxs)("div",{className:"wheel-container",children:["none"===r?"":Object(f.jsx)(x,{messageStatus:r}),b?Object(f.jsx)("img",{className:"loading",src:m,alt:"loading"}):"",Object(f.jsx)("img",{className:"wheel",src:u,alt:"wheel",ref:h}),Object(f.jsx)("img",{className:"spin",src:l,alt:"spin",onClick:function(){p(!0),setTimeout((function(){p(!1),k()}),1e3)}}),Object(f.jsx)("div",{className:"ticker-container",children:Object(f.jsx)("img",{className:"ticker",src:d,alt:"ticker"})})]})};var k=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e);c(Object(i.a)(Object(i.a)({},n),{},{guid:t.get("guid"),username:t.get("username"),randomChosenPackage:t.get("RandomChosenPackage")}))}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(w,{params:n})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),S()}],[[17,1,2]]]);
//# sourceMappingURL=main.b0bfbd54.chunk.js.map