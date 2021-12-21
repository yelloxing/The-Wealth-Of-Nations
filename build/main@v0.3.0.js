/******/
/******/  // EtcPack Bootstrap/******/  
/******/  // （ https://etcpack.github.io/api/ ）/******/  
/******/  /******/  
/******/  // 记录bundle的函数源码/******/  
/******/  window.__etcpack__bundleSrc__ = {};/******/  
/******/  /******/  
/******/  // 记录bundle的运行结果/******/  
/******/  window.__etcpack__bundleObj__ = {};/******/  
/******/  /******/  
/******/  // 获取bundle结果/******/  
/******/  window.__etcpack__getBundle = function (bundleName) {/******/  
/******/  /******/  
/******/      // 一个bundle只有第一次导入的时候需要执行/******/  
/******/      if (!(bundleName in window.__etcpack__bundleObj__)) {/******/  
/******/          window.__etcpack__bundleObj__[bundleName] = window.__etcpack__bundleSrc__[bundleName]();/******/  
/******/      }/******/  
/******/  /******/  
/******/      // 返回需要的bundle的结果/******/  
/******/      return window.__etcpack__bundleObj__[bundleName];/******/  
/******/  }/******/  
/******/  /******/  
/******/  window.__etcpack__bundleFile__ = {};/******/  
/******/  /******/  
/******/  // 获取懒加载bundle结果/******/  
/******/  window.__etcpack__getLazyBundle = function (fileName, bundleName) {/******/  
/******/      return new Promise(function (resolve) {/******/  
/******/  /******/  
/******/          // 如果加载过了/******/  
/******/          if (window.__etcpack__bundleFile__[fileName]) {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/              return;/******/  
/******/          }/******/  
/******/  /******/  
/******/          // 获取head标签/******/  
/******/          var head = document.getElementsByTagName('head')[0];/******/  
/******/  /******/  
/******/          // 创建script/******/  
/******/          var script = document.createElement('script');/******/  
/******/  /******/  
/******/          // 设置属性/******/  
/******/          script.src = fileName;/******/  
/******/  /******/  
/******/          // 追加到页面/******/  
/******/          head.appendChild(script);/******/  
/******/  /******/  
/******/          window.__etcpack__bundleFile__[fileName] = true;/******/  
/******/  /******/  
/******/          script.addEventListener('load', function () {/******/  
/******/              resolve(window.__etcpack__getBundle(bundleName));/******/  
/******/          }, false);/******/  
/******/  /******/  
/******/  /******/  
/******/      });/******/  
/******/  }/******/  
/******/  
/************************************************************************/
/******/

/*************************** [bundle] ****************************/
// Original file:./src/entry.js
/*****************************************************************/
window.__etcpack__bundleSrc__['0']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('1');
var QuickPaper =__etcpack__scope_args__.default;
 // 兼容文件

__etcpack__scope_args__=window.__etcpack__getBundle('3');
 // 引入样式

__etcpack__scope_args__=window.__etcpack__getBundle('16');

__etcpack__scope_args__=window.__etcpack__getBundle('17');

__etcpack__scope_args__=window.__etcpack__getBundle('18');

__etcpack__scope_args__=window.__etcpack__getBundle('19');

__etcpack__scope_args__=window.__etcpack__getBundle('20');
var App =__etcpack__scope_args__.default;
 // 创建对象

window.quickPaper = new QuickPaper({
  // 挂载点
  el: document.getElementById('root'),
  // 启动组件
  render: function render(createElement) {
    return createElement(App);
  }
});
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/lib/quick-paper.js
/*****************************************************************/
window.__etcpack__bundleSrc__['1']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('2');

