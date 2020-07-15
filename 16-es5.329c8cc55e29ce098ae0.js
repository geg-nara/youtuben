function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{tmrb:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return g}));var i=n("TEn/"),o=n("ofXK"),r=n("3Pt+"),c=n("qtYk"),a=n("tyNb"),u=n("TIDI"),l=[];!function(e,t){t=Object.assign({baseUrl:"https://video.google.com/timedtext",languageId:"en",callbackFn:function(e){console.log(e)}},t||{});var n,i=(function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}(n=document.createElement("div")),function(e){return e&&"string"==typeof e&&(e=e.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"").replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),n.innerHTML=e,e=n.textContent,n.textContent=""),e});function o(e){var t=new Date(null);return t.setSeconds(e),t.toISOString().substr(11,8).slice(4,11)}var r=new XMLHttpRequest;r.open("POST","".concat(t.baseUrl,"?lang=").concat(t.languageId,"&v=p13eKmDz88g"),!0),r.responseType="document",r.onload=function(){this.status>=200&&this.status<400?t.callbackFn([].slice.call(this.response.querySelectorAll("transcript text")).map((function(e){return{start:o(Math.floor(e.getAttribute("start"))),dur:o(Math.floor(e.getAttribute("dur"))),text:i(e.textContent).replace(/\s+/g," ")}}))):console.log("Error: "+this.status)},r.onerror=function(){console.log("Error!")},r.send()}(0,{callbackFn:function(e){l.push(function(e,t){t=Object.assign({includeHeader:!0,delimiter:",",ignoreKeys:[]},t||{});var n=Object.keys(e[0]).filter((function(e){return-1===t.ignoreKeys.indexOf(e)})),i=[];return t.includeHeader&&i.push(n.join(t.delimiter)),i.concat(e.map((function(e){return n.map((function(t){return e[t]})).join(t.delimiter)}))).map((function(e){return e.split("\t")}))}(e,{includeHeader:!1,ignoreKeys:["dur"],delimiter:"\t"}))}});var s=n("fXoL");function b(e,t){if(1&e){var n=s.Nb();s.Mb(0,"ul"),s.Mb(1,"li",3),s.Ub("click",(function(){s.bc(n);var e=t.$implicit;return s.Wb().moveToTime(e[0])})),s.fc(2),s.Lb(),s.Lb()}if(2&e){var i=t.$implicit;s.zb(2),s.gc("",i[1]," ")}}var p,f,y,d=[{path:"",component:(p=function(){function e(t){_classCallCheck(this,e),this.navCtrl=t,this.title="Practice",this.videoId="p13eKmDz88g",this.captions="",this.pointA=0,this.pointB=0,this.data=[];for(var n=1;n<4;n++)this.data.push({title:"Video "+n,showDetails:!1})}return _createClass(e,[{key:"clickPlay",value:function(){this.youtubePlayer.playVideo()}},{key:"clickPause",value:function(){this.youtubePlayer.pauseVideo()}},{key:"clickStop",value:function(){this.youtubePlayer.stopVideo()}},{key:"setA",value:function(){console.log("A is clicked"),this.pointA=this.youtubePlayer.getCurrentTime(),console.log(this.pointA)}},{key:"backToA",value:function(){console.log("B is clicked"),this.pointB=this.youtubePlayer.getCurrentTime(),this.youtubePlayer.seekTo(this.pointA,!0)}},{key:"moveToTime",value:function(e){var t=Number(60*e.split(":")[0])+Number(e.split(":")[1]);console.log(t),this.youtubePlayer.seekTo(t,!0),this.youtubePlayer.playVideo()}},{key:"freeMarker",value:function(){this.pointA=0}},{key:"getsSpeed100",value:function(){this.youtubePlayer.setPlaybackRate(1)}},{key:"getsSpeed50",value:function(){this.youtubePlayer.setPlaybackRate(.5)}},{key:"getsSpeed25",value:function(){this.youtubePlayer.setPlaybackRate(.25)}},{key:"back2Sec",value:function(){this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime()-2,!0)}},{key:"back3Sec",value:function(){this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime()-3,!0)}},{key:"back5Sec",value:function(){this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime()-5,!0)}},{key:"ngOnInit",value:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),this.captions=l,console.log(l)}},{key:"toggleDetails",value:function(e){e.showDetails?(e.showDetails=!1,e.icon="add-outline"):(e.showDetails=!0,e.icon="ios-remove-circle-outline")}}]),e}(),p.\u0275fac=function(e){return new(e||p)(s.Jb(i.t))},p.\u0275cmp=s.Db({type:p,selectors:[["app-tab1"]],viewQuery:function(e,t){var n;1&e&&s.hc(u.a,!0),2&e&&s.ac(n=s.Vb())&&(t.youtubePlayer=n.first)},decls:20,vars:5,consts:[[3,"translucent"],[1,"centering_parent"],[3,"videoId","width","height"],[3,"click"],[2,"width","100%","height","600px","overflow","auto"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.fc(3," YouTuben "),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content"),s.Mb(5,"div",1),s.Mb(6,"ion-grid"),s.Mb(7,"ion-row"),s.Mb(8,"ion-col"),s.Kb(9,"youtube-player",2),s.Lb(),s.Lb(),s.Mb(10,"ion-row"),s.Mb(11,"ion-col"),s.Mb(12,"ion-button",3),s.Ub("click",(function(){return t.getsSpeed100()})),s.fc(13,"100%"),s.Lb(),s.Mb(14,"ion-button",3),s.Ub("click",(function(){return t.getsSpeed50()})),s.fc(15,"50%"),s.Lb(),s.Mb(16,"ion-button",3),s.Ub("click",(function(){return t.getsSpeed25()})),s.fc(17,"25%"),s.Lb(),s.Lb(),s.Lb(),s.Mb(18,"div",4),s.ec(19,b,3,1,"ul",5),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.Zb("translucent",!0),s.zb(9),s.Zb("videoId",t.videoId)("width",300)("height",200),s.zb(10),s.Zb("ngForOf",t.captions[0]))},directives:[i.f,i.q,i.p,i.d,i.e,i.l,i.c,u.a,i.b,o.h],styles:[".centering_parent[_ngcontent-%COMP%]{padding:20px;text-align:center}ul[_ngcontent-%COMP%]{list-style:none}"]}),p)}],h=((y=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:y}),y.\u0275inj=s.Gb({factory:function(e){return new(e||y)},imports:[[a.i.forChild(d)],a.i]}),y),g=((f=function e(){_classCallCheck(this,e),this.title="Practice"}).\u0275mod=s.Hb({type:f}),f.\u0275inj=s.Gb({factory:function(e){return new(e||f)},imports:[[i.r,o.b,r.a,c.a,h,u.b]]}),f)}}]);