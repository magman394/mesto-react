(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=(n(15),n(10)),r=n(2),l=n(0);var u=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"header__logo"})})},p=n(6),d=n.p+"static/media/edit-botton.f0dd9c51.svg",m=n.p+"static/media/add-botton.bed8c136.svg",j=n.p+"static/media/line.90aa511c.gif",h=c.a.createContext(),b={name:"",about:"",avatar:j};var f=function(e){var t=e.onCardClick,n=e.link,a=e.name,s=e.likes,i=e.onCardLike,o=e._id,r=e.onCardDelete,u=e.owner,p=c.a.useContext(h),d=u._id===p._id,m="".concat(d?"element__btn_delete-active opacity-link":"element__btn opacity-link"),j=s.some((function(e){return e._id===p._id})),b="".concat(j?"element__likes_active element__likes_like-btn":"element__likes element__likes_like-btn");return Object(l.jsx)("div",{className:"elements__box",children:Object(l.jsxs)("div",{className:"element",children:[Object(l.jsx)("img",{className:"element__image",src:n,onClick:function(){t({img:n,title:a})},alt:a}),Object(l.jsx)("div",{className:"element__btn_delete",children:Object(l.jsx)("button",{className:m,type:"button",onClick:function(){r(o)},children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC4SURBVHgBrZQNEcIwDEa/cAhAwiQgAQlIwAGWkDAHVMIkxMGGgpJw7dH1st013btbL2uTt6z7ATaIMd7lmOOa21b+ORUNxpoWXaq5p+RynUhETLLwTkU9BBXNxpVb+XU0SPBAHyPpKLIr/F0tskcTkugV/YzqOGUr/HApYvhZStFhHR0mmuBndWs9sA6Uz/Q5woG8Q1R3xGiHc1CKPBvOlojRQSn6oB22RAHthBxQObv3KzX4f/XCF51ui58EdOBbAAAAAElFTkSuQmCC",width:"18",height:"17",alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})}),Object(l.jsxs)("div",{className:"element__info",children:[Object(l.jsx)("h3",{className:"element__title",children:a}),Object(l.jsxs)("div",{className:"element__likes",children:[Object(l.jsx)("button",{type:"button",className:b,onClick:function(){i(s,o)}}),Object(l.jsx)("p",{className:"element__likes element__likes_like-count",children:s.length})]})]})]})})};var _=function(e){var t=e.onEditAvatar,n=e.onAddPlace,a=e.onEditProfile,s=e.onCardClick,i=e.cards,o=e.onCardLike,r=e.onCardDelete,u=c.a.useContext(h);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("button",{className:"profile__botton",type:"button",onClick:t,children:Object(l.jsx)("img",{className:"profile__avatar opacity-link opacity-link_avatar",src:u.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})}),Object(l.jsxs)("div",{className:"profile__profile-info",children:[Object(l.jsxs)("div",{className:"profile__edit-name",children:[Object(l.jsx)("h1",{className:"profile__name",children:u.name}),Object(l.jsx)("button",{type:"button",className:"profile__edit-botton opacity-link",onClick:a,children:Object(l.jsx)("img",{src:d,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})})]}),Object(l.jsx)("h2",{className:"profile__profession",children:u.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__add-botton opacity-link",onClick:n,children:Object(l.jsx)("img",{src:m,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})})]}),Object(l.jsx)("section",{className:"elements",children:i.map((function(e){return Object(l.jsx)(f,Object(p.a)(Object(p.a)({onCardClick:s},e),{},{onCardLike:o,onCardDelete:r}),e._id)}))})]})},O=(document.querySelector("#popupTitle"),(new Date).getFullYear());document.querySelector("#firstName"),document.querySelector("#lastName");var v=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",O," Mesto Russia"]})})},x=n.p+"static/media/Close-Icon.628241e5.svg",g=function(e){var t=e.name,n=e.title,a=e.children,c=e.isOpen,s=e.onClose,i=e.onSubmit,o=e.buttonText;return Object(l.jsx)("div",{className:"popup".concat(c?" popup_is-opened":""),name:t,children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{type:"button",className:"popup__close opacity-link",children:Object(l.jsx)("img",{src:x,onClick:s,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(l.jsxs)("form",{className:"popup__title popup__title_not_margin",noValidate:!0,children:[Object(l.jsx)("h2",{className:"popup__title",children:n}),a,Object(l.jsx)("button",{onClick:i,type:"submit",className:"popup__submit",children:o})]})]})})};var k=function(e){return Object(l.jsx)("div",{className:"popup".concat(e.isOpen?" popup_is-opened":""),id:e.name,children:Object(l.jsxs)("div",{className:"popup__image-container",children:[Object(l.jsx)("button",{type:"button",className:"popup__close opacity-link",children:Object(l.jsx)("img",{src:x,onClick:e.onClose,alt:"\u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f"})}),Object(l.jsx)("img",{className:"popup__image",src:e.card.img,alt:e.card.title}),Object(l.jsx)("h2",{className:"popup__title",id:"popupTitle",children:e.card.title})]})})},A=n(8),C=n(9),N=new(function(){function e(t){var n=t.url,a=t.token;Object(A.a)(this,e),this.url=n,this.token=a}return Object(C.a)(e,[{key:"getAllPromise",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"users/me"),{headers:this.token}).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.url,"cards"),{headers:this.token}).then((function(t){return e._getResponseData(t)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return!0===t?fetch("".concat(this.url,"cards/likes/").concat(e),{method:"PUT",headers:this.token}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this.url,"cards/likes/").concat(e),{method:"DELETE",headers:this.token}).then((function(e){return n._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"users/me"),{method:"PATCH",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"delmyCard",value:function(e){var t=this;return fetch("".concat(this.url,"cards/").concat(e),{method:"DELETE",headers:this.token}).then((function(e){return t._getResponseData(e)}))}},{key:"setAddPlase",value:function(e){var t=this;return fetch("".concat(this.url,"cards/"),{method:"POST",headers:this.token,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-24/",token:{authorization:"b94e78d1-b2d6-4481-aa74-fc7e4dc8c239","Content-Type":"application/json"}});var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=c.a.useContext(h),i=c.a.useState(s.name),o=Object(r.a)(i,2),u=o[0],p=o[1],d=c.a.useState(s.about),m=Object(r.a)(d,2),j=m[0],b=m[1];return c.a.useEffect((function(){p(s.name),b(s.about)}),[s]),Object(l.jsxs)(g,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,isOpen:t,setName:p,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popupAutor",onSubmit:function(e){e.preventDefault(),a({name:u,about:j})},children:[Object(l.jsx)("input",{value:u,onChange:function(e){e.preventDefault(),p(e.target.value)},name:"firstName",id:"firstName",type:"text",className:"popup__input",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f"}),Object(l.jsx)("span",{id:"firstName-error",className:"popup__error"}),Object(l.jsx)("input",{value:j,onChange:function(e){e.preventDefault(),b(e.target.value)},name:"lastName",id:"lastName",type:"text",className:"popup__input",minLength:"2",maxLength:"200",required:!0,placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f"}),Object(l.jsx)("span",{id:"lastName-error",className:"popup__error"})]})};var S=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=c.a.useRef();return c.a.useEffect((function(){!0===t&&(s.current.value="")}),[t]),Object(l.jsxs)(g,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,isOpen:t,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popupAvatar",children:[Object(l.jsx)("input",{ref:s,name:"link",id:"AvatarLink",type:"url",className:"popup__input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(l.jsx)("span",{id:"AvatarLink-error",className:"popup__error"})]})};var U=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateCard,s=c.a.useState(""),i=Object(r.a)(s,2),o=i[0],u=i[1],p=c.a.useState(""),d=Object(r.a)(p,2),m=d[0],j=d[1];return c.a.useEffect((function(){!0===t&&(u(""),j(""))}),[t]),Object(l.jsxs)(g,{buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,isOpen:t,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popupCard",onSubmit:function(e){e.preventDefault(),a({name:m,link:o})},children:[Object(l.jsx)("input",{value:m,onChange:function(e){j(e.target.value)},type:"text",className:"popup__input",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"inputTitle"}),Object(l.jsx)("span",{id:"inputTitle-error",className:"popup__error"}),Object(l.jsx)("input",{value:o,onChange:function(e){u(e.target.value)},id:"inputLink",type:"url",className:"popup__input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(l.jsx)("span",{id:"inputLink-error",className:"popup__error"})]})};var L=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(r.a)(s,2),p=i[0],d=i[1],m=c.a.useState(!1),j=Object(r.a)(m,2),f=j[0],O=j[1],x=c.a.useState(!1),A=Object(r.a)(x,2),C=A[0],L=A[1],T=c.a.useState({img:null,title:null}),D=Object(r.a)(T,2),E=D[0],R=D[1],P=c.a.useState(b),w=Object(r.a)(P,2),B=w[0],I=w[1],Q=c.a.useState([]),q=Object(r.a)(Q,2),H=q[0],F=q[1];c.a.useEffect((function(){N.getAllPromise().then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];I(n),F(a)})).catch((function(e){return alert(e)}))}),[]);var X=function(){O(!1),a(!1),d(!1),L(!1),R({img:null,title:null})};return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(h.Provider,{value:B,children:[Object(l.jsx)(u,{}),Object(l.jsx)(_,{onEditProfile:function(){a(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){O(!0)},onCardClick:function(e){R({img:e.img,title:e.title}),L(!0)},cards:H,onCardLike:function(e,t){var n=e.some((function(e){return e._id===B._id}));N.changeLikeCardStatus(t,!n).then((function(e){F((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return alert(e)}))},onCardDelete:function(e){N.delmyCard(e).then((function(){F((function(t){return t.map((function(e){return e})).filter((function(t){return t._id!==e}))}))})).catch((function(e){return alert(e)}))}}),Object(l.jsx)(v,{}),Object(l.jsx)(y,{isOpen:n,onClose:X,onUpdateUser:function(e){N.setUserInfo(e).then((function(e){I(e),a(!1)})).catch((function(e){return alert(e)}))}}),Object(l.jsx)(U,{isOpen:p,onClose:X,onUpdateCard:function(e){N.setAddPlase(e).then((function(e){F([e].concat(Object(o.a)(H))),d(!1)})).catch((function(e){return alert(e)}))}}),Object(l.jsx)(S,{isOpen:f,onClose:X,onUpdateAvatar:function(e){N.setUserAvatar(e).then((function(e){I(e),O(!1)})).catch((function(e){return alert(e)}))}}),Object(l.jsx)(g,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popup__form-avatar",buttonText:"\u0414\u0430"}),Object(l.jsx)(k,{name:"popupImage",onClose:X,card:E,isOpen:C})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),T()}},[[17,1,2]]]);
//# sourceMappingURL=main.04b183ab.chunk.js.map