(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=126},141:function(t,e,n){"use strict";var r=n(46);n.n(r).a},142:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},143:function(t,e,n){"use strict";var r=n(47);n.n(r).a},144:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},151:function(t,e,n){"use strict";var r=n(48);n.n(r).a},152:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,"html[data-v-1a3cf590]{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*[data-v-1a3cf590],[data-v-1a3cf590]:after,[data-v-1a3cf590]:before{box-sizing:border-box;margin:0}.button--green[data-v-1a3cf590]{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green[data-v-1a3cf590]:hover{color:#fff;background-color:#3b8070}.button--grey[data-v-1a3cf590]{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey[data-v-1a3cf590]:hover{color:#fff;background-color:#35495e}.layout[data-v-1a3cf590]{border:1px solid #d7dde4;background:#f5f7f9;position:relative;border-radius:4px;overflow:hidden}.layout-logo[data-v-1a3cf590]{width:100px;height:30px;background:#5b6270;border-radius:3px;float:left;position:relative;top:15px;background:url(/home.svg);background-size:cover}.layout-nav[data-v-1a3cf590]{width:420px;margin:0 20px 0 auto}.layout-footer-center[data-v-1a3cf590]{text-align:center}",""])},171:function(t,e,n){"use strict";n.r(e);n(63),n(38),n(39);var r=n(23),o=(n(55),n(108),n(5)),c=(n(75),n(77),n(29),n(15),n(81),n(59),n(30),n(80),n(113),n(125),n(0)),f=(n(86),n(126)),l=f.keys();function d(t){var e=f(t);return e.default||e}var h={},m=!0,v=!1,x=void 0;try{for(var y,w=l[Symbol.iterator]();!(m=(y=w.next()).done);m=!0){var _=y.value;h[_.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=d(_)}}catch(t){v=!0,x=t}finally{try{m||null==w.return||w.return()}finally{if(v)throw x}}var C=h,k=(n(127),n(128),n(129),n(131),n(133),n(134),n(137),n(12));function $(t){c.default.config.errorHandler&&c.default.config.errorHandler(t)}function R(t){return t.then(function(t){return t.default||t})}function E(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(k.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function j(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function T(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function S(t){return Promise.all(T(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=j(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function N(t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:return t.abrupt("return",Object(k.a)({},e,{meta:O(e).map(function(t,n){return Object(k.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function P(t,e){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=K(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,N(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,N(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function M(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function D(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function I(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?H:encodeURIComponent,f=0;f<t.length;f++){var l=t[f];if("string"!=typeof l){var d=data[l.name||"pathMatch"],h=void 0;if(null==d){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(d)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[f].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[f].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');path+=l.prefix+h}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=B.exec(t));){var l=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+l.length,d)path+=d[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,R="?"===_||"*"===_,E=n[2]||f,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:E,optional:R,repeat:$,partial:k,asterisk:!!C,pattern:pattern?J(pattern):C?".*":"[^"+F(E)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function z(t,e){var n={},r=Object(k.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function U(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(k.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var B=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function H(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function F(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function J(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),f=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),f+=o?"#"+o:""}var Q=n(93),V=n.n(Q),X=n(62),W=function(){return R(n.e(3).then(n.bind(null,178)))},G=function(){return R(n.e(2).then(n.bind(null,179)))};c.default.use(X.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var Y=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};for(var Z=n(94),tt=n.n(Z),et=Object(k.a)({},tt.a,{name:"NoSsr"}),nt={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var d=c[l]||f,h={};ot.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};at.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},ot=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],at=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],it={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},st=(n(141),n(22)),ut=Object(st.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,ct={name:"Nuxt",components:{NuxtChild:nt,NuxtError:ut},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||I(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ft={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},lt=(n(143),Object(st.a)(ft,void 0,void 0,!1,null,null,null).exports),pt=(n(145),{}),ht=(n(151),{_default:Object(st.a)(pt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",[n("Header",[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[n("div",{staticClass:"layout-logo"}),t._v(" "),n("div",{staticClass:"layout-nav"},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                        字预处理\n                    ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                        人脸识别\n                    ")],1),t._v(" "),n("MenuItem",{attrs:{name:"3",to:"/ocr"}},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                        汉字识别\n                    ")],1)],1)])],1),t._v(" "),n("nuxt"),t._v(" "),n("Footer",{staticClass:"layout-footer-center"},[t._v("2019 © pichandle")])],1)],1)},[],!1,null,"1a3cf590",null).exports}),mt={head:{title:"pichandle",meta:[{charset:"utf-8"},{hid:"description",name:"description",content:"My mathematical Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://cdn.bootcss.com/cropper/4.0.0-beta/cropper.min.css"}],script:[{src:"https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"},{src:"/vconsole.min.js"},{src:"https://cdn.bootcss.com/cropper/4.0.0-beta/cropper.min.js"}],style:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ht["_"+t]||(t="default"),this.layoutName=t,this.layout=ht["_"+t],this.layout},loadLayout:function(t){return t&&ht["_"+t]||(t="default"),Promise.resolve(ht["_"+t])}},components:{NuxtLoading:lt}},vt=n(95),xt=n.n(vt),gt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,c=void 0;try{for(var f,l=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(f=l.next()).done);r=!0){var d=f.value;if(!e)return void delete this.defaults.headers[d][t];this.defaults.headers[d][t]=e}}catch(t){o=!0,c=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},yt=["request","delete","get","head","options","post","put","patch"],bt=function(){var t=yt[wt];gt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},wt=0;wt<yt.length;wt++)bt();var _t=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=xt.a.create(n);!function(t){for(var e in gt)t[e]=gt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var c=function(t){if(o){var progress=100*t.loaded/(t.total*o);r().set(Math.min(100,progress))}};t.defaults.onUploadProgress=c,t.defaults.onDownloadProgress=c}(r),t.$axios=r,e("axios",r)},Ct=n(96),kt=n.n(Ct),$t=n(97),Rt=n.n($t),Et=function(){c.default.use(kt.a,{locale:Rt.a})};c.default.component(et.name,et),c.default.component(nt.name,nt),c.default.component("NChild",nt),c.default.component(ct.name,ct),c.default.use(V.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var jt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Ot(){return(Ot=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,f,path,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new X.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:Y,routes:[{path:"/ocr",component:W,name:"ocr"},{path:"/",component:G,name:"index"}],fallback:!1});case 2:return n=t.sent,r=Object(k.a)({router:n,nuxt:{defaultTransition:jt,transitions:[jt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},jt,{name:t}):Object.assign({},jt,t):jt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?U(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},mt),o=e?e.next:function(t){return r.router.push(t)},e?f=n.resolve(e.url).route:(path=D(n.options.base),f=n.resolve(path).route),t.next=8,P(r,{route:f,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof _t){t.next=12;break}return t.next=12,_t(r.context,l);case 12:if("function"!=typeof Et){t.next=15;break}return t.next=15,Et(r.context,l);case 15:t.next=18;break;case 18:return t.abrupt("return",{app:r,router:n});case 19:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Tt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},St=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),Nt={name:"NuxtLink",extends:c.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||Tt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(St.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){St&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),St.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){St.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value;try{f(),f.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.default.component(Nt.name,Nt),c.default.component("NLink",Nt);var At,Pt,qt=[],Lt=window.__NUXT__||{};Object.assign(c.default.config,{silent:!0,performance:!1});var Mt=c.default.config.errorHandler||console.error;function Dt(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function It(t,e,n){return zt.apply(this,arguments)}function zt(){return(zt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,l,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!At.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?z(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,S(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return d._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,l=c.message||"",!/^Loading chunk (\d)+ failed\./.test(l)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:l}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Ut(t,e){return Lt.serverRendered&&e&&E(t,e),t._Ctor=t,t}function Bt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=j(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof C[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),C[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():M(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Ht(t,e,n){return Ft.apply(this,arguments)}function Ft(){return(Ft=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,l,d,h,m,v,x,y,w,_,C,k,R,j,T=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return qt=e===n?[]:O(n,o=[]).map(function(t,i){return I(n.matched[o[i]].path)(n.params)}),c=!1,f=function(path){n.path===path.path&&T.$loading.finish&&T.$loading.finish(),n.path!==path.path&&T.$loading.pause&&T.$loading.pause(),c||(c=!0,r(path))},t.next=7,P(At,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=At.nuxt.dateErr,this._hadError=!!At.nuxt.err,(d=O(e,l=[])).length){t.next=25;break}return t.next=14,Bt.call(this,d,At.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof ut.layout?ut.layout(At.context):ut.layout);case 18:return h=t.sent,t.next=21,Bt.call(this,d,At.context,h);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return At.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return d.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Dt(d,e,n)),t.prev=27,t.next=30,Bt.call(this,d,At.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!At.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(m=d[0].options.layout)&&(m=m(At.context)),t.next=38,this.loadLayout(m);case 38:return m=t.sent,t.next=41,Bt.call(this,d,At.context,m);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!At.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:v=!0,t.prev=46,x=!0,y=!1,w=void 0,t.prev=50,_=d[Symbol.iterator]();case 52:if(x=(C=_.next()).done){t.next=64;break}if("function"==typeof(k=C.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,k.options.validate(At.context);case 58:if(v=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:x=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),y=!0,w=t.t0;case 70:t.prev=70,t.prev=71,x||null==_.return||_.return();case 73:if(t.prev=73,!y){t.next=76;break}throw w;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(v){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(d.map(function(t,i){if(t._path=I(e.matched[l[i]].path)(e.params),t._dataRefresh=!1,T._pathChanged&&T._queryChanged||t._path!==qt[i])t._dataRefresh=!0;else if(!T._pathChanged&&T._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return T._diffQuery[t]}))}if(!T._hadError&&T._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,f=o&&c?30:45;if(o){var d=M(t.options.asyncData,At.context).then(function(e){E(t,e),T.$loading.increase&&T.$loading.increase(f)});r.push(d)}if(T.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(At.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){T.$loading.increase&&T.$loading.increase(f)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(R=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,R));case 97:return qt=[],$(R),"function"==typeof(j=ut.layout)&&(j=j(At.context)),t.next=103,this.loadLayout(j);case 103:this.error(R),this.$nuxt.$emit("routeChanged",e,n,R),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Jt(t,e){T(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.default.extend(t))._Ctor=t,n.components[o]=t),t})}function Kt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?ut.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(At.context)),this.setLayout(e)}function Qt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=O(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.default.set(t.$data,n,e[n])}}),Kt.call(n,t)})}function Vt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Pt.afterEach(function(e,n){c.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Xt(){return(Xt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,f,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return At=e.app,Pt=e.router,t.next=4,Promise.all((path=void 0,path=D((d=Pt).options.base,d.options.mode),T(d.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=Ut(j(e),Lt.data?Lt.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new c.default(At),f=Lt.layout||"default",t.next=9,r.loadLayout(f);case 9:if(r.setLayout(f),l=function(){r.$mount("#__nuxt"),c.default.nextTick(function(){Vt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Dt(n,Pt.currentRoute)),qt=Pt.currentRoute.matched.map(function(t){return I(t.path)(Pt.currentRoute.params)})),r.$loading={},Lt.error&&r.error(Lt.error),Pt.beforeEach(It.bind(r)),Pt.beforeEach(Ht.bind(r)),Pt.afterEach(Jt),Pt.afterEach(Qt.bind(r)),!Lt.serverRendered){t.next=22;break}return l(),t.abrupt("return");case 22:Ht.call(r,Pt.currentRoute,Pt.currentRoute,function(path){if(!path)return Jt(Pt.currentRoute,Pt.currentRoute),Kt.call(r,Pt.currentRoute),void l();Pt.push(path,function(){return l()},function(t){if(!t)return l();Mt(t)})});case 23:case"end":return t.stop()}var d,path},t)}))).apply(this,arguments)}(function(t){return Ot.apply(this,arguments)})().then(function(t){return Xt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Mt(t)})},46:function(t,e,n){var content=n(142);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("b675d82e",content,!0,{sourceMap:!1})},47:function(t,e,n){var content=n(144);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("17cfdfa9",content,!0,{sourceMap:!1})},48:function(t,e,n){var content=n(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("768abc83",content,!0,{sourceMap:!1})},98:function(t,e,n){t.exports=n(171)}},[[98,4,1,5]]]);