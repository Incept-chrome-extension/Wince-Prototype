(this.webpackJsonpwince=this.webpackJsonpwince||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(25),i=a.n(s),o=(a(34),a(3)),l=a(4),r=a(6),u=a(5),d=(a(35),a(27)),h=a(10),j=(a(36),a(11)),b=a.n(j),p=a(0),g=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={quote:""},n.changeQuote=n.changeQuote.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"changeQuote",value:function(){}},{key:"componentDidMount",value:function(){var e=this;b.a.request({method:"GET",url:"https://quotes15.p.rapidapi.com/quotes/random/",headers:{"x-rapidapi-key":"b4718d6521msh013d8c64e02d282p16041ajsn3d7ff55e4203","x-rapidapi-host":"quotes15.p.rapidapi.com"}}).then((function(t){e.setState({quote:'" '+t.data.content+' "'}),localStorage.setItem("quote",t.content)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"quote",children:Object(p.jsx)("p",{className:"quote_line",children:this.state.quote})})}}]),a}(n.Component),f=(a(55),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).checkTime=function(e){return e<10&&(e="0"+e),e},n.getTime=function(){var e=new Date,t=e.getHours(),a=e.getMinutes();return t+":"+(a=n.checkTime(a))},n.updateDate=n.updateDate.bind(Object(h.a)(n)),n.state={date:n.getTime(),greet:""},n.interval=setInterval(n.updateDate,1e3),n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var e=(new Date).getHours();e<12?this.setState({greet:"Morning"}):e<18?this.setState({greet:"Afternoon"}):this.setState({greet:"Evening"})}},{key:"updateDate",value:function(){(new Date).getMinutes()>9?this.setState({date:(new Date).getHours()+":"+(new Date).getMinutes()}):this.setState({date:(new Date).getHours()+":0"+(new Date).getMinutes()})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"time",children:[Object(p.jsx)("div",{className:"time__text",children:this.state.date}),Object(p.jsxs)("div",{className:"time__wish",children:["Good ",this.state.greet]})]})}}]),a}(n.Component)),m=(a(56),a(57),a(9)),v=a(8),O=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getWeather=function(e,t){b.a.get("http://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&appid=42b24ff7a15bbbd20e83cba4e261bb4f").then((function(e){n.setState({temp:(e.data.main.temp-273).toPrecision(3)}),n.setState({weather:(e.data.weather[0].main-273).toPrecision(3)})}))},n.codeLatLng=function(e,t){b.a.get("http://api.positionstack.com/v1/reverse?access_key=1cf749045a8e75a2ef254b37c5934875&query="+e+","+t).then((function(e){console.log(e),n.setState({city:e.data.data[0].county})}))},n.state={city:"",temp:"",clouds:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.codeLatLng(t.coords.latitude,t.coords.longitude),e.getWeather(t.coords.latitude,t.coords.longitude)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"head",children:[Object(p.jsxs)("h1",{className:"head_temp",children:[this.state.temp,"\xb0"]}),Object(p.jsxs)("div",{className:"head_city",children:[Object(p.jsx)(m.a,{icon:v.d,className:"head_city_icon",size:"1x"}),Object(p.jsx)("h1",{className:"head_city_text",children:this.state.city})]})]})}}]),a}(n.Component),_=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"head",children:Object(p.jsx)(O,{})})}}]),a}(n.Component),k=a(15),x=a.n(k),q=a(29),y=a(26),S=(a(63),a(64),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={favicon:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"quicklink",children:[Object(p.jsx)("div",{className:"quicklink__icon",children:this.props.favicon?Object(p.jsx)("img",{src:this.props.favicon,alt:"favicon"}):Object(p.jsx)(m.a,{icon:v.c,size:"1x"})}),Object(p.jsx)("h5",{children:Object(p.jsx)("a",{href:this.props.url,rel:"noreferrer",target:"_blank",children:this.props.title})})]})}}]),a}(n.Component)),N=(a(65),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={favicon:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"quicklink__collapsed",children:Object(p.jsx)("a",{href:this.props.url,children:Object(p.jsx)("div",{className:"quicklink__icon__collapsed",children:this.props.favicon?Object(p.jsx)("img",{src:this.props.favicon,alt:"favicon"}):Object(p.jsx)(m.a,{icon:v.c,size:"1x"})})})})}}]),a}(n.Component)),w=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n,c;return Object(o.a)(this,a),(n=t.call(this,e)).toggleClasses=function(){n.state.collapse?n.setState({collapse:!1,ql:"ql__expanded",ql__head:"ql__head__expanded",ql__addlink:"ql__addlink__expanded"}):n.setState({collapse:!0,ql:"ql__collapsed",ql__head:"ql__head__collapsed",ql__addlink:"ql__addlink__collapsed"}),console.log(n.state)},n.addQL=Object(y.a)(x.a.mark((function e(){var t,a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=prompt("add name"))){e.next=3;break}return e.abrupt("return");case 3:if(null!==(a=prompt("add link"))){e.next=6;break}return e.abrupt("return");case 6:if(!/\S/.test(a)||!/\S/.test(t)){e.next=13;break}return"",c={name:t,link:a,favicon:""},e.next=11,n.setState((function(e){return{links:[].concat(Object(q.a)(e.links),[c])}}));case 11:s=JSON.stringify(n.state.links),localStorage.setItem("quicklinks",s);case 13:case"end":return e.stop()}}),e)}))),c=JSON.parse(localStorage.getItem("quicklinks"))?JSON.parse(localStorage.getItem("quicklinks")):[],n.state={links:c,collapse:!0,ql:"ql__collapsed",ql__head:"ql__head__collapsed",ql__addlink:"ql__addlink__collapsed"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log(localStorage.getItem("quicklinks"))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:this.state.ql,children:[Object(p.jsxs)("div",{className:this.state.ql__head,children:[Object(p.jsx)("div",{className:this.state.ql__addlink,onClick:this.addQL,children:Object(p.jsx)("p",{children:"Add Link"})}),Object(p.jsx)("div",{className:"ql__toggle__icon",onClick:this.toggleClasses,children:this.state.collapse?Object(p.jsx)(m.a,{icon:v.b,className:"icon__toggle",size:"1x",onclick:!0}):Object(p.jsx)(m.a,{icon:v.a,className:"icon__toggle",size:"1x",onclick:!0})})]}),this.state.collapse?Object(p.jsx)("div",{className:"expanded__links",children:this.state.links.map((function(e){return Object(p.jsx)(N,{title:e.name,url:e.link,favicon:e.favicon})}))}):Object(p.jsx)("div",{className:"ql__list",children:this.state.links.map((function(e){return Object(p.jsx)(S,{title:e.name,url:e.link,favicon:e.favicon})}))})]})}}]),a}(n.Component),D=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeBg=function(){Object(d.a)({accessKey:"tsztW2OvoW1VwddrbuWGkFHgxwzwG7KyIHVRRz98Mks"}).photos.getRandom({query:"view",orientation:"landscape",count:1}).then((function(e){n.setState({bg:e.response[0].urls.full});var t=new Date;n.setState({day:t.getDay()}),localStorage.setItem("bg",n.state.bg),localStorage.setItem("today",n.state.day),console.log(n.state)}))},n.state={bg:localStorage.getItem("bg"),day:"",quote:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=new Date;localStorage.getItem("today")==e.getDay()?(console.log("if"),this.setState({bg:localStorage.getItem("bg")}),this.setState({day:e.getDay()})):this.changeBg(),console.log(this.state)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(this.state.bg,")")},children:[Object(p.jsx)(w,{}),Object(p.jsx)(_,{}),Object(p.jsx)(f,{}),Object(p.jsx)(g,{}),Object(p.jsx)("div",{className:"changebgicon",onClick:this.changeBg,children:Object(p.jsx)(m.a,{icon:v.e,size:"1x"})})]})}}]),a}(n.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);