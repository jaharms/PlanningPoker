(window.webpackJsonpplanningpoker=window.webpackJsonpplanningpoker||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},24:function(e,t,n){},25:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(16),l=n.n(c),u=(n(24),n(1)),i=n(2),s=(n(25),function(e){var t=e.children,n=e.color,r=e.onClick,a=e.size;return o.a.createElement("div",{className:"card",style:{width:a||150,height:a||150,flex:1,justifyContent:"center",alignItems:"center",margin:8,background:n||"#fff",display:"inline-block"},onClick:r},t)}),f=function(e){var t=e.ownId,n=e.users,r=Object.keys(n).filter((function(e){return!!n[e]&&!!n[e].value})).length===Object.keys(n).length;return o.a.createElement("div",null,Object.keys(n).map((function(e){return o.a.createElement(s,{key:e},o.a.createElement("div",null,o.a.createElement("div",{style:{padding:16}},n[e].name),o.a.createElement("div",{style:{fontSize:80}},function(e){return void 0===n[e].value?"_":e===t?n[e].value:r?n[e].value:"?"}(e))))})))},v=[{value:"0",color:"#fff"},{value:"1",color:"#afa"},{value:"2",color:"#5f5"},{value:"3",color:"yellow"},{value:"5",color:"orange"},{value:"8",color:"red"},{value:"13",color:"violet"},{value:"20",color:"#bbb"},{value:"\ud83e\udd14",color:"#fff"}],d=function(e){var t=e.currentSelection,n=e.onClick;return o.a.createElement("div",null,v.map((function(e){var r=e.value,a=e.color;return o.a.createElement(s,{key:r,color:t?t===r?a:"white":a,size:50,onClick:function(){return n(r)}},o.a.createElement("div",{style:{fontSize:35}},r))})))},m=n(17),b=n.n(m);!function(e){e.CurrentValue="current_value",e.Leave="leave",e.RequestCurrentValue="request_current_value",e.Reset="reset"}(r||(r={}));var p=n(8),O=n.n(p),y=n(18);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=new b.a(4).format(),k=function(e,t,n){var a={type:r.CurrentValue,clientId:w,name:t,value:n};e.send(JSON.stringify(a))},E=Object(y.addUrlProps)({mapUrlToProps:function(e){return{room:e.room}}})((function(e){var t=e.room,n=void 0===t?"default":t,c=Object(a.useState)(!0),l=Object(i.a)(c,2),s=l[0],v=l[1],m=Object(a.useState)(Object(u.a)({},w,{name:localStorage.getItem("name")||"",value:void 0})),b=Object(i.a)(m,2),p=b[0],y=b[1],g=p[w],E=g.name,h=g.value,S=Object(a.useMemo)((function(){return new WebSocket("wss://connect.websocket.in/PlanningPokerApp?room_id=".concat(n))}),[n]),C=Object(a.useCallback)((function(e,t){k(S,e,t),y((function(n){return j({},n,Object(u.a)({},w,{name:e,value:t}))}))}),[S]),P=function(){y((function(e){return O()(e).toPairs().reduce((function(e,t){var n=Object(i.a)(t,2),r=n[0],a=n[1];return j({},e,Object(u.a)({},r,j({},a,{value:void 0})))}),{})}))};return Object(a.useEffect)((function(){window.onunload=function(){S.send(JSON.stringify({type:r.Leave,clientId:w}))}}),[S]),Object(a.useEffect)((function(){S.onopen=function(){v(!1),S.send(JSON.stringify({type:r.RequestCurrentValue})),k(S,E,h)},S.onmessage=function(e){var t=JSON.parse(e.data);if(t.type)switch(t.type){case r.CurrentValue:y((function(e){return j({},e,Object(u.a)({},t.clientId,{name:t.name,value:t.value}))}));break;case r.Leave:var n=t.clientId,a=O()(p).toPairs().filter((function(e){return Object(i.a)(e,1)[0]!==n})).reduce((function(e,t){var n=Object(i.a)(t,2),r=n[0],a=n[1];return j({},e,Object(u.a)({},r,j({},a,{value:void 0})))}),{});y(a);break;case r.RequestCurrentValue:k(S,E,h);break;case r.Reset:P();break;default:return}},S.onclose=function(e){}}),[E,S,p,h]),s?o.a.createElement("header",null,"Loading ..."):o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{flexDirection:"row",margin:16}},o.a.createElement("label",null,"Dein Name:",o.a.createElement("input",{style:{marginLeft:16},value:E,onChange:function(e){var t=e.target.value;localStorage.setItem("name",t),C(t,h)}}))),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){S.send(JSON.stringify({type:r.Reset})),P()}},"Reset")),o.a.createElement(d,{currentSelection:h,onClick:function(e){return C(E,e)}}),o.a.createElement(f,{ownId:w,users:p}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6b82a052.chunk.js.map