(this["webpackJsonpmortgage-form"]=this["webpackJsonpmortgage-form"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),c=r(4),o=r.n(c),l=r(2),u=(r(10),function(e,t){e.value=e.value.replace(/[^0-9]/g,""),+e.value.replace(/\s/g,"")<=t?(e.value=e.value.replace(/^0+/,""),e.value=e.value.replace(/(\..*)\./g,"$1")):(e.value=t,e.value=e.value.replace(/(\..*)\./g,"$1")),e.value=e.value.replace(/\B(?=(\d{3})+(?!\d))/g," ")}),m=function(e){var t=e.loanBody,r=e.monthlyPayment,n=e.requiredIncome,c=e.overpayment;return Object(a.jsxs)("div",{className:"mortgage-results",children:[Object(a.jsxs)("div",{className:"mortgage-results__item",children:[Object(a.jsx)("p",{children:"\u0422\u0435\u043b\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430"}),Object(a.jsxs)("b",{children:[t||"0"," \u20bd"]})]}),Object(a.jsxs)("div",{className:"mortgage-results__item",children:[Object(a.jsx)("p",{children:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436"}),Object(a.jsxs)("b",{children:[r||"0"," \u20bd"]})]}),Object(a.jsxs)("div",{className:"mortgage-results__item",children:[Object(a.jsx)("p",{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0445\u043e\u0434"}),Object(a.jsxs)("b",{children:[n||"0"," \u20bd"]})]}),Object(a.jsxs)("div",{className:"mortgage-results__item",children:[Object(a.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u043f\u043b\u0430\u0442\u0430"}),Object(a.jsxs)("b",{children:[c||"0"," \u20bd"]})]})]})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0",n={loanBody:0,monthlyPayment:0,overpayment:0,requiredIncome:0},c=12*+r,o=function(e,t){var r=+e.replace(/\s/g,""),a=+t.replace(/\s/g,""),c=Math.round(r-a);n.loanBody="number"==typeof c&&c>=0?c.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):"0"},l=function(e,t){var r=+e.replace(/\s/g,""),a=+n.loanBody.replace(/\s/g,""),c=Math.round(a*(r/1200+r/1200/(Math.pow(1+r/1200,t)-1)));n.monthlyPayment="number"==typeof c&&c>=0&&c!==1/0?c.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):"0"},u=function(){var e=n.monthlyPayment.replace(/\s/g,""),t=Math.round(+e/3*5);n.requiredIncome="number"==typeof t&&t>=0&&t!==1/0?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):"0"},m=function(e,t,r){var a=+e.replace(/\s/g,""),c=+t.replace(/\s/g,""),o=n.monthlyPayment.replace(/\s/g,""),l=Math.round(o*r-a+c);n.overpayment="number"==typeof l&&l>=0&&a>c?l.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):"0"};return o(e,t),l(a,c),u(),m(e,t,c),n},g=function(){var e=localStorage.getItem("price"),t=localStorage.getItem("part"),r=localStorage.getItem("time"),c=localStorage.getItem("percent"),o=Object(n.useState)(e||"0"),g=Object(l.a)(o,2),i=g[0],j=g[1],d=Object(n.useState)(t||"0"),p=Object(l.a)(d,2),h=p[0],b=p[1],f=Object(n.useState)(r||"0"),_=Object(l.a)(f,2),v=_[0],O=_[1],y=Object(n.useState)(c||"0"),x=Object(l.a)(y,2),S=x[0],I=x[1],N=Object(n.useState)({loanBody:0,monthlyPayment:0,requiredIncome:0,overpayment:0}),B=Object(l.a)(N,2),k=B[0],q=B[1],P=Object(n.useState)(!1),C=Object(l.a)(P,2),E=C[0],M=C[1],w=Object(n.useState)(!1),A=Object(l.a)(w,2),D=A[0],J=A[1],$=Object(n.useState)("mortgage-form__lock mortgage-form__lock_opened"),z=Object(l.a)($,2),F=z[0],G=z[1];Object(n.useEffect)((function(){return q(s(i,h,v,S))}),[i,h,v,S]),Object(n.useEffect)((function(){var e=+i.replace(/\s/g,"");D&&b(Math.round(+e*D/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))}),[i,D]);var H=function(e){J(e),M(!0),G("mortgage-form__lock mortgage-form__lock_locked")},K=function(){return Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),localStorage.setItem("price",i),localStorage.setItem("part",h),localStorage.setItem("time",v),localStorage.setItem("percent",S)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})},L=function(){return Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),j(""),b(""),O(""),I(""),q({loanBody:0,monthlyPayment:0,requiredIncome:0,overpayment:0}),M(!1),J(!1),document.querySelectorAll("input").forEach((function(e){return e.value=""})),document.querySelectorAll('input[name="anchor"]').forEach((function(e){return e.checked=!1}))},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})},Q=function(){return Object(a.jsx)("div",{className:F,onClick:function(e){E&&(M(!1),J(!1),G("mortgage-form__lock mortgage-form__lock_opened"),document.querySelectorAll('input[name="anchor"]').forEach((function(e){return e.checked=!1})))}})};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"mortgage-form",children:[Object(a.jsxs)("div",{className:"mortgage-form__input mortgage-form__input_rub",children:[Object(a.jsx)("label",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438"}),Object(a.jsx)("input",{onInput:function(e){u(e.target,1e10),j(e.target.value)},placeholder:"\u0414\u043e 10 000 000 000",value:i})]}),Object(a.jsxs)("div",{className:"mortgage-form__input mortgage-form__input_part mortgage-form__input_rub",children:[Object(a.jsx)("label",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),Object(a.jsx)(Q,{}),Object(a.jsx)("input",{onInput:function(e){u(e.target,5e9),b(e.target.value)},placeholder:"\u0414\u043e 5 000 000 000",value:h,disabled:E})]}),Object(a.jsxs)("div",{className:"mortgage-form__anchors",children:[Object(a.jsx)("input",{className:"mortgage-form__anchor mortgage-form__anchor_10",type:"radio",name:"anchor",value:"10",onChange:function(e){return H(e.target.value)}}),Object(a.jsx)("input",{className:"mortgage-form__anchor mortgage-form__anchor_15",type:"radio",name:"anchor",value:"15",onChange:function(e){return H(e.target.value)}}),Object(a.jsx)("input",{className:"mortgage-form__anchor mortgage-form__anchor_20",type:"radio",name:"anchor",value:"20",onChange:function(e){return H(e.target.value)}}),Object(a.jsx)("input",{className:"mortgage-form__anchor mortgage-form__anchor_25",type:"radio",name:"anchor",value:"25",onChange:function(e){return H(e.target.value)}}),Object(a.jsx)("input",{className:"mortgage-form__anchor mortgage-form__anchor_30",type:"radio",name:"anchor",value:"30",onChange:function(e){return H(e.target.value)}})]}),Object(a.jsxs)("div",{className:"mortgage-form__input mortgage-form__input_year",children:[Object(a.jsx)("label",{children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430"}),Object(a.jsx)("input",{onInput:function(e){u(e.target,30),O(e.target.value)},placeholder:"\u0414\u043e 30",value:v})]}),Object(a.jsxs)("div",{className:"mortgage-form__input mortgage-form__input_perc",children:[Object(a.jsx)("label",{children:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430"}),Object(a.jsx)("input",{onInput:function(e){u(e.target,30),I(e.target.value)},placeholder:"\u0414\u043e 30",value:S})]}),Object(a.jsxs)("div",{className:"mortgage-form__buttons",children:[Object(a.jsx)(K,{}),Object(a.jsx)(L,{})]})]}),Object(a.jsx)(m,{loanBody:k.loanBody,monthlyPayment:k.monthlyPayment,requiredIncome:k.requiredIncome,overpayment:k.overpayment})]})},i=(r(11),function(){return Object(a.jsxs)("div",{className:"mortgage-calc",children:[Object(a.jsx)("h1",{className:"mortgage-calc__header",children:"\u0418\u043f\u043e\u0442\u0435\u0447\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \ud83c\udfe1"}),Object(a.jsx)(g,{})]})});o.a.render(Object(a.jsx)(i,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c23f4f09.chunk.js.map