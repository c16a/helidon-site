webpackJsonp([0],{"/kJb":function(t,e,n){t.exports=n.p+"static/img/helidon_logo_white_outline.png"},"39XL":function(t,e,n){t.exports=n.p+"static/img/favicon.png"},"3FY1":function(t,e,n){t.exports=n.p+"static/img/helidon_feature_observable_and_resilient.png"},"3aqx":function(t,e,n){t.exports=n.p+"static/img/parallax_layer_sun.png"},"5XsS":function(t,e,n){t.exports=n.p+"static/img/helidon_feature_microprofile_support.png"},"6xoH":function(t,e,n){t.exports=n.p+"static/img/parallax_layer_mountains_2.png"},"7OjU":function(t,e,n){t.exports=n.p+"static/img/parallax_layer_city.png"},"7RN3":function(t,e,n){var a=n("qLnK");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6cb92dfc",a,!1,{})},"7zck":function(t,e){},"9gUB":function(t,e,n){t.exports=n.p+"static/img/parallax_layer_hills.png"},AWFn:function(t,e,n){t.exports=n.p+"static/img/helidon_getting_started_step3.png"},Dvuf:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.slide_features {\n  background-color: #f8f8f8;\n  padding-top: 200px;\n  padding-bottom: 100px;\n}\n.slide_features .vertical-spacer {\n    height: 100px;\n}\n.slide_features .section {\n    margin-left: auto;\n    margin-right: auto;\n    min-height: 200px;\n    display: table;\n}\n.slide_features .section div {\n      margin-left: auto;\n      margin-right: auto;\n      max-width: 400px;\n      display: table-cell;\n      vertical-align: middle;\n}\n.slide_features .section h3 > i {\n      margin-right: 10px;\n      color: #3ea5fd;\n}\n.slide_features .feature {\n    margin-bottom: 100px;\n}\n.slide_features h2 {\n    color: #3ea5fd;\n    text-align: center;\n    font-weight: 400;\n    font-size: 3em;\n    margin-bottom: 100px;\n}\n.slide_features h3 {\n    font-weight: 400;\n    font-size: 1.8em;\n    margin-bottom: 20px;\n    color: #3ea5fd;\n    margin-left: 8px;\n}\n.slide_features h3 > i {\n      margin-right: 10px;\n      color: #3ea5fd !important;\n}\n.slide_features p {\n    color: #3ea5fd;\n    font-size: 1.25em;\n    margin-left: 10px;\n}\n.slide_features .feature-graphic {\n    margin-top: auto;\n    margin-bottom: auto;\n    background-position: 50% 50%;\n    background-size: contain;\n    height: 200px;\n}\n.slide_features .simple-and-fast-graphic {\n    background-image: url("+a(n("Nl/6"))+");\n}\n.slide_features .microprofile-support-graphic {\n    background-image: url("+a(n("5XsS"))+");\n}\n.slide_features .reactive-web-server-graphic {\n    background-image: url("+a(n("aea7"))+");\n}\n.slide_features .observable-and-resilient-graphic {\n    background-image: url("+a(n("3FY1"))+");\n}\n",""])},HzHe:function(t,e,n){var a=n("kklQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("84307210",a,!1,{})},JCBU:function(t,e,n){t.exports=n.p+"static/img/parallax_mobile.png"},"K/52":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.parallax_wrapper {\n  -webkit-perspective: 100px;\n          perspective: 100px;\n  -webkit-perspective-origin: 0% 0%;\n          perspective-origin: 0% 0%;\n  height: 100vh;\n  width: 100vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n",""])},M3Go:function(t,e,n){t.exports=n.p+"static/img/parallax_layer_frank.png"},MQ4a:function(t,e,n){var a=n("ovnq");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("621f5bea",a,!1,{})},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=(n("VTcE"),n("3aqx"),n("jT1t"),n("6xoH"),n("rIAP"),n("M3Go"),n("7OjU"),n("9gUB"),n("JCBU"),{props:{id:{type:String,required:!1},scrollOffset:{type:Number,default:0}},methods:{onScroll:function(){var t=this.$store.state.isScrolling,e=this.$refs.parallaxWrapper.scrollTop>this.scrollOffset;t!==e&&this.$store.commit("ISSCROLLING",e)}}}),i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"parallaxWrapper",staticClass:"parallax_wrapper",attrs:{id:t.id},on:{"&scroll":function(e){return t.onScroll(e)}}},[t._t("default")],2)};i._withStripped=!0;var o={render:i,staticRenderFns:[]},s=o;var l=!1;var p=n("VU/8")(r,s,!1,function(t){l||n("f8uj")},null,null);p.options.__file="src/ParallaxWrapper.vue";var d=p.exports,c={props:{id:{type:String,required:!1},img:{type:String,required:!0},height:{type:Number,required:!0},top:{type:Number,default:0},zIndex:{type:Number,required:!1},depth:{type:Number,default:1}},methods:{layerStyle:function(){var t={};t.backgroundImage="url( ./static/img/"+this.img+")",t.height=this.height+"px",t.top=this.top*this.depth+"px",void 0!==this.zIndex&&(t.zIndex=this.zIndex);var e=100*(this.depth-1);return t.transform="translateZ(-"+e+"px) scale("+this.depth+")",t}}},g=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"parallax_layer",style:this.layerStyle(),attrs:{id:this.id}},[this._t("default")],2)};g._withStripped=!0;var f={render:g,staticRenderFns:[]},u=f;var v=!1;var h=n("VU/8")(c,u,!1,function(t){v||n("HzHe")},null,null);h.options.__file="src/ParallaxLayer.vue";var _=h.exports,x={props:{top:{type:Number,required:!0},backgroundColor:{type:String,required:!0},zIndex:{type:Number,default:80}},methods:{coverStyle:function(){return{top:this.top+"px",backgroundColor:this.backgroundColor,zIndex:this.zIndex}}}},m=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"parallax_cover",style:this.coverStyle()},[this._t("default")],2)};m._withStripped=!0;var b={render:m,staticRenderFns:[]},w=b;var y=!1;var k=n("VU/8")(x,w,!1,function(t){y||n("xhwI")},null,null);k.options.__file="src/ParallaxCover.vue";var C=k.exports,S={props:{id:{type:String,required:!1},img:{type:String,required:!0},height:{type:Number,required:!0},top:{type:Number,default:0},scrollOffset:{type:Number,default:0}},methods:{fallbackStyle:function(){var t={};return t.top=this.top*this.depth+"px",t},fallbackImgStyle:function(){var t={};return t.backgroundImage="url( ./static/img/"+this.img+")",t.height=this.height+"px",t},onScroll:function(){var t=this.$store.state.isScrolling,e=this.$refs.parallaxFallback.scrollTop>this.scrollOffset;t!==e&&this.$store.commit("ISSCROLLING",e)}}},F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"parallaxFallback",staticClass:"parallax_fallback",style:t.fallbackStyle(),attrs:{id:t.id},on:{"&scroll":function(e){return t.onScroll(e)}}},[n("div",{style:t.fallbackImgStyle(),attrs:{id:"top"}}),t._v(" "),t._t("default")],2)};F._withStripped=!0;var z={render:F,staticRenderFns:[]},I=z;var R=!1;var j=n("VU/8")(S,I,!1,function(t){R||n("lD4N")},null,null);j.options.__file="src/ParallaxFallback.vue";var N=j.exports,O={props:{id:{type:String,required:!0}}},L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"slide_features",attrs:{id:t.id,fluid:"",light:""}},[n("h2",[t._v("Features")]),t._v(" "),n("v-layout",{staticClass:"feature",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),n("v-flex",{attrs:{md4:"",xs12:""}},[n("div",{staticClass:"section"},[n("div",[n("h3",[n("v-icon",[t._v("import_contacts")]),t._v("Simple and fast")],1),t._v(" "),n("p",[t._v("Helidon is designed to be simple to  use, with tooling and examples to get you going quickly. Since Helidon\n          is just a collection of libraries running on a fast Netty core, there is no extra overhead or bloat.")])])])]),t._v(" "),n("v-flex",{staticClass:"feature-graphic simple-and-fast-graphic ",attrs:{md4:"",xs12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1),t._v(" "),n("v-layout",{staticClass:"feature",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),n("v-flex",{staticClass:"feature-graphic microprofile-support-graphic hidden-sm-and-down",attrs:{md4:"",xs12:""}}),t._v(" "),n("v-flex",{attrs:{md4:"",xs12:""}},[n("div",{staticClass:"section"},[n("div",[n("h3",[n("v-icon",[t._v("border_clear")]),t._v("MicroProfile Support")],1),t._v(" "),n("p",[t._v("Helidon supports MicroProfile and provides familiar APIs like JAX-RS, CDI and JSON-P/B. Our\n           MicroProfile implementation runs on our fast Helidon Reactive WebServer")])])])]),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),n("v-flex",{staticClass:"feature-graphic microprofile-support-graphic hidden-md-and-up",attrs:{md4:"",xs12:""}})],1),t._v(" "),n("v-layout",{staticClass:"feature",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),n("v-flex",{attrs:{md4:"",xs12:""}},[n("div",{staticClass:"section"},[n("div",[n("h3",[n("v-icon",[t._v("storage")]),t._v("Reactive WebServer")],1),t._v(" "),n("p",[t._v("Helidon Reactive WebServer provides a modern functional programming model and runs on top of Netty.\n          Lightweight, flexible and reactive, the Helidon WebServer provides a simple to use and fast foundation for\n          your microservices.")])])])]),t._v(" "),n("v-flex",{staticClass:"feature-graphic reactive-web-server-graphic",attrs:{md4:"",xs12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1),t._v(" "),n("v-layout",{staticClass:"feature",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),n("v-flex",{staticClass:"feature-graphic observable-and-resilient-graphic hidden-sm-and-down",attrs:{md4:"",xs12:""}}),t._v(" "),n("v-flex",{attrs:{md4:"",xs12:""}},[n("div",{staticClass:"section"},[n("div",[n("h3",[n("v-icon",[t._v("repeat")]),t._v("Observable and Resilient")],1),t._v(" "),n("p",[t._v("With support for health checks, metrics, tracing and fault tolerance, Helidon has what you need to\n           write cloud ready applications that integrate with Prometheus, Zipkin and Kubernetes.")])])])]),t._v(" "),n("v-flex",{staticClass:"feature-graphic observable-and-resilient-graphic hidden-md-and-up",attrs:{md4:"",xs12:""}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1)],1)};L._withStripped=!0;var q={render:L,staticRenderFns:[]},H=q;var $=!1;var P=n("VU/8")(O,H,!1,function(t){$||n("XD62")},null,null);P.options.__file="src/Features.vue";var W=P.exports,M={props:{id:{type:String,required:!0}}},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"slide_getting_started",attrs:{id:t.id,fluid:"",light:""}},[n("h2",[t._v("Getting started")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md1:"",lg2:""}}),t._v(" "),n("v-flex",{attrs:{md10:"",lg8:"",xs12:"",sm12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-layout",{staticClass:"step step1",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h4",[t._v("Choose your programming model")])]),t._v(" "),n("v-flex",{staticClass:"code-snippet",attrs:{xs12:""}},[n("h5",[t._v("MicroFramework")]),t._v(" "),n("pre",[n("code",[t._v('WebServer.create(\n  Routing.builder()\n    .get("/greet", (req, res)\n       -> res.send("Hello World!"))\n    .build())\n  .start();')])])]),t._v(" "),n("v-flex",{staticClass:"code-snippet",attrs:{xs12:""}},[n("h5",[t._v("MicroProfile")]),t._v(" "),n("pre",[n("code",[t._v('public class GreetService {\n  @GET\n  @Path("/greet")\n  public String getMsg() {\n    return "Hello World!";\n  }\n}')])])])],1),t._v(" "),n("v-flex",{staticClass:"step step2",attrs:{xs12:""}},[n("h4",[t._v("Build, run, test")]),t._v(" "),n("h5",[t._v("Build")]),t._v(" "),n("pre",[n("code",[t._v("$ mvn package")])]),t._v(" "),n("h5",[t._v("Run")]),t._v(" "),n("pre",[n("code",[t._v("$ java -jar target/myapp.jar")])]),t._v(" "),n("h5",[t._v("Test")]),t._v(" "),n("pre",[n("code",[t._v("$ curl -X GET http://localhost:8080/greet\nHello World!")])])]),t._v(" "),n("v-flex",{staticClass:"step step3",attrs:{xs12:""}},[n("h4",[t._v("Get started!")]),t._v(" "),n("v-btn",{attrs:{light:"",large:"",href:"./docs/latest/#/getting-started/02_base-example",target:"_blank",rel:"noopener"}},[t._v("Try it now")])],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md1:"",lg2:""}})],1)],1)};U._withStripped=!0;var E={render:U,staticRenderFns:[]},T=E;var Z=!1;var A=n("VU/8")(M,T,!1,function(t){Z||n("MQ4a")},null,null);A.options.__file="src/GettingStarted.vue";var G={components:{features:W,gettingStarted:A.exports}},V=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("features",{attrs:{id:"features"}}),this._v(" "),e("gettingStarted",{attrs:{id:"getting-started"}}),this._v(" "),e("v-footer",[e("div",[this._v("Copyright © 2018, Oracle and/or its affiliates. All rights reserved. Oracle and Java are registered\n   trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.")])])],1)};V._withStripped=!0;var X={render:V,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero_text"},[e("div",{staticClass:"container fluid light hero_text_content"},[e("p",[this._v("Helidon is a collection of Java libraries for writing\n        microservices that run on a fast web core powered by Netty.")])])])}]},B=X;var J=!1;var D=n("VU/8")(G,B,!1,function(t){J||n("OU0b")},null,null);D.options.__file="src/ParallaxContent.vue";var Y=D.exports,K=n("bm7V"),Q=n.n(K),tt={components:{parallaxWrapper:d,parallaxLayer:_,parallaxCover:C,parallaxFallback:N,parallaxContent:Y},data:function(){return{isMobile:!1}},created:function(){window.addEventListener("resize",this.onResize),this.onResize()},destroyed:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){var t=this.isMobile,e=window.innerWidth<=960;t!==e&&(this.isMobile=e,this.$forceUpdate())},toolbarStyle:function(){var t={};return this.isMobile||(t.position="sticky !important"),t},toolbarClass:function(){return[this.$store.state.isScrolling?"toolbar-scroll":"toolbar-top"]},isScrolling:function(){return this.$store.state.isScrolling},scrollTo:function(t){var e={ease:"ease",offset:-58};this.isMobile?e.container="#parallax_fallback":e.container="#parallax_wrapper",Q.a.scrollTo(t,500,e)}}},et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{staticClass:"landing-page-toolbar",class:t.toolbarClass(),style:t.toolbarStyle(),attrs:{app:"",fixed:"",height:"58px",dark:!t.isScrolling(),flat:!t.isScrolling()}},[n("v-toolbar-items",[n("v-btn",{staticClass:"toolbar-logo",attrs:{flat:"",rel:"noopener"},on:{click:function(e){t.scrollTo("#top")}}}),t._v(" "),n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",rel:"noopener"},on:{click:function(e){t.scrollTo("#features")}}},[t._v("Features")]),t._v(" "),n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",rel:"noopener"},on:{click:function(e){t.scrollTo("#getting-started")}}},[t._v("Getting Started")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",href:"./docs/latest",target:"_blank",rel:"noopener"}},[n("v-icon",[t._v("import_contacts")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",href:"https://github.com/oracle/helidon",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"icon fab fa-github"})])],1)],1),t._v(" "),this.isMobile?n("parallaxFallback",{attrs:{img:"parallax_mobile.png",id:"parallax_fallback",height:1400,scrollOffset:0}},[n("parallaxContent")],1):n("parallaxWrapper",{attrs:{id:"parallax_wrapper",scrollOffset:400}},[n("parallaxLayer",{attrs:{img:"parallax_layer_sky.png",id:"top",height:1066,top:0,zIndex:0,depth:5}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_sun.png",height:310,top:500,zIndex:10,depth:5}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_mountains_1.png",height:277,top:600,zIndex:10,depth:4.75}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_mountains_2.png",height:330,top:650,zIndex:20,depth:3.75}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_mountains_3.png",height:434,top:716,zIndex:30,depth:3}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_frank.png",height:148,top:450,zIndex:30,depth:3}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_city.png",height:1048,top:810,zIndex:40,depth:1.7}}),t._v(" "),n("parallaxLayer",{attrs:{img:"parallax_layer_hills.png",height:1201,top:780,zIndex:50,depth:1}}),t._v(" "),n("parallaxCover",{attrs:{top:1640,zIndex:80,backgroundColor:"#f8f8f8"}},[n("parallaxContent")],1)],1)],1)};et._withStripped=!0;var nt={render:et,staticRenderFns:[]},at=nt;var rt=!1;var it=n("VU/8")(tt,at,!1,function(t){rt||n("7RN3")},null,null);it.options.__file="src/App.vue";var ot=it.exports,st=n("/ocq");a.a.use(st.a);var lt=new st.a({routes:[]}),pt=n("NYxO"),dt=n("3EgV"),ct=n.n(dt);n("7zck"),n("39XL");a.a.use(ct.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),a.a.use(pt.a);var gt=new pt.a.Store({state:{isScrolling:!1},mutations:{ISSCROLLING:function(t,e){t.isScrolling=e}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:lt,store:gt,components:{App:ot},template:"<App/>"})},"Nl/6":function(t,e,n){t.exports=n.p+"static/img/helidon_feature_simple_and_fast.png"},OU0b:function(t,e,n){var a=n("xOYA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2ab43fd8",a,!1,{})},"RCZ+":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.parallax_fallback {\n  display: block;\n  width: 100%;\n  height: 100vh;\n  width: 100vw;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n",""])},VTcE:function(t,e,n){t.exports=n.p+"static/img/parallax_layer_sky.png"},XD62:function(t,e,n){var a=n("Dvuf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("899bbc12",a,!1,{})},ZRFH:function(t,e,n){t.exports=n.p+"static/img/helidon_getting_started_step2.png"},aea7:function(t,e,n){t.exports=n.p+"static/img/helidon_feature_reactive_web_server.png"},cpc9:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.parallax_cover {\n  display: block;\n  position: absolute;\n  -webkit-transform: translateZ(0px) translateY(0px) translateX(0px) scale(1);\n          transform: translateZ(0px) translateY(0px) translateX(0px) scale(1);\n  left: 0;\n  width: 100%;\n}\n",""])},f8uj:function(t,e,n){var a=n("K/52");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("0bc56a51",a,!1,{})},jT1t:function(t,e,n){t.exports=n.p+"static/img/parallax_layer_mountains_1.png"},kklQ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.parallax_layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 101%;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  background-position-x: center;\n  background-position-y: top;\n}\n",""])},lD4N:function(t,e,n){var a=n("RCZ+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("94ea7216",a,!1,{})},oOn5:function(t,e,n){t.exports=n.p+"static/img/helidon_getting_started_step1.png"},"oP/X":function(t,e,n){t.exports=n.p+"static/img/helidon_logo_black_outline.png"},ovnq:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.slide_getting_started {\n  background-color: #41a8ff;\n  padding-top: 200px;\n  padding-bottom: 100px;\n}\n.slide_getting_started h2 {\n    color: white;\n    text-align: center;\n    font-weight: 400;\n    font-size: 3em;\n    margin-bottom: 100px;\n}\n.slide_getting_started h4 {\n    text-align: left;\n    font-weight: 400;\n    color: white;\n    font-size: 1.5em;\n    margin-top: 15px;\n    margin-bottom: 25px;\n}\n.slide_getting_started h5 {\n    color: white;\n    font-size: 1.1em;\n    margin-top: 25px;\n}\n.slide_getting_started code {\n    font-size: 1.25em;\n    font-weight: normal;\n    background-color: #258bf5;\n    width: 100%;\n    color: white;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n@media screen and (min-width: 376px) {\n.slide_getting_started code {\n      padding-left: 20px;\n      padding-right: 20px;\n}\n.slide_getting_started code:after, .slide_getting_started code:before {\n      content: none !important;\n}\n}\n.slide_getting_started .step {\n    margin-bottom: 0px;\n    padding-bottom: 60px;\n}\n.slide_getting_started .step .btn {\n      margin-top: 15px;\n      margin-left: -1.2px;\n}\n.slide_getting_started .step .btn__content {\n      color: #3ea5fd;\n}\n@media screen and (min-width: 460px) {\n.slide_getting_started .step1 {\n      padding-left: 65px;\n      background-image: url("+a(n("oOn5"))+");\n}\n.slide_getting_started .step2 {\n      padding-left: 65px;\n      background-image: url("+a(n("ZRFH"))+");\n}\n.slide_getting_started .step3 {\n      padding-left: 65px;\n      min-height: 350px;\n      background-image: url("+a(n("AWFn"))+");\n}\n}\n",""])},qLnK:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\nhtml {\n  overflow-y: auto !important;\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nnav.landing-page-toolbar {\n  z-index: 200;\n}\nnav.landing-page-toolbar .toolbar-logo {\n    width: 140px;\n    background-size: 110px 25px;\n    background-position: 16px 19px;\n}\nnav.landing-page-toolbar.theme--dark.toolbar-top {\n    background-color: transparent !important;\n}\nnav.landing-page-toolbar.theme--dark.toolbar-top .toolbar-logo {\n      background-image: url("+a(n("/kJb"))+");\n}\nnav.landing-page-toolbar.toolbar-scroll .toolbar-logo {\n    background-image: url("+a(n("oP/X"))+");\n}\nnav.landing-page-toolbar .toolbar__items .btn {\n    text-transform: none;\n    font-size: 16px;\n    font-weight: 400;\n}\nnav.landing-page-toolbar .toolbar__items i {\n    -webkit-transition: unset !important;\n    transition: unset !important;\n}\n",""])},rIAP:function(t,e,n){t.exports=n.p+"static/img/parallax_layer_mountains_3.png"},xOYA:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.hero_text {\n  left: 0;\n  background-color: #f8f8f8;\n  padding-top: 0px;\n  padding-bottom: 100px;\n}\n@media (min-width: 600px) {\n.hero_text .hero_text_content {\n      margin-left: 20%;\n      margin-right: 20%;\n      width: 60%;\n}\n}\n@media (min-width: 1000px) {\n.hero_text .hero_text_content {\n      margin-left: 25%;\n      margin-right: 25%;\n      width: 50%;\n}\n}\n@media (min-width: 1300px) {\n.hero_text .hero_text_content {\n      margin-left: 33%;\n      margin-right: 33%;\n      width: 33%;\n}\n}\n.hero_text .hero_text_content p {\n    color: #3ea5fd;\n    font-size: 25px;\n    font-weight: 400;\n    text-align: center;\n}\n.footer {\n  height: auto !important;\n  padding-bottom: 30px;\n  padding-top: 30px;\n  padding-left: 50px;\n  padding-right: 50px;\n  background-color: #258bf5 !important;\n}\n.footer > div {\n    color: white;\n    width: 100%;\n    text-align: center;\n    padding-top: 10px;\n    padding-bottom: 0px;\n    padding-left: 10%;\n    padding-right: 10%;\n    border-top: 1px solid white;\n    font-size: 0.9em;\n}\n",""])},xhwI:function(t,e,n){var a=n("cpc9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4458a835",a,!1,{})}},["NHnr"]);
//# sourceMappingURL=app.d9b1f95ff28686f3fd33.js.map