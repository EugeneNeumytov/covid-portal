(this["webpackJsonpcovid-portal"]=this["webpackJsonpcovid-portal"]||[]).push([[0],{105:function(t,e,a){t.exports={header:"Header_header__39cfD",headerTitle:"Header_headerTitle__9VMmx",headerText:"Header_headerText__2_cr9"}},132:function(t,e,a){t.exports={headText:"GraphStatistic_headText__yob0b",graph:"GraphStatistic_graph__1Fd2Y"}},189:function(t,e,a){t.exports={footer:"Footer_footer__-x65y"}},190:function(t,e,a){t.exports={loader:"Preloader_loader__1zZvW"}},220:function(t,e,a){},242:function(t,e,a){},379:function(t,e,a){"use strict";a.r(e);var n,s,c=a(0),i=a.n(c),r=a(45),o=a.n(r),l=(a(220),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,388)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))}),u=a(60),d=a(20),j=a(184).create({baseURL:"https://covid-193.p.rapidapi.com/",withCredentials:!0,headers:{"x-rapidapi-key":"d6f449e374msh95fbebc4c03b5fdp15b26ejsn9238dc1aa6d7","x-rapidapi-host":"covid-193.p.rapidapi.com",useQueryString:!0}}),h=function(){return j.get("countries").then((function(t){return t.data.response}))},p=function(t,e){return j.get("history",{params:{country:t,day:e}}).then((function(t){return t.data})).catch((function(t){return console.log(t.message)}))},f="LIST-OF-COUNTRIES",b="LATEST-TOTALS",O="COUNTRY",y={countriesList:[],latestTotals:{cases:{},deaths:{}},country:"Ukraine",allWorld:"all"},x=function(){return function(t){return h().then((function(e){t({type:f,countriesList:e})}))}},v=function(t,e){return function(a){return p(t,e).then((function(t){var e;a((e=t.response[0],{type:b,latestTotals:e}))})).catch((function(t){return console.log(t.message)}))}},m=function(t){return function(e){e(function(t){return{type:O,country:t}}(t))}},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(d.a)(Object(d.a)({},t),{},{countriesList:e.countriesList});case b:return Object(d.a)(Object(d.a)({},t),{},{latestTotals:e.latestTotals});case O:return Object(d.a)(Object(d.a)({},t),{},{country:e.country});default:return t}},T=a(185),C="INITIALIZED-SUCCESS",g={initialized:!1},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return Object(d.a)(Object(d.a)({},t),{},{initialized:!0});default:return t}},D="GRAPHIC-DATA",S="SUCCESS",k="CLEAR-DATA",L={data:[{name:0,cases:0,recovered:0,deaths:0}],success:!1},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:for(var a=t.data,n=0;n<e.data.length;n++){var s={name:e.data[n].response[0].day,cases:e.data[n].response[0].cases.total,recovered:e.data[n].response[0].cases.recovered,deaths:e.data[n].response[0].deaths.total};a.push(s)}return Object(d.a)(Object(d.a)({},t),{},{data:a});case S:return Object(d.a)(Object(d.a)({},t),{},{success:!0});case k:return Object(d.a)(Object(d.a)({},t),{},{data:[{name:0,cases:0,recovered:0,deaths:0}]});default:return t}},U=Object(u.c)({countries:_,app:N,graphic:w}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,A=Object(u.e)(U,F(Object(u.a)(T.a))),M=a(34),E=a(65),B=a(46),G=a(47),I=a(48),W=a(49),z=(a(242),a(105)),P=a.n(z),R=a(73),H=a.n(R),J=a(2),K=function(){return Object(J.jsxs)("nav",{className:H.a.nav,children:[Object(J.jsx)(E.b,{className:H.a.item,to:"/world",activeClassName:H.a.activeLink,children:"All World"}),Object(J.jsx)(E.b,{className:H.a.item,to:"/countries",activeClassName:H.a.activeLink,children:"Countries"})]})},q=function(){return Object(J.jsxs)("div",{className:P.a.header,children:[Object(J.jsx)("h1",{className:P.a.headerTitle,children:"COVID-19"}),Object(J.jsx)("h2",{className:P.a.headerText,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u041f\u043e\u0440\u0442\u0430\u043b"}),Object(J.jsx)(K,{})]})},V=a(189),Q=a.n(V),X=function(){return Object(J.jsx)("div",{className:Q.a.footer,children:Object(J.jsx)("h3",{children:"@ Copyright Neumytov Eugene 2021"})})},Y=(a.p,a(190),a(18)),Z=a(85),$=a.n(Z),tt=a(74),et=a.n(tt),at=function(t){return Object(J.jsx)("div",{className:et.a.mainField,children:Object(J.jsxs)("div",{className:et.a.field,children:[Object(J.jsx)("h2",{children:"From the beginning of pandemia"}),Object(J.jsxs)("div",{className:et.a.totalCases,children:["Total Cases: ",t.latestTotals.cases.total]}),Object(J.jsxs)("div",{className:et.a.recovered,children:["Recovered: ",t.latestTotals.cases.recovered]}),Object(J.jsxs)("div",{className:et.a.deaths,children:["Deaths: ",t.latestTotals.deaths.total]})]})})},nt=a(86),st=a.n(nt),ct=function(t){return Object(J.jsx)("div",{className:st.a.mainField,children:Object(J.jsxs)("div",{className:st.a.field,children:[Object(J.jsxs)("h2",{children:["Daily Statistic ",t.latestTotals.day]}),Object(J.jsxs)("div",{className:st.a.newCases,children:["New Cases: ",t.latestTotals.cases.new]}),Object(J.jsxs)("div",{className:st.a.newDeaths,children:["New Deaths: ",t.latestTotals.deaths.new]})]})})},it=a(387),rt=a(381),ot=a(208),lt=a(209),ut=a(385),dt=a(84),jt=a(90),ht=a(211),pt=a(132),ft=a.n(pt),bt=function(t){return t.data.sucess,Object(J.jsxs)("div",{className:ft.a.graph,children:[Object(J.jsx)("h2",{className:ft.a.headText,children:"Graphic Statistic"}),Object(J.jsx)(it.a,{width:"100%",height:500,children:Object(J.jsxs)(rt.a,{data:t.data.data,margin:{top:50,right:100,left:100,bottom:50},children:[Object(J.jsxs)("defs",{children:[Object(J.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(J.jsx)("stop",{offset:"5%",stopColor:"#0a0fff",stopOpacity:.8}),Object(J.jsx)("stop",{offset:"95%",stopColor:"#0a0fff",stopOpacity:0})]}),Object(J.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(J.jsx)("stop",{offset:"5%",stopColor:"#ff762c",stopOpacity:.8}),Object(J.jsx)("stop",{offset:"95%",stopColor:"#ff762c",stopOpacity:0})]}),Object(J.jsxs)("linearGradient",{id:"colorDv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(J.jsx)("stop",{offset:"5%",stopColor:"#000",stopOpacity:.8}),Object(J.jsx)("stop",{offset:"95%",stopColor:"#000",stopOpacity:0})]})]}),Object(J.jsx)(ot.a,{dataKey:"name"}),Object(J.jsx)(lt.a,{}),Object(J.jsx)(ut.a,{strokeDasharray:"3 3"}),Object(J.jsx)(dt.a,{wrapperStyle:{bottom:20}}),Object(J.jsx)(jt.a,{}),Object(J.jsx)(ht.a,{type:"monotone",dataKey:"cases",stroke:"#0a0fff",fillOpacity:1,fill:"url(#colorUv)"}),Object(J.jsx)(ht.a,{type:"monotone",dataKey:"recovered",stroke:"#ff762c",fillOpacity:1,fill:"url(#colorPv)"}),Object(J.jsx)(ht.a,{type:"monotone",dataKey:"deaths",stroke:"#000",fillOpacity:1,fill:"url(#colorDv)"})]},t.data.data)})]})},Ot=function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(t.getUTCMonth()<10?"0".concat(t.getUTCMonth()+1):t.getUTCMonth()+1,"-").concat(t.getUTCDate()<10?"0".concat(t.getUTCDate()):t.getUTCDate())},yt=function(t){Object(I.a)(a,t);var e=Object(W.a)(a);function a(){return Object(B.a)(this,a),e.apply(this,arguments)}return Object(G.a)(a,[{key:"refreshGraphData",value:function(){this.props.clearGraphicData();var t=function(){for(var t=(new Date).getTime()-new Date("2020-03-01").getTime(),e=Math.ceil(t/1e3/3600/24/30),a=[],n=4;n<e+3;n++){var s=void 0,c=2020;n>12?(s=n-12,c=2021):s=n,a.push("".concat(c,"-").concat(s<10?"0".concat(s):s,"-01"))}return a.push(Ot()),a}();this.props.getGraphicData(this.props.country,t)}},{key:"componentDidMount",value:function(){this.refreshGraphData()}},{key:"componentDidUpdate",value:function(t,e,a){this.props.country!==t.country&&this.refreshGraphData()}},{key:"componentWillUnmount",value:function(){this.props.clearGraphicData()}},{key:"render",value:function(){return Object(J.jsx)("div",{children:Object(J.jsx)(bt,{data:this.props.data})})}}]),a}(i.a.Component),xt=Object(M.b)((function(t){return{data:t.graphic}}),{getGraphicData:function(t,e){return function(a){var n=e.map((function(e){return p(t,e)}));Promise.all(n).then((function(t){return a(function(t){return{type:D,data:t}}(t))})).catch((function(t){return console.log(t.message)})).then(a({type:S}))}},clearGraphicData:function(){return function(t){t({type:k})}}})(yt),vt=a(23),mt=a(88),_t=a.n(mt),Tt=a.p+"static/media/searchIcon.61262024.ico",Ct=function(t){var e=Object(c.useState)(""),a=Object(vt.a)(e,2),i=a[0],r=a[1],o=Object(c.useState)("none"),l=Object(vt.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)(!0),h=Object(vt.a)(j,2),p=h[0],f=h[1];Object(c.useEffect)((function(){b()}));var b=function(){document.querySelectorAll(".list")[0].style.display=u},O=function(t){var e=t.target.innerHTML;d("none"),r(e),f(!1)};return Object(J.jsxs)("div",{className:_t.a.searchField,children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("input",{className:_t.a.input,type:"text",placeholder:"choose the country",onFocus:function(){s=t.countriesList,n=s.map((function(t,e){return Object(J.jsx)("li",{onClick:O,children:t},e)}))},value:i,onChange:function(t){d("block"),r(t.target.value),function(t){for(var e=t.value.toUpperCase(),a=document.querySelectorAll(".list")[0].querySelectorAll("li"),n=0;n<a.length;n++)a[n].innerHTML.toUpperCase().indexOf(e)>-1?a[n].style.display="":a[n].style.display="none"}(t.target)}}),Object(J.jsx)("button",{className:_t.a.searchBtn,disabled:p,onClick:function(){t.setCountry(i),r(""),f(!0)},children:Object(J.jsx)("img",{src:Tt,alt:"O"})})]}),Object(J.jsx)("div",{className:_t.a.dropList,id:"dropList",children:Object(J.jsx)("ul",{className:"list",children:n})})]})},gt=function(t){return Object(J.jsxs)("div",{className:$.a.mainBody,children:[Object(J.jsx)(Ct,{countriesList:t.countries.countriesList,setCountry:t.setCountry}),Object(J.jsx)("div",{className:$.a.headText,children:Object(J.jsx)("h2",{children:t.countries.country})}),Object(J.jsxs)("div",{className:$.a.statistic,children:[Object(J.jsx)(at,{latestTotals:t.countries.latestTotals}),Object(J.jsx)(ct,{latestTotals:t.countries.latestTotals})]}),Object(J.jsx)("div",{className:$.a.empty}),Object(J.jsx)(xt,{country:t.countries.country})]})},Nt=function(t){Object(I.a)(a,t);var e=Object(W.a)(a);function a(){return Object(B.a)(this,a),e.apply(this,arguments)}return Object(G.a)(a,[{key:"refreshCountry",value:function(){var t=Ot();this.props.getLatestTotals(this.props.countries.country,t)}},{key:"componentDidMount",value:function(){this.refreshCountry()}},{key:"componentDidUpdate",value:function(t,e,a){this.props.countries.country!==t.countries.country&&this.refreshCountry()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(J.jsx)("div",{children:Object(J.jsx)(gt,{countries:this.props.countries,setCountry:this.props.setCountry})})}}]),a}(i.a.Component),Dt=Object(M.b)((function(t){return{countries:t.countries}}),{setCountry:m,getLatestTotals:v})(Nt),St=a(89),kt=a.n(St),Lt=function(t){return Object(J.jsxs)("div",{className:kt.a.mainBody,children:[Object(J.jsx)("div",{className:kt.a.headText,children:Object(J.jsx)("h2",{children:"All World"})}),Object(J.jsxs)("div",{className:kt.a.statistic,children:[Object(J.jsx)(at,{latestTotals:t.countries.latestTotals}),Object(J.jsx)(ct,{latestTotals:t.countries.latestTotals})]}),Object(J.jsx)("div",{className:kt.a.empty}),Object(J.jsx)(xt,{country:t.countries.allWorld})]})},wt=function(t){Object(I.a)(a,t);var e=Object(W.a)(a);function a(){return Object(B.a)(this,a),e.apply(this,arguments)}return Object(G.a)(a,[{key:"refreshCountry",value:function(){this.props.getLatestTotals(this.props.countries.allWorld,Ot())}},{key:"componentDidMount",value:function(){this.refreshCountry()}},{key:"componentDidUpdate",value:function(t,e,a){this.props.countries.allWorld!==t.countries.allWorld&&this.refreshCountry()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(J.jsx)("div",{children:Object(J.jsx)(Lt,{countries:this.props.countries})})}}]),a}(i.a.Component),Ut=Object(M.b)((function(t){return{countries:t.countries}}),{getLatestTotals:v,setCountry:m})(wt),Ft=function(t){Object(I.a)(a,t);var e=Object(W.a)(a);function a(){return Object(B.a)(this,a),e.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized,Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(q,{}),Object(J.jsxs)("div",{className:"wrapper",children:[Object(J.jsx)(Y.b,{path:"/",render:function(){return Object(J.jsx)(Y.a,{to:"/world"})}}),Object(J.jsx)(Y.b,{path:"/world",render:function(){return Object(J.jsx)(Ut,{})}}),Object(J.jsx)(Y.b,{path:"/countries",render:function(){return Object(J.jsx)(Dt,{})}})]}),Object(J.jsx)(X,{})]})}}]),a}(c.Component),At=Object(M.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(x());Promise.all([e]).then((function(){t({type:C})}))}}})(Ft);o.a.render(Object(J.jsx)(E.a,{children:Object(J.jsx)(M.a,{store:A,children:Object(J.jsx)(At,{})})}),document.getElementById("root")),l()},73:function(t,e,a){t.exports={item:"Navbar_item__16fMi",nav:"Navbar_nav__3EzBI",activeLink:"Navbar_activeLink__3VTma"}},74:function(t,e,a){t.exports={mainField:"TotalStatistic_mainField__3EaJg",field:"TotalStatistic_field__b44IM",totalCases:"TotalStatistic_totalCases__3DvXZ",recovered:"TotalStatistic_recovered__30Do4",deaths:"TotalStatistic_deaths__iSJc_"}},85:function(t,e,a){t.exports={mainBody:"CountriesStatistic_mainBody__swtFi",statistic:"CountriesStatistic_statistic__KTUUQ",headText:"CountriesStatistic_headText__3CRi7",empty:"CountriesStatistic_empty__3zR5N"}},86:function(t,e,a){t.exports={mainField:"DailyStatistic_mainField__1CaRh",field:"DailyStatistic_field__1dJw5",newCases:"DailyStatistic_newCases__1WcHa",newDeaths:"DailyStatistic_newDeaths__Nac4P"}},88:function(t,e,a){t.exports={searchField:"Search_searchField__1A5i6",dropList:"Search_dropList__2VgT-",input:"Search_input__30lQl",searchBtn:"Search_searchBtn__Dtpqs"}},89:function(t,e,a){t.exports={mainBody:"MainBody_mainBody__2upG_",statistic:"MainBody_statistic__XnJLU",headText:"MainBody_headText__3vK_E",empty:"MainBody_empty__2qWcQ"}}},[[379,1,2]]]);
//# sourceMappingURL=main.1300cf3a.chunk.js.map