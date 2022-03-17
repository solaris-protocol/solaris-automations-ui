(this["webpackJsonpsolaris-automations-ui"]=this["webpackJsonpsolaris-automations-ui"]||[]).push([[0],{253:function(e,t){},257:function(e,t){},275:function(e,t){},276:function(e,t){},334:function(e,t,c){},346:function(e,t,c){},347:function(e,t,c){},348:function(e,t,c){},349:function(e,t,c){},350:function(e,t,c){},351:function(e,t,c){},352:function(e,t,c){},353:function(e,t,c){},354:function(e,t,c){},355:function(e,t,c){},356:function(e,t,c){},357:function(e,t,c){},358:function(e,t,c){},359:function(e,t,c){},360:function(e,t,c){},361:function(e,t,c){},366:function(e,t,c){},367:function(e,t,c){},368:function(e,t,c){},369:function(e,t,c){},370:function(e,t,c){},371:function(e,t,c){},372:function(e,t,c){},373:function(e,t,c){},374:function(e,t,c){},386:function(e,t,c){},387:function(e,t,c){},388:function(e,t,c){},395:function(e,t,c){},396:function(e,t,c){},397:function(e,t,c){},398:function(e,t,c){},399:function(e,t,c){},400:function(e,t,c){},401:function(e,t,c){"use strict";c.r(t),c.d(t,"global",(function(){return Rc}));var n=c(0),a=c.n(n),r=(c(247),c(248),c(48)),s=c.n(r),i=c(85),l=c(39),j=c(426),o=c(16),b=c(12),d=c(427),u=c(18),O=c(41),h=c(45),m=c(63),v=c.n(m),x=c(4),f=["value","onChange","className"],p=Object(j.a)("input")({name:"InputElement",class:"ir7wlgy"}),g=function(e){var t=e.value,c=e.onChange,a=e.className,r=Object(O.a)(e,f),s=Object(n.useState)(String(t)),i=Object(b.a)(s,2),l=i[0],j=i[1];Object(n.useEffect)((function(){var e=Number(t)===Number(l),c="."===l.slice(-1),n=".0"===l.slice(-2);e&&(e||c||n)||j(String(t))}),[t]);return Object(x.jsx)(p,Object(u.a)(Object(u.a)({},r),{},{value:l,onChange:function(e){if(c){var t=e.target.value.replace(",",".").replace(/[^\d.,]/g,"").replace(/^0(\d+)/g,"$1").replace(/^(\d*\.?)|(\d*)\.?/g,"$1$2");"."===t&&(t="0."),e.target.value=t,j(e.target.value),c(e)}},className:v()(a,{isZero:!l})}))};c(334);var w=c(37),k=c.n(w),S=c(213),C=c.n(S),y=Object(j.a)("div")({name:"Wrapper",class:"w7mvqpp"}),M=function(e){var t=e.address,c=e.style,a=e.className,r="string"===typeof t?t:null===t||void 0===t?void 0:t.toBase58(),s=Object(n.useRef)();return Object(n.useEffect)((function(){t&&s.current&&(s.current.innerHTML="",s.current.className=a||"",s.current.appendChild(C()((null===c||void 0===c?void 0:c.width)||16,parseInt(k.a.decode(r).toString("hex").slice(5,15),16))))}),[t,r,c,a]),Object(x.jsx)(y,{ref:s,style:c})};c(346);var W=function(e){var t=e.token,c=e.size,n=e.style,a=e.className,r=c||20;return null!==t&&void 0!==t&&t.icon?Object(x.jsx)("img",{alt:"Token icon",src:t.icon,width:(null===n||void 0===n?void 0:n.width)||r.toString(),height:(null===n||void 0===n?void 0:n.height)||r.toString(),style:Object(u.a)({borderRadius:"50%",backgroundColor:"#2E1C34"},n),className:a},t.icon):Object(x.jsx)(M,{address:t.address,style:Object(u.a)({width:c,height:c,borderRadius:"50%"},n),className:a})},N=Object(j.a)("div")({name:"Wrapper",class:"w1bp89y5"}),z=Object(j.a)("div")({name:"Row",class:"r8cxz2"}),A=Object(j.a)(W)({name:"TokenIconStyled",class:"t4mmn6"}),B=Object(j.a)(g)({name:"InputStyled",class:"i1afufoc"}),P=function(e){var t=e.token,c=e.amount,n=e.setAmount;return Object(x.jsx)(N,{children:Object(x.jsxs)(z,{children:[t?Object(x.jsx)(A,{token:t,size:35}):null,Object(x.jsx)(B,{placeholder:"0.00",value:c,onChange:function(e){n(Number(e.target.value))}})]})})};c(347);var I=Object(j.a)("button")({name:"Button",class:"bclxasy"}),T=Object(j.a)("span")({name:"StakeReceiveTitle",class:"s17jfg6m"});c(348);var D,E=Object(j.a)("div")({name:"Wrapper",class:"w1f5f6k4"}),R=function(){return Object(x.jsx)(E,{children:Object(x.jsx)(T,{children:"You receive"})})};c(349),function(e){e[e.AbsoluteValue=0]="AbsoluteValue",e[e.Percent=1]="Percent"}(D||(D={}));var H=c(425),L=["noAnimation","back","title","close","children"],F=Object(j.a)("div")({name:"Wrapper",class:"w16mrg2b"}),q=Object(j.a)("div")({name:"OutsideWrapper",class:"o1a6zfff"}),V=Object(j.a)("h1")({name:"Header",class:"h461821"}),$=Object(j.a)("div")({name:"Main",class:"m17ja5x5"}),U=Object(j.a)("div")({name:"Content",class:"c1rfsa5s"}),J=function(e){var t=e.noAnimation,c=(e.back,e.title),a=e.close,r=e.children,s=Object(O.a)(e,L),i=Object(n.useRef)(null);return Object(x.jsx)(H.a,Object(u.a)(Object(u.a)({timeout:t?0:600,classNames:"transition"},s),{},{children:Object(x.jsx)(q,{onMouseDown:function(e){var t;e.target!==e.currentTarget&&null!==(t=i.current)&&void 0!==t&&t.contains(e.target)||a()},children:Object(x.jsx)(F,{ref:i,children:Object(x.jsxs)($,{children:[Object(x.jsx)(V,{children:c}),Object(x.jsx)(U,{children:r})]})})})}))};c(350);var X,Y=Object(j.a)("div")({name:"Wrapper",class:"w63g6i1"}),G=Object(j.a)("input")({name:"RangeInput",class:"rdh3cfh"}),Z=Object(j.a)("div")({name:"Marks",class:"m1um5jzb"}),K=Object(j.a)("span")({name:"Text",class:"t9ok9v7"}),Q=Object(j.a)("span")({name:"Handle",class:"h18552wv"}),_=function(e){var t=e.value,c=e.min,n=e.max,a=e.onChange,r=Math.floor(t*n/100);return Object(x.jsxs)(Y,{children:[Object(x.jsx)(G,{type:"range",value:t,onChange:function(e){a(Number(e.target.value))}}),Object(x.jsxs)(Z,{children:[Object(x.jsxs)(K,{children:[c,"x"]}),Object(x.jsxs)(Q,{children:[r,"x"]}),Object(x.jsxs)(K,{children:[n,"x"]})]})]})};function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},ee.apply(this,arguments)}c(351);var te=function(e){return n.createElement("svg",ee({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),X||(X=n.createElement("path",{d:"M17.5 4.166v-.833c0-1.379-1.121-2.5-2.5-2.5H2.5a2.502 2.502 0 00-2.5 2.5v13.333c0 1.38 1.121 2.5 2.5 2.5h15c1.379 0 2.5-1.12 2.5-2.5v-10c0-1.378-1.121-2.5-2.5-2.5zM2.5 2.5H15c.46 0 .833.373.833.833v.833H2.5a.834.834 0 010-1.666zm15 15h-15a.834.834 0 01-.833-.834V5.69c.26.093.54.143.833.143h15c.46 0 .833.374.833.833V8.75H13.75a2.92 2.92 0 00-2.917 2.916 2.92 2.92 0 002.917 2.917h4.583v2.083c0 .46-.373.834-.833.834zm.833-4.584h-1.95a2.898 2.898 0 00-.002-2.5h1.952v2.5zm-5.833-1.25c0-.689.56-1.25 1.25-1.25a1.252 1.252 0 01.889 2.133 1.252 1.252 0 01-2.139-.883z",fill:"currentColor"})))},ce=Object(j.a)("button")({name:"ButtonElement",class:"b1bxi81d"}),ne=function(e){var t=Object.assign({},e);return Object(x.jsx)(ce,Object(u.a)(Object(u.a)({},t),{},{children:"Max"}))};c(352);var ae=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),re=function(e){return ae.format(e||0)};new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2});var se=Object(j.a)("div")({name:"Wrapper",class:"w1980ex8"}),ie=Object(j.a)("div")({name:"Column",class:"c1ivzoeh"}),le=Object(j.a)("div")({name:"WalletBalance",class:"wt4iown"}),je=Object(j.a)(te)({name:"WalletIconStyled",class:"w1k0ta18"}),oe=Object(j.a)(ne)({name:"ButtonMaxStyled",class:"b9md13j"}),be=function(e){e.token;return Object(x.jsxs)(se,{children:[Object(x.jsx)(ie,{children:Object(x.jsx)(T,{children:"You stake"})}),Object(x.jsxs)(ie,{children:[Object(x.jsxs)(le,{title:String(111),children:[Object(x.jsx)(je,{}),re(11)]}),Object(x.jsx)(oe,{})]})]})};c(353);var de=["close"],ue=Object(j.a)(I)({name:"ButtonStyled",class:"bnlx6mf"});c(354);var Oe=["noAnimation","back","title","close","children"],he=Object(j.a)("div")({name:"OutsideWrapper",class:"o1elofa7"}),me=Object(j.a)("div")({name:"Wrapper",class:"w1xqhsc8"}),ve=Object(j.a)("div")({name:"Content",class:"c1ifjvn"}),xe=function(e){var t=e.noAnimation,c=(e.back,e.title,e.close),n=e.children,a=Object(O.a)(e,Oe);return Object(x.jsx)(he,{onMouseDown:function(e){e.target===e.currentTarget&&c()},children:Object(x.jsx)(H.a,Object(u.a)(Object(u.a)({timeout:t?0:600,classNames:"transition"},a),{},{children:Object(x.jsx)(me,{children:Object(x.jsx)(ve,{children:n})})}))})};c(355);var fe=Object(j.a)("div")({name:"Wrapper",class:"w1od1a7i"}),pe=Object(j.a)("div")({name:"Menu",class:"m1vuvqku"}),ge=Object(j.a)("button")({name:"Button",class:"bi14o9o"}),we=Object(j.a)("button")({name:"CancelButton",class:"c1rd46db"}),ke=function(e){return Object(x.jsxs)(fe,{children:[Object(x.jsxs)(pe,{children:[Object(x.jsx)(ge,{className:v()({active:!0}),children:"Open"}),Object(x.jsx)(ge,{children:"History"})]}),Object(x.jsx)(we,{children:"Cancel All"})]})};c(356);var Se=Object(j.a)("div")({name:"Wrapper",class:"w1rd1ct3"}),Ce=Object(j.a)("span")({name:"Time",class:"t8c9jv6"}),ye=function(e){e.setState;return Object(x.jsx)(Se,{children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Date"}),Object(x.jsx)("th",{children:"Size"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Lev."}),Object(x.jsx)("th",{children:"Borrowed"})]})}),Object(x.jsx)("tbody",{className:"orders",children:new Array(5).fill(1).map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{className:"date",children:["2.21.2022 ",Object(x.jsx)(Ce,{children:"10:12:15 AM"})]}),Object(x.jsx)("td",{children:"250.00"}),Object(x.jsx)("td",{children:"90.70"}),Object(x.jsx)("td",{children:"2x"}),Object(x.jsx)("td",{children:"$9,098 USDC"})]},t)}))}),Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Date"}),Object(x.jsx)("th",{children:"Size"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"S/L"}),Object(x.jsx)("th",{children:"T/P"})]})}),Object(x.jsx)("tbody",{children:new Array(5).fill(1).map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:["2.21.2022 ",Object(x.jsx)(Ce,{children:"10:12:15 AM"})]}),Object(x.jsx)("td",{children:"250.00"}),Object(x.jsx)("td",{children:"90.70"}),Object(x.jsx)("td",{children:"10%"}),Object(x.jsx)("td",{children:"10%"})]},t)}))})]})})};c(357);var Me=c(214),We=Object(j.a)("div")({name:"Wrapper",class:"w1rzw7tk"}),Ne=Object(j.a)("label")({name:"ItemLabelWrapper",class:"inb2d5q"}),ze=function(e){return Object(x.jsx)(We,{onChange:function(e){},children:Object.keys(Me.a).map((function(e){return Object(x.jsx)(Ne,{children:"1"},e)}))})};c(358);var Ae=["close"],Be=["noAnimation","back","title","close","children"],Pe=Object(j.a)("div")({name:"Wrapper",class:"w1gaf6o3"}),Ie=Object(j.a)("div")({name:"OutsideWrapper",class:"o1ufh4br"}),Te=Object(j.a)("h1")({name:"Header",class:"hawn4nt"}),De=Object(j.a)("div")({name:"Main",class:"m1lwgwrg"}),Ee=Object(j.a)("div")({name:"Content",class:"czj0pzw"}),Re=Object(j.a)("span")({name:"Footer",class:"ftyk41h"}),He=function(e){var t=e.noAnimation,c=(e.back,e.title,e.close),a=e.children,r=Object(O.a)(e,Be),s=Object(n.useRef)(null);return Object(x.jsx)(H.a,Object(u.a)(Object(u.a)({timeout:t?0:600,classNames:"transition"},r),{},{children:Object(x.jsx)(Ie,{onMouseDown:function(e){var t;e.target!==e.currentTarget&&null!==(t=s.current)&&void 0!==t&&t.contains(e.target)||c()},children:Object(x.jsxs)(Pe,{children:[Object(x.jsx)(Te,{children:"Stake your SOL"}),Object(x.jsx)(De,{ref:s,children:Object(x.jsx)(Ee,{children:a})}),Object(x.jsxs)(Re,{children:["We'll create a new stake account for you and delegate it to one of the validators in the pool.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"You can claim your slsSOL two epochs later when the stake will be fully active and receive one epoch of rewards."]})]})})}))};c(359);var Le=Object(j.a)("div")({name:"Wrapper",class:"w1adhwy9"}),Fe=Object(j.a)("div")({name:"Column",class:"c17gtoum"}),qe=Object(j.a)("div")({name:"WalletBalance",class:"w1jvw1gm"}),Ve=Object(j.a)(te)({name:"WalletIconStyled",class:"wwjw3zn"}),$e=Object(j.a)(ne)({name:"ButtonMaxStyled",class:"b1q33bar"}),Ue=function(e){e.token;return Object(x.jsxs)(Le,{children:[Object(x.jsx)(Fe,{children:Object(x.jsx)(T,{children:"You stake"})}),Object(x.jsxs)(Fe,{children:[Object(x.jsxs)(qe,{title:String(111),children:[Object(x.jsx)(Ve,{}),re(11)]}),Object(x.jsx)($e,{})]})]})};c(360);var Je=["close"],Xe=Object(j.a)("div")({name:"Delimiter",class:"d18oosec"}),Ye=Object(j.a)(I)({name:"ButtonStyled",class:"b7amyvc"});c(361);var Ge,Ze,Ke=new Map([["orders",function(e){var t=e.close,c=Object(O.a)(e,Ae),a=Object(n.useState)("main"),r=Object(b.a)(a,2),s=r[0],i=r[1],l=Object(n.useMemo)((function(){return"network"===s?{title:"Network",back:function(){return i("main")},component:Object(x.jsx)(ze,{setState:i})}:{title:"Network",component:Object(x.jsx)(ye,{setState:i})}}),[s,i]),j=l.title,o=l.back,d=l.component;return Object(x.jsxs)(xe,Object(u.a)(Object(u.a)({back:o,title:j,close:t},c),{},{children:[Object(x.jsx)(ke,{}),d]}))}],["stake",function(e){var t=e.close,c=Object(O.a)(e,Je),a=Object(h.p)("So11111111111111111111111111111111111111112"),r=Object(h.p)("So11111111111111111111111111111111111111113"),s=Object(n.useState)(1),i=Object(b.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(1),d=Object(b.a)(o,2),m=d[0],v=d[1];return Object(x.jsxs)(He,Object(u.a)(Object(u.a)({title:"Select wallet",close:t},c),{},{children:[Object(x.jsx)(Ue,{token:a.data}),Object(x.jsx)(P,{token:a.data,amount:l,setAmount:j}),Object(x.jsx)(Xe,{}),Object(x.jsx)(R,{}),Object(x.jsx)(P,{token:r.data,amount:m,setAmount:v}),Object(x.jsx)(Ye,{onClick:function(){return j(0)},children:"Stake"})]}))}],["leverage",function(e){var t=e.close,c=Object(O.a)(e,de),a=Object(h.p)("So11111111111111111111111111111111111111112"),r=Object(h.p)("So11111111111111111111111111111111111111113"),s=Object(n.useState)(1),i=Object(b.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(1),d=Object(b.a)(o,2),m=d[0],v=d[1],f=function(e){var t=Object(n.useState)(""),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(0),i=Object(b.a)(s,2),l=i[0],j=i[1],o=Object(n.useState)(D.Percent),d=Object(b.a)(o,2),u=d[0],O=d[1];return{value:a,setValue:Object(n.useCallback)((function(t){O(D.AbsoluteValue),r(t),j(e(t))}),[O,r,j,e]),pct:l,setPct:Object(n.useCallback)((function(t){O(D.Percent),j(t),r(e(t))}),[O,r,j,e]),type:u}}(Object(n.useCallback)((function(e){return"string"===typeof e?parseFloat(e)/54*100:Math.floor(54*e/100)}),[54])),p=f.value,g=(f.setValue,f.pct),w=f.setPct;return Object(x.jsxs)(J,Object(u.a)(Object(u.a)({title:"Leveraged Position",close:t},c),{},{children:[Object(x.jsx)(be,{token:a.data}),Object(x.jsx)(P,{token:a.data,amount:l,setAmount:j}),Object(x.jsx)(R,{}),p,Object(x.jsx)(P,{token:r.data,amount:m,setAmount:v}),Object(x.jsx)(_,{value:g,min:1,max:54,onChange:function(e){return w(e)}}),Object(x.jsx)(ue,{onClick:function(){return j(0)},children:"Create order"})]}))}]]),Qe=0,_e=a.a.createContext({openModal:function(){},closeModal:function(){},closeTopModal:function(){}});function et(e){var t=e.children,c=void 0===t?null:t,a=Object(n.useState)([]),r=Object(b.a)(a,2),s=r[0],i=r[1],l=Object(n.useCallback)((function(e,t){i((function(c){return[].concat(Object(o.a)(c),[{modalName:e,modalId:++Qe,props:t}])}))}),[]),j=Object(n.useCallback)((function(e,t){return i((function(t){return t.filter((function(t){return t.modalId!==e}))})),t}),[]),u=Object(n.useCallback)((function(){i((function(e){return e.slice(0,e.length-1)}))}),[]),O=Object(n.useMemo)((function(){return s.map((function(e){var t=Ke.get(e.modalName);return t?Object(x.jsx)(t,{close:function(t){return j(e.modalId,t)}},e.modalId):null}))}),[s,j]);return Object(x.jsxs)(_e.Provider,{value:{openModal:l,closeModal:j,closeTopModal:u},children:[c,Object(x.jsx)(d.a,{children:O})]})}function tt(){var e=Object(n.useContext)(_e);return{openModal:e.openModal,closeModal:e.closeModal,closeTopModal:e.closeTopModal}}function ct(){return ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},ct.apply(this,arguments)}var nt=function(e){return n.createElement("svg",ct({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Ge||(Ge=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 8a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",fill:"currentColor"})),Ze||(Ze=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 1a1 1 0 10-2 0v1.05A10.003 10.003 0 002.05 11H1a1 1 0 100 2h1.05A10.003 10.003 0 0011 21.95V23a1 1 0 102 0v-1.05A10.003 10.003 0 0021.95 13H23a1 1 0 100-2h-1.05A10.003 10.003 0 0013 2.05V1zm-1 19a8 8 0 110-16 8 8 0 010 16z",fill:"currentColor"})))};var at="dev";function rt(){var e=new URLSearchParams(Object(l.f)().search).get(at),t=localStorage.getItem(at);return Object(n.useMemo)((function(){return t?Boolean(t):!!e&&(localStorage.setItem(at,"1"),Boolean(e))}),[e,t])}var st=Object(j.a)("div")({name:"Wrapper",class:"wmmmzq7"}),it=Object(j.a)("a")({name:"ButtonTopA",class:"b1geqtha"});c(366);var lt=Object(j.a)("div")({name:"TopWrapper",class:"t1j053hg"}),jt=Object(j.a)("div")({name:"Logo",class:"lghw8pb"}),ot=Object(j.a)(it)({name:"ButtonTopAStyled",class:"b1i4zjdo"}),bt=function(){rt(),tt().openModal;return Object(x.jsx)(st,{children:Object(x.jsxs)(lt,{children:[Object(x.jsx)(i.b,{to:"/",isActive:function(e,t){return["/"].includes(t.pathname)},component:ot,children:Object(x.jsx)(jt,{})}),Object(x.jsx)(i.b,{to:"/strategies",isActive:function(e,t){return["/strategies"].includes(t.pathname)},component:ot,children:Object(x.jsx)(nt,{})})]})})};c(367);var dt=Object(j.a)("div")({name:"PlaceHandler",class:"p1eeg67u"}),ut=Object(j.a)("div")({name:"Main",class:"m1n9xewn"}),Ot=function(){return Object(x.jsx)(dt,{children:Object(x.jsx)(ut,{children:Object(x.jsx)(bt,{})})})};c(368);var ht=Object(j.a)("div")({name:"Wrapper",class:"wswamp6"}),mt=Object(j.a)("div")({name:"Content",class:"c1v5i9nx"}),vt=function(e){var t=e.children;return Object(x.jsxs)(ht,{children:[Object(x.jsx)(Ot,{}),Object(x.jsx)(mt,{children:t})]})};c(369);var xt=["children","className"],ft=Object(j.a)("div")({name:"Wrapper",class:"w10en8a9"}),pt=function(e){var t=e.children,c=e.className,n=Object(O.a)(e,xt);return Object(x.jsx)(ft,Object(u.a)(Object(u.a)({},n),{},{className:c,children:t}))};c(370);var gt=Object(j.a)(pt)({name:"CardStyled",class:"cke8nb3"}),wt=Object(j.a)("div")({name:"Title",class:"t97eb73"}),kt=function(e){var t=e.title,c=e.children,n=e.className;return Object(x.jsxs)(gt,{className:n,children:[t?Object(x.jsx)(wt,{children:t}):null,c]})};c(371);var St=Object(j.a)("div")({name:"Wrapper",class:"w1naozl7"}),Ct=Object(j.a)("div")({name:"InfoWrapper",class:"i1fy5th9"}),yt=Object(j.a)("div")({name:"Top",class:"t1ik7ki"}),Mt=Object(j.a)("div")({name:"Bottom",class:"bhu1dlw"}),Wt=function(e){var t=e.token;return Object(x.jsxs)(St,{children:[t?Object(x.jsx)(W,{token:t,size:35}):null,Object(x.jsxs)(Ct,{children:[Object(x.jsxs)(yt,{children:[Object(x.jsx)("div",{children:null===t||void 0===t?void 0:t.symbol}),Object(x.jsx)("div",{children:"750.589"})]}),Object(x.jsxs)(Mt,{children:[Object(x.jsx)("div",{children:null===t||void 0===t?void 0:t.name}),Object(x.jsx)("div",{children:"$69,804.77"})]})]})]})};c(372);var Nt=Object(j.a)("div")({name:"Wrapper",class:"w1c7uajo"}),zt=function(e){var t=Object(h.p)("So11111111111111111111111111111111111111112"),c=Object(h.p)("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");return Object(x.jsxs)(Nt,{children:[Object(x.jsx)(Wt,{token:t.data}),Object(x.jsx)(Wt,{token:c.data})]})};c(373);var At=Object(j.a)(kt)({name:"DashboardCardStyled",class:"d1phwpvb"}),Bt=function(e){return Object(x.jsx)(At,{title:"Assets",children:Object(x.jsx)(zt,{})})};c(374);var Pt=c(228),It=c.n(Pt),Tt=c(421),Dt=c(419),Et=c(424),Rt=c(423),Ht=c(420),Lt=c(422),Ft=c(417),qt=c(418),Vt=function(e){return new Date(e.time)},$t=function(e){return e.price},Ut=function(e){var t=e.data,c=e.parentWidth,a=void 0===c?600:c,r=e.parentHeight,s=void 0===r?237:r,i=e.margin,l=void 0===i?{top:0,right:0,bottom:0,left:0}:i,j=a-l.left-l.right,o=s-l.top-l.bottom,b=Object(n.useMemo)((function(){return Object(Et.a)({range:[l.left,j+l.left],domain:Object(Ft.a)(t,Vt)})}),[t,j,l.left]),d=Object(n.useMemo)((function(){return Object(Rt.a)({range:[o+l.top,l.top],domain:[0,(Object(qt.a)(t,$t)||0)+o/3],nice:!0})}),[o,l.top,t]);return console.log(111,t),Object(x.jsx)("div",{children:Object(x.jsxs)("svg",{width:j,height:o,children:[Object(x.jsx)(Dt.a,{id:"stroke-gradient",from:"#00FFA3",to:"#02CCFC"}),Object(x.jsx)(Dt.a,{id:"area-gradient",from:"rgba(0, 255, 163, 0.332)",fromOffset:"-15.36%",to:"rgba(2, 204, 252, 0.008)",toOffset:"92.83%"}),Object(x.jsx)(Ht.a,{data:t,x:function(e){var t;return null!==(t=b(Vt(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=d($t(e)))&&void 0!==t?t:0},stroke:"url(#stroke-gradient)",strokeWidth:3,shapeRendering:"geometricPrecision",curve:Tt.a}),Object(x.jsx)(Lt.a,{data:t,x:function(e){var t;return null!==(t=b(Vt(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=d($t(e)))&&void 0!==t?t:0},yScale:d,fill:"url(#area-gradient)",curve:Tt.a})]})})},Jt=Object(j.a)(kt)({name:"DashboardCardStyled",class:"d1dq7h1l"}),Xt=Object(j.a)("div")({name:"Top",class:"t87ziki"}),Yt=Object(j.a)("div")({name:"BalanceWrapper",class:"bsfzewi"}),Gt=Object(j.a)("div")({name:"Balance",class:"bz7v9nz"}),Zt=Object(j.a)("div")({name:"Diff",class:"d1cgdtr2"}),Kt=Object(j.a)("div")({name:"IntervalSelector",class:"ia4ujb"}),Qt=Object(j.a)("button")({name:"IntervalButton",class:"ivf1gbi"}),_t={"1h":"1 h","1d":"1 d","1w":"1 w","1m":"1 m",all:"all"},ec=function(e){var t=Object(n.useState)({bpi:[]}),c=Object(b.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(_t.all),i=Object(b.a)(s,2),l=i[0],j=i[1];Object(n.useEffect)((function(){fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var o=Object(n.useMemo)((function(){if(a.bpi)return Object.entries(a.bpi).map((function(e){var t=Object(b.a)(e,2);return{time:t[0],price:t[1]}}))}),[a.bpi]);return o?Object(x.jsxs)(Jt,{children:[Object(x.jsxs)(Xt,{children:[Object(x.jsxs)(Yt,{children:[Object(x.jsx)(Gt,{children:"$74,350.35"}),Object(x.jsx)(Zt,{children:"+4.04% ($2,702.12)"})]}),Object(x.jsx)("div",{children:Object(x.jsx)(Kt,{children:Object.entries(_t).map((function(e){var t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(x.jsx)(Qt,{onClick:function(){return j(c)},className:v()({active:l===c}),children:n},c)}))})})]}),Object(x.jsx)(It.a,{children:function(e){var t=e.width;e.height;return Object(x.jsx)(Ut,{data:o,parentWidth:t,parentHeight:272})}})]}):Object(x.jsx)("div",{children:"loading..."})};c(386);var tc=Object(j.a)(kt)({name:"DashboardCardStyled",class:"d8jze08"}),cc=Object(j.a)("span")({name:"Time",class:"t1c4sazv"}),nc=function(e){return Object(x.jsx)(tc,{title:"Orders History",children:Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Date"}),Object(x.jsx)("th",{children:"Size"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"S/L"}),Object(x.jsx)("th",{children:"T/P"})]})}),Object(x.jsx)("tbody",{children:new Array(5).fill(1).map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:["2.21.2022 ",Object(x.jsx)(cc,{children:"10:12:15 AM"})]}),Object(x.jsx)("td",{children:"250.00"}),Object(x.jsx)("td",{children:"90.70"}),Object(x.jsx)("td",{children:"10%"}),Object(x.jsx)("td",{children:"10%"})]},t)}))})]})})};c(387);var ac=Object(j.a)("button")({name:"Button",class:"b1lmzx51"});c(388);var rc=c(96),sc=Object(j.a)(ac)({name:"ButtonStyled",class:"b6efddd"}),ic=Object(j.a)(te)({name:"WalletIconStyled",class:"w7eocjj"}),lc=function(e){var t=Object(rc.c)().connect,c=Object(rc.b)().connected,n=Object(h.m)().nativeBalance;return c?Object(x.jsxs)(sc,{children:[Object(x.jsx)(ic,{})," ",null===n||void 0===n?void 0:n.formatUnits()]}):Object(x.jsxs)(sc,{onClick:t,className:"connect",children:[Object(x.jsx)(ic,{})," Connect wallet"]})};c(395);var jc=Object(j.a)("div")({name:"Wrapper",class:"w1nbr4c7"}),oc=Object(j.a)("div")({name:"Title",class:"t1n4bgvd"}),bc=Object(j.a)("div")({name:"Right",class:"r1apcyzj"}),dc=function(e){var t=e.title,c=tt().openModal;return Object(x.jsxs)(jc,{children:[Object(x.jsx)(oc,{children:t}),Object(x.jsxs)(bc,{children:[Object(x.jsx)(ac,{onClick:function(){return c("orders")},children:"My orders"}),Object(x.jsx)(lc,{})]})]})};c(396);var uc=Object(j.a)("div")({name:"Wrapper",class:"w1tsxygv"}),Oc=Object(j.a)("div")({name:"Content",class:"coxfqfb"}),hc=function(e){return Object(x.jsxs)(uc,{children:[Object(x.jsx)(dc,{title:"Portfolio overview"}),Object(x.jsxs)(Oc,{children:[Object(x.jsx)(Bt,{}),Object(x.jsx)(ec,{}),Object(x.jsx)(nc,{})]})]})};c(397);var mc=Object(j.a)(pt)({name:"CardStyled",class:"c18pf18q"}),vc=Object(j.a)("div")({name:"Logo",class:"lcaj6ed"}),xc=Object(j.a)("div")({name:"Title",class:"trt4f3c"}),fc=Object(j.a)("div")({name:"Description",class:"dajvtnp"}),pc=Object(j.a)("div")({name:"ServicesWrapper",class:"s1s9lt7l"}),gc=Object(j.a)("div")({name:"ServiceWrapper",class:"smjx36w"}),wc=Object(j.a)("div")({name:"ServiceIcon",class:"s1le5ug2"}),kc=function(e){var t=e.logo,c=e.title,n=e.description,a=e.services,r=e.onCardClick;return Object(x.jsxs)(mc,{onClick:r,children:[Object(x.jsx)(vc,{className:t}),Object(x.jsx)(xc,{children:c}),Object(x.jsx)(fc,{children:n}),Object(x.jsx)(pc,{children:a.map((function(e){return Object(x.jsx)(gc,{children:Object(x.jsx)(wc,{className:e})},e)}))})]})};c(398);var Sc=Object(j.a)("div")({name:"Wrapper",class:"w1jwapmo"}),Cc=Object(j.a)("div")({name:"Content",class:"c14cfn5m"}),yc=function(e){var t=tt().openModal,c=Object(n.useCallback)((function(){t("leverage")}),[t]),a=Object(n.useCallback)((function(){t("stake")}),[t]);return Object(x.jsxs)(Sc,{children:[Object(x.jsx)(dc,{title:"Pre-made DEFI strategies"}),Object(x.jsxs)(Cc,{children:[Object(x.jsx)(kc,{logo:"leverage",title:"Leveraged Position",description:"Increase your margin by borrowing assets from the protocol.",services:["orca","solaris"],onCardClick:c}),Object(x.jsx)(kc,{logo:"sl_tp",title:"Stop-Loss / Take-Profit",description:"Create a limit order, which will be executed according to your target price.",services:["aave","maker","compound"],onCardClick:a}),Object(x.jsx)(kc,{logo:"lp",title:"Liquidation Protection",description:"Protect your positions on lending protocols from liquidation.",services:["orca","solaris"],onCardClick:c})]})]})};c(399);var Mc=c(49),Wc=c(25),Nc=c(28),zc=c(77),Ac=(new(c(232).a)).resolve(),Bc=Object(zc.a)((function(){var e=Object(Wc.e)().network,t=Object(Nc.o)(e),c=Object(n.useMemo)((function(){return function(e){var t={};return Ac.filter((function(t){return t.chainId===e})).forEach((function(e){t[e.address]=new Nc.h(e)})),t[Nc.e.toBase58()]=Nc.d[Object(Nc.j)(e)],e===Nc.b.Devnet&&(t.FsaLodPu4VmSwXGr3gWfwANe4vKf8XSZcCh1CEeJ3jpD=new Nc.h({chainId:101,address:"FsaLodPu4VmSwXGr3gWfwANe4vKf8XSZcCh1CEeJ3jpD",name:"renBTC",decimals:8,symbol:"RENBTC"})),t}(t)}),[t]),a=Object(n.useMemo)((function(){return t?c:{}}),[t,c]);return{tokens:Object(n.useMemo)((function(){return Object.values(a)}),[a]),tokenMap:a}})),Pc=Bc.Provider,Ic=(Bc.useContainer,c(8),c(231),new Mc.QueryClient),Tc=function(e){var t=e.children;return Object(x.jsx)(Wc.c,{children:Object(x.jsx)(Mc.QueryClientProvider,{client:Ic,children:Object(x.jsx)(h.f,{children:Object(x.jsx)(rc.a,{defaultNetwork:"devnet",app:{name:"Solaris Automations UI"},children:Object(x.jsx)(Pc,{children:Object(x.jsx)(et,{children:t})})})})})})},Dc=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(Tc,{children:Object(x.jsx)(vt,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:["/","/dashboard"],children:Object(x.jsx)(hc,{})}),Object(x.jsx)(l.a,{exact:!0,path:"/strategies",children:Object(x.jsx)(yc,{})})]})})})})})},Ec=function(){return Object(x.jsx)(Dc,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c(400);var Rc="grt2zvl";s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Ec,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[401,1,2]]]);