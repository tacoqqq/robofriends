(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(6),o=n.n(i),l=(n(12),n(1)),c=n(2),s=n(4),m=n(3),u=(n(13),function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:e.searchChange}))}),h=function(e){var a=e.id,n=e.name,t=e.email;return console.log(e),r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("p",null,n),r.a.createElement("p",null,t))},d=function(e){var a=e.robots.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))}));return r.a.createElement("div",null,a)},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)},g=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,r.a.createElement("h1",null,"Oops! Something went wrong."),r.a.createElement("p",null,"Please refresh the page and try again.")):this.props.children}}]),n}(r.a.Component),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).onSearchChange=function(e){var a=e.target.value;t.setState({searchTerm:a})},t.state={robots:p,searchTerm:""},t}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchTerm)}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(d,{robots:a}))))}}]),n}(r.a.Component);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.33d89a37.chunk.js.map