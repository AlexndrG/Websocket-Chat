(this["webpackJsonpwebsocket-chat"]=this["webpackJsonpwebsocket-chat"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(9),o=a.n(n),r=(a(14),a(8)),i=a(6),l=a(4),j=a.n(l),h=a(2),b=a.n(h),m=a(0),u=function(e){return Object(m.jsxs)("div",{className:b.a.container,children:[Object(m.jsxs)("div",{className:b.a.photoName,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:b.a.photo,src:e.img,alt:"Avatar"})}),Object(m.jsx)("div",{className:b.a.name,children:e.name})]}),Object(m.jsx)("div",{className:b.a.message,children:e.message})]})};var d=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(),a=Object(i.a)(t,2),s=a[0],n=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),h=l[0],b=l[1],d=Object(c.useState)([]),O=Object(i.a)(d,2),p=O[0],_=O[1];return s&&(s.onmessage=function(t){var a,c=JSON.parse(t.data);_([].concat(Object(r.a)(p),Object(r.a)(c))),null===(a=e.current)||void 0===a||a.scrollIntoView({behavior:"smooth"})}),Object(c.useEffect)((function(){var e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");n(e)}),[]),Object(m.jsxs)("div",{className:j.a.container,children:[Object(m.jsxs)("div",{children:["\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0447\u0430\u0442\u043e\u043c, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0439\u0442\u0438 \u0432 ",Object(m.jsx)("b",{children:"\u0421\u0412\u041e\u042e"})," \u0438\u043b\u0438 ",Object(m.jsx)("b",{children:"\u0422\u0435\u0441\u0442\u043e\u0432\u0443\u044e"})," \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 ",Object(m.jsx)("a",{href:"https://social-network.samuraijs.com/",children:"social-network.samuraijs.com"})]}),Object(m.jsxs)("div",{className:j.a.chatBlock,children:[p.map((function(e,t){return Object(m.jsx)(u,{img:e.photo||"https://www.qofa.ru/static/img/noavatar.png",name:e.userName,message:e.message},t)})),Object(m.jsx)("div",{ref:e})]}),Object(m.jsx)("textarea",{className:j.a.messageBlock,value:h,placeholder:"New message",onChange:function(e){b(e.currentTarget.value)}}),Object(m.jsx)("div",{className:j.a.buttonsBlock,children:Object(m.jsx)("button",{onClick:function(){s&&(s.send(h),b(""))},children:"Send"})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root")),O()},2:function(e,t,a){e.exports={container:"ChatBlock_container__3FIbV",photoName:"ChatBlock_photoName__3j8IA",photo:"ChatBlock_photo__3K2SO",name:"ChatBlock_name__1NpMd",message:"ChatBlock_message__1nz_d"}},4:function(e,t,a){e.exports={container:"App_container__1hHaz",chatBlock:"App_chatBlock__2wVOL",messageBlock:"App_messageBlock__1Fn7r",buttonsBlock:"App_buttonsBlock__3h7Hl"}}},[[16,1,2]]]);
//# sourceMappingURL=main.f0836118.chunk.js.map