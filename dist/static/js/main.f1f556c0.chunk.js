(this.webpackJsonpwince=this.webpackJsonpwince||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(27),i=a.n(s),o=(a(35),a(3)),r=a(4),l=a(6),u=a(5),d=(a(36),a(29)),h=a(12),j=(a(37),a(10)),p=a.n(j),b=a(0),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={quote:"",originator:""},n.changeQuote=n.changeQuote.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"changeQuote",value:function(){}},{key:"componentDidMount",value:function(){var e=this;p.a.request({method:"GET",url:"https://quotes15.p.rapidapi.com/quotes/random/",headers:{"x-rapidapi-key":"b4718d6521msh013d8c64e02d282p16041ajsn3d7ff55e4203","x-rapidapi-host":"quotes15.p.rapidapi.com"}}).then((function(t){e.setState({quote:'" '+t.data.content+' "'}),e.setState({originator:"- "+t.data.originator.name}),localStorage.setItem("quote",t.content)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"quote",children:[Object(b.jsx)("p",{className:"quote_line",children:this.state.quote}),Object(b.jsx)("p",{className:"quote_originator",children:this.state.originator}),Object(b.jsx)("div",{})]})}}]),a}(n.Component),m=(a(56),a(57),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).checkTime=function(e){return e<10&&(e="0"+e),e},n.getTime=function(){var e=new Date,t=e.getHours();t>12&&(t%=12);var a=e.getMinutes();return t+":"+(a=n.checkTime(a))},n.updateDate=n.updateDate.bind(Object(h.a)(n)),n.state={date:n.getTime(),greet:"",ampm:""},n.interval=setInterval(n.updateDate,1e3),n}return Object(r.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var e=(new Date).getHours();e<12?this.setState({greet:"Morning"}):e<18?this.setState({greet:"Afternoon"}):this.setState({greet:"Evening"})}},{key:"updateDate",value:function(){(new Date).getHours()<=12?((new Date).getMinutes()>9?this.setState({date:(new Date).getHours()+":"+(new Date).getMinutes()}):this.setState({date:(new Date).getHours()+":0"+(new Date).getMinutes()}),this.setState({ampm:"a.m."})):((new Date).getMinutes()>9?this.setState({date:(new Date).getHours()%12+":"+(new Date).getMinutes()}):this.setState({date:(new Date).getHours()%12+":0"+(new Date).getMinutes()}),this.setState({ampm:"p.m."}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"time",children:[Object(b.jsxs)("div",{className:"time__text",children:[this.state.date,Object(b.jsx)("span",{className:"time__ampm",children:this.state.ampm})]}),Object(b.jsxs)("div",{className:"time__wish",children:["Good ",this.state.greet]})]})}}]),a}(n.Component)),f=(a(59),a(60),a(9)),_=a(7),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getWeather=function(e,t){p.a.get("http://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&appid=42b24ff7a15bbbd20e83cba4e261bb4f").then((function(e){n.setState({temp:(e.data.main.temp-273).toPrecision(3)}),n.setState({weather:(e.data.weather[0].main-273).toPrecision(3)})}))},n.codeLatLng=function(e,t){p.a.get("http://api.positionstack.com/v1/reverse?access_key=1cf749045a8e75a2ef254b37c5934875&query="+e+","+t).then((function(e){console.log(e),n.setState({city:e.data.data[0].county})}))},n.state={city:"",temp:"",clouds:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.codeLatLng(t.coords.latitude,t.coords.longitude),e.getWeather(t.coords.latitude,t.coords.longitude)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"head",children:[Object(b.jsxs)("h1",{className:"head_temp",children:[this.state.temp,"\xb0"]}),Object(b.jsxs)("div",{className:"head_city",children:[Object(b.jsx)(f.a,{icon:_.c,className:"head_city_icon",size:"1x"}),Object(b.jsx)("h1",{className:"head_city_text",children:this.state.city})]})]})}}]),a}(n.Component),v=(a(65),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"gs",children:Object(b.jsxs)("form",{action:"https://www.google.com/search",className:"gs__form",method:"get",name:"searchform",target:"_blank",children:[Object(b.jsx)("input",{autoComplete:"off",className:"gs__input",name:"q",id:"gs__ip",placeholder:"Search",required:"required",type:"text"}),Object(b.jsx)("button",{className:"gs__button",type:"submit",children:"Search"})]})})}}]),a}(n.Component)),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)(v,{}),Object(b.jsx)(O,{})]})}}]),a}(n.Component),x=a(18),q=a(11),y=a.n(q),S=a(14),w=(a(67),a(68),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={ficon:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({ficon:this.props.favicon})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"quicklink",children:[Object(b.jsxs)("div",{className:"quicklink__content",children:[Object(b.jsx)("div",{className:"quicklink__icon",children:this.state.ficon?Object(b.jsx)("img",{className:"quicklink__favicon",loading:"eager",src:this.state.ficon,alt:"f"}):Object(b.jsx)(f.a,{icon:_.b,size:"1x"})}),Object(b.jsx)("h5",{children:Object(b.jsx)("a",{href:this.props.url,rel:"noreferrer",target:"_blank",children:this.props.title})})]}),Object(b.jsx)("div",{className:"delete__icon",onClick:this.props.deleteHandler,children:Object(b.jsx)(f.a,{icon:_.f,size:"1x"})})]})}}]),a}(n.Component)),N=(a(69),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"quicklink__collapsed",children:Object(b.jsx)("a",{href:this.props.url,children:Object(b.jsx)("div",{className:"quicklink__icon__collapsed",children:this.props.favicon?Object(b.jsx)("img",{className:"quciklink__favicon__collapsed",src:this.props.favicon,alt:""}):Object(b.jsx)(f.a,{icon:_.b,size:"1x"})})})})}}]),a}(n.Component)),D=a(28),C=a.n(D),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n,c;return Object(o.a)(this,a),(n=t.call(this,e)).toggleClasses=function(){n.state.collapse?n.setState({collapse:!1,ql:"ql__expanded",ql__head:"ql__head__expanded",ql__addlink:"ql__addlink__expanded",qlti:"ql__toggle__icon__expanded"}):n.setState({collapse:!0,ql:"ql__collapsed",ql__head:"ql__head__collapsed",ql__addlink:"ql__addlink__collapsed",qlti:"ql__toggle__icon__collapsed"}),console.log(n.state)},n.addQL=Object(S.a)(y.a.mark((function e(){var t,a,c,s,i,o,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=prompt("add name"))){e.next=3;break}return e.abrupt("return");case 3:if(null!==(a=prompt("add link"))){e.next=6;break}return e.abrupt("return");case 6:if(!/\S/.test(a)||!/\S/.test(t)){e.next=16;break}return c="",0==a.indexOf("http://")||0==a.indexOf("https://")?(s=a.split("/"),i=s[2]):(s=a.split("/"),i=s[0],a="http://"+a),o=C()(),e.next=12,p.a.get("http://favicongrabber.com/api/grab/"+i).then(function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=200==t.status?t.data.icons[0].src:"";case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){c=""}));case 12:r={name:t,link:a,favicon:c,key:o},n.setState((function(e){return{links:[].concat(Object(x.a)(e.links),[r])}})),l=JSON.stringify(n.state.links),localStorage.setItem("quicklinks",l);case 16:case"end":return e.stop()}}),e)}))),n.deleteLink=function(){var e=Object(S.a)(y.a.mark((function e(t){var a,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=Object(x.a)(n.state.links),c=0;c<a.length;c++)t==a[c].key&&a.splice(c,1);return e.next=4,n.setState({links:a});case 4:s=JSON.stringify(n.state.links),localStorage.setItem("quicklinks",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=JSON.parse(localStorage.getItem("quicklinks"))?JSON.parse(localStorage.getItem("quicklinks")):[],n.state={links:c,collapse:!0,ql:"ql__collapsed",ql__head:"ql__head__collapsed",ql__addlink:"ql__addlink__collapsed",qlti:"ql__toggle__icon__collapsed"},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log(localStorage.getItem("quicklinks"))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:this.state.ql,children:[Object(b.jsx)("div",{className:this.state.qlti,onClick:this.toggleClasses,children:this.state.collapse?Object(b.jsx)(f.a,{icon:_.a,className:"icon__toggle",size:"1x"}):Object(b.jsx)(f.a,{icon:_.e,className:"icon__toggle",size:"1x"})}),Object(b.jsx)("div",{className:this.state.ql__head,children:Object(b.jsx)("div",{className:this.state.ql__addlink,onClick:this.addQL,children:Object(b.jsx)("p",{children:"Add Link"})})}),this.state.collapse?Object(b.jsx)("div",{className:"ql__list__collapsed",children:this.state.links.map((function(e){return Object(b.jsx)(N,{title:e.name,url:e.link,favicon:e.favicon},e.key)}))}):Object(b.jsx)("div",{className:"ql__list__expanded",children:this.state.links.map((function(t){return Object(b.jsx)(w,{title:t.name,url:t.link,favicon:t.favicon,deleteHandler:function(){return e.deleteLink(t.key)}},t.key)}))})]})}}]),a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeBg=function(){var e=["Mountains","animals","Nature","snow","alberta","switzerland","water","california","italy","view"],t=e[Math.floor(Math.random()*e.length)];console.log(t),Object(d.a)({accessKey:"tsztW2OvoW1VwddrbuWGkFHgxwzwG7KyIHVRRz98Mks"}).photos.getRandom({query:t,orientation:"landscape",count:1}).then((function(e){n.setState({bg:e.response[0].urls.full});var t=new Date;n.setState({day:t.getDay()}),localStorage.setItem("bg",n.state.bg),localStorage.setItem("today",n.state.day),console.log(n.state)}))},n.state={bg:localStorage.getItem("bg"),day:"",quote:""},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=new Date;localStorage.getItem("today")==e.getDay()?(console.log("if"),this.setState({bg:localStorage.getItem("bg")}),this.setState({day:e.getDay()})):this.changeBg(),console.log(this.state)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",style:{backgroundImage:"url(".concat(this.state.bg,")")},children:[Object(b.jsx)(M,{}),Object(b.jsx)(k,{}),Object(b.jsx)(m,{}),Object(b.jsx)(g,{}),Object(b.jsx)("div",{className:"changebgicon",onClick:this.changeBg,children:Object(b.jsx)(f.a,{icon:_.d,size:"1x"})})]})}}]),a}(n.Component),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);