(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{60:function(e,t,o){},61:function(e,t,o){},70:function(e,t,o){},71:function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),a=o(17),d=o.n(a),i=(o(60),o(50)),s=o(29),r=o(100),j=o(104),l=o(102),u=o(96),b=(o(61),o(101)),p=o(97),O=o(98),h=o(99),m=o(105),f=o(103),x=o(40),g=x.a.initializeApp({apiKey:"AIzaSyAPmJEZVP45v7emEOdjjHY7gwsAehltr-8",authDomain:"todo-app-20deb.firebaseapp.com",projectId:"todo-app-20deb",storageBucket:"todo-app-20deb.appspot.com",messagingSenderId:"969082781219",appId:"1:969082781219:web:7d17ed0b2bec20dd4b3b96",measurementId:"G-J9CH6MZL20"}).firestore(),v=o(93),C=o(7),S=Object(v.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var k=function(e){var t=S(),o=Object(n.useState)(!1),c=Object(s.a)(o,2),a=c[0],d=c[1],i=Object(n.useState)(),r=Object(s.a)(i,2),j=r[0],l=r[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{open:a,onClose:function(e){return d(!1)},children:Object(C.jsxs)("div",{className:t.paper,children:[Object(C.jsx)("input",{placeholder:e.todo.todo,value:j,onChange:function(e){return l(e.target.value)}}),Object(C.jsx)(u.a,{onClick:function(){g.collection("todos").doc(e.todo.id).set({todo:j},{merge:!0}),d(!1)},children:"Update"})]})}),Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{}),Object(C.jsx)(m.a,{primary:"To do...",secondary:e.todo.todo})]}),Object(C.jsxs)("div",{className:"todo__buttons",children:[Object(C.jsx)("button",{classname:"todo__edit",onClick:function(e){return d(!0)},children:"Edit"}),Object(C.jsx)(f.a,{className:"todo__delete",onClick:function(t){return g.collection("todos").doc(e.todo.id).delete()}})]})]})]})};o(70);var y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),o=t[0],c=t[1],a=Object(n.useState)(""),d=Object(s.a)(a,2),b=d[0],p=d[1];return Object(n.useEffect)((function(){g.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"To do App"}),Object(C.jsxs)("form",{children:[Object(C.jsxs)(r.a,{children:[Object(C.jsx)(j.a,{children:"Write a To do"}),Object(C.jsx)(l.a,{value:b,onChange:function(e){return p(e.target.value)}})]}),Object(C.jsx)(u.a,{disabled:!b,type:"submit",onClick:function(e){e.preventDefault(),g.collection("todos").add({todo:b,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),c([].concat(Object(i.a)(o),[b])),p("")},variant:"contained",color:"primary",children:"Add"})]}),Object(C.jsx)("ul",{children:o.map((function(e){return Object(C.jsx)(k,{todo:e})}))})]})},_=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,107)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,d=t.getTTFB;o(e),n(e),c(e),a(e),d(e)}))};d.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(y,{})}),document.getElementById("root")),_()}},[[71,1,2]]]);
//# sourceMappingURL=main.59e14732.chunk.js.map