(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"k+ul":function(e,t,i){"use strict";i.r(t),i.d(t,"Tab3PageModule",(function(){return T}));var o=i("TEn/"),s=i("tyNb"),r=i("ofXK"),a=i("3Pt+"),n=i("fXoL"),l=i("Ew83"),h=i("mrSG");let c=(()=>{let e=class{constructor(e,t){this.googleChartsSettings=t,this.googleScriptLoadingNotifier=new n.n,this.googleScriptIsLoading=!1,this.localeId=e,this.loadGoogleChartsScriptPromise=new Promise((e,t)=>{if("undefined"!=typeof google&&google.charts)e();else if(this.googleScriptIsLoading)this.googleScriptLoadingNotifier.subscribe(i=>{i?e():t()});else{this.googleScriptIsLoading=!0;const i=document.createElement("script");i.type="text/javascript",i.src="https://www.gstatic.com/charts/loader.js",i.async=!0,i.defer=!0,i.onload=()=>{this.googleScriptIsLoading=!1,this.googleScriptLoadingNotifier.emit(!0),e()},i.onerror=()=>{this.googleScriptIsLoading=!1,this.googleScriptLoadingNotifier.emit(!1),t()},document.getElementsByTagName("head")[0].appendChild(i)}})}load(e){return Object(h.a)(this,void 0,void 0,(function*(){yield this.loadGoogleChartsScriptPromise,yield new Promise(t=>{e||(e=Object.create(this.googleChartsSettings)),e||(e={}),e.language||(e.language=this.localeId),e.googleChartsVersion||(e.googleChartsVersion="47");const i=e;i.callback=t,google.charts.load(e.googleChartsVersion,i)})}))}};return e.\u0275fac=function(t){return new(t||e)(n.Qb(n.u),n.Qb("googleChartsSettings",8))},e.\u0275prov=Object(n.Fb)({factory:function(){return new e(Object(n.Qb)(n.u),Object(n.Qb)("googleChartsSettings",8))},token:e,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e){this.opt=e,this.dataTableChanged=new n.n,e&&this._setDataTable(e.dataTable,e.firstRowIsData)}send(){void 0!==this.query&&this.query.send(e=>{this.setDataTable(e.getDataTable()),this.opt.queryCallback&&this.opt.queryCallback(e)})}init(e){e&&(this.opt=e),void 0!==this.tid&&(window.clearInterval(this.tid),this.tid=void 0),this.opt.dataSourceUrl?(this.query=new google.visualization.Query(this.opt.dataSourceUrl),this.opt.query&&this.query.setQuery(this.opt.query),void 0!==this.opt.timeout&&this.query.setTimeout(this.opt.timeout),this.opt.refreshInterval&&(this.tid=window.setInterval(()=>{this.send()},1e3*this.opt.refreshInterval)),this.send()):this.setDataTable(this.opt.dataTable)}getDataTable(){return this.dataTable}setDataTable(e,t){void 0===t&&(t=this.opt.firstRowIsData),this._setDataTable(e,t),this.dataTableChanged.emit(this.dataTable)}_setDataTable(e,t){Array.isArray(e)&&(e=google.visualization.arrayToDataTable(e,t)),this.dataTable=e,this.reformat()}reformat(){const e=this.dataTable;if(void 0!==e&&void 0!==this.opt.formatters)for(const t of this.opt.formatters){let i;if("PatternFormat"===t.type){const o=t.options;i=new google.visualization.PatternFormat(o.pattern),i.format(e,t.columns,o.dstColumnIndex);continue}const o=google.visualization[t.type],s=t.options;if(i=new o(s),"ColorFormat"===t.type&&s){const e=s;for(const t of e.ranges)void 0!==t.fromBgColor&&void 0!==t.toBgColor?i.addGradientRange(t.from,t.to,t.color,t.fromBgColor,t.toBgColor):i.addRange(t.from,t.to,t.color,t.bgcolor)}for(const r of t.columns)i.format(e,r)}}}return e.\u0275fac=function(e){n.Tb()},e.\u0275dir=n.Eb({type:e,outputs:{dataTableChanged:"dataTableChanged"}}),e})(),g=(()=>{class e{constructor(e){this.el=e}setPosition(t,i){this.el.nativeElement.style.left=t+e.PIXELS,this.el.nativeElement.style.top=i+e.PIXELS}getDOMElement(){return this.el}}return e.PIXELS="px",e})(),d=(()=>{let e=class{constructor(e,t){this.el=e,this.loaderService=t,this.mouseOverListener=e=>{const t=this.parseMouseEvent(e);return t.tooltip=this.getHTMLTooltip(),t},this.mouseOutListener=e=>this.parseMouseEvent(e),this.selectListener=()=>{const e={message:"select",row:null,column:null,selectedRowValues:[],selectedRowFormattedValues:[],columnLabel:""},t=this.wrapper.visualization.getSelection(),i=t[t.length-1];if(!i)return e.message="deselect",e;const o=i;if(null!=i.row){e.row=o.row;const t=[],i=[],s=this.wrapper.getDataTable(),r=s.getNumberOfColumns();for(let e=0;e<r;e++)t.push(s.getValue(o.row,e)),i.push(s.getFormattedValue(o.row,e));e.selectedRowValues=t,e.selectedRowFormattedValues=i}return null!=o.column&&(e.column=o.column,e.columnLabel=this.getColumnLabelAtPosition(o)),i.name&&(e.columnLabel=i.name),e},this.chartSelect=new n.n,this.chartSelectOneTime=new n.n,this.chartReady=new n.n,this.chartReadyOneTime=new n.n,this.chartError=new n.n,this.chartErrorOneTime=new n.n,this.mouseOver=new n.n,this.mouseOverOneTime=new n.n,this.mouseOut=new n.n,this.mouseOutOneTime=new n.n,this.regionClick=new n.n,this.regionClickOneTime=new n.n}ngOnInit(){this.HTMLel=this.el.nativeElement.querySelector("div"),Object.isExtensible(this.data)&&(this.data.component=this),this.options=this.data.options,this.init().then(()=>{this.draw()})}init(){return Object(h.a)(this,void 0,void 0,(function*(){yield this.loaderService.load(),this.recreateWrapper()}))}recreateWrapper(){if(void 0===this.wrapper||this.wrapper.getChartType()!==this.data.chartType){this.dataTable=new u(this.data),this.dataTable.dataTableChanged.subscribe(e=>{this._draw()});let t=this.data;if(this.data.firstRowIsData&&(t=Object.assign(t,this.data),t.dataTable=this.dataTable.getDataTable()),this.wrapper=new google.visualization.ChartWrapper(t),this.registerChartWrapperEvents(),void 0===t.dataTable&&void 0===t.dataSourceUrl)try{this.wrapper.draw(this.HTMLel)}catch(e){}}}_draw(){return Object(h.a)(this,void 0,void 0,(function*(){const e=this.dataTable.getDataTable();void 0!==e&&(this.convertOptions(),this.recreateWrapper(),this.wrapper.setOptions(this.options),this.wrapper.setDataTable(e),this.wrapper.draw(this.HTMLel))}))}getDataTable(){return this.dataTable}draw(e){void 0===e&&(e=this.data),this.options=e.options,this.dataTable.init(e)}getSelectorBySeriesType(e){return{bars:"bar#%s#%r",haxis:"hAxis#0#label",line:"point#%s#%r",legend:"legendentry#%s",area:"point#%s#%r"}[e]}getSeriesByColumn(e){let t=0;const i=this.wrapper.getDataTable();for(let o=e-1;o>=0;o--){const e=i.getColumnRole(o),s=i.getColumnType(o);"data"!==e&&"number"!==s||t++}return t}getBoundingBoxForItem(e){let t={top:0,left:0,width:0,height:0};if(this.cli){const i=e.column,o=this.getSeriesByColumn(i),s=e.row;let r=this.options.seriesType;if(this.options.series&&this.options.series[o]&&this.options.series[o].type&&(r=this.options.series[o].type),r){let e=this.getSelectorBySeriesType(r);if(e){e=e.replace("%s",o+"").replace("%c",i+"").replace("%r",s+"");const r=this.cli.getBoundingBox(e);r&&(t=r)}}}return t}getValueAtPosition(e){return null==e.row?null:this.wrapper.getDataTable().getValue(e.row,e.column)}getColumnTypeAtPosition(e){return this.wrapper.getDataTable().getColumnType(e.column)||""}getColumnLabelAtPosition(e){return this.wrapper.getDataTable().getColumnLabel(e.column)||""}getHTMLTooltip(){const e=new n.l(this.el.nativeElement.querySelector(".google-visualization-tooltip"));return new g(e)}parseMouseEvent(e){const t=this.wrapper.getChartType();let i=e.column;if(null==i)switch(t){case"Timeline":i=3===this.wrapper.getDataTable().getNumberOfColumns()?0:1;break;default:i=0}const o={row:e.row,column:i};return{position:e,boundingBox:this.getBoundingBoxForItem(o),value:this.getValueAtPosition(o),columnType:this.getColumnTypeAtPosition(o),columnLabel:this.getColumnLabelAtPosition(o)}}unregisterEvents(){google.visualization.events.removeAllListeners(this.wrapper.getChart()),google.visualization.events.removeAllListeners(this.wrapper)}registerChartEvents(){const e=this.wrapper.getChart();this.cli=e.getChartLayoutInterface?e.getChartLayoutInterface():null,this.mouseOver.observers.length>0&&google.visualization.events.addListener(e,"onmouseover",e=>{const t=this.parseMouseEvent(e);t.tooltip=this.getHTMLTooltip(),this.mouseOver.emit(t)}),this.mouseOverOneTime.observers.length>0&&google.visualization.events.addOneTimeListener(e,"onmouseover",e=>{const t=this.parseMouseEvent(e);t.tooltip=this.getHTMLTooltip(),this.mouseOverOneTime.emit(t)}),this.mouseOut.observers.length>0&&google.visualization.events.addListener(e,"onmouseout",e=>{const t=this.parseMouseEvent(e);this.mouseOut.emit(t)}),this.mouseOutOneTime.observers.length>0&&google.visualization.events.addOneTimeListener(e,"onmouseout",e=>{const t=this.parseMouseEvent(e);this.mouseOutOneTime.emit(t)}),"GeoChart"===this.data.chartType&&(this.regionClick.observers.length>0&&google.visualization.events.addListener(e,"regionClick",e=>{this.regionClick.emit(e)}),this.regionClickOneTime.observers.length>0&&google.visualization.events.addOneTimeListener(e,"regionClick",e=>{this.regionClick.emit(e)}))}registerChartWrapperEvents(){google.visualization.events.addListener(this.wrapper,"ready",()=>{this.chartReady.emit({message:"Chart ready"})}),google.visualization.events.addOneTimeListener(this.wrapper,"ready",()=>{this.chartReadyOneTime.emit({message:"Chart ready (one time)"}),this.registerChartEvents()}),google.visualization.events.addListener(this.wrapper,"error",e=>{this.chartError.emit(e)}),google.visualization.events.addOneTimeListener(this.wrapper,"error",e=>{this.chartErrorOneTime.emit(e)}),this.addListener(this.wrapper,"select",this.selectListener,this.chartSelect),this.addOneTimeListener(this.wrapper,"select",this.selectListener,this.chartSelectOneTime)}addListener(e,t,i,o){google.visualization.events.addListener(e,t,()=>{o.emit(i())})}addOneTimeListener(e,t,i,o){google.visualization.events.addOneTimeListener(e,t,()=>{o.emit(i())})}convertOptions(){try{this.options=google.charts[this.data.chartType].convertOptions(this.options)}catch(e){return}}};return e.\u0275fac=function(t){return new(t||e)(n.Jb(n.l),n.Jb(c))},e.\u0275cmp=n.Db({type:e,selectors:[["google-chart"]],inputs:{data:"data"},outputs:{chartSelect:"chartSelect",chartSelectOneTime:"chartSelectOneTime",chartReady:"chartReady",chartReadyOneTime:"chartReadyOneTime",chartError:"chartError",chartErrorOneTime:"chartErrorOneTime",mouseOver:"mouseOver",mouseOverOneTime:"mouseOverOneTime",mouseOut:"mouseOut",mouseOutOneTime:"mouseOutOneTime",regionClick:"regionClick",regionClickOneTime:"regionClickOneTime"},decls:1,vars:0,template:function(e,t){1&e&&n.Kb(0,"div")},encapsulation:2}),e})(),p=(()=>{let e=class{};return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},providers:[c]}),e})(),m=(()=>{class e{constructor(e){this.recordCountService=e}createSeriesData(){this.recordCountService.loadRecord();const e=this.recordCountService.getHalfYearRecord(),t=[];for(const i of e){const e=new Date(i.t);t.push([[e.getMonth()+1,"/",e.getDate()].join(""),i.c])}return t}drawChart(){this.chart={chartType:"AreaChart",dataTable:this.createSeriesData(),firstRowIsData:!0,options:{animation:{duration:1e3,easing:"out",startup:!0},vAxis:{minValue:0}}}}changeData(){this.chart.dataTable=this.createSeriesData(),this.chart.component.draw()}ngOnInit(){this.drawChart()}ionViewDidEnter(){this.changeData()}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(l.a))},e.\u0275cmp=n.Db({type:e,selectors:[["app-tab3"]],decls:4,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[1,"centering_parent"],["id","chart",3,"data"]],template:function(e,t){1&e&&(n.Kb(0,"ion-header",0),n.Mb(1,"ion-content",1),n.Mb(2,"div",2),n.Kb(3,"google-chart",3),n.Lb(),n.Lb()),2&e&&(n.Zb("translucent",!0),n.zb(1),n.Zb("fullscreen",!0),n.zb(2),n.Zb("data",t.chart))},directives:[o.h,o.f,d],styles:[".centering_parent[_ngcontent-%COMP%]{padding:20px;text-align:center}"]}),e})();const v=[{path:"",component:m}];let b=(()=>{class e{}return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(v)],s.i]}),e})(),T=(()=>{class e{}return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},imports:[[o.t,r.b,a.a,s.i.forChild([{path:"",component:m}]),b,p]]}),e})()}}]);