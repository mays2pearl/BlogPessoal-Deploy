(this["webpackJsonpblog-pessoal"]=this["webpackJsonpblog-pessoal"]||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},160:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(139),a(15)),i=a(21),l=(a(140),a(246)),u=a(250),j=a(237),d=a(239),h=a(11),b=a(241),m=a(251),O=a(242),p=a(240),x=a(259),f=a(9),g=a.n(f),v=a(18),y=a(105),C=a.n(y).a.create({baseURL:"https://mayspearl.herokuapp.com"}),k=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(t,a);case 2:r=e.sent,n(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(t,a);case 2:r=e.sent,n(r.data.token);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get(t,n);case 2:r=e.sent,a(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get(t,n);case 2:r=e.sent,a(r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n,r){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(t,a,r);case 2:c=e.sent,n(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n,r){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put(t,a,r);case 2:c=e.sent,n(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),z=a(234),A=a(236),E=a(238),F=(a(160),a(20)),H=a(14),I=a(254),D=a(2);var W=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(i.f)(),o=Object(F.c)((function(e){return e.tokens}));function l(){return(l=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("/postagem",r,{headers:{Authorization:o}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){""==o&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),c.push("/login"))}),[o]),Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[a.length]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(I.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(D.jsx)(u.a,{className:"box2",children:a.map((function(e){var t;return Object(D.jsx)(u.a,{m:2,children:Object(D.jsxs)(z.a,{variant:"outlined",children:[Object(D.jsxs)(A.a,{children:[Object(D.jsx)(j.a,{color:"textSecondary",gutterBottom:!0,children:"Postagens"}),Object(D.jsx)(j.a,{variant:"h5",component:"h2",children:e.titulo}),Object(D.jsx)(j.a,{variant:"body2",component:"p",children:e.texto}),Object(D.jsx)(j.a,{variant:"body2",component:"p",children:null===(t=e.tema)||void 0===t?void 0:t.descricao})]}),Object(D.jsx)(E.a,{children:Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",mb:1.5,children:[Object(D.jsx)(s.b,{to:"/formularioPostagem/".concat(e.id),className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,children:Object(D.jsx)(d.a,{variant:"contained",className:"marginLeft colorBotao1",size:"small",children:"atualizar"})})}),Object(D.jsx)(s.b,{to:"/deletarPostagem/".concat(e.id),className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,children:Object(D.jsx)(d.a,{variant:"contained",size:"small",className:"colorBotao2",children:"deletar"})})})]})})]})})}))})})})};a(169);var L=function(){var e=Object(n.useState)("1"),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(p.a,{value:a,children:[Object(D.jsx)(b.a,{position:"static",children:Object(D.jsxs)(m.a,{centered:!0,className:"caixa3",onChange:function(e,t){r(t)},children:[Object(D.jsx)(O.a,{label:"Todas as postagens",value:"1"}),Object(D.jsx)(O.a,{label:"Um pouco sobre mim:",value:"2"})]})}),Object(D.jsx)(x.a,{value:"1",children:Object(D.jsx)(u.a,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:Object(D.jsx)(W,{})})}),Object(D.jsxs)(x.a,{value:"2",children:[Object(D.jsx)(j.a,{variant:"h4",gutterBottom:!0,color:"textPrimary",component:"h5",align:"center",className:"titulo",children:"Um pouco sobre mim:"}),Object(D.jsx)(j.a,{variant:"body1",gutterBottom:!0,color:"textPrimary",align:"justify",children:"Sou uma pessoa que sempre esta em busca de algo melhor, de ser uma pessoa melhor, por isso venho trilhando na minha vida profissional caminhos de sucesso e orgulho! Comecei trabalhando com vendas de produtos financeiros, migrei para vendas na \xe1rea comercial/ind\xfastria interna, onde desenvolvi habilidades de negocia\xe7\xe3o em vendas! Buscando crescer numa \xe1rea profissional valorizada, que me proporcione uma condi\xe7\xe3o financeira est\xe1vel e confort\xe1vel, e que conciliasse com algo que eu goste e com o qual eu tinha afinidade, iniciei meus estudos em programa\xe7\xe3o e desenvolvimento de sistemas e aplicativos. Nessa \xe1rea de tecnologia se destaca o curso de IOS Mobile na Digital House e o BootCamp java fullStack na Generation Brasil."})]})]})})},R=a(245),V=a(257),q=a(252),M=a(115),U=a.n(M),_=(a(170),a(19)),G=a(28),J=a(243),X=a(244),K=a(190),Q=a(195),Y=a(193),Z=a(256),$=a(191);a(171);var ee=function(){var e=Object(i.f)(),t=Object(i.g)().id,a=Object(n.useState)([]),r=Object(h.a)(a,2),c=r[0],o=r[1],s=Object(F.c)((function(e){return e.tokens}));Object(n.useEffect)((function(){""==s&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.push("/login"))}),[s]);var l=Object(n.useState)({id:0,descricao:""}),u=Object(h.a)(l,2),b=u[0],m=u[1],O=Object(n.useState)({id:0,titulo:"",texto:"",tema:null}),p=Object(h.a)(O,2),x=p[0],f=p[1];function y(){return(y=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("/temas",o,{headers:{Authorization:s}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return C=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("postagem/".concat(t),f,{headers:{Authorization:s}});case 2:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function k(e){var t;f(Object(G.a)(Object(G.a)({},x),{},(t={},Object(_.a)(t,e.target.name,e.target.value),Object(_.a)(t,"tema",b),t)))}function w(){return(w=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),void 0!==t?(P("/postagem",x,f,{headers:{Authorization:s}}),H.b.success("Postagem atualizada com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})):(B("/postagem",x,f,{headers:{Authorization:s}}),H.b.success("Postagem cadastrada com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})),T();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){e.push("/posts")}return Object(n.useEffect)((function(){f(Object(G.a)(Object(G.a)({},x),{},{tema:b}))}),[b]),Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}(),void 0!==t&&function(e){C.apply(this,arguments)}(t)}),[t]),Object(D.jsx)(J.a,{maxWidth:"sm",className:"topo",children:Object(D.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(D.jsx)(j.a,{variant:"h3",color:"textSecondary",component:"h1",align:"center",children:"Formul\xe1rio de cadastro postagem"}),Object(D.jsx)(X.a,{value:x.titulo,onChange:function(e){return k(e)},id:"titulo",label:"titulo",variant:"outlined",name:"titulo",margin:"normal",fullWidth:!0}),Object(D.jsx)(X.a,{value:x.texto,onChange:function(e){return k(e)},id:"texto",label:"texto",name:"texto",variant:"outlined",margin:"normal",fullWidth:!0}),Object(D.jsxs)(K.a,{children:[Object(D.jsx)(Q.a,{id:"demo-simple-select-helper-label",children:"Tema "}),Object(D.jsx)(Y.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",onChange:function(e){return S("/temas/".concat(e.target.value),m,{headers:{Authorization:s}})},children:c.map((function(e){return Object(D.jsx)(Z.a,{value:e.id,children:e.descricao})}))}),Object(D.jsx)($.a,{children:"Escolha um tema para a postagem"}),Object(D.jsx)(d.a,{type:"submit",variant:"contained",className:"colorBotaoP",children:"Finalizar"})]})]})})};function te(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var ae=Object(R.a)((function(e){return Object(V.a)({paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));var ne=function(){var e=ae(),t=r.a.useState(te),a=Object(h.a)(t,1)[0],n=r.a.useState(!1),c=Object(h.a)(n,2),o=c[0],s=c[1],i=function(){s(!1)},l=Object(D.jsxs)("div",{style:a,className:e.paper,children:[Object(D.jsx)(u.a,{display:"flex",justifyContent:"flex-end",className:"cursor",children:Object(D.jsx)(U.a,{onClick:i})}),Object(D.jsx)(ee,{})]});return Object(D.jsxs)("div",{children:[Object(D.jsx)(d.a,{variant:"outlined",className:"btnModal",onClick:function(){s(!0)},children:"Nova Postagem"}),Object(D.jsx)(q.a,{open:o,onClose:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:l})]})};a(173);var re=function(){var e=Object(i.f)(),t=Object(F.c)((function(e){return e.tokens}));return Object(n.useEffect)((function(){""==t&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.push("/login"))}),[t]),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:"caixa",children:[Object(D.jsxs)(l.a,{alignItems:"center",item:!0,xs:6,children:[Object(D.jsxs)(u.a,{paddingX:20,children:[Object(D.jsx)(j.a,{variant:"h3",gutterBottom:!0,color:"textPrimary",component:"h3",align:"center",className:"titulo",children:"Seja bem vindo(a) ao meu Blog!"}),Object(D.jsx)(j.a,{variant:"h5",gutterBottom:!0,color:"textPrimary",component:"h5",align:"center",className:"titulo",children:"Expresse aqui os seus pensamentos e opini\xf5es!"})]}),Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",children:[Object(D.jsx)(u.a,{marginRight:1,children:Object(D.jsx)(ne,{})}),Object(D.jsx)(s.b,{to:"/posts",className:"text-decoration-none",children:Object(D.jsx)(d.a,{variant:"outlined",className:"botao",children:"Ver Postagens"})})]}),Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",children:[Object(D.jsx)(u.a,{marginRight:1}),Object(D.jsx)(s.b,{to:"/anime",className:"text-decoration-none",children:Object(D.jsx)(d.a,{variant:"outlined",className:"botao",children:"Pesquisar Animes"})})]})]}),Object(D.jsx)(l.a,{item:!0,xs:6,className:"imagem"}),Object(D.jsx)(l.a,{xs:12,className:"postagens botao",children:Object(D.jsx)(L,{})})]})})};a(174);var ce=function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)({id:0,nome:"",usuario:"",senha:""}),b=Object(h.a)(o,2),m=b[0],O=b[1],p=Object(n.useState)({id:0,nome:"",usuario:"",senha:""}),x=Object(h.a)(p,2),f=x[0],y=x[1];function C(e){O(Object(G.a)(Object(G.a)({},m),{},Object(_.a)({},e.target.name,e.target.value)))}function w(){return(w=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r==m.senha?(k("/usuarios/cadastrar",m,y),H.b.success("Usuario cadastrado com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})):H.b.error("Dados inconsistentes. Favor verificar as informa\xe7\xf5es de cadastro.",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){0!=f.id&&e.push("/login")}),[f]),Object(D.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(D.jsx)(l.a,{item:!0,xs:6,className:"imagem2"}),Object(D.jsx)(l.a,{item:!0,xs:6,alignItems:"center",children:Object(D.jsx)(u.a,{paddingX:10,children:Object(D.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(D.jsx)(j.a,{variant:"h3",gutterBottom:!0,color:"textPrimary",component:"h3",align:"center",className:"textos2",children:"Cadastrar"}),Object(D.jsx)(X.a,{value:m.nome,onChange:function(e){return C(e)},id:"nome",label:"nome",variant:"outlined",name:"nome",margin:"normal",fullWidth:!0}),Object(D.jsx)(X.a,{value:m.usuario,onChange:function(e){return C(e)},id:"usuario",label:"usuario",variant:"outlined",name:"usuario",margin:"normal",fullWidth:!0}),Object(D.jsx)(X.a,{value:m.senha,onChange:function(e){return C(e)},id:"senha",label:"senha",variant:"outlined",name:"senha",margin:"normal",type:"password",fullWidth:!0}),Object(D.jsx)(X.a,{value:r,onChange:function(e){return function(e){c(e.target.value)}(e)},id:"confirmarSenha",label:"confirmarSenha",variant:"outlined",name:"confirmarSenha",margin:"normal",type:"password",fullWidth:!0}),Object(D.jsxs)(u.a,{marginTop:2,textAlign:"center",children:[Object(D.jsx)(s.b,{to:"/login",className:"text-decorator-none",children:Object(D.jsx)(d.a,{variant:"contained",color:"secondary",className:"btnCancelar",children:"Cancelar"})}),Object(D.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",children:"Cadastrar"})]})]})})})]})},oe=a(247),se=(a(175),function(e){return{type:"ADD_TOKEN",payload:e}});var ie=function(){var e,t=Object(F.c)((function(e){return e.tokens})),a=Object(i.f)(),n=Object(F.b)();return""!=t&&(e=Object(D.jsx)(b.a,{position:"static",style:{backgroundColor:"#FF1493"},children:Object(D.jsxs)(oe.a,{variant:"dense",children:[Object(D.jsx)(u.a,{style:{cursor:"pointer",backgroundColor:"#FF1493"},children:Object(D.jsx)(j.a,{className:"fontes",variant:"h4",color:"inherit",children:"BLOG PESSOAL"})}),Object(D.jsxs)(u.a,{ml:"auto",display:"flex",children:[Object(D.jsx)(s.b,{to:"/home",className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,className:"cursor",children:Object(D.jsx)(j.a,{variant:"h6",color:"inherit",children:"HOME"})})}),Object(D.jsx)(s.b,{to:"/posts",className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,className:"cursor",children:Object(D.jsx)(j.a,{variant:"h6",color:"inherit",children:"POSTAGENS"})})}),Object(D.jsx)(s.b,{to:"temas",className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,className:"cursor",children:Object(D.jsx)(j.a,{variant:"h6",color:"inherit",children:"TEMAS"})})}),Object(D.jsx)(s.b,{to:"/formularioTema",className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,className:"cursor",children:Object(D.jsx)(j.a,{variant:"h6",color:"inherit",children:"CADASTRAR TEMA"})})}),Object(D.jsx)(u.a,{mx:1,className:"cursor",onClick:function(){n(se("")),H.b.info("Usu\xe1rio deslogado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),a.push("/login")},children:Object(D.jsx)(j.a,{variant:"h6",color:"inherit",children:"LOGOUT"})})]})]})})),Object(D.jsx)(D.Fragment,{children:e})},le=a(116),ue=a.n(le),je=a(258),de=a(255),he=a(248),be=a(249);var me=function(){var e;return""!=Object(F.c)((function(e){return e.tokens}))&&(e=Object(D.jsx)(I.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(D.jsxs)(I.a,{alignItems:"center",item:!0,xs:12,children:[Object(D.jsxs)(je.a,{style:{backgroundColor:"#FF1493",height:"120px"},children:[Object(D.jsx)(je.a,{paddingTop:1,display:"flex",alignItems:"center",justifyContent:"center",children:Object(D.jsx)(de.a,{variant:"h5",align:"center",gutterBottom:!0,style:{color:"white"},children:"Contate - me "})}),Object(D.jsxs)(je.a,{display:"flex",alignItems:"center",justifyContent:"center",children:[Object(D.jsx)("a",{href:"https://github.com/mays2pearl",target:"_blank",children:Object(D.jsx)(he.a,{style:{fontSize:50,color:"white"}})}),Object(D.jsx)("a",{href:"https://www.linkedin.com/in/maysa-andrade-maysa-andrade/",target:"_blank",children:Object(D.jsx)(ue.a,{style:{fontSize:60,color:"white"}})}),Object(D.jsx)("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=5511961787592",target:"_blank",children:Object(D.jsx)(be.a,{style:{fontSize:60,color:"white"}})})]})]}),Object(D.jsxs)(je.a,{style:{backgroundColor:"#FF1493",height:"60px"},children:[Object(D.jsx)(je.a,{paddingTop:1,children:Object(D.jsx)(de.a,{variant:"subtitle2",align:"center",gutterBottom:!0,style:{color:"white"},children:"\xa9 2021 Copyright:"})}),Object(D.jsx)(je.a,{children:Object(D.jsx)("a",{target:"_blank",href:"https://mail.google.com/mail/?view=cm&fs=1&to=maysas2perola@gmail.com",children:Object(D.jsx)(de.a,{variant:"subtitle2",gutterBottom:!0,style:{color:"white"},align:"center",children:"Maysa Andrade"})})})]})]})})),Object(D.jsx)(D.Fragment,{children:e})};a(176);var Oe=function(){var e=Object(i.f)(),t=Object(F.b)(),a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],o=r[1],b=Object(n.useState)({id:0,usuario:"",senha:"",token:""}),m=Object(h.a)(b,2),O=m[0],p=m[1];function x(e){p(Object(G.a)(Object(G.a)({},O),{},Object(_.a)({},e.target.name,e.target.value)))}function f(){return(f=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w("/usuarios/logar",O,o);case 4:H.b.success("Usu\xe1rio logado com sucesso!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),H.b.error("Dados do usu\xe1rio inconsistentes. Erro ao logar!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){""!=c&&(t(se(c)),e.push("/home"))}),[c]),Object(D.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(D.jsx)(l.a,{alignItems:"center",xs:6,children:Object(D.jsxs)(u.a,{paddingX:20,children:[Object(D.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(D.jsx)(j.a,{variant:"h3",gutterBottom:!0,color:"textPrimary",component:"h3",align:"center",className:"textos1",children:"Entrar"}),Object(D.jsx)(X.a,{value:O.usuario,onChange:function(e){return x(e)},id:"usuario",label:"usu\xe1rio",variant:"outlined",name:"usuario",margin:"normal",fullWidth:!0}),Object(D.jsx)(X.a,{value:O.senha,onChange:function(e){return x(e)},id:"senha",label:"senha",variant:"outlined",name:"senha",margin:"normal",type:"password",fullWidth:!0}),Object(D.jsx)(u.a,{marginTop:2,textAlign:"center",children:Object(D.jsx)(d.a,{type:"submit",variant:"contained",className:"botao",children:"Logar"})})]}),Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",marginTop:2,children:[Object(D.jsx)(u.a,{marginRight:1,children:Object(D.jsx)(j.a,{variant:"subtitle1",gutterBottom:!0,align:"center",children:"N\xe3o tem uma conta?"})}),Object(D.jsx)(s.b,{to:"/cadastrousuario",children:Object(D.jsx)(j.a,{variant:"subtitle1",gutterBottom:!0,align:"center",className:"textos1",children:"Cadastre-se"})})]})]})}),Object(D.jsx)(l.a,{xs:6,className:"imagem"})]})};a(177);var pe=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(i.f)(),o=Object(F.c)((function(e){return e.tokens}));function l(){return(l=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("/temas",r,{headers:{Authorization:o}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){""==o&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),c.push("/login"))}),[o]),Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[a.length]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(I.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(D.jsx)(u.a,{className:"box2",children:a.map((function(e){return Object(D.jsx)(u.a,{m:3,children:Object(D.jsxs)(z.a,{variant:"outlined",children:[Object(D.jsxs)(A.a,{children:[Object(D.jsx)(j.a,{color:"textSecondary",gutterBottom:!0,children:"Tema"}),Object(D.jsx)(j.a,{variant:"h5",component:"h2",children:e.descricao})]}),Object(D.jsx)(E.a,{children:Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",mb:1.5,children:[Object(D.jsx)(s.b,{to:"/formularioTema/".concat(e.id),className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,children:Object(D.jsx)(d.a,{variant:"contained",className:"marginLeft colorBotaoT1",size:"small",children:"atualizar"})})}),Object(D.jsx)(s.b,{to:"/deletarTema/".concat(e.id),className:"text-decorator-none",children:Object(D.jsx)(u.a,{mx:1,children:Object(D.jsx)(d.a,{variant:"contained",size:"small",className:"colorBotaoT2",children:"deletar"})})})]})})]})})}))})})})};a(178);var xe=function(){var e=Object(i.f)(),t=Object(i.g)().id,a=Object(F.c)((function(e){return e.tokens})),r=Object(n.useState)({id:0,descricao:""}),c=Object(h.a)(r,2),o=c[0],s=c[1];function l(){return l=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("/temas/".concat(t),s,{headers:{Authorization:a}});case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return(u=Object(v.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),console.log("tema "+JSON.stringify(o)),void 0!==t?(console.log(o),P("/temas",o,s,{headers:{Authorization:a}}),H.b.success("Tema atualizado com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})):(B("/temas",o,s,{headers:{Authorization:a}}),H.b.success("Tema cadastrado com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})),b();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){e.push("/temas")}return Object(n.useEffect)((function(){""==a&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.push("/login"))}),[a]),Object(n.useEffect)((function(){void 0!==t&&function(e){l.apply(this,arguments)}(t)}),[t]),Object(D.jsx)(J.a,{maxWidth:"sm",className:"topo",children:Object(D.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(D.jsx)(j.a,{variant:"h3",color:"textSecondary",component:"h1",align:"center",children:"Formul\xe1rio de cadastro tema"}),Object(D.jsx)(X.a,{value:o.descricao,onChange:function(e){return function(e){s(Object(G.a)(Object(G.a)({},o),{},Object(_.a)({},e.target.name,e.target.value)))}(e)},id:"descricao",label:"descricao",variant:"outlined",name:"descricao",margin:"normal",fullWidth:!0}),Object(D.jsx)(d.a,{type:"submit",variant:"contained",className:"colorBotaoT",children:"Finalizar"})]})})};a(179);var fe=function(){var e=Object(i.f)(),t=Object(i.g)().id,a=Object(F.c)((function(e){return e.tokens})),r=Object(n.useState)(),c=Object(h.a)(r,2),o=c[0],s=c[1];function l(){return l=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("/postagem/".concat(t),s,{headers:{Authorization:a}});case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}return Object(n.useEffect)((function(){""==a&&(H.b.error("Voc\xea precisa estar logado",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.push("/login"))}),[a]),Object(n.useEffect)((function(){void 0!==t&&function(e){l.apply(this,arguments)}(t)}),[t]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{m:2,children:Object(D.jsxs)(z.a,{variant:"outlined",children:[Object(D.jsx)(A.a,{children:Object(D.jsxs)(u.a,{justifyContent:"center",children:[Object(D.jsx)(j.a,{color:"textSecondary",gutterBottom:!0,children:"Deseja deletar a Postagem:"}),Object(D.jsx)(j.a,{color:"textSecondary",children:null===o||void 0===o?void 0:o.titulo})]})}),Object(D.jsx)(E.a,{children:Object(D.jsxs)(u.a,{display:"flex",justifyContent:"start",ml:1,mb:2,children:[Object(D.jsx)(u.a,{mx:2,children:Object(D.jsx)(d.a,{onClick:function(){e.push("/posts"),T("/postagem/".concat(t),{headers:{Authorization:a}}),H.b.success("Postagem deletada com sucesso",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})},variant:"contained",className:"marginLeft",size:"large",color:"primary",children:"Sim"})}),Object(D.jsx)(u.a,{children:Object(D.jsx)(d.a,{onClick:function(){e.push("/posts")},variant:"contained",size:"large",color:"secondary",children:"N\xe3o"})})]})})]})})})};a(180);var ge=function(){var e=Object(i.f)(),t=Object(i.g)().id,a=Object(F.c)((function(e){return e.tokens})),r=Object(n.useState)(),c=Object(h.a)(r,2),o=c[0],s=c[1];function l(){return l=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("/temas/".concat(t),s,{headers:{Authorization:a}});case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}return Object(n.useEffect)((function(){""==a&&(H.b.error("Voc\xea precisa estar logado!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0}),e.push("/login"))}),[a]),Object(n.useEffect)((function(){void 0!==t&&function(e){l.apply(this,arguments)}(t)}),[t]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{m:2,children:Object(D.jsxs)(z.a,{variant:"outlined",children:[Object(D.jsx)(A.a,{children:Object(D.jsxs)(u.a,{justifyContent:"center",children:[Object(D.jsx)(j.a,{color:"textSecondary",gutterBottom:!0,children:"Deseja deletar o Tema:"}),Object(D.jsx)(j.a,{color:"textSecondary",children:null===o||void 0===o?void 0:o.descricao})]})}),Object(D.jsx)(E.a,{children:Object(D.jsxs)(u.a,{display:"flex",justifyContent:"start",ml:1,mb:2,children:[Object(D.jsx)(u.a,{mx:2,children:Object(D.jsx)(d.a,{onClick:function(){e.push("/temas"),T("/temas/".concat(t),{headers:{Authorization:a}}),H.b.success("Tema deletado com sucesso!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,theme:"colored",progress:void 0})},variant:"contained",className:"marginLeft",size:"large",color:"primary",children:"Sim"})}),Object(D.jsx)(u.a,{mx:2,children:Object(D.jsx)(d.a,{onClick:function(){e.push("/temas")},variant:"contained",size:"large",color:"secondary",children:"N\xe3o"})})]})})]})})})},ve=a(118),ye={tokens:""},Ce=Object(ve.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return"ADD_TOKEN"===t.type?{tokens:t.payload}:e})),ke=Ce;a(181);var we=function(e){var t=e.value,a=e.onChange,r=Object(n.useState)(t),c=Object(h.a)(r,2),o=c[0],s=c[1],i=function(e,t){var a=Object(n.useRef)(null);return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];window.clearTimeout(a.current),a.current=window.setTimeout((function(){e.apply(void 0,r)}),t)}}(a,500);return Object(D.jsx)("input",{type:"search",value:o,onChange:function(e){s(e.target.value),i(e.target.value)}})};a(182);var Ne=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){i&&(r({}),fetch("".concat("https://kitsu.io/api/edge/","anime?filter[text]=").concat(i,"&page[limit]=12")).then((function(e){return e.json()})).then((function(e){r(e)})))}),[i]),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)(u.a,{display:"flex",justifyContent:"center",children:[Object(D.jsx)(u.a,{marginRight:1}),Object(D.jsx)(s.b,{to:"/home",className:"text-decoration-none",children:Object(D.jsx)(d.a,{variant:"outlined",className:"botao",children:"Voltar"})})]}),Object(D.jsx)("h1",{children:"Pesquise um Anime:"}),Object(D.jsx)(we,{value:i,onChange:function(e){return l(e)}}),i&&!a.data&&Object(D.jsx)("span",{children:"Carregando..."}),a.data&&Object(D.jsx)("ul",{className:"animes-list",children:a.data.map((function(e){return Object(D.jsxs)("li",{children:[Object(D.jsx)("img",{src:e.attributes.posterImage.small,alt:e.attributes.canonicalTitle}),e.attributes.canonicalTitle]},e.id)}))})]})};var Se=function(){return Object(D.jsx)("div",{className:"fundoBack",children:Object(D.jsxs)(F.a,{store:ke,children:[Object(D.jsx)(H.a,{}),Object(D.jsxs)(s.a,{basename:"/BlogPessoal-Deploy",children:[Object(D.jsx)(ie,{}),Object(D.jsx)(i.c,{children:Object(D.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(D.jsx)(i.a,{exact:!0,path:"/",children:Object(D.jsx)(Oe,{})}),Object(D.jsx)(i.a,{path:"/login",children:Object(D.jsx)(Oe,{})}),Object(D.jsx)(i.a,{path:"/home",children:Object(D.jsx)(re,{})}),Object(D.jsx)(i.a,{path:"/cadastrousuario",children:Object(D.jsx)(ce,{})}),Object(D.jsx)(i.a,{path:"/temas",children:Object(D.jsx)(pe,{})}),Object(D.jsx)(i.a,{path:"/posts",children:Object(D.jsx)(W,{})}),Object(D.jsx)(i.a,{path:"/anime",children:Object(D.jsx)(Ne,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/formularioPostagem",children:Object(D.jsx)(ee,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/formularioPostagem/:id",children:Object(D.jsx)(ee,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/formularioTema",children:Object(D.jsx)(xe,{})}),Object(D.jsx)(i.a,{exact:!0,path:"/formularioTema/:id",children:Object(D.jsx)(xe,{})}),Object(D.jsx)(i.a,{path:"/deletarPostagem/:id",children:Object(D.jsx)(fe,{})}),Object(D.jsx)(i.a,{path:"/deletarTema/:id",children:Object(D.jsx)(ge,{})})]})}),Object(D.jsx)(me,{})]})]})})},Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,261)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(Se,{})}),document.getElementById("root")),Be()}},[[183,1,2]]]);
//# sourceMappingURL=main.ba377217.chunk.js.map