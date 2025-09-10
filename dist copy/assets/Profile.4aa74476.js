import{_ as Be,C as Me,i as le,k as Z,l as Fe,m as qe,n as He,S as je,o as ze,q as $e,s as We,r as S,A as Xe,u as Ge,b as u,j as P,c as Ve,t as X,v as J,w as Ke}from"./index.ad66e502.js";import{F as Ze,z as Ye}from"./index.943f55a9.js";import{W as Je}from"./WelcomePageBanner.bce996d6.js";/* empty css                       *//**
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
 */const _e="firebasestorage.googleapis.com",me="storageBucket",Qe=2*60*1e3,et=10*60*1e3,tt=1e3;/**
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
 */class p extends $e{constructor(e,n,s=0){super(Q(e),`Firebase Storage: ${n} (${Q(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,p.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Q(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function Q(t){return"storage/"+t}function se(){const t="An unknown error occurred, please check the error payload for server response.";return new p(d.UNKNOWN,t)}function nt(t){return new p(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function st(t){return new p(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new p(d.UNAUTHENTICATED,t)}function it(){return new p(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ot(t){return new p(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ge(){return new p(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function be(){return new p(d.CANCELED,"User canceled the upload/download.")}function at(t){return new p(d.INVALID_URL,"Invalid URL '"+t+"'.")}function lt(t){return new p(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ct(){return new p(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+me+"' property when initializing the app?")}function we(){return new p(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ut(){return new p(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ht(){return new p(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dt(t){return new p(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ne(t){return new p(d.INVALID_ARGUMENT,t)}function Re(){return new p(d.APP_DELETED,"The Firebase app was deleted.")}function ft(t){return new p(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new p(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function j(t){throw new p(d.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class N{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=N.makeFromUrl(e,n)}catch{return new N(e,"")}if(s.path==="")return s;throw lt(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",_=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${_}/${h}/b/${r}/o${m}`,"i"),b={bucket:1,path:3},x=n===_e?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",v=new RegExp(`^https?://${x}/${r}/${f}`,"i"),w=[{regex:l,indices:a,postModify:i},{regex:g,indices:b,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<w.length;R++){const T=w[R],k=T.regex.exec(e);if(k){const O=k[T.indices.bucket];let L=k[T.indices.path];L||(L=""),s=new N(O,L),T.postModify(s);break}}if(s==null)throw at(e);return s}}class pt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _t(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function a(){return l===2}let c=!1;function h(...f){c||(c=!0,e.apply(null,f))}function _(f){r=setTimeout(()=>{r=null,t(g,a())},f)}function m(){i&&clearTimeout(i)}function g(f,...v){if(c){m();return}if(f){m(),h.call(null,f,...v);return}if(a()||o){m(),h.call(null,f,...v);return}s<64&&(s*=2);let w;l===1?(l=2,w=0):w=(s+Math.random())*1e3,_(w)}let b=!1;function x(f){b||(b=!0,m(),!c&&(r!==null?(f||(l=2),clearTimeout(r),_(0)):f||(l=1)))}return _(0),i=setTimeout(()=>{o=!0,x(!0)},n),x}function mt(t){t(!1)}/**
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
 */function gt(t){return t!==void 0}function bt(t){return typeof t=="function"}function wt(t){return typeof t=="object"&&!Array.isArray(t)}function Y(t){return typeof t=="string"||t instanceof String}function ce(t){return re()&&t instanceof Blob}function re(){return typeof Blob<"u"&&!We()}function ue(t,e,n,s){if(s<e)throw ne(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ne(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ke(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var B;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(B||(B={}));/**
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
 */function Te(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Rt{constructor(e,n,s,r,i,o,l,a,c,h,_,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=_,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,b)=>{this.resolve_=g,this.reject_=b,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===B.NO_ERROR,a=i.getStatus();if(!l||Te(a,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===B.ABORT;s(!1,new G(!1,null,h));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new G(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());gt(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=se();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(r.canceled){const a=this.appDelete_?Re():be();o(a)}else{const a=ge();o(a)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=_t(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function kt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Tt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function yt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ut(t,e,n,s,r,i,o=!0){const l=ke(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return yt(c,e),kt(c,n),Tt(c,i),xt(c,s),new Rt(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function Et(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nt(...t){const e=Et();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(re())return new Blob(t);throw new p(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function At(t){if(typeof atob>"u")throw dt("base-64");return atob(t)}/**
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
 */const C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ee{constructor(e,n){this.data=e,this.contentType=n||null}}function Pt(t,e){switch(t){case C.RAW:return new ee(ye(e));case C.BASE64:case C.BASE64URL:return new ee(xe(t,e));case C.DATA_URL:return new ee(Ot(e),St(e))}throw se()}function ye(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Ct(t){let e;try{e=decodeURIComponent(t)}catch{throw z(C.DATA_URL,"Malformed data URL.")}return ye(e)}function xe(t,e){switch(t){case C.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case C.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=At(e)}catch(r){throw r.message.includes("polyfill")?r:z(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ue{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=It(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ot(t){const e=new Ue(t);return e.base64?xe(C.BASE64,e.rest):Ct(e.rest)}function St(t){return new Ue(t).contentType}function It(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class D{constructor(e,n){let s=0,r="";ce(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ce(this.data_)){const s=this.data_,r=vt(s,e,n);return r===null?null:new D(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new D(s,!0)}}static getBlob(...e){if(re()){const n=e.map(s=>s instanceof D?s.data_:s);return new D(Nt.apply(null,n))}else{const n=e.map(o=>Y(o)?Pt(C.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new D(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Ee(t){let e;try{e=JSON.parse(t)}catch{return null}return wt(e)?e:null}/**
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
 */function Lt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Dt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ne(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Bt(t,e){return e}class y{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Bt}}let V=null;function Mt(t){return!Y(t)||t.length<2?t:Ne(t)}function ve(){if(V)return V;const t=[];t.push(new y("bucket")),t.push(new y("generation")),t.push(new y("metageneration")),t.push(new y("name","fullPath",!0));function e(i,o){return Mt(o)}const n=new y("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new y("size");return r.xform=s,t.push(r),t.push(new y("timeCreated")),t.push(new y("updated")),t.push(new y("md5Hash",null,!0)),t.push(new y("cacheControl",null,!0)),t.push(new y("contentDisposition",null,!0)),t.push(new y("contentEncoding",null,!0)),t.push(new y("contentLanguage",null,!0)),t.push(new y("contentType",null,!0)),t.push(new y("metadata","customMetadata",!0)),V=t,V}function Ft(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new N(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function qt(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Ft(s,t),s}function Ae(t,e,n){const s=Ee(e);return s===null?null:qt(t,s,n)}function Ht(t,e,n,s){const r=Ee(e);if(r===null||!Y(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=t.bucket,_=t.fullPath,m="/b/"+o(h)+"/o/"+o(_),g=$(m,n,s),b=ke({alt:"media",token:c});return g+b})[0]}function Pe(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class H{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function I(t){if(!t)throw se()}function ie(t,e){function n(s,r){const i=Ae(t,r,e);return I(i!==null),i}return n}function jt(t,e){function n(s,r){const i=Ae(t,r,e);return I(i!==null),Ht(i,r,t.host,t._protocol)}return n}function W(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=it():r=rt():n.getStatus()===402?r=st(t.bucket):n.getStatus()===403?r=ot(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ce(t){const e=W(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=nt(t.path)),i.serverResponse=r.serverResponse,i}return n}function zt(t,e,n){const s=e.fullServerUrl(),r=$(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new H(r,i,ie(t,n),o);return l.errorHandler=Ce(e),l}function $t(t,e,n){const s=e.fullServerUrl(),r=$(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new H(r,i,jt(t,n),o);return l.errorHandler=Ce(e),l}function Wt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Oe(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Wt(null,e)),s}function Xt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let w="";for(let R=0;R<2;R++)w=w+Math.random().toString().slice(2);return w}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=Oe(e,s,r),h=Pe(c,n),_="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+a+"--",g=D.getBlob(_,s,m);if(g===null)throw we();const b={name:c.fullPath},x=$(i,t.host,t._protocol),f="POST",v=t.maxUploadRetryTime,A=new H(x,f,ie(t,n),v);return A.urlParams=b,A.headers=o,A.body=g.uploadData(),A.errorHandler=W(e),A}class K{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function oe(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{I(!1)}return I(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Gt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Oe(e,s,r),l={name:o.fullPath},a=$(i,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},_=Pe(o,n),m=t.maxUploadRetryTime;function g(x){oe(x);let f;try{f=x.getResponseHeader("X-Goog-Upload-URL")}catch{I(!1)}return I(Y(f)),f}const b=new H(a,c,g,m);return b.urlParams=l,b.headers=h,b.body=_,b.errorHandler=W(e),b}function Vt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(c){const h=oe(c,["active","final"]);let _=null;try{_=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{I(!1)}_||I(!1);const m=Number(_);return I(!isNaN(m)),new K(m,s.size(),h==="final")}const o="POST",l=t.maxUploadRetryTime,a=new H(n,o,i,l);return a.headers=r,a.errorHandler=W(e),a}const he=256*1024;function Kt(t,e,n,s,r,i,o,l){const a=new K(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ut();const c=a.total-a.current;let h=c;r>0&&(h=Math.min(h,r));const _=a.current,m=_+h;let g="";h===0?g="finalize":c===h?g="upload, finalize":g="upload";const b={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${a.current}`},x=s.slice(_,m);if(x===null)throw we();function f(R,T){const k=oe(R,["active","final"]),O=a.current+h,L=s.size();let E;return k==="final"?E=ie(e,i)(R,T):E=null,new K(O,L,k==="final",E)}const v="POST",A=e.maxUploadRetryTime,w=new H(n,v,f,A);return w.headers=b,w.body=x.uploadData(),w.progressCallback=l||null,w.errorHandler=W(t),w}const U={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function te(t){switch(t){case"running":case"pausing":case"canceling":return U.RUNNING;case"paused":return U.PAUSED;case"success":return U.SUCCESS;case"canceled":return U.CANCELED;case"error":return U.ERROR;default:return U.ERROR}}/**
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
 */class Zt{constructor(e,n,s){if(bt(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function F(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Jt extends Yt{initXhr(){this.xhr_.responseType="text"}}function q(){return new Jt}/**
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
 */class Qt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=ve(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Te(r.status,[]))if(i)r=ge();else{this.sleepTime=Math.max(this.sleepTime*2,tt),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Gt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Vt(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,q,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=he*this._chunkMultiplier,n=new K(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Kt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,q,r,i,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){he*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=zt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Xt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,q,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=be(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=te(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Zt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(te(this._state)){case U.SUCCESS:F(this._resolve.bind(null,this.snapshot))();break;case U.CANCELED:case U.ERROR:const n=this._reject;F(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(te(this._state)){case U.RUNNING:case U.PAUSED:e.next&&F(e.next.bind(e,this.snapshot))();break;case U.SUCCESS:e.complete&&F(e.complete.bind(e))();break;case U.CANCELED:case U.ERROR:e.error&&F(e.error.bind(e,this._error))();break;default:e.error&&F(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class M{constructor(e,n){this._service=e,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new M(e,n)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ne(this._location.path)}get storage(){return this._service}get parent(){const e=Lt(this._location.path);if(e===null)return null;const n=new N(this._location.bucket,e);return new M(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ft(e)}}function en(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Qt(t,new D(e),n)}function tn(t){t._throwIfRoot("getDownloadURL");const e=$t(t.storage,t._location,ve());return t.storage.makeRequestWithTokens(e,q).then(n=>{if(n===null)throw ht();return n})}function nn(t,e){const n=Dt(t._location.path,e),s=new N(t._location.bucket,n);return new M(t.storage,s)}/**
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
 */function sn(t){return/^[A-Za-z]+:\/\//.test(t)}function rn(t,e){return new M(t,e)}function Se(t,e){if(t instanceof ae){const n=t;if(n._bucket==null)throw ct();const s=new M(n,n._bucket);return e!=null?Se(s,e):s}else return e!==void 0?nn(t,e):t}function on(t,e){if(e&&sn(e)){if(t instanceof ae)return rn(t,e);throw ne("To use ref(service, url), the first argument must be a Storage instance.")}else return Se(t,e)}function de(t,e){const n=e==null?void 0:e[me];return n==null?null:N.makeFromBucketSpec(n,t)}function an(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:ze(r,t.app.options.projectId))}class ae{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=_e,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qe,this._maxUploadRetryTime=et,this._requests=new Set,r!=null?this._bucket=N.makeFromBucketSpec(r,this._host):this._bucket=de(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=de(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ue("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ue("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new M(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new pt(Re());{const o=Ut(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const fe="@firebase/storage",pe="0.11.2";/**
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
 */const Ie="storage";function ln(t,e,n){return t=Z(t),en(t,e,n)}function cn(t){return t=Z(t),tn(t)}function un(t,e){return t=Z(t),on(t,e)}function hn(t=He(),e){t=Z(t);const s=Fe(t,Ie).getImmediate({identifier:e}),r=qe("storage");return r&&dn(s,...r),s}function dn(t,e,n,s={}){an(t,e,n,s)}function fn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ae(n,s,r,e,je)}function pn(){Be(new Me(Ie,fn,"PUBLIC").setMultipleInstances(!0)),le(fe,pe,""),le(fe,pe,"esm2017")}pn();function wn(){const{User:t}=S.exports.useContext(Xe),[e,n]=S.exports.useState(""),[s,r]=S.exports.useState(""),[i,o]=S.exports.useState(""),[l,a]=S.exports.useState(!1),[c,h]=S.exports.useState(""),[_,m]=S.exports.useState(!1),g=Ge();S.exports.useEffect(()=>{t!=null&&(console.log(t.photoURL,"hello"),n(t.photoURL))},[]);const b=S.exports.useRef(null),x=()=>{b.current.click()};function f(){Ye.success("  Data Updated Sucessfuly  ")}const v=T=>{const k=T.target.files[0];o(k),r(URL.createObjectURL(k)),k&&(console.log("fileObj is",k),T.target.value=null)},A=T=>{if(T.preventDefault(),l)if(c!==""){const k=X();J(k.currentUser,{displayName:c}).then(()=>{f()}).catch(O=>{alert(O.message)})}else a(!1);if(i!=""){const k=hn(),O=un(k,`/ProfilePics/${t.uid}`),L=ln(O,i);L.on("state_changed",E=>{Math.round(E.bytesTransferred/E.totalBytes*100)},E=>{alert(E.message),alert(E.code)},()=>{cn(L.snapshot.ref).then(E=>{console.log(E,"This is the new Url for Profile Pic"),n(E);const Le=X();J(Le.currentUser,{photoURL:E}).then(()=>{f(),m(!0)}).catch(De=>{alert(De.message)})})})}},w=T=>{const k=X();J(k.currentUser,{photoURL:T}).then(()=>{n(t.photoURL),f()}).catch(O=>{alert(O.message)})},R=()=>{const T=X();Ke(T).then(()=>{g("/")}).catch(k=>{alert(k.message)})};return u("div",{children:P("div",{className:"flex h-screen justify-center items-center",style:{backgroundImage:`linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%), url(${Je})`},children:[_?u(Ze,{toastOptions:{style:{padding:"1.5rem",backgroundColor:"##f4fff4",borderLeft:"6px solid green"}}}):null,u(Ve.Fade,{children:P("div",{className:"bg-[#000000bf] p-5 md:p-12 rounded-md",children:[u("h1",{className:"text-4xl text-white font-bold mb-4 md:mb-8",children:"Edit your Profile"}),P("div",{className:"flex justify-center flex-col items-center md:flex-row md:items-start",children:[u("img",{className:"h-28 w-28 rounded-full cursor-pointer mb-3 md:mr-16",src:e?`${e}`:"https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png",alt:"NETFLIX"}),P("div",{children:[u("hr",{className:"mb-2 h-px bg-gray-500 border-0 dark:bg-gray-700"}),u("h1",{className:"text-white text-lg font-medium mb-2",children:"User Name"}),u("input",{type:"text",onChange:T=>h(T.target.value)||a(!0),className:"block w-full rounded-md bg-stone-900 text-white border-gray-300 p-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base",placeholder:t?t.displayName:null}),u("h1",{className:"text-white text-lg font-medium mb-2",children:"Email"}),u("h1",{className:"text-white text-xl bg-stone-900 p-2 rounded mb-4 md:pr-52",children:t?t.email:null}),P("h1",{className:"text-white text-xl p-2 rounded mb-4",children:["Unique ID : ",t?t.uid:null]}),u("hr",{className:"h-px bg-gray-500 border-0 mb-4 md:mb-10 dark:bg-gray-700"}),u("h1",{className:"text-white text-lg font-medium mb-4",children:"Who is Watching ?"}),P("div",{className:"flex justify-between cursor-pointer mb-4 md:mb-8",children:[u("img",{onClick:()=>w("https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"}),u("img",{onClick:()=>w("https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"}),u("img",{onClick:()=>w("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}),u("img",{onClick:()=>w("https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"}),u("input",{style:{display:"none"},ref:b,type:"file",onChange:v}),u("svg",{onClick:x,xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 text-stone-600 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),s?u("img",{className:"h-30 w-72",src:s}):null]})]}),P("div",{className:"flex justify-between mt-4",children:[P("button",{onClick:R,className:"flex items-center border-[0.7px] border-white text-white font-medium sm:font-bold text-xs px-14 md:px-24 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})}),"SignOut"]}),c!=""||i!=""?P("button",{onClick:A,className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})}),"Save and continue"]}):P("button",{onClick:()=>g("/"),className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),"Back to Home"]})]})]})})]})})}export{wn as default};
