var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var De="Expected a function",Ee=0/0,st="[object Symbol]",ot=/^\s+|\s+$/g,it=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,ut=parseInt,lt=typeof q=="object"&&q&&q.Object===Object&&q,ft=typeof self=="object"&&self&&self.Object===Object&&self,dt=lt||ft||Function("return this")(),pt=Object.prototype,ht=pt.toString,mt=Math.max,yt=Math.min,Y=function(){return dt.Date.now()};function bt(e,t,n){var r,s,i,o,c,f,l=0,u=!1,d=!1,w=!0;if(typeof e!="function")throw new TypeError(De);t=ge(t)||0,z(n)&&(u=!!n.leading,d="maxWait"in n,i=d?mt(ge(n.maxWait)||0,t):i,w="trailing"in n?!!n.trailing:w);function y(b){var O=r,P=s;return r=s=void 0,l=b,o=e.apply(P,O),o}function p(b){return l=b,c=setTimeout(g,t),u?y(b):o}function m(b){var O=b-f,P=b-l,we=t-O;return d?yt(we,i-P):we}function R(b){var O=b-f,P=b-l;return f===void 0||O>=t||O<0||d&&P>=i}function g(){var b=Y();if(R(b))return T(b);c=setTimeout(g,m(b))}function T(b){return c=void 0,w&&r?y(b):(r=s=void 0,o)}function E(){c!==void 0&&clearTimeout(c),l=0,r=f=s=c=void 0}function _(){return c===void 0?o:T(Y())}function j(){var b=Y(),O=R(b);if(r=arguments,s=this,f=b,O){if(c===void 0)return p(f);if(d)return c=setTimeout(g,t),y(f)}return c===void 0&&(c=setTimeout(g,t)),o}return j.cancel=E,j.flush=_,j}function wt(e,t,n){var r=!0,s=!0;if(typeof e!="function")throw new TypeError(De);return z(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),bt(e,t,{leading:r,maxWait:t,trailing:s})}function z(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Et(e){return!!e&&typeof e=="object"}function gt(e){return typeof e=="symbol"||Et(e)&&ht.call(e)==st}function ge(e){if(typeof e=="number")return e;if(gt(e))return Ee;if(z(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=z(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ot,"");var n=at.test(e);return n||ct.test(e)?ut(e.slice(2),n?2:8):it.test(e)?Ee:+e}var St=wt;const Yn=rt(St);function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:Rt}=Object.prototype,{getPrototypeOf:fe}=Object,V=(e=>t=>{const n=Rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>V(t)===e),K=e=>t=>typeof t===e,{isArray:B}=Array,k=K("undefined");function Ot(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=N("ArrayBuffer");function Tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const At=K("string"),A=K("function"),ke=K("number"),G=e=>e!==null&&typeof e=="object",xt=e=>e===!0||e===!1,H=e=>{if(V(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ct=N("Date"),Nt=N("File"),Pt=N("Blob"),Ft=N("FileList"),_t=e=>G(e)&&A(e.pipe),Lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=V(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Bt=N("URLSearchParams"),[Dt,jt,Ut,kt]=["ReadableStream","Request","Response","Headers"].map(N),It=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const qe=e=>!k(e)&&e!=={};function se(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ie(t,s)||s;H(t[i])&&H(r)?t[i]=se(t[i],r):H(r)?t[i]=se({},r):B(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const qt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,i)=>{n&&A(s)?e[i]=je(s,n):e[i]=s},{allOwnKeys:r}),e),Ht=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$t=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},zt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Kt=N("HTMLFormElement"),Gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Xt=N("RegExp"),He=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Qt=e=>{He(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Zt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Yt=()=>{},en=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",Re="0123456789",Me={DIGIT:Re,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Re},tn=(e=16,t=Me.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function nn(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rn=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=B(r)?[]:{};return I(r,(o,c)=>{const f=n(o,s+1);!k(f)&&(i[c]=f)}),t[s]=void 0,i}}return r};return n(e,0)},sn=N("AsyncFunction"),on=e=>e&&(G(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:B,isArrayBuffer:Ue,isBuffer:Ot,isFormData:Lt,isArrayBufferView:Tt,isString:At,isNumber:ke,isBoolean:xt,isObject:G,isPlainObject:H,isReadableStream:Dt,isRequest:jt,isResponse:Ut,isHeaders:kt,isUndefined:k,isDate:Ct,isFile:Nt,isBlob:Pt,isRegExp:Xt,isFunction:A,isStream:_t,isURLSearchParams:Bt,isTypedArray:Jt,isFileList:Ft,forEach:I,merge:se,extend:qt,trim:It,stripBOM:Ht,inherits:Mt,toFlatObject:$t,kindOf:V,kindOfTest:N,endsWith:zt,toArray:vt,forEachEntry:Wt,matchAll:Vt,isHTMLForm:Kt,hasOwnProperty:Se,hasOwnProp:Se,reduceDescriptors:He,freezeMethods:Qt,toObjectSet:Zt,toCamelCase:Gt,noop:Yt,toFiniteNumber:en,findKey:Ie,global:{},isContextDefined:qe,ALPHABET:Me,generateString:tn,isSpecCompliantForm:nn,toJSONObject:rn,isAsyncFn:sn,isThenable:on};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $e=h.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(h,ze);Object.defineProperty($e,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,i)=>{const o=Object.create($e);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const an=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,i){return s=ve(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function cn(e){return a.isArray(e)&&!e.some(oe)}const un=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,m,R){let g=p;if(p&&!R&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&cn(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(g=a.toArray(p)))return m=ve(m),g.forEach(function(E,_){!(a.isUndefined(E)||E===null)&&t.append(o===!0?Oe([m],_,i):o===null?m:m+"[]",l(E))}),!1}return oe(p)?!0:(t.append(Oe(R,m,i),l(p)),!1)}const d=[],w=Object.assign(un,{defaultVisitor:u,convertValue:l,isVisitable:oe});function y(p,m){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(p),a.forEach(p,function(g,T){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(T)?T.trim():T,m,w))===!0&&y(g,m?m.concat(T):[T])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&X(e,this,t)}const Je=de.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ln(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function We(e,t,n){if(!t)return e;const r=n&&n.encode||ln,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class fn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=fn,Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dn=typeof URLSearchParams<"u"?URLSearchParams:de,pn=typeof FormData<"u"?FormData:null,hn=typeof Blob<"u"?Blob:null,mn={isBrowser:!0,classes:{URLSearchParams:dn,FormData:pn,Blob:hn},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",yn=(e=>pe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),bn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),wn=pe&&window.location.href||"http://localhost",En=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:yn,hasStandardBrowserWebWorkerEnv:bn,origin:wn},Symbol.toStringTag,{value:"Module"})),x={...En,...mn};function gn(e,t){return X(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ke(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Rn(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Sn(r),s,n,0)}),n}return null}function On(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const he={transitional:Ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),On(t)):t}],transformResponse:[function(t){const n=this.transitional||he.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{he.headers[e]={}});const me=he,Tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),An=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function xn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,f,l){const u=U(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=M(c))}const o=(c,f)=>a.forEach(c,(l,u)=>i(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(a.isString(t)&&(t=t.trim())&&!Cn(t))o(An(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())i(f,c,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return xn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=U(o),o){const c=a.findKey(r,o);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||te(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=M(s),delete n[i];return}const c=t?Nn(i):String(i).trim();c!==i&&delete n[i],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=U(o);r[c]||(Pn(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);const C=Q;function ne(e,t){const n=this||me,r=t||n,s=C.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ge(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,h,{__CANCEL__:!0});function Xe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _n(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[i];o||(o=l),n[s]=f,r[s]=l;let d=i,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const y=u&&l-u;return y?Math.round(w*1e3/y):void 0}}function Ln(e,t){let n=0;const r=1e3/t;let s=null;return function(){const o=this===!0,c=Date.now();if(o||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}const v=(e,t,n=3)=>{let r=0;const s=_n(50,250);return Ln(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,f=o-r,l=s(f),u=o<=c;r=o;const d={loaded:o,total:c,progress:c?o/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-o)/l:void 0,event:i,lengthComputable:c!=null};d[t?"download":"upload"]=!0,e(d)},n)},Bn=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Dn=x.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Un(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t){return e&&!jn(t)?Un(e,t):t}const Ce=e=>e instanceof C?{...e}:e;function L(e,t){t=t||{};const n={};function r(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function i(l,u){if(!a.isUndefined(u))return r(void 0,u)}function o(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(l,u)=>s(Ce(l),Ce(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,w=d(e[u],t[u],u);a.isUndefined(w)&&d!==c||(n[u]=w)}),n}const Ze=e=>{const t=L({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=t;t.headers=o=C.from(o),t.url=We(Qe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((f=o.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Bn(t.url))){const l=s&&i&&Dn.read(i);l&&o.set(s,l)}return t},kn=typeof XMLHttpRequest<"u",In=kn&&function(e){return new Promise(function(n,r){const s=Ze(e);let i=s.data;const o=C.from(s.headers).normalize();let{responseType:c}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function d(){if(!u)return;const y=C.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};Xe(function(g){n(g),l()},function(g){r(g),l()},m),u=null}"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new h("Request aborted",h.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let p=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||Ve;s.timeoutErrorMessage&&(p=s.timeoutErrorMessage),r(new h(p,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,u)),u=null},i===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(p,m){u.setRequestHeader(m,p)}),a.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),c&&c!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",v(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",v(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{u&&(r(!y||y.type?new D(null,e,u):y),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=Fn(s.url);if(w&&x.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}u.send(i||null)})},qn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,o();const l=f instanceof Error?f:this.reason;n.abort(l instanceof h?l:new D(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const o=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=o,[c,()=>{i&&clearTimeout(i),i=null}]},Hn=qn,Mn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},$n=async function*(e,t,n){for await(const r of e)yield*Mn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Ne=(e,t,n,r,s)=>{const i=$n(e,t,s);let o=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:l}=await i.next();if(f){c.close(),r();return}let u=l.byteLength;n&&n(o+=u),c.enqueue(new Uint8Array(l))},cancel(c){return r(c),i.return()}},{highWaterMark:2})},Pe=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ye=Z&&typeof ReadableStream=="function",ie=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),zn=Ye&&(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Fe=64*1024,ae=Ye&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),J={stream:ae&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!J[t]&&(J[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const vn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ie(e)).byteLength},Jn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??vn(t)},Wn=Z&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:w}=Ze(e);l=l?(l+"").toLowerCase():"text";let[y,p]=s||i||o?Hn([s,i],o):[],m,R;const g=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let T;try{if(f&&zn&&n!=="get"&&n!=="head"&&(T=await Jn(u,r))!==0){let b=new Request(t,{method:"POST",body:r,duplex:"half"}),O;a.isFormData(r)&&(O=b.headers.get("content-type"))&&u.setContentType(O),b.body&&(r=Ne(b.body,Fe,Pe(T,v(f)),null,ie))}a.isString(d)||(d=d?"cors":"omit"),R=new Request(t,{...w,signal:y,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let E=await fetch(R);const _=ae&&(l==="stream"||l==="response");if(ae&&(c||_)){const b={};["status","statusText","headers"].forEach(P=>{b[P]=E[P]});const O=a.toFiniteNumber(E.headers.get("content-length"));E=new Response(Ne(E.body,Fe,c&&Pe(O,v(c,!0)),_&&g,ie),b)}l=l||"text";let j=await J[a.findKey(J,l)||"text"](E,e);return!_&&g(),p&&p(),await new Promise((b,O)=>{Xe(b,O,{data:j,headers:C.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:R})})}catch(E){throw g(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,R),{cause:E.cause||E}):h.from(E,E&&E.code,e,R)}}),ce={http:an,xhr:In,fetch:Wn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _e=e=>`- ${e}`,Vn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Vn(n)&&(r=ce[(o=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(_e).join(`
`):" "+_e(i[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function Le(e){return re(e),e.headers=C.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||me.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ge(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.2",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};ye.transitional=function(t,n,r){function s(i,o){return"[Axios v"+tt+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new h(s(o," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Be[o]&&(Be[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Kn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],f=c===void 0||o(c,i,e);if(f!==!0)throw new h("option "+i+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const ue={assertOptions:Kn,validators:ye},F=ue.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ue.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=C.concat(o,i);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,d=0,w;if(!f){const p=[Le.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),w=p.length,u=Promise.resolve(n);d<w;)u=u.then(p[d++],p[d++]);return u}w=c.length;let y=n;for(d=0;d<w;){const p=c[d++],m=c[d++];try{y=p(y)}catch(R){m.call(this,R);break}}try{u=Le.call(this,y)}catch(p){return Promise.reject(p)}for(d=0,w=l.length;d<w;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=L(this.defaults,t);const n=Qe(t.baseURL,t.url);return We(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(L(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const $=W;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new D(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}const Gn=be;function Xn(e){return function(n){return e.apply(null,n)}}function Qn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const Zn=le;function nt(e){const t=new $(e),n=je($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(L(e,s))},n}const S=nt(me);S.Axios=$;S.CanceledError=D;S.CancelToken=Gn;S.isCancel=Ge;S.VERSION=tt;S.toFormData=X;S.AxiosError=h;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Xn;S.isAxiosError=Qn;S.mergeConfig=L;S.AxiosHeaders=C;S.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);S.getAdapter=et.getAdapter;S.HttpStatusCode=Zn;S.default=S;const er=S;export{er as a,Yn as t};
//# sourceMappingURL=vendor-0d65446b.js.map
