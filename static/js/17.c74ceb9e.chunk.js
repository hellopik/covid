(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{614:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(616);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(u){r=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},615:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},616:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(615);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},668:function(e,t,a){"use strict";a.r(t);var n=a(615);var r=a(616);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(614),i=a(1),u=a.n(i),l=a(613);t.default=function(){var e=Object(i.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)("top-right"),s=Object(c.a)(r,2),m=s[0],f=s[1],b=Object(i.useState)(!0),h=Object(c.a)(b,2),d=h[0],p=h[1],y=Object(i.useState)(5e3),E=Object(c.a)(y,2),v=E[0],j=E[1],g=Object(i.useState)(!0),O=Object(c.a)(g,2),k=O[0],S=O[1],w=Object(i.useState)(!0),A=Object(c.a)(w,2),N=A[0],T=A[1],x=a.reduce((function(e,t){return e[t.position]=e[t.position]||[],e[t.position].push(t),e}),{});return u.a.createElement(l.j,null,u.a.createElement(l.n,null,"Toasts."),u.a.createElement(l.k,null,u.a.createElement(l.w,null,u.a.createElement(l.wb,null,u.a.createElement(l.u,{sm:"12",lg:"6"},u.a.createElement(l.J,null,u.a.createElement("h5",null,"Add toast with following props:"),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2 mt-4"},u.a.createElement(l.T,{id:"autohide",checked:d,onChange:function(e){p(e.target.checked)},custom:!0}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"autohide"},"Autohide of the toast")),d&&u.a.createElement(l.K,{className:"my-2"},u.a.createElement(l.cb,{htmlFor:"ccyear"},"Time to autohide"),u.a.createElement(l.S,{type:"number",value:v,onChange:function(e){j(Number(e.target.value))}})),u.a.createElement(l.K,{className:"my-2"},u.a.createElement(l.cb,{htmlFor:"ccyear"},"Position"),u.a.createElement("select",{className:"form-control",value:m,onChange:function(e){f(e.target.value)}},["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(e,t){return u.a.createElement("option",{key:t},e)})))),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2"},u.a.createElement(l.T,{id:"fade",checked:N,onChange:function(e){T(e.target.checked)},custom:!0}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"fade"},"fade")),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2"},u.a.createElement(l.T,{id:"close",custom:!0,checked:k,onChange:function(e){S(e.target.checked)}}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"close"},"closeButton")),u.a.createElement(l.f,{className:"mr-1 w-25",color:"success",onClick:function(){n([].concat(o(a),[{position:m,autohide:d&&v,closeButton:k,fade:N}]))}},"Add toast"))),u.a.createElement(l.u,{sm:"12",lg:"6"},Object.keys(x).map((function(e){return u.a.createElement(l.Pb,{position:e,key:"toaster"+e},x[e].map((function(t,a){return u.a.createElement(l.Mb,{key:"toast"+a,show:!0,autohide:t.autohide,fade:t.fade},u.a.createElement(l.Ob,{closeButton:t.closeButton},"Toast title"),u.a.createElement(l.Nb,null,"This is a toast in ".concat(e," positioned toaster number ").concat(a+1,".")))})))})))))))}}}]);
//# sourceMappingURL=17.c74ceb9e.chunk.js.map