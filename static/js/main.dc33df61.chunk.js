(this["webpackJsonpunsplash-display"]=this["webpackJsonpunsplash-display"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(0),r=c.n(n),s=c(18),i=c.n(s),h=(c(49),c(50),c(51),function(e){var t;switch(e.type){case"h1":t=Object(a.jsx)("h1",{className:"text","data-v-6c237002":"",children:e.text});break;case"h2":t=Object(a.jsx)("h2",{className:"text","data-v-6c237002":"",children:e.text});break;case"h3":t=Object(a.jsx)("h3",{className:"text","data-v-6c237002":"",children:e.text});break;case"h4":t=Object(a.jsx)("h4",{className:"text","data-v-6c237002":"",children:e.text});break;default:t=Object(a.jsx)("h1",{className:"text","data-v-6c237002":"",children:e.text})}return Object(a.jsx)("div",{"data-v-6c237002":"",children:t})}),o="Search_term",d="Search_term_debounced",u=c(64),l=c(11),j=c(66),b=c(43),p=c(67),v=c(35),O=Object(j.a)((function(e){return e.pipe(Object(b.a)(o),Object(p.a)(500),Object(v.a)((function(e){return t=e.payload,{type:d,payload:t};var t})))})),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"random"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{theme:t.payload};default:return e}},f=Object(l.c)({ChangeThemeReducer:x}),m=Object(u.a)(),g=Object(l.d)(f,Object(l.a)(m));m.run(O);var y=g,N=(c(54),c(13)),C={inputChange:function(e){return y.dispatch(function(e){return{type:o,payload:e}}(e))}},w=Object(N.b)(null,C)((function(e){return Object(a.jsxs)("div",{className:"container","data-v-78b9d797":"",children:[Object(a.jsx)("input",{type:"text",name:"search",onChange:function(t){return e.inputChange(t.target.value)},"data-v-78b9d797":""}),Object(a.jsx)("svg",{className:"search-icon",viewBox:"0 0 20 20","data-v-78b9d797":"",children:Object(a.jsx)("path",{d:"M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896\r c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519\r c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461\r s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z","data-v-78b9d797":""})})]})})),k=c(37),_=c(38),S=c(42),F=c(40),T=(c(59),c(60),c(65)),B=function(e){var t=Object(T.a)(),c=["w-".concat(e.w||1),"h-".concat(e.h||1)],n="https://source.unsplash.com/".concat(500*(e.w||1),"x").concat(500*(e.h||1),"/?").concat(e.theme||"random","&").concat(t);return Object(a.jsx)("div",{id:t,className:c.join(" ")+" picture__container","data-v-eac098dc":"",children:Object(a.jsx)("img",{loading:"eager",src:n,alt:e.theme+" picture",className:"fade-in-".concat(e.position),"data-v-eac098dc":""})})},I=function(e){Object(S.a)(c,e);var t=Object(F.a)(c);function c(){var e;Object(k.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={lenght:20},e}return Object(_.a)(c,[{key:"render",value:function(){for(var e=[],t=0;t<this.state.lenght;t++)e.push(Object(a.jsx)(B,{position:t,theme:this.props.theme,"data-v-4f6fa84b":""},t));return Object(a.jsx)("div",{className:"gallery__container","data-v-4f6fa84b":"",children:e})}}]),c}(n.Component),M=Object(N.b)((function(e){return{theme:e.ChangeThemeReducer.theme}}),null)(I);var z=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{text:"UnSplash Gallery",type:"h1"}),Object(a.jsx)("div",{className:"searchInput-container",children:Object(a.jsx)(w,{})}),Object(a.jsx)(M,{})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N.a,{store:y,children:Object(a.jsx)(z,{})})}),document.getElementById("root")),J()}},[[61,1,2]]]);
//# sourceMappingURL=main.dc33df61.chunk.js.map