__etcpack__scope_bundle__.default= QuickPaper;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/quick-paper/dist/quick-paper.min.js
/*****************************************************************/
window.__etcpack__bundleSrc__['2']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    "use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
* quick-paper v1.2.2
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var e=Object.prototype.toString;function t(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":e.call(t)}var n=function(e,n){return null!==n&&"object"===_typeof(n)&&e.indexOf(n.nodeType)>-1&&!function(e){if(null===e||"object"!==_typeof(e)||"[object Object]"!=t(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}(n)},r=function(e){var n=_typeof(e);return"string"===n||"object"===n&&null!=e&&!Array.isArray(e)&&"[object String]"===t(e)},o=function(e){if(!function(e){var t=_typeof(e);return null!=e&&("object"===t||"function"===t)}(e))return!1;var n=t(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n};function i(e){/^[_$]/.test(e)&&console.error("The beginning of _ or $ is not allowed："+e)}var s=1;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={},i=[];if(!r(e))return{type:"component",options:e,attrs:{},children:[]};for(var s in t)/^@/.test(s)?o[s.replace(/^@/,"q-on:")]=t[s]:/^:/.test(s)?o["q-bind"+s]=t[s]:o[s]=t[s];for(var a,c=0;c<n.length;c++)a=n[c],r(a)?/\{\{[^}]+\}\}/.test(a)?i.push({type:"bindText",content:('" '+a+' "').replace(/\{\{([^}]+)\}\}/g,'"+$1+"')}):i.push({type:"text",content:a}):i.push(a);return{type:"none",tagName:e,attrs:o,children:i}}function c(e){for(var t=(e+"").toLowerCase(),n=(e+"").toUpperCase(),r="",o=!1,i=0;i<e.length;i++)"-"!=e[i]?o?(r+=n[i],o=!1):r+=t[i]:o=!0;return r}var l=Object.prototype.toString;var p=function(e){var t=_typeof(e);return"string"===t||"object"===t&&null!=e&&!Array.isArray(e)&&"[object String]"===function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l.call(e)}(e)},u=function(e){return Array.isArray(e)},f={blankReg:new RegExp("[\\x20\\t\\r\\n\\f]"),blanksReg:/^[\x20\t\r\n\f]{0,}$/,identifier:/^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/},d=["+","-","*","/","%","&","|","!","?",":","[","]","(",")",">","<","="],h=["+","-","*","/","%","&","|","!","?",":",">","<","=","<=",">=","==","===","!=","!=="];function v(e,t,n){t=t.trim();var r=-1,o=null,i=function(){return o=r++<t.length-1?t[r]:null},s=function(e){return t.substring(r,e+r>t.length?t.length:e+r)};i();for(var a=[];!(r>=t.length);)if(d.indexOf(o)>-1)if(["&","|","="].indexOf(o)>-1)if(["==="].indexOf(s(3))>-1)a.push(s(3)),r+=2,i();else{if(!(["&&","||","=="].indexOf(s(2))>-1))throw new Error("Illegal expression : "+t+"\nstep='analyseExpress',index="+r);a.push(s(2)),r+=1,i()}else["!=="].indexOf(s(3))>-1?(a.push(s(3)),r+=2,i()):[">=","<=","!="].indexOf(s(2))>-1?(a.push(s(2)),r+=1,i()):(a.push(o),i());else if(['"',"'"].indexOf(o)>-1){var c="",l=o;for(i();o!=l;){if(r>=t.length)throw new Error("String unclosed error : "+t+"\nstep='analyseExpress',index="+r);c+=o,i()}a.push(c+"@string"),i()}else if(/\d/.test(o)){var u="no";c=o;for(i();r<t.length;){if(/\d/.test(o))c+=o,"error"==u&&(u="yes");else{if("."!=o||"no"!=u)break;c+=o,u="error"}i()}"error"==u&&(c+="0"),a.push(+c)}else if(["null","true"].indexOf(s(4))>-1)a.push({null:null,true:!0}[s(4)]),r+=3,i();else if(["false"].indexOf(s(5))>-1)a.push({false:!1}[s(5)]),r+=4,i();else if(["undefined"].indexOf(s(9))>-1)a.push({undefined:void 0}[s(9)]),r+=8,i();else if(f.blankReg.test(o))do{i()}while(f.blankReg.test(o)&&r<t.length);else{var v=!1;if("."==o&&(v=!0,i()),!f.identifier.test(o))throw new Error("Illegal express : "+t+"\nstep='analyseExpress',index="+r);for(var y=1;r+y<=t.length&&f.identifier.test(s(y));)y+=1;if(v)a.push("["),a.push(s(y-1)+"@string"),a.push("]");else{var _=s(y-1),g=_ in n?n[_]:e[_];a.push(p(g)?g+"@string":g)}r+=y-2,i()}for(var b=0,m=0;m<a.length;m++)["+","-"].indexOf(a[m])>-1&&(0==m||h.indexOf(a[b-1])>-1)?(a[b++]=+(a[m]+a[m+1]),m+=1):a[b++]=a[m];return a.length=b,a}var y=function(e){return"string"==typeof e?e.replace(/@string$/,""):e};function _(e){for(var t,n=0,r=0;r<e.length;r++)"!"==e[r]?e[n]=!e[++r]:e[n]=e[r],n+=1;if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"*"==e[r]?e[n-1]=y(e[n-1])*y(e[++r]):"/"==e[r]?e[n-1]=y(e[n-1])/y(e[++r]):"%"==e[r]?e[n-1]=y(e[n-1])%y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"+"==e[r]?e[n-1]="string"==typeof(t=y(e[n-1])+y(e[++r]))?t+"@string":t:"-"==e[r]?e[n-1]=y(e[n-1])-y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)">"==e[r]?e[n-1]=y(e[n-1])>y(e[++r]):"<"==e[r]?e[n-1]=y(e[n-1])<y(e[++r]):"<="==e[r]?e[n-1]=y(e[n-1])<=y(e[++r]):">="==e[r]?e[n-1]=y(e[n-1])>=y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"=="==e[r]?e[n-1]=y(e[n-1])==y(e[++r]):"==="==e[r]?e[n-1]=y(e[n-1])===y(e[++r]):"!="==e[r]?e[n-1]=y(e[n-1])!=y(e[++r]):"!=="==e[r]?e[n-1]=y(e[n-1])!==y(e[++r]):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"&&"==e[r]?(e[n-1]=y(e[n-1])&&y(e[1+r]),r+=1):"||"==e[r]?(e[n-1]=y(e[n-1])||y(e[1+r]),r+=1):e[n++]=e[r];if(1==n)return y(e[0]);for(e.length=n,n=0,r=0;r<e.length;r++)"?"==e[r]?(e[n-1]=y(e[n-1])?y(e[r+1]):y(e[r+3]),r+=3):e[n++]=e[r];if(1==n)return y(e[0]);throw e.length=n,new Error("Unrecognized expression : ["+e.toString()+"]")}var g=function(e){for(var t=!0;t;){t=!1;for(var n=[],r=[],o=!1,i=0;i<e.length;i++)if("["==e[i]&&0!=i&&"]"!=e[i-1]){if(o){n.push("[");for(var s=0;s<r.length;s++)n.push(r[s])}else o=!0;r=[]}else if("]"==e[i]&&o){t=!0;var a=_(r),c=n[n.length-1][a];n[n.length-1]=p(c)?c+"@string":c,o=!1}else o?r.push(e[i]):n.push(e[i]);e=n}return e},b=function(e){for(var t=[],n=[],r=0;r<e.length;r++)"["==e[r]?n=[]:"]"==e[r]?t.push(_(n)):n.push(e[r]);return t};function m(e,t,n){var r,o=function e(t,n,r){if(n.indexOf("(")>-1){for(var o=[],i=[],s=0,a=0;a<n.length;a++)if("("==n[a])s>0&&i.push("("),s+=1;else if(")"==n[a]){if(s>1&&i.push(")"),0==(s-=1)){var c=_(e(t,i));o.push(p(c)?c+"@string":c),i=[]}}else s>0?i.push(n[a]):o.push(n[a]);n=o}return g(n)}(e,t);if("["!=o[0])r=[_(o)];else if("]"==o[o.length-1])r=b(o);else{var i=o.lastIndexOf("]"),s=b(o.slice(0,i+1)),a=o.slice(i+1);a.unshift(function(e,t,n){for(var r=(t[0]in n?n[t[0]]:e[t[0]]),o=1;o<t.length;o++)try{r=r[t[o]]}catch(r){throw console.error({target:e,scope:n,expressArray:t,index:o}),r}return r}(e,s,n)),r=[_(a)]}return r}
/*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */var x=function(e,t,n){arguments.length<3&&(n={});var r=v(e,t,n),o=m(e,r,n);if(o.length>1)throw new Error("Illegal expression : "+t+"\nstep='evalExpress',path="+o+",expressArray="+r);return o[0]};function O(e,t,n){window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function $(e){if(!(this instanceof $))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var t;this._name=e.name||"noname",this.$$lifecycle(e.beforeCreate),this.$$init(e),this.$$lifecycle("created"),t=this._el,n([1,9,11],t)&&this.$$mount()}!function(e){e.prototype.$$init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this._options=e,this._uid=s++,this._data=o(e.data)?e.data():e.data,this._el=e.el,this.__isMounted=!1,this.__isDestroyed=!1,e.methods)i(t),this[t]=e.methods[t];for(var n in this._data)this[n]=this._data[n];for(var r in this.__componentLib_scope={},e.component)this.__componentLib_scope[r]=e.component[r];for(var a in this.__directiveLib_scope={},e.directive)this.__directiveLib_scope[a]=e.directive[a]}}($),function(e){e.prototype.$$lifecycle=function(e){o(e)?e():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(e)>-1&&o(this._options[e])&&this._options[e].call(this)}}($),function(e){e.prototype.$$mountComponent=function(){this.$$lifecycle("beforeMount"),this._vnode=this.$$render(a),this.__directiveTask=[],this.__componentTask=[],this.__bindTextTask=[],function e(t,n,r,o){var i,s=x(t,n);if(s){if("none"==s.type){var a=c(s.tagName);t.__componentLib[a]||t.__componentLib_scope[a]?(s.options=t.__componentLib[a]||t.__componentLib_scope[a],s.type="component"):s.type="tag"}if("component"==s.type){i=document.createElement("quick-paper-component"),r.appendChild(i),s.options.el=i,"render"in s.options||(s.options.render=function(e){return e("quick-paper-component",{},[])}),s.instance=new o(s.options),s.instance.__parent=t;var l={};for(var p in s.attrs)/^data-quickpaper-/.test(p)||(/^:/.test(p)?l[p.replace("q-bind"+p)]=s.attrs[p]:/^@/.test(p)?l[p.replace(p.replace(/^@/,"q-on:"))]=s.attrs[p]:l[p]=s.attrs[p]);var u={attrs:l,instance:s.instance};if("component"==u.instance._name){var f=u.attrs["q-bind:is"];u.instance.lister(o,t[f])}t.__componentTask.push(u)}else if("tag"==s.type){for(var d in i=document.createElement(s.tagName),"Quick-Paper-COMPONENT"==r.nodeName||"Quick-Paper-COMPONENT"==r._nodeName?(b=i,(g=r).parentNode.replaceChild(b,g),t._el=i):r.appendChild(i),s.attrs){var h=s.attrs[d],v=(d+":").split(":"),y=t.__directiveLib[c(v[0])]||t.__directiveLib_scope[c(v[0])];y?t.__directiveTask.push(_objectSpread(_objectSpread({el:i},y),{},{value:h,type:v[1]})):i.setAttribute(d,h)}for(var _=0;_<s.children.length;_++)e(t,n+".children["+_+"]",i,o)}else"text"==s.type?((i=document.createTextNode("")).textContent=s.content.replace(/↵/g,"\n"),r.appendChild(i)):"bindText"==s.type?((i=document.createTextNode("")).textContent=x(t,s.content).replace(/↵/g,"\n"),r.appendChild(i),t.__bindTextTask.push({el:i,content:s.content})):console.error("Type not expected："+s.type);var g,b}else console.error("vnode is undefined!")}(this,"_vnode",this._el,e);for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.inserted)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.inserted(n.el,{target:this,exp:n.value,value:r,type:n.type})}}!function(e){var t=function(t){i(t),o(e[t])&&console.error('Data property "'+t+'" has already been defined as a Method.');var n=e._data[t];e[t]=n,Object.defineProperty(e,t,{get:function(){return n},set:function(t){n=t,e.$$updateComponent()}})};for(var n in e._data)t(n)}(this),this.__isMounted=!0,this.$$lifecycle("mounted")},e.prototype.$$updateComponent=function(){this.$$lifecycle("beforeUpdate");for(var t=0;t<this.__directiveTask.length;t++){var n=this.__directiveTask[t];if(o(n.update)){var r=void 0;try{r=x(this,n.value)}catch(e){}n.update(n.el,{target:this,exp:n.value,value:r,type:n.type})}}for(var i=0;i<this.__bindTextTask.length;i++){var s=this.__bindTextTask[i],a=x(this,s.content).replace(/↵/g,"\n");s.el.textContent!=a&&(s.el.textContent=a)}for(var c=0;c<this.__componentTask.length;c++){var l=this.__componentTask[c];if("component"==l.instance._name){var p=l.attrs["q-bind:is"];l.instance.lister(e,this[p])}}this.$$lifecycle("updated")},e.prototype.$$destroyComponent=function(){this.$$lifecycle("beforeDestroy");for(var e=0;e<this.__directiveTask.length;e++){var t=this.__directiveTask[e];o(t.delete)&&t.delete(t.el,{target:this,exp:t.value,value:x(this,t.value),type:t.type})}this.$$lifecycle("destroyed")}}($),function(e){e.prototype.__directiveLib={},e.prototype.__componentLib={},function(e){e.directive=function(t,n){e.prototype.__directiveLib[t]=n},e.component=function(t,n){e.prototype.__componentLib[t]=n}}(e),function(e){e.use=function(t){t.install.call(t,e)}}(e)}($),$.prototype.$$mount=function(){if(!o(this._options.render))throw new Error("options.render needs to be a function");this.$$render=this._options.render,this.$$mountComponent()};var w=function(e,t){r(t.type)&&t.type.length>0?e.getAttribute(t.type)!=t.value&&e.setAttribute(t.type,t.value):e.value==t.value&&e.textContent==t.value||(e.value=e.textContent=t.value)},j={inserted:w,update:w},k={inserted:function(e,t){for(var n=t.type.split("."),r={prevent:!1,stop:!1,once:!1},o=1;o<n.length;o++)r[n[o]]=!0;O(e,n[0],(function o(i){r.stop&&function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}(i),r.prevent&&function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1}(i);var s,a,c,l=/^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),p=[],u=[];if(l[2]){var f=l[2].replace(/^\(/,"").replace(/\)$/,"").trim();f.length>0&&(u=f.split(","))}for(var d=0;d<u.length;d++){var h=u[d];h=x(t.target,h),p.push(h)}p.push(i),t.target[l[1]].apply(t.target,p),r.once&&(s=e,a=n[0],c=o,window.detachEvent?s.detachEvent("on"+a,c):s.removeEventListener(a,c,!1))}))}},T={inserted:function(e,t){e.value=t.value,O(e,"input",(function(){!function(e,t,n,r){arguments.length<3&&(r={});for(var o=v(e,t,r),i=m(e,o,r),s=e,a=0;a<i.length-1;a++)i[a]in s||(s[i[a]]=u(s)?[]:{}),s=s[i[a]];s[i[i.length-1]]=n}(t.target,"."+t.exp,e.value)}))},update:function(e,t){e.value=t.value}};$.directive("qBind",j),$.directive("qOn",k),$.directive("qModel",T),$.component("component",{name:"component",data:function(){return{is:null}},methods:{lister:function(e,t){if(t!=this.is&&null!=t){var n=this._oldComponent;n&&n.$$lifecycle("beforeDestroy"),this.is=t;var r=t;r.el=this._el,r.el._nodeName="Quick-Paper-COMPONENT",this._oldComponent=new e(r),this._el=this._oldComponent._el,n&&(n.$$lifecycle("destroyed"),n=null)}}}}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=$:window.QuickPaper=$}();
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/Promise.js
/*****************************************************************/
window.__etcpack__bundleSrc__['3']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /*!
 * ✔️ - Promise
 * https://github.com/hai2007/polyfill.js/blob/master/Promise.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_args__=window.__etcpack__getBundle('4');
var globalNAMESPACE =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;
var isArray=__etcpack__scope_args__.isArray;

__etcpack__scope_args__=window.__etcpack__getBundle('15');
var doResolve=__etcpack__scope_args__.doResolve;
var changeState=__etcpack__scope_args__.changeState;
var triggerEvent=__etcpack__scope_args__.triggerEvent;


function Promise(doback) {

    if (!(this instanceof Promise)) {

        // 所有的报错方式和内容我们都尽力和原生的保持一致，下同
        throw new TypeError('undefined is not a promise');
    }

    if (!(isFunction(doback))) {
        throw new TypeError('Promise resolver ' + doback + ' is not a function');
    }

    /**
     * 参数初始化
     */

    // 当前的值
    this.__value = undefined;

    // 记录着由于then，catch或finally登记的方法
    // Array<onFulfilled|undefined, onRejected|undefined, callback|undefined>
    this.__hocks = [];

    // 状态
    this.__state = 'pending';

    /**
     * 准备完毕以后，开始处理
     */
    doResolve(doback, this);
}

