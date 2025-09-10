function gy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),AS=Symbol.for("react.portal"),PS=Symbol.for("react.fragment"),OS=Symbol.for("react.strict_mode"),bS=Symbol.for("react.profiler"),DS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),MS=Symbol.for("react.suspense"),FS=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),gm=Symbol.iterator;function jS(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Ey={};function ts(t,e,n){this.props=t,this.context=e,this.refs=Ey,this.updater=n||yy}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _y(){}_y.prototype=ts.prototype;function ef(t,e,n){this.props=t,this.context=e,this.refs=Ey,this.updater=n||yy}var tf=ef.prototype=new _y;tf.constructor=ef;wy(tf,ts.prototype);tf.isPureReactComponent=!0;var vm=Array.isArray,Sy=Object.prototype.hasOwnProperty,nf={current:null},Ty={key:!0,ref:!0,__self:!0,__source:!0};function Iy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sy.call(e,r)&&!Ty.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$o,type:t,key:s,ref:o,props:i,_owner:nf.current}}function VS(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function zS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ym=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zS(""+t.key):e.toString(36)}function ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case AS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,vm(i)?(n="",t!=null&&(n=t.replace(ym,"$&/")+"/"),ja(i,e,n,"",function(u){return u})):i!=null&&(rf(i)&&(i=VS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ym,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cc(s,a);o+=ja(s,e,n,l,i)}else if(l=jS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cc(s,a++),o+=ja(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],i=0;return ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Va={transition:null},HS={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Va,ReactCurrentOwner:nf};function ky(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ts;G.Fragment=PS;G.Profiler=bS;G.PureComponent=ef;G.StrictMode=OS;G.Suspense=MS;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;G.act=ky;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sy.call(e,l)&&!Ty.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$o,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:LS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DS,_context:t},t.Consumer=t};G.createElement=Iy;G.createFactory=function(t){var e=Iy.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:$S,render:t}};G.isValidElement=rf;G.lazy=function(t){return{$$typeof:US,_payload:{_status:-1,_result:t},_init:BS}};G.memo=function(t,e){return{$$typeof:FS,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};G.unstable_act=ky;G.useCallback=function(t,e){return ot.current.useCallback(t,e)};G.useContext=function(t){return ot.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};G.useEffect=function(t,e){return ot.current.useEffect(t,e)};G.useId=function(){return ot.current.useId()};G.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ot.current.useMemo(t,e)};G.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};G.useRef=function(t){return ot.current.useRef(t)};G.useState=function(t){return ot.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return ot.current.useTransition()};G.version="18.3.1";(function(t){t.exports=G})(C);const vn=vy(C.exports),Xs=gy({__proto__:null,default:vn},[C.exports]);var ph={},su={exports:{}},It={},Cy={exports:{}},xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var V=D.length;D.push(j);e:for(;0<V;){var re=V-1>>>1,ie=D[re];if(0<i(ie,j))D[re]=j,D[V]=ie,V=re;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],V=D.pop();if(V!==j){D[0]=V;e:for(var re=0,ie=D.length,fn=ie>>>1;re<fn;){var ke=2*(re+1)-1,uc=D[ke],Sr=ke+1,ha=D[Sr];if(0>i(uc,V))Sr<ie&&0>i(ha,uc)?(D[re]=ha,D[Sr]=V,re=Sr):(D[re]=uc,D[ke]=V,re=ke);else if(Sr<ie&&0>i(ha,V))D[re]=ha,D[Sr]=V,re=Sr;else break e}}return j}function i(D,j){var V=D.sortIndex-j.sortIndex;return V!==0?V:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,c=3,f=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=D)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function w(D){if(v=!1,y(D),!m)if(n(l)!==null)m=!0,lt(S);else{var j=n(u);j!==null&&Ct(w,j.startTime-D)}}function S(D,j){m=!1,v&&(v=!1,g(I),I=-1),f=!0;var V=c;try{for(y(j),d=n(l);d!==null&&(!(d.expirationTime>j)||D&&!b());){var re=d.callback;if(typeof re=="function"){d.callback=null,c=d.priorityLevel;var ie=re(d.expirationTime<=j);j=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),y(j)}else r(l);d=n(l)}if(d!==null)var fn=!0;else{var ke=n(u);ke!==null&&Ct(w,ke.startTime-j),fn=!1}return fn}finally{d=null,c=V,f=!1}}var E=!1,T=null,I=-1,x=5,P=-1;function b(){return!(t.unstable_now()-P<x)}function U(){if(T!==null){var D=t.unstable_now();P=D;var j=!0;try{j=T(!0,D)}finally{j?K():(E=!1,T=null)}}else E=!1}var K;if(typeof p=="function")K=function(){p(U)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,oe=ne.port2;ne.port1.onmessage=U,K=function(){oe.postMessage(null)}}else K=function(){_(U,0)};function lt(D){T=D,E||(E=!0,K())}function Ct(D,j){I=_(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,lt(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(c){case 1:case 2:case 3:var j=3;break;default:j=c}var V=c;c=j;try{return D()}finally{c=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=c;c=D;try{return j()}finally{c=V}},t.unstable_scheduleCallback=function(D,j,V){var re=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?re+V:re):V=re,D){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=V+ie,D={id:h++,callback:j,priorityLevel:D,startTime:V,expirationTime:ie,sortIndex:-1},V>re?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(v?(g(I),I=-1):v=!0,Ct(w,V-re))):(D.sortIndex=ie,e(l,D),m||f||(m=!0,lt(S))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var j=c;return function(){var V=c;c=j;try{return D.apply(this,arguments)}finally{c=V}}}})(xy);(function(t){t.exports=xy})(Cy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WS=C.exports,St=Cy.exports;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ry=new Set,Js={};function Xr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(Js[t]=e,t=0;t<e.length;t++)Ry.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,qS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Em={};function KS(t){return mh.call(Em,t)?!0:mh.call(wm,t)?!1:qS.test(t)?Em[t]=!0:(wm[t]=!0,!1)}function GS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QS(t,e,n,r){if(e===null||typeof e>"u"||GS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sf,of);Ve[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sf,of);Ve[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sf,of);Ve[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function af(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QS(e,n,i,r)&&(n=null),r||i===null?KS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=WS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ci=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),cf=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Py=Symbol.for("react.offscreen"),_m=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,hc;function ks(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function YS(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case ci:return"Portal";case gh:return"Profiler";case lf:return"StrictMode";case vh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ay:return(t.displayName||"Context")+".Consumer";case Ny:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cf:return e=t.displayName||null,e!==null?e:wh(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return wh(t(e))}catch{}}return null}function XS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JS(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=JS(t))}function by(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dy(t,e){e=e.checked,e!=null&&af(t,"checked",e,!1)}function _h(t,e){Dy(t,e);var n=cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Cs(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function Ly(t,e){var n=cr(e.value),r=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $y(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$y(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,My=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZS=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){ZS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function Uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eT=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(eT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,ki=null,Ci=null;function Cm(t){if(t=Uo(t)){if(typeof Rh!="function")throw Error(N(280));var e=t.stateNode;e&&(e=cu(e),Rh(t.stateNode,t.type,e))}}function jy(t){ki?Ci?Ci.push(t):Ci=[t]:ki=t}function Vy(){if(ki){var t=ki,e=Ci;if(Ci=ki=null,Cm(t),e)for(t=0;t<e.length;t++)Cm(e[t])}}function zy(t,e){return t(e)}function By(){}var pc=!1;function Hy(t,e,n){if(pc)return t(e,n);pc=!0;try{return zy(t,e,n)}finally{pc=!1,(ki!==null||Ci!==null)&&(By(),Vy())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Nh=!1;if(kn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Nh=!1}function tT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var $s=!1,al=null,ll=!1,Ah=null,nT={onError:function(t){$s=!0,al=t}};function rT(t,e,n,r,i,s,o,a,l){$s=!1,al=null,tT.apply(nT,arguments)}function iT(t,e,n,r,i,s,o,a,l){if(rT.apply(this,arguments),$s){if($s){var u=al;$s=!1,al=null}else throw Error(N(198));ll||(ll=!0,Ah=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xm(t){if(Jr(t)!==t)throw Error(N(188))}function sT(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xm(i),t;if(s===r)return xm(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function qy(t){return t=sT(t),t!==null?Ky(t):null}function Ky(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ky(t);if(e!==null)return e;t=t.sibling}return null}var Gy=St.unstable_scheduleCallback,Rm=St.unstable_cancelCallback,oT=St.unstable_shouldYield,aT=St.unstable_requestPaint,Ee=St.unstable_now,lT=St.unstable_getCurrentPriorityLevel,df=St.unstable_ImmediatePriority,Qy=St.unstable_UserBlockingPriority,ul=St.unstable_NormalPriority,uT=St.unstable_LowPriority,Yy=St.unstable_IdlePriority,ou=null,rn=null;function cT(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:fT,hT=Math.log,dT=Math.LN2;function fT(t){return t>>>=0,t===0?32:31-(hT(t)/dT|0)|0}var ga=64,va=4194304;function xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xs(a):(s&=o,s!==0&&(r=xs(s)))}else o=n&~i,o!==0?r=xs(o):s!==0&&(r=xs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function pT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=pT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xy(){var t=ga;return ga<<=1,(ga&4194240)===0&&(ga=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function gT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function Jy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zy,pf,e0,t0,n0,Oh=!1,ya=[],Xn=null,Jn=null,Zn=null,to=new Map,no=new Map,jn=[],vT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nm(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uo(e),e!==null&&pf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yT(t,e,n,r,i){switch(e){case"focusin":return Xn=vs(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=vs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=vs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,vs(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,vs(no.get(s)||null,t,e,n,r,i)),!0}return!1}function r0(t){var e=Cr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wy(n),e!==null){t.blockedOn=e,n0(t.priority,function(){e0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=Uo(n),e!==null&&pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){za(t)&&n.delete(e)}function wT(){Oh=!1,Xn!==null&&za(Xn)&&(Xn=null),Jn!==null&&za(Jn)&&(Jn=null),Zn!==null&&za(Zn)&&(Zn=null),to.forEach(Am),no.forEach(Am)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,wT)))}function ro(t){function e(i){return ys(i,t)}if(0<ya.length){ys(ya[0],t);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&ys(Xn,t),Jn!==null&&ys(Jn,t),Zn!==null&&ys(Zn,t),to.forEach(e),no.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&jn.shift()}var xi=Dn.ReactCurrentBatchConfig,hl=!0;function ET(t,e,n,r){var i=ee,s=xi.transition;xi.transition=null;try{ee=1,mf(t,e,n,r)}finally{ee=i,xi.transition=s}}function _T(t,e,n,r){var i=ee,s=xi.transition;xi.transition=null;try{ee=4,mf(t,e,n,r)}finally{ee=i,xi.transition=s}}function mf(t,e,n,r){if(hl){var i=bh(t,e,n,r);if(i===null)kc(t,e,r,dl,n),Nm(t,r);else if(yT(i,t,e,n,r))r.stopPropagation();else if(Nm(t,r),e&4&&-1<vT.indexOf(t)){for(;i!==null;){var s=Uo(i);if(s!==null&&Zy(s),s=bh(t,e,n,r),s===null&&kc(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var dl=null;function bh(t,e,n,r){if(dl=null,t=hf(r),t=Cr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function i0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lT()){case df:return 1;case Qy:return 4;case ul:case uT:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var qn=null,gf=null,Ba=null;function s0(){if(Ba)return Ba;var t,e=gf,n=e.length,r,i="value"in qn?qn.value:qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ba=i.slice(t,1<r?1-r:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function Pm(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:Pm,this.isPropagationStopped=Pm,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=kt(ns),Fo=me({},ns,{view:0,detail:0}),ST=kt(Fo),gc,vc,ws,au=me({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(gc=t.screenX-ws.screenX,vc=t.screenY-ws.screenY):vc=gc=0,ws=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Om=kt(au),TT=me({},au,{dataTransfer:0}),IT=kt(TT),kT=me({},Fo,{relatedTarget:0}),yc=kt(kT),CT=me({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),xT=kt(CT),RT=me({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NT=kt(RT),AT=me({},ns,{data:0}),bm=kt(AT),PT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bT[t])?!!e[t]:!1}function yf(){return DT}var LT=me({},Fo,{key:function(t){if(t.key){var e=PT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$T=kt(LT),MT=me({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=kt(MT),FT=me({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),UT=kt(FT),jT=me({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),VT=kt(jT),zT=me({},au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BT=kt(zT),HT=[9,13,27,32],wf=kn&&"CompositionEvent"in window,Ms=null;kn&&"documentMode"in document&&(Ms=document.documentMode);var WT=kn&&"TextEvent"in window&&!Ms,o0=kn&&(!wf||Ms&&8<Ms&&11>=Ms),Lm=String.fromCharCode(32),$m=!1;function a0(t,e){switch(t){case"keyup":return HT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var di=!1;function qT(t,e){switch(t){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:($m=!0,Lm);case"textInput":return t=e.data,t===Lm&&$m?null:t;default:return null}}function KT(t,e){if(di)return t==="compositionend"||!wf&&a0(t,e)?(t=s0(),Ba=gf=qn=null,di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var GT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GT[t.type]:e==="textarea"}function u0(t,e,n,r){jy(r),e=fl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,io=null;function QT(t){E0(t,0)}function lu(t){var e=mi(t);if(by(e))return t}function YT(t,e){if(t==="change")return e}var c0=!1;if(kn){var wc;if(kn){var Ec="oninput"in document;if(!Ec){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Ec=typeof Fm.oninput=="function"}wc=Ec}else wc=!1;c0=wc&&(!document.documentMode||9<document.documentMode)}function Um(){Fs&&(Fs.detachEvent("onpropertychange",h0),io=Fs=null)}function h0(t){if(t.propertyName==="value"&&lu(io)){var e=[];u0(e,io,t,hf(t)),Hy(QT,e)}}function XT(t,e,n){t==="focusin"?(Um(),Fs=e,io=n,Fs.attachEvent("onpropertychange",h0)):t==="focusout"&&Um()}function JT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu(io)}function ZT(t,e){if(t==="click")return lu(e)}function eI(t,e){if(t==="input"||t==="change")return lu(e)}function tI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:tI;function so(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mh.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,e){var n=jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function d0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f0(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nI(t){var e=f0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d0(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vm(n,s);var o=Vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rI=kn&&"documentMode"in document&&11>=document.documentMode,fi=null,Dh=null,Us=null,Lh=!1;function zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lh||fi==null||fi!==ol(r)||(r=fi,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&so(Us,r)||(Us=r,r=fl(Dh,"onSelect"),0<r.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pi={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},_c={},p0={};kn&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function uu(t){if(_c[t])return _c[t];if(!pi[t])return t;var e=pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p0)return _c[t]=e[n];return t}var m0=uu("animationend"),g0=uu("animationiteration"),v0=uu("animationstart"),y0=uu("transitionend"),w0=new Map,Bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){w0.set(t,e),Xr(e,[t])}for(var Sc=0;Sc<Bm.length;Sc++){var Tc=Bm[Sc],iI=Tc.toLowerCase(),sI=Tc[0].toUpperCase()+Tc.slice(1);mr(iI,"on"+sI)}mr(m0,"onAnimationEnd");mr(g0,"onAnimationIteration");mr(v0,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(y0,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iT(r,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Hm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Hm(i,a,u),s=l}}}if(ll)throw t=Ah,ll=!1,Ah=null,t}function ae(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(_0(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),_0(n,t,r,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[_a]){t[_a]=!0,Ry.forEach(function(n){n!=="selectionchange"&&(oI.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Ic("selectionchange",!1,e))}}function _0(t,e,n,r){switch(i0(e)){case 1:var i=ET;break;case 4:i=_T;break;default:i=mf}n=i.bind(null,e,n,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Hy(function(){var u=s,h=hf(n),d=[];e:{var c=w0.get(t);if(c!==void 0){var f=vf,m=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":f=$T;break;case"focusin":m="focus",f=yc;break;case"focusout":m="blur",f=yc;break;case"beforeblur":case"afterblur":f=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=IT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=UT;break;case m0:case g0:case v0:f=xT;break;case y0:f=VT;break;case"scroll":f=ST;break;case"wheel":f=BT;break;case"copy":case"cut":case"paste":f=NT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Dm}var v=(e&4)!==0,_=!v&&t==="scroll",g=v?c!==null?c+"Capture":null:c;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=eo(p,g),w!=null&&v.push(ao(p,w,y)))),_)break;p=p.return}0<v.length&&(c=new f(c,m,null,n,h),d.push({event:c,listeners:v}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",c&&n!==xh&&(m=n.relatedTarget||n.fromElement)&&(Cr(m)||m[Cn]))break e;if((f||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Cr(m):null,m!==null&&(_=Jr(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(v=Om,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Dm,w="onPointerLeave",g="onPointerEnter",p="pointer"),_=f==null?c:mi(f),y=m==null?c:mi(m),c=new v(w,p+"leave",f,n,h),c.target=_,c.relatedTarget=y,w=null,Cr(h)===u&&(v=new v(g,p+"enter",m,n,h),v.target=y,v.relatedTarget=_,w=v),_=w,f&&m)t:{for(v=f,g=m,p=0,y=v;y;y=oi(y))p++;for(y=0,w=g;w;w=oi(w))y++;for(;0<p-y;)v=oi(v),p--;for(;0<y-p;)g=oi(g),y--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=oi(v),g=oi(g)}v=null}else v=null;f!==null&&Wm(d,c,f,v,!1),m!==null&&_!==null&&Wm(d,_,m,v,!0)}}e:{if(c=u?mi(u):window,f=c.nodeName&&c.nodeName.toLowerCase(),f==="select"||f==="input"&&c.type==="file")var S=YT;else if(Mm(c))if(c0)S=eI;else{S=JT;var E=XT}else(f=c.nodeName)&&f.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(S=ZT);if(S&&(S=S(t,u))){u0(d,S,n,h);break e}E&&E(t,c,u),t==="focusout"&&(E=c._wrapperState)&&E.controlled&&c.type==="number"&&Sh(c,"number",c.value)}switch(E=u?mi(u):window,t){case"focusin":(Mm(E)||E.contentEditable==="true")&&(fi=E,Dh=u,Us=null);break;case"focusout":Us=Dh=fi=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,zm(d,n,h);break;case"selectionchange":if(rI)break;case"keydown":case"keyup":zm(d,n,h)}var T;if(wf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else di?a0(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(o0&&n.locale!=="ko"&&(di||I!=="onCompositionStart"?I==="onCompositionEnd"&&di&&(T=s0()):(qn=h,gf="value"in qn?qn.value:qn.textContent,di=!0)),E=fl(u,I),0<E.length&&(I=new bm(I,t,null,n,h),d.push({event:I,listeners:E}),T?I.data=T:(T=l0(n),T!==null&&(I.data=T)))),(T=WT?qT(t,n):KT(t,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(h=new bm("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=T))}E0(d,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):i||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aI=/\r\n?/g,lI=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(aI,`
`).replace(lI,"")}function Sa(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(N(425))}function pl(){}var $h=null,Mh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,uI=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,cI=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(hI)}:Uh;function hI(t){setTimeout(function(){throw t})}function Cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Jt="__reactFiber$"+rs,lo="__reactProps$"+rs,Cn="__reactContainer$"+rs,jh="__reactEvents$"+rs,dI="__reactListeners$"+rs,fI="__reactHandles$"+rs;function Cr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[Jt])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Jt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function cu(t){return t[lo]||null}var Vh=[],gi=-1;function gr(t){return{current:t}}function ce(t){0>gi||(t.current=Vh[gi],Vh[gi]=null,gi--)}function se(t,e){gi++,Vh[gi]=t.current,t.current=e}var hr={},Ze=gr(hr),dt=gr(!1),Mr=hr;function Fi(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function ml(){ce(dt),ce(Ze)}function Qm(t,e,n){if(Ze.current!==hr)throw Error(N(168));se(Ze,e),se(dt,n)}function S0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,XS(t)||"Unknown",i));return me({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Mr=Ze.current,se(Ze,t),se(dt,dt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=S0(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,ce(dt),ce(Ze),se(Ze,t)):ce(dt),se(dt,n)}var mn=null,hu=!1,xc=!1;function T0(t){mn===null?mn=[t]:mn.push(t)}function pI(t){hu=!0,T0(t)}function vr(){if(!xc&&mn!==null){xc=!0;var t=0,e=ee;try{var n=mn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,hu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),Gy(df,vr),i}finally{ee=e,xc=!1}}return null}var vi=[],yi=0,vl=null,yl=0,xt=[],Rt=0,Fr=null,yn=1,wn="";function Tr(t,e){vi[yi++]=yl,vi[yi++]=vl,vl=t,yl=e}function I0(t,e,n){xt[Rt++]=yn,xt[Rt++]=wn,xt[Rt++]=Fr,Fr=t;var r=yn;t=wn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-jt(e)+i|n<<i|r,wn=s+t}else yn=1<<s|n<<i|r,wn=t}function _f(t){t.return!==null&&(Tr(t,1),I0(t,1,0))}function Sf(t){for(;t===vl;)vl=vi[--yi],vi[yi]=null,yl=vi[--yi],vi[yi]=null;for(;t===Fr;)Fr=xt[--Rt],xt[Rt]=null,wn=xt[--Rt],xt[Rt]=null,yn=xt[--Rt],xt[Rt]=null}var wt=null,vt=null,de=!1,Ut=null;function k0(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:yn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(de){var e=vt;if(e){var n=e;if(!Xm(t,e)){if(zh(t))throw Error(N(418));e=er(n.nextSibling);var r=wt;e&&Xm(t,e)?k0(r,n):(t.flags=t.flags&-4097|2,de=!1,wt=t)}}else{if(zh(t))throw Error(N(418));t.flags=t.flags&-4097|2,de=!1,wt=t}}}function Jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Ta(t){if(t!==wt)return!1;if(!de)return Jm(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=vt)){if(zh(t))throw C0(),Error(N(418));for(;e;)k0(t,e),e=er(e.nextSibling)}if(Jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?er(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=vt;t;)t=er(t.nextSibling)}function Ui(){vt=wt=null,de=!1}function Tf(t){Ut===null?Ut=[t]:Ut.push(t)}var mI=Dn.ReactCurrentBatchConfig;function Es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function x0(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=ir(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,w){return p===null||p.tag!==6?(p=Dc(y,g.mode,w),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,w){var S=y.type;return S===hi?h(g,p,y.props.children,w,y.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fn&&Zm(S)===p.type)?(w=i(p,y.props),w.ref=Es(g,p,y),w.return=g,w):(w=Xa(y.type,y.key,y.props,null,g.mode,w),w.ref=Es(g,p,y),w.return=g,w)}function u(g,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Lc(y,g.mode,w),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function h(g,p,y,w,S){return p===null||p.tag!==7?(p=Dr(y,g.mode,w,S),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dc(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fa:return y=Xa(p.type,p.key,p.props,null,g.mode,y),y.ref=Es(g,null,p),y.return=g,y;case ci:return p=Lc(p,g.mode,y),p.return=g,p;case Fn:var w=p._init;return d(g,w(p._payload),y)}if(Cs(p)||ms(p))return p=Dr(p,g.mode,y,null),p.return=g,p;Ia(g,p)}return null}function c(g,p,y,w){var S=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fa:return y.key===S?l(g,p,y,w):null;case ci:return y.key===S?u(g,p,y,w):null;case Fn:return S=y._init,c(g,p,S(y._payload),w)}if(Cs(y)||ms(y))return S!==null?null:h(g,p,y,w,null);Ia(g,y)}return null}function f(g,p,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,a(p,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return g=g.get(w.key===null?y:w.key)||null,l(p,g,w,S);case ci:return g=g.get(w.key===null?y:w.key)||null,u(p,g,w,S);case Fn:var E=w._init;return f(g,p,y,E(w._payload),S)}if(Cs(w)||ms(w))return g=g.get(y)||null,h(p,g,w,S,null);Ia(p,w)}return null}function m(g,p,y,w){for(var S=null,E=null,T=p,I=p=0,x=null;T!==null&&I<y.length;I++){T.index>I?(x=T,T=null):x=T.sibling;var P=c(g,T,y[I],w);if(P===null){T===null&&(T=x);break}t&&T&&P.alternate===null&&e(g,T),p=s(P,p,I),E===null?S=P:E.sibling=P,E=P,T=x}if(I===y.length)return n(g,T),de&&Tr(g,I),S;if(T===null){for(;I<y.length;I++)T=d(g,y[I],w),T!==null&&(p=s(T,p,I),E===null?S=T:E.sibling=T,E=T);return de&&Tr(g,I),S}for(T=r(g,T);I<y.length;I++)x=f(T,g,I,y[I],w),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?I:x.key),p=s(x,p,I),E===null?S=x:E.sibling=x,E=x);return t&&T.forEach(function(b){return e(g,b)}),de&&Tr(g,I),S}function v(g,p,y,w){var S=ms(y);if(typeof S!="function")throw Error(N(150));if(y=S.call(y),y==null)throw Error(N(151));for(var E=S=null,T=p,I=p=0,x=null,P=y.next();T!==null&&!P.done;I++,P=y.next()){T.index>I?(x=T,T=null):x=T.sibling;var b=c(g,T,P.value,w);if(b===null){T===null&&(T=x);break}t&&T&&b.alternate===null&&e(g,T),p=s(b,p,I),E===null?S=b:E.sibling=b,E=b,T=x}if(P.done)return n(g,T),de&&Tr(g,I),S;if(T===null){for(;!P.done;I++,P=y.next())P=d(g,P.value,w),P!==null&&(p=s(P,p,I),E===null?S=P:E.sibling=P,E=P);return de&&Tr(g,I),S}for(T=r(g,T);!P.done;I++,P=y.next())P=f(T,g,I,P.value,w),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?I:P.key),p=s(P,p,I),E===null?S=P:E.sibling=P,E=P);return t&&T.forEach(function(U){return e(g,U)}),de&&Tr(g,I),S}function _(g,p,y,w){if(typeof y=="object"&&y!==null&&y.type===hi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fa:e:{for(var S=y.key,E=p;E!==null;){if(E.key===S){if(S=y.type,S===hi){if(E.tag===7){n(g,E.sibling),p=i(E,y.props.children),p.return=g,g=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fn&&Zm(S)===E.type){n(g,E.sibling),p=i(E,y.props),p.ref=Es(g,E,y),p.return=g,g=p;break e}n(g,E);break}else e(g,E);E=E.sibling}y.type===hi?(p=Dr(y.props.children,g.mode,w,y.key),p.return=g,g=p):(w=Xa(y.type,y.key,y.props,null,g.mode,w),w.ref=Es(g,p,y),w.return=g,g=w)}return o(g);case ci:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Lc(y,g.mode,w),p.return=g,g=p}return o(g);case Fn:return E=y._init,_(g,p,E(y._payload),w)}if(Cs(y))return m(g,p,y,w);if(ms(y))return v(g,p,y,w);Ia(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Dc(y,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return _}var ji=x0(!0),R0=x0(!1),wl=gr(null),El=null,wi=null,If=null;function kf(){If=wi=El=null}function Cf(t){var e=wl.current;ce(wl),t._currentValue=e}function Hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){El=t,If=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ht=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(El===null)throw Error(N(308));wi=t,El.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var xr=null;function xf(t){xr===null?xr=[t]:xr.push(t)}function N0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ff(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var c=a.lane,f=a.eventTime;if((r&c)===c){h!==null&&(h=h.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(c=e,f=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(f,d,c);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,c=typeof m=="function"?m.call(f,d,c):m,c==null)break e;d=me({},d,c);break e;case 2:Un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else f={eventTime:f,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=f,l=d):h=h.next=f,o|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var jo={},sn=gr(jo),uo=gr(jo),co=gr(jo);function Rr(t){if(t===jo)throw Error(N(174));return t}function Nf(t,e){switch(se(co,e),se(uo,t),se(sn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}ce(sn),se(sn,e)}function Vi(){ce(sn),ce(uo),ce(co)}function P0(t){Rr(co.current);var e=Rr(sn.current),n=Ih(e,t.type);e!==n&&(se(uo,t),se(sn,n))}function Af(t){uo.current===t&&(ce(sn),ce(uo))}var fe=gr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Pf(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var qa=Dn.ReactCurrentDispatcher,Nc=Dn.ReactCurrentBatchConfig,Ur=0,pe=null,Ce=null,Oe=null,Tl=!1,js=!1,ho=0,gI=0;function ze(){throw Error(N(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,i,s){if(Ur=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qa.current=t===null||t.memoizedState===null?EI:_I,t=n(r,i),js){s=0;do{if(js=!1,ho=0,25<=s)throw Error(N(301));s+=1,Oe=Ce=null,e.updateQueue=null,qa.current=SI,t=n(r,i)}while(js)}if(qa.current=Il,e=Ce!==null&&Ce.next!==null,Ur=0,Oe=Ce=pe=null,Tl=!1,e)throw Error(N(300));return t}function Df(){var t=ho!==0;return ho=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?pe.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Dt(){if(Ce===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Oe===null?pe.memoizedState:Oe.next;if(e!==null)Oe=e,Ce=t;else{if(t===null)throw Error(N(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?pe.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function fo(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Dt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ur&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,pe.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O0(){}function b0(t,e){var n=pe,r=Dt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Lf($0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,po(9,L0.bind(null,n,r,i,e),void 0,null),be===null)throw Error(N(349));(Ur&30)!==0||D0(n,e,i)}return i}function D0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L0(t,e,n,r){e.value=n,e.getSnapshot=r,M0(e)&&F0(t)}function $0(t,e,n){return n(function(){M0(e)&&F0(t)})}function M0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function F0(t){var e=xn(t,1);e!==null&&Vt(e,t,1,-1)}function ng(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=wI.bind(null,pe,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U0(){return Dt().memoizedState}function Ka(t,e,n,r){var i=Xt();pe.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Of(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}pe.flags|=t,i.memoizedState=po(1|e,n,s,r)}function rg(t,e){return Ka(8390656,8,t,e)}function Lf(t,e){return du(2048,8,t,e)}function j0(t,e){return du(4,2,t,e)}function V0(t,e){return du(4,4,t,e)}function z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,z0.bind(null,e,t),n)}function $f(){}function H0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n):(zt(n,e)||(n=Xy(),pe.lanes|=n,jr|=n,t.baseState=!0),e)}function vI(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Nc.transition;Nc.transition={};try{t(!1),e()}finally{ee=n,Nc.transition=r}}function K0(){return Dt().memoizedState}function yI(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G0(t))Q0(e,n);else if(n=N0(t,e,n,r),n!==null){var i=st();Vt(n,t,r,i),Y0(n,e,r)}}function wI(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G0(t))Q0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=e.interleaved;l===null?(i.next=i,xf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=N0(t,e,i,r),n!==null&&(i=st(),Vt(n,t,r,i),Y0(n,e,r))}}function G0(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function Q0(t,e){js=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ff(t,n)}}var Il={readContext:bt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},EI={readContext:bt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yI.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:$f,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=vI.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Xt();if(de){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),be===null)throw Error(N(349));(Ur&30)!==0||D0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg($0.bind(null,r,s,t),[t]),r.flags|=2048,po(9,L0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=be.identifierPrefix;if(de){var n=wn,r=yn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_I={readContext:bt,useCallback:H0,useContext:bt,useEffect:Lf,useImperativeHandle:B0,useInsertionEffect:j0,useLayoutEffect:V0,useMemo:W0,useReducer:Ac,useRef:U0,useState:function(){return Ac(fo)},useDebugValue:$f,useDeferredValue:function(t){var e=Dt();return q0(e,Ce.memoizedState,t)},useTransition:function(){var t=Ac(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:b0,useId:K0,unstable_isNewReconciler:!1},SI={readContext:bt,useCallback:H0,useContext:bt,useEffect:Lf,useImperativeHandle:B0,useInsertionEffect:j0,useLayoutEffect:V0,useMemo:W0,useReducer:Pc,useRef:U0,useState:function(){return Pc(fo)},useDebugValue:$f,useDeferredValue:function(t){var e=Dt();return Ce===null?e.memoizedState=t:q0(e,Ce.memoizedState,t)},useTransition:function(){var t=Pc(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:b0,useId:K0,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=rr(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Vt(e,t,i,r),Wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=rr(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Vt(e,t,i,r),Wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=rr(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Vt(e,t,r,n),Wa(e,t,r))}};function ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function X0(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=ft(e)?Mr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Fi(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=ft(e)?Mr:Ze.current,i.context=Fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fu.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=YS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TI=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cl||(Cl=!0,rd=r),Kh(t,e)},n}function Z0(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MI.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var II=Dn.ReactCurrentOwner,ht=!1;function rt(t,e,n,r){e.child=t===null?R0(e,null,n,r):ji(e,t.child,n,r)}function ug(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=bf(t,e,n,r,s,i),n=Df(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(de&&n&&_f(e),e.flags|=1,rt(t,e,r,i),e.child)}function cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ew(t,e,s,r,i)):(t=Xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function ew(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ht=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Gh(t,e,n,r,i)}function tw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(_i,gt),gt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(_i,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(_i,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(_i,gt),gt|=r;return rt(t,e,i,n),e.child}function nw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gh(t,e,n,r,i){var s=ft(n)?Mr:Ze.current;return s=Fi(e,s),Ri(e,i),n=bf(t,e,n,r,s,i),r=Df(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(de&&r&&_f(e),e.flags|=1,rt(t,e,n,i),e.child)}function hg(t,e,n,r,i){if(ft(n)){var s=!0;gl(e)}else s=!1;if(Ri(e,i),e.stateNode===null)Ga(t,e),X0(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=bt(u):(u=ft(n)?Mr:Ze.current,u=Fi(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sg(e,o,r,u),Un=!1;var c=e.memoizedState;o.state=c,_l(e,r,o,i),l=e.memoizedState,a!==r||c!==l||dt.current||Un?(typeof h=="function"&&(Wh(e,n,h,r),l=e.memoizedState),(a=Un||ig(e,n,a,r,c,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,d=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bt(l):(l=ft(n)?Mr:Ze.current,l=Fi(e,l));var f=n.getDerivedStateFromProps;(h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||c!==l)&&sg(e,o,r,l),Un=!1,c=e.memoizedState,o.state=c,_l(e,r,o,i);var m=e.memoizedState;a!==d||c!==m||dt.current||Un?(typeof f=="function"&&(Wh(e,n,f,r),m=e.memoizedState),(u=Un||ig(e,n,u,r,c,m,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return Qh(t,e,n,r,s,i)}function Qh(t,e,n,r,i,s){nw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),Rn(t,e,s);r=e.stateNode,II.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ji(e,t.child,null,s),e.child=ji(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function rw(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),Nf(t,e.containerInfo)}function dg(t,e,n,r,i){return Ui(),Tf(i),e.flags|=256,rt(t,e,n,r),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iw(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(fe,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gu(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xh(n),e.memoizedState=Yh,t):Mf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mf(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,r){return r!==null&&Tf(r),ji(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oc(Error(N(422))),ka(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gu({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ji(e,t.child,null,o),e.child.memoizedState=Xh(o),e.memoizedState=Yh,s);if((e.mode&1)===0)return ka(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Oc(s,r,void 0),ka(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Vt(r,t,i,-1))}return Bf(),r=Oc(Error(N(421))),ka(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=er(i.nextSibling),wt=e,de=!0,Ut=null,t!==null&&(xt[Rt++]=yn,xt[Rt++]=wn,xt[Rt++]=Fr,yn=t.id,wn=t.overflow,Fr=e),e=Mf(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hh(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=fe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(fe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CI(t,e,n){switch(e.tag){case 3:rw(e),Ui();break;case 5:P0(e);break;case 1:ft(e.type)&&gl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(fe,fe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?iw(t,e,n):(se(fe,fe.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);se(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return sw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,tw(t,e,n)}return Rn(t,e,n)}var ow,Jh,aw,lw;ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(sn.current);var s=null;switch(n){case"input":i=Eh(t,i),r=Eh(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}kh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function _s(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xI(t,e,n){var r=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return ft(e.type)&&ml(),Be(e),null;case 3:return r=e.stateNode,Vi(),ce(dt),ce(Ze),Pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ut!==null&&(od(Ut),Ut=null))),Jh(t,e),Be(e),null;case 5:Af(e);var i=Rr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Be(e),null}if(t=Rr(sn.current),Ta(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Rs.length;i++)ae(Rs[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Sm(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Im(r,s),ae("invalid",r)}kh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",""+a]):Js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":pa(r),Tm(r,s,!0);break;case"textarea":pa(r),km(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$y(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[lo]=r,ow(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ch(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Rs.length;i++)ae(Rs[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Sm(t,r),i=Eh(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",t);break;case"textarea":Im(t,r),i=Th(t,r),ae("invalid",t);break;default:i=r}kh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Uy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&My(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&af(t,s,l,o))}switch(n){case"input":pa(t),Tm(t,r,!1);break;case"textarea":pa(t),km(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ii(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Rr(co.current),Rr(sn.current),Ta(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Be(e),null;case 13:if(ce(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&vt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)C0(),Ui(),e.flags|=98560,s=!1;else if(s=Ta(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Jt]=e}else Ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else Ut!==null&&(od(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(fe.current&1)!==0?Re===0&&(Re=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return Vi(),Jh(t,e),t===null&&oo(e.stateNode.containerInfo),Be(e),null;case 10:return Cf(e.type._context),Be(e),null;case 17:return ft(e.type)&&ml(),Be(e),null;case 19:if(ce(fe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_s(s,!1);else{if(Re!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,_s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>Bi&&(e.flags|=128,r=!0,_s(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Be(e),null}else 2*Ee()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,_s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=fe.current,se(fe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return zf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(gt&1073741824)!==0&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function RI(t,e){switch(Sf(e),e.tag){case 1:return ft(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),ce(dt),ce(Ze),Pf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Af(e),null;case 13:if(ce(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(fe),null;case 4:return Vi(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var Ca=!1,Ke=!1,NI=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){ve(t,e,r)}}var pg=!1;function AI(t,e){if($h=hl,t=f0(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)c=d,d=f;for(;;){if(d===t)break t;if(c===n&&++u===i&&(a=o),c===s&&++h===r&&(l=o),(f=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},hl=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Mt(e.type,v),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ve(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return m=pg,pg=!1,m}function Vs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zh(e,n,s)}i=i.next}while(i!==r)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uw(t){var e=t.alternate;e!==null&&(t.alternate=null,uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[lo],delete e[jh],delete e[dI],delete e[fI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cw(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var $e=null,Ft=!1;function Ln(t,e,n){for(n=n.child;n!==null;)hw(t,e,n),n=n.sibling}function hw(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:Ke||Ei(n,e);case 6:var r=$e,i=Ft;$e=null,Ln(t,e,n),$e=r,Ft=i,$e!==null&&(Ft?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Ft?(t=$e,n=n.stateNode,t.nodeType===8?Cc(t.parentNode,n):t.nodeType===1&&Cc(t,n),ro(t)):Cc($e,n.stateNode));break;case 4:r=$e,i=Ft,$e=n.stateNode.containerInfo,Ft=!0,Ln(t,e,n),$e=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Zh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ke&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Ln(t,e,n),Ke=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NI),e.forEach(function(r){var i=UI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Ft=!1;break e;case 3:$e=a.stateNode.containerInfo,Ft=!0;break e;case 4:$e=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if($e===null)throw Error(N(160));hw(s,o,i),$e=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dw(e,t),e=e.sibling}function dw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),Yt(t),r&4){try{Vs(3,t,t.return),pu(3,t)}catch(v){ve(t,t.return,v)}try{Vs(5,t,t.return)}catch(v){ve(t,t.return,v)}}break;case 1:$t(e,t),Yt(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if($t(e,t),Yt(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(v){ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dy(i,s),Ch(a,o);var u=Ch(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Uy(i,d):h==="dangerouslySetInnerHTML"?My(i,d):h==="children"?Zs(i,d):af(i,h,d,u)}switch(a){case"input":_h(i,s);break;case"textarea":Ly(i,s);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Ii(i,!!s.multiple,f,!1):c!==!!s.multiple&&(s.defaultValue!=null?Ii(i,!!s.multiple,s.defaultValue,!0):Ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(v){ve(t,t.return,v)}}break;case 6:if($t(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ve(t,t.return,v)}}break;case 3:if($t(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(v){ve(t,t.return,v)}break;case 4:$t(e,t),Yt(t);break;case 13:$t(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jf=Ee())),r&4&&gg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||h,$t(e,t),Ke=u):$t(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&(t.mode&1)!==0)for(L=t,h=t.child;h!==null;){for(d=L=h;L!==null;){switch(c=L,f=c.child,c.tag){case 0:case 11:case 14:case 15:Vs(4,c,c.return);break;case 1:Ei(c,c.return);var m=c.stateNode;if(typeof m.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:Ei(c,c.return);break;case 22:if(c.memoizedState!==null){yg(d);continue}}f!==null?(f.return=c,L=f):yg(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fy("display",o))}catch(v){ve(t,t.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ve(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$t(e,t),Yt(t),r&4&&gg(t);break;case 21:break;default:$t(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cw(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=mg(t);nd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mg(t);td(t,a,o);break;default:throw Error(N(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PI(t,e,n){L=t,fw(t)}function fw(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ca;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=Ca;var u=Ke;if(Ca=o,(Ke=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?wg(i):l!==null?(l.return=o,L=l):wg(i);for(;s!==null;)L=s,fw(s),s=s.sibling;L=i,Ca=a,Ke=u}vg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):vg(t)}}function vg(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ke||pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ke||e.flags&512&&ed(e)}catch(c){ve(e,e.return,c)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function yg(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function wg(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{ed(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{ed(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var OI=Math.ceil,kl=Dn.ReactCurrentDispatcher,Ff=Dn.ReactCurrentOwner,Pt=Dn.ReactCurrentBatchConfig,X=0,be=null,Te=null,Ue=0,gt=0,_i=gr(0),Re=0,mo=null,jr=0,mu=0,Uf=0,zs=null,ut=null,jf=0,Bi=1/0,pn=null,Cl=!1,rd=null,nr=null,xa=!1,Kn=null,xl=0,Bs=0,id=null,Qa=-1,Ya=0;function st(){return(X&6)!==0?Ee():Qa!==-1?Qa:Qa=Ee()}function rr(t){return(t.mode&1)===0?1:(X&2)!==0&&Ue!==0?Ue&-Ue:mI.transition!==null?(Ya===0&&(Ya=Xy()),Ya):(t=ee,t!==0||(t=window.event,t=t===void 0?16:i0(t.type)),t)}function Vt(t,e,n,r){if(50<Bs)throw Bs=0,id=null,Error(N(185));Mo(t,n,r),((X&2)===0||t!==be)&&(t===be&&((X&2)===0&&(mu|=n),Re===4&&Vn(t,Ue)),pt(t,r),n===1&&X===0&&(e.mode&1)===0&&(Bi=Ee()+500,hu&&vr()))}function pt(t,e){var n=t.callbackNode;mT(t,e);var r=cl(t,t===be?Ue:0);if(r===0)n!==null&&Rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rm(n),e===1)t.tag===0?pI(Eg.bind(null,t)):T0(Eg.bind(null,t)),cI(function(){(X&6)===0&&vr()}),n=null;else{switch(Jy(r)){case 1:n=df;break;case 4:n=Qy;break;case 16:n=ul;break;case 536870912:n=Yy;break;default:n=ul}n=_w(n,pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pw(t,e){if(Qa=-1,Ya=0,(X&6)!==0)throw Error(N(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=cl(t,t===be?Ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Rl(t,r);else{e=r;var i=X;X|=2;var s=gw();(be!==t||Ue!==e)&&(pn=null,Bi=Ee()+500,br(t,e));do try{LI();break}catch(a){mw(t,a)}while(1);kf(),kl.current=s,X=i,Te!==null?e=0:(be=null,Ue=0,e=Re)}if(e!==0){if(e===2&&(i=Ph(t),i!==0&&(r=i,e=sd(t,i))),e===1)throw n=mo,br(t,0),Vn(t,r),pt(t,Ee()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!bI(i)&&(e=Rl(t,r),e===2&&(s=Ph(t),s!==0&&(r=s,e=sd(t,s))),e===1))throw n=mo,br(t,0),Vn(t,r),pt(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Ir(t,ut,pn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=jf+500-Ee(),10<e)){if(cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uh(Ir.bind(null,t,ut,pn),e);break}Ir(t,ut,pn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OI(r/1960))-r,10<r){t.timeoutHandle=Uh(Ir.bind(null,t,ut,pn),r);break}Ir(t,ut,pn);break;case 5:Ir(t,ut,pn);break;default:throw Error(N(329))}}}return pt(t,Ee()),t.callbackNode===n?pw.bind(null,t):null}function sd(t,e){var n=zs;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=ut,ut=n,e!==null&&od(e)),t}function od(t){ut===null?ut=t:ut.push.apply(ut,t)}function bI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Uf,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Eg(t){if((X&6)!==0)throw Error(N(327));Ni();var e=cl(t,0);if((e&1)===0)return pt(t,Ee()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=sd(t,r))}if(n===1)throw n=mo,br(t,0),Vn(t,e),pt(t,Ee()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,ut,pn),pt(t,Ee()),null}function Vf(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Bi=Ee()+500,hu&&vr())}}function Vr(t){Kn!==null&&Kn.tag===0&&(X&6)===0&&Ni();var e=X;X|=1;var n=Pt.transition,r=ee;try{if(Pt.transition=null,ee=1,t)return t()}finally{ee=r,Pt.transition=n,X=e,(X&6)===0&&vr()}}function zf(){gt=_i.current,ce(_i)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uI(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Vi(),ce(dt),ce(Ze),Pf();break;case 5:Af(r);break;case 4:Vi();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Cf(r.type._context);break;case 22:case 23:zf()}n=n.return}if(be=t,Te=t=ir(t.current,null),Ue=gt=e,Re=0,mo=null,Uf=mu=jr=0,ut=zs=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xr=null}return t}function mw(t,e){do{var n=Te;try{if(kf(),qa.current=Il,Tl){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tl=!1}if(Ur=0,Oe=Ce=pe=null,js=!1,ho=0,Ff.current=null,n===null||n.return===null){Re=1,mo=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if((h.mode&1)===0&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=ag(o);if(f!==null){f.flags&=-257,lg(f,o,a,s,e),f.mode&1&&og(s,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if((e&1)===0){og(s,u,e),Bf();break e}l=Error(N(426))}}else if(de&&a.mode&1){var _=ag(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),lg(_,o,a,s,e),Tf(zi(l,a));break e}}s=l=zi(l,a),Re!==4&&(Re=2),zs===null?zs=[s]:zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=J0(s,l,e);eg(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nr===null||!nr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Z0(s,a,e);eg(s,w);break e}}s=s.return}while(s!==null)}yw(n)}catch(S){e=S,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function gw(){var t=kl.current;return kl.current=Il,t===null?Il:t}function Bf(){(Re===0||Re===3||Re===2)&&(Re=4),be===null||(jr&268435455)===0&&(mu&268435455)===0||Vn(be,Ue)}function Rl(t,e){var n=X;X|=2;var r=gw();(be!==t||Ue!==e)&&(pn=null,br(t,e));do try{DI();break}catch(i){mw(t,i)}while(1);if(kf(),X=n,kl.current=r,Te!==null)throw Error(N(261));return be=null,Ue=0,Re}function DI(){for(;Te!==null;)vw(Te)}function LI(){for(;Te!==null&&!oT();)vw(Te)}function vw(t){var e=Ew(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?yw(t):Te=e,Ff.current=null}function yw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=xI(n,e,gt),n!==null){Te=n;return}}else{if(n=RI(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Te=null;return}}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Re===0&&(Re=5)}function Ir(t,e,n){var r=ee,i=Pt.transition;try{Pt.transition=null,ee=1,$I(t,e,n,r)}finally{Pt.transition=i,ee=r}return null}function $I(t,e,n,r){do Ni();while(Kn!==null);if((X&6)!==0)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gT(t,s),t===be&&(Te=be=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xa||(xa=!0,_w(ul,function(){return Ni(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Pt.transition,Pt.transition=null;var o=ee;ee=1;var a=X;X|=4,Ff.current=null,AI(t,n),dw(n,t),nI(Mh),hl=!!$h,Mh=$h=null,t.current=n,PI(n),aT(),X=a,ee=o,Pt.transition=s}else t.current=n;if(xa&&(xa=!1,Kn=t,xl=i),s=t.pendingLanes,s===0&&(nr=null),cT(n.stateNode),pt(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,t=rd,rd=null,t;return(xl&1)!==0&&t.tag!==0&&Ni(),s=t.pendingLanes,(s&1)!==0?t===id?Bs++:(Bs=0,id=t):Bs=0,vr(),null}function Ni(){if(Kn!==null){var t=Jy(xl),e=Pt.transition,n=ee;try{if(Pt.transition=null,ee=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,xl=0,(X&6)!==0)throw Error(N(331));var i=X;for(X|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:Vs(8,h,s)}var d=h.child;if(d!==null)d.return=h,L=d;else for(;L!==null;){h=L;var c=h.sibling,f=h.return;if(uw(h),h===u){L=null;break}if(c!==null){c.return=f,L=c;break}L=f}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,L=y;else e:for(o=p;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pu(9,a)}}catch(S){ve(a,a.return,S)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(X=i,vr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ou,t)}catch{}r=!0}return r}finally{ee=n,Pt.transition=e}}return!1}function _g(t,e,n){e=zi(n,e),e=J0(t,e,1),t=tr(t,e,1),e=st(),t!==null&&(Mo(t,1,e),pt(t,e))}function ve(t,e,n){if(t.tag===3)_g(t,t,n);else for(;e!==null;){if(e.tag===3){_g(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=zi(n,t),t=Z0(e,t,1),e=tr(e,t,1),t=st(),e!==null&&(Mo(e,1,t),pt(e,t));break}}e=e.return}}function MI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Ue&n)===n&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>Ee()-jf?br(t,0):Uf|=n),pt(t,e)}function ww(t,e){e===0&&((t.mode&1)===0?e=1:(e=va,va<<=1,(va&130023424)===0&&(va=4194304)));var n=st();t=xn(t,e),t!==null&&(Mo(t,e,n),pt(t,n))}function FI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ww(t,n)}function UI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),ww(t,n)}var Ew;Ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ht=!1,CI(t,e,n);ht=(t.flags&131072)!==0}else ht=!1,de&&(e.flags&1048576)!==0&&I0(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ga(t,e),t=e.pendingProps;var i=Fi(e,Ze.current);Ri(e,n),i=bf(null,e,r,t,i,n);var s=Df();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rf(e),i.updater=fu,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Qh(null,e,r,!0,s,n)):(e.tag=0,de&&s&&_f(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=VI(r),t=Mt(r,t),i){case 0:e=Gh(null,e,r,t,n);break e;case 1:e=hg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,Mt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),hg(t,e,r,i,n);case 3:e:{if(rw(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,A0(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(N(423)),e),e=dg(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(N(424)),e),e=dg(t,e,r,n,i);break e}else for(vt=er(e.stateNode.containerInfo.firstChild),wt=e,de=!0,Ut=null,n=R0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=Rn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return P0(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fh(r,i)?o=null:s!==null&&Fh(r,s)&&(e.flags|=32),nw(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return iw(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ji(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ug(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(wl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!dt.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=In(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=bt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),cg(t,e,r,i,n);case 15:return ew(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Ga(t,e),e.tag=1,ft(r)?(t=!0,gl(e)):t=!1,Ri(e,n),X0(e,r,i),qh(e,r,i,n),Qh(null,e,r,!0,t,n);case 19:return sw(t,e,n);case 22:return tw(t,e,n)}throw Error(N(156,e.tag))};function _w(t,e){return Gy(t,e)}function jI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new jI(t,e,n,r)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VI(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===cf)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Dr(n.children,i,s,e);case lf:o=8,i|=8;break;case gh:return t=At(12,n,e,i|2),t.elementType=gh,t.lanes=s,t;case vh:return t=At(13,n,e,i),t.elementType=vh,t.lanes=s,t;case yh:return t=At(19,n,e,i),t.elementType=yh,t.lanes=s,t;case Py:return gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ny:o=10;break e;case Ay:o=9;break e;case uf:o=11;break e;case cf:o=14;break e;case Fn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function gu(t,e,n,r){return t=At(22,t,r,e),t.elementType=Py,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,r,i,s,o,a,l){return t=new zI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function BI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sw(t){if(!t)return hr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(ft(n))return S0(t,n,e)}return e}function Tw(t,e,n,r,i,s,o,a,l){return t=Wf(n,r,!0,t,i,s,o,a,l),t.context=Sw(null),n=t.current,r=st(),i=rr(n),s=In(r,i),s.callback=e!=null?e:null,tr(n,s,i),t.current.lanes=i,Mo(t,i,r),pt(t,r),t}function vu(t,e,n,r){var i=e.current,s=st(),o=rr(i);return n=Sw(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Vt(t,i,o,s),Wa(t,i,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Sg(t,e),(t=t.alternate)&&Sg(t,e)}function HI(){return null}var Iw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}yu.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));vu(t,e,null,null)};yu.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){vu(null,t,null,null)}),e[Cn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=t0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&r0(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tg(){}function WI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Nl(o);s.call(u)}}var o=Tw(e,r,t,0,null,!1,!1,"",Tg);return t._reactRootContainer=o,t[Cn]=o.current,oo(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Nl(l);a.call(u)}}var l=Wf(t,0,!1,null,null,!1,!1,"",Tg);return t._reactRootContainer=l,t[Cn]=l.current,oo(t.nodeType===8?t.parentNode:t),Vr(function(){vu(e,l,n,r)}),l}function Eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nl(o);a.call(l)}}vu(e,o,t,i)}else o=WI(n,e,t,i,r);return Nl(o)}Zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xs(e.pendingLanes);n!==0&&(ff(e,n|1),pt(e,Ee()),(X&6)===0&&(Bi=Ee()+500,vr()))}break;case 13:Vr(function(){var r=xn(t,1);if(r!==null){var i=st();Vt(r,t,1,i)}}),qf(t,1)}};pf=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=st();Vt(e,t,134217728,n)}qf(t,134217728)}};e0=function(t){if(t.tag===13){var e=rr(t),n=xn(t,e);if(n!==null){var r=st();Vt(n,t,e,r)}qf(t,e)}};t0=function(){return ee};n0=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Rh=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cu(r);if(!i)throw Error(N(90));by(r),_h(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};zy=Vf;By=Vr;var qI={usingClientEntryPoint:!1,Events:[Uo,mi,cu,jy,Vy,Vf]},Ss={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KI={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||HI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{ou=Ra.inject(KI),rn=Ra}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qI;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(N(200));return BI(t,e,null,n)};It.createRoot=function(t,e){if(!Gf(t))throw Error(N(299));var n=!1,r="",i=Iw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,oo(t.nodeType===8?t.parentNode:t),new Kf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Vr(t)};It.hydrate=function(t,e,n){if(!wu(e))throw Error(N(200));return Eu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Iw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Cn]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};It.render=function(t,e,n){if(!wu(e))throw Error(N(200));return Eu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!wu(t))throw Error(N(40));return t._reactRootContainer?(Vr(function(){Eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};It.unstable_batchedUpdates=Vf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wu(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Eu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=It})(su);const GI=vy(su.exports),QI=gy({__proto__:null,default:GI},[su.exports]);var Ig=su.exports;ph.createRoot=Ig.createRoot,ph.hydrateRoot=Ig.hydrateRoot;const YI="modulepreload",XI=function(t,e){return new URL(t,e).href},kg={},Lt=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=XI(s,r),s in kg)return;kg[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":YI,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(this,arguments)}var Gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gn||(Gn={}));const Cg="popstate";function JI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ad("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Al(i)}return ek(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZI(){return Math.random().toString(36).substr(2,8)}function xg(t,e){return{usr:t.state,key:t.key,idx:e}}function ad(t,e,n,r){return n===void 0&&(n=null),go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?is(e):e,{state:n,key:e&&e.key||r||ZI()})}function Al(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ek(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(go({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Gn.Pop;let _=h(),g=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:g})}function c(_,g){a=Gn.Push;let p=ad(v.location,_,g);n&&n(p,_),u=h()+1;let y=xg(p,u),w=v.createHref(p);try{o.pushState(y,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function f(_,g){a=Gn.Replace;let p=ad(v.location,_,g);n&&n(p,_),u=h();let y=xg(p,u),w=v.createHref(p);o.replaceState(y,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function m(_){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Al(_);return p=p.replace(/ $/,"%20"),Ie(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cg,d),l=_,()=>{i.removeEventListener(Cg,d),l=null}},createHref(_){return e(i,_)},createURL:m,encodeLocation(_){let g=m(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:c,replace:f,go(_){return o.go(_)}};return v}var Rg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rg||(Rg={}));function tk(t,e,n){return n===void 0&&(n="/"),nk(t,e,n,!1)}function nk(t,e,n,r){let i=typeof e=="string"?is(e):e,s=Qf(i.pathname||"/",n);if(s==null)return null;let o=Cw(t);rk(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=pk(s);a=dk(o[l],u,r)}return a}function Cw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cw(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ck(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of xw(s.path))i(s,o,l)}),e}function xw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=xw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function rk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ik=/^:[\w-]+$/,sk=3,ok=2,ak=1,lk=10,uk=-2,Ng=t=>t==="*";function ck(t,e){let n=t.split("/"),r=n.length;return n.some(Ng)&&(r+=uk),e&&(r+=ok),n.filter(i=>!Ng(i)).reduce((i,s)=>i+(ik.test(s)?sk:s===""?ak:lk),r)}function hk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dk(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=Ag({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),c=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ag({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:sr([s,d.pathname]),pathnameBase:yk(sr([s,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(s=sr([s,d.pathnameBase]))}return o}function Ag(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:c,isOptional:f}=h;if(c==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const m=a[d];return f&&!m?u[c]=void 0:u[c]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?is(t):t;return{pathname:n?n.startsWith("/")?n:gk(n,e):e,search:wk(r),hash:Ek(i)}}function gk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rw(t,e){let n=vk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=is(t):(i=go({},t),Ie(!i.pathname||!i.pathname.includes("?"),$c("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),$c("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),$c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let c=o.split("/");for(;c[0]==="..";)c.shift(),d-=1;i.pathname=c.join("/")}a=d>=0?e[d]:"/"}let l=mk(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),yk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ek=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _k(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Sk=["post","put","patch","delete"];[...Sk];var _u={exports:{}},Su={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tk=C.exports,Ik=Symbol.for("react.element"),kk=Symbol.for("react.fragment"),Ck=Object.prototype.hasOwnProperty,xk=Tk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rk={key:!0,ref:!0,__self:!0,__source:!0};function Aw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ck.call(e,r)&&!Rk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ik,type:t,key:s,ref:o,props:i,_owner:xk.current}}Su.Fragment=kk;Su.jsx=Aw;Su.jsxs=Aw;(function(t){t.exports=Su})(_u);const Pw=_u.exports.Fragment,k=_u.exports.jsx,le=_u.exports.jsxs;/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(this,arguments)}const Yf=C.exports.createContext(null),Nk=C.exports.createContext(null),Zr=C.exports.createContext(null),Tu=C.exports.createContext(null),yr=C.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Ow=C.exports.createContext(null);function Ak(t,e){let{relative:n}=e===void 0?{}:e;Vo()||Ie(!1);let{basename:r,navigator:i}=C.exports.useContext(Zr),{hash:s,pathname:o,search:a}=Dw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Vo(){return C.exports.useContext(Tu)!=null}function zo(){return Vo()||Ie(!1),C.exports.useContext(Tu).location}function bw(t){C.exports.useContext(Zr).static||C.exports.useLayoutEffect(t)}function Xf(){let{isDataRoute:t}=C.exports.useContext(yr);return t?Bk():Pk()}function Pk(){Vo()||Ie(!1);let t=C.exports.useContext(Yf),{basename:e,future:n,navigator:r}=C.exports.useContext(Zr),{matches:i}=C.exports.useContext(yr),{pathname:s}=zo(),o=JSON.stringify(Rw(i,n.v7_relativeSplatPath)),a=C.exports.useRef(!1);return bw(()=>{a.current=!0}),C.exports.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Nw(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:sr([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function OL(){let{matches:t}=C.exports.useContext(yr),e=t[t.length-1];return e?e.params:{}}function Dw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.exports.useContext(Zr),{matches:i}=C.exports.useContext(yr),{pathname:s}=zo(),o=JSON.stringify(Rw(i,r.v7_relativeSplatPath));return C.exports.useMemo(()=>Nw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Ok(t,e){return bk(t,e)}function bk(t,e,n,r){Vo()||Ie(!1);let{navigator:i}=C.exports.useContext(Zr),{matches:s}=C.exports.useContext(yr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=zo(),h;if(e){var d;let _=typeof e=="string"?is(e):e;l==="/"||((d=_.pathname)==null?void 0:d.startsWith(l))||Ie(!1),h=_}else h=u;let c=h.pathname||"/",f=c;if(l!=="/"){let _=l.replace(/^\//,"").split("/");f="/"+c.replace(/^\//,"").split("/").slice(_.length).join("/")}let m=tk(t,{pathname:f}),v=Fk(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:sr([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:sr([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&v?k(Tu.Provider,{value:{location:vo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Gn.Pop},children:v}):v}function Dk(){let t=zk(),e=_k(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return le(Pw,{children:[k("h2",{children:"Unexpected Application Error!"}),k("h3",{style:{fontStyle:"italic"},children:e}),n?k("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}const Lk=k(Dk,{});class $k extends C.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k(yr.Provider,{value:this.props.routeContext,children:k(Ow.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function Mk(t){let{routeContext:e,match:n,children:r}=t,i=C.exports.useContext(Yf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k(yr.Provider,{value:e,children:r})}function Fk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:c,errors:f}=n,m=d.route.loader&&c[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,c)=>{let f,m=!1,v=null,_=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||Lk,l&&(u<0&&c===0?(Hk("route-fallback",!1),m=!0,_=null):u===c&&(m=!0,_=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,c+1)),p=()=>{let y;return f?y=v:m?y=_:d.route.Component?y=C.exports.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,k(Mk,{match:d,routeContext:{outlet:h,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||c===0)?k($k,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Lw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Lw||{}),Pl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pl||{});function Uk(t){let e=C.exports.useContext(Yf);return e||Ie(!1),e}function jk(t){let e=C.exports.useContext(Nk);return e||Ie(!1),e}function Vk(t){let e=C.exports.useContext(yr);return e||Ie(!1),e}function $w(t){let e=Vk(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function zk(){var t;let e=C.exports.useContext(Ow),n=jk(Pl.UseRouteError),r=$w(Pl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Bk(){let{router:t}=Uk(Lw.UseNavigateStable),e=$w(Pl.UseNavigateStable),n=C.exports.useRef(!1);return bw(()=>{n.current=!0}),C.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vo({fromRouteId:e},s)))},[t,e])}const Pg={};function Hk(t,e,n){!e&&!Pg[t]&&(Pg[t]=!0)}function Wk(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}const qk="startTransition";Xs[qk];function nt(t){Ie(!1)}function Kk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gn.Pop,navigator:s,static:o=!1,future:a}=t;Vo()&&Ie(!1);let l=e.replace(/^\/*/,"/"),u=C.exports.useMemo(()=>({basename:l,navigator:s,static:o,future:vo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=is(r));let{pathname:h="/",search:d="",hash:c="",state:f=null,key:m="default"}=r,v=C.exports.useMemo(()=>{let _=Qf(h,l);return _==null?null:{location:{pathname:_,search:d,hash:c,state:f,key:m},navigationType:i}},[l,h,d,c,f,m,i]);return v==null?null:k(Zr.Provider,{value:u,children:k(Tu.Provider,{children:n,value:v})})}function Gk(t){let{children:e,location:n}=t;return Ok(ld(e),n)}new Promise(()=>{});function ld(t,e){e===void 0&&(e=[]);let n=[];return C.exports.Children.forEach(t,(r,i)=>{if(!C.exports.isValidElement(r))return;let s=[...e,i];if(r.type===C.exports.Fragment){n.push.apply(n,ld(r.props.children,s));return}r.type!==nt&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ld(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Yk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Xk(t,e){return t.button===0&&(!e||e==="_self")&&!Yk(t)}const Jk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zk="6";try{window.__reactRouterVersion=Zk}catch{}const eC="startTransition",Og=Xs[eC],tC="flushSync";QI[tC];const nC="useId";Xs[nC];function rC(t){let{basename:e,children:n,future:r,window:i}=t,s=C.exports.useRef();s.current==null&&(s.current=JI({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.exports.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=C.exports.useCallback(d=>{u&&Og?Og(()=>l(d)):l(d)},[l,u]);return C.exports.useLayoutEffect(()=>o.listen(h),[o,h]),C.exports.useEffect(()=>Wk(r),[r]),k(Kk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const iC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=C.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,c=Qk(e,Jk),{basename:f}=C.exports.useContext(Zr),m,v=!1;if(typeof u=="string"&&sC.test(u)&&(m=u,iC))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=Qf(w.pathname,f);w.origin===y.origin&&S!=null?u=S+w.search+w.hash:v=!0}catch{}let _=Ak(u,{relative:i}),g=oC(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||g(y)}return k("a",{...c,href:m||_,onClick:v||s?r:p,ref:n,target:l})});var bg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bg||(bg={}));var Dg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function oC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Xf(),u=zo(),h=Dw(t,{relative:o});return C.exports.useCallback(d=>{if(Xk(d,n)){d.preventDefault();let c=r!==void 0?r:Al(u)===Al(h);l(t,{replace:c,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,h,r,i,n,t,s,o,a])}const Jf=C.exports.createContext(null);function aC({children:t}){const[e,n]=C.exports.useState(null);return k(Jf.Provider,{value:{User:e,setUser:n},children:t})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let c=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(c=64)),r.push(n[h],n[d],n[c],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new uC;const c=s<<2|a>>4;if(r.push(c),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cC=function(t){const e=Mw(t);return Fw.encodeByteArray(e,!0)},Ol=function(t){return cC(t).replace(/\./g,"")},Uw=function(t){try{return Fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=()=>hC().__FIREBASE_DEFAULTS__,fC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uw(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return dC()||fC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jw=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mC=t=>{const e=jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vw=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},zw=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function bL(){var t;const e=(t=Iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EC(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ww(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function _C(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SC,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,r)}}function TC(t,e){return t.replace(IC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IC=/\{\$([^}]+)}/g;function kC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lg(s)&&Lg(o)){if(!yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function As(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CC(t,e){const n=new xC(t,e);return n.subscribe.bind(n)}class xC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Mc),i.error===void 0&&(i.error=Mc),i.complete===void 0&&(i.complete=Mc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=1e3,AC=2,PC=4*60*60*1e3,OC=.5;function $g(t,e=NC,n=AC){const r=e*Math.pow(n,t),i=Math.round(OC*r*(Math.random()-.5)*2);return Math.min(PC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LC(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DC(t){return t===kr?void 0:t}function LC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const MC={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},FC=J.INFO,UC={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},jC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=FC,this._logHandler=jC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const VC=(t,e)=>e.some(n=>t instanceof n);let Mg,Fg;function zC(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BC(){return Fg||(Fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qw=new WeakMap,ud=new WeakMap,Kw=new WeakMap,Fc=new WeakMap,Zf=new WeakMap;function HC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qw.set(n,t)}).catch(()=>{}),Zf.set(e,t),e}function WC(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qC(t){cd=t(cd)}function KC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return Kw.set(r,e.sort?e.sort():[e]),or(r)}:BC().includes(t)?function(...e){return t.apply(Uc(this),e),or(qw.get(this))}:function(...e){return or(t.apply(Uc(this),e))}}function GC(t){return typeof t=="function"?KC(t):(t instanceof IDBTransaction&&WC(t),VC(t,zC())?new Proxy(t,cd):t)}function or(t){if(t instanceof IDBRequest)return HC(t);if(Fc.has(t))return Fc.get(t);const e=GC(t);return e!==t&&(Fc.set(t,e),Zf.set(e,t)),e}const Uc=t=>Zf.get(t);function QC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const YC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],jc=new Map;function Ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jc.set(e,s),s}qC(t=>({...t,get:(e,n,r)=>Ug(e,n)||t.get(e,n,r),has:(e,n)=>!!Ug(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",jg="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new ku("@firebase/app"),ex="@firebase/app-compat",tx="@firebase/analytics-compat",nx="@firebase/analytics",rx="@firebase/app-check-compat",ix="@firebase/app-check",sx="@firebase/auth",ox="@firebase/auth-compat",ax="@firebase/database",lx="@firebase/database-compat",ux="@firebase/functions",cx="@firebase/functions-compat",hx="@firebase/installations",dx="@firebase/installations-compat",fx="@firebase/messaging",px="@firebase/messaging-compat",mx="@firebase/performance",gx="@firebase/performance-compat",vx="@firebase/remote-config",yx="@firebase/remote-config-compat",wx="@firebase/storage",Ex="@firebase/storage-compat",_x="@firebase/firestore",Sx="@firebase/firestore-compat",Tx="firebase",Ix="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",kx={[hd]:"fire-core",[ex]:"fire-core-compat",[nx]:"fire-analytics",[tx]:"fire-analytics-compat",[ix]:"fire-app-check",[rx]:"fire-app-check-compat",[sx]:"fire-auth",[ox]:"fire-auth-compat",[ax]:"fire-rtdb",[lx]:"fire-rtdb-compat",[ux]:"fire-fn",[cx]:"fire-fn-compat",[hx]:"fire-iid",[dx]:"fire-iid-compat",[fx]:"fire-fcm",[px]:"fire-fcm-compat",[mx]:"fire-perf",[gx]:"fire-perf-compat",[vx]:"fire-rc",[yx]:"fire-rc-compat",[wx]:"fire-gcs",[Ex]:"fire-gcs-compat",[_x]:"fire-fst",[Sx]:"fire-fst-compat","fire-js":"fire-js",[Tx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map,fd=new Map;function Cx(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(fd.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of bl.values())Cx(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new ei("app","Firebase",xx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=Ix;function Gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=Vw()),!n)throw ar.create("no-options");const s=bl.get(i);if(s){if(yo(n,s.options)&&yo(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new $C(i);for(const l of fd.values())o.addComponent(l);const a=new Rx(n,r,o);return bl.set(i,a),a}function ep(t=dd){const e=bl.get(t);if(!e&&t===dd&&Vw())return Gw();if(!e)throw ar.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=kx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(a.join(" "));return}cn(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="firebase-heartbeat-database",Ax=1,wo="firebase-heartbeat-store";let Vc=null;function Qw(){return Vc||(Vc=QC(Nx,Ax,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wo)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function Px(t){try{return await(await Qw()).transaction(wo).objectStore(wo).get(Yw(t))}catch(e){if(e instanceof Kt)zr.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function Vg(t,e){try{const r=(await Qw()).transaction(wo,"readwrite");await r.objectStore(wo).put(e,Yw(t)),await r.done}catch(n){if(n instanceof Kt)zr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function Yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=1024,bx=30*24*60*60*1e3;class Dx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $x(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zg(),{heartbeatsToSend:n,unsentEntries:r}=Lx(this._heartbeatsCache.heartbeats),i=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zg(){return new Date().toISOString().substring(0,10)}function Lx(t,e=Ox){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hw()?Ww().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Px(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bg(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){cn(new Bt("platform-logger",e=>new JC(e),"PRIVATE")),cn(new Bt("heartbeat",e=>new Dx(e),"PRIVATE")),Ot(hd,jg,t),Ot(hd,jg,"esm2017"),Ot("fire-js","")}Mx("");function tp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fx=Xw,Jw=new ei("auth","Firebase",Xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new ku("@firebase/auth");function Ux(t,...e){Dl.logLevel<=J.WARN&&Dl.warn(`Auth (${ss}): ${t}`,...e)}function Ja(t,...e){Dl.logLevel<=J.ERROR&&Dl.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw np(t,...e)}function on(t,...e){return np(t,...e)}function jx(t,e,n){const r=Object.assign(Object.assign({},Fx()),{[e]:n});return new ei("auth","Firebase",r).create(e,{appName:t.name})}function np(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function z(t,e,...n){if(!t)throw np(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ja(e),new Error(e)}function Nn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vx(){return Hg()==="http:"||Hg()==="https:"}function Hg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||Bw()||"connection"in navigator)?navigator.onLine:!0}function Bx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=yC()||wC()}get(){return zx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new Ho(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ni(t,e,n,r,i={}){return e1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zw.fetch()(t1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function e1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hx),e);try{const i=new qx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jx(t,h,u);Ht(t,h)}}catch(i){if(i instanceof Kt)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Wo(t,e,n,r,i={}){const s=await ni(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function t1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rp(t.config,i):`${t.config.apiScheme}://${i}`}class qx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),Wx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function Gx(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qx(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=ip(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(zc(i.auth_time)),issuedAtTime:Hs(zc(i.iat)),expirationTime:Hs(zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function ip(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uw(n);return i?JSON.parse(i):(Ja("Failed to decode base64 JWT payload"),null)}catch(i){return Ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yx(t){const e=ip(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&Xx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hi(t,Gx(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t2(s.providerUserInfo):[],a=e2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new n1(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Zx(t){const e=Ae(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t2(t){return t.map(e=>{var{providerId:n}=e,r=tp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){const n=await e1(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=t1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Eo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new n1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qx(this,e)}reload(){return Zx(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hi(this,Kx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:w,isAnonymous:S,providerData:E,stsTokenManager:T}=n;z(y&&T,e,"internal-error");const I=Eo.fromJSON(this.name,T);z(typeof y=="string",e,"internal-error"),$n(d,e.name),$n(c,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof S=="boolean",e,"internal-error"),$n(f,e.name),$n(m,e.name),$n(v,e.name),$n(_,e.name),$n(g,e.name),$n(p,e.name);const x=new Lr({uid:y,auth:e,email:c,emailVerified:w,displayName:d,isAnonymous:S,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:p});return E&&Array.isArray(E)&&(x.providerData=E.map(P=>Object.assign({},P))),_&&(x._redirectEventId=_),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Eo;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Map;function _n(t){Nn(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}r1.type="NONE";const qg=r1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Za(this.userKey,i.apiKey,s),this.fullPersistenceKey=Za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(_n(qg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(qg);const o=Za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Lr._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ai(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l1(e))return"Blackberry";if(u1(e))return"Webos";if(sp(e))return"Safari";if((e.includes("chrome/")||s1(e))&&!e.includes("edge/"))return"Chrome";if(a1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function i1(t=et()){return/firefox\//i.test(t)}function sp(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s1(t=et()){return/crios\//i.test(t)}function o1(t=et()){return/iemobile/i.test(t)}function a1(t=et()){return/android/i.test(t)}function l1(t=et()){return/blackberry/i.test(t)}function u1(t=et()){return/webos/i.test(t)}function Cu(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r2(t=et()){var e;return Cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function i2(){return EC()&&document.documentMode===10}function c1(t=et()){return Cu(t)||a1(t)||u1(t)||l1(t)||/windows phone/i.test(t)||o1(t)}function s2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e=[]){let n;switch(t){case"Browser":n=Kg(et());break;case"Worker":n=`${Kg(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}async function d1(t,e){return ni(t,"GET","/v2/recaptchaConfig",os(t,e))}function Gg(t){return t!==void 0&&t.enterprise!==void 0}class f1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function p1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})}function a2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l2="https://www.google.com/recaptcha/enterprise.js?render=",u2="recaptcha-enterprise",c2="NO_RECAPTCHA";class m1{constructor(e){this.type=u2,this.auth=as(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{d1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new f1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Gg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(c2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Gg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}p1(l2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $l(t,e,n,r=!1){const i=new m1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new h2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}async initializeRecaptchaConfig(){const e=await d1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new f1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new m1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ux(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function as(t){return Ae(t)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=CC(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t,e){const n=ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yo(s,e!=null?e:{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function p2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m2(t,e,n){const r=as(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=g1(e),{host:o,port:a}=g2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v2()}function g1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g2(t){const e=g1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yg(o)}}}function Yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function y2(t,e){return ni(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function E2(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends op{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await $l(e,r,"signInWithPassword");return Bc(e,i)}else return Bc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $l(e,r,"signInWithPassword");return Bc(e,s)}else return Promise.reject(i)});case"emailLink":return w2(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return y2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E2(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="http://localhost";class Br extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:_2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T2(t){const e=Ns(As(t)).link,n=e?Ns(As(e)).deep_link_id:null,r=Ns(As(t)).deep_link_id;return(r?Ns(As(r)).link:null)||r||n||e||t}class ap{constructor(e){var n,r,i,s,o,a;const l=Ns(As(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=S2((i=l.mode)!==null&&i!==void 0?i:null);z(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=T2(e);try{return new ap(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ap.parseLink(n);return z(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends v1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends qo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends qo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends qo{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e){return Wo(t,"POST","/v1/accounts:signUp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=Xg(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xg(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ml(e,n,r,i)}}function y1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,s,e,r):s})}async function I2(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hi(t,y1(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ip(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e,n=!1){const r="signIn",i=await y1(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function C2(t,e){return w1(as(t),e)}async function DL(t,e,n){var r;const i=as(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $l(i,s,"signUpPassword");o=Hc(i,u)}else o=Hc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await $l(i,s,"signUpPassword");return Hc(i,h)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Hr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function LL(t,e,n){return C2(Ae(t),ls.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(t,e){return ni(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $L(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hi(r,x2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function R2(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function N2(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function A2(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function P2(t){return Ae(t).signOut()}const Fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(){const t=et();return sp(t)||Cu(t)}const b2=1e3,D2=10;class _1 extends E1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O2()&&s2(),this.fallbackToPolling=c1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);i2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_1.type="LOCAL";const L2=_1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1 extends E1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S1.type="SESSION";const T1=S1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lp("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const c=d;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(c.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function F2(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function U2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function V2(){return I1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="firebaseLocalStorageDb",z2=1,Ul="firebaseLocalStorage",C1="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ru(t,e){return t.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function B2(){const t=indexedDB.deleteDatabase(k1);return new Ko(t).toPromise()}function md(){const t=indexedDB.open(k1,z2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ul,{keyPath:C1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ul)?e(r):(r.close(),await B2(),e(await md()))})})}async function Jg(t,e,n){const r=Ru(t,!0).put({[C1]:e,value:n});return new Ko(r).toPromise()}async function H2(t,e){const n=Ru(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=Ru(t,!0).delete(e);return new Ko(n).toPromise()}const W2=800,q2=3;class x1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>q2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(V2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U2(),!this.activeServiceWorker)return;this.sender=new M2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Jg(e,Fl,"1"),await Zg(e,Fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>H2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ru(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x1.type="LOCAL";const K2=x1;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t,e){return e?_n(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q2(t){return w1(t.auth,new up(t),t.bypassAuthState)}function Y2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),k2(n,new up(t),t.bypassAuthState)}async function X2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),I2(n,new up(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q2;case"linkViaPopup":case"linkViaRedirect":return X2;case"reauthViaPopup":case"reauthViaRedirect":return Y2;default:Ht(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Ho(2e3,1e4);class Si extends R1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J2.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="pendingRedirect",el=new Map;class eR extends R1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await tR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tR(t,e){const n=iR(e),r=rR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nR(t,e){el.set(t._key(),e)}function rR(t){return _n(t._redirectPersistence)}function iR(t){return Za(Z2,t.config.apiKey,t.name)}async function sR(t,e,n=!1){const r=as(t),i=G2(r,e),o=await new eR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=10*60*1e3;class aR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!N1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(e))}saveEventToCache(e){this.cachedEventUids.add(ev(e)),this.lastProcessedEventTime=Date.now()}}function ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hR=/^https?/;async function dR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uR(t);for(const n of e)try{if(fR(n))return}catch{}Ht(t,"unauthorized-domain")}function fR(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hR.test(n))return!1;if(cR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new Ho(3e4,6e4);function tv(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mR(t){return new Promise((e,n)=>{var r,i,s;function o(){tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tv(),n(on(t,"network-request-failed"))},timeout:pR.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const a=a2("iframefcb");return an()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},p1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tl=null,e})}let tl=null;function gR(t){return tl=tl||mR(t),tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new Ho(5e3,15e3),yR="__/auth/iframe",wR="emulator/auth/iframe",ER={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SR(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rp(e,wR):`https://${t.config.authDomain}/${yR}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=_R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function TR(t){const e=await gR(t),n=an().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:SR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ER,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=an().setTimeout(()=>{s(o)},vR.get());function l(){an().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kR=500,CR=600,xR="_blank",RR="http://localhost";class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NR(t,e,n,r=kR,i=CR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=et().toLowerCase();n&&(a=s1(u)?xR:n),i1(u)&&(e=e||RR,l.scrollbars="yes");const h=Object.entries(l).reduce((c,[f,m])=>`${c}${f}=${m},`,"");if(r2(u)&&a!=="_self")return AR(e||"",a),new nv(null);const d=window.open(e||"",a,h);z(d,t,"popup-blocked");try{d.focus()}catch{}return new nv(d)}function AR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="__/auth/handler",OR="emulator/auth/handler",bR=encodeURIComponent("fac");async function rv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof v1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof qo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${bR}=${encodeURIComponent(l)}`:"";return`${DR(t)}?${Bo(a).slice(1)}${u}`}function DR({config:t}){return t.emulator?rp(t,OR):`https://${t.authDomain}/${PR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T1,this._completeRedirectFn=sR,this._overrideRedirectResult=nR}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rv(e,n,r,pd(),i);return NR(e,o,lp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rv(e,n,r,pd(),i);return F2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TR(e),r=new aR(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c1()||sp()||Cu()}}const $R=LR;var iv="@firebase/auth",sv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UR(t){cn(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h1(t)},u=new d2(r,i,s,l);return p2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Bt("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new MR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(iv,sv,FR(t)),Ot(iv,sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=5*60,VR=zw("authIdTokenMaxAge")||jR;let ov=null;const zR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VR)return;const i=n==null?void 0:n.token;ov!==i&&(ov=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function A1(t=ep()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=f2(t,{popupRedirectResolver:$R,persistence:[K2,L2,T1]}),r=zw("authTokenSyncURL");if(r){const s=zR(r);N2(n,s,()=>s(n.currentUser)),R2(n,o=>s(o))}const i=jw("auth");return i&&m2(n,`http://${i}`),n}UR("Browser");var BR={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function HR(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return BR[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function av(t){var e=HR(t);return"".concat(e.value).concat(e.unit)}var WR=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},jl=globalThis&&globalThis.__assign||function(){return jl=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},jl.apply(this,arguments)},qR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},KR=WR("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function P1(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,h=u===void 0?35:u,d=qR(t,["loading","color","speedMultiplier","cssOverride","size"]),c=jl({background:"transparent !important",width:av(h),height:av(h),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(KR," ").concat(.75/o,"s 0s infinite linear"),animationFillMode:"both"},l);return n?k("span",{...jl({style:c},d)}):null}function GR(){return k("div",{children:k("div",{className:"w-full h-screen flex justify-center items-center",children:k(P1,{color:"#ff0000",size:160})})})}var QR=Object.defineProperty,YR=(t,e,n)=>e in t?QR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qc=(t,e,n)=>(YR(t,typeof e!="symbol"?e+"":e,n),n);class XR{constructor(){qc(this,"current",this.detect()),qc(this,"handoffState","pending"),qc(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let nl=new XR,So=(t,e)=>{nl.isServer?C.exports.useEffect(t,e):C.exports.useLayoutEffect(t,e)};function Oi(t){let e=C.exports.useRef(t);return So(()=>{e.current=t},[t]),e}let Sn=function(t){let e=Oi(t);return vn.useCallback((...n)=>e.current(...n),[e])};function JR(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Go(){let t=[],e={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),e.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return JR(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=Go();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let n of t.splice(0))n()}};return e}function O1(){let[t]=C.exports.useState(Go);return C.exports.useEffect(()=>()=>t.dispose(),[t]),t}function ZR(){let t=typeof document>"u";return"useSyncExternalStore"in Xs?(e=>e.useSyncExternalStore)(Xs)(()=>()=>{},()=>!1,()=>!t):!1}function b1(){let t=ZR(),[e,n]=C.exports.useState(nl.isHandoffComplete);return e&&nl.isHandoffComplete===!1&&n(!1),C.exports.useEffect(()=>{e!==!0&&n(!0)},[e]),C.exports.useEffect(()=>nl.handoff(),[]),t?!1:e}function en(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,en),r}let eN=Symbol();function D1(...t){let e=C.exports.useRef(t);C.exports.useEffect(()=>{e.current=t},[t]);let n=Sn(r=>{for(let i of e.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return t.every(r=>r==null||(r==null?void 0:r[eN]))?void 0:n}function Vl(...t){return Array.from(new Set(t.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}var L1=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(L1||{}),Qn=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(Qn||{});function $1({ourProps:t,theirProps:e,slot:n,defaultTag:r,features:i,visible:s=!0,name:o,mergeRefs:a}){a=a!=null?a:tN;let l=M1(e,t);if(s)return Aa(l,n,r,o,a);let u=i!=null?i:0;if(u&2){let{static:h=!1,...d}=l;if(h)return Aa(d,n,r,o,a)}if(u&1){let{unmount:h=!0,...d}=l;return en(h?0:1,{[0](){return null},[1](){return Aa({...d,hidden:!0,style:{display:"none"}},n,r,o,a)}})}return Aa(l,n,r,o,a)}function Aa(t,e={},n,r,i){let{as:s=n,children:o,refName:a="ref",...l}=Kc(t,["unmount","static"]),u=t.ref!==void 0?{[a]:t.ref}:{},h=typeof o=="function"?o(e):o;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(e));let d={};if(e){let c=!1,f=[];for(let[m,v]of Object.entries(e))typeof v=="boolean"&&(c=!0),v===!0&&f.push(m);c&&(d["data-headlessui-state"]=f.join(" "))}if(s===C.exports.Fragment&&Object.keys(lv(l)).length>0){if(!C.exports.isValidElement(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let c=h.props,f=typeof(c==null?void 0:c.className)=="function"?(...v)=>Vl(c==null?void 0:c.className(...v),l.className):Vl(c==null?void 0:c.className,l.className),m=f?{className:f}:{};return C.exports.cloneElement(h,Object.assign({},M1(h.props,lv(Kc(l,["ref"]))),d,u,{ref:i(h.ref,u.ref)},m))}return C.exports.createElement(s,Object.assign({},Kc(l,["ref"]),s!==C.exports.Fragment&&u,s!==C.exports.Fragment&&d),h)}function tN(...t){return t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}function M1(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):e[i]=r[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](i,...s){let o=n[r];for(let a of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;a(i,...s)}}});return e}function cp(t){var e;return Object.assign(C.exports.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function lv(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Kc(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}let hp=C.exports.createContext(null);hp.displayName="OpenClosedContext";var gn=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(gn||{});function F1(){return C.exports.useContext(hp)}function nN({value:t,children:e}){return vn.createElement(hp.Provider,{value:t},e)}function dp(){let t=C.exports.useRef(!1);return So(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function rN(t=0){let[e,n]=C.exports.useState(t),r=dp(),i=C.exports.useCallback(l=>{r.current&&n(u=>u|l)},[e,r]),s=C.exports.useCallback(l=>Boolean(e&l),[e]),o=C.exports.useCallback(l=>{r.current&&n(u=>u&~l)},[n,r]),a=C.exports.useCallback(l=>{r.current&&n(u=>u^l)},[n]);return{flags:e,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:a}}function iN(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Gc(t,...e){t&&e.length>0&&t.classList.add(...e)}function Qc(t,...e){t&&e.length>0&&t.classList.remove(...e)}function sN(t,e){let n=Go();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[s,o]=[r,i].map(l=>{let[u=0]=l.split(",").filter(Boolean).map(h=>h.includes("ms")?parseFloat(h):parseFloat(h)*1e3).sort((h,d)=>d-h);return u}),a=s+o;if(a!==0){n.group(u=>{u.setTimeout(()=>{e(),u.dispose()},a),u.addEventListener(t,"transitionrun",h=>{h.target===h.currentTarget&&u.dispose()})});let l=n.addEventListener(t,"transitionend",u=>{u.target===u.currentTarget&&(e(),l())})}else e();return n.add(()=>e()),n.dispose}function oN(t,e,n,r){let i=n?"enter":"leave",s=Go(),o=r!==void 0?iN(r):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let a=en(i,{enter:()=>e.enter,leave:()=>e.leave}),l=en(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),u=en(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return Qc(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),Gc(t,...e.base,...a,...u),s.nextFrame(()=>{Qc(t,...e.base,...a,...u),Gc(t,...e.base,...a,...l),sN(t,()=>(Qc(t,...e.base,...a),Gc(t,...e.base,...e.entered),o()))}),s.dispose}function aN({immediate:t,container:e,direction:n,classes:r,onStart:i,onStop:s}){let o=dp(),a=O1(),l=Oi(n);So(()=>{t&&(l.current="enter")},[t]),So(()=>{let u=Go();a.add(u.dispose);let h=e.current;if(h&&l.current!=="idle"&&o.current)return u.dispose(),i.current(l.current),u.add(oN(h,r.current,l.current==="enter",()=>{u.dispose(),s.current(l.current)})),u.dispose},[n])}function Mn(t=""){return t.split(/\s+/).filter(e=>e.length>1)}let Nu=C.exports.createContext(null);Nu.displayName="TransitionContext";var lN=(t=>(t.Visible="visible",t.Hidden="hidden",t))(lN||{});function uN(){let t=C.exports.useContext(Nu);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function cN(){let t=C.exports.useContext(Au);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let Au=C.exports.createContext(null);Au.displayName="NestingContext";function Pu(t){return"children"in t?Pu(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function U1(t,e){let n=Oi(t),r=C.exports.useRef([]),i=dp(),s=O1(),o=Sn((f,m=Qn.Hidden)=>{let v=r.current.findIndex(({el:_})=>_===f);v!==-1&&(en(m,{[Qn.Unmount](){r.current.splice(v,1)},[Qn.Hidden](){r.current[v].state="hidden"}}),s.microTask(()=>{var _;!Pu(r)&&i.current&&((_=n.current)==null||_.call(n))}))}),a=Sn(f=>{let m=r.current.find(({el:v})=>v===f);return m?m.state!=="visible"&&(m.state="visible"):r.current.push({el:f,state:"visible"}),()=>o(f,Qn.Unmount)}),l=C.exports.useRef([]),u=C.exports.useRef(Promise.resolve()),h=C.exports.useRef({enter:[],leave:[],idle:[]}),d=Sn((f,m,v)=>{l.current.splice(0),e&&(e.chains.current[m]=e.chains.current[m].filter(([_])=>_!==f)),e==null||e.chains.current[m].push([f,new Promise(_=>{l.current.push(_)})]),e==null||e.chains.current[m].push([f,new Promise(_=>{Promise.all(h.current[m].map(([g,p])=>p)).then(()=>_())})]),m==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>v(m)):v(m)}),c=Sn((f,m,v)=>{Promise.all(h.current[m].splice(0).map(([_,g])=>g)).then(()=>{var _;(_=l.current.shift())==null||_()}).then(()=>v(m))});return C.exports.useMemo(()=>({children:r,register:a,unregister:o,onStart:d,onStop:c,wait:u,chains:h}),[a,o,r,d,c,h,u])}function hN(){}let dN=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function uv(t){var e;let n={};for(let r of dN)n[r]=(e=t[r])!=null?e:hN;return n}function fN(t){let e=C.exports.useRef(uv(t));return C.exports.useEffect(()=>{e.current=uv(t)},[t]),e}let pN="div",j1=L1.RenderStrategy;function mN(t,e){var n,r;let{beforeEnter:i,afterEnter:s,beforeLeave:o,afterLeave:a,enter:l,enterFrom:u,enterTo:h,entered:d,leave:c,leaveFrom:f,leaveTo:m,...v}=t,_=C.exports.useRef(null),g=D1(_,e),p=(n=v.unmount)==null||n?Qn.Unmount:Qn.Hidden,{show:y,appear:w,initial:S}=uN(),[E,T]=C.exports.useState(y?"visible":"hidden"),I=cN(),{register:x,unregister:P}=I;C.exports.useEffect(()=>x(_),[x,_]),C.exports.useEffect(()=>{if(p===Qn.Hidden&&_.current){if(y&&E!=="visible"){T("visible");return}return en(E,{hidden:()=>P(_),visible:()=>x(_)})}},[E,_,x,P,y,p]);let b=Oi({base:Mn(v.className),enter:Mn(l),enterFrom:Mn(u),enterTo:Mn(h),entered:Mn(d),leave:Mn(c),leaveFrom:Mn(f),leaveTo:Mn(m)}),U=fN({beforeEnter:i,afterEnter:s,beforeLeave:o,afterLeave:a}),K=b1();C.exports.useEffect(()=>{if(K&&E==="visible"&&_.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[_,E,K]);let ne=S&&!w,oe=w&&y&&S,lt=(()=>!K||ne?"idle":y?"enter":"leave")(),Ct=rN(0),D=Sn(ke=>en(ke,{enter:()=>{Ct.addFlag(gn.Opening),U.current.beforeEnter()},leave:()=>{Ct.addFlag(gn.Closing),U.current.beforeLeave()},idle:()=>{}})),j=Sn(ke=>en(ke,{enter:()=>{Ct.removeFlag(gn.Opening),U.current.afterEnter()},leave:()=>{Ct.removeFlag(gn.Closing),U.current.afterLeave()},idle:()=>{}})),V=U1(()=>{T("hidden"),P(_)},I),re=C.exports.useRef(!1);aN({immediate:oe,container:_,classes:b,direction:lt,onStart:Oi(ke=>{re.current=!0,V.onStart(_,ke,D)}),onStop:Oi(ke=>{re.current=!1,V.onStop(_,ke,j),ke==="leave"&&!Pu(V)&&(T("hidden"),P(_))})});let ie=v,fn={ref:g};return oe?ie={...ie,className:Vl(v.className,...b.current.enter,...b.current.enterFrom)}:re.current&&(ie.className=Vl(v.className,(r=_.current)==null?void 0:r.className),ie.className===""&&delete ie.className),k(Au.Provider,{value:V,children:k(nN,{value:en(E,{visible:gn.Open,hidden:gn.Closed})|Ct.flags,children:$1({ourProps:fn,theirProps:ie,defaultTag:pN,features:j1,visible:E==="visible",name:"Transition.Child"})})})}function gN(t,e){let{show:n,appear:r=!1,unmount:i=!0,...s}=t,o=C.exports.useRef(null),a=D1(o,e);b1();let l=F1();if(n===void 0&&l!==null&&(n=(l&gn.Open)===gn.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,h]=C.exports.useState(n?"visible":"hidden"),d=U1(()=>{h("hidden")}),[c,f]=C.exports.useState(!0),m=C.exports.useRef([n]);So(()=>{c!==!1&&m.current[m.current.length-1]!==n&&(m.current.push(n),f(!1))},[m,n]);let v=C.exports.useMemo(()=>({show:n,appear:r,initial:c}),[n,r,c]);C.exports.useEffect(()=>{if(n)h("visible");else if(!Pu(d))h("hidden");else{let y=o.current;if(!y)return;let w=y.getBoundingClientRect();w.x===0&&w.y===0&&w.width===0&&w.height===0&&h("hidden")}},[n,d]);let _={unmount:i},g=Sn(()=>{var y;c&&f(!1),(y=t.beforeEnter)==null||y.call(t)}),p=Sn(()=>{var y;c&&f(!1),(y=t.beforeLeave)==null||y.call(t)});return k(Au.Provider,{value:d,children:k(Nu.Provider,{value:v,children:$1({ourProps:{..._,as:C.exports.Fragment,children:vn.createElement(V1,{ref:a,..._,...s,beforeEnter:g,beforeLeave:p})},theirProps:{},defaultTag:C.exports.Fragment,features:j1,visible:u==="visible",name:"Transition"})})})}function vN(t,e){let n=C.exports.useContext(Nu)!==null,r=F1()!==null;return vn.createElement(vn.Fragment,null,!n&&r?vn.createElement(gd,{ref:e,...t}):vn.createElement(V1,{ref:e,...t}))}let gd=cp(gN),V1=cp(mN),yN=cp(vN),wN=Object.assign(gd,{Child:yN,Root:gd});var fp={},vd={exports:{}},Gt={exports:{}},EN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_N=EN,SN=_N;function z1(){}function B1(){}B1.resetWarningCache=z1;var TN=function(){function t(r,i,s,o,a,l){if(l!==SN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:B1,resetWarningCache:z1};return n.PropTypes=n,n};Gt.exports=TN();var Qt={};(function(t){function e(p){try{return v.insertRule(p,v.cssRules.length)}catch{console.warn("react-reveal - animation failed")}}function n(p,y,w,S,E){var T=Math.log(S),I=Math.log(E),x=(I-T)/(w-y);return Math.exp(T+x*(p-y))}function r(p){if(!v)return"";var y="@keyframes "+(_+f)+"{"+p+"}",w=m[p];return w?""+_+w:(v.insertRule(y,v.cssRules.length),m[p]=f,""+_+f++)}function i(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",i,!0),e("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}function s(p){var y=p.ssrFadeout;t.fadeOutEnabled=y}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=e,t.cascade=n,t.animation=r,t.hideAll=i,t.default=s;var o=t.namespace="react-reveal";t.defaults={duration:1e3,delay:0,count:1};var a=t.ssr=!0,l=t.observerMode=!1,u=t.raf=function(p){return window.setTimeout(p,66)},h=t.disableSsr=function(){return t.ssr=a=!1};t.fadeOutEnabled=!1,t.ssrFadeout=function(){var p=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return t.fadeOutEnabled=p};var d=t.globalHide=!1;t.ie10=!1;var c=t.collapseend=void 0,f=1,m={},v=!1,_=o+"-"+Math.floor(1e15*Math.random())+"-";if(typeof window<"u"&&window.name!=="nodejs"&&window.document&&typeof navigator<"u"){t.observerMode=l="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||u,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,navigator.appVersion.indexOf("MSIE 10")!==-1&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(h,1500),l||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var g=document.createElement("style");document.head.appendChild(g),g.sheet&&g.sheet.cssRules&&g.sheet.insertRule&&(v=g.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}})(Qt);var Wt={exports:{}},yd={exports:{}};(function(t,e){function n(w){return w&&w.__esModule?w:{default:w}}function r(w,S,E){return S in w?Object.defineProperty(w,S,{value:E,enumerable:!0,configurable:!0,writable:!0}):w[S]=E,w}function i(w,S){if(!(w instanceof S))throw new TypeError("Cannot call a class as a function")}function s(w,S){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!S||typeof S!="object"&&typeof S!="function"?w:S}function o(w,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);w.prototype=Object.create(S&&S.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(w,S):w.__proto__=S)}Object.defineProperty(e,"__esModule",{value:!0});var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},l=function(){function w(S,E){var T=[],I=!0,x=!1,P=void 0;try{for(var b,U=S[Symbol.iterator]();!(I=(b=U.next()).done)&&(T.push(b.value),!E||T.length!==E);I=!0);}catch(K){x=!0,P=K}finally{try{!I&&U.return&&U.return()}finally{if(x)throw P}}return T}return function(S,E){if(Array.isArray(S))return S;if(Symbol.iterator in Object(S))return w(S,E);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(w){for(var S=1;S<arguments.length;S++){var E=arguments[S];for(var T in E)Object.prototype.hasOwnProperty.call(E,T)&&(w[T]=E[T])}return w},h=function(){function w(S,E){for(var T=0;T<E.length;T++){var I=E[T];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(S,I.key,I)}}return function(S,E,T){return E&&w(S.prototype,E),T&&w(S,T),S}}(),d=C.exports,c=n(d),f=Gt.exports,m=Qt,v=(0,f.shape)({make:f.func,duration:f.number.isRequired,delay:f.number.isRequired,forever:f.bool,count:f.number.isRequired,style:f.object.isRequired,reverse:f.bool}),_={collapse:f.bool,collapseEl:f.element,cascade:f.bool,wait:f.number,force:f.bool,disabled:f.bool,appear:f.bool,enter:f.bool,exit:f.bool,fraction:f.number,refProp:f.string,innerRef:f.func,onReveal:f.func,unmountOnExit:f.bool,mountOnEnter:f.bool,inEffect:v.isRequired,outEffect:(0,f.oneOfType)([v,(0,f.oneOf)([!1])]).isRequired,ssrReveal:f.bool,collapseOnly:f.bool,ssrFadeout:f.bool},g={fraction:.2,refProp:"ref"},p={transitionGroup:f.object},y=function(w){function S(E,T){i(this,S);var I=s(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,E,T));return I.isOn=E.when===void 0||!!E.when,I.state={collapse:E.collapse?S.getInitialCollapseStyle(E):void 0,style:{opacity:I.isOn&&!E.ssrReveal||!E.outEffect?void 0:0}},I.savedChild=!1,I.isShown=!1,m.observerMode?I.handleObserve=I.handleObserve.bind(I):(I.revealHandler=I.makeHandler(I.reveal),I.resizeHandler=I.makeHandler(I.resize)),I.saveRef=I.saveRef.bind(I),I}return o(S,w),h(S,[{key:"saveRef",value:function(E){this.childRef&&this.childRef(E),this.props.innerRef&&this.props.innerRef(E),this.el!==E&&(this.el=E&&"offsetHeight"in E?E:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?u({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(E,T,I){var x=this,P=I.forever,b=I.count,U=I.delay,K=I.duration;if(!P){var ne=function(){x&&x.el&&(x.animationEndTimeout=void 0,E.call(x))};this.animationEndTimeout=window.setTimeout(ne,U+(K+(T?K:0)*b))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(E,T,I){var x=I.duration+(T.cascade?I.duration:0),P=this.isOn?this.getDimensionValue():0,b=void 0,U=void 0;if(T.collapseOnly)b=I.duration/3,U=I.delay;else{var K=x>>2,ne=K>>1;b=K,U=I.delay+(this.isOn?0:x-K-ne),E.style.animationDuration=x-K+(this.isOn?ne:-ne)+"ms",E.style.animationDelay=I.delay+(this.isOn?K-ne:0)+"ms"}return E.collapse={height:P,transition:"height "+b+"ms ease "+U+"ms",overflow:T.collapseOnly?"hidden":void 0},E}},{key:"animate",value:function(E){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var T=!this.isOn&&E.outEffect,I=E[T?"outEffect":"inEffect"],x="style"in I&&I.style.animationName||void 0,P=void 0;E.collapseOnly?P={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((E.outEffect||this.isOn)&&I.make&&(x=I.make),P={hasAppeared:!0,hasExited:!1,collapse:void 0,style:u({},I.style,{animationDuration:I.duration+"ms",animationDelay:I.delay+"ms",animationIterationCount:I.forever?"infinite":I.count,opacity:1,animationName:x}),className:I.className}),this.setState(E.collapse?this.collapse(P,E,I):P),T?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,E.cascade,I)):this.savedChild=!1,this.onReveal(E)}}},{key:"onReveal",value:function(E){E.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),E.wait?this.onRevealTimeout=window.setTimeout(E.onReveal,E.wait):E.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(E,T){l(E,1)[0].intersectionRatio>0&&(T.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(E){var T=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!T)return;this.observer.disconnect()}else if(T)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:E.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(E){var T=this,I=arguments.length>1&&arguments[1]!==void 0&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(E||(E=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&E.spy!==void 0?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return T.reveal(E)},200)):I||this.inViewport(E)||E.force?this.animate(E):m.observerMode?this.observe(E):this.listen())}},{key:"componentDidMount",value:function(){var E=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),this.props.when!==void 0&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var T=this.context.transitionGroup,I=T&&!T.isMounting?!("enter"in this.props&&this.props.enter===!1):this.props.appear;return this.isOn&&((this.props.when!==void 0||this.props.spy!==void 0)&&!I||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&S.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&S.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return E.reveal(E.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(E){var T=this,I=void 0;I=typeof E=="string"?E.split("").map(function(oe,lt){return c.default.createElement("span",{key:lt,style:{display:"inline-block",whiteSpace:"pre"}},oe)}):c.default.Children.toArray(E);var x=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],P=x.duration,b=x.reverse,U=I.length,K=2*P;this.props.collapse&&(K=parseInt(this.state.style.animationDuration,10),P=K/2);var ne=b?U:0;return I=I.map(function(oe){return(oe===void 0?"undefined":a(oe))==="object"&&oe?c.default.cloneElement(oe,{style:u({},oe.props.style,T.state.style,{animationDuration:Math.round((0,m.cascade)(b?ne--:ne++,0,U,P,K))+"ms"})}):oe})}},{key:"componentWillReceiveProps",value:function(E){if(E.when!==void 0&&(this.isOn=!!E.when),E.fraction!==this.props.fraction&&this.observe(E,!0),!this.isOn&&E.onExited&&"exit"in E&&E.exit===!1)return void E.onExited();E.disabled||(E.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:S.getInitialCollapseStyle(E)}),this.isShown=!1),E.when===this.props.when&&E.spy===this.props.spy||this.reveal(E),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if(a(this.props.children)==="object"){var E=c.default.Children.only(this.props.children);return"type"in E&&typeof E.type=="string"||this.props.refProp!=="ref"?E:c.default.createElement("div",null,E)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var E=void 0;E=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var T=this.getChild();typeof T.ref=="function"&&(this.childRef=T.ref);var I=!1,x=T.props,P=x.style,b=x.className,U=x.children,K=this.props.disabled?b:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(b?" "+b:"")||void 0,ne=void 0;typeof this.state.style.animationName=="function"&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&U&&this.state.style.animationName?(I=this.cascade(U),ne=u({},P,{opacity:1})):ne=this.props.disabled?P:u({},P,this.state.style);var oe=u({},this.props.props,r({className:K,style:ne},this.props.refProp,this.saveRef)),lt=c.default.cloneElement(T,oe,E?I||U:void 0);return this.props.collapse!==void 0?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:u({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:lt}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:lt}):lt}},{key:"makeHandler",value:function(E){var T=this,I=function(){E.call(T,T.props),T.ticking=!1};return function(){T.ticking||((0,m.raf)(I),T.ticking=!0)}}},{key:"inViewport",value:function(E){if(!this.el||window.document.hidden)return!1;var T=this.el.offsetHeight,I=window.pageYOffset-S.getTop(this.el),x=Math.min(T,window.innerHeight)*(m.globalHide?E.fraction:0);return I>x-window.innerHeight&&I<T-x}},{key:"resize",value:function(E){this&&this.el&&this.isOn&&this.inViewport(E)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!E.outEffect?1:0}}),this.onReveal(E))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(E){return{height:0,visibility:E.when?void 0:"hidden"}}},{key:"getTop",value:function(E){for(;E.offsetTop===void 0;)E=E.parentNode;for(var T=E.offsetTop;E.offsetParent;T+=E.offsetTop)E=E.offsetParent;return T}}]),S}(c.default.Component);y.propTypes=_,y.defaultProps=g,y.contextTypes=p,y.displayName="RevealBase",e.default=y,t.exports=e.default})(yd,yd.exports);(function(t,e){function n(u){return u&&u.__esModule?u:{default:u}}function r(u,h,d,c){return"in"in u&&(u.when=u.in),o.default.Children.count(c)<2?o.default.createElement(l.default,i({},u,{inEffect:h,outEffect:d,children:c})):(c=o.default.Children.map(c,function(f){return o.default.createElement(l.default,i({},u,{inEffect:h,outEffect:d,children:f}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,c):o.default.createElement("span",null,c))}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(u){for(var h=1;h<arguments.length;h++){var d=arguments[h];for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(u[c]=d[c])}return u};e.default=r;var s=C.exports,o=n(s),a=yd.exports,l=n(a);t.exports=e.default})(Wt,Wt.exports);var zl={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.distance,v=f.left,_=f.right,g=f.up,p=f.down,y=f.top,w=f.bottom,S=f.big,E=f.mirror,T=f.opposite,I=(m?m.toString():0)+((v?1:0)|(_?2:0)|(y||p?4:0)|(w||g?8:0)|(E?16:0)|(T?32:0)|(c?64:0)|(S?128:0));if(d.hasOwnProperty(I))return d[I];var x=v||_||g||p||y||w,P=void 0,b=void 0;if(x){if(!E!=!(c&&T)){var U=[_,v,w,y,p,g];v=U[0],_=U[1],y=U[2],w=U[3],g=U[4],p=U[5]}var K=m||(S?"2000px":"100%");P=v?"-"+K:_?K:"0",b=p||y?"-"+K:g||w?K:"0"}return d[I]=(0,a.animation)((c?"to":"from")+" {opacity: 0;"+(x?" transform: translate3d("+P+", "+b+", 0);":"")+`}
     `+(c?"from":"to")+" {opacity: 1;transform: none;} "),d[I]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a.defaults,f=arguments.length>1&&arguments[1]!==void 0&&arguments[1],m=c.children,v=(c.out,c.forever),_=c.timeout,g=c.duration,p=g===void 0?a.defaults.duration:g,y=c.delay,w=y===void 0?a.defaults.delay:y,S=c.count,E=S===void 0?a.defaults.count:S,T=r(c,["children","out","forever","timeout","duration","delay","count"]),I={make:i,duration:_===void 0?p:_,delay:w,forever:v,count:E,style:{animationFillMode:"both"},reverse:T.left};return f?(0,u.default)(T,I,I,m):I}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Qt,l=Wt.exports,u=n(l),h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(zl,zl.exports);(function(t,e){function n(m){return m&&m.__esModule?m:{default:m}}function r(m,v){var _={};for(var g in m)v.indexOf(g)>=0||Object.prototype.hasOwnProperty.call(m,g)&&(_[g]=m[g]);return _}function i(m){function v(oe){return oe?b?{duration:E,delay:T,count:I,forever:x,className:b,style:{}}:K:P?{duration:g===void 0?p:g,delay:y,count:w,forever:S,className:P,style:{}}:U}var _=m.children,g=m.timeout,p=m.duration,y=m.delay,w=m.count,S=m.forever,E=m.durationOut,T=m.delayOut,I=m.countOut,x=m.foreverOut,P=m.effect,b=m.effectOut,U=m.inEffect,K=m.outEffect,ne=r(m,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,u.default)(ne,v(!1),v(!0),_)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(m){for(var v=1;v<arguments.length;v++){var _=arguments[v];for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(m[g]=_[g])}return m},o=Gt.exports,a=Qt,l=Wt.exports,u=n(l),h=zl.exports,d=n(h),c={in:o.object,out:(0,o.oneOfType)([o.object,(0,o.oneOf)([!1])]),effect:o.string,effectOut:o.string,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool,durationOut:o.number,delayOut:o.number,countOut:o.number,foreverOut:o.bool},f=s({},a.defaults,{durationOut:a.defaults.duration,delayOut:a.defaults.delay,countOut:a.defaults.count,foreverOut:a.defaults.forever,inEffect:(0,d.default)(a.defaults),outEffect:(0,d.default)(s({out:!0},a.defaults))});i.propTypes=c,i.defaultProps=f,e.default=i,t.exports=e.default})(vd,vd.exports);var wd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.up,g=f.down,p=f.top,y=f.bottom,w=f.mirror,S=f.opposite,E=(m?1:0)|(v?2:0)|(p||g?4:0)|(y||_?8:0)|(w?16:0)|(S?32:0)|(c?64:0);if(d.hasOwnProperty(E))return d[E];if(!w!=!(c&&S)){var T=[v,m,y,p,g,_];m=T[0],v=T[1],p=T[2],y=T[3],_=T[4],g=T[5]}var I=m||v,x=p||y||_||g,P=I||x,b=void 0,U=void 0,K=void 0,ne=void 0,oe=void 0,lt=void 0,Ct=void 0,D=void 0,j=void 0,V=void 0,re=void 0,ie=void 0,fn=void 0,ke=void 0;return c?(ne=I?(v?"-":"")+"20px":0,oe=x?(_||y?"":"-")+"10px":"0",lt=(g||p?"":"-")+"20px",fn=I?(m?"-":"")+"2000px":"0",ke=x?(g||p?"-":"")+"2000px":"0"):(U=I?(m?"-":"")+"3000px":"0",K=x?(g||p?"-":"")+"3000px":"0",Ct=I?(v?"-":"")+"25px":"0",D=x?(_||y?"-":"")+"25px":"0",j=I?(m?"-":"")+"10px":"0",V=x?(g||p?"-":"")+"10px":"0",re=I?(v?"-":"")+"5px":"0",ie=x?(_||y?"-":"")+"5px":"0"),b=P?c?`
        20% {
          transform: translate3d(`+ne+", "+oe+`, 0);
          }
        `+(x?`40%, 45% {
            opacity: 1;
            transform: translate3d(0, `+lt+`, 0);
          }`:"")+`
          to {
            opacity: 0;
            transform: translate3d(`+fn+", "+ke+`, 0);
        }
      `:`from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      from {
        opacity: 0;
        transform: translate3d(`+U+", "+K+`, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(`+Ct+", "+D+`, 0);
      }
      75% {
        transform: translate3d(`+j+", "+V+`, 0);
      }
      90% {
        transform: translate3d(`+re+", "+ie+`, 0);
      }
      to {
        transform: none;
      }`:c?`20% {
          transform: scale3d(.9, .9, .9);
        }
        50%, 55% {
          opacity: 1;
          transform: scale3d(1.1, 1.1, 1.1);
        }
        to {
          opacity: 0;
          transform: scale3d(.3, .3, .3);
      }`:`from, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(.9, .9, .9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(.97, .97, .97);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }`,d[E]=(0,u.animation)(b),d[E]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"},reverse:E.left};return(0,l.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Wt.exports,l=n(a),u=Qt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(wd,wd.exports);var Ed={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.up,g=f.down,p=f.top,y=f.bottom,w=f.big,S=f.mirror,E=f.opposite,T=(m?1:0)|(v?2:0)|(p||g?4:0)|(y||_?8:0)|(S?16:0)|(E?32:0)|(c?64:0)|(w?128:0);if(d.hasOwnProperty(T))return d[T];if(!S!=!(c&&E)){var I=[v,m,y,p,g,_];m=I[0],v=I[1],p=I[2],y=I[3],_=I[4],g=I[5]}var x=w?"2000px":"100%",P=m?"-"+x:v?x:"0",b=g||p?"-"+x:_||y?x:"0";return d[T]=(0,u.animation)(`
    `+(c?"to":"from")+" {opacity: 0;transform: translate3d("+P+", "+b+`, 0) rotate3d(0, 0, 1, -120deg);}
	  `+(c?"from":"to")+` {opacity: 1;transform: none}
  `),d[T]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"}};return(0,a.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Wt.exports,a=n(o),l=Gt.exports,u=Qt,h={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(Ed,Ed.exports);var _d={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.up,g=f.down,p=f.top,y=f.bottom,w=f.big,S=f.mirror,E=f.opposite,T=(m?1:0)|(v?2:0)|(p||g?4:0)|(y||_?8:0)|(S?16:0)|(E?32:0)|(c?64:0)|(w?128:0);if(d.hasOwnProperty(T))return d[T];var I=m||v||_||g||p||y,x=void 0,P=void 0;if(I){if(!S!=!(c&&E)){var b=[v,m,y,p,g,_];m=b[0],v=b[1],p=b[2],y=b[3],_=b[4],g=b[5]}var U=w?"2000px":"100%";x=m?"-"+U:v?U:"0",P=g||p?"-"+U:_||y?U:"0"}return d[T]=(0,u.animation)((c?"to":"from")+" {"+(I?" transform: translate3d("+x+", "+P+", 0);":"")+`}
     `+(c?"from":"to")+" {transform: none;} "),d[T]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"},reverse:E.left};return(0,l.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Wt.exports,l=n(a),u=Qt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(_d,_d.exports);var Sd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.top,g=f.bottom,p=f.x,y=f.y,w=f.mirror,S=f.opposite,E=(m?1:0)|(v||y?2:0)|(_||p?4:0)|(g?8:0)|(w?16:0)|(S?32:0)|(c?64:0);if(d.hasOwnProperty(E))return d[E];if(!w!=!(c&&S)){var T=[v,m,g,_,y,p];m=T[0],v=T[1],_=T[2],g=T[3],p=T[4],y=T[5]}var I=void 0;if(p||y||m||v||_||g){var x=p||_||g?(g?"-":"")+"1":"0",P=y||v||m?(m?"-":"")+"1":"0";I=c?`from {
          transform: perspective(400px);
        }
        30% {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, -15deg);
          opacity: 1;
        }
        to {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, 90deg);
          opacity: 0;
        }`:`from {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, -20deg);
          animation-timing-function: ease-in;
        }
        60% {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, 10deg);
          opacity: 1;
        }
        80% {
          transform: perspective(400px) rotate3d(`+x+", "+P+`, 0, -5deg);
        }
        to {
          transform: perspective(400px);
        }`}else I=`from {
          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
          animation-timing-function: ease-out;
          opacity: `+(c?"1":"0")+`;
        }
        40% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
          animation-timing-function: ease-out;
        }
        50% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
          animation-timing-function: ease-in;
        }
        to {
          transform: perspective(400px);
          animation-timing-function: ease-in;
          opacity: `+(c?"0":"1")+`;
        }`;return d[E]=(0,u.animation)(I),d[E]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,l.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Wt.exports,l=n(a),u=Qt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(Sd,Sd.exports);var Td={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.up,g=f.down,p=f.top,y=f.bottom,w=f.mirror,S=f.opposite,E=(m?1:0)|(v?2:0)|(p||g?4:0)|(y||_?8:0)|(w?16:0)|(S?32:0)|(c?64:0);if(d.hasOwnProperty(E))return d[E];if(!w!=!(c&&S)){var T=[v,m,y,p,g,_];m=T[0],v=T[1],p=T[2],y=T[3],_=T[4],g=T[5]}var I="-200deg",x="center";return(g||p)&&m&&(I="-45deg"),((g||p)&&v||(_||y)&&m)&&(I="45deg"),(_||y)&&v&&(I="-90deg"),(m||v)&&(x=(m?"left":"right")+" bottom"),d[E]=(0,u.animation)(`
    `+(c?"to":"from")+" { opacity: 0; transform-origin: "+x+"; transform: rotate3d(0, 0, 1, "+I+`);}
    `+(c?"from":"to")+" { opacity: 1; transform-origin: "+x+`; transform: none;}
  `),d[E]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"}};return(0,l.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Wt.exports,l=n(a),u=Qt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(Td,Td.exports);var Id={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.mirror,g=f.opposite,p=(m?1:0)|(v?2:0)|(_?16:0)|(g?32:0)|(c?64:0);if(d.hasOwnProperty(p))return d[p];if(!_!=!(c&&g)){var y=[v,m];m=y[0],v=y[1]}var w=m?"-100%":v?"100%":"0",S=c?`from {
        opacity: 1;
      }
      to {
        transform: translate3d(`+w+`, 0, 0) skewX(30deg);
        opacity: 0;
      }
    `:`from {
        transform: translate3d(`+w+`, 0, 0) skewX(-30deg);
        opacity: 0;
      }
      60% {
        transform: skewX(20deg);
        opacity: 1;
      }
      80% {
        transform: skewX(-5deg);
        opacity: 1;
      }
      to {
        transform: none;
        opacity: 1;
      }`;return d[p]=(0,u.animation)(S),d[p]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"}};return E.left,E.right,E.mirror,E.opposite,(0,a.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Wt.exports,a=n(o),l=Gt.exports,u=Qt,h={out:l.bool,left:l.bool,right:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(Id,Id.exports);var kd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,f){var m={};for(var v in c)f.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(m[v]=c[v]);return m}function i(c,f){var m=f.left,v=f.right,_=f.up,g=f.down,p=f.top,y=f.bottom,w=f.mirror,S=f.opposite,E=(m?1:0)|(v?2:0)|(p||g?4:0)|(y||_?8:0)|(w?16:0)|(S?32:0)|(c?64:0);if(d.hasOwnProperty(E))return d[E];if(!w!=!(c&&S)){var T=[v,m,y,p,g,_];m=T[0],v=T[1],p=T[2],y=T[3],_=T[4],g=T[5]}var I=m||v,x=p||y||_||g,P=I||x,b=void 0,U=void 0,K=void 0,ne=void 0,oe=void 0;return P?c?(U=I?(m?"":"-")+"42px":"0",K=x?(g||p?"-":"")+"60px":"0",ne=I?(v?"":"-")+"2000px":"0",oe=x?(_||y?"":"-")+"2000px":"0",b=`40% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+U+", "+K+`, 0);
        }
        to {
          opacity: 0;
          transform: scale(.1) translate3d(`+ne+", "+oe+`, 0);
          transform-origin: `+(x?"center bottom":(m?"left":"right")+" center")+`;
        }`):(U=I?(m?"-":"")+"1000px":"0",K=x?(g||p?"-":"")+"1000px":"0",ne=I?(v?"-":"")+"10px":"0",oe=x?(_||y?"-":"")+"60px":"0",b=`from {
          opacity: 0;
          transform: scale3d(.1, .1, .1) translate3d(`+U+", "+K+`, 0);
          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+ne+", "+oe+`, 0);
          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }`):b=(c?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(c?"from":"to")+" { opacity: 1; transform: none;}",d[E]=(0,u.animation)(b),d[E]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,f=c.children,m=(c.out,c.forever),v=c.timeout,_=c.duration,g=_===void 0?u.defaults.duration:_,p=c.delay,y=p===void 0?u.defaults.delay:p,w=c.count,S=w===void 0?u.defaults.count:w,E=r(c,["children","out","forever","timeout","duration","delay","count"]),T={make:i,duration:v===void 0?g:v,delay:y,forever:m,count:S,style:{animationFillMode:"both"},reverse:E.left};return(0,l.default)(E,T,T,f)}Object.defineProperty(e,"__esModule",{value:!0});var o=Gt.exports,a=Wt.exports,l=n(a),u=Qt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},d={};s.propTypes=h,e.default=s,t.exports=e.default})(kd,kd.exports);(function(t){function e(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(t,"__esModule",{value:!0});var n=vd.exports;Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(n).default}});var r=zl.exports;Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return e(r).default}});var i=wd.exports;Object.defineProperty(t,"Bounce",{enumerable:!0,get:function(){return e(i).default}});var s=Ed.exports;Object.defineProperty(t,"Roll",{enumerable:!0,get:function(){return e(s).default}});var o=_d.exports;Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return e(o).default}});var a=Sd.exports;Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return e(a).default}}),Object.defineProperty(t,"Reveal",{enumerable:!0,get:function(){return e(n).default}});var l=Td.exports;Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return e(l).default}});var u=Id.exports;Object.defineProperty(t,"LightSpeed",{enumerable:!0,get:function(){return e(u).default}});var h=kd.exports;Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return e(h).default}})})(fp);function IN(t){const{User:e}=C.exports.useContext(Jf),[n,r]=C.exports.useState(""),i=Xf();C.exports.useEffect(()=>(e!=null&&r(e.photoURL),window.addEventListener("scroll",u),console.log("Navbar",e),()=>{window.removeEventListener("scroll",u)}),[]);const[s,o]=C.exports.useState(!1),[a,l]=C.exports.useState(!1),u=()=>{window.scrollY>80?l(!0):l(!1)},h=()=>{l(!0)},d=()=>{l(!1)},c=()=>{const f=A1();P2(f).then(()=>{i("/")}).catch(m=>{alert(m.message)})};return k(fp.Fade,{children:k("header",{className:t.playPage?"fixed top-0 z-10 w-full backdrop-blur-sm":"fixed top-0 z-10 w-full",children:le("nav",{className:`transition duration-500 ease-in-out  ${a&&"transition duration-500 ease-in-out bg-black "} `,children:[k("div",{className:"px-4 mx-auto max-w-8xl sm:px-6 lg:px-8",children:le("div",{className:"flex items-center justify-between h-16",children:[le("div",{className:"flex items-center",children:[k("div",{className:"flex-shrink-0",children:k("img",{className:"h-6 cursor-pointer w-18",src:"https://fontmeme.com/permalink/250902/1c1670dd6284f8d01001e1c74b52aae3.png",alt:"NETFLIX"})}),k("div",{className:"hidden md:block",children:le("div",{className:"flex items-center ml-10 space-x-4",children:[k(We,{to:"/",className:"py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m",children:"Home"}),k(We,{to:"/series",className:"py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m",children:"Series"}),k(We,{to:"/history",className:"py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m",children:"History"}),k(We,{to:"/liked",className:"py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m",children:"Liked"}),k(We,{to:"/mylist",className:"py-2 font-medium text-white transition ease-in-out delay-150 rounded-md cursor-pointer hover:text-red-800 lg:px-3 text-m",children:"My List"})]})})]}),k("div",{className:"ml-auto",children:le("div",{className:"flex",children:[k(We,{to:"/search",children:k("svg",{xmlns:"http://www.w3.org/2000/svg",className:"items-center w-10 h-10 pr-4 mt-auto mb-auto text-white hover:text-red-800 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:k("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e?k("a",{className:"items-center hidden pr-4 mt-auto mb-auto text-base font-medium text-white transition ease-in-out delay-150 cursor-pointer hover:text-red-800 md:flex",children:e.displayName}):null,k("svg",{xmlns:"http://www.w3.org/2000/svg",className:"items-center hidden w-10 h-10 pr-4 mt-auto mb-auto text-white cursor-pointer md:flex",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:k("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),le("div",{className:"group inline-block relative transition ease-in-out delay-300",children:[k(We,{to:"/profile",children:k("img",{className:"h-10 w-10 rounded-full cursor-pointer",src:n?`${e.photoURL}`:"https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png",alt:"NETFLIX"})}),le("ul",{class:"absolute hidden text-white pt-1 -ml-32 group-hover:block transition ease-in-out delay-150",children:[k("li",{children:k(We,{to:"/profile",className:"cursor-pointer rounded-t bg-stone-900 font-bold hover:border-l-4 hover:bg-gradient-to-r from-[#ff000056] border-red-800 py-2 px-4 block whitespace-no-wrap transition ease-in-out delay-150",children:"Profile"})}),k("li",{children:k(We,{to:"/signin",className:"cursor-pointer bg-stone-900 font-semibold hover:border-l-4 hover:bg-gradient-to-r from-[#ff000056] border-red-800 py-2 px-4 block whitespace-no-wrap transition ease-in-out delay-150",children:"Add another User"})}),k("li",{children:k("a",{onClick:c,className:"cursor-pointer rounded-b bg-stone-900 font-bold hover:border-l-4 hover:bg-gradient-to-r from-[#ff000056] border-red-800 py-2 px-4 block whitespace-no-wrap transition ease-in-out delay-150",children:"Sign Out"})})]})]})]})}),k("div",{className:"flex pl-4 -mr-2 md:hidden",children:le("button",{onClick:()=>o(!s),type:"button",className:"inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[k("span",{className:"sr-only",children:"Open main menu"}),s?k("svg",{className:"block w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",onClick:d,children:k("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):k("svg",{className:"block w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",onClick:h,children:k("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),k(wN,{show:s,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:f=>k("div",{className:"md:hidden",id:"mobile-menu",children:le("div",{ref:f,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[k(We,{to:"/",children:k("a",{className:"block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-800",children:"Home"})}),k(We,{to:"/series",children:k("a",{className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"TV-Series"})}),k(We,{to:"/history",children:k("a",{className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"History"})}),k(We,{to:"/liked",children:k("a",{className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"Liked"})}),k(We,{to:"/mylist",children:k("a",{className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"My-List"})}),k(We,{to:"/signin",children:k("a",{className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"Add another user"})}),k("a",{onClick:c,className:"block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-800 hover:text-white",children:"Sign Out"})]})})})]})})})}function kN(){const[t,e]=C.exports.useState(!1),n=zo(),r=C.exports.useRef(null),i=()=>{window.scrollY>100?e(!0):e(!1)},s=a=>{switch(a.key){case"Enter":r.current&&r.current.click(),a.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":r.current&&!o&&r.current.focus(),a.preventDefault();break}};C.exports.useEffect(()=>(window.addEventListener("scroll",i),window.addEventListener("keydown",s),()=>{window.removeEventListener("scroll",i),window.removeEventListener("keydown",s)}),[]),C.exports.useEffect(()=>{r.current&&!o&&r.current.focus()},[n.pathname]);const o=n.pathname==="/signin"||n.pathname==="/signup"||n.pathname==="/forgot-password";return le("footer",{className:"fixed bottom-0 z-50 w-full flex items-center py-4 transition duration-500 ease-in-out",children:[k("div",{className:"w-9/12 md:w-11/12"}),!o&&k("div",{children:k(We,{to:"/signin",children:k("button",{ref:r,className:"w-full sm:w-32 bg-orange-600 h-10 sm:h-12 rounded-xl text-white font-bold transition-colors flex items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black hover:bg-orange-700",tabIndex:0,children:"Get Started"})})})]})}const CN=""+new URL("WelcomePageBanner.1e8cce04.jpg",import.meta.url).href,xN=()=>{const t=Xf(),[e,n]=C.exports.useState(""),[r,i]=C.exports.useState(""),[s,o]=C.exports.useState(!1),[a,l]=C.exports.useState(null),[u,h]=C.exports.useState(!1),[d,c]=C.exports.useState(0),f=C.exports.useRef([]),m=[[4,5,6,7,8,9,10,11,12,13],[14,15,16,17,18,19,20,21,22,23],[24,25,26,27,28,29,30,31,32,33],[34,36,37,38,39,40,41,42,43],[44,45,46],[47,48,49,50,51,52]];C.exports.useEffect(()=>{f.current[d]&&f.current[d].focus()},[d]);const v=w=>{var P;let S=m.findIndex(b=>b.includes(d)),E=S!==-1?m[S].indexOf(d):-1;const T=[4,14,24,34,44,47,2],I=[0,1,55,54],x=[47,2,3,53];switch(w.key){case"ArrowRight":if(S!==-1)E<m[S].length-1?c(m[S][E+1]):c(0);else if(x.includes(d)){const b=x.indexOf(d);b<x.length-1?c(x[b+1]):c(0)}else d===56&&c(4);w.preventDefault();break;case"ArrowLeft":if(T.includes(d))c(56);else if(S!==-1)E>0&&c(m[S][E-1]);else if(I.includes(d))c(4);else if(x.includes(d)){const b=x.indexOf(d);b>0?c(x[b-1]):c(56)}w.preventDefault();break;case"ArrowDown":if(d===56&&c(4),S!==-1){if(d===47)c(2);else if(d===48)c(3);else if(d===49)c(53);else if(S<m.length-1){const b=m[S+1][Math.min(E,m[S+1].length-1)];c(b)}}else if(I.includes(d)){const b=I.indexOf(d);b<I.length-1&&c(I[b+1])}w.preventDefault();break;case"ArrowUp":if(d===56&&c(4),S!==-1){if(S>0){const b=m[S-1][Math.min(E,m[S-1].length-1)];c(b)}}else if(I.includes(d)){const b=I.indexOf(d);b>0&&c(I[b-1])}else x.includes(d)&&(d===2?c(47):d===3?c(48):d===53&&c(49));w.preventDefault();break;case"Enter":(P=f.current[d])==null||P.click(),w.preventDefault();break}};C.exports.useEffect(()=>(window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)),[d]);const _=w=>{},g=w=>{const S=u&&w.match(/[a-z]/)?w.toUpperCase():w;a==="email"&&n(E=>E+S)},p=()=>{a==="email"&&n(w=>w.slice(0,-1))},y=w=>{if(a==="email"){let S=e;const E=S.indexOf("@");E!==-1&&(S=S.substring(0,E)),n(S+w)}};return le("section",{className:"min-h-screen bg-black text-white",style:{background:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${CN})`,backgroundSize:"cover",backgroundPosition:"center"},children:[le("div",{className:"flex flex-col sm:flex-row justify-between items-center p-3 sm:p-5 bg-black bg-opacity-50 gap-3 sm:gap-0",children:[k("button",{ref:w=>f.current[56]=w,onClick:()=>t(-1),className:"self-start sm:self-center flex items-center gap-3 bg-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors",children:k("span",{className:"text-xl text-orange-500",children:"\u2190"})}),le("div",{className:"flex-1 sm:ml-5 text-center sm:text-left",children:[k("h1",{className:"text-base sm:text-lg font-semibold",children:"Sign-In to your Roopa Hala Account"}),k("p",{className:"text-xs sm:text-sm opacity-80",children:"Sri Lanka's Premier & Largest Sinhala Movie Platform"})]})]}),k("h2",{className:"text-2xl sm:text-3xl font-bold text-center mt-4 sm:mt-6 px-4",children:"Forgot Password"}),k(fp.Fade,{children:le("div",{className:"flex flex-col xl:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 p-3 sm:p-6 mt-28",children:[le("div",{className:"flex flex-col items-center space-y-1 sm:space-y-1.5 md:space-y-2 w-full max-w-[500px] xl:max-w-[600px] order-2 xl:order-1",children:[k("div",{className:"grid grid-cols-10 gap-1 sm:gap-2 w-full",children:"1234567890".split("").map((w,S)=>k("button",{ref:E=>f.current[4+S]=E,onClick:()=>g(w),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:w},w))}),k("div",{className:"grid grid-cols-10 gap-1 sm:gap-2 w-full",children:"qwertyuiop".split("").map((w,S)=>k("button",{ref:E=>f.current[14+S]=E,onClick:()=>g(w),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:w},w))}),le("div",{className:"grid grid-cols-10 gap-1 sm:gap-2 w-full",children:["asdfghjkl".split("").map((w,S)=>k("button",{ref:E=>f.current[24+S]=E,onClick:()=>g(w),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:w},w)),k("button",{ref:w=>f.current[33]=w,onClick:()=>g("-"),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:"-"})]}),le("div",{className:"grid grid-cols-10 gap-1 sm:gap-2 w-full",children:[k("button",{ref:w=>f.current[34]=w,onClick:()=>h(!u),className:`col-span-2 h-8 sm:h-10 lg:h-11 w-full rounded text-white text-xs sm:text-sm ${u?"bg-orange-600":"bg-neutral-800"}`,children:"\u2191"}),"zxcvbnm".split("").map((w,S)=>k("button",{ref:E=>f.current[36+S]=E,onClick:()=>g(w),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:w},w)),k("button",{ref:w=>f.current[43]=w,onClick:()=>g("-"),className:"h-8 sm:h-10 lg:h-11 w-full bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs sm:text-sm",children:"-"})]}),k("div",{className:"grid grid-cols-3 gap-1 sm:gap-2 w-full",children:["@hotmail.com","@gmail.com","@yahoo.com"].map((w,S)=>k("button",{ref:E=>f.current[44+S]=E,onClick:()=>y(w),className:"h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 rounded text-white text-xs",children:w},w))}),le("div",{className:"grid grid-cols-6 gap-1 sm:gap-2 w-full",children:[k("button",{ref:w=>f.current[47]=w,className:"h-8 sm:h-10 lg:h-11 bg-white text-black rounded text-xs sm:text-sm",children:"Next"}),k("button",{ref:w=>f.current[48]=w,onClick:()=>g("!#$"),className:"h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm",children:"!#$"}),k("button",{ref:w=>f.current[49]=w,onClick:()=>g("@"),className:"h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm",children:"@"}),k("button",{ref:w=>f.current[50]=w,onClick:()=>g("."),className:"h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm",children:"."}),k("button",{ref:w=>f.current[51]=w,onClick:()=>g(".com"),className:"h-8 sm:h-10 lg:h-11 bg-neutral-800 hover:bg-gray-600 text-white rounded text-xs sm:text-sm",children:".com"}),k("button",{ref:w=>f.current[52]=w,onClick:p,className:"h-8 sm:h-10 lg:h-11 bg-white text-black rounded text-xs sm:text-sm",children:"\u232B"})]}),k("div",{className:"flex justify-start items-start w-full mt-20",children:k("button",{ref:w=>f.current[2]=w,type:"submit",onClick:_,className:"w-full sm:w-32 bg-orange-600 h-10 sm:h-12 rounded-xl text-white font-bold transition-colors flex items-center justify-center shadow-[0px_8px_48px_0px_rgba(225,124,0,0.5)]",children:s?k(P1,{color:"#fff",size:20}):"Submit Email"})})]}),le("div",{className:"bg-opacity-60 rounded-xl max-w-md w-full order-1 xl:order-2",children:[k("p",{className:"mb-8",children:"Forget your Password? Hassel not, we have got your back. Just enter your email we will send a password reset link to it."}),le("form",{onSubmit:_,className:"space-y-4",children:[k("div",{ref:w=>f.current[0]=w,tabIndex:0,onFocus:()=>l("email"),className:`w-full bg-black border rounded px-4 py-3 text-white transition-all duration-300 outline-none text-sm sm:text-base cursor-text ${a==="email"?"border-orange-600 shadow-[0_0_8px_2px_rgba(225,124,0,0.7)]":"border-gray-700"}`,children:e||"appuser@roopahala.co"}),r&&k("div",{className:"bg-red-600 text-white p-3 rounded text-sm",children:r})]}),le("div",{className:"text-center sm:text-right mt-5 sm:mt-20",children:[k("p",{className:"text-white text-sm",children:"Need Help Signing In?"}),k("p",{className:"text-white font-bold text-sm",children:"Visit Roopahala.com"})]})]})]})})]})},cv=C.exports.lazy(()=>Lt(()=>import("./Home.10d606ca.js"),["./Home.10d606ca.js","./URLs.e15aae60.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js","./MoviePopUp.ad7335ae.js","./URLs.7ffc31b1.css","./pagination.f47365eb.css","./Footer.dc89978b.js","./styles.module.90587be8.js","./styles.94334888.css"],import.meta.url)),RN=C.exports.lazy(()=>Lt(()=>import("./Series.ff957fb5.js"),["./Series.ff957fb5.js","./URLs.e15aae60.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js","./MoviePopUp.ad7335ae.js","./URLs.7ffc31b1.css","./pagination.f47365eb.css","./Footer.dc89978b.js","./styles.module.90587be8.js","./styles.94334888.css"],import.meta.url)),NN=C.exports.lazy(()=>Lt(()=>import("./Search.510bcd2a.js"),["./Search.510bcd2a.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js","./MoviePopUp.ad7335ae.js"],import.meta.url)),AN=C.exports.lazy(()=>Lt(()=>import("./Profile.8b42ce12.js"),["./Profile.8b42ce12.js","./index.6d165cc5.js","./pagination.f47365eb.css"],import.meta.url)),PN=C.exports.lazy(()=>Lt(()=>import("./MyList.c22d2b1a.js"),["./MyList.c22d2b1a.js","./UserMovieSection.1db52dc8.js","./MoviePopUp.ad7335ae.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js"],import.meta.url)),ON=C.exports.lazy(()=>Lt(()=>import("./SignIn.adefdc16.js"),[],import.meta.url)),bN=C.exports.lazy(()=>Lt(()=>import("./SignUp.b04d7ac1.js"),[],import.meta.url)),DN=C.exports.lazy(()=>Lt(()=>import("./Welcome.8d4e146c.js"),["./Welcome.8d4e146c.js","./styles.module.90587be8.js","./styles.94334888.css"],import.meta.url)),LN=C.exports.lazy(()=>Lt(()=>import("./ErrorPage.cb85c40c.js"),[],import.meta.url)),hv=C.exports.lazy(()=>Lt(()=>import("./Play.60d51aca.js"),["./Play.60d51aca.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js","./Footer.dc89978b.js","./styles.module.90587be8.js","./styles.94334888.css","./pagination.f47365eb.css"],import.meta.url)),$N=C.exports.lazy(()=>Lt(()=>import("./LikedMovies.bdc74c37.js"),["./LikedMovies.bdc74c37.js","./UserMovieSection.1db52dc8.js","./MoviePopUp.ad7335ae.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js"],import.meta.url)),MN=C.exports.lazy(()=>Lt(()=>import("./History.97095653.js"),["./History.97095653.js","./UserMovieSection.1db52dc8.js","./MoviePopUp.ad7335ae.js","./useUpdateLikedMovies.a64bb422.js","./index.6d165cc5.js"],import.meta.url));function FN(){const{User:t,setUser:e}=C.exports.useContext(Jf);return C.exports.useEffect(()=>{const n=A1();A2(n,r=>{e(r),console.log(r)})},[]),le("div",{children:[t?k(IN,{}):k(kN,{}),k(C.exports.Suspense,{replace:!0,fallback:k(GR,{}),children:le(Gk,{children:[k(nt,{index:!0,path:"/",element:t?k(cv,{}):k(DN,{})}),t?le(Pw,{children:[k(nt,{path:"/home",element:k(cv,{})}),k(nt,{path:"/series",element:k(RN,{})}),k(nt,{path:"/search",element:k(NN,{})}),k(nt,{path:"/profile",element:k(AN,{})}),k(nt,{path:"/mylist",element:k(PN,{})}),k(nt,{path:"/liked",element:k($N,{})}),k(nt,{path:"/history",element:k(MN,{})}),k(nt,{path:"/play/:id",element:k(hv,{})})]}):null,k(nt,{path:"/play/:id",element:k(hv,{})}),k(nt,{path:"/signin",element:k(ON,{})}),k(nt,{path:"/signup",element:k(bN,{})}),k(nt,{path:"/forgot-password",element:k(xN,{})}),k(nt,{path:"*",element:k(LN,{})})]})})]})}var UN="firebase",jN="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(UN,jN,"app");const VN=(t,e)=>e.some(n=>t instanceof n);let dv,fv;function zN(){return dv||(dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BN(){return fv||(fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H1=new WeakMap,Cd=new WeakMap,W1=new WeakMap,Yc=new WeakMap,pp=new WeakMap;function HN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&H1.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function WN(t){if(Cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cd.set(t,e)}let xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qN(t){xd=t(xd)}function KN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xc(this),e,...n);return W1.set(r,e.sort?e.sort():[e]),lr(r)}:BN().includes(t)?function(...e){return t.apply(Xc(this),e),lr(H1.get(this))}:function(...e){return lr(t.apply(Xc(this),e))}}function GN(t){return typeof t=="function"?KN(t):(t instanceof IDBTransaction&&WN(t),VN(t,zN())?new Proxy(t,xd):t)}function lr(t){if(t instanceof IDBRequest)return HN(t);if(Yc.has(t))return Yc.get(t);const e=GN(t);return e!==t&&(Yc.set(t,e),pp.set(e,t)),e}const Xc=t=>pp.get(t);function QN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const YN=["get","getKey","getAll","getAllKeys","count"],XN=["put","add","delete","clear"],Jc=new Map;function pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Jc.set(e,s),s}qN(t=>({...t,get:(e,n,r)=>pv(e,n)||t.get(e,n,r),has:(e,n)=>!!pv(e,n)||t.has(e,n)}));const q1="@firebase/installations",mp="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=1e4,G1=`w:${mp}`,Q1="FIS_v2",JN="https://firebaseinstallations.googleapis.com/v1",ZN=60*60*1e3,eA="installations",tA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Wr=new ei(eA,tA,nA);function Y1(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1({projectId:t}){return`${JN}/projects/${t}/installations`}function J1(t){return{token:t.token,requestStatus:2,expiresIn:iA(t.expiresIn),creationTime:Date.now()}}async function Z1(t,e){const r=(await e.json()).error;return Wr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rA(t,{refreshToken:e}){const n=eE(t);return n.append("Authorization",sA(e)),n}async function tE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iA(t){return Number(t.replace("s","000"))}function sA(t){return`${Q1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=X1(t),i=eE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Q1,appId:t.appId,sdkVersion:G1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await tE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:J1(u.authToken)}}else throw await Z1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/^[cdef][\w-]{21}$/,Rd="";function uA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cA(t);return lA.test(n)?n:Rd}catch{return Rd}}function cA(t){return aA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Map;function iE(t,e){const n=Ou(t);sE(n,e),hA(n,e)}function sE(t,e){const n=rE.get(t);if(!!n)for(const r of n)r(e)}function hA(t,e){const n=dA();n&&n.postMessage({key:t,fid:e}),fA()}let Nr=null;function dA(){return!Nr&&"BroadcastChannel"in self&&(Nr=new BroadcastChannel("[Firebase] FID Change"),Nr.onmessage=t=>{sE(t.data.key,t.data.fid)}),Nr}function fA(){rE.size===0&&Nr&&(Nr.close(),Nr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="firebase-installations-database",mA=1,qr="firebase-installations-store";let Zc=null;function gp(){return Zc||(Zc=QN(pA,mA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}})),Zc}async function Bl(t,e){const n=Ou(t),i=(await gp()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&iE(t,e.fid),e}async function oE(t){const e=Ou(t),r=(await gp()).transaction(qr,"readwrite");await r.objectStore(qr).delete(e),await r.done}async function bu(t,e){const n=Ou(t),i=(await gp()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&iE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){let e;const n=await bu(t.appConfig,r=>{const i=gA(r),s=vA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gA(t){const e=t||{fid:uA(),registrationStatus:0};return aE(e)}function vA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wA(t)}:{installationEntry:e}}async function yA(t,e){try{const n=await oA(t,e);return Bl(t.appConfig,n)}catch(n){throw Y1(n)&&n.customData.serverCode===409?await oE(t.appConfig):await Bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wA(t){let e=await mv(t.appConfig);for(;e.registrationStatus===1;)await nE(100),e=await mv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vp(t);return r||n}return e}function mv(t){return bu(t,e=>{if(!e)throw Wr.create("installation-not-found");return aE(e)})}function aE(t){return EA(t)?{fid:t.fid,registrationStatus:0}:t}function EA(t){return t.registrationStatus===1&&t.registrationTime+K1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A({appConfig:t,heartbeatServiceProvider:e},n){const r=SA(t,n),i=rA(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:G1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await tE(()=>fetch(r,a));if(l.ok){const u=await l.json();return J1(u)}else throw await Z1("Generate Auth Token",l)}function SA(t,{fid:e}){return`${X1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,e=!1){let n;const r=await bu(t.appConfig,s=>{if(!lE(s))throw Wr.create("not-registered");const o=s.authToken;if(!e&&kA(o))return s;if(o.requestStatus===1)return n=TA(t,e),s;{if(!navigator.onLine)throw Wr.create("app-offline");const a=xA(s);return n=IA(t,a),a}});return n?await n:r.authToken}async function TA(t,e){let n=await gv(t.appConfig);for(;n.authToken.requestStatus===1;)await nE(100),n=await gv(t.appConfig);const r=n.authToken;return r.requestStatus===0?yp(t,e):r}function gv(t){return bu(t,e=>{if(!lE(e))throw Wr.create("not-registered");const n=e.authToken;return RA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function IA(t,e){try{const n=await _A(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bl(t.appConfig,r),n}catch(n){if(Y1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bl(t.appConfig,r)}throw n}}function lE(t){return t!==void 0&&t.registrationStatus===2}function kA(t){return t.requestStatus===2&&!CA(t)}function CA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZN}function xA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function RA(t){return t.requestStatus===1&&t.requestTime+K1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t){const e=t,{installationEntry:n,registrationPromise:r}=await vp(e);return r?r.catch(console.error):yp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e=!1){const n=t;return await PA(n),(await yp(n,e)).token}async function PA(t){const{registrationPromise:e}=await vp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){if(!t||!t.options)throw eh("App Configuration");if(!t.name)throw eh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw eh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function eh(t){return Wr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="installations",bA="installations-internal",DA=t=>{const e=t.getProvider("app").getImmediate(),n=OA(e),r=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},LA=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,uE).getImmediate();return{getId:()=>NA(n),getToken:i=>AA(n,i)}};function $A(){cn(new Bt(uE,DA,"PUBLIC")),cn(new Bt(bA,LA,"PRIVATE"))}$A();Ot(q1,mp);Ot(q1,mp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="analytics",MA="firebase_id",FA="origin",UA=60*1e3,jA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new ku("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new ei("analytics","Analytics",VA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){if(!t.startsWith(wp)){const e=Et.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function cE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function BA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HA(t,e){const n=BA("firebase-js-sdk-policy",{createScriptURL:zA}),r=document.createElement("script"),i=`${wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qA(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await cE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){mt.error(a)}t("config",i,s)}async function KA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await cE(n);for(const l of o){const u=a.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function GA(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await KA(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await qA(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){mt.error(a)}}return i}function QA(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function YA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=30,JA=1e3;class ZA{constructor(e={},n=JA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hE=new ZA;function eP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tP(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eP(r)},s=jA.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function nP(t,e=hE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sP;return setTimeout(async()=>{a.abort()},n!==void 0?n:UA),dE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function dE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=hE){var s;const{appId:o,measurementId:a}=t;try{await rP(r,e)}catch(l){if(a)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await tP(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!iP(u)){if(i.deleteThrottleMetadata(o),a)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?$g(n,i.intervalMillis,XA):$g(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,d),mt.debug(`Calling attemptFetch again in ${h} millis`),dE(t,d,r,i)}}function rP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iP(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(){if(Hw())try{await Ww()}catch(t){return mt.warn(Et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lP(t,e,n,r,i,s,o){var a;const l=nP(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>mt.error(f)),e.push(l);const u=aP().then(f=>{if(f)return r.getId()}),[h,d]=await Promise.all([l,u]);YA(s)||HA(s,h.measurementId),i("js",new Date);const c=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return c[FA]="firebase",c.update=!0,d!=null&&(c[MA]=d),i("config",h.measurementId,c),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.app=e}_delete(){return delete Ws[this.app.options.appId],Promise.resolve()}}let Ws={},vv=[];const yv={};let th="dataLayer",cP="gtag",wv,fE,Ev=!1;function hP(){const t=[];if(Bw()&&t.push("This is a browser extension environment."),_C()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Et.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function dP(t,e,n){hP();const r=t.options.appId;if(!r)throw Et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Ws[r]!=null)throw Et.create("already-exists",{id:r});if(!Ev){WA(th);const{wrappedGtag:s,gtagCore:o}=QA(Ws,vv,yv,th,cP);fE=s,wv=o,Ev=!0}return Ws[r]=lP(t,vv,yv,e,wv,th,n),new uP(t)}function fP(t=ep()){t=Ae(t);const e=ti(t,Hl);return e.isInitialized()?e.getImmediate():pP(t)}function pP(t,e={}){const n=ti(t,Hl);if(n.isInitialized()){const i=n.getImmediate();if(yo(e,n.getOptions()))return i;throw Et.create("already-initialized")}return n.initialize({options:e})}function mP(t,e,n,r){t=Ae(t),oP(fE,Ws[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const _v="@firebase/analytics",Sv="0.10.0";function gP(){cn(new Bt(Hl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dP(r,i,n)},"PUBLIC")),cn(new Bt("analytics-internal",t,"PRIVATE")),Ot(_v,Sv),Ot(_v,Sv,"esm2017");function t(e){try{const n=e.getProvider(Hl).getImmediate();return{logEvent:(r,i,s)=>mP(n,r,i,s)}}catch(n){throw Et.create("interop-component-reg-failed",{reason:n})}}}gP();var vP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Ep=Ep||{},B=vP||self;function Du(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yP(t){return Object.prototype.hasOwnProperty.call(t,nh)&&t[nh]||(t[nh]=++wP)}var nh="closure_uid_"+(1e9*Math.random()>>>0),wP=0;function EP(t,e,n){return t.call.apply(t.bind,arguments)}function _P(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=EP:Ye=_P,Ye.apply(null,arguments)}function Pa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function wr(){this.s=this.s,this.o=this.o}var SP=0;wr.prototype.s=!1;wr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SP!=0)&&yP(this)};wr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _p(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Tv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Du(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var TP=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return t}();function To(t){return/^[\s\xa0]*$/.test(t)}function Lu(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Zt(t){return Lu().indexOf(t)!=-1}function Sp(t){return Sp[" "](t),t}Sp[" "]=function(){};function IP(t,e){var n=gO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var kP=Zt("Opera"),Wi=Zt("Trident")||Zt("MSIE"),mE=Zt("Edge"),Nd=mE||Wi,gE=Zt("Gecko")&&!(Lu().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge"))&&!(Zt("Trident")||Zt("MSIE"))&&!Zt("Edge"),CP=Lu().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge");function vE(){var t=B.document;return t?t.documentMode:void 0}var Ad;e:{var rh="",ih=function(){var t=Lu();if(gE)return/rv:([^\);]+)(\)|;)/.exec(t);if(mE)return/Edge\/([\d\.]+)/.exec(t);if(Wi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CP)return/WebKit\/(\S+)/.exec(t);if(kP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ih&&(rh=ih?ih[1]:""),Wi){var sh=vE();if(sh!=null&&sh>parseFloat(rh)){Ad=String(sh);break e}}Ad=rh}var Pd;if(B.document&&Wi){var Iv=vE();Pd=Iv||parseInt(Ad,10)||void 0}else Pd=void 0;var xP=Pd;function Io(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gE){e:{try{Sp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Io.$.h.call(this)}}Le(Io,Xe);var RP={2:"touch",3:"pen",4:"mouse"};Io.prototype.h=function(){Io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yo="closure_listenable_"+(1e6*Math.random()|0),NP=0;function AP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++NP,this.fa=this.ia=!1}function $u(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Tp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yE(t){const e={};for(const n in t)e[n]=t[n];return e}const kv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<kv.length;s++)n=kv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Mu(t){this.src=t,this.g={},this.h=0}Mu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new AP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Od(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($u(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ip="closure_lm_"+(1e6*Math.random()|0),oh={};function EE(t,e,n,r,i){if(r&&r.once)return SE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)EE(t,e[s],n,r,i);return null}return n=xp(n),t&&t[Yo]?t.O(e,n,Qo(r)?!!r.capture:!!r,i):_E(t,e,n,!1,r,i)}function _E(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Qo(i)?!!i.capture:!!i,a=Cp(t);if(a||(t[Ip]=a=new Mu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=OP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(IE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OP(){function t(n){return e.call(t.src,t.listener,n)}const e=bP;return t}function SE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)SE(t,e[s],n,r,i);return null}return n=xp(n),t&&t[Yo]?t.P(e,n,Qo(r)?!!r.capture:!!r,i):_E(t,e,n,!0,r,i)}function TE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);else r=Qo(r)?!!r.capture:!!r,n=xp(n),t&&t[Yo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bd(s,n,r,i),-1<n&&($u(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bd(e,n,r,i)),(n=-1<t?e[t]:null)&&kp(n))}function kp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yo])Od(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(IE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cp(e))?(Od(n,t),n.h==0&&(n.src=null,e[Ip]=null)):$u(t)}}}function IE(t){return t in oh?oh[t]:oh[t]="on"+t}function bP(t,e){if(t.fa)t=!0;else{e=new Io(e,this);var n=t.listener,r=t.la||t.src;t.ia&&kp(t),t=n.call(r,e)}return t}function Cp(t){return t=t[Ip],t instanceof Mu?t:null}var ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function xp(t){return typeof t=="function"?t:(t[ah]||(t[ah]=function(e){return t.handleEvent(e)}),t[ah])}function De(){wr.call(this),this.i=new Mu(this),this.S=this,this.J=null}Le(De,wr);De.prototype[Yo]=!0;De.prototype.removeEventListener=function(t,e,n,r){TE(this,t,e,n,r)};function je(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),wE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Oa(o,r,!0,e)&&i}if(o=e.g=t,i=Oa(o,r,!0,e)&&i,i=Oa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Oa(o,r,!1,e)&&i}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$u(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Oa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Od(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Rp=B.JSON.stringify;class DP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function LP(){var t=Np;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $P{constructor(){this.h=this.g=null}add(e,n){const r=kE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kE=new DP(()=>new MP,t=>t.reset());class MP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function UP(t){B.setTimeout(()=>{throw t},0)}let ko,Co=!1,Np=new $P,CE=()=>{const t=B.Promise.resolve(void 0);ko=()=>{t.then(jP)}};var jP=()=>{for(var t;t=LP();){try{t.h.call(t.g)}catch(n){UP(n)}var e=kE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Co=!1};function Fu(t,e){De.call(this),this.h=t||1,this.g=e||B,this.j=Ye(this.qb,this),this.l=Date.now()}Le(Fu,De);O=Fu.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),je(this,"tick"),this.ga&&(Ap(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ap(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Fu.$.N.call(this),Ap(this),delete this.g};function Pp(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function xE(t){t.g=Pp(()=>{t.g=null,t.i&&(t.i=!1,xE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VP extends wr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xE(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(t){wr.call(this),this.h=t,this.g={}}Le(xo,wr);var Cv=[];function RE(t,e,n,r){Array.isArray(n)||(n&&(Cv[0]=n.toString()),n=Cv);for(var i=0;i<n.length;i++){var s=EE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function NE(t){Tp(t.g,function(e,n){this.g.hasOwnProperty(n)&&kp(e)},t),t.g={}}xo.prototype.N=function(){xo.$.N.call(this),NE(this)};xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uu(){this.g=!0}Uu.prototype.Ea=function(){this.g=!1};function zP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function BP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ti(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WP(t,n)+(r?" "+r:"")})}function HP(t,e){t.info(function(){return"TIMEOUT: "+e})}Uu.prototype.info=function(){};function WP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Rp(n)}catch{return e}}var ri={},xv=null;function ju(){return xv=xv||new De}ri.Ta="serverreachability";function AE(t){Xe.call(this,ri.Ta,t)}Le(AE,Xe);function Ro(t){const e=ju();je(e,new AE(e))}ri.STAT_EVENT="statevent";function PE(t,e){Xe.call(this,ri.STAT_EVENT,t),this.stat=e}Le(PE,Xe);function it(t){const e=ju();je(e,new PE(e,t))}ri.Ua="timingevent";function OE(t,e){Xe.call(this,ri.Ua,t),this.size=e}Le(OE,Xe);function Xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Vu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Op(){}Op.prototype.h=null;function Rv(t){return t.h||(t.h=t.i())}function DE(){}var Jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function bp(){Xe.call(this,"d")}Le(bp,Xe);function Dp(){Xe.call(this,"c")}Le(Dp,Xe);var Dd;function zu(){}Le(zu,Op);zu.prototype.g=function(){return new XMLHttpRequest};zu.prototype.i=function(){return{}};Dd=new zu;function Zo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new xo(this),this.P=qP,t=Nd?125:void 0,this.V=new Fu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new LE}function LE(){this.i=null,this.g="",this.h=!1}var qP=45e3,Ld={},Wl={};O=Zo.prototype;O.setTimeout=function(t){this.P=t};function $d(t,e,n){t.L=1,t.v=Hu(An(e)),t.s=n,t.S=!0,$E(t,null)}function $E(t,e){t.G=Date.now(),ea(t),t.A=An(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),HE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new LE,t.g=h_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VP(Ye(t.Pa,t,t.g),t.O)),RE(t.U,t.g,"readystatechange",t.nb),e=t.I?yE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ro(),zP(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&tn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const h=tn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||Nd||this.g&&(this.h.h||this.g.ja()||Ov(this.g)))){this.J||h!=4||e==7||(e==8||0>=d?Ro(3):Ro(2)),Bu(this);var n=this.g.da();this.ca=n;t:if(ME(this)){var r=Ov(this.g);t="";var i=r.length,s=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),qs(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BP(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!To(a)){var u=a;break t}}u=null}if(n=u)Ti(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Md(this,n);else{this.i=!1,this.o=3,it(12),Ar(this),qs(this);break e}}this.S?(FE(this,h,o),Nd&&this.i&&h==3&&(RE(this.U,this.V,"tick",this.mb),this.V.start())):(Ti(this.j,this.m,o,null),Md(this,o)),h==4&&Ar(this),this.i&&!this.J&&(h==4?a_(this.l,this):(this.i=!1,ea(this)))}else fO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Ar(this),qs(this)}}}catch{}finally{}};function ME(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function FE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=KP(t,n),i==Wl){e==4&&(t.o=4,it(14),r=!1),Ti(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ld){t.o=4,it(15),Ti(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ti(t.j,t.m,i,null),Md(t,i);ME(t)&&i!=Wl&&i!=Ld&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),jp(e),e.M=!0,it(11))):(Ti(t.j,t.m,n,"[Invalid Chunked Response]"),Ar(t),qs(t))}O.mb=function(){if(this.g){var t=tn(this.g),e=this.g.ja();this.C<e.length&&(Bu(this),FE(this,t,e),this.i&&t!=4&&ea(this))}};function KP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wl:(n=Number(e.substring(n,r)),isNaN(n)?Ld:(r+=1,r+n>e.length?Wl:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,Ar(this)};function ea(t){t.Y=Date.now()+t.P,UE(t,t.P)}function UE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xo(Ye(t.lb,t),e)}function Bu(t){t.B&&(B.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HP(this.j,this.A),this.L!=2&&(Ro(),it(17)),Ar(this),this.o=2,qs(this)):UE(this,this.Y-t)};function qs(t){t.l.H==0||t.J||a_(t.l,t)}function Ar(t){Bu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ap(t.V),NE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Md(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Fd(n.i,t))){if(!t.K&&Fd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gl(n),Ku(n);else break e;Up(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xo(Ye(n.ib,n),6e3));if(1>=KE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pr(n,11)}else if((t.K||n.g==t)&&Gl(n),!To(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const c=u[5];c!=null&&typeof c=="number"&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Lp(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=c_(r,r.J?r.pa:null,r.Y),o.K){GE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Bu(a),ea(a)),r.g=o}else s_(r);0<n.j.length&&Gu(n)}else u[0]!="stop"&&u[0]!="close"||Pr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pr(n,7):Fp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ro(4)}catch{}}function GP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Du(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Du(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function jE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Du(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QP(t),r=GP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var VE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $r){this.h=t.h,ql(this,t.j),this.s=t.s,this.g=t.g,Kl(this,t.m),this.l=t.l;var e=t.i,n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nv(this,n),this.o=t.o}else t&&(e=String(t).match(VE))?(this.h=!1,ql(this,e[1]||"",!0),this.s=Ps(e[2]||""),this.g=Ps(e[3]||"",!0),Kl(this,e[4]),this.l=Ps(e[5]||"",!0),Nv(this,e[6]||"",!0),this.o=Ps(e[7]||"")):(this.h=!1,this.i=new No(null,this.h))}$r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,Av,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,Av,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?ZP:JP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,tO)),t.join("")};function An(t){return new $r(t)}function ql(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nv(t,e,n){e instanceof No?(t.i=e,nO(t.i,t.h)):(n||(e=Os(e,eO)),t.i=new No(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Hu(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Av=/[#\/\?@]/g,JP=/[#\?:]/g,ZP=/[#\?]/g,eO=/[#\?@]/g,tO=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Er(t){t.g||(t.g=new Map,t.h=0,t.i&&YP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=No.prototype;O.add=function(t,e){Er(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zE(t,e){Er(t),e=us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function BE(t,e){return Er(t),e=us(t,e),t.g.has(e)}O.forEach=function(t,e){Er(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){Er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){Er(this);let e=[];if(typeof t=="string")BE(this,t)&&(e=e.concat(this.g.get(us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Er(this),this.i=null,t=us(this,t),BE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function HE(t,e,n){zE(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),_p(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nO(t,e){e&&!t.j&&(Er(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zE(this,r),HE(this,i,n))},t)),t.j=e}var rO=class{constructor(t,e){this.g=t,this.map=e}};function WE(t){this.l=t||iO,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iO=10;function qE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function KE(t){return t.h?1:t.g?t.g.size:0}function Fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Lp(t,e){t.g?t.g.add(e):t.h=e}function GE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WE.prototype.cancel=function(){if(this.i=QE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function QE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _p(t.i)}var sO=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function oO(){this.g=new sO}function aO(t,e,n){const r=n||"";try{jE(t,function(i,s){let o=i;Qo(i)&&(o=Rp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function lO(t,e){const n=new Uu;if(B.Image){const r=new Image;r.onload=Pa(ba,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pa(ba,n,r,"TestLoadImage: error",!1,e),r.onabort=Pa(ba,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pa(ba,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ba(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ta(t){this.l=t.fc||null,this.j=t.ob||!1}Le(ta,Op);ta.prototype.g=function(){return new Wu(this.l,this.j)};ta.prototype.i=function(t){return function(){return t}}({});function Wu(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Wu,De);var $p=0;O=Wu.prototype;O.open=function(t,e){if(this.readyState!=$p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ao(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=$p};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;YE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function YE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?na(this):Ao(this),this.readyState==3&&YE(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,na(this))};O.Ya=function(t){this.g&&(this.response=t,na(this))};O.ka=function(){this.g&&na(this)};function na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ao(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uO=B.JSON.parse;function we(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=XE,this.L=this.M=!1}Le(we,De);var XE="",cO=/^https?$/i,hO=["POST","PUT"];O=we.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dd.g(),this.C=this.u?Rv(this.u):Rv(Dd),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Pv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=pE(hO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{e_(this),0<this.B&&((this.L=dO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=Pp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pv(this,s)}};function dO(t){return Wi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Ep<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Pv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,JE(t),qu(t)}function JE(t){t.F||(t.F=!0,je(t,"complete"),je(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),qu(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qu(this,!0)),we.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?ZE(this):this.kb())};O.kb=function(){ZE(this)};function ZE(t){if(t.h&&typeof Ep<"u"&&(!t.C[1]||tn(t)!=4||t.da()!=2)){if(t.v&&tn(t)==4)Pp(t.La,0,t);else if(je(t,"readystatechange"),tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(VE)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!cO.test(i?i.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var s=2<tn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",JE(t)}}finally{qu(t)}}}}function qu(t,e){if(t.g){e_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function e_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function tn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uO(e)}};function Ov(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case XE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fO(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(To(t[r]))continue;var n=FP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PP(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function t_(t){let e="";return Tp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Mp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=t_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function n_(t){this.Ga=0,this.j=[],this.l=new Uu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ts("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ts("baseRetryDelayMs",5e3,t),this.hb=Ts("retryDelaySeedMs",1e4,t),this.eb=Ts("forwardChannelMaxRetries",2,t),this.xa=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new WE(t&&t.concurrentRequestLimit),this.Ja=new oO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=n_.prototype;O.ra=8;O.H=1;function Fp(t){if(r_(t),t.H==3){var e=t.W++,n=An(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),ra(t,n),e=new Zo(t,t.l,e),e.L=2,e.v=Hu(An(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=h_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ea(e)}u_(t)}function Ku(t){t.g&&(jp(t),t.g.cancel(),t.g=null)}function r_(t){Ku(t),t.u&&(B.clearTimeout(t.u),t.u=null),Gl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Gu(t){if(!qE(t.i)&&!t.m){t.m=!0;var e=t.Na;ko||CE(),Co||(ko(),Co=!0),Np.add(e,t),t.C=0}}function pO(t,e){return KE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xo(Ye(t.Na,t,e),l_(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=yE(s),wE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=i_(this,i,e),n=An(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),ra(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(t_(s)))+"&"+e:this.o&&Mp(n,this.o,s)),Lp(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,$d(i,n,null)):$d(i,n,e),this.H=2}}else this.H==3&&(t?bv(this,t):this.j.length==0||qE(this.i)||bv(this))};function bv(t,e){var n;e?n=e.m:n=t.W++;const r=An(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),ra(t,r),t.o&&t.s&&Mp(r,t.o,t.s),n=new Zo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=i_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Lp(t.i,n),$d(n,r,e)}function ra(t,e){t.na&&Tp(t.na,function(n,r){ue(e,r,n)}),t.h&&jE({},function(n,r){ue(e,r,n)})}function i_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ye(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{aO(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function s_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ko||CE(),Co||(ko(),Co=!0),Np.add(e,t),t.A=0}}function Up(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xo(Ye(t.Ma,t),l_(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,o_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xo(Ye(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Ku(this),o_(this))};function jp(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function o_(t){t.g=new Zo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=An(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),ra(t,e),t.o&&t.s&&Mp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hu(An(e)),n.s=null,n.S=!0,$E(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Ku(this),Up(this),it(19))};function Gl(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function a_(t,e){var n=null;if(t.g==e){Gl(t),jp(t),t.g=null;var r=2}else if(Fd(t.i,e))n=e.F,GE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ju(),je(r,new OE(r,n)),Gu(t)}else s_(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&pO(t,e)||r==2&&Up(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Pr(t,5);break;case 4:Pr(t,10);break;case 3:Pr(t,6);break;default:Pr(t,2)}}}function l_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Pr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ye(t.pb,t);n||(n=new $r("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||ql(n,"https"),Hu(n)),lO(n.toString(),r)}else it(2);t.H=0,t.h&&t.h.za(e),u_(t),r_(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function u_(t){if(t.H=0,t.ma=[],t.h){const e=QE(t.i);(e.length!=0||t.j.length!=0)&&(Tv(t.ma,e),Tv(t.ma,t.j),t.i.i.length=0,_p(t.j),t.j.length=0),t.h.ya()}}function c_(t,e,n){var r=n instanceof $r?An(n):new $r(n);if(r.g!="")e&&(r.g=e+"."+r.g),Kl(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new $r(null);r&&ql(s,r),e&&(s.g=e),i&&Kl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),ra(t,r),r}function h_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new we(new ta({ob:!0})):new we(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function d_(){}O=d_.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Ql(){if(Wi&&!(10<=Number(xP)))throw Error("Environmental error: no available transport.")}Ql.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){De.call(this),this.g=new n_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!To(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!To(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cs(this)}Le(Tt,De);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=c_(t,null,t.Y),Gu(t)};Tt.prototype.close=function(){Fp(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rp(t),t=n);e.j.push(new rO(e.fb++,t)),e.H==3&&Gu(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Fp(this.g),delete this.g,Tt.$.N.call(this)};function f_(t){bp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(f_,bp);function p_(){Dp.call(this),this.status=1}Le(p_,Dp);function cs(t){this.g=t}Le(cs,d_);cs.prototype.Ba=function(){je(this.g,"a")};cs.prototype.Aa=function(t){je(this.g,new f_(t))};cs.prototype.za=function(t){je(this.g,new p_)};cs.prototype.ya=function(){je(this.g,"b")};function mO(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(qt,mO);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)lh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){lh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){lh(this,r),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var gO={};function Vp(t){return-128<=t&&128>t?IP(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function nn(t){if(isNaN(t)||!isFinite(t))return bi;if(0>t)return Fe(nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ud;return new te(e,0)}function m_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(m_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nn(Math.pow(e,8)),r=bi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=nn(Math.pow(e,s)),r=r.R(s).add(nn(o))):(r=r.R(n),r=r.add(nn(o)))}return r}var Ud=4294967296,bi=Vp(0),jd=Vp(1),Dv=Vp(16777216);O=te.prototype;O.ea=function(){if(Nt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ud+r)*e,e*=Ud}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tn(this))return"0";if(Nt(this))return"-"+Fe(this).toString(t);for(var e=nn(Math.pow(t,6)),n=this,r="";;){var i=Xl(n,e).g;n=Yl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Tn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}O.X=function(t){return t=Yl(this,t),Nt(t)?-1:Tn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(jd)}O.abs=function(){return Nt(this)?Fe(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function Yl(t,e){return t.add(Fe(e))}O.R=function(t){if(Tn(this)||Tn(t))return bi;if(Nt(this))return Nt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Nt(t))return Fe(this.R(Fe(t)));if(0>this.X(Dv)&&0>t.X(Dv))return nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Da(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Da(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Da(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Da(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function Da(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Is(t,e){this.g=t,this.h=e}function Xl(t,e){if(Tn(e))throw Error("division by zero");if(Tn(t))return new Is(bi,bi);if(Nt(t))return e=Xl(Fe(t),e),new Is(Fe(e.g),Fe(e.h));if(Nt(e))return e=Xl(t,Fe(e)),new Is(Fe(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jd,r=e;0>=r.X(t);)n=Lv(n),r=Lv(r);var i=ai(n,1),s=ai(r,1);for(r=ai(r,2),n=ai(n,2);!Tn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ai(r,1),n=ai(n,1)}return e=Yl(t,i.R(e)),new Is(i,e)}for(i=bi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=nn(n),o=s.R(e);Nt(o)||0<o.X(t);)n-=r,s=nn(n),o=s.R(e);Tn(s)&&(s=jd),i=i.add(s),t=Yl(t,o)}return new Is(i,t)}O.gb=function(t){return Xl(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function Lv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Ql.prototype.createWebChannel=Ql.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Vu.NO_ERROR=0;Vu.TIMEOUT=8;Vu.HTTP_ERROR=6;bE.COMPLETE="complete";DE.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";De.prototype.listen=De.prototype.O;we.prototype.listenOnce=we.prototype.P;we.prototype.getLastError=we.prototype.Sa;we.prototype.getLastErrorCode=we.prototype.Ia;we.prototype.getStatus=we.prototype.da;we.prototype.getResponseJson=we.prototype.Wa;we.prototype.getResponseText=we.prototype.ja;we.prototype.send=we.prototype.ha;we.prototype.setWithCredentials=we.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=nn;te.fromString=m_;var vO=function(){return new Ql},yO=function(){return ju()},uh=Vu,wO=bE,EO=ri,$v={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_O=ta,La=DE,SO=we,TO=qt,Di=te;const Mv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new ku("@firebase/firestore");function Fv(){return Kr.logLevel}function $(t,...e){if(Kr.logLevel<=J.DEBUG){const n=e.map(zp);Kr.debug(`Firestore (${hs}): ${t}`,...n)}}function Pn(t,...e){if(Kr.logLevel<=J.ERROR){const n=e.map(zp);Kr.error(`Firestore (${hs}): ${t}`,...n)}}function qi(t,...e){if(Kr.logLevel<=J.WARN){const n=e.map(zp);Kr.warn(`Firestore (${hs}): ${t}`,...n)}}function zp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function he(t,e){t||H()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class kO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CO{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new g_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new qe(e)}}class xO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class RO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new xO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class NO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.T=n.token,new NO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ne(0,0))}static max(){return new W(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Po{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const OO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Po{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return OO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ye.fromString(e))}static fromName(e){return new F(ye.fromString(e).popFirst(5))}static empty(){return new F(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ye(e.slice()))}}function bO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new dr(i,F.empty(),e)}function DO(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(W.min(),F.empty(),-1)}static max(){return new dr(W.max(),F.empty(),-1)}}function LO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==$O)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Bp.ct=-1;function Qu(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function FO(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Me.RED,this.left=i!=null?i:Me.EMPTY,this.right=s!=null?s:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jv(this.data.getIterator())}getIteratorFrom(e){return new jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new w_("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const UO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(he(!!t),typeof t=="string"){let e=0;const n=UO.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wp(t){const e=t.mapValue.fields.__previous_value__;return Hp(e)?Wp(e):e}function Oo(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class bo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hp(t)?4:VO(t)?9007199254740991:10:H()}function hn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=fr(r.timestampValue),o=fr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gr(r.bytesValue).isEqual(Gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?Jl(s)===Jl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Uv(s)!==Uv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!hn(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Do(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vv(t.timestampValue,e.timestampValue);case 4:return Vv(Oo(t),Oo(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Gr(i),a=Gr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Z(o[l],a[l]);if(u!==0)return u}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Se(i.latitude),Se(s.latitude));return o!==0?o:Z(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Gi(o[l],a[l]);if(u)return u}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ma.mapValue&&s===Ma.mapValue)return 0;if(i===Ma.mapValue)return 1;if(s===Ma.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=Z(a[h],u[h]);if(d!==0)return d;const c=Gi(o[a[h]],l[u[h]]);if(c!==0)return c}return Z(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Vv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=fr(t),r=fr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Qi(t){return Vd(t)}function Vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=fr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vd(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function zd(t){return!!t&&"integerValue"in t}function qp(t){return!!t&&"arrayValue"in t}function zv(t){return!!t&&"nullValue"in t}function Bv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ks(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Ks(this.value))}}function E_(t){const e=[];return ii(t.fields,(n,r)=>{const i=new Qe([n]);if(rl(r)){const s=E_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,W.min(),W.min(),W.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,W.min(),W.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,W.min(),W.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function Hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function zO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{}class xe extends __{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HO(e,n,r):n==="array-contains"?new KO(e,r):n==="in"?new GO(e,r):n==="not-in"?new QO(e,r):n==="array-contains-any"?new YO(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WO(e,r):new qO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dn extends __{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new dn(e,n)}matches(e){return S_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function S_(t){return t.op==="and"}function T_(t){return BO(t)&&S_(t)}function BO(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Bd(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(T_(t))return t.filters.map(e=>Bd(e)).join(",");{const e=t.filters.map(n=>Bd(n)).join(",");return`${t.op}(${e})`}}function I_(t,e){return t instanceof xe?function(n,r){return r instanceof xe&&n.op===r.op&&n.field.isEqual(r.field)&&hn(n.value,r.value)}(t,e):t instanceof dn?function(n,r){return r instanceof dn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&I_(s,r.filters[o]),!0):!1}(t,e):void H()}function k_(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Qi(e.value)}`}(t):t instanceof dn?function(e){return e.op.toString()+" {"+e.getFilters().map(k_).join(" ,")+"}"}(t):"Filter"}class HO extends xe{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class WO extends xe{constructor(e,n){super(e,"in",n),this.keys=C_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qO extends xe{constructor(e,n){super(e,"not-in",n),this.keys=C_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class KO extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qp(n)&&Do(n.arrayValue,this.value)}}class GO extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class QO extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Do(this.value.arrayValue,n)}}class YO extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XO(t,e,n,r,i,s,o)}function Kp(t){const e=q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e.dt=n}return e.dt}function Gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wv(t.startAt,e.startAt)&&Wv(t.endAt,e.endAt)}function Hd(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function JO(t,e,n,r,i,s,o,a){return new Yu(t,e,n,r,i,s,o,a)}function Qp(t){return new Yu(t)}function Kv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eb(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function tb(t){return t.collectionGroup!==null}function Li(t){const e=q(t);if(e.wt===null){e.wt=[];const n=eb(e),r=ZO(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Gs(n)),e.wt.push(new Gs(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Gs(Qe.keyField(),s))}}}return e.wt}function On(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=qv(e.path,e.collectionGroup,Li(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Li(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Gs(s.field,o))}const r=e.endAt?new Zl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zl(e.startAt.position,e.startAt.inclusive):null;e._t=qv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Wd(t,e,n){return new Yu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return Gp(On(t),On(e))&&t.limitType===e.limitType}function x_(t){return`${Kp(On(t))}|lt:${t.limitType}`}function qd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>k_(r)).join(", ")}]`),Qu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Li(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Hv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Li(n),r)||n.endAt&&!function(i,s,o){const a=Hv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Li(n),r))}(t,e)}function nb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let r=!1;for(const i of Li(t)){const s=rb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rb(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Gi(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return y_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new ge(F.comparator);function bn(){return ib}const N_=new ge(F.comparator);function bs(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function A_(t){let e=N_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return Qs()}function P_(){return Qs()}function Qs(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const sb=new ge(F.comparator),ob=new Je(F.comparator);function Q(...t){let e=ob;for(const n of t)e=e.add(n);return e}const ab=new Je(Z);function lb(){return ab}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function b_(t){return{integerValue:""+t}}function ub(t,e){return FO(e)?b_(e):O_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function cb(t,e,n){return t instanceof eu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Hp(i)&&(i=Wp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Yi?L_(t,e):t instanceof Xi?$_(t,e):function(r,i){const s=D_(r,i),o=Gv(s)+Gv(r.gt);return zd(s)&&zd(r.gt)?b_(o):O_(r.serializer,o)}(t,e)}function hb(t,e,n){return t instanceof Yi?L_(t,e):t instanceof Xi?$_(t,e):n}function D_(t,e){return t instanceof tu?zd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class eu extends Zu{}class Yi extends Zu{constructor(e){super(),this.elements=e}}function L_(t,e){const n=M_(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xi extends Zu{constructor(e){super(),this.elements=e}}function $_(t,e){let n=M_(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class tu extends Zu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Gv(t){return Se(t.integerValue||t.doubleValue)}function M_(t){return qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.field=e,this.transform=n}}function db(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Yi&&r instanceof Yi||n instanceof Xi&&r instanceof Xi?Ki(n.elements,r.elements,hn):n instanceof tu&&r instanceof tu?hn(n.gt,r.gt):n instanceof eu&&r instanceof eu}(t.transform,e.transform)}class fb{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function U_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new V_(t.key,ln.none()):new oa(t.key,t.data,ln.none());{const n=t.data,r=ct.empty();let i=new Je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(t.key,r,new yt(i.toArray()),ln.none())}}function pb(t,e,n){t instanceof oa?function(r,i,s){const o=r.value.clone(),a=Yv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(r,i,s){if(!il(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Yv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(j_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof oa?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=i.value.clone(),u=Xv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=Xv(i.fieldTransforms,a,s),u=s.data;return u.setAll(j_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return il(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function mb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=D_(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Qv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ki(n,r,(i,s)=>db(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oa extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function j_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yv(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hb(o,a,n[i]))}return r}function Xv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cb(s,o,e))}return r}class V_ extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gb extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=U_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>Qv(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>Qv(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=sb;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Y;function Eb(t){switch(t){default:return H();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function z_(t){if(t===void 0)return Pn("GRPC error has no .code"),R.UNKNOWN;switch(t){case _e.OK:return R.OK;case _e.CANCELLED:return R.CANCELLED;case _e.UNKNOWN:return R.UNKNOWN;case _e.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case _e.INTERNAL:return R.INTERNAL;case _e.UNAVAILABLE:return R.UNAVAILABLE;case _e.UNAUTHENTICATED:return R.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case _e.NOT_FOUND:return R.NOT_FOUND;case _e.ALREADY_EXISTS:return R.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return R.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case _e.ABORTED:return R.ABORTED;case _e.OUT_OF_RANGE:return R.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return R.UNIMPLEMENTED;case _e.DATA_LOSS:return R.DATA_LOSS;default:return H()}}(Y=_e||(_e={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fa}static getOrCreateInstance(){return Fa===null&&(Fa=new Xp),Fa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new Di([4294967295,4294967295],0);function Jv(t){const e=_b().encode(t),n=new TO;return n.update(e),new Uint8Array(n.digest())}function Zv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Di([n,r],0),new Di([i,s],0)]}class Jp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Di.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Di.fromNumber(r)));return i.compare(Sb)===1&&(i=new Di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Jv(e),[r,i]=Zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Jv(e),[r,i]=Zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(W.min(),i,new ge(Z),bn(),Q())}}class aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new aa(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class B_{constructor(e,n){this.targetId=e,this.Vt=n}}class H_{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ey{constructor(){this.St=0,this.Dt=ny(),this.Ct=tt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Q(),n=Q(),r=Q();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new aa(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=ny()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Tb{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=bn(),this.zt=ty(),this.Wt=new ge(Z)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Hd(o))if(i===0){const a=new F(o.path);this.Yt(r,a,Ge.newNoDocument(a,W.min()))}else he(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Xp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,h,d){var c,f,m,v,_,g;const p={localCacheCount:h,existenceFilterCount:d.count},y=d.unchangedNames;return y&&(p.bloomFilter={applied:u===0,hashCount:(c=y==null?void 0:y.hashCount)!==null&&c!==void 0?c:0,bitmapLength:(v=(m=(f=y==null?void 0:y.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(g=(_=y==null?void 0:y.bits)===null||_===void 0?void 0:_.padding)!==null&&g!==void 0?g:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Gr(s).toUint8Array()}catch(h){if(h instanceof w_)return qi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{u=new Jp(l,o,a)}catch(h){return qi(h instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Hd(a.target)){const l=new F(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ge.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Q();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.Wt,this.jt,r);return this.jt=bn(),this.zt=ty(),this.Wt=new ge(Z),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ey,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Je(Z),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ey),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ty(){return new ge(F.comparator)}function ny(){return new ge(F.comparator)}const Ib=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cb=(()=>({and:"AND",or:"OR"}))();class xb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kd(t,e){return t.useProto3Json||Qu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rb(t,e){return nu(t,e.toTimestamp())}function un(t){return he(!!t),W.fromTimestamp(function(e){const n=fr(e);return new Ne(n.seconds,n.nanos)}(t))}function Zp(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function q_(t){const e=ye.fromString(t);return he(Y_(e)),e}function Gd(t,e){return Zp(t.databaseId,e.path)}function ch(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new M(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(K_(n))}function Qd(t,e){return Zp(t.databaseId,e)}function Nb(t){const e=q_(t);return e.length===4?ye.emptyPath():K_(e)}function Yd(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K_(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ry(t,e,n){return{name:Gd(t,e),fields:n.value.mapValue.fields}}function Ab(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(he(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:z_(l.code);return new M(u,l.message||"")}(o);n=new H_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ch(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):W.min(),a=new ct({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new sl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ch(t,r.document),s=r.readTime?un(r.readTime):W.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ch(t,r.document),s=r.removedTargetIds||[];n=new sl([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wb(i,s),a=r.targetId;n=new B_(a,o)}}return n}function Pb(t,e){let n;if(e instanceof oa)n={update:ry(t,e.key,e.value)};else if(e instanceof V_)n={delete:Gd(t,e.key)};else if(e instanceof _r)n={update:ry(t,e.key,e.data),updateMask:jb(e.fieldMask)};else{if(!(e instanceof gb))return H();n={verify:Gd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof eu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Yi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Rb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function Ob(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?un(r.updateTime):un(i);return s.isEqual(W.min())&&(s=un(i)),new fb(s,r.transformResults||[])}(n,e))):[]}function bb(t,e){return{documents:[Qd(t,e.path)]}}function Db(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Q_(dn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:li(h.field),direction:Mb(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Kd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Lb(t){let e=Nb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(h){const d=G_(h);return d instanceof dn&&T_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new Gs(ui(d.field),function(c){switch(c){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Qu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,c=h.values||[];return new Zl(c,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,c=h.values||[];return new Zl(c,d)}(n.endAt)),JO(e,i,o,s,a,"F",l,u)}function $b(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function G_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ui(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ui(e.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ui(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ui(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(ui(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dn.create(e.compositeFilter.filters.map(n=>G_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function Mb(t){return Ib[t]}function Fb(t){return kb[t]}function Ub(t){return Cb[t]}function li(t){return{fieldPath:t.canonicalString()}}function ui(t){return Qe.fromServerFormat(t.fieldPath)}function Q_(t){return t instanceof xe?function(e){if(e.op==="=="){if(Bv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NAN"}};if(zv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NOT_NAN"}};if(zv(e.value))return{unaryFilter:{field:li(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(e.field),op:Fb(e.op),value:e.value}}}(t):t instanceof dn?function(e){const n=e.getFilters().map(r=>Q_(r));return n.length===1?n[0]:{compositeFilter:{op:Ub(e.op),filters:n}}}(t):H()}function jb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,i,s=W.min(),o=W.min(),a=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.fe=e}}function zb(t){const e=Lb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.rn=new Hb}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(dr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Hb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ji(0)}static Mn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,yt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bn();const o=Qs(),a=Qs();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof _r)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ys(h.mutation,u,h.mutation.getFieldMask(),Ne.now())):o.set(u.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new qb(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new ge((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||yt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=P_();h.forEach(c=>{if(!s.has(c)){const f=U_(n.get(c),r.get(c));f!==null&&d.set(c,f),s=s.add(c)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Or());let a=-1,l=s;return o.next(u=>A.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?A.resolve():this.remoteDocumentCache.getEntry(e,h).next(c=>{l=l.insert(h,c)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(h=>({batchId:a,changes:A_(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=bs();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,h){return new Yu(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,d)=>{s=s.insert(h,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ge.newInvalidDocument(u)))});let o=bs();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ys(u.mutation,l,yt.empty(),Ne.now()),Ju(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:un(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:zb(r.bundledQuery),readTime:un(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.overlays=new ge(F.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Or(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return A.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yb(n,r));let s=this.ls.get(n);s===void 0&&(s=Q(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.fs=new Je(Pe.ds),this.ws=new Je(Pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Pe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new F(new ye([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new F(new ye([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=Q();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return F.comparator(e.key,n.key)||Z(e.As,n.As)}static _s(e,n){return Z(e.As,n.As)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Je(Pe.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(Z);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),A.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new F(s),0);let a=new Je(Z);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return A.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.Rs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.Ds=e,this.docs=new ge(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||LO(DO(h),r)<=0||(i.has(h.key)||Ju(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Cs(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jb(this)}getSize(e){return A.resolve(this.size)}}class Jb extends Wb{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.persistence=e,this.xs=new ds(n=>Kp(n),Gp),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new em,this.targetCount=0,this.Ms=Ji.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n){this.$s={},this.overlays={},this.Os=new Bp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Zb(this),this.indexManager=new Bb,this.remoteDocumentCache=function(r){return new Xb(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Vb(n),this.qs=new Gb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new Yb(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new tD(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return A.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class tD extends MO{constructor(e){super(),this.currentSequenceNumber=e}}class tm{constructor(e){this.persistence=e,this.Qs=new em,this.js=null}static zs(e){return new tm(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,r=>{const i=F.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Kv(n))return A.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wd(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Wd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Kv(n)||i.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Fv()<=J.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qd(n)),this.Wi(e,o,n,bO(i,-1)))})}ji(e,n){let r=new Je(R_(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Fv()<=J.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",qd(n)),this.Ui.getDocumentsMatchingQuery(e,n,dr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ge(Z),this.Yi=new ds(s=>Kp(s),Gp),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kb(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function iD(t,e,n,r){return new rD(t,e,n,r)}async function X_(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function sD(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,d=h.keys();let c=A.resolve();return d.forEach(f=>{c=c.next(()=>u.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);he(v!==null),m.version.compareTo(v)<0&&(h.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),c.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function J_(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function oD(t,e){const n=q(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((h,d)=>{const c=i.get(d);if(!c)return;a.push(n.Bs.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,h.addedDocuments,d)));let f=c.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,r)),i=i.insert(d,f),function(m,v,_){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(c,f,h)&&a.push(n.Bs.updateTargetData(s,f))});let l=bn(),u=Q();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(aD(s,o,e.documentUpdates).next(h=>{l=h.nr,u=h.sr})),!r.isEqual(W.min())){const h=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function aD(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function lD(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uD(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Xd(t,e,n){const r=q(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sa(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function iy(t,e,n){const r=q(t);let i=W.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=q(a),d=h.Yi.get(u);return d!==void 0?A.resolve(h.Ji.get(d)):h.Bs.getTargetData(l,u)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:Q())).next(a=>(cD(r,nb(e),a),{documents:a,ir:s})))}function cD(t,e,n){let r=t.Xi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class sy{constructor(){this.activeTargetIds=lb()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hD{constructor(){this.Hr=new sy,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua=null;function hh(){return Ua===null?Ua=268435456+Math.round(2147483648*Math.random()):Ua++,"0x"+Ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class mD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=hh(),a=this.To(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>($("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw qi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=fD[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=hh();return new Promise((o,a)=>{const l=new SO;l.setWithCredentials(!0),l.listenOnce(wO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uh.NO_ERROR:const h=l.getResponseJson();$(He,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case uh.TIMEOUT:$(He,`RPC '${e}' ${s} timed out`),a(new M(R.DEADLINE_EXCEEDED,"Request time out"));break;case uh.HTTP_ERROR:const d=l.getStatus();if($(He,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let c=l.getResponseJson();Array.isArray(c)&&(c=c[0]);const f=c==null?void 0:c.error;if(f&&f.status&&f.message){const m=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(_)>=0?_:R.UNKNOWN}(f.status);a(new M(m,f.message))}else a(new M(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(R.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{$(He,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(He,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=hh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vO(),a=yO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new _O({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");$(He,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let c=!1,f=!1;const m=new pD({ro:_=>{f?$(He,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(c||($(He,`Opening RPC '${e}' stream ${i} transport.`),d.open(),c=!0),$(He,`RPC '${e}' stream ${i} sending:`,_),d.send(_))},oo:()=>d.close()}),v=(_,g,p)=>{_.listen(g,y=>{try{p(y)}catch(w){setTimeout(()=>{throw w},0)}})};return v(d,La.EventType.OPEN,()=>{f||$(He,`RPC '${e}' stream ${i} transport opened.`)}),v(d,La.EventType.CLOSE,()=>{f||(f=!0,$(He,`RPC '${e}' stream ${i} transport closed`),m.wo())}),v(d,La.EventType.ERROR,_=>{f||(f=!0,qi(He,`RPC '${e}' stream ${i} transport errored:`,_),m.wo(new M(R.UNAVAILABLE,"The operation could not be completed")))}),v(d,La.EventType.MESSAGE,_=>{var g;if(!f){const p=_.data[0];he(!!p);const y=p,w=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(w){$(He,`RPC '${e}' stream ${i} received error:`,w);const S=w.status;let E=function(I){const x=_e[I];if(x!==void 0)return z_(x)}(S),T=w.message;E===void 0&&(E=R.INTERNAL,T="Unknown error status: "+S+" with message "+w.message),f=!0,m.wo(new M(E,T)),d.close()}else $(He,`RPC '${e}' stream ${i} received:`,p),m._o(p)}}),v(a,EO.STAT_EVENT,_=>{_.stat===$v.PROXY?$(He,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===$v.NOPROXY&&$(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.fo()},0),m}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return new xb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Z_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new M(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gD extends eS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Ab(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?un(s.readTime):W.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Yd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Hd(a)?{documents:bb(i,a)}:{query:Db(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=W_(i,s.resumeToken);const l=Kd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(W.min())>0){o.readTime=nu(i,s.snapshotVersion.toTimestamp());const l=Kd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=$b(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Yd(this.serializer),n.removeTarget=e,this.Wo(n)}}class vD extends eS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Ob(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.cu(r,n)}return he(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Yd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pb(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(R.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(R.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class wD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Pn(n),this.mu=!1):$("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{si(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.vu.add(4),await la(l),l.bu.set("Unknown"),l.vu.delete(4),await rc(l)}(this))})}),this.bu=new wD(r,i)}}async function rc(t){if(si(t))for(const e of t.Ru)await e(!0)}async function la(t){for(const e of t.Ru)await e(!1)}function tS(t,e){const n=q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),sm(n)?im(n):fs(n).Ko()&&rm(n,e))}function nS(t,e){const n=q(t),r=fs(n);n.Au.delete(e),r.Ko()&&rS(n,e),n.Au.size===0&&(r.Ko()?r.jo():si(n)&&n.bu.set("Unknown"))}function rm(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).su(e)}function rS(t,e){t.Vu.qt(e),fs(t).iu(e)}function im(t){t.Vu=new Tb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.bu.gu()}function sm(t){return si(t)&&!fs(t).Uo()&&t.Au.size>0}function si(t){return q(t).vu.size===0}function iS(t){t.Vu=void 0}async function _D(t){t.Au.forEach((e,n)=>{rm(t,e)})}async function SD(t,e){iS(t),sm(t)?(t.bu.Iu(e),im(t)):t.bu.set("Unknown")}async function TD(t,e,n){if(t.bu.set("Online"),e instanceof H_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof sl?t.Vu.Ht(e):e instanceof B_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const r=await J_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),rS(i,a);const h=new Yn(u.target,a,l,u.sequenceNumber);rm(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!sa(e))throw e;t.vu.add(1),await la(t),t.bu.set("Offline"),n||(n=()=>J_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await rc(t)})}function sS(t,e){return e().catch(n=>ru(t,n,e))}async function ic(t){const e=q(t),n=pr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ID(e);)try{const i=await lD(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,kD(e,i)}catch(i){await ru(e,i)}oS(e)&&aS(e)}function ID(t){return si(t)&&t.Eu.length<10}function kD(t,e){t.Eu.push(e);const n=pr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function oS(t){return si(t)&&!pr(t).Uo()&&t.Eu.length>0}function aS(t){pr(t).start()}async function CD(t){pr(t).hu()}async function xD(t){const e=pr(t);for(const n of t.Eu)e.uu(n.mutations)}async function RD(t,e,n){const r=t.Eu.shift(),i=Yp.from(r,e,n);await sS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ic(t)}async function ND(t,e){e&&pr(t).ou&&await async function(n,r){if(i=r.code,Eb(i)&&i!==R.ABORTED){const s=n.Eu.shift();pr(n).Qo(),await sS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ic(n)}var i}(t,e),oS(t)&&aS(t)}async function ay(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=si(n);n.vu.add(3),await la(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await rc(n)}async function AD(t,e){const n=q(t);e?(n.vu.delete(2),await rc(n)):e||(n.vu.add(2),await la(n),n.bu.set("Unknown"))}function fs(t){return t.Su||(t.Su=function(e,n,r){const i=q(e);return i.fu(),new gD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:_D.bind(null,t),ao:SD.bind(null,t),nu:TD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),sm(t)?im(t):t.bu.set("Unknown")):(await t.Su.stop(),iS(t))})),t.Su}function pr(t){return t.Du||(t.Du=function(e,n,r){const i=q(e);return i.fu(),new vD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:CD.bind(null,t),ao:ND.bind(null,t),au:xD.bind(null,t),cu:RD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ic(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new om(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),sa(t))return new M(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=bs(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.Cu=new ge(F.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zi(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.Nu=void 0,this.listeners=[]}}class OD{constructor(){this.queries=new ds(e=>x_(e),Xu),this.onlineState="Unknown",this.ku=new Set}}async function bD(t,e){const n=q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new PD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=am(o,`Initialization of query '${qd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&lm(n)}async function DD(t,e){const n=q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function LD(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&lm(n)}function $D(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function lm(t){t.ku.forEach(e=>{e.next()})}class MD{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.key=e}}class uS{constructor(e){this.key=e}}class FD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Q(),this.mutatedKeys=Q(),this.tc=R_(e),this.ec=new $i(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new ly,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const c=i.get(h),f=Ju(this.query,d)?d:null,m=!!c&&this.mutatedKeys.has(c.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;c&&f?c.data.isEqual(f.data)?m!==v&&(r.track({type:3,doc:f}),_=!0):this.rc(c,f)||(r.track({type:2,doc:f}),_=!0,(l&&this.tc(f,l)>0||u&&this.tc(f,u)<0)&&(a=!0)):!c&&f?(r.track({type:0,doc:f}),_=!0):c&&!f&&(r.track({type:1,doc:c}),_=!0,(l||u)&&(a=!0)),_&&(f?(o=o.add(f),s=v?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,h)=>function(d,c){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return f(d)-f(c)}(u.type,h.type)||this.tc(u.doc,h.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Zi(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ly,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Q(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new uS(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new lS(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Zi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class UD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jD{constructor(e){this.key=e,this.fc=!1}}class VD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ds(a=>x_(a),Xu),this._c=new Map,this.mc=new Set,this.gc=new ge(F.comparator),this.yc=new Map,this.Ic=new em,this.Tc={},this.Ec=new Map,this.Ac=Ji.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function zD(t,e){const n=JD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await uD(n.localStore,On(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await BD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&tS(n.remoteStore,o)}return i}async function BD(t,e,n,r,i){t.Rc=(d,c,f)=>async function(m,v,_,g){let p=v.view.sc(_);p.zi&&(p=await iy(m.localStore,v.query,!1).then(({documents:S})=>v.view.sc(S,p)));const y=g&&g.targetChanges.get(v.targetId),w=v.view.applyChanges(p,m.isPrimaryClient,y);return cy(m,v.targetId,w.cc),w.snapshot}(t,d,c,f);const s=await iy(t.localStore,e,!0),o=new FD(e,s.ir),a=o.sc(s.documents),l=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);cy(t,n,u.cc);const h=new UD(e,n,o);return t.wc.set(e,h),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function HD(t,e){const n=q(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Xu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nS(n.remoteStore,r.targetId),Jd(n,r.targetId)}).catch(ia)):(Jd(n,r.targetId),await Xd(n.localStore,r.targetId,!0))}async function WD(t,e,n){const r=ZD(t);try{const i=await function(s,o){const a=q(s),l=Ne.now(),u=o.reduce((c,f)=>c.add(f.key),Q());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",c=>{let f=bn(),m=Q();return a.Zi.getEntries(c,u).next(v=>{f=v,f.forEach((_,g)=>{g.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(c,f)).next(v=>{h=v;const _=[];for(const g of o){const p=mb(g,h.get(g.key).overlayedDocument);p!=null&&_.push(new _r(g.key,p,E_(p.value.mapValue),ln.exists(!0)))}return a.mutationQueue.addMutationBatch(c,l,_,o)}).next(v=>{d=v;const _=v.applyToLocalDocumentSet(h,m);return a.documentOverlayCache.saveOverlays(c,v.batchId,_)})}).then(()=>({batchId:d.batchId,changes:A_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ge(Z)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await ua(r,i.changes),await ic(r.remoteStore)}catch(i){const s=am(i,"Failed to persist write");n.reject(s)}}async function cS(t,e){const n=q(t);try{const r=await oD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?he(o.fc):i.removedDocuments.size>0&&(he(o.fc),o.fc=!1))}),await ua(n,r,e)}catch(r){await ia(r)}}function uy(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Mu(o)&&(l=!0)}),l&&lm(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qD(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ge(F.comparator);o=o.insert(s,Ge.newNoDocument(s,W.min()));const a=Q().add(s),l=new tc(W.min(),new Map,new ge(Z),o,a);await cS(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),um(r)}else await Xd(r.localStore,e,!1).then(()=>Jd(r,e,n)).catch(ia)}async function KD(t,e){const n=q(t),r=e.batch.batchId;try{const i=await sD(n.localStore,e);dS(n,r,null),hS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,i)}catch(i){await ia(i)}}async function GD(t,e,n){const r=q(t);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(he(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);dS(r,e,n),hS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,i)}catch(i){await ia(i)}}function hS(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function dS(t,e,n){const r=q(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Jd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||fS(t,r)})}function fS(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(nS(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),um(t))}function cy(t,e,n){for(const r of n)r instanceof lS?(t.Ic.addReference(r.key,e),QD(t,r)):r instanceof uS?($("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||fS(t,r.key)):H()}function QD(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||($("SyncEngine","New document in limbo: "+n),t.mc.add(r),um(t))}function um(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new F(ye.fromString(e)),r=t.Ac.next();t.yc.set(r,new jD(n)),t.gc=t.gc.insert(n,r),tS(t.remoteStore,new Yn(On(Qp(n.path)),r,"TargetPurposeLimboResolution",Bp.ct))}}async function ua(t,e,n){const r=q(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=nm.Li(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.Fi,c=>u.persistence.referenceDelegate.addReference(h,d.targetId,c)).next(()=>A.forEach(d.Bi,c=>u.persistence.referenceDelegate.removeReference(h,d.targetId,c)))))}catch(h){if(!sa(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const c=u.Ji.get(d),f=c.snapshotVersion,m=c.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(d,m)}}}(r.localStore,s))}async function YD(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await X_(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(R.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.er)}}function XD(t,e){const n=q(t),r=n.yc.get(e);if(r&&r.fc)return Q().add(r.key);{let i=Q();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function JD(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qD.bind(null,e),e.dc.nu=LD.bind(null,e.eventManager),e.dc.Pc=$D.bind(null,e.eventManager),e}function ZD(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GD.bind(null,e),e}class hy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return iD(this.persistence,new nD,e.initialUser,this.serializer)}createPersistence(e){return new eD(tm.zs,this.serializer)}createSharedClientState(e){return new hD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YD.bind(null,this.syncEngine),await AD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OD}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new mD(i));var i;return function(s,o,a,l){return new yD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>uy(this.syncEngine,a,0),o=oy.D()?new oy:new dD,new ED(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new VD(r,i,s,o,a,l);return u&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);$("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await la(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=v_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iL(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ay(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ay(e.remoteStore,s)),t._onlineComponents=e}function rL(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rL(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new hy)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new hy);return t._offlineComponents}async function pS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await dy(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await dy(t,new eL))),t._onlineComponents}function sL(t){return pS(t).then(e=>e.syncEngine)}async function oL(t){const e=await pS(t),n=e.eventManager;return n.onListen=zD.bind(null,e.syncEngine),n.onUnlisten=HD.bind(null,e.syncEngine),n}function aL(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new tL({next:d=>{s.enqueueAndForget(()=>DD(i,h));const c=d.docs.has(o);!c&&d.fromCache?l.reject(new M(R.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&d.fromCache&&a&&a.source==="server"?l.reject(new M(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new MD(Qp(o.path),u,{includeMetadataChanges:!0,Ku:!0});return bD(i,h)}(await oL(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t,e,n){if(!n)throw new M(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uL(t,e,n,r){if(e===!0&&r===!0)throw new M(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function py(t){if(!F.isDocumentKey(t))throw new M(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cm(t);throw new M(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class hm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IO;switch(n.type){case"firstParty":return new RO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fy.get(e);n&&($("ComponentProvider","Removing Datastore"),fy.delete(e),n.terminate())}(this),Promise.resolve()}}function cL(t,e,n,r={}){var i;const s=(t=Yr(t,hm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qe.MOCK_USER;else{a=vC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qe(u)}t._authCredentials=new kO(new g_(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class dm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dm(this.firestore,e,this._query)}}class Lo extends dm{constructor(e,n,r){super(e,n,Qp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new F(e))}withConverter(e){return new Lo(this.firestore,e,this._path)}}function ML(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=v_.A()),lL("doc","path",e),t instanceof hm){const r=ye.fromString(e,...n);return py(r),new _t(t,null,new F(r))}{if(!(t instanceof _t||t instanceof Lo))throw new M(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return py(r),new _t(t.firestore,t instanceof Lo?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Z_(this,"async_queue_retry"),this.Xc=()=>{const n=dh();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=dh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ur;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!sa(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=om.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class sc extends hm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new hL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vS(this),this._firestoreClient.terminate()}}function dL(t,e){const n=typeof t=="object"?t:ep(),r=typeof t=="string"?t:e||"(default)",i=ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mC("firestore");s&&cL(i,...s)}return i}function gS(t){return t._firestoreClient||vS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new jO(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mS(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nL(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new es(tt.fromBase64String(e))}catch(n){throw new M(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new es(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=/^__.*__$/;class pL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class yS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class ac{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return iu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(wS(this.ca)&&fL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class mL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}ya(e,n,r,i=!1){return new ac({ca:e,methodName:n,ga:r,path:Qe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ES(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new mL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gL(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);pm("Data must be an object, but it was:",o,r);const a=SS(r,o);let l,u;if(s.merge)l=new yt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const c=Zd(e,d,n);if(!o.contains(c))throw new M(R.INVALID_ARGUMENT,`Field '${c}' is specified in your field mask but missing from your input data.`);IS(h,c)||h.push(c)}l=new yt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new pL(new ct(a),l,u)}class lc extends ca{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function _S(t,e,n){return new ac({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vL extends ca{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=_S(this,e,!0),r=this.pa.map(s=>ps(s,n)),i=new Yi(r);return new F_(e.path,i)}isEqual(e){return this===e}}class yL extends ca{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=_S(this,e,!0),r=this.pa.map(s=>ps(s,n)),i=new Xi(r);return new F_(e.path,i)}isEqual(e){return this===e}}function wL(t,e,n,r){const i=t.ya(1,e,n);pm("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ii(r,(l,u)=>{const h=mm(e,l,n);u=Ae(u);const d=i.da(h);if(u instanceof lc)s.push(h);else{const c=ps(u,d);c!=null&&(s.push(h),o.set(h,c))}});const a=new yt(s);return new yS(o,a,i.fieldTransforms)}function EL(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Zd(e,r,n)],l=[i];if(s.length%2!=0)throw new M(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Zd(e,s[c])),l.push(s[c+1]);const u=[],h=ct.empty();for(let c=a.length-1;c>=0;--c)if(!IS(u,a[c])){const f=a[c];let m=l[c];m=Ae(m);const v=o.da(f);if(m instanceof lc)u.push(f);else{const _=ps(m,v);_!=null&&(u.push(f),h.set(f,_))}}const d=new yt(u);return new yS(h,d,o.fieldTransforms)}function ps(t,e){if(TS(t=Ae(t)))return pm("Unsupported field value:",e,t),SS(t,e);if(t instanceof ca)return function(n,r){if(!wS(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ps(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ub(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ne.fromDate(n);return{timestampValue:nu(r.serializer,i)}}if(n instanceof Ne){const i=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nu(r.serializer,i)}}if(n instanceof fm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof es)return{bytesValue:W_(r.serializer,n._byteString)};if(n instanceof _t){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${cm(n)}`)}(t,e)}function SS(t,e){const n={};return y_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=ps(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof fm||t instanceof es||t instanceof _t||t instanceof ca)}function pm(t,e,n){if(!TS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=cm(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Zd(t,e,n){if((e=Ae(e))instanceof oc)return e._internalPath;if(typeof e=="string")return mm(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const _L=new RegExp("[~\\*/\\[\\]]");function mm(t,e,n){if(e.search(_L)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oc(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(R.INVALID_ARGUMENT,a+t+l)}function IS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SL extends kS{data(){return super.data()}}function CS(t,e){return typeof e=="string"?mm(t,e):e instanceof oc?e._internalPath:e._delegate._internalPath}class TL{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new fm(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=fr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);he(Y_(r));const i=new bo(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xS extends kS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new CL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class CL extends xS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(t){t=Yr(t,_t);const e=Yr(t.firestore,sc);return aL(gS(e),t._key).then(n=>RL(e,t,n))}class xL extends TL{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function UL(t,e,n){t=Yr(t,_t);const r=Yr(t.firestore,sc),i=IL(t.converter,e,n);return RS(r,[gL(ES(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function jL(t,e,n,...r){t=Yr(t,_t);const i=Yr(t.firestore,sc),s=ES(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof oc?EL(s,"updateDoc",t._key,e,n,r):wL(s,"updateDoc",t._key,e),RS(i,[o.toMutation(t._key,ln.exists(!0))])}function RS(t,e){return function(n,r){const i=new ur;return n.asyncQueue.enqueueAndForget(async()=>WD(await sL(n),r,i)),i.promise}(gS(t),e)}function RL(t,e,n){const r=n.docs.get(e._key),i=new xL(t);return new xS(t,i,e._key,r,new kL(n.hasPendingWrites,n.fromCache),e.converter)}function VL(...t){return new vL("arrayUnion",t)}function zL(...t){return new yL("arrayRemove",t)}(function(t,e=!0){(function(n){hs=n})(ss),cn(new Bt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new sc(new CO(n.getProvider("auth-internal")),new AO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ot(Mv,"3.13.0",t),Ot(Mv,"3.13.0","esm2017")})();const NL={apiKey:"AIzaSyBIhBiO3flFpAcL2Fm_Ef22QQo6udFp5b4",authDomain:"react-netflix-eb4f0.firebaseapp.com",projectId:"react-netflix-eb4f0",storageBucket:"react-netflix-eb4f0.appspot.com",messagingSenderId:"29045190704",appId:"1:29045190704:web:a7c74bd778aa5f993c7df5",measurementId:"G-9TB7LL3YPM"},NS=Gw(NL),BL=dL(NS);fP(NS);const AL=C.exports.createContext(null);function PL({children:t}){const[e,n]=C.exports.useState(!1);return k(AL.Provider,{value:{showModal:e,setShowModal:n},children:t})}ph.createRoot(document.getElementById("root")).render(k(vn.StrictMode,{children:k(rC,{children:k(aC,{children:k(PL,{children:k(FN,{})})})})}));export{Jf as A,A2 as B,Bt as C,UL as D,Lt as E,Pw as F,OL as G,zo as H,We as L,IN as N,AL as P,VL as Q,vn as R,ss as S,CN as W,cn as _,FL as a,k as b,fp as c,BL as d,vy as e,jL as f,ML as g,zL as h,Ot as i,le as j,Ae as k,ti as l,mC as m,ep as n,vC as o,Gt as p,Kt as q,C as r,bL as s,A1 as t,Xf as u,$L as v,P2 as w,P1 as x,LL as y,DL as z};
