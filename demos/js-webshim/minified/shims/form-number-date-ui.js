jQuery.webshims.register("form-number-date-ui",function(e,t,n,r,i,s){"use strict";var o,u=function(e){return e?(e+="",e.length==1?"0"+e:e):""};(function(){var t=e.webshims.formcfg;t.de={numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},date:{close:"schlie\u00dfen",prevText:"zur\u00fcck",nextText:"Vor",currentText:"heute",monthNames:["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},t.en={numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},date:{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},t["en-US"]=t["en-US"]||t.en,t[""]=t[""]||t["en-US"],o=t[""];var n=function(t){if(!t.date.monthkeys){var n=function(e,n){var r,i=e+1;r=i<10?"0"+i:""+i,t.date.monthkeys[i]=r,t.date.monthkeys[n]=r};t.date.monthkeys={},e.each(t.date.monthNames,n),e.each(t.date.monthNamesShort,n)}};n(o),e.webshims.ready("dom-extend",function(){e.webshims.activeLang({register:"form-core",callback:function(){e.each(arguments,function(r,i){if(t[i])return o=t[i],n(o),e.event.trigger("wslocalechange"),!1})}})})})(),function(){var t=function(t){e(this)[t.type=="mousepressstart"?"addClass":"removeClass"]("mousepress-ui")},r=function(e,t){return typeof e=="number"||e&&e==e*1?e*1:t},i=["step","min","max","readonly","title","disabled","tabindex","placeholder","value"],s=function(t){if(!o.patterns[t+"Obj"]){var n={};e.each(o.patterns[t].split(o[t+"Format"]),function(e,t){n[t]=e}),o.patterns[t+"Obj"]=n}},a={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,o.numberFormat["."])},time:function(e){return e},month:function(e,t){var n,r=e.split("-");return r[0]&&r[1]&&(n=o.date[t.monthNames]||o.date.monthNames,r[1]=n[r[1]*1-1],r[1]&&(e=o.date.showMonthAfterYear?r.join(" "):r[1]+" "+r[0])),e},date:function(e){var t=(e+"").split("-");return t[2]&&t[1]&&t[0]&&(e=o.patterns.d.replace("yy",t[0]||""),e=e.replace("mm",t[1]||""),e=e.replace("dd",t[2]||"")),e}},f={number:function(e){return(e+"").replace(o.numberFormat[","],"").replace(o.numberFormat["."],".")},time:function(e){return e},month:function(e){var t=e.trim().split(/[\s-\/\\]+/);return t.length==2&&(t[0]=o.date.monthkeys[t[0]]||t[0],t[1]=o.date.monthkeys[t[1]]||t[1],t[1].length==2?e=t[0]+"-"+t[1]:t[0].length==2&&(e=t[1]+"-"+t[0])),e},date:function(e){s("d");var t,n=o.patterns.dObj;return e=e.split(o.dFormat),e.length==3?[u(e[n.yy]),u(e[n.mm]),u(e[n.dd])].join("-"):""}},l={number:{step:1},time:{step:60},month:{step:1,start:new Date((new Date).getFullYear(),0,1)},date:{step:1,start:new Date((new Date).getFullYear(),0,1)}},c=function(){var t={};return function(n){var r;return t[n]||(r=e('<input type="'+n+'" />'),t[n]=function(e){var t=typeof e=="object"?"valueAsDate":"value";return r.prop(t,e).prop("valueAsNumber")}),t[n]}}();l.range=l.number;var h={_create:function(){var t;this.type=this.options.type,this.orig=this.options.orig,this.elemHelper=e('<input type="'+this.type+'" />'),this.asNumber=c(this.type),this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"><span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span></span>').insertAfter(this.element),typeof l[this.type].start=="object"&&(l[this.type].start=this.asNumber(l[this.type].start));for(t=0;t<i.length;t++)this[i[t]](this.options[i[t]]);var r=this.element.attr("autocomplete","off").data("wsspinner",this);this.addBindings(),e.browser.mozilla&&e(n).on("unload",function(){r.remove()}),this._init=!0},parseValue:function(e){return f[this.type](e)},formatValue:function(e){return a[this.type](e,this.options)},placeholder:function(e){var t;this.options.placeholder=e,this.type=="date"&&(t=(e||"").split("-"),t.length==3&&(this.options.placeholder=o.patterns.d.replace("yy",t[0]).replace("mm",t[1]).replace("dd",t[2]))),this.element.prop("placeholder",this.options.placeholder)},addZero:u,_setStartInRange:function(){var e=l[this.type].start||0;!isNaN(this.minAsNumber)&&e<this.minAsNumber?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e).prop("value"),this.options.defValue=this.elemHelper.prop("value")},value:function(e){this.valueAsNumber=this.asNumber(e),this.options.value=e,isNaN(this.valueAsNumber)?this._setStartInRange():this.elemHelper.prop("value",e),this.element.prop("value",a[this.type](e,this.options))},list:function(e){this.options.options=e||{}},readonly:function(e){this.options.readonly=!!e,this.element.prop("readonly",this.options.readonly),(this.options.readonly||this._init)&&this.buttonWrapper[this.options.readonly?"addClass":"removeClass"]("ws-readonly")},disabled:function(e){this.options.disabled=!!e,this.element.prop("disabled",this.options.disabled),(this.options.disabled||this._init)&&this.buttonWrapper[this.options.readonly?"addClass":"removeClass"]("ws-disabled")},tabindex:function(e){this.options.tabindex=e,this.element.prop("tabindex",this.options.tabindex)},title:function(e){this.options.title=e,this.element.prop("tabindex",this.options.title)},min:function(e){this.elemHelper.prop("min",e),this.minAsNumber=this.asNumber(e),this.valueAsNumber!=null&&isNaN(this.valueAsNumber)&&this._setStartInRange()},max:function(e){this.elemHelper.prop("max",e),this.maxAsNumber=this.asNumber(e),this.valueAsNumber!=null&&isNaN(this.valueAsNumber)&&this._setStartInRange()},step:function(e){var t=l[this.type];this.elemHelper.prop("step",r(e,t.step))},addBindings:function(){var n,r=this,i=this.options,s=function(){var t={};return{init:function(n,i,s){t[n]||(t[n]={fn:s},e(r.orig).on(n,function(){t[n].val=e.prop(r.orig,"value")})),t[n].val=i},call:function(e,n){t[e]&&t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,r)},0))}}}(),u={},a=function(e){if(a.prevent)return e.preventDefault(),r.element.focus(),e.stopImmediatePropagation(),!0},l=function(){return!i.disabled&&!n&&r.element[0].focus(),a.set(),!1};a.set=function(){var e,t=function(){a.prevent=!1};return function(){clearTimeout(e),a.prevent=!0,setTimeout(t,9)}}(),["stepUp","stepDown"].forEach(function(e){u[e]=function(t){if(!i.disabled&&!i.readonly){n||l();var o=!1;t||(t=1);try{r.elemHelper[e](t),o=r.elemHelper.prop("value"),r.value(o),s.call("input",o)}catch(u){}return o}}}),this.buttonWrapper.on("mousedown",l),this.setChange=function(e){r.value(e),s.call("input",e),s.call("change",e)},this.element.on({blur:function(t){!a(t)&&!i.disabled&&!i.readonly&&(s.call("input",e.prop(r.orig,"value")),s.call("change",e.prop(r.orig,"value")),a.prevent||(n=!1))},focus:function(){s.init("input",e.prop(r.orig,"value"),r.options.input),s.init("change",e.prop(r.orig,"value"),r.options.change),n=!0},change:function(){var t=f[r.type](e.prop(this,"value"));e.prop(r.orig,"value",t),s.call("input",t),s.call("change",t)},mousewheel:function(e,t){t&&n&&!i.disabled&&(u[t>0?"stepUp":"stepDown"](),e.preventDefault())},keypress:function(e){var t,n=!0,i=e.keyCode;i==38?u.stepUp():i==40?u.stepDown():!e.ctrlKey&&!e.metaKey&&o[r.type+"Signs"]?(t=String.fromCharCode(e.charCode==null?i:e.charCode),n=!(t<" "||(o[r.type+"Signs"]+"0123456789").indexOf(t)>-1)):n=!1,n&&e.preventDefault()},wslocalechange:function(){r.value(r.options.value)}}),e(".step-up",this.buttonWrapper).on({"mousepressstart mousepressend":t,"mousedown mousepress":function(e){u.stepUp()}}),e(".step-down",this.buttonWrapper).on({"mousepressstart mousepressend":t,"mousedown mousepress":function(e){u.stepDown()}})}};e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNamesShort",size:1,startAt:0,selectNav:!1,openOnFocus:!1},t),this.each(function(){e.webshims.objectCreate(h,{element:{value:e(this)}},t)})}}(),function(){var n={},r={},i=function(e){return[e.getFullYear(),u(e.getMonth()+1),u(e.getDate())]};n.getYearList=function(e,t){var r,i,s,o,u,a,f;e=e[0]*1;var l=t.options.size||1,c=e%(12*l),h=e-c,p=t.options.max.split("-"),d=t.options.min.split("-"),v=0,m="";for(r=0;r<l;r++){r?h+=12:a=n.isInRange([h-1],p,d)?{"data-action":"setYearList",value:h-1}:!1,m+='<div class="year-list"><h3>'+h+" - "+(h+11)+"</h3>",u=[];for(i=0;i<12;i++)s=h+i,n.isInRange([s],p,d)?(o="",v++):o=' disabled="disabled"',u.push('<li><button type="button"'+o+'" data-action="setMonthList" value="'+s+'">'+s+"</button></li>");r==l-1&&(f=n.isInRange([s+1],p,d)?{"data-action":"setYearList",value:s+1}:!1),m+='<ul class="year-list">'+u.join("")+"</ul></div>"}return{enabled:v,main:m,next:f,prev:a}},n.getMonthList=function(e,t){var r,i,s,u,a,f,l,c,h,p=t.options.size||1,d=t.options.max.split("-"),v=t.options.min.split("-"),m=0,g="";e=e[0]-Math.floor((p-1)/2);for(r=0;r<p;r++){r?e++:c=n.isInRange([e-1],d,v)?{"data-action":"setMonthList",value:e-1}:!1,r==p-1&&(h=n.isInRange([e+1],d,v)?{"data-action":"setMonthList",value:e+1}:!1),f=[],!n.isInRange([e,"01"],d,v)&&!n.isInRange([e,"12"],d,v)?(a=' disabled="disabled"',l=!0):(l=!1,a=""),g+='<div class="month-list">',g+=t.options.selectNav?'<select data-action="setMonthList">'+n.createYearSelect(e,d,v).join("")+"</select>":'<button data-action="setYearList"'+a+' value="'+e+'">'+e+"</button>";for(i=0;i<12;i++)u=o.date.monthkeys[i+1],s=o.date.monthNames[i],l||!n.isInRange([e,u],d,v)?a=' disabled="disabled"':(a="",m++),f.push('<li><button type="button"'+a+'" data-action="'+(t.type=="month"?"changeInput":"setDayList")+'" value="'+e+"-"+u+'">'+s+"</button></li>");g+="<ul>"+f.join("")+"</ul></div>"}return{enabled:m,main:g,prev:c,next:h}},n.getDayList=function(e,t){var r,s,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=t.options.size||1,T=t.options.max.split("-"),N=t.options.min.split("-"),C=o.date[t.options.monthNames]||o.date.monthNames,k=0,L=[],A=new Date(e[0],e[1]-1,1);A.setMonth(A.getMonth()-Math.floor((x-1)/2));for(r=0;r<x;r++){m=A.getMonth(),r||(S=new Date(A.getTime()),S.setDate(-1),b=i(S),p=n.isInRange(b,T,N)?{"data-action":"setDayList",value:b[0]+"-"+b[1]}:!1),b=i(A),L.push('<div class="day-list">'),t.options.selectNav?(w=['<select data-action="setDayList">'+n.createMonthSelect(b,T,N,C).join("")+"</select>",'<select data-action="setDayList">'+n.createYearSelect(b[0],T,N,"-"+b[1]).join("")+"</select>"],o.date.showMonthAfterYear&&w.reverse(),L.push(w.join(" "))):(w=[C[b[1]*1-1],b[0]],o.date.showMonthAfterYear&&w.reverse(),L.push('<button data-action="setMonthList" value="'+b[0]+"-"+b[1]+'">'+w.join(" ")+"</button>")),L.push("<table><tr>");for(u=1;u<o.date.dayNamesShort.length;u++)L.push("<th>"+o.date.dayNamesShort[u]+"</th>");L.push("<th>"+o.date.dayNamesShort[0]+"</th>"),L.push("</tr><tr>");for(s=0;s<46;s++){v=s&&!(s%7),g=A.getMonth(),y=m!=g;if(v&&y){L.push("</tr>");break}v&&L.push("</tr><tr>"),s||(a=A.getDay()-1,a>-1&&a<6&&A.setDate(A.getDate()-a),g=A.getMonth(),y=m!=g),b=i(A),E='<td><button data-action="changeInput" value="'+b.join("-")+'"',y&&(E+=' data-othermonth=""'),n.isInRange(b,T,N)||(E+=' disabled=""'),L.push(E+">"+A.getDate()+"</button></td>"),A.setDate(A.getDate()+1)}L.push("</table></div>"),r==x-1&&(b=i(A),b[2]=1,d=n.isInRange(b,T,N)?{"data-action":"setDayList",value:b[0]+"-"+b[1]}:!1)}return{enabled:9,main:L.join(""),prev:p,next:d}},n.isInRange=function(e,t,n){var r,i=!0;for(r=0;r<e.length;r++){if(n[r]&&n[r]>e[r]){i=!1;break}if(!n[r]||n[r]!=e[r])break}if(i)for(r=0;r<e.length;r++){if(t[r]&&t[r]<e[r]){i=!1;break}if(!t[r]||t[r]!=e[r])break}return i},n.createMonthSelect=function(e,t,r,i){i||(i=o.date.monthNames);var s,a=0,f=[],l=e[1]-1;for(;a<i.length;a++)s=l==a?' selected=""':"",(s||n.isInRange([e[0],a+1],t,r))&&f.push('<option value="'+e[0]+"-"+u(a+1)+'"'+s+">"+i[a]+"</option>");return f},n.createYearSelect=function(e,t,r,i){var s,o=!0,u=!0,a=['<option selected="">'+e+"</option>"],f=0;i||(i="");while(f<8&&(o||u))f++,s=e-f,o&&n.isInRange([s],t,r)?a.unshift('<option value="'+(s+i)+'">'+s+"</option>"):o=!1,s=e+f,u&&n.isInRange([s],t,r)?a.push('<option value="'+(s+i)+'">'+s+"</option>"):u=!1;return a};var s={changeInput:function(e,t,n){n.setChange(e),t.hide()}};(function(){var t=function(e){return"get"+e+"List"},r={date:"Day",week:"Day",month:"Month"};e.each({setYearList:["Year","Month","Day"],setMonthList:["Month","Day"],setDayList:["Day"]},function(i,o){var u=o.map(t);s[i]=function(t,i,s,a){var f=t.split("-");a||(a=0),e.each(u,function(e,t){if(e>=a){var u=n[t](f,s);if(f.length<2||u.enabled>1||r[s.type]===o[e])return i.bodyElement.html(u.main),u.prev?i.prevElement.attr(u.prev).prop({disabled:!1}):i.prevElement.removeAttr("data-action").prop({disabled:!0}),u.next?i.nextElement.attr(u.next).prop({disabled:!1}):i.nextElement.removeAttr("data-action").prop({disabled:!0}),!1}})}})})(),n.commonInit=function(t,n){t.list=function(r){var i=this.options,s=[];i.options=r||{},e("div.ws-options",n.contentElement).remove(),e.each(i.options,function(e,n){s.push('<li><button value="'+e+'" data-action="changeInput">'+(n||t.formatValue(e))+"</button></li>")}),s.length&&n.contentElement.append('<div class="ws-options"><ul>'+s.join("")+"</ul></div>")},n.contentElement.html('<button class="ws-prev"></button><button class="ws-next"></button><div class="ws-picker-body"></div>'),n.nextElement=e("button.ws-next",n.contentElement),n.prevElement=e("button.ws-prev",n.contentElement),n.bodyElement=e("div.ws-picker-body",n.contentElement),n.contentElement.on({wslocalechange:function(){n.nextElement.text(o.date.nextText),n.prevElement.text(o.date.prevText)}}).triggerHandler("wslocalechange"),t.list(t.options.options)},n.month=function(r){var i=t.objectCreate(t.wsPopover,{},{prepareFor:r.element}),o=e('<span class="popover-opener" />').appendTo(r.buttonWrapper),u=r.options,a=!1,f=function(){var n=e(this).attr("data-action");return s[n]?s[n](e(this).val(),i,r):t.warn("no action for "+n),!1},l=function(){!u.disabled&&!u.readonly&&(a||(n.commonInit(r,i),s.setYearList(u.value||u.defValue,i,r,r.options.startAt)),a=!0,i.show(r.element))};i.element.addClass(r.type+"-popover"),i.contentElement.on("click","button[data-action]",f).on("change","select[data-action]",f),o.on("mousedown",l),r.element.on({focus:function(){r.options.openOnFocus&&l()},mousedown:function(){r.element.is(":focus")&&l()}})},n.date=n.month,t.picker=n}(),function(){var n=Modernizr.inputtypes,r,i={},o=["disabled","readonly","value","min","max","step","title","placeholder"],u=["tabindex","data-placeholder"],a=function(e){};e.each(o.concat(u),function(e,n){var i=n.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",n,function(e){if(!r){var n=t.data(this,"shadowData");n&&n.data&&n.nativeElement===this&&n.data[i]&&n.data[i](e)}})});var f=function(){return function(t,n){i[t]=n,n.attrs=e.merge([],u,n.attrs),n.props=e.merge([],o,n.props)}}(),l=function(t,n){var r=e.prop(t,"list"),i={},s,o;return r&&e("option",r).each(function(){i[e.prop(this,"value")]=e.prop(this,"label")}),n&&(o=function(){n.shim&&(clearTimeout(s),s=setTimeout(function(){n.shim.list(l(t))},9))},e(r).on("updateDatalist",o),e(t).on("listdatalistchange",o)),i},c=function(e){e.stopImmediatePropagation(e)},h=function(){return e.css(this,"display")!="none"},p=function(t){var n,r=function(){e.style(t.orig,"display","");var r=.6;if(!n||t.orig.offsetWidth)t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:e.css(t.orig,"marginRight")}),t.buttonWrapper&&(t.element.css({paddingRight:""}),(parseInt(t.buttonWrapper.css("marginLeft"),10)||0)<0?t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()}):r=t.buttonWrapper.outerWidth(!0)+.6),t.element.outerWidth(e(t.orig).outerWidth()-r);n=!0,e.style(t.orig,"display","none")};e(t.orig).on("updateshadowdom",r),r()},d=function(){var n=e.prop(this,"type"),a,f,h,d,v;if(i[n]){h={},d=n,f=e.extend({},s[n],e(e.prop(this,"form")).data(n)||{},e(this).data(n)||{},{orig:this,type:n,options:l(this,h),input:function(e){f._change(e,"input")},change:function(e){f._change(e,"change")},_change:function(t,n){r=!0,e.prop(f.orig,"value",t),r=!1,n&&e(f.orig).trigger(n)}});for(a=0;a<o.length;a++)f[o[a]]=e.prop(this,o[a]);for(a=0;a<u.length;a++)d=u[a].replace(/^data\-/,""),f[d]||(f[d]=e.attr(this,u[a]));h.shim=i[n]._create(f),t.addShadowDom(this,h.shim.element,{data:h.shim||{}}),e(this).on("change",function(t){!r&&t.originalEvent&&h.shim.value(e.prop(this,"value"))}),h.shim.element.on("change input",c),h.shim.element.on("focusin focusout",function(t){t.stopImmediatePropagation(t),e(f.orig).trigger(t)}),h.shim.element.on("focus blur",function(t){t.stopImmediatePropagation(t),e(f.orig).triggerHandler(t)}),v=f.calculateWidth!=null?f.calculateWidth:s.calculateWidth,v&&p(h.shim),e(this).css({display:"none"})}};(!n.range||s.replaceUI)&&f("range",{_create:function(t,n){return e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi")}}),["number","time","month","date"].forEach(function(r){(!n[r]||s.replaceUI)&&f(r,{_create:function(n,i){var s=e('<input class="ws-'+r+'" type="text" />').insertAfter(n.orig).spinbtnUI(n).data("wsspinner");return t.picker&&t.picker[r]&&t.picker[r](s),s.buttonWrapper.addClass("input-button-size-"+s.buttonWrapper.children().filter(h).length),s}})}),t.addReady(function(t,n){e("input",t).add(n.filter("input")).each(d)})}()});