// 添加辅助方法
Promise.prototype.$$changeState = changeState;
Promise.prototype.$$triggerEvent = triggerEvent;

/**
 * 原型上的方法
 */

// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise,
// 返回一个新的 promise,
// 将以回调的返回值来resolve。
Promise.prototype.then = function (onFulfilled, onRejected) {

    this.__hocks.push([onFulfilled, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。
// 当这个回调函数被调用，
// 新 promise 将以它的返回值来resolve，
// 否则如果当前promise 进入fulfilled状态，
// 则以当前promise的完成结果作为新promise的完成结果。
Promise.prototype.catch = function (onRejected) {

    this.__hocks.push([undefined, onRejected, undefined]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;

};

// 添加一个事件处理回调于当前promise对象，
// 并且在原promise对象解析完毕后，
// 返回一个新的promise对象。
// 回调会在当前promise运行完毕后被调用，
// 无论当前promise的状态是完成(fulfilled)还是失败(rejected)。
Promise.prototype.finally = function (callback) {

    this.__hocks.push([undefined, undefined, callback]);

    if (this.__state != 'pending') { this.$$triggerEvent(); }

    return this;


};

/**
 * 静态方法
 */

// 返回一个状态由给定value决定的Promise对象。
// 如果该值是thenable(即，带有then方法的对象)，
// 返回的Promise对象的最终状态由then方法执行决定；
// 否则的话(该value为空，基本类型或者不带then方法的对象),
// 返回的Promise对象状态为fulfilled，
// 并且将该value传递给对应的then方法。
// 通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。
Promise.resolve = function (value) {

    if (isObject(value) && value.constructor === Promise) {
        return value;
    }

    return new Promise(function (resolve) {
        resolve(value);
    });

};

// 返回一个状态为失败的Promise对象，
// 并将给定的失败信息传递给对应的处理方法。
Promise.reject = function (reason) {

    return new Promise(function (resolve, reject) {
        reject(reason);
    });

};

// 这个方法返回一个新的promise对象，
// 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，
// 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。
// 这个新的promise对象在触发成功状态以后，
// 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，
// 顺序跟iterable的顺序保持一致；
// 如果这个新的promise对象触发了失败状态，
// 它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。
// Promise.all方法常被用于处理多个promise对象的状态集合.
Promise.all = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    // 如果遇到第一个失败的，拒绝即可
                    reject(item.__value);
                } else {

                    resultData[index] = item.__value;

                    if (num == resultData.length) {
                        resolve(resultData);
                    }
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};

// 等到所有promises都已敲定（settled）（每个promise都已兑现（fulfilled）或已拒绝（rejected））。
// 返回一个promise，该promise在所有promise完成后完成。并带有一个对象数组，每个对象对应每个promise的结果。
Promise.allSettled = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var resultData = Array.prototype.slice.call(iterable), num = 0;

        if (resultData.length == 0) resolve([]);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                resultData[index] = {
                    status: item.__state
                };

                if (item.__state == 'fulfilled') {
                    resultData[index].value = item.__value;
                } else {
                    resultData[index].reason = item.__value;
                }

                if (num == resultData.length) {
                    resolve(resultData);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < resultData.length; i++) {
            doHelp(i, resultData[i]);
        }

    });

};
// 收一个Promise对象的集合，
// 当其中的一个 promise 成功，
// 就返回那个成功的promise的值。
Promise.any = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        var num = 0;

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                num += 1;

                if (item.__state == 'rejected') {

                    if (num == iterable.length) {

                        // 为了兼容性，我们放弃AggregateError
                        return reject(new Error('All promises were rejected'));
                    }

                } else {

                    // 遇到第一个成功的，标记解决即可
                    resolve(item.__value);

                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 当iterable参数里的任意一个子promise被成功或失败后，
// 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，
// 并返回该promise对象。
Promise.race = function (iterable) {

    return new Promise(function (resolve, reject) {

        if (!isArray(iterable)) {
            return reject(new TypeError('undefined is not iterable (cannot read property Symbol(Symbol.iterator))'));
        }

        if (iterable.length == 0) resolve(undefined);

        var doHelp = function (index, item) {
            if (item.__state !== "pending") {

                if (item.__state == 'rejected') {
                    reject(item.__value);
                } else {
                    resolve(item.__value);
                }

            } else {
                setTimeout(function () { doHelp(index, item); });
            }
        };

        for (var i = 0; i < iterable.length; i++) {
            doHelp(i, iterable[i]);
        }

    });
};

// 如果Promise不存在
if (!('Promise' in globalNAMESPACE)) {
    globalNAMESPACE['Promise'] = Promise;
}

// 由于不同浏览器对一些具体的方法兼容不一样
// （比如一些浏览器支持Promise，可是不支持某个方法，需要对该方法进行兼容）
// 需要进一步嗅探
// 推迟支持

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/globalNAMESPACE.js
/*****************************************************************/
window.__etcpack__bundleSrc__['4']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var globalNAMESPACE = (function () {

    // 浏览器环境
    if (typeof window !== 'undefined') return window;

    // nodejs环境
    if (typeof global !== 'undefined') return global;

    throw new Error('The current environment is not known!');

})();

// 获取当前环境的全局变量
__etcpack__scope_bundle__.default= globalNAMESPACE;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/type.js
/*****************************************************************/
window.__etcpack__bundleSrc__['5']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('6');
var _isObject =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('7');
var _isBoolean =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('9');
var _isNumber =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('10');
var _isString =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('11');
var _isSymbol =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('12');
var _isFunction =__etcpack__scope_args__.default;


__etcpack__scope_args__=window.__etcpack__getBundle('13');
var _isError =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('14');
var _isPlainObject =__etcpack__scope_args__.default;


var domTypeHelp = function (types, value) {
    return value !== null && typeof value === 'object' &&
        types.indexOf(value.nodeType) > -1 &&
        !_isPlainObject(value);
};

/*!
 * 💡 - 值类型判断方法
 * https://github.com/hai2007/tool.js/blob/master/type.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

__etcpack__scope_bundle__.isObject = _isObject;

// 基本类型
__etcpack__scope_bundle__.isUndefined = function (input) { return input === undefined };
__etcpack__scope_bundle__.isNull = function (input) { return input === null };
__etcpack__scope_bundle__.isBoolean = _isBoolean;
__etcpack__scope_bundle__.isNumber = _isNumber;
__etcpack__scope_bundle__.isString = _isString;
__etcpack__scope_bundle__.isSymbol = _isSymbol;

// 引用类型
__etcpack__scope_bundle__.isFunction = _isFunction;
__etcpack__scope_bundle__.isArray = function (input) { return Array.isArray(input) };
__etcpack__scope_bundle__.isError = _isError;
__etcpack__scope_bundle__.isPlainObject = _isPlainObject;

// 结点类型
__etcpack__scope_bundle__.isElement = function (input) { return domTypeHelp([1, 9, 11], input) };
__etcpack__scope_bundle__.isAttribute = function (input) { return domTypeHelp([2], input) };
__etcpack__scope_bundle__.isText = function (input) { return domTypeHelp([3], input) };
__etcpack__scope_bundle__.isComment = function (input) { return domTypeHelp([8], input) };

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['6']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    /**
 * 判断一个值是不是Object。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Object返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isBoolean.js
/*****************************************************************/
window.__etcpack__bundleSrc__['7']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Boolean。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Boolean返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return value === true || value === false ||
        (value !== null && typeof value === 'object' && getType(value) === '[object Boolean]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/getType.js
/*****************************************************************/
window.__etcpack__bundleSrc__['8']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var toString = Object.prototype.toString;

/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isNumber.js
/*****************************************************************/
window.__etcpack__bundleSrc__['9']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是number。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是number返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    return typeof value === 'number' || (
        value !== null && typeof value === 'object' &&
        getType(value) === '[object Number]'
    );
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isString.js
/*****************************************************************/
window.__etcpack__bundleSrc__['10']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isSymbol.js
/*****************************************************************/
window.__etcpack__bundleSrc__['11']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是symbol。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是symbol返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    var type = typeof value;
    return type === 'symbol' || (type === 'object' && value !== null && getType(value) === '[object Symbol]');
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isFunction.js
/*****************************************************************/
window.__etcpack__bundleSrc__['12']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isObject =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是Function。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是Function返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (!isObject(value)) {
        return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' ||
        type === '[object GeneratorFunction]' || type === '[object Proxy]';
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isError.js
/*****************************************************************/
window.__etcpack__bundleSrc__['13']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('14');
var isPlainObject =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是错误对象。
 * `Error`, `EvalError`, `RangeError`, `ReferenceError`,`SyntaxError`, `TypeError`, or `URIError`
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是错误对象返回true，否则返回false
 */
__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object') {
        return false;
    }

    var type = getType(value);
    return type === '[object Error]' || type === '[object DOMException]' ||
        (typeof value.message === 'string' && typeof value.name === 'string' && !isPlainObject(value));
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/.inner/type/isPlainObject.js
/*****************************************************************/
window.__etcpack__bundleSrc__['14']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('8');
var getType =__etcpack__scope_args__.default;


/**
 * 判断一个值是不是一个朴素的'对象'
 * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
 */

__etcpack__scope_bundle__.default= function (value) {
    if (value === null || typeof value !== 'object' || getType(value) != '[object Object]') {
        return false;
    }

    // 如果原型为null
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }

    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/polyfill/.inner/Promise/doResolve.js
/*****************************************************************/
window.__etcpack__bundleSrc__['15']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('5');
var isFunction=__etcpack__scope_args__.isFunction;
var isObject=__etcpack__scope_args__.isObject;


__etcpack__scope_bundle__.changeState = function (data, state) {

    // 更改状态
    this.__state = state;
    this.__value = data;

    // 由于状态改变了，触发对then，finnaly，catch等的执行更新
    this.$$triggerEvent();

};

__etcpack__scope_bundle__.triggerEvent = function () {

    // 这个方法的任务就是把__hocks中记录的方法依次执行了
    // 什么时候会停止？两种情况：
    // 1.队列执行完了
    // 2.遇到其中一个执行方法返回Promise

    var currentHock = null;

    // 同意状态就去寻找下一个onFulfilled
    // 拒绝状态就去寻找下一个onRejected
    // 数组下标0和1分别记录这两个状态，因此先根据状态确定下标即可
    var index = this.__state == 'fulfilled' ? 0 : 1, i;

    // 可能找到，可能到结尾都没有找到
    while (this.__hocks.length > 0) {

        if (isFunction(this.__hocks[0][index])) {
            currentHock = this.__hocks.shift();
            break;
        }

        // 对于路过的finally执行一下
        else if (isFunction(this.__hocks[0][2])) {
            this.__hocks[0][2]();
        }

        this.__hocks.shift();

    }

    // 如果找到了
    if (currentHock !== null) {
        var result = currentHock[index](this.__value);

        // 如果是Promise
        if (isObject(result) && result.constructor === this.constructor) {
            for (var i = 0; i < this.__hocks.length; i++) {
                result.__hocks.push(this.__hocks[i]);
                if (result.__state != 'pending') result.$$triggerEvent();
            }

            this.then = function (onFulfilled, onRejected) {

                result.then(onFulfilled, onRejected);
            };
            this.catch = function (onRejected) {

                result.catch(onRejected);
            };
            this.finally = function (callback) {

                result.finally(callback);
            };

        }

        // 否则
        else {

            this.__value = result;
            this.__state = "fulfilled";
            this.$$triggerEvent();

        }

    }

};

__etcpack__scope_bundle__.doResolve = function (doback, that) {

    // 防止重复修改状态
    var done = false;

    try {
        doback(function (value) {
            if (done) return; done = true;
            that.$$changeState(value, 'fulfilled');

        }, function (reason) {
            if (done) return; done = true;
            that.$$changeState(reason, 'rejected');

        });
    } catch (error) {
        if (done) return; done = true;
        that.$$changeState(error, 'rejected');
    }

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/style/normalize.css
/*****************************************************************/
window.__etcpack__bundleSrc__['16']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "/*!\n * 👁️ - 统一不同浏览器的基础样式\n * https://github.com/hai2007/style.css/blob/master/normalize.css\n *\n * author hai2007 < https://hai2007.gitee.io/sweethome >\n *\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\n * Released under the MIT license\n *//* 防止iPhone在坚屏转向横屏时放大文字 */\n html{\n\n-ms-text-size-adjust: 100%;\n\n-webkit-text-size-adjust: 100%;\n/* 统一行高 */\nline-height: 1.15;\n\n}\n/* 兼容部分手机下border不显示问题 */\n button, input{\n\nborder: 1px solid #b2b2bd;\n\n}\n/* 修正旧浏览器未定义的块级元素 */\n article, footer, header, nav, section{\n\ndisplay: block;\n\n}\n/* 修正旧浏览器未定义的行内块元素 */\n canvas, svg{\n\ndisplay: inline-block;\n\n}\n/* 统一不同浏览器盒子尺寸计算方法 */\n *{\n\nbox-sizing: border-box;\n\n}\n/* 去掉IE浏览器输入框叉叉和眼睛 */\n ::-ms-clear, ::-ms-reveal{\n\ndisplay: none;\n\n}\n/* 针对火狐浏览器在img标签没有src时候的差异修复 */\n img{\n\ndisplay: inline-block;\n\n}\n/* 设置默认字体为统一的安全字体 */\n html{\n\nfont-family: sans-serif;\n\n}\n/* 默认去掉下划线 */\n a{\n\ntext-decoration: none;\n\n}\n/* 去掉前置索引 */\n li{\n\nlist-style-type: none;\n\n}\n/* 去掉不喜欢的间距 */\n ul, ol, li, p, h1, h2, h3, h4, h5, h6{\n\n-webkit-margin-before: 0;\n\n-webkit-margin-after: 0;\n\n-webkit-padding-start: 0;\n/* 去掉不喜欢的间距，针对火狐浏览器等 */\nmargin-block-end: 0;\n\nmargin-block-start: 0;\n\npadding-inline-start: 0;\n/* 修改IE和其它浏览器不一致问题 */\npadding: 0;\n\nmargin: 0;\n\n}\n/* 去掉默认的8px */\n body{\n\nmargin: 0;\n\n}\n/* 设置默认表格边框合并为一个单一的边框 */\n table{\n\nborder-collapse: collapse;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/style.css
/*****************************************************************/
window.__etcpack__bundleSrc__['17']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n html{\n\nfont-size: 100px;\n\n}\n\n body{\n\nfont-size: .16rem;\n\n}\n/* 补充样式 */\n .center-line{\n\ntext-align: center;\n\nmargin: 10px 0;\n\ndisplay: block;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/doc.css
/*****************************************************************/
window.__etcpack__bundleSrc__['18']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .doc-view{\n\nwidth: 7rem;\n\nmargin: auto;\n\npadding-bottom: 20px;\n\n}\n\n .doc-view>header{\n\nfont-size: .3rem;\n\npadding: .3rem 0 .2rem 0;\n\n}\n\n .doc-view>h1{\n\nfont-size: .18rem;\n\nline-height: 2em;\n\nmargin-top: .2rem;\n\n}\n\n .sub-title{\n\ncolor: #555;\n\nfont-size: .8em;\n\nmargin: .1em .3em;\n\n}\n\n .doc-view>h1::before{\n\ncontent: \"#\";\n\ncolor: #2396b9;\n\nmargin-right: .05rem;\n\n}\n\n .doc-view>h2{\n\nfont-size: .16rem;\n\npadding: .1rem 0;\n\nmargin-top: .3rem;\n\nfont-weight: 800;\n\n}\n\n .doc-view>p{\n\nline-height: 1.6em;\n\ntext-indent: 2em;\n\ncolor: rgb(60, 57, 57);\n\nfont-weight: 400;\n\nfont-size: .14rem;\n\nmargin: .1rem 0;\n\n}\n\n .doc-view .important{\n\ncolor: red;\n\nfont-weight: 800;\n\npadding: 0 2px;\n\n}\n\n .doc-view .url{\n\ntext-decoration: underline;\n\ncolor: rgb(2, 141, 2);\n\n}\n\n .doc-view>ul{\n\nmargin-left: .5rem;\n\n}\n\n .doc-view>ul li{\n\nline-height: 2em;\n\nfont-size: .13rem;\n\ncolor: #000000;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/style/menu.css
/*****************************************************************/
window.__etcpack__bundleSrc__['19']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n div.menu-view{\n\nheight: 100vh;\n\nwhite-space: nowrap;\n\n}\n\n div.menu-view>div{\n\nheight: 100vh;\n\noverflow: auto;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\n}\n\n div.menu-view>div:first-child{\n\nwidth: 2.8rem;\n\npadding: .2rem;\n\n}\n\n div.menu-view>div:first-child h3, div.menu-view>div:first-child h4{\n\nfont-weight: 400;\n\nfont-size: .14rem;\n\ncolor: #304455;\n\ncursor: pointer;\n\ndisplay: inline-block;\n\nmargin: .07rem 0;\n\nheight: 1.2em;\n\n}\n\n div.menu-view>div:first-child h3:hover, div.menu-view>div:first-child h4:hover{\n\nborder-bottom: 2px solid #2396b9;\n\n}\n\n div.menu-view>div:first-child h2{\n\npadding: 30px 0;\n\nfont-size: .16rem;\n\n}\n\n div.menu-view>div:first-child li{\n\nmargin-left: 1em;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['20']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('21');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('29');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('div',{"class":"menu-view","data-quickpaper-347ecaca":""},[createElement('div',{"data-quickpaper-347ecaca":""},[createElement('a',{"href":"https://knowpedia.github.io/entry/","target":"_blank","class":"knowpedia","data-quickpaper-347ecaca":""},[]),createElement('h2',{"data-quickpaper-347ecaca":""},["《国富论》"]),createElement('ul',{":active":"pagename==\"labour\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"labour\",\"top\")","data-quickpaper-347ecaca":""},["论劳动生产力增进的原因，并论劳动生产物自然分配给各阶级人民的顺序"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"lddfg\")","data-quickpaper-347ecaca":""},["劳动的分工"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"ldfgdgy\")","data-quickpaper-347ecaca":""},["劳动分工的根源"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"ldfgsscdxdxz\")","data-quickpaper-347ecaca":""},["劳动分工受市场大小的限制"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"hbdqyjqgn\")","data-quickpaper-347ecaca":""},["货币的起源及其功用"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"hpdzsjghmyjg\")","data-quickpaper-347ecaca":""},["商品的真实价格和名义价格或其劳动价格及货币价格"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"spjgdzcbf\")","data-quickpaper-347ecaca":""},["商品价格的组成部分"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"spdzrjghscjg\")","data-quickpaper-347ecaca":""},["商品的自然价格和市场价格"])]),createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"ldgz\")","data-quickpaper-347ecaca":""},["劳动工资"])])])])]),createElement('ul',{":active":"pagename==\"wealth\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"wealth\",\"top\")","data-quickpaper-347ecaca":""},["财富的性质、积累和用途"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"zcdhf\")","data-quickpaper-347ecaca":""},["资财的划分"])])])])]),createElement('ul',{":active":"pagename==\"development\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"development\",\"top\")","data-quickpaper-347ecaca":""},["不同国家中财富的不同发展"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"cfdzrfz\")","data-quickpaper-347ecaca":""},["财富的自然发展"])])])])]),createElement('ul',{":active":"pagename==\"polity\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"polity\",\"top\")","data-quickpaper-347ecaca":""},["政治经济学体系"])])]),createElement('ul',{":active":"pagename==\"earning\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h3',{"@click":"openPage(\"earning\",\"top\")","data-quickpaper-347ecaca":""},["君主或国家队收入"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"jzhgjdfy\")","data-quickpaper-347ecaca":""},["君主或国家的费用"]),createElement('ul',{"data-quickpaper-347ecaca":""},[createElement('li',{"data-quickpaper-347ecaca":""},[createElement('h4',{"@click":"doScroll(\"lgff\")","data-quickpaper-347ecaca":""},["论国防费"])])])])])])]),createElement('a',{"href":"https://github.com/knowpedia/The-Wealth-Of-Nations","target":"_blank","data-quickpaper-347ecaca":""},["Fork Me On Github"])])]),createElement('div',{"class":"content","data-quickpaper-347ecaca":""},[createElement('div',{"id":"root-view","data-quickpaper-347ecaca":""},[createElement('component',{":is":"page","data-quickpaper-347ecaca":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['21']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('22');
var fixedScroll =__etcpack__scope_args__.default;


    let pages = {
        labour: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle1.js','24'),
        wealth: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle2.js','25'),
        development: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle3.js','26'),
        polity: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle4.js','27'),
        earning: () => window.__etcpack__getLazyBundle('./build/main@v0.3.0-bundle5.js','28')
    };

    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        mounted() {
            let routerString = (window.location.href + "").split('#/')[1];
            let pagename = 'labour', fixedName = 'top';
            if (routerString) {
                let temp = routerString.split('/');
                if (temp[0] in pages) pagename = temp[0];
                fixedName = temp[1] || "top";
            }
            this.openPage(pagename, fixedName);
        },
        methods: {
            openPage(pagename, fixedName) {
                pages[pagename]().then(data => {
                    this.page = data.default;
                    this.pagename = pagename;
                    window.location.href = "#/" + pagename + "/" + fixedName;
                    fixedScroll();
                });
            },
            doScroll(fixedName) {
                window.location.href = "#/" + this.pagename + "/" + fixedName;
                fixedScroll();
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('23');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (overValue) {
  overValue = overValue || 0;
  var element = document.documentElement;
  var routerString = (window.location.href + "").split('#/')[1];
  var fixed = routerString ? routerString.split('/')[1] : false;

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }

  document.getElementById('root-view').scrollTop = 0;
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__etcpack__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-347ecaca]{\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>div[data-quickpaper-347ecaca]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\nheight: 100vh;\n\n}\n\n [quickpaper]>div.menu-view[data-quickpaper-347ecaca]{\n\nwidth: 300px;\n\nposition: fixed;\n\nleft: 0;\n\ntop: 0;\n\nbackground-color: white;\n\n}\n\n [quickpaper]>div.menu-view>div [active='no']>li>ul[data-quickpaper-347ecaca]{\n\ndisplay: none;\n\n}\n\n [quickpaper]>div.menu-view>div [active][data-quickpaper-347ecaca]{\n\nposition: relative;\n\n}\n\n [quickpaper]>div.menu-view>div [active][data-quickpaper-347ecaca]::before{\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 0;\n\nheight: 0;\n\nposition: absolute;\n\nleft: 0px;\n\ntop: 10px;\n\n}\n\n [quickpaper]>div.menu-view>div [active='yes'][data-quickpaper-347ecaca]::before{\n\nborder-left: 5px solid transparent;\n\nborder-right: 5px solid transparent;\n\nborder-top: 10px solid #9e9e9e;\n\n}\n\n [quickpaper]>div.menu-view>div [active='no'][data-quickpaper-347ecaca]::before{\n\nborder-top: 5px solid transparent;\n\nborder-bottom: 5px solid transparent;\n\nborder-left: 10px solid #9e9e9e;\n\n}\n\n [quickpaper]>div.menu-view>div [active='yes']>li>h3[data-quickpaper-347ecaca]{\n\nfont-weight: 800;\n\n}\n\n [quickpaper]>div.menu-view>div>a[data-quickpaper-347ecaca]{\n\nbackground-color: #529bcf;\n\ncolor: white;\n\ntext-align: center;\n\nmargin-top: .3rem;\n\ncursor: pointer;\n\nfont-size: .15rem;\n\ndisplay: block;\n\nwidth: 2.6rem;\n\npadding: .1rem 0;\n\n}\n\n [quickpaper]>div.menu-view>div>a.knowpedia[data-quickpaper-347ecaca]{\n\nbackground-image: url('./logo.png');\n\nheight: 150px;\n\nbackground-color: transparent;\n\nbackground-size: auto 100%;\n\nbackground-position: center;\n\nmargin-top: 0;\n\nbackground-repeat: no-repeat;\n\n}\n\n [quickpaper]>div.content[data-quickpaper-347ecaca]{\n\nmargin-left: 300px;\n\nwidth: calc(100vw - 300px);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

window.__etcpack__bundleSrc__['0']();