var J=Object.defineProperty;var K=(o,e,i)=>e in o?J(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var m=(o,e,i)=>(K(o,typeof e!="symbol"?e+"":e,i),i),H=(o,e,i)=>{if(!e.has(o))throw TypeError("Cannot "+i)};var p=(o,e,i)=>(H(o,e,"read from private field"),i?i.call(o):e.get(o)),u=(o,e,i)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,i)},C=(o,e,i,d)=>(H(o,e,"write to private field"),d?d.call(o,i):e.set(o,i),i);var c=(o,e,i)=>(H(o,e,"access private method"),i);const Q=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],D=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function X(o){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${G(o)}></audio>
    </slot>
    <slot></slot>
  `}function Y(o){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${G(o)}></video>
    </slot>
    <slot></slot>
  `}function W(o,{tag:e,is:i}){var O,q,h,y,j,B,A,w,b,E,f,g,M,R,L,I,k,$,x,U,P,V;const d=(q=(O=globalThis.document)==null?void 0:O.createElement)==null?void 0:q.call(O,e,{is:i}),S=d?Z(d):[];return h=class extends o{constructor(){super(...arguments);u(this,f);u(this,M);u(this,L);u(this,k);u(this,x);u(this,P);u(this,A,!1);u(this,w,null);u(this,b,new Map);u(this,E,void 0);m(this,"get");m(this,"set");m(this,"call")}static get observedAttributes(){var s,a,r;return c(s=h,j,B).call(s),[...(r=(a=d==null?void 0:d.constructor)==null?void 0:a.observedAttributes)!=null?r:[],...D]}get nativeEl(){var t,s,a,r,n;return c(this,f,g).call(this),(n=(r=(s=(t=p(this,w))!=null?t:this.querySelector(":scope > [slot=media]"))!=null?s:this.querySelector(e))!=null?r:(a=this.shadowRoot)==null?void 0:a.querySelector(e))!=null?n:null}set nativeEl(t){C(this,w,t)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(t){this.toggleAttribute("muted",t)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",`${t}`)}get preload(){var t,s;return(s=this.getAttribute("preload"))!=null?s:(t=this.nativeEl)==null?void 0:t.preload}set preload(t){this.setAttribute("preload",`${t}`)}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});const t=F(this.attributes);i&&(t.is=i),e&&(t.part=e),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.nativeEl.muted=this.hasAttribute("muted");for(const t of S)c(this,x,U).call(this,t);C(this,E,new MutationObserver(c(this,L,I).bind(this))),this.shadowRoot.addEventListener("slotchange",()=>c(this,M,R).call(this)),c(this,M,R).call(this);for(const t of this.constructor.Events)this.shadowRoot.addEventListener(t,this,!0)}handleEvent(t){t.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(t.type,{detail:t.detail}))}attributeChangedCallback(t,s,a){c(this,f,g).call(this),c(this,P,V).call(this,t,s,a)}connectedCallback(){c(this,f,g).call(this)}},y=new WeakMap,j=new WeakSet,B=function(){if(p(this,y))return;C(this,y,!0);const t=new Set(this.observedAttributes);t.delete("muted");for(const s of S)if(!(s in this.prototype))if(typeof d[s]=="function")this.prototype[s]=function(...a){return c(this,f,g).call(this),(()=>{var l;if(this.call)return this.call(s,...a);const n=(l=this.nativeEl)==null?void 0:l[s];return n==null?void 0:n.apply(this.nativeEl,a)})()};else{const a={get(){var n,l,T;c(this,f,g).call(this);const r=s.toLowerCase();if(t.has(r)){const v=this.getAttribute(r);return v===null?!1:v===""?!0:v}return(T=(n=this.get)==null?void 0:n.call(this,s))!=null?T:(l=this.nativeEl)==null?void 0:l[s]}};s!==s.toUpperCase()&&(a.set=function(r){c(this,f,g).call(this);const n=s.toLowerCase();if(t.has(n)){r===!0||r===!1||r==null?this.toggleAttribute(n,Boolean(r)):this.setAttribute(n,r);return}if(this.set){this.set(s,r);return}this.nativeEl&&(this.nativeEl[s]=r)}),Object.defineProperty(this.prototype,s,a)}},A=new WeakMap,w=new WeakMap,b=new WeakMap,E=new WeakMap,f=new WeakSet,g=function(){p(this,A)||(C(this,A,!0),this.init())},M=new WeakSet,R=function(){var r;const t=new Map(p(this,b)),s=(r=this.shadowRoot)==null?void 0:r.querySelector("slot:not([name])");(s==null?void 0:s.assignedElements({flatten:!0}).filter(n=>["track","source"].includes(n.localName))).forEach(n=>{var T,v;t.delete(n);let l=p(this,b).get(n);l||(l=n.cloneNode(),p(this,b).set(n,l),(T=p(this,E))==null||T.observe(n,{attributes:!0})),(v=this.nativeEl)==null||v.append(l),c(this,k,$).call(this,l)}),t.forEach((n,l)=>{n.remove(),p(this,b).delete(l)})},L=new WeakSet,I=function(t){var s;for(const a of t)if(a.type==="attributes"){const{target:r,attributeName:n}=a,l=p(this,b).get(r);l&&n&&(l.setAttribute(n,(s=r.getAttribute(n))!=null?s:""),c(this,k,$).call(this,l))}},k=new WeakSet,$=function(t){t&&t.localName==="track"&&t.default&&(t.kind==="chapters"||t.kind==="metadata")&&t.track.mode==="disabled"&&(t.track.mode="hidden")},x=new WeakSet,U=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const s=this[t];delete this[t],this[t]=s}},P=new WeakSet,V=function(t,s,a){var r,n,l;["id","class"].includes(t)||!h.observedAttributes.includes(t)&&this.constructor.observedAttributes.includes(t)||(a===null?(r=this.nativeEl)==null||r.removeAttribute(t):((n=this.nativeEl)==null?void 0:n.getAttribute(t))!==a&&((l=this.nativeEl)==null||l.setAttribute(t,a)))},u(h,j),m(h,"getTemplateHTML",e.endsWith("audio")?X:Y),m(h,"shadowRootOptions",{mode:"open"}),m(h,"Events",Q),u(h,y,!1),h}function Z(o){const e=[];for(let i=Object.getPrototypeOf(o);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){const d=Object.getOwnPropertyNames(i);e.push(...d)}return e}function G(o){let e="";for(const i in o){if(!D.includes(i))continue;const d=o[i];d===""?e+=` ${i}`:e+=` ${i}="${d}"`}return e}function F(o){const e={};for(const i of o)e[i.name]=i.value;return e}var N;const et=W((N=globalThis.HTMLElement)!=null?N:class{},{tag:"video"});var z;W((z=globalThis.HTMLElement)!=null?z:class{},{tag:"audio"});export{et as C};
