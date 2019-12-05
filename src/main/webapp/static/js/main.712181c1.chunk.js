(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{55:function(e,t,a){e.exports=a(88)},60:function(e,t,a){},62:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),c=(a(60),a(61),a(62),a(15)),i=a(23),s=a(29),m=a.n(s),u=a(19),d=a.n(u),h=a(8),E=a.n(h),p=a(91),g=a(90),k=a(18),f=a.n(k),b=a(35),v=a.n(b),w=a(12),y=a.n(w),S=a(16),j=a.n(S),C=a(31),x=a(32),N=a(4),O=function(){function e(){var t=this;Object(C.a)(this,e),this.stakeholders=[],this.newStakeholderName="",this.newStakeholderEmail="",this.addStakeHolder=function(){if(""===t.newStakeholderName||""===t.newStakeholderEmail)return"error";t.postStakeholder(),t.newStakeholderName="",t.newStakeholderEmail=""},this.message=function(e){alert("this is something"+e)},this.getStakeholders()}return Object(x.a)(e,[{key:"getStakeholders",value:function(){var e=this;console.log("fetching"),fetch("https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder").then((function(t){return t.json().then((function(t){console.log(t),e.stakeholders=t}))}))}},{key:"deleteStakeholder",value:function(e,t){var a="https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder/"+e+"/"+t;console.log("fetching"),fetch(a,{method:"DELETE"}).then((function(){console.log("deleted stakeholder with name and email "+e+"  and "+t)}));var n=this.findIndexInStakeholdersArray(e,t);this.stakeholders.splice(n,1)}},{key:"findIndexInStakeholdersArray",value:function(e,t){for(var a=0;this.stakeholders.length;a++)if(this.stakeholders[a].name===e&&this.stakeholders[a].email===t)return a}},{key:"postStakeholder",value:function(){var e=this;console.log("posting"),fetch("https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.newStakeholderName,email:this.newStakeholderEmail})}).then((function(){return e.getStakeholders()}))}}]),e}();Object(N.g)(O,{stakeholders:N.l,newStakeholderName:N.l,newStakeholderEmail:N.l});var P=new O,T=Object(i.f)(Object(c.a)((function(e){var t=e.history;return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,{bg:"light",expand:"lg"},l.a.createElement("img",{alt:"/web/public/dragon.png",src:"dragon.png",width:"40",height:"40",className:"d-inline-block align-top"}),l.a.createElement(p.a.Brand,null,"Dragon Planner"),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,null,"Identificer Stakeholders"),l.a.createElement(g.a.Link,{onClick:function(){return t.push("/keystakeholdercomponent")}},"Identificer Key Stakeholders")),l.a.createElement(g.a,{className:"mr-sm-2"},l.a.createElement(j.a,{variant:"light"},"Log ud")))))),l.a.createElement(d.a,null,l.a.createElement(E.a,null," "),l.a.createElement(E.a,{sm:"6"}," ",l.a.createElement(f.a,{style:{width:"33.6rem"}},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,"Identificer Stakeholders"),l.a.createElement(f.a.Text,null,"I dette afsnit skal du identificere dine Stakeholders. En Stakeholder kan v\xe6re en person eller organisation, der vil blive p\xe5virket af projektet, enten negativt eller positivt."))),l.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Navn p\xe5 Stakeholder"),l.a.createElement("th",null,"E-mail p\xe5 Stakeholder"),l.a.createElement("th",null," "))),l.a.createElement("tbody",null,P.stakeholders.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,l.a.createElement(j.a,{style:{position:"relative",zIndex:"10000000"},variant:"outline-danger",onClick:function(){P.deleteStakeholder(e.name,e.email)}}," x ")))})),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(y.a.Row,null,l.a.createElement(E.a,null,l.a.createElement(y.a.Control,{value:P.newStakeholderName,size:"xs",type:"text",placeholder:"Navn",onChange:function(e){return P.newStakeholderName=e.target.value}})))),l.a.createElement("td",null,l.a.createElement(y.a.Row,null,l.a.createElement(E.a,null,l.a.createElement(y.a.Control,{value:P.newStakeholderEmail,size:"xs",type:"text",placeholder:"E-mail",onChange:function(e){return P.newStakeholderEmail=e.target.value}})))),l.a.createElement("td",null,l.a.createElement(j.a,{variant:"outline-success",onClick:function(){console.log(P.newStakeholderEmail),console.log(P.newStakeholderName),"error"===P.addStakeHolder()&&window.alert("Name and Email can't be empty")}},"Tilf\xf8j")))))),l.a.createElement(E.a,null," ",l.a.createElement(j.a,{variant:"info",onClick:function(){return t.push("/keystakeholdercomponent")}},"G\xe5 til n\xe6ste side")))))}))),I=Object(c.a)(T),A=function(){function e(){Object(C.a)(this,e),this.loginUsername="",this.loginPassword=""}return Object(x.a)(e,[{key:"getToken",value:function(){console.log("Acquiring token"),fetch("https://projektstyringsvaerktoej.herokuapp.com/rest/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.loginUsername,password:this.loginPassword})}).then((function(e){return e.text().then((function(e){console.log(e)}))}))}}]),e}();Object(N.g)(A,{loginUsername:N.l,loginPassword:N.l});var L=new A,D=Object(i.f)(Object(c.a)((function(e){var t=e.history;e.match;return l.a.createElement("div",{className:"login"},l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,{bg:"light",expand:"lg"},l.a.createElement("img",{alt:"/web/public/dragon.png",src:"dragon.png",width:"40",height:"40",className:"d-inline-block align-top"}),l.a.createElement(p.a.Brand,null,"Dragon Planner - Login"),l.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"})))),l.a.createElement(d.a,null,l.a.createElement(E.a,null),l.a.createElement(E.a,{xs:6},l.a.createElement(y.a,null,l.a.createElement(y.a.Group,{controlId:"formBasicEmail"},l.a.createElement(y.a.Label,null,"Email address"),l.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",value:L.loginUsername,onChange:function(e){L.loginUsername=e.target.value,console.log(L.loginUsername)}})),l.a.createElement(y.a.Group,{controlId:"formBasicPassword"},l.a.createElement(y.a.Label,null,"Password"),l.a.createElement(y.a.Control,{type:"password",placeholder:"Password",value:L.loginPassword,onChange:function(e){L.loginPassword=e.target.value,console.log(L.loginPassword)}})),l.a.createElement(j.a,{variant:"primary",type:"submit",onClick:function(){L.getToken(),t.push("/stakeholdercomponent")}},"Submit"),l.a.createElement(j.a,{onClick:function(){window.deferredPrompt.prompt()}},"Install\xe9r som Native App"))),l.a.createElement(E.a,null))))}))),U=Object(c.a)(D),B=a(17),R=a.n(B),W=Object(i.f)(Object(c.a)((function(e){var t=e.history;return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,{bg:"light",expand:"lg"},l.a.createElement("img",{alt:"/web/public/dragon.png",src:"dragon.png",width:"40",height:"40",className:"d-inline-block align-top"}),l.a.createElement(p.a.Brand,null,"Dragon Planner"),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{onClick:function(){return t.push("/stakeholdercomponent")}},"Identificer Stakeholders"),l.a.createElement(g.a.Link,null,"Identificer Key Stakeholders")),l.a.createElement(g.a,{className:"mr-sm-2"},l.a.createElement(j.a,{variant:"light"},"Log ud")))))),l.a.createElement(d.a,null,l.a.createElement(E.a,null," "),l.a.createElement(E.a,{sm:"6"}," ",l.a.createElement(f.a,{style:{width:"33.6rem"}},l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,"Identificer Key stakeholders"),l.a.createElement(f.a.Text,null,"I dette afsnit skal du identificere dine Keystakeholders ud fra D.A.N.C.E metoden. Hvad er D.A.N.C.E? ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"DECISIONS:")," ",l.a.createElement("br",null),"Tager beslutninger der kan har indflydelse p\xe5 projektets budget.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"AUTHORITY:")," ",l.a.createElement("br",null),"Have the authority to grant permission to proceed with the project.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"NEED:")," ",l.a.createElement("br",null),"Directly benefit from or are impacted by the project and consequently need to\xa0know all about it.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"CONNECTIONS:")," ",l.a.createElement("br",null),"Are connected to the people, money, or resources required to remove roadblocks or exert influence\xa0to ensure project success. These are the champions, the active supporters who will ensure your project's success.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"ENERGY:")," ",l.a.createElement("br",null),"Have positive or negative energy that could affect project success"))),l.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"#"),l.a.createElement("th",null,"Navn p\xe5 Stakeholder"),l.a.createElement("th",null,"D"),l.a.createElement("th",null,"A"),l.a.createElement("th",null,"N"),l.a.createElement("th",null,"C"),l.a.createElement("th",null,"E"))),l.a.createElement("tr",null,P.stakeholders.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1))})),l.a.createElement("th",null),l.a.createElement("th",null,l.a.createElement("label",null,l.a.createElement(R.a.Prepend,null,l.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),l.a.createElement("th",null,l.a.createElement("label",null,l.a.createElement(R.a.Prepend,null,l.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),l.a.createElement("th",null,l.a.createElement("label",null,l.a.createElement(R.a.Prepend,null,l.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),l.a.createElement("th",null,l.a.createElement("label",null,l.a.createElement(R.a.Prepend,null,l.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),l.a.createElement("th",null,l.a.createElement("label",null,l.a.createElement(R.a.Prepend,null,l.a.createElement(R.a.Checkbox,{"aria-label":"Checkbox for following text input"}))))))),l.a.createElement(E.a,null,l.a.createElement(j.a,{variant:"info"},"F\xe6rdig")))))}))),H=Object(c.a)(W);var G=Object(c.a)((function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:U}),l.a.createElement(i.a,{path:"/stakeholdercomponent",component:I}),l.a.createElement(i.a,{path:"/keystakeholdercomponent",component:H}),l.a.createElement(i.a,{render:function(){return l.a.createElement("h1",null," Display 404 page here ")}}))})),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=a(25);o.a.render(l.a.createElement(q.a,null,l.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[55,1,2]]]);
//# sourceMappingURL=main.712181c1.chunk.js.map