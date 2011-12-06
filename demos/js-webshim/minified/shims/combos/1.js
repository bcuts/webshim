(function(){var a=Function.prototype.call,g=Object.prototype,j=a.bind(g.toString),n=a.bind(g.hasOwnProperty);if(!Array.isArray)Array.isArray=function(a){return j(a)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,l){var i=r(this),e=0,f=i.length>>>0;if(j(a)!="[object Function]")throw new TypeError;for(;e<f;)e in i&&a.call(l,i[e],e,i),e++};if(!Array.prototype.map)Array.prototype.map=function(a,l){var i=r(this),e=i.length>>>0,f=Array(e);if(j(a)!="[object Function]")throw new TypeError;
for(var b=0;b<e;b++)b in i&&(f[b]=a.call(l,i[b],b,i));return f};if(!Array.prototype.filter)Array.prototype.filter=function(a,l){var i=r(this),e=i.length>>>0,f=[];if(j(a)!="[object Function]")throw new TypeError;for(var b=0;b<e;b++)b in i&&a.call(l,i[b],b,i)&&f.push(i[b]);return f};if(!Array.prototype.every)Array.prototype.every=function(a,l){var i=r(this),e=i.length>>>0;if(j(a)!="[object Function]")throw new TypeError;for(var f=0;f<e;f++)if(f in i&&!a.call(l,i[f],f,i))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=
function(a,l){var f=r(this),e=f.length>>>0;if(j(a)!="[object Function]")throw new TypeError;for(var b=0;b<e;b++)if(b in f&&a.call(l,f[b],b,f))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(a){var f=r(this),b=f.length>>>0;if(j(a)!="[object Function]")throw new TypeError;if(!b&&arguments.length==1)throw new TypeError;var e=0,g;if(arguments.length>=2)g=arguments[1];else{do{if(e in f){g=f[e++];break}if(++e>=b)throw new TypeError;}while(1)}for(;e<b;e++)e in f&&(g=a.call(void 0,
g,f[e],e,f));return g};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var f=r(this),b=f.length>>>0;if(j(a)!="[object Function]")throw new TypeError;if(!b&&arguments.length==1)throw new TypeError;var e;b-=1;if(arguments.length>=2)e=arguments[1];else{do{if(b in f){e=f[b--];break}if(--b<0)throw new TypeError;}while(1)}do b in this&&(e=a.call(void 0,e,f[b],b,f));while(b--);return e};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){var f=r(this),b=f.length>>>0;if(!b)return-1;
var e=0;arguments.length>1&&(e=y(arguments[1]));for(e=e>=0?e:b-Math.abs(e);e<b;e++)if(e in f&&f[e]===a)return e;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){var f=r(this),b=f.length>>>0;if(!b)return-1;var e=b-1;arguments.length>1&&(e=y(arguments[1]));for(e=e>=0?e:b-Math.abs(e);e>=0;e--)if(e in f&&a===f[e])return e;return-1};if(!Object.keys){var f=!0,p="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),b=p.length,
o;for(o in{toString:null})f=!1;Object.keys=function l(a){if(typeof a!="object"&&typeof a!="function"||a===null)throw new TypeError("Object.keys called on a non-object");var l=[],e;for(e in a)n(a,e)&&l.push(e);if(f)for(e=0;e<b;e++){var g=p[e];n(a,g)&&l.push(g)}return l}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var a,f,b;if(!isFinite(this))throw new RangeError;a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];
for(f=a.length;f--;)b=a[f],b<10&&(a[f]="0"+b);return a.slice(0,3).join("-")+"T"+a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};a="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||a.trim()){var a="["+a+"]",k=RegExp("^"+a+a+"*"),q=RegExp(a+a+"*$");String.prototype.trim=function(){return String(this).replace(k,"").replace(q,"")}}var y=function(a){a=+a;a!==a?a=-1:a!==0&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a)));return a},t="a"[0]!="a",r=function(a){if(a==null)throw new TypeError;return t&&typeof a=="string"&&a?a.split(""):Object(a)}})();
(function(a,g){var j=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);j&&!a.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var a=document.createElement("foo");Object.defineProperty(a,"bar",{get:function(){return!0}});j=!!a.bar}catch(g){j=!1}a=null}();Modernizr.objectAccessor=!(!(j||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||a.browser.opera&&!(g.browserVersion>=11));Modernizr.advancedObjectProperties=j;
if(!j||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var n=Function.prototype.call.bind(Object.prototype.hasOwnProperty);g.objectCreate=function(a,p,b,j){var k;k=function(){};k.prototype=a;k=new k;if(!j&&!("__proto__"in k)&&!Modernizr.objectAccessor)k.__proto__=a;p&&g.defineProperties(k,p);if(b)k.options=jQuery.extend(!0,{},k.options||{},b),b=k.options;k._create&&jQuery.isFunction(k._create)&&k._create(b);return k};g.defineProperties=function(a,
p){for(var b in p)n(p,b)&&g.defineProperty(a,b,p[b]);return a};g.defineProperty=function(a,g,b){if(typeof b!="object"||b===null)return a;if(n(b,"value"))return a[g]=b.value,a;a.__defineGetter__&&(typeof b.get=="function"&&a.__defineGetter__(g,b.get),typeof b.set=="function"&&a.__defineSetter__(g,b.set));return a};g.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&a.constructor.prototype};g.getOwnPropertyDescriptor=function(a,g){if(typeof a!==
"object"&&typeof a!=="function"||a===null)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var b;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return b=Object.getOwnPropertyDescriptor(a,g)}catch(j){}b={configurable:!0,enumerable:!0,writable:!0,value:void 0};var k=a.__lookupGetter__&&a.__lookupGetter__(g),q=a.__lookupSetter__&&a.__lookupSetter__(g);if(!k&&!q){if(!n(a,g))return;b.value=a[g];return b}delete b.writable;delete b.value;b.get=b.set=void 0;if(k)b.get=
k;if(q)b.set=q;return b}}})(jQuery,jQuery.webshims);(function(a){if(!Modernizr.genericDOM){var g=document,j,n,f=/<([\w:]+)/,p={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if(typeof a!="string"||p[(f.exec(a)||["",""])[1].toLowerCase()])return a;if(!n){j=g.body;if(!j)return a;n=g.createElement("div");n.style.display="none"}var o=n.cloneNode(!1);j.appendChild(o);o.innerHTML=a;j.removeChild(o);return o.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,g,j,n,f){var p=g.modules,b=/\s*,\s*/,o={},k={},q={},y={},t={},r=a.fn.val,A=function(h,c,d,m,b){return b?r.call(a(h)):r.call(a(h),d)};a.fn.val=function(h){var c=this[0];arguments.length&&h==null&&(h="");if(!arguments.length)return!c||c.nodeType!==1?r.call(this):a.prop(c,"value",h,"val",!0);if(a.isArray(h))return r.apply(this,arguments);var d=a.isFunction(h);return this.each(function(m){c=this;c.nodeType===1&&(d?(m=h.call(c,m,a.prop(c,"value",f,"val",
!0)),m==null&&(m=""),a.prop(c,"value",m,"val")):a.prop(c,"value",h,"val"))})};var l="_webshimsLib"+Math.round(Math.random()*1E3),i=function(h,c,d){h=h.jquery?h[0]:h;if(!h)return d||{};var m=a.data(h,l);d!==f&&(m||(m=a.data(h,l,{})),c&&(m[c]=d));return c?m&&m[c]:m};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(h){a.fn[h.name]=function(){return this.map(function(){var a=i(this,
"shadowData");return a&&a[h.prop]||this})}});["removeAttr","prop","attr"].forEach(function(h){o[h]=a[h];a[h]=function(c,d,m,b,e){var g=b=="val",j=!g?o[h]:A;if(!c||!k[d]||c.nodeType!==1||!g&&b&&h=="attr"&&a.attrFn[d])return j(c,d,m,b,e);var v=(c.nodeName||"").toLowerCase(),w=q[v],x=h=="attr"&&(m===!1||m===null)?"removeAttr":h,i,l,p;w||(w=q["*"]);w&&(w=w[d]);w&&(i=w[x]);if(i){if(d=="value")l=i.isVal,i.isVal=g;if(x==="removeAttr")return i.value.call(c);else if(m===f)return i.get?i.get.call(c):i.value;
else i.set&&(h=="attr"&&m===!0&&(m=d),p=i.set.call(c,m));if(d=="value")i.isVal=l}else p=j(c,d,m,b,e);if((m!==f||x==="removeAttr")&&t[v]&&t[v][d]){var n;n=x=="removeAttr"?!1:x=="prop"?!!m:!0;t[v][d].forEach(function(a){if(!a.only||(a.only=h=="prop")||a.only=="attr"&&h!="prop")a.call(c,m,n,g?"val":x,h)})}return p};y[h]=function(c,d,b){q[c]||(q[c]={});q[c][d]||(q[c][d]={});var e=q[c][d][h],u=function(a,c,v){return c&&c[a]?c[a]:v&&v[a]?v[a]:h=="prop"&&d=="value"?function(a){return b.isVal?A(this,d,a,
!1,arguments.length===0):o[h](this,d,a)}:h=="prop"&&a=="value"&&b.value.apply?function(a){var c=o[h](this,d);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return o[h](this,d,a)}};q[c][d][h]=b;if(b.value===f){if(!b.set)b.set=b.writeable?u("set",b,e):g.cfg.useStrict&&d=="prop"?function(){throw d+" is readonly on "+c;}:a.noop;if(!b.get)b.get=u("get",b,e)}["value","get","set"].forEach(function(a){b[a]&&(b["_sup"+a]=u(a,e))})}});var e=!a.browser.msie||parseInt(a.browser.version,10)>8,B=
function(){var a=g.getPrototypeOf(n.createElement("foobar")),c=Object.prototype.hasOwnProperty;return function(d,b,f){var u=n.createElement(d),j=g.getPrototypeOf(u);if(e&&j&&a!==j&&(!u[b]||!c.call(u,b))){var k=u[b];f._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};j[b]=f.value}else f._supvalue=function(){var a=i(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},s.extendValue(d,b,f.value);f.value._supvalue=f._supvalue}}(),s=function(){var h={};g.addReady(function(c,
d){var b={},f=function(h){b[h]||(b[h]=a(c.getElementsByTagName(h)),d[0]&&a.nodeName(d[0],h)&&(b[h]=b[h].add(d)))};a.each(h,function(a,c){f(a);!c||!c.forEach?g.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){b[a].each(c)})});b=null});var c,d=a([]),b=function(d,b){h[d]?h[d].push(b):h[d]=[b];a.isDOMReady&&(c||a(n.getElementsByTagName(d))).each(b)};return{createTmpCache:function(b){a.isDOMReady&&(c=c||a(n.getElementsByTagName(b)));return c||d},flushTmpCache:function(){c=null},content:function(c,
d){b(c,function(){a(this).filter("["+d+"]").attr(d,function(a,c){return c})})},createElement:function(a,c){b(a,c)},extendValue:function(c,d,h){b(c,function(){a(this).each(function(){i(this,"propValue",{})[d]=this[d];this[d]=h})})}}}(),z=function(a,c){if(a.defaultValue===f)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(g,{getID:function(){var b=(new Date).getTime();return function(c){var c=a(c),
d=c.attr("id");d||(b++,d="ID-"+b,c.attr("id",d));return d}}(),extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},createPropDefault:z,data:i,moveToFirstEvent:function(){var b=a._data?"_data":"data";return function(c,d,f){if((c=(a[b](c,"events")||{})[d])&&c.length>1)d=c.pop(),f||(f="bind"),f=="bind"&&c.delegateCount?c.splice(c.delegateCount,0,d):c.unshift(d)}}(),addShadowDom:function(b,c,d){d=d||{};b.jquery&&(b=b[0]);c.jquery&&(c=c[0]);if(!d.shadowFocusElement)d.shadowFocusElement=
c;var f=a.data(b,l)||a.data(b,l,{}),e=a.data(c,l)||a.data(c,l,{});f.hasShadow=c;e.nativeElement=b;e.shadowData=f.shadowData={nativeElement:b,shadowElement:c,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){i(this,"shadowData",e.shadowData)});if(d.data)f.shadowData.data=d.data,e.shadowData.data=d.data;d=null},propTypes:{standard:function(a){z(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},
"boolean":function(a){z(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return a.attr.get.call(this)!=null}}}},reflectProperties:function(h,c){typeof c=="string"&&(c=c.split(b));c.forEach(function(c){g.defineNodeNamesProperty(h,c,{prop:{set:function(b){a.attr(this,c,b)},get:function(){return a.attr(this,c)||""}}})})},defineNodeNameProperty:function(b,c,d){k[c]=!0;if(d.reflect)g.propTypes[d.propType||"standard"](d);["prop","attr","removeAttr"].forEach(function(f){var e=
d[f];e&&(e=f==="prop"?a.extend({writeable:!0},e):a.extend({},e,{writeable:!0}),y[f](b,c,e),b!="*"&&g.cfg.extendNative&&f=="prop"&&e.value&&a.isFunction(e.value)&&B(b,c,e),d[f]=e)});d.initAttr&&s.content(b,c);return d},defineNodeNameProperties:function(a,c,b,f){for(var e in c)!f&&c[e].initAttr&&s.createTmpCache(a),b&&(c[e][b]?g.log("override: "+a+"["+e+"] for "+b):(c[e][b]={},["value","set","get"].forEach(function(a){a in c[e]&&(c[e][b][a]=c[e][a],delete c[e][a])}))),c[e]=g.defineNodeNameProperty(a,
e,c[e]);f||s.flushTmpCache();return c},createElement:function(b,c,d){var e;a.isFunction(c)&&(c={after:c});s.createTmpCache(b);c.before&&s.createElement(b,c.before);d&&(e=g.defineNodeNameProperties(b,d,!1,!0));c.after&&s.createElement(b,c.after);s.flushTmpCache();return e},onNodeNamesPropertyModify:function(e,c,d,f){typeof e=="string"&&(e=e.split(b));a.isFunction(d)&&(d={set:d});e.forEach(function(a){t[a]||(t[a]={});typeof c=="string"&&(c=c.split(b));d.initAttr&&s.createTmpCache(a);c.forEach(function(b){t[a][b]||
(t[a][b]=[],k[b]=!0);if(d.set){if(f)d.set.only=f;t[a][b].push(d.set)}d.initAttr&&s.content(a,b)});s.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,c,d){d||(d={});if(a.isFunction(d))d.set=d;g.defineNodeNamesProperty(b,c,{attr:{set:function(a){this.setAttribute(c,a);d.set&&d.set.call(this,!0)},get:function(){return this.getAttribute(c)==null?f:c}},removeAttr:{value:function(){this.removeAttribute(c);d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},
contentAttr:function(a,b,d){if(a.nodeName){if(d===f)return d=(a.attributes[b]||{}).value,d==null?f:d;typeof d=="boolean"?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var b=[],c={},d,e,f=/:\/\/|^\.*\//,i=function(b,c,d){return c&&d&&a.inArray(c,d.availabeLangs||[])!==-1?(b.loading=!0,d=d.langSrc,f.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,k(b,!0)):a(function(){b.langObj[c]&&k(b,!0);b.loading=!1})}),!0):
!1},j=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},k=function(a,b){if(a.activeLang!=d&&a.activeLang!==e){var c=p[a.module].options;if(a.langObj[d]||e&&a.langObj[e])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[e],d),j(a.module);else if(!b&&!i(a,d,c)&&!i(a,e,c)&&a.langObj[""]&&a.activeLang!=="")a.activeLang="",a.callback(a.langObj[""],d),j(a.module)}};return function(f){if(typeof f=="string"&&f!==d)d=f,e=d.split("-")[0],d==e&&(e=!1),a.each(b,function(a,b){k(b)});else if(typeof f==
"object")if(f.register)c[f.register]||(c[f.register]=[]),c[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);k(f)}return d}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){g[a]=function(a,e,f,h){typeof a=="string"&&(a=a.split(b));var i={};a.forEach(function(a){i[a]=g[c](a,e,f,h)});return i}});g.isReady("webshimLocalization",!0)});
(function(a,g){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&j>5)&&(!a.browser.msie||j<12&&j>7)){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},f=function(a,b){a.getAttribute("role")||a.setAttribute("role",b)};a.webshims.addReady(function(j,b){a.each(n,function(g,k){for(var n=a(g,j).add(b.filter(g)),o=0,l=n.length;o<l;o++)f(n[o],k)});if(j===g){var o=g.getElementsByTagName("header")[0],k=g.getElementsByTagName("footer"),q=k.length;
o&&!a(o).closest("section, article")[0]&&f(o,"banner");q&&(o=k[q-1],a(o).closest("section, article")[0]||f(o,"contentinfo"))}})}})(jQuery,document);
