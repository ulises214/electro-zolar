(this["webpackJsonpelectro-zolar"]=this["webpackJsonpelectro-zolar"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(16),r=(c(22),c(23),c(2)),i=c(7),s=c(10);var l=function(e,t){var c=Object(n.useState)(!1),o=Object(s.a)(c,2),a=o[0],r=o[1],i=function(e){return r(e.matches)};return Object(n.useEffect)((function(){var c=window.matchMedia("(".concat(t,"-width: ").concat(e,")"));return c.addEventListener("change",i),function(){c.removeEventListener("change",i)}}),[t,e]),Object(n.useEffect)((function(){var c=window.matchMedia("(".concat(t,"-width: ").concat(e,")"));r(c.matches)}),[]),a},d=c.p+"static/media/bars.e73e1c05.svg",j=c.p+"static/media/times.a028b33d.svg",b=c(0),u=function(e){var t=e.onClick,c=e.isOpen,o=Object(r.f)();return Object(n.useEffect)((function(){t(!1)}),[o]),Object(b.jsx)("img",{onClick:function(){t(!c)},className:"burger_button",src:c?j:d,alt:"Toggle Menu"})},h=c.p+"static/media/logo.fdee463d.svg",f=function(){return Object(b.jsxs)(i.b,{className:"logo",to:"/",children:[Object(b.jsx)("img",{src:h,alt:"Logo electrozolar"}),Object(b.jsx)("span",{children:"Electro"}),Object(b.jsx)("span",{children:"Zolar"})]})},m=function(e){var t=e.href,c=e.title;return Object(b.jsx)(i.b,{to:t,className:"navlink",children:c})},O=function(){return Object(b.jsxs)("nav",{id:"bars_menu_nav",className:"nav_menu__container",children:[Object(b.jsx)(m,{href:"/",title:"Inicio"}),Object(b.jsx)(m,{href:"/instalaciones",title:"Instalaciones"}),Object(b.jsx)(m,{href:"/servicio",title:"Servicio"})]})},x=function(){var e=l("1024px","max"),t=Object(n.useState)(!0),c=Object(s.a)(t,2),o=c[0],a=c[1];return Object(n.useEffect)((function(){a(!e)}),[e]),Object(b.jsxs)("header",{children:[Object(b.jsx)(f,{}),e&&Object(b.jsx)(u,{onClick:function(e){return a(e)},isOpen:o}),o&&Object(b.jsx)(O,{})]})},g=c.p+"static/media/mail.cd379f84.svg",p=c.p+"static/media/mobile.9caf98f8.svg",v=c.p+"static/media/phone.97cc5b37.svg",_=c.p+"static/media/facebook.b0b05e09.svg",w=function(e){var t=e.src,c=e.title,n=e.href;return Object(b.jsxs)("a",{className:"footer__link",href:n,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{className:"footer__link__img",src:t,alt:"Network link"}),Object(b.jsx)("span",{className:"footer__link__span",children:c})]})},N=function(){return Object(b.jsx)("footer",{className:"section section__white",children:Object(b.jsxs)("div",{className:"footer__container",children:[Object(b.jsx)(f,{}),Object(b.jsxs)("div",{className:"footer__container__links",children:[Object(b.jsx)("h3",{children:"Cont\xe1ctanos"}),Object(b.jsx)(w,{src:g,title:"electrozolar@hotmail.com",href:"mailto:electrozolar@hotmail.com"}),Object(b.jsx)(w,{src:p,title:"312 157 2677",href:"tel:3121572677"}),Object(b.jsx)(w,{src:v,title:"312 311 9644",href:"tel:3123119644"}),Object(b.jsx)(w,{src:_,title:"@ElectroZolar",href:"https://www.facebook.com/ElectroZolar"})]})]})})},k=function(e){var t=e.children,c=e.color,n=e.to;return Object(b.jsx)(i.b,{to:n,className:"link-button link-button-".concat(c),children:t})},E=function(e){var t=e.color,c=e.children,n=e.className;return Object(b.jsx)("section",{className:"".concat(n," section section__").concat(t),children:c})},y=c.p+"static/media/globe.651e6021.svg",C=c.p+"static/media/dollar.859e3ef9.svg",z=c.p+"static/media/plus.f1ba6bde.svg",L=function(e){var t=e.src,c=e.children,n=e.title,o=e.href;return Object(b.jsxs)("div",{className:"benefits__item",children:[Object(b.jsx)("img",{className:"benefits__item__img",src:t,alt:"Beneficio sobre ".concat(n)}),Object(b.jsx)("h2",{className:"benefits__item__title",children:n}),Object(b.jsx)("p",{className:"benefits__item__text",children:c}),Object(b.jsx)(k,{color:"yellow",to:null!==o&&void 0!==o?o:"/",children:"Leer m\xe1s"})]})},S=function(){return Object(b.jsxs)(E,{color:"blue",className:"benefits",children:[Object(b.jsx)(L,{src:y,title:"Calentamiento global",href:"/",children:"El sistema fotovoltaico ayuda a reducir la emisi\xf3n de gases con efecto invernadero."}),Object(b.jsx)(L,{src:C,title:"Ahorro econ\xf3mico",href:"/",children:"El ahorro energ\xe9tico economico se ver\xe1 reflejado con el paso del tiempo en las facturas."}),Object(b.jsx)(L,{src:z,title:"Disponibilidad global",href:"/",children:"El sol brilla en todos los lugares del mundo, por lo tanto, si hay sol hay energ\xeda solar en mayor o menor medida."})]})},W=c.p+"static/media/promocion del mes.e4a0cdb7.jpg",P=function(){return Object(b.jsxs)(E,{color:"white",className:"presentation",children:[Object(b.jsxs)("div",{className:"presentation__info",children:[Object(b.jsx)("h1",{children:"Energ\xeda solar al alcance de todos"}),Object(b.jsxs)("p",{children:["El sol es la fuente de energ\xeda m\xe1s prometedora, por ello ponemos productos de ",Object(b.jsx)("b",{children:"calidad"})," y ",Object(b.jsx)("b",{children:"durabilidad"})," para obten r beneficio y as\xed la m\xe1xima energ\xeda el\xe9ctrica procesada por paneles de Electro Zolar."]}),Object(b.jsx)(k,{to:"servicio",color:"yellow",children:"ENV\xcdA TU RECIBO DE LUZ"})]}),Object(b.jsx)("img",{className:"presentation__image",src:W,alt:"Promoci\xf3n del mes"})]})},T=function(){return Object(b.jsxs)(E,{color:"blue",className:"ready-to-start",children:[Object(b.jsx)("h2",{className:"ready-to-start__title",children:"\xbfListo para empezar?"}),Object(b.jsx)(k,{color:"yellow",to:"/",children:"Env\xeda tu recivo de luz"})]})},Z=function(){return Object(b.jsxs)(E,{color:"white",className:"who-we-are",children:[Object(b.jsx)("h2",{className:"who-we-are__title",children:"\xbfQui\xe9nes somos?"}),Object(b.jsx)("p",{className:"who-we-are__text",children:"Electro Zolar es una empresa fundada en el 2013 en la ciudad de Colima, con el objetivo de ofrecer productos de calidad para la generaci\xf3n de energ\xeda solar al alcance de todos. Para as\xed obtener un doble beneficio, el de tu econom\xeda y en pro al medio ambiente. Manteniendo una constante actualizaci\xf3n en nuestros equipos ofrecidos; nuestro campo de acci\xf3n es en: casa, negocio y el campo agr\xedcola."})]})},A=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsx)(S,{}),Object(b.jsx)(Z,{}),Object(b.jsx)(T,{})]})},B=function(){return Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(A,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/instalaciones",children:"pito2"}),Object(b.jsx)(r.a,{exact:!0,path:"/servicio",children:"pito3"})]})};var F=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("article",{children:Object(b.jsx)(B,{})}),Object(b.jsx)(N,{})]})},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))};Object(a.render)(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/electro-zolar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/electro-zolar","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})).catch((function(e){return console.log("Pito",e)}))):(console.log("SW registred"),M(t,e))}))}}(),U()}},[[30,1,2]]]);
//# sourceMappingURL=main.a73524c1.chunk.js.map