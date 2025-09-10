import{r as d}from"./index.ad66e502.js";let Z={data:""},q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Z,K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Q=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,v=(e,t)=>{let r="",s="",i="";for(let o in e){let a=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+a+";":s+=o[1]=="f"?v(a,o):o+"{"+v(a,o[1]=="k"?"":t)+"}":typeof a=="object"?s+=v(a,t?t.replace(/([^,])+/g,n=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=v.p?v.p(o,a):o+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+s},x={},M=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+M(e[r]);return t}return e},V=(e,t,r,s,i)=>{let o=M(e),a=x[o]||(x[o]=(l=>{let p=0,u=11;for(;p<l.length;)u=101*u+l.charCodeAt(p++)>>>0;return"go"+u})(o));if(!x[a]){let l=o!==e?e:(p=>{let u,c,m=[{}];for(;u=K.exec(p.replace(Q,""));)u[4]?m.shift():u[3]?(c=u[3].replace(L," ").trim(),m.unshift(m[0][c]=m[0][c]||{})):m[0][u[1]]=u[2].replace(L," ").trim();return m[0]})(e);x[a]=v(i?{["@keyframes "+a]:l}:l,r?"":"."+a)}let n=r&&x.g?x.g:null;return r&&(x.g=x[a]),((l,p,u,c)=>{c?p.data=p.data.replace(c,l):p.data.indexOf(l)===-1&&(p.data=u?l+p.data:p.data+l)})(x[a],t,s,n),a},W=(e,t,r)=>e.reduce((s,i,o)=>{let a=t[o];if(a&&a.call){let n=a(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;a=l?"."+l:n&&typeof n=="object"?n.props?"":v(n,""):n===!1?"":n}return s+i+(a==null?"":a)},"");function O(e){let t=this||{},r=e.call?e(t.p):e;return V(r.unshift?r.raw?W(r,[].slice.call(arguments,1),t.p):r.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):r,q(t.target),t.g,t.o,t.k)}let S,I,N;O.bind({g:1});let b=O.bind({k:1});function G(e,t,r,s){v.p=t,S=e,I=r,N=s}function w(e,t){let r=this||{};return function(){let s=arguments;function i(o,a){let n=Object.assign({},o),l=n.className||i.className;r.p=Object.assign({theme:I&&I()},n),r.o=/ *go\d+/.test(l),n.className=O.apply(r,s)+(l?" "+l:""),t&&(n.ref=a);let p=e;return e[0]&&(p=n.as||e,delete n.as),N&&p[0]&&N(n),S(p,n)}return t?t(i):i}}var J=e=>typeof e=="function",D=(e,t)=>J(e)?e(t):e,X=(()=>{let e=0;return()=>(++e).toString()})(),H=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ee=20,P="default",R=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return R(e,{type:e.toasts.find(a=>a.id===s.id)?1:0,toast:s});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},j=[],_={toasts:[],pausedAt:void 0,settings:{toastLimit:ee}},h={},B=(e,t=P)=>{h[t]=R(h[t]||_,e),j.forEach(([r,s])=>{r===t&&s(h[t])})},U=e=>Object.keys(h).forEach(t=>B(e,t)),te=e=>Object.keys(h).find(t=>h[t].toasts.some(r=>r.id===e)),$=(e=P)=>t=>{B(t,e)},re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ae=(e={},t=P)=>{let[r,s]=d.exports.useState(h[t]||_),i=d.exports.useRef(h[t]);d.exports.useEffect(()=>(i.current!==h[t]&&s(h[t]),j.push([t,s]),()=>{let a=j.findIndex(([n])=>n===t);a>-1&&j.splice(a,1)}),[t]);let o=r.toasts.map(a=>{var n,l,p;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((n=e[a.type])==null?void 0:n.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((l=e[a.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||re[a.type],style:{...e.style,...(p=e[a.type])==null?void 0:p.style,...a.style}}});return{...r,toasts:o}},se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||X()}),E=e=>(t,r)=>{let s=se(t,e,r);return $(s.toasterId||te(s.id))({type:2,toast:s}),s.id},f=(e,t)=>E("blank")(e,t);f.error=E("error");f.success=E("success");f.loading=E("loading");f.custom=E("custom");f.dismiss=(e,t)=>{let r={type:3,toastId:e};t?$(t)(r):U(r)};f.dismissAll=e=>f.dismiss(void 0,e);f.remove=(e,t)=>{let r={type:4,toastId:e};t?$(t)(r):U(r)};f.removeAll=e=>f.remove(void 0,e);f.promise=(e,t,r)=>{let s=f.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?D(t.success,i):void 0;return o?f.success(o,{id:s,...r,...r==null?void 0:r.success}):f.dismiss(s),i}).catch(i=>{let o=t.error?D(t.error,i):void 0;o?f.error(o,{id:s,...r,...r==null?void 0:r.error}):f.dismiss(s)}),e};var oe=1e3,ie=(e,t="default")=>{let{toasts:r,pausedAt:s}=ae(e,t),i=d.exports.useRef(new Map).current,o=d.exports.useCallback((c,m=oe)=>{if(i.has(c))return;let g=setTimeout(()=>{i.delete(c),a({type:4,toastId:c})},m);i.set(c,g)},[]);d.exports.useEffect(()=>{if(s)return;let c=Date.now(),m=r.map(g=>{if(g.duration===1/0)return;let k=(g.duration||0)+g.pauseDuration-(c-g.createdAt);if(k<0){g.visible&&f.dismiss(g.id);return}return setTimeout(()=>f.dismiss(g.id,t),k)});return()=>{m.forEach(g=>g&&clearTimeout(g))}},[r,s,t]);let a=d.exports.useCallback($(t),[t]),n=d.exports.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=d.exports.useCallback((c,m)=>{a({type:1,toast:{id:c,height:m}})},[a]),p=d.exports.useCallback(()=>{s&&a({type:6,time:Date.now()})},[s,a]),u=d.exports.useCallback((c,m)=>{let{reverseOrder:g=!1,gutter:k=8,defaultPosition:T}=m||{},z=r.filter(y=>(y.position||T)===(c.position||T)&&y.height),Y=z.findIndex(y=>y.id===c.id),F=z.filter((y,A)=>A<Y&&y.visible).length;return z.filter(y=>y.visible).slice(...g?[F+1]:[0,F]).reduce((y,A)=>y+(A.height||0)+k,0)},[r]);return d.exports.useEffect(()=>{r.forEach(c=>{if(c.dismissed)o(c.id,c.removeDelay);else{let m=i.get(c.id);m&&(clearTimeout(m),i.delete(c.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:l,startPause:n,endPause:p,calculateOffset:u}}},ne=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,me=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fe=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ge=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=w("div")`
  position: absolute;
`,he=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ve=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.exports.createElement(be,null,t):t:r==="blank"?null:d.exports.createElement(he,null,d.exports.createElement(ue,{...s}),r!=="loading"&&d.exports.createElement(ye,null,r==="error"?d.exports.createElement(ce,{...s}):d.exports.createElement(ge,{...s})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",Ce="0%{opacity:1;} 100%{opacity:0;}",je=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,De=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Oe=(e,t)=>{let r=e.includes("top")?1:-1,[s,i]=H()?[ke,Ce]:[we(r),Ee(r)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$e=d.exports.memo(({toast:e,position:t,style:r,children:s})=>{let i=e.height?Oe(e.position||t||"top-center",e.visible):{opacity:0},o=d.exports.createElement(ve,{toast:e}),a=d.exports.createElement(De,{...e.ariaProps},D(e.message,e));return d.exports.createElement(je,{className:e.className,style:{...i,...r,...e.style}},typeof s=="function"?s({icon:o,message:a}):d.exports.createElement(d.exports.Fragment,null,o,a))});G(d.exports.createElement);var ze=({id:e,className:t,style:r,onHeightUpdate:s,children:i})=>{let o=d.exports.useCallback(a=>{if(a){let n=()=>{let l=a.getBoundingClientRect().height;s(e,l)};n(),new MutationObserver(n).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.exports.createElement("div",{ref:o,className:t,style:r},i)},Ae=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:H()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...i}},Ie=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,Pe=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:i,toasterId:o,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:p}=ie(r,o);return d.exports.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...a},className:n,onMouseEnter:p.startPause,onMouseLeave:p.endPause},l.map(u=>{let c=u.position||t,m=p.calculateOffset(u,{reverseOrder:e,gutter:s,defaultPosition:t}),g=Ae(c,m);return d.exports.createElement(ze,{id:u.id,key:u.id,onHeightUpdate:p.updateHeight,className:u.visible?Ie:"",style:g},u.type==="custom"?D(u.message,u):i?i(u):d.exports.createElement($e,{toast:u,position:c}))}))},Te=f;export{Pe as F,Te as z};
