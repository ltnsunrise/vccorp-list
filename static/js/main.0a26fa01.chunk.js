(this["webpackJsonplist-test"]=this["webpackJsonplist-test"]||[]).push([[0],{111:function(e,t,a){e.exports=a(151)},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),u=(a(116),a(117),a(18)),o=a.n(u),i=a(30),s=a(9),m=(a(119),a(61)),v=a.n(m);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=c.a.createElement("path",{d:"M9.61205 14.4084L11.7514 12.2429L9.61205 10.0775L10.6742 8.99857L12.806 11.1487L14.9379 8.99857L16 10.0775L13.8832 12.2429L16 14.4084L14.9379 15.4873L12.806 13.3142L10.6742 15.4873L9.61205 14.4084ZM0 0H13.5593V1.53037H13.4991L8.28625 6.82544V16L5.27307 12.9393V6.81779L0.0677965 1.53037H0V0Z",fill:"#CBD5E0"}),p=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return c.a.createElement("svg",f({viewBox:"0 0 16 16",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,d)},E=c.a.forwardRef((function(e,t){return c.a.createElement(p,f({svgRef:t},e))})),g=(a.p,{Other:0,BaoChi:1,ChuyenGia:2,Official:3,SocialPage:4,KOL:5,PartnerPromotion:7,BoIch:8,TienKiem:253,HauKiem:254,Tam:255}),h=[{name:"Chuy\xean gia",value:g.ChuyenGia},{name:"B\u1ed5 \xedch",value:g.BoIch},{name:"Official",value:g.Official},{name:"B\xe1o ch\xed",value:g.BaoChi},{name:"Trang c\u1ed9ng \u0111\u1ed3ng",value:g.SocialPage},{name:"Sao/KOL",value:g.KOL},{name:"Partner promotion",value:g.PartnerPromotion},{name:"T\u1ea1m",value:g.Tam},{name:"Ti\u1ec1n ki\u1ec3m",value:g.TienKiem},{name:"H\u1eadu ki\u1ec3m",value:g.HauKiem},{name:"Kh\xe1c",value:g.Other}],O=function(e){var t=e.label,a=e.status,r=e.keyword,l=e.setLabel,u=e.setStatus,o=e.setKey,i=e.setCurrentPage,m=Object(n.useState)(!1),f=Object(s.a)(m,2),b=f[0],d=f[1];return Object(n.useEffect)((function(){return""===a?d(!1):1===Number(a)||0===Number(a)?d(!0):void 0}),[a]),r||t||b?c.a.createElement("div",{className:"filter"},(r||t||0===a||b)&&c.a.createElement("div",{className:"icon-clear clickable"},c.a.createElement(E,{onClick:function(){o(""),l(""),u(""),i(1),d(!1)}})),c.a.createElement("div",{className:"scrollable-x"},r&&c.a.createElement("div",{className:"filter__item"},c.a.createElement("strong",null,"T\u1eeb kh\xf3a:\xa0")," ",r," ",c.a.createElement(v.a,{className:"clickable icon-remove",onClick:function(){o(""),i(1)}})),t&&c.a.createElement("div",{className:"filter__item"},c.a.createElement("strong",null,"Nh\xe3n:\xa0")," ",h.map((function(e){return e.value===Number(t)?e.name:""})),c.a.createElement(v.a,{className:"clickable icon-remove",onClick:function(){l(""),i(1)}})),b&&c.a.createElement("div",{className:"filter__item"},c.a.createElement("strong",null,"Tr\u1ea1ng th\xe1i:\xa0")," ",1===Number(a)&&"Ho\u1ea1t \u0111\u1ed9ng",0===Number(a)&&"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng"," ",c.a.createElement(v.a,{className:"clickable icon-remove",onClick:function(){u(""),d(!1),i(1)}})))):c.a.createElement("div",null)},j=(a(124),a(88)),N=a.n(j),y=a(89),k=a.n(y),S=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};function w(){var e=Object(n.useState)(S()),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=null,t=function(){clearTimeout(e),e=setTimeout((function(){return c(S())}),150)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),a}var C=function(e){var t=e.currentPage,a=e.onNextPage,r=e.onPreviousPage,l=e.onSetPage,u=e.isDisableNext,o=e.maxPage,i=(e.users,w()),m=Object(n.useState)(t),v=Object(s.a)(m,2),f=v[0],b=v[1];return Object(n.useEffect)((function(){b(t)}),[t]),c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{className:"btn btn-left",onClick:function(){b(f-1),r()},disabled:t<=1},c.a.createElement(N.a,null)," ",i<576&&"Trang tr\u01b0\u1edbc"),c.a.createElement("div",{className:"number"},c.a.createElement("form",{onSubmit:function(){f<=o&&l(f)}},c.a.createElement("input",{type:"number",value:f,onChange:function(e){return b(e.target.value)},onBlur:function(e){e.target.value>o&&b(t)}}))),c.a.createElement("button",{disabled:u,className:"btn btn-right",onClick:function(){u||(b(Number(f)+1),a())}},i<576&&"Trang sau"," ",c.a.createElement(k.a,null)))},x=(a(125),a(126),a(194)),L=a(199),P=a(191),_=a(92),K=a.n(_),T=a(48),I=a.n(T),D=a(192),B={Other:0,Expert:2,Creator:3,KOL:5,Star:6,Community:4,Youtuber:7,Internal:8,Incorporation:9,Credibility:10},H=[{name:"Tin t\u01b0\u1edfng",value:B.Credibility},{name:"Kh\xe1c",value:B.Other}],F=[{name:"Content creat or",value:B.Creator},{name:"KOL",value:B.KOL},{name:"KOL",value:B.KOL},{name:"Sao",value:B.Star},{name:"C\u1ed9ng \u0111\u1ed3ng",value:B.Community},{name:"Youtuber",value:B.Youtuber},{name:"K\xeanh n\u1ed9i b\u1ed9",value:B.Internal},{name:"T\u1ed5 ch\u1ee9c / Doanh nghi\u1ec7p",value:B.Incorporation},{name:"Chuy\xean gia",value:B.Expert},{name:"Kh\xe1c",value:B.Other}],R=a(35),W=a.n(R),z=W.a.create({baseURL:"https://b11.cnnd.vn/",headers:{Authorization:"".concat(localStorage.getItem("token"))}}),V=function(e){var t,a=e.user,r=h.filter((function(e){return e.value===a.class})),l=Object(n.useState)(0===r.length?0:a.class),u=Object(s.a)(l,2),m=u[0],v=u[1],f=Object(n.useState)(a.classType||""),b=Object(s.a)(f,2),d=b[0],p=b[1],E=Object(n.useState)(!1),g=Object(s.a)(E,2),O=g[0],j=g[1],N=Object(n.useRef)(!1),y=Object(n.useRef)(!1),k=w();function S(){return(S=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).set("pageId",a.id),t.set("class",m),e.prev=3,e.next=6,z.post("g/api/system/page/update_class",t);case 6:n=e.sent,n.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function C(){return(C=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).set("pageId",a.id),t.set("classType",d),e.prev=3,e.next=6,z.post("g/api/system/page/update_class_type",t);case 6:n=e.sent,n.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function _(){return c.a.createElement("div",{className:"select-container"},c.a.createElement(x.a,{value:m,onChange:function(e){return v(e.target.value)},IconComponent:I.a},h.map((function(e){return c.a.createElement(L.a,{key:e.value,value:e.value},e.name)}))))}function T(){return c.a.createElement(c.a.Fragment,null,1===m&&c.a.createElement("div",{className:"select-container"},c.a.createElement(x.a,{autoWidth:!0,value:d,onChange:function(e){p(e.target.value)},displayEmpty:!0,IconComponent:I.a},c.a.createElement(L.a,{disabled:!0,value:""},c.a.createElement("span",{className:"disabled-item"},"Ch\u01b0a ph\xe2n lo\u1ea1i")),H.map((function(e){return c.a.createElement(L.a,{key:e.value,value:e.value},e.name)})))),3===m&&c.a.createElement("div",{className:"select-container"},c.a.createElement(x.a,{autoWidth:!0,value:d,onChange:function(e){p(e.target.value)},displayEmpty:!0,IconComponent:I.a},c.a.createElement(L.a,{disabled:!0,value:""},c.a.createElement("span",{className:"disabled-item"},"Ch\u01b0a ph\xe2n lo\u1ea1i")),F.map((function(e){return c.a.createElement(L.a,{key:e.value,value:e.value},e.name)})))))}return Object(n.useEffect)((function(){k>576&&j(!1)}),[k]),Object(n.useEffect)((function(){N.current?function(){S.apply(this,arguments)}():N.current=!0}),[m]),Object(n.useEffect)((function(){y.current?function(){C.apply(this,arguments)}():y.current=!0}),[d]),c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{className:"table-row"},c.a.createElement("td",null,c.a.createElement("div",{className:"user",onClick:function(){k<=576&&j(!O)}},c.a.createElement(P.a,{title:(t=a.status,t?"Ho\u1ea1t \u0111\u1ed9ng":"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng")},c.a.createElement("img",{className:"user__avatar ".concat(a.status&&"online"),src:a.avatar||"http://vietid.vcmedia.vn/thumb_w/100/vietid/image/avatars/default.png",alt:"avt"})),c.a.createElement("div",{className:"user__info"},c.a.createElement("div",{className:"user__info__name"},a.fullName),c.a.createElement("div",null,"owner: ",a.phoneOwner)))),k>576&&c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{width:"200",align:"right"},_()),c.a.createElement("td",{width:"200",align:"right"},T())),c.a.createElement("td",{width:"100",align:"center"},c.a.createElement(K.a,{className:"icon icon-edit"}),c.a.createElement(I.a,{className:"icon icon-expand"}))),c.a.createElement(D.a,{in:O,timeout:"auto",unmountOnExit:!0},c.a.createElement("div",{className:"expand"},c.a.createElement("div",{className:"row"},c.a.createElement("label",null,"Nh\xe3n: "),_()),(1===m||3===m)&&c.a.createElement("div",{className:"row"},c.a.createElement("label",null,"Lo\u1ea1i: "),T()))))},A=function(e){var t=e.users,a=w();return t?c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"NH\xc0 S\u1ea2N XU\u1ea4T"),a>576&&c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{width:"200"},"NH\xc3N"),c.a.createElement("td",{width:"200"},"LO\u1ea0I")),c.a.createElement("td",{width:"100"}))),c.a.createElement("tbody",null,t&&t.map((function(e){return c.a.createElement(V,{key:null===e||void 0===e?void 0:e.id,user:e})}))))):c.a.createElement("div",{className:"no-data"},"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u")},M=(a(144),a(145),a(66)),U=a.n(M),Y=a(95),G=a.n(Y),J=a(94),Z=a.n(J),X=a(195),$=a(93),q=a.n($),Q=a(196),ee=a(96),te=a.n(ee),ae=[{name:"Ho\u1ea1t \u0111\u1ed9ng",value:1},{name:"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng",value:0}],ne=function(e){var t=e.label,a=e.status,r=e.keyword,l=e.setLabel,u=e.setStatus,o=e.setKey,i=e.setCurrentPage,m=Object(n.useState)(t),v=Object(s.a)(m,2),f=v[0],b=v[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),E=p[0],g=p[1],O=Object(n.useState)(r||E),j=Object(s.a)(O,2),N=j[0],y=j[1],k=Object(n.useState)(a),S=Object(s.a)(k,2),C=S[0],x=S[1],L=Object(n.useState)(!1),P=Object(s.a)(L,2),_=P[0],K=P[1],T=w(),I=Object(n.useRef)(null),D={options:ae,getOptionLabel:function(e){return e.name},getOptionSelected:function(e,t){return e.value===t}},B={options:h,getOptionLabel:function(e){return e.name},getOptionSelected:function(e,t){return e.value===t}};function H(){b(""),y(""),g(""),x(""),i(1)}function F(e){e.preventDefault(),o(E),H()}var R=function(){K(!_)};return c.a.createElement("div",{className:"search"},c.a.createElement("div",null),c.a.createElement("form",{onSubmit:F},c.a.createElement("div",{className:"search-box"},T<576?c.a.createElement("div",null,c.a.createElement(U.a,{className:"icon icon-search",onClick:R})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search-box__p1"},c.a.createElement(U.a,{className:"icon icon-search",onClick:F}),c.a.createElement("input",{type:"text",value:E,onChange:function(e){return g(e.target.value)},placeholder:"T\xecm ki\u1ebfm..."})),c.a.createElement("div",{className:"search-box__p2"},E&&c.a.createElement(q.a,{className:"icon icon-clear-input",onClick:function(){return g("")}}),_?c.a.createElement(Z.a,{className:"icon",onClick:R}):c.a.createElement(G.a,{className:"icon",onClick:R}))))),_&&c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),K(!1),o(N),l(f),u(C),H()},ref:I},c.a.createElement("div",{className:"backdrop",onClick:function(){return K(!_)}}),c.a.createElement("div",{className:"form"},c.a.createElement(te.a,{className:"icon icon-back",onClick:function(){return K(!_)}}),c.a.createElement(Q.a,{type:"text",value:N,onChange:function(e){return y(e.target.value)},placeholder:"T\xecm ki\u1ebfm..."}),c.a.createElement(X.a,Object.assign({},B,{onChange:function(e,t){b(t?t.value:"")},renderInput:function(e){return c.a.createElement(Q.a,Object.assign({},e,{placeholder:"Nh\xe3n ph\xe2n lo\u1ea1i",value:f}))}})),c.a.createElement(X.a,Object.assign({},D,{onChange:function(e,t){x(t?t.value:"")},renderInput:function(e){return c.a.createElement(Q.a,Object.assign({},e,{placeholder:"Tr\u1ea1ng th\xe1i",value:C}))}})),c.a.createElement("button",{className:"btn",type:"submit"},"T\xecm ki\u1ebfm"))))},ce=a(193),re=a(13),le=a(65),ue=function(){var e=Object(re.f)(),t=new URLSearchParams(Object(re.g)().search),a=t.get("keyword"),r=t.get("label"),l=t.get("status"),u=Object(n.useState)([]),m=Object(s.a)(u,2),v=m[0],f=m[1],b=Object(n.useState)(1),d=Object(s.a)(b,2),p=d[0],E=d[1],g=Object(n.useState)(r||""),h=Object(s.a)(g,2),j=h[0],N=h[1],y=Object(n.useState)(l||""),k=Object(s.a)(y,2),S=k[0],w=k[1],x=Object(n.useState)(a||""),L=Object(s.a)(x,2),P=L[0],_=L[1],K=Object(n.useState)(!1),T=Object(s.a)(K,2),I=T[0],D=T[1],B=Object(n.useState)(0),H=Object(s.a)(B,2),F=H[0],R=H[1],W=Object(n.useState)(30),V=Object(s.a)(W,2),M=V[0],U=(V[1],Object(n.useState)(!1)),Y=Object(s.a)(U,2),G=Y[0],J=Y[1],Z=Object(n.useState)(0),X=Object(s.a)(Z,2),$=X[0],q=X[1];var Q=Object(n.useCallback)(Object(i.a)(o.a.mark((function a(){var n,c,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return D(!0),t.set("keyword",P),t.set("label",j),t.set("status",S),e.push({search:t.toString()}),a.prev=5,a.next=8,z.get("social/api/system/list_page_manager?PageIndex=".concat(p,"&PageSize=").concat(M,"&class=").concat(j,"&status=").concat(S,"&Keyword=").concat(P));case 8:n=a.sent,(c=n.data)&&(D(!1),f(null===(r=c.data)||void 0===r?void 0:r.data),R(c.data.total)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(5),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[5,13]])}))),[p,P,j,S]);return Object(n.useEffect)((function(){_(a||""),N(r||""),w(l||"")}),[e]),Object(n.useEffect)((function(){Q()}),[Q]),Object(n.useEffect)((function(){var e=Math.round(F/M);return F%M===0&&q(e),F%M!==0&&q(e+1),J(p*M>=F)}),[F,p,M]),c.a.createElement("div",{className:"account-list"},c.a.createElement("div",{className:"search-container"},c.a.createElement(ne,{label:j,keyword:P,status:S,setLabel:function(e){return N(e)},setKey:function(e){return _(e)},setStatus:function(e){return w(e)},setCurrentPage:E})),c.a.createElement("div",{className:"filter-container"},c.a.createElement(O,{label:j,keyword:P,status:S,setLabel:function(e){return N(e)},setKey:function(e){return _(e)},setStatus:function(e){return w(e)},setCurrentPage:E})),c.a.createElement("div",{className:"pagination-container"},v&&c.a.createElement(C,{currentPage:p,onNextPage:function(){E(p+1)},onPreviousPage:function(){p>1&&E(p-1)},onSetPage:function(e){return E(e)},isDisableNext:G,maxPage:$,users:v})),c.a.createElement("div",{className:"list-container"},I?c.a.createElement("div",{align:"center"},c.a.createElement(ce.a,null)):c.a.createElement(A,{users:v})))},oe=a(98),ie=function(e){Object(oe.a)(e);var t=Object(re.f)(),a=Object(n.useState)(""),r=Object(s.a)(a,2),l=r[0],u=r[1];function m(){return(m=Object(i.a)(o.a.mark((function e(a){var n,c,r,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("mobile",l),a.preventDefault(),(n=new FormData).set("mobile",l),e.prev=4,e.next=7,W.a.post("https://b11.cnnd.vn/g/api/user/send-sms-otp",n);case 7:u=e.sent,localStorage.setItem("token",null===u||void 0===u||null===(c=u.data)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.access_token),t.push("/otp"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return m.apply(this,arguments)}},c.a.createElement("input",{type:"text",value:l,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit"},"\u0110\u0103ng nh\u1eadp")))},se=a(44),me=function(){var e=Object(re.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];function u(){return(u=Object(i.a)(o.a.mark((function t(a){var n,c,l,u,i,s,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(n=new FormData).set("mobile",localStorage.getItem("mobile")),n.set("otp",r),t.prev=4,t.next=7,W.a.post("https://b11.cnnd.vn/g/api/user/confirm-sms-otp",n,{headers:{Authorization:"".concat(localStorage.getItem("token"))}});case 7:return s=t.sent,t.next=10,W.a.get("https://b11.cnnd.vn/g/api/user/get-api-token",{headers:{Authorization:"".concat(null===s||void 0===s||null===(c=s.data)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.access_token)}});case 10:m=t.sent,localStorage.setItem("token",null===m||void 0===m||null===(u=m.data)||void 0===u||null===(i=u.data)||void 0===i?void 0:i.access_token),e.push("/users"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[4,15]])})))).apply(this,arguments)}return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},c.a.createElement("input",{type:"number",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Ti\u1ebfp t\u1ee5c")))};var ve=function(){return c.a.createElement(le.ToastProvider,{autoDismissTimeout:1e3},c.a.createElement(se.a,null,c.a.createElement(re.c,null,c.a.createElement(re.a,{path:"/",exact:!0},c.a.createElement(ie,null)),c.a.createElement(re.a,{path:"/users"},c.a.createElement(ue,null)),c.a.createElement(re.a,{path:"/otp"},c.a.createElement(me,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.0a26fa01.chunk.js.map