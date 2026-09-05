(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41284,t=>{"use strict";let e,i,s,r,a,n;var o=t.i(44250),u=t.i(75075);let c={setTimeout:(t,e)=>setTimeout(t,e),clearTimeout:t=>clearTimeout(t),setInterval:(t,e)=>setInterval(t,e),clearInterval:t=>clearInterval(t)},l=new class{#t=c;#e=!1;setTimeoutProvider(t){this.#t=t}setTimeout(t,e){return this.#t.setTimeout(t,e)}clearTimeout(t){this.#t.clearTimeout(t)}setInterval(t,e){return this.#t.setInterval(t,e)}clearInterval(t){this.#t.clearInterval(t)}},h="u"<typeof window||"Deno"in globalThis;function d(){}function f(t,e){return"function"==typeof t?t(e):t}function p(t,e){let{type:i="all",exact:s,fetchStatus:r,predicate:a,queryKey:n,stale:o}=t;if(n){if(s){if(e.queryHash!==y(n,e.options))return!1}else if(!g(e.queryKey,n))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!r||r===e.state.fetchStatus)&&(!a||!!a(e))}function m(t,e){let{exact:i,status:s,predicate:r,mutationKey:a}=t;if(a){if(!e.options.mutationKey)return!1;if(i){if(v(e.options.mutationKey)!==v(a))return!1}else if(!g(e.options.mutationKey,a))return!1}return(!s||e.state.status===s)&&(!r||!!r(e))}function y(t,e){return(e?.queryKeyHashFn||v)(t)}function v(t){return JSON.stringify(t,(t,e)=>S(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function g(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(Array.isArray(t)&&Array.isArray(e)){for(let i=0;i<e.length;i++)if(!g(t[i],e[i]))return!1;return!0}for(let i of Object.keys(e))if(!g(t[i],e[i]))return!1;return!0}return!1}let b=Object.prototype.hasOwnProperty;function w(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function S(t){if(!_(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!_(i)&&!!i.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(t)===Object.prototype}function _(t){return"[object Object]"===Object.prototype.toString.call(t)}function T(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function O(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}let x=Symbol();function C(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==x?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}var P=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};let q=new class extends P{#i;#s;#r;constructor(){super(),this.#r=t=>{if("u">typeof window&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#s||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#s?.(),this.#s=void 0)}setEventListener(t){this.#r=t,this.#s?.(),this.#s=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#i!==t&&(this.#i=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#i?this.#i:globalThis.document?.visibilityState!=="hidden"}},A=(e=[],i=0,s=t=>{t()},r=t=>{t()},a=function(t){setTimeout(t,0)},{batch:t=>{let n;i++;try{n=t()}finally{let t;--i||(t=e,e=[],t.length&&a(()=>{r(()=>{t.forEach(t=>{s(t)})})}))}return n},batchCalls:t=>(...e)=>{n(()=>{t(...e)})},schedule:n=t=>{i?e.push(t):a(()=>{s(t)})},setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{r=t},setScheduler:t=>{a=t}}),R=new class extends P{#a=!0;#s;#r;constructor(){super(),this.#r=t=>{if("u">typeof window&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#s||this.setEventListener(this.#r)}onUnsubscribe(){this.hasListeners()||(this.#s?.(),this.#s=void 0)}setEventListener(t){this.#r=t,this.#s?.(),this.#s=t(this.setOnline.bind(this))}setOnline(t){this.#a!==t&&(this.#a=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#a}};function E(t){return Math.min(1e3*2**t,3e4)}function F(t){return(t??"online")!=="online"||R.isOnline()}var D=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function L(t){let e,i,s,r=!1,a=0,n="pending",o=new Promise((t,e)=>{i=t,s=e});o.catch(d);let u=()=>q.isFocused()&&("always"===t.networkMode||R.isOnline())&&t.canRun(),c=()=>F(t.networkMode)&&t.canRun(),f=t=>{"pending"===n&&(e?.(),n="resolved",i(t))},p=t=>{"pending"===n&&(e?.(),n="rejected",s(t))},m=()=>new Promise(i=>{e=t=>{("pending"!==n||u())&&i(t)},t.onPause?.()}).then(()=>{e=void 0,"pending"===n&&t.onContinue?.()}),y=()=>{let e;if("pending"!==n)return;let i=0===a?t.initialPromise:void 0;try{e=i??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(f).catch(e=>{if("pending"!==n)return;let i=t.retry??3*!h,s=t.retryDelay??E,o="function"==typeof s?s(a,e):s,c=!0===i||"number"==typeof i&&a<i||"function"==typeof i&&i(a,e);r||!c?p(e):(a++,t.onFail?.(a,e),new Promise(t=>{l.setTimeout(t,o)}).then(()=>u()?void 0:m()).then(()=>{r?p(e):y()}))})};return{promise:o,status:()=>n,cancel:e=>{if("pending"===n){let i=new D(e);p(i),t.onCancel?.(i)}},continue:()=>(e?.(),o),cancelRetry:()=>{r=!0},continueRetry:()=>{r=!1},canStart:c,start:()=>(c()?y():m().then(y),o)}}var M=class{#n;destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.gcTime)&&t>=0&&t!==1/0&&(this.#n=l.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(h?1/0:3e5))}clearGcTimeout(){void 0!==this.#n&&(l.clearTimeout(this.#n),this.#n=void 0)}},j=class extends M{#o;#u;#c;#l;constructor(t){super(),this.#o=t.client,this.mutationId=t.mutationId,this.#c=t.mutationCache,this.#u=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#c.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#u=this.#u.filter(e=>e!==t),this.scheduleGc(),this.#c.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#u.length||("pending"===this.state.status?this.scheduleGc():this.#c.remove(this))}continue(){return this.#l?.continue()??("pending"===this.state.status?this.execute(this.state.variables):Promise.resolve())}async execute(t){let e=()=>{this.#h({type:"continue"})},i={client:this.#o,meta:this.options.meta,mutationKey:this.options.mutationKey},s=this.#l=L({fn:()=>this.options.mutationFn?this.options.mutationFn(t,i):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#h({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#h({type:"pause"})},onContinue:e,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#c.canRun(this)}),r="pending"===this.state.status,a=!s.canStart();try{if(r)e();else{this.#h({type:"pending",variables:t,isPaused:a}),this.#c.config.onMutate&&await this.#c.config.onMutate(t,this,i);let e=await this.options.onMutate?.(t,i);e!==this.state.context&&this.#h({type:"pending",context:e,variables:t,isPaused:a})}let n=await s.start();return await this.#c.config.onSuccess?.(n,t,this.state.context,this,i),await this.options.onSuccess?.(n,t,this.state.context,i),await this.#c.config.onSettled?.(n,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(n,null,t,this.state.context,i),this.#h({type:"success",data:n}),n}catch(e){try{await this.#c.config.onError?.(e,t,this.state.context,this,i)}catch(t){Promise.reject(t)}try{await this.options.onError?.(e,t,this.state.context,i)}catch(t){Promise.reject(t)}try{await this.#c.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this,i)}catch(t){Promise.reject(t)}try{await this.options.onSettled?.(void 0,e,t,this.state.context,i)}catch(t){Promise.reject(t)}throw this.#h({type:"error",error:e}),e}finally{this.#l===s&&(this.#l=void 0),this.#c.runNext(this)}}#h(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),A.batch(()=>{this.#u.forEach(e=>{e.onMutationUpdate(t)}),this.#c.notify({mutation:this,type:"updated",action:t})})}},I=class extends P{#d;#f;#p;constructor(t={}){super(),this.config=t,this.#d=new Set,this.#f=new Map,this.#p=0}build(t,e,i){let s=new j({client:t,mutationCache:this,mutationId:++this.#p,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){this.#d.add(t);let e=U(t);if("string"==typeof e){let i=this.#f.get(e);i?i.push(t):this.#f.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#d.delete(t)){let e=U(t);if("string"==typeof e){let i=this.#f.get(e);if(i)if(i.length>1){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}else i[0]===t&&this.#f.delete(e)}}this.notify({type:"removed",mutation:t})}canRun(t){let e=U(t);if("string"!=typeof e)return!0;{let i=this.#f.get(e)?.find(t=>"pending"===t.state.status);return!i||i===t}}runNext(t){let e=U(t);return"string"==typeof e?this.#f.get(e)?.find(e=>e!==t&&e.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){A.batch(()=>{this.#d.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#d.clear(),this.#f.clear()})}getAll(){return Array.from(this.#d)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>m(e,t))}findAll(t={}){return this.getAll().filter(e=>m(t,e))}notify(t){A.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return A.batch(()=>Promise.all(t.map(t=>t.continue().catch(d))))}};function U(t){return t.options.scope?.id}function Q(t,{pages:e,pageParams:i}){let s=e.length-1;return e.length>0?t.getNextPageParam(e[s],e,i[s],i):void 0}function H(t,{pages:e,pageParams:i}){return e.length>0?t.getPreviousPageParam?.(e[0],e,i[0],i):void 0}var K=class extends M{#m;#y;#v;#g;#o;#l;#b;#w;constructor(t){super(),this.#w=!1,this.#b=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#o=t.client,this.#g=this.#o.getQueryCache(),this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#y=k(this.options),this.state=t.state??this.#y,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#m}get promise(){return this.#l?.promise}setOptions(t){if(this.options={...this.#b,...t},t?._type&&(this.#m=t._type),this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){let t=k(this.options);void 0!==t.data&&(this.setState(G(t.data,t.dataUpdatedAt)),this.#y=t)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#g.remove(this)}setData(t,e){var i,s;let r=(i=this.state.data,"function"==typeof(s=this.options).structuralSharing?s.structuralSharing(i,t):!1!==s.structuralSharing?function t(e,i,s=0){if(e===i)return e;if(s>500)return i;let r=w(e)&&w(i);if(!r&&!(S(e)&&S(i)))return i;let a=(r?e:Object.keys(e)).length,n=r?i:Object.keys(i),o=n.length,u=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:n[l],h=e[o],d=i[o];if(h===d){u[o]=h,(r?l<a:b.call(e,o))&&c++;continue}if(null===h||null===d||"object"!=typeof h||"object"!=typeof d){u[o]=d;continue}let f=t(h,d,s+1);u[o]=f,f===h&&c++}return a===o&&c===a?e:u}(i,t):t);return this.#h({data:r,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),r}setState(t){this.#h({type:"setState",state:t})}cancel(t){let e=this.#l?.promise;return this.#l?.cancel(t),e?e.then(d).catch(d):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#y}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(t=>!1!==f(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===x||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(t=>"static"===f(t.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(t=0){return void 0===this.state.data||"static"!==t&&(!!this.state.isInvalidated||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0))}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#l?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#l?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#g.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){let e=this.observers.indexOf(t);-1!==e&&(this.observers.splice(e,1),this.observers.length||(this.#l&&(this.#w||"paused"===this.state.fetchStatus&&"pending"===this.state.status?this.#l.cancel({revert:!0}):this.#l.cancelRetry()),this.scheduleGc()),this.#g.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#h({type:"invalidate"})}async fetch(t,e){var i;let s;if("idle"!==this.state.fetchStatus&&this.#l?.status()!=="rejected"){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#l)return this.#l.continueRetry(),this.#l.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let r=new AbortController,a=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#w=!0,r.signal)})},n=()=>{let t,i=C(this.options,e),s=(a(t={client:this.#o,queryKey:this.queryKey,meta:this.meta}),t);return(this.#w=!1,this.options.persister)?this.options.persister(i,s,this):i(s)},o=(a(s={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#o,state:this.state,fetchFn:n}),s);("infinite"===this.#m?(i=this.options.pages,{onFetch:(t,e)=>{let s=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],n=t.state.data?.pageParams||[],o={pages:[],pageParams:[]},u=0,c=async()=>{let e=!1,c=C(t.options,t.fetchOptions),l=async(i,s,r)=>{if(e)return Promise.reject(t.signal.reason);if(null==s&&i.pages.length)return Promise.resolve(i);let a=(()=>{var i,a;let n,o,u={client:t.client,queryKey:t.queryKey,pageParam:s,direction:r?"backward":"forward",meta:t.options.meta};return i=()=>t.signal,a=()=>e=!0,o=!1,Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(n??=i(),o||(o=!0,n.aborted?a():n.addEventListener("abort",a,{once:!0})),n)}),u})(),n=await c(a),{maxPages:o}=t.options,u=r?O:T;return{pages:u(i.pages,n,o),pageParams:u(i.pageParams,s,o)}};if(r&&a.length){let t="backward"===r,e=t?H:Q,i={pages:a,pageParams:n};o=await l(i,e(s,i),t)}else{let t=i??a.length;do{let t=0===u?n[0]??s.initialPageParam:Q(s,o);if(u>0&&null==t)break;o=await l(o,t),u++}while(u<t)}return o};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},e):t.fetchFn=c}}):this.options.behavior)?.onFetch(o,this),this.#v=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#h({type:"fetch",meta:o.fetchOptions?.meta});let u=this.#l=L({initialPromise:e?.initialPromise,fn:o.fetchFn,onCancel:t=>{t instanceof D&&t.revert&&this.setState({...this.#v,fetchStatus:"idle"}),r.abort()},onFail:(t,e)=>{this.#h({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#h({type:"pause"})},onContinue:()=>{this.#h({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{let t=await u.start();if(void 0===t)throw Error(`${this.queryHash} data is undefined`);return this.setData(t),this.#g.config.onSuccess?.(t,this),this.#g.config.onSettled?.(t,this.state.error,this),t}catch(t){if(t instanceof D){if(t.silent)return this.#l.promise;else if(t.revert){if(void 0===this.state.data)throw t;return this.state.data}}throw this.#h({type:"error",error:t}),this.#g.config.onError?.(t,this),this.#g.config.onSettled?.(this.state.data,t,this),t}finally{this.#l===u&&(this.#l=void 0),this.scheduleGc()}}#h(t){let e=e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var i;return{...e,...(i=e.data,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:F(this.options.networkMode)?"fetching":"paused",...void 0===i&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":let s={...e,...G(t.data,t.dataUpdatedAt),dataUpdateCount:e.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#v=t.manual?s:void 0,s;case"error":let r=t.error;return{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}};this.state=e(this.state),A.batch(()=>{this.observers.slice().forEach(t=>{t.onQueryUpdate()}),this.#g.notify({query:this,type:"updated",action:t})})}};function G(t,e){return{data:t,dataUpdatedAt:e??Date.now(),error:null,isInvalidated:!1,status:"success"}}function k(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}var B=class extends P{#S;constructor(t={}){super(),this.config=t,this.#S=new Map}build(t,e,i){let s=e.queryKey,r=e.queryHash??y(s,e),a=this.get(r);return a||(a=new K({client:t,queryKey:s,queryHash:r,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(s)}),this.add(a)),a}add(t){this.#S.has(t.queryHash)||(this.#S.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#S.get(t.queryHash);e&&(t.destroy(),e===t&&this.#S.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){A.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#S.get(t)}getAll(){return[...this.#S.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>p(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>p(t,e)):e}notify(t){A.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){A.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){A.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},W=class{#_;#c;#b;#T;#O;#x;#C;#P;constructor(t={}){this.#_=t.queryCache||new B,this.#c=t.mutationCache||new I,this.#b=t.defaultOptions||{},this.#T=new Map,this.#O=new Map,this.#x=0}mount(){this.#x++,1===this.#x&&(this.#C=q.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#_.onFocus())}),this.#P=R.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#_.onOnline())}))}unmount(){this.#x--,0===this.#x&&(this.#C?.(),this.#C=void 0,this.#P?.(),this.#P=void 0)}isFetching(t){return this.#_.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#c.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#_.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),i=this.#_.build(this,e),s=i.state.data;return void 0===s?this.fetchQuery(t):(t.revalidateIfStale&&i.isStaleByTime(f(e.staleTime,i))&&this.prefetchQuery(e),Promise.resolve(s))}getQueriesData(t){return this.#_.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let s=this.defaultQueryOptions({queryKey:t}),r=this.#_.get(s.queryHash)?.state.data,a="function"==typeof e?e(r):e;if(void 0!==a)return this.#_.build(this,s).setData(a,{...i,manual:!0})}setQueriesData(t,e,i){return A.batch(()=>this.#_.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#_.get(e.queryHash)?.state}removeQueries(t){let e=this.#_;A.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#_;return A.batch(()=>{let s=i.findAll(t),r=new Set(s);return s.forEach(t=>{t.reset()}),this.refetchQueries({type:"active",predicate:t=>r.has(t)},e)})}cancelQueries(t,e={}){let i={revert:!0,...e};return Promise.all(A.batch(()=>this.#_.findAll(t).map(t=>t.cancel(i)))).then(d).catch(d)}invalidateQueries(t,e={}){return A.batch(()=>(this.#_.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},e))}refetchQueries(t,e={}){let i={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(A.batch(()=>this.#_.findAll(t).filter(t=>!t.isDisabled()&&!t.isStatic()).map(t=>{let e=t.fetch(void 0,i);return i.throwOnError||(e=e.catch(d)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(d)}async query(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#_.build(this,e),s=i.isStaleByTime(f(e.staleTime,i))?await i.fetch(e):i.state.data,r=e.select;return r?r(s):s}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#_.build(this,e);return i.isStaleByTime(f(e.staleTime,i))?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(d).catch(d)}infiniteQuery(t){return t._type="infinite",this.query(t)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(d).catch(d)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return R.isOnline()?this.#c.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#_}getMutationCache(){return this.#c}getDefaultOptions(){return this.#b}setDefaultOptions(t){this.#b=t}setQueryDefaults(t,e){this.#T.set(v(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#T.values()],i={};return e.forEach(e=>{g(t,e.queryKey)&&Object.assign(i,e.defaultOptions)}),i}setMutationDefaults(t,e){this.#O.set(v(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],i={};return e.forEach(e=>{g(t,e.mutationKey)&&Object.assign(i,e.defaultOptions)}),i}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#b.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=y(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===x&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#b.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#_.clear(),this.#c.clear()}},N=t.i(65859);let z=N.createContext(void 0),V=({client:t,children:e})=>(N.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,o.jsx)(z.Provider,{value:t,children:e}));function X(t){let e,i,s=(0,u.c)(5),{children:r,staleTime:a}=t,n=void 0===a?6e4:a;s[0]!==n?(e=()=>new W({defaultOptions:{queries:{staleTime:n}}}),s[0]=n,s[1]=e):e=s[1];let[c]=(0,N.useState)(e);return s[2]!==r||s[3]!==c?(i=(0,o.jsx)(V,{client:c,children:r}),s[2]=r,s[3]=c,s[4]=i):i=s[4],i}var $=t.i(9347),Y=t.i(33743);t.s(["Providers",0,function(t){let e,i=(0,u.c)(2),{children:s}=t;return i[0]!==s?(e=(0,o.jsx)($.ThemeProvider,{themeMap:Y.THEME_MAP,defaultLight:"chartreuse",defaultDark:"ghost",children:(0,o.jsx)(X,{children:s})}),i[0]=s,i[1]=e):e=i[1],e}],41284)},74516,t=>{"use strict";var e=t.i(44250),i=t.i(75075),s=t.i(9347),r=t.i(65859),a=t.i(98946),n=t.i(72120),o=t.i(62968),u=t.i(11767),c=t.i(33743);let l=`#version 300 es

layout(location = 0) in vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,h=`#version 300 es
precision highp float;

// ── Uniforms ──────────────────────────────────────────────────────────────────

uniform vec2  u_resolution;
uniform float u_time;
uniform vec3  u_color1;   // OKLab (L, a, b)
uniform vec3  u_color2;   // OKLab (L, a, b)
uniform vec3  u_color3;   // OKLab (L, a, b)
uniform vec3  u_color4;   // OKLab (L, a, b)

layout(location = 0) out vec4 fragColor;

// ── Constants ─────────────────────────────────────────────────────────────────

const float TAU            = 6.28318530717959;
const float MIN_DIST       = 0.13;
const float MAX_DIST       = 40.0;
const float STAR_THRESHOLD = 0.985;  // sparsity cutoff for star candidates

// ── OKLab → linear sRGB ───────────────────────────────────────────────────────

vec3 toRGB(vec3 lab) {
    float L = lab.x, a = lab.y, b = lab.z;
    float l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    float m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    float s_ = L - 0.0894841775 * a - 1.2914855480 * b;
    float l = l_ * l_ * l_;
    float m = m_ * m_ * m_;
    float s = s_ * s_ * s_;
    return clamp(vec3(
        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    ), 0.0, 1.0);
}

// ── Hash & noise ──────────────────────────────────────────────────────────────

// Integer-hashed white noise — avoids float precision issues at large coords.
float hash12(vec2 p) {
    uvec2 q = uvec2(ivec2(p)) * uvec2(1597334673u, 3812015801u);
    uint  n = (q.x ^ q.y) * 1597334673u;
    return float(n) * 2.328306437080797e-10;
}

// Smooth value noise — cubic Hermite interpolation.
float value2d(vec2 p) {
    vec2 pg = floor(p), pc = fract(p);
    pc = pc * pc * (3.0 - 2.0 * pc);
    return mix(
        mix(hash12(pg),                    hash12(pg + vec2(1.0, 0.0)), pc.x),
        mix(hash12(pg + vec2(0.0, 1.0)), hash12(pg + vec2(1.0)),        pc.x),
        pc.y
    );
}

// ── Star dust ─────────────────────────────────────────────────────────────────

float starPoint(vec2 p) {
    float s    = smoothstep(STAR_THRESHOLD, 1.0, hash12(p));
    float norm = 1.0 / (1.0 - STAR_THRESHOLD);
    return s > STAR_THRESHOLD ? pow((s - STAR_THRESHOLD) * norm, 8.0) : s;
}

float getStars(vec2 p, float a, float t) {
    vec2  pg = floor(p), pc = fract(p);
    pc = pc * pc * (3.0 - 2.0 * pc);
    float s = mix(
        mix(starPoint(pg),                   starPoint(pg + vec2(1.0, 0.0)), pc.x),
        mix(starPoint(pg + vec2(0.0, 1.0)), starPoint(pg + vec2(1.0)),       pc.x),
        pc.y
    );
    return smoothstep(a, a + t, s) * pow(value2d(p * 0.08 + t) * 0.5 + 0.5, 6.0);
}

float getDust(vec2 uv, float f) {
    float invAspect = u_resolution.y / u_resolution.x;
    vec2  pp   = uv * 1600.0 * vec2(1.0, invAspect);
    float band = pow(0.60 + 0.40 * cos((uv.x - 0.5) * TAU), 2.0);
    float s    = getStars(pp * 0.18 + u_time * vec2(18.0, -7.5), 0.09, 0.65);
    return band * f * s * 2.2;
}

// ── Wave SDF ──────────────────────────────────────────────────────────────────

// Precomputed surface normal for the wave plane (constant across all calls).
const vec3 WAVE_UP = vec3(0.0, 0.97979590, 0.04898979); // normalize(vec3(0,1,0.05))

float sdfWave(vec3 p, float yOff) {
    p *= 2.0;
    float o = 3.90 * sin(p.x * 0.055 + u_time * 0.22)
            + 0.85 * sin(p.x * 0.14  + u_time * 0.45 + 1.3)
            + 0.04 * p.z
                   * sin(p.x * 0.10 + u_time * 0.92) * 2.0
                   * sin(p.z * 0.19 + u_time * 0.68)
                   * value2d(p.xz * vec2(0.028, 0.38) + vec2(u_time * 0.42, 0.0));
    return abs(dot(p, WAVE_UP) + 2.5 + yOff + o * 0.48);
}

// ── Wave ray-march ────────────────────────────────────────────────────────────
// Returns vec3(accumAlpha, glowProximity, finalT).
// A single parameterised function replaces the original full/lite pair.

vec3 raymarchWave(vec3 ro, vec3 rd, float omega, float yOff,
                  int maxSteps, int maxDr, float aHit, float aStep) {
    float t  = 0.0, a = 0.0, g = MAX_DIST, dt = 0.0, sl = 0.0;
    const float EMIN = 0.03;
    int  dr  = 0;
    bool hit = false;

    for (int i = 0; i < 22; i++) {
        if (i >= maxSteps) break;
        vec3  p   = ro + rd * t;
        float ndt = sdfWave(p, yOff);
        if (abs(dt) + abs(ndt) < sl) {
            sl    -= omega * sl;
            omega  = 1.0;
        } else {
            sl = ndt * omega;
        }
        dt = ndt; t += sl;
        if (t > 10.0) g = min(g, abs(dt));
        t += dt;
        if (t >= MAX_DIST) break;
        if (dt < MIN_DIST) {
            if (dr >= maxDr) break;
            dr++;
            float f = smoothstep(0.09, 0.11, p.z * 0.009);
            if (!hit) { a = aHit; hit = true; }
            a += aStep * f;
            t += 2.0 * max(EMIN, abs(ndt));
        }
    }
    return vec3(a, max(1.0 - g * 0.333, 0.0), t);
}

// ── Main ──────────────────────────────────────────────────────────────────────

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    vec3 ro = vec3(0.0);
    vec3 rd = normalize(vec3((gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y, 1.0));

    // Primary wave (full quality) + two secondary waves (reduced quality).
    vec3 wd0 = raymarchWave(ro, rd, 1.20,  0.0, 22, 13, 0.010, 0.014);
    vec3 wd1 = raymarchWave(ro, rd, 1.15,  5.8, 13,  9, 0.008, 0.011);
    vec3 wd2 = raymarchWave(ro, rd, 1.15, -5.0, 13,  9, 0.008, 0.011);

    float gp = dot(uv, vec2(0.7071068));

    float d1 = abs(u_color2.x - u_color1.x);
    float d2 = abs(u_color3.x - u_color2.x);
    float d3 = abs(u_color4.x - u_color3.x);
    float dTotal = max(d1 + d2 + d3, 1e-4);
    float t1 = d1 / dTotal;
    float t2 = t1 + d2 / dTotal;

    vec3 p0, p1, p2, p3;
    float localT;

    if (gp < t1) {
        localT = clamp(gp / max(t1, 1e-4), 0.0, 1.0);
        p0 = u_color1 - (u_color2 - u_color1);
        p1 = u_color1; p2 = u_color2; p3 = u_color3;
    } else if (gp < t2) {
        localT = clamp((gp - t1) / max(t2 - t1, 1e-4), 0.0, 1.0);
        p0 = u_color1; p1 = u_color2; p2 = u_color3; p3 = u_color4;
    } else {
        localT = clamp((gp - t2) / max(1.0 - t2, 1e-4), 0.0, 1.0);
        p0 = u_color2; p1 = u_color3; p2 = u_color4;
        p3 = u_color4 + (u_color4 - u_color3);
    }

    float tt = localT, tt2 = tt * tt, tt3 = tt2 * tt;
    vec3 lab = 0.5 * (
        (2.0 * p1) +
        (-p0 + p2) * tt +
        (2.0*p0 - 5.0*p1 + 4.0*p2 - p3) * tt2 +
        (-p0 + 3.0*p1 - 3.0*p2 + p3) * tt3
    );

    vec3 c = toRGB(lab);

    // ── Wave rib tints ────────────────────────────────────────────────────────
    vec3 ribTint0 = toRGB(mix(u_color3, u_color4, 0.30));
    vec3 ribTint1 = toRGB(mix(u_color4, u_color3, 0.45));
    vec3 ribTint2 = toRGB(mix(u_color2, u_color3, 0.50));

    // Luminance-adaptive white blend: dark themes glow brightly; light themes
    // get a subdued tint to avoid washing out to white.
    float bgLum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float wb    = clamp(1.0 - bgLum, 0.0, 0.65);

    c  = mix(c, mix(ribTint0, vec3(1.0), wb),        wd0.x);
    c += mix(ribTint0, vec3(1.0), wb * 0.88) * wd0.y * 0.22;
    c += mix(ribTint1, vec3(1.0), wb * 0.88) * wd1.x * 0.72;
    c += ribTint1                             * wd1.y * 0.14;
    c += mix(ribTint2, vec3(1.0), wb * 0.81) * wd2.x * 0.58;
    c += ribTint2                             * wd2.y * 0.11;

    // ── Dust sparkle ──────────────────────────────────────────────────────────
    float dustGlow = max(wd0.y, max(wd1.y, wd2.y));
    vec3  dustTint = toRGB(mix(u_color3, u_color4, 0.5)) * 0.6 + 0.4;
    c += getDust(uv, dustGlow) * dustTint * 0.32;

    // ── Corner ripples (bottom-right origin) ──────────────────────────────────
    float sm   = min(u_resolution.x, u_resolution.y) * 0.001;
    float dist = length(gl_FragCoord.xy - vec2(u_resolution.x + 50.0, -50.0));
    float rip  = 0.0;
    for (int i = 0; i < 4; i++) {
        float ripFrac = fract(u_time * 0.13 + float(i) * 0.25);
        float r       = ripFrac * 950.0 * sm;
        float fade    = (1.0 - ripFrac) * (1.0 - ripFrac);
        rip += max(0.0, 1.0 - abs(dist - r) / (7.0 * sm)) * fade * 0.055;
    }
    vec3 ripTint = toRGB(mix(u_color3, u_color4, 0.4)) * 0.5 + 0.5;
    c += rip * ripTint;

    fragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;function d(t,e,i){let s=t.createShader(e);return t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)||console.error("[RootWebGL] shader compile error:",t.getShaderInfoLog(s)),s}function f(){let t=(0,r.useRef)(null),i=(0,r.useRef)(c.THEME_COLORS.frost),{theme:s}=(0,u.useWebGLContext)();return i.current=c.THEME_COLORS[s]??c.THEME_COLORS.frost,(0,r.useEffect)(()=>{let e=t.current;if(!e)return;let s=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance",desynchronized:!0});if(!s)return;let r=s.getExtension("KHR_parallel_shader_compile"),a=d(s,s.VERTEX_SHADER,l),n=d(s,s.FRAGMENT_SHADER,h),o=s.createProgram();s.attachShader(o,a),s.attachShader(o,n),s.linkProgram(o),s.detachShader(o,a),s.detachShader(o,n),s.deleteShader(a),s.deleteShader(n);let u=s.createVertexArray();s.bindVertexArray(u);let c=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,c),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),s.STATIC_DRAW),s.enableVertexAttribArray(0),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0);let f=.65*Math.min(window.devicePixelRatio,1.5),p=()=>{e.width=Math.round(window.innerWidth*f),e.height=Math.round(window.innerHeight*f),e.style.width=`${window.innerWidth}px`,e.style.height=`${window.innerHeight}px`,s.viewport(0,0,e.width,e.height)};p();let m=0,y=()=>{clearTimeout(m),m=window.setTimeout(p,100)};window.addEventListener("resize",y);let v=performance.now(),g=0,b=0,w=!0,S=()=>{w="visible"===document.visibilityState};document.addEventListener("visibilitychange",S);let _=!1,T=null,O=t=>{if(g=requestAnimationFrame(O),!_)return void(!(!r||s.getProgramParameter(o,r.COMPLETION_STATUS_KHR))||(!s.getProgramParameter(o,s.LINK_STATUS)?console.error("[RootWebGL] link error:",s.getProgramInfoLog(o)):(s.useProgram(o),T={resolution:s.getUniformLocation(o,"u_resolution"),time:s.getUniformLocation(o,"u_time"),color1:s.getUniformLocation(o,"u_color1"),color2:s.getUniformLocation(o,"u_color2"),color3:s.getUniformLocation(o,"u_color3"),color4:s.getUniformLocation(o,"u_color4")},_=!0)));if(!w||t-b<33)return;b=t;let a=T,n=i.current;s.uniform2f(a.resolution,e.width,e.height),s.uniform1f(a.time,(t-v)*.001),s.uniform3fv(a.color1,n.subarray(0,3)),s.uniform3fv(a.color2,n.subarray(3,6)),s.uniform3fv(a.color3,n.subarray(6,9)),s.uniform3fv(a.color4,n.subarray(9,12)),s.drawArrays(s.TRIANGLE_STRIP,0,4)};return g=requestAnimationFrame(O),()=>{cancelAnimationFrame(g),clearTimeout(m),window.removeEventListener("resize",y),document.removeEventListener("visibilitychange",S),s.deleteVertexArray(u),s.deleteBuffer(c),s.deleteProgram(o)}},[]),(0,e.jsx)("canvas",{ref:t,className:"root-layout__canvas"})}function p(){let t,e,a=(0,i.c)(5),{theme:n}=(0,s.useThemeContext)(),{theme:o,setTheme:c}=(0,u.useWebGLContext)();return a[0]!==n||a[1]!==o||a[2]!==c?(t=()=>{n&&n!==o&&c(n)},e=[n,o,c],a[0]=n,a[1]=o,a[2]=c,a[3]=t,a[4]=e):(t=a[3],e=a[4]),(0,r.useEffect)(t,e),null}t.s(["Root",0,function(t){let r,c,l,h,d,m,y,v=(0,i.c)(11),{children:g}=t,{theme:b}=(0,s.useThemeContext)();return v[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,e.jsx)(p,{}),v[0]=r):r=v[0],v[1]===Symbol.for("react.memo_cache_sentinel")?(c=(0,e.jsx)(f,{}),l=(0,e.jsx)(a.StatusBar,{}),v[1]=c,v[2]=l):(c=v[1],l=v[2]),v[3]!==g?(h=(0,e.jsx)("div",{className:"root-layout__content",children:g}),v[3]=g,v[4]=h):h=v[4],v[5]===Symbol.for("react.memo_cache_sentinel")?(d=(0,e.jsx)(n.Taskbar,{}),v[5]=d):d=v[5],v[6]!==h?(m=(0,e.jsxs)("div",{className:"root-layout__screen",children:[c,l,h,d]}),v[6]=h,v[7]=m):m=v[7],v[8]!==b||v[9]!==m?(y=(0,e.jsx)(o.SectionsProvider,{children:(0,e.jsxs)(u.WebGLProvider,{defaultTheme:b,children:[r,m]})}),v[8]=b,v[9]=m,v[10]=y):y=v[10],y}],74516)}]);