(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{28:function(e,r,a){},49:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a(19),s=a.n(t),n=(a(28),a(7)),i=a(2),l=a(0),o=function(e){var r=e.history;return Object(l.jsxs)("div",{className:"p-5",children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){r.push("/")},children:"Login"})]})},h=a(8),j=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],d=function(e){var r=e.id,a=e.superhero,c=e.alter_ego,t=e.first_appearance;return Object(l.jsxs)("div",{className:"card ms-2 mb-4",style:{maxWidth:325},children:[Object(l.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title text-center",children:a}),Object(l.jsx)("p",{className:"card-text text-center",children:c}),Object(l.jsxs)("small",{className:"text-center",children:[" ",t]})," ",Object(l.jsx)("br",{}),Object(l.jsx)(n.b,{to:"./hero/".concat(r),children:"More..."})]})]})},b=function(e){var r=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher incorrect");return j.filter((function(r){return r.publisher===e}))}(e.publisher);return Object(l.jsx)("div",{className:"row d-flex justify-content-around animate__animated animate__fadeIn",children:r.map((function(e){return Object(l.jsx)(d,Object(h.a)({},e),e.id)}))})},u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"DC heroes page"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"DC Comics"})]})},m=function(e){var r=e.history,a=Object(i.h)().heroeId;console.log(a);var c,t=(c=a,j.find((function(e){return e.id===c})));console.log(t);var s=t.superhero,n=t.alter_ego,o=t.first_appearance,h=t.publisher,d=t.characters;return t?Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(l.jsxs)("div",{className:"col-8 p-4",children:[Object(l.jsx)("h3",{children:s}),Object(l.jsxs)("ul",{className:"list-group list-group-flash",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Alter ego: "})," ",n]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"Publisher: "})," ",h]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("b",{children:"First appearance: "})," ",o]})]}),Object(l.jsx)("h5",{children:"Characters"}),Object(l.jsxs)("p",{children:[" ",d," "]}),".",Object(l.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){r.goBack()},children:"Return"})]})]}):Object(l.jsx)(i.a,{to:"./"})},p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Marvel heroes page"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"Marvel Comics"})]})},v=a(12),x=a(22),O=a.n(x),f=a(11),C=a(23),g=function(e){var r=e.history,a=Object(i.g)(),t=O.a.parse(a.search).query,s=void 0===t?"":t;console.log(s);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(C.useState)(e),a=Object(v.a)(r,2),c=a[0],t=a[1],s=function(e){var r=e.target;t(Object(h.a)(Object(h.a)({},c),{},Object(f.a)({},r.name,r.value)))};return[c,s,function(){t(e)}]}({searchText:s}),o=Object(v.a)(n,2),b=o[0],u=o[1],m=b.searchText,p=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),j.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"SearchScreen"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-6 p-5",children:[Object(l.jsx)("h4",{children:"Search Form"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?query=".concat(m))},children:[Object(l.jsx)("input",{type:"text",placeholder:"find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:m,onChange:u}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 w-100",children:"Search"})]})]}),Object(l.jsxs)("div",{className:"col-6 p-5 d-flex flex-column",children:[Object(l.jsx)("h4",{children:"Results"}),Object(l.jsx)("hr",{}),""===s&&Object(l.jsx)("div",{className:" alert alert-warning text-danger fw-bolder",children:"Search a hero"}),""!=s&&0===p.length&&Object(l.jsxs)("div",{className:"alert alert-danger text-dark fw-bolder",children:["There is no hero with ",s," name!! Try again please!!"]}),Object(l.jsx)("div",{className:"m-auto mt-3",children:p.map((function(e){return Object(l.jsx)(d,Object(h.a)({},e),e.id)}))})]})]}),Object(l.jsx)("div",{})]})},_=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(l.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(l.jsx)("div",{className:"navbar-collapse",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(l.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{}),Object(l.jsx)("div",{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/marvel",component:p}),Object(l.jsx)(i.b,{exact:!0,path:"/hero/:heroeId",component:m}),Object(l.jsx)(i.b,{exact:!0,path:"/dc",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/search",component:g}),Object(l.jsx)(i.a,{to:"/marvel"})]})})]})},y=function(){return Object(l.jsx)(n.a,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:o}),Object(l.jsx)(i.b,{path:"/",component:N})]})})},M=function(){return Object(l.jsx)(y,{})};s.a.render(Object(l.jsx)(M,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.035eed3b.chunk.js.map