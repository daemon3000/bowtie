(this.webpackJsonpbowtie=this.webpackJsonpbowtie||[]).push([[0],{32:function(e,t,a){},37:function(e,t,a){e.exports=a(61)},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=(a(42),a(18)),s=a(3),o=a(14),d=a(20),m=a(4),u=(a(32),function(e){return c.a.createElement("div",{className:"titleCard-card"},c.a.createElement("div",{className:"titleCard-title-text"},e.title))}),b=a(16),g=(a(43),a(44),function(e){var t;return c.a.createElement("div",{className:"cardImage"},c.a.createElement("img",{src:(t=e.image,/^https?:\/\//i.test(t)?t:"https://".concat(t))}))}),p=function(e){return c.a.createElement(b.b,{draggableId:e.cardId,index:e.index,key:e.cardId},(function(t,a){return c.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),c.a.createElement("div",{className:"card-card"},c.a.createElement("div",{className:"card-content"},e.cardImage?c.a.createElement(g,{image:e.cardImage}):null,c.a.createElement("div",{className:"card-text"},e.cardText))))}))},v=(a(49),function(e){var t={height:e.height.toString()+"px",lineHeight:e.height.toString()+"px"};return console.log(t),c.a.createElement("div",{className:"addnewcard-card",style:t,onClick:e.onClick},c.a.createElement("div",{className:"addnewcard-text"},e.cardText))}),f=(a(50),c.a.forwardRef((function(e,t){return c.a.createElement("div",{className:"searchgamecard-card"},c.a.createElement("div",{className:"searchgamecard-text"},c.a.createElement("input",{type:"text",placeholder:"Search for a game",className:"searchgamecard-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured})))}))),E=(a(51),function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=(a[0],a[1]),l=Object(n.useState)("list-visibility-visible"),i=Object(m.a)(l,2),s=i[0],d=i[1],g=Object(n.useState)("list-visibility-hidden"),E=Object(m.a)(g,2),h=E[0],j=E[1],N=Object(n.useRef)(null),O=function(e){r(e.target.value)},x=function(){N.current.focus()},w=function(){d("list-visibility-hidden"),j("list-visibility-visible")},C=function(){d("list-visibility-visible"),j("list-visibility-hidden")};return c.a.createElement(b.b,{draggableId:e.listId,index:e.index,key:e.listId},(function(t){var a;return c.a.createElement("div",Object.assign({className:"list-list-wrapper"},t.draggableProps,{ref:t.innerRef}),c.a.createElement("div",Object.assign({className:"list-title-card"},t.dragHandleProps),c.a.createElement(u,{title:e.title})),c.a.createElement("div",{className:"list-list list-overflow"},c.a.createElement(b.c,{droppableId:e.listId,type:"card"},(function(t){return c.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.listCards.map((function(e,t){return c.a.createElement("div",{className:"list-card"},c.a.createElement(p,{cardText:e.cardTitle,cardImage:e.cardImage,cardId:e.cardId,index:t}))})),c.a.createElement("div",{className:"list-padding-emptyadd"}),t.placeholder)})),c.a.createElement("div",Object(o.a)({className:"list-card"},"className",h),c.a.createElement(f,{onChangeValue:O,ref:N,focused:w,blured:C})),c.a.createElement("div",{className:"list-add-new-wrapper"},c.a.createElement("div",(a={className:"list-card"},Object(o.a)(a,"className",s),Object(o.a)(a,"onClick",x),a),c.a.createElement(v,{cardText:"+ Add new game",height:60})))))}))}),h=c.a.forwardRef((function(e,t){return c.a.createElement("div",{className:"titleCard-card"},c.a.createElement("div",{className:"titleCard-title-text"},c.a.createElement("input",{type:"text",placeholder:"Enter the title of the list",className:"titleCard-card-input",onChange:e.onChangeValue,ref:t,onFocus:e.focused,onBlur:e.blured})))})),j=(a(52),a(53),function(e){e.children;var t=Object(n.useState)(["list-1","list-2","list-3"]),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)({1:"Metro Exodus",2:"The Last of Us",3:"Doom Eternal",4:"Horizon Zero Dawn",5:"Nier Automata",6:"Until Dawn",7:"Gears 5",8:"Metro Last Light",9:"Life is Strange 2",10:"Control",11:"Star Wars Jedi: Fallen Order",12:"Just Cause 4"}),s=Object(m.a)(i,2),u=s[0],g=(s[1],Object(n.useState)({1:"https://i.imgur.com/SvPjEBF.jpg",2:"https://i.imgur.com/SvPjEBF.jpg",3:"https://i.imgur.com/SvPjEBF.jpg",4:"https://i.imgur.com/SvPjEBF.jpg",5:"https://i.imgur.com/SvPjEBF.jpg"})),p=Object(m.a)(g,2),f=p[0],j=(p[1],Object(n.useState)({"list-1":{cards:["1","2","3"],title:"Completed 2020"},"list-2":{cards:["4","5","6","7"],title:"To play"},"list-3":{cards:["8","9","10","11","12"],title:"Completed 2019"}})),N=Object(m.a)(j,2),O=N[0],x=N[1],w=Object(n.useState)("visibility-visible"),C=Object(m.a)(w,2),y=C[0],I=C[1],k=Object(n.useState)("visibility-hidden"),S=Object(m.a)(k,2),R=S[0],P=S[1],B=Object(n.useState)(""),L=Object(m.a)(B,2),T=(L[0],L[1]),F=Object(n.useRef)(null),A=function(){F.current.focus(),window.scrollTo(9999999,0)},D=function(e){T(e.target.value)},H=function(){I("visibility-hidden"),P("visibility-visible")},J=function(){I("visibility-visible"),P("visibility-hidden")};return c.a.createElement("div",{className:"layout-wrapper"},c.a.createElement("div",{className:"layout-lists"},c.a.createElement(b.a,{onDragEnd:function(e){var t,a=e.destination,n=e.source,c=e.draggableId,i=e.type;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){if("list"===i){var s=r;return s.splice(n.index,1),s.splice(a.index,0,c),void l(s)}var m=n.droppableId,u=a.droppableId,b=O[m],g=O[u];if(b!==g){var p=Array.from(b.cards);p.splice(n.index,1);var v=Object(d.a)({},b,{cards:p}),f=Array.from(g.cards);f.splice(a.index,0,c);var E=Object(d.a)({},g,{cards:f});x(Object(d.a)({},O,(t={},Object(o.a)(t,m,v),Object(o.a)(t,u,E),t)))}else{var h=n.droppableId,j=O[h],N=Array.from(j.cards);N.splice(n.index,1),N.splice(a.index,0,c);var w=Object(d.a)({},j,{cards:N});x(Object(d.a)({},O,Object(o.a)({},h,w)))}}}},c.a.createElement(b.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"lists-wrapper"}),r.map((function(e,t){var a=[],n=O[e],r=n.title;return n.cards.forEach((function(e){a.push({cardTitle:u[e],cardId:e,cardImage:f[e]})})),c.a.createElement(E,{listCards:a,title:r,listId:e,index:t})})),e.placeholder,c.a.createElement("div",{className:"addnew-list-card "+R},c.a.createElement(h,{onChangeValue:D,ref:F,focused:H,blured:J})),c.a.createElement("div",{className:"addnew-list-card "+y},c.a.createElement(v,{cardText:"+ Add new list",height:60,onClick:A})))})))))}),N=(a(54),a(55),a(56),function(e){return c.a.createElement("button",{className:"bluebutton",onClick:e.onClick},c.a.createElement("div",{type:"button",className:"bluebutton-text"},e.text))}),O=function(){return c.a.createElement("nav",{className:"logobuttonsnav"},c.a.createElement("span",{className:"logo"},"Bowtie"),c.a.createElement("div",{className:"register-btn"},c.a.createElement(N,{text:"Register"})),c.a.createElement("div",{className:"loginbtn"},c.a.createElement("div",{className:"loginbtn-text"},"Log In")))},x=function(){return c.a.createElement("div",{className:"LandingPage"},c.a.createElement(O,null))},w=(a(57),a(58),function(){return c.a.createElement("nav",{className:"logonav"},c.a.createElement("span",{className:"logo"},"Bowtie"))}),C=a(6),y=a(79),I=a(81),k=Object(y.a)({root:{"&:hover":{backgroundColor:"transparent"},"&:focus":{outline:"none"}},icon:{borderRadius:0,width:30,height:30,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"rgba(88, 94, 234, 0.8)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:30,height:30,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"rgba(88, 94, 234, 1)"}}}),S=function(e){var t=k();return c.a.createElement(I.a,Object.assign({className:t.root,disableRipple:!0,color:"default",checkedIcon:c.a.createElement("span",{className:Object(C.a)(t.icon,t.checkedIcon)}),icon:c.a.createElement("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))},R=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(!1),b=Object(m.a)(u,2),g=b[0],p=b[1],v=function(e,t){t(e.target.value)};return c.a.createElement("div",{className:"loginpage"},c.a.createElement(w,null),c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("div",{className:"buttons"},c.a.createElement("span",{className:"login-btn"},"Log In"),c.a.createElement(i.b,{to:"/register",style:{textDecoration:"none"}},c.a.createElement("span",{className:"register-btn"},"Register"))),c.a.createElement("div",null,c.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:function(e){return v(e,r)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"password",placeholder:"Password",value:o,onChange:function(e){return v(e,d)}})),c.a.createElement("div",{className:"remember-checkbox"},c.a.createElement(S,{checked:g,onClick:function(e){p(!0!==g)}}),c.a.createElement("span",null,"Remember me")),c.a.createElement("div",{className:"login-submit-btn"},c.a.createElement(N,{text:"Log In",onClick:function(e){console.log("login clicked")}})),c.a.createElement("div",{className:"forgot-pass-text"},"Forgot password? ",c.a.createElement("span",{className:"reset-pass-btn",onClick:function(){console.log("reset pass clicked")}}," Reset ")))))},P=(a(60),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),o=s[0],d=s[1],u=Object(n.useState)(""),b=Object(m.a)(u,2),g=b[0],p=b[1],v=Object(n.useState)(!1),f=Object(m.a)(v,2),E=(f[0],f[1],function(e,t){t(e.target.value)});return c.a.createElement("div",{className:"registerpage"},c.a.createElement(w,null),c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("div",{className:"buttons"},c.a.createElement(i.b,{to:"/login",style:{textDecoration:"none"}},c.a.createElement("span",{className:"login-btn"},"Log In")),c.a.createElement("span",{className:"register-btn"},"Register")),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Username",value:a,onChange:function(e){return E(e,r)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){return E(e,d)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"password",placeholder:"Password",value:g,onChange:function(e){return E(e,p)}})),c.a.createElement("div",{className:"register-submit-btn"},c.a.createElement(N,{text:"Register",onClick:function(e){console.log("register clicked")}})))))});var B=function(){return c.a.createElement(i.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/bowtie",exact:!0,component:j})," ",c.a.createElement(s.a,{path:"/",exact:!0,component:x}),c.a.createElement(s.a,{path:"/board",component:j}),c.a.createElement(s.a,{path:"/login",component:R}),c.a.createElement(s.a,{path:"/register",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.aa47824b.chunk.js.map