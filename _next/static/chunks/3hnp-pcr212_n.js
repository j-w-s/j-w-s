(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47315,95673,50224,78780,71707,99893,55859,11030,65280,68352,93533,e=>{"use strict";var t=e.i(44250),a=e.i(75075);function r(e,t,a){let r=[`btn-${e}`];return"md"!==t&&r.push(`btn-${t}`),a&&r.push("btn-full"),r.join(" ")}function o(e){let o,l,i,n,s,c,f,d,u,h=(0,a.c)(18);h[0]!==e?({variant:i,size:n,full:s,children:o,className:c,...l}=e,h[0]=e,h[1]=o,h[2]=l,h[3]=i,h[4]=n,h[5]=s,h[6]=c):(o=h[1],l=h[2],i=h[3],n=h[4],s=h[5],c=h[6]);let m=void 0===i?"primary":i,v=void 0===n?"md":n,p=void 0!==s&&s,g=void 0===c?"":c;h[7]!==p||h[8]!==v||h[9]!==m?(f=r(m,v,p),h[7]=p,h[8]=v,h[9]=m,h[10]=f):f=h[10],h[11]!==g||h[12]!==f?(d=[f,g].filter(Boolean),h[11]=g,h[12]=f,h[13]=d):d=h[13];let b=d.join(" ");return h[14]!==o||h[15]!==l||h[16]!==b?(u=(0,t.jsx)("button",{className:b,...l,children:o}),h[14]=o,h[15]=l,h[16]=b,h[17]=u):u=h[17],u}e.s(["Button",0,o,"ButtonLink",0,function(e){let o,l,i,n,s,c,f,d,u,h,m=(0,a.c)(20);m[0]!==e?({variant:n,size:s,full:c,href:l,children:o,className:f,...i}=e,m[0]=e,m[1]=o,m[2]=l,m[3]=i,m[4]=n,m[5]=s,m[6]=c,m[7]=f):(o=m[1],l=m[2],i=m[3],n=m[4],s=m[5],c=m[6],f=m[7]);let v=void 0===n?"ghost":n,p=void 0===s?"md":s,g=void 0!==c&&c,b=void 0===f?"":f;m[8]!==g||m[9]!==p||m[10]!==v?(d=r(v,p,g),m[8]=g,m[9]=p,m[10]=v,m[11]=d):d=m[11],m[12]!==b||m[13]!==d?(u=[d,b].filter(Boolean),m[12]=b,m[13]=d,m[14]=u):u=m[14];let x=u.join(" ");return m[15]!==o||m[16]!==l||m[17]!==i||m[18]!==x?(h=(0,t.jsx)("a",{className:x,href:l,...i,children:o}),m[15]=o,m[16]=l,m[17]=i,m[18]=x,m[19]=h):h=m[19],h},"IconButton",0,function(e){let r,o,l,i,n,s,c=(0,a.c)(12);c[0]!==e?({label:o,children:r,className:i,...l}=e,c[0]=e,c[1]=r,c[2]=o,c[3]=l,c[4]=i):(r=c[1],o=c[2],l=c[3],i=c[4]);let f=void 0===i?"":i;c[5]!==f?(n=["btn-icon",f].filter(Boolean),c[5]=f,c[6]=n):n=c[6];let d=n.join(" ");return c[7]!==r||c[8]!==o||c[9]!==l||c[10]!==d?(s=(0,t.jsx)("button",{className:d,"aria-label":o,...l,children:r}),c[7]=r,c[8]=o,c[9]=l,c[10]=d,c[11]=s):s=c[11],s}],95673);var l=e.i(65859);let i=["Su","Mo","Tu","We","Th","Fr","Sa"],n=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function c(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function f(){let e,r=(0,a.c)(1);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":!0,style:{width:10,height:10},children:(0,t.jsx)("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})}),r[0]=e):e=r[0],e}function d(){let e,r=(0,a.c)(1);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":!0,style:{width:10,height:10},children:(0,t.jsx)("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),r[0]=e):e=r[0],e}function u(){let e,r=(0,a.c)(1);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":!0,style:{width:14,height:14},children:(0,t.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})}),r[0]=e):e=r[0],e}function h(){let e,r=(0,a.c)(1);return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":!0,style:{width:14,height:14},children:(0,t.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})}),r[0]=e):e=r[0],e}function m(e){let r,o,l,i,n,s,c,u,h,m,v,p=(0,a.c)(32),{label:g,value:b,min:x,max:y,onChange:_}=e;p[0]!==y||p[1]!==x||p[2]!==_||p[3]!==b?(r=()=>_(b>=y?x:b+1),p[0]=y,p[1]=x,p[2]=_,p[3]=b,p[4]=r):r=p[4];let S=r;p[5]!==y||p[6]!==x||p[7]!==_||p[8]!==b?(o=()=>_(b<=x?y:b-1),p[5]=y,p[6]=x,p[7]=_,p[8]=b,p[9]=o):o=p[9];let w=o,C=`Increment ${g}`;p[10]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)(f,{}),p[10]=l):l=p[10],p[11]!==S||p[12]!==C?(i=(0,t.jsx)("button",{type:"button",className:"calendar__spin-btn","aria-label":C,onClick:S,children:l}),p[11]=S,p[12]=C,p[13]=i):i=p[13];let R=String(b);p[14]!==R?(n=R.padStart(2,"0"),p[14]=R,p[15]=n):n=p[15],p[16]!==g||p[17]!==n?(s=(0,t.jsx)("div",{className:"calendar__time-value","aria-label":g,children:n}),p[16]=g,p[17]=n,p[18]=s):s=p[18];let T=`Decrement ${g}`;return p[19]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(d,{}),p[19]=c):c=p[19],p[20]!==w||p[21]!==T?(u=(0,t.jsx)("button",{type:"button",className:"calendar__spin-btn","aria-label":T,onClick:w,children:c}),p[20]=w,p[21]=T,p[22]=u):u=p[22],p[23]!==u||p[24]!==i||p[25]!==s?(h=(0,t.jsxs)("div",{className:"calendar__time-spin",children:[i,s,u]}),p[23]=u,p[24]=i,p[25]=s,p[26]=h):h=p[26],p[27]!==g?(m=(0,t.jsx)("span",{className:"calendar__time-sublabel",children:g}),p[27]=g,p[28]=m):m=p[28],p[29]!==h||p[30]!==m?(v=(0,t.jsxs)("div",{className:"calendar__time-field",children:[h,m]}),p[29]=h,p[30]=m,p[31]=v):v=p[31],v}function v(e,a){return(0,t.jsx)("span",{className:`calendar__day-dot calendar__day-dot--${e}`},a)}function p(e){return(0,t.jsx)("div",{className:"calendar__weekday",role:"columnheader","aria-label":e,tabIndex:-1,children:e},e)}function g(e){return e+1}function b(e){return e-1}function x(e){let r,o,l,i,n=(0,a.c)(9),{title:s,links:c}=e;return n[0]!==s?(r=(0,t.jsx)("div",{className:"footer-col-title",children:s}),n[0]=s,n[1]=r):r=n[1],n[2]!==c?(o=c.map(y),n[2]=c,n[3]=o):o=n[3],n[4]!==o?(l=(0,t.jsx)("ul",{children:o}),n[4]=o,n[5]=l):l=n[5],n[6]!==r||n[7]!==l?(i=(0,t.jsxs)("div",{className:"footer-col",children:[r,l]}),n[6]=r,n[7]=l,n[8]=i):i=n[8],i}function y(e,a){return(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.href,target:e.target,rel:e.rel,children:e.label})},`${a}-${e.label}`)}function _(e,a){return(0,t.jsx)("a",{href:e.href,children:e.label},`${a}-${e.label}`)}function S(e){return(0,t.jsx)(x,{title:e.title,links:e.links},e.title)}function w(e,a){return(0,t.jsx)("a",{className:"footer-social-link",href:e.href,"aria-label":e.label,target:"_blank",rel:"noopener noreferrer",children:e.icon},`${a}-${e.label}`)}e.s(["Calendar",0,function(e){let r,f,d,x,y,_,S,w,C,R,T,E,N,D,L,A,k,P,B,F,O,I,G,M,U,W,H,z,j,V,X,q,Y,K,$,J,Q,Z,ee,et,ea=(0,a.c)(106);ea[0]!==e?({value:N,defaultValue:r,onChange:y,showTime:S,showApply:w,onApply:x,events:C,minDate:d,maxDate:f,wide:R,readOnly:T,className:E,..._}=e,ea[0]=e,ea[1]=r,ea[2]=f,ea[3]=d,ea[4]=x,ea[5]=y,ea[6]=_,ea[7]=S,ea[8]=w,ea[9]=C,ea[10]=R,ea[11]=T,ea[12]=E,ea[13]=N):(r=ea[1],f=ea[2],d=ea[3],x=ea[4],y=ea[5],_=ea[6],S=ea[7],w=ea[8],C=ea[9],R=ea[10],T=ea[11],E=ea[12],N=ea[13]);let er=void 0!==S&&S,eo=void 0!==w&&w;ea[14]!==C?(D=void 0===C?[]:C,ea[14]=C,ea[15]=D):D=ea[15];let el=D,ei=void 0!==R&&R,en=void 0!==T&&T,es=void 0===E?"":E,[ec,ef]=(0,l.useState)(null);ea[16]===Symbol.for("react.memo_cache_sentinel")?(L=()=>{ef(new Date)},A=[],ea[16]=L,ea[17]=A):(L=ea[16],A=ea[17]),(0,l.useEffect)(L,A),ea[18]!==r||ea[19]!==N?(k=()=>r??N??new Date,ea[18]=r,ea[19]=N,ea[20]=k):k=ea[20];let[ed,eu]=(0,l.useState)(k),eh=N??ed;ea[21]!==eh?(P=eh.getFullYear(),ea[21]=eh,ea[22]=P):P=ea[22];let[em,ev]=(0,l.useState)(P);ea[23]!==eh?(B=eh.getMonth(),ea[23]=eh,ea[24]=B):B=ea[24];let[ep,eg]=(0,l.useState)(B),[eb,ex]=(0,l.useState)(0),[ey,e_]=(0,l.useState)(0),[eS,ew]=(0,l.useState)(0);if(ea[25]!==eh?(F=()=>{ex(eh.getHours()),e_(eh.getMinutes()),ew(eh.getSeconds())},ea[25]=eh,ea[26]=F):F=ea[26],ea[27]!==eh.getHours||ea[28]!==eh.getMinutes||ea[29]!==eh.getSeconds?(O=[eh.getSeconds,eh.getMinutes,eh.getHours],ea[27]=eh.getHours,ea[28]=eh.getMinutes,ea[29]=eh.getSeconds,ea[30]=O):O=ea[30],(0,l.useEffect)(F,O),ea[31]!==el){for(let e of(I=new Map,el)){let t=s(e.date),a=I.get(t)??[];a.push(e.color??"default"),I.set(t,a)}ea[31]=el,ea[32]=I}else I=ea[32];let eC=I;ea[33]!==ep||ea[34]!==em?(G=function(e,t){let a=new Date(e,t,1),r=new Date(e,t+1,0),o=a.getDay(),l=6-r.getDay(),i=[];for(let a=o;a>0;a--)i.push(new Date(e,t,1-a));for(let a=1;a<=r.getDate();a++)i.push(new Date(e,t,a));for(let a=1;a<=l;a++)i.push(new Date(e,t+1,a));for(;i.length<42;){let e=i[i.length-1];i.push(new Date(e.getFullYear(),e.getMonth(),e.getDate()+1))}return i}(em,ep),ea[33]=ep,ea[34]=em,ea[35]=G):G=ea[35];let eR=G;ea[36]===Symbol.for("react.memo_cache_sentinel")?(M=()=>{eg(e=>0===e?(ev(b),11):e-1)},ea[36]=M):M=ea[36];let eT=M;ea[37]===Symbol.for("react.memo_cache_sentinel")?(U=()=>{eg(e=>11===e?(ev(g),0):e+1)},ea[37]=U):U=ea[37];let eE=U;ea[38]!==eb||ea[39]!==f||ea[40]!==d||ea[41]!==ey||ea[42]!==y||ea[43]!==eS||ea[44]!==er?(W=e=>{let t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),er?eb:0,er?ey:0,er?eS:0);null!=d&&t<d||null!=f&&t>f||(eu(t),y?.(t))},ea[38]=eb,ea[39]=f,ea[40]=d,ea[41]=ey,ea[42]=y,ea[43]=eS,ea[44]=er,ea[45]=W):W=ea[45];let eN=W;ea[46]!==y||ea[47]!==eh?(H=(e,t,a)=>{let r=new Date(eh.getFullYear(),eh.getMonth(),eh.getDate(),e,t,a);ex(e),e_(t),ew(a),eu(r),y?.(r)},ea[46]=y,ea[47]=eh,ea[48]=H):H=ea[48];let eD=H;ea[49]!==eb||ea[50]!==ey||ea[51]!==x||ea[52]!==eS||ea[53]!==eh?(z=()=>{x?.(new Date(eh.getFullYear(),eh.getMonth(),eh.getDate(),eb,ey,eS))},ea[49]=eb,ea[50]=ey,ea[51]=x,ea[52]=eS,ea[53]=eh,ea[54]=z):z=ea[54];let eL=z,eA=ei?"calendar--wide":"",ek=en?"calendar--read-only":"";ea[55]!==es||ea[56]!==eA||ea[57]!==ek?(j=["calendar",eA,ek,es].filter(Boolean),ea[55]=es,ea[56]=eA,ea[57]=ek,ea[58]=j):j=ea[58];let eP=j.join(" ");ea[59]===Symbol.for("react.memo_cache_sentinel")?(V=(0,t.jsx)("button",{type:"button",className:"calendar__nav-btn","aria-label":"Previous month",onClick:eT,children:(0,t.jsx)(u,{})}),ea[59]=V):V=ea[59];let eB=n[ep];ea[60]!==em||ea[61]!==eB?(X=(0,t.jsxs)("span",{className:"calendar__month-label",children:[eB," ",em]}),ea[60]=em,ea[61]=eB,ea[62]=X):X=ea[62],ea[63]===Symbol.for("react.memo_cache_sentinel")?(q=(0,t.jsx)("button",{type:"button",className:"calendar__nav-btn","aria-label":"Next month",onClick:eE,children:(0,t.jsx)(h,{})}),ea[63]=q):q=ea[63],ea[64]!==X?(Y=(0,t.jsxs)("div",{className:"calendar__header",children:[V,X,q]}),ea[64]=X,ea[65]=Y):Y=ea[65],ea[66]===Symbol.for("react.memo_cache_sentinel")?(K=(0,t.jsx)("div",{className:"calendar__divider","aria-hidden":!0}),ea[66]=K):K=ea[66];let eF=`${n[ep]} ${em}`;if(ea[67]===Symbol.for("react.memo_cache_sentinel")?($=i.map(p),ea[67]=$):$=ea[67],ea[68]!==ep||ea[69]!==eC||ea[70]!==eR||ea[71]!==f||ea[72]!==d||ea[73]!==eN||ea[74]!==eh||ea[75]!==ec){let e;ea[77]!==ep||ea[78]!==eC||ea[79]!==f||ea[80]!==d||ea[81]!==eN||ea[82]!==eh||ea[83]!==ec?(e=e=>{let a=e.getMonth()!==ep,r=null!==ec&&c(e,ec),o=c(e,eh),l=null!=d&&e<d||null!=f&&e>f,i=["calendar__day",a?"calendar__day--other-month":"",r?"calendar__day--today":"",o?"calendar__day--selected":""].filter(Boolean).join(" "),n=a?[]:eC.get(s(e))??[];return(0,t.jsxs)("button",{type:"button",role:"gridcell",className:i,"aria-selected":o,"aria-disabled":l||a,"aria-label":e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),tabIndex:a||l?-1:0,onClick:()=>!l&&eN(e),children:[e.getDate(),n.length>0&&(0,t.jsx)("span",{className:"calendar__day-dots","aria-hidden":!0,children:n.slice(0,3).map(v)})]},e.toISOString())},ea[77]=ep,ea[78]=eC,ea[79]=f,ea[80]=d,ea[81]=eN,ea[82]=eh,ea[83]=ec,ea[84]=e):e=ea[84],J=eR.map(e),ea[68]=ep,ea[69]=eC,ea[70]=eR,ea[71]=f,ea[72]=d,ea[73]=eN,ea[74]=eh,ea[75]=ec,ea[76]=J}else J=ea[76];return ea[85]!==eF||ea[86]!==J?(Q=(0,t.jsxs)("div",{className:"calendar__grid",role:"grid","aria-label":eF,children:[$,J]}),ea[85]=eF,ea[86]=J,ea[87]=Q):Q=ea[87],ea[88]!==eb||ea[89]!==ey||ea[90]!==eS||ea[91]!==er||ea[92]!==eD?(Z=er&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"calendar__time-divider","aria-hidden":!0}),(0,t.jsxs)("div",{className:"calendar__time",children:[(0,t.jsx)("span",{className:"calendar__time-label",children:"Time"}),(0,t.jsxs)("div",{className:"calendar__time-row",role:"group","aria-label":"Time selector",children:[(0,t.jsx)(m,{label:"HH",value:eb,min:0,max:23,onChange:e=>eD(e,ey,eS)}),(0,t.jsx)("span",{className:"calendar__time-sep","aria-hidden":!0,children:":"}),(0,t.jsx)(m,{label:"MM",value:ey,min:0,max:59,onChange:e=>eD(eb,e,eS)}),(0,t.jsx)("span",{className:"calendar__time-sep","aria-hidden":!0,children:":"}),(0,t.jsx)(m,{label:"SS",value:eS,min:0,max:59,onChange:e=>eD(eb,ey,e)})]})]})]}),ea[88]=eb,ea[89]=ey,ea[90]=eS,ea[91]=er,ea[92]=eD,ea[93]=Z):Z=ea[93],ea[94]!==eL||ea[95]!==y||ea[96]!==eh||ea[97]!==eo?(ee=eo&&(0,t.jsxs)("div",{className:"calendar__footer",children:[(0,t.jsx)(o,{variant:"ghost",size:"sm",onClick:()=>y?.(eh),children:"Cancel"}),(0,t.jsx)(o,{variant:"accent",size:"sm",full:!0,onClick:eL,children:"Apply"})]}),ea[94]=eL,ea[95]=y,ea[96]=eh,ea[97]=eo,ea[98]=ee):ee=ea[98],ea[99]!==_||ea[100]!==eP||ea[101]!==Y||ea[102]!==Q||ea[103]!==Z||ea[104]!==ee?(et=(0,t.jsxs)("div",{className:eP,role:"application","aria-label":"Calendar",..._,children:[Y,K,Q,Z,ee]}),ea[99]=_,ea[100]=eP,ea[101]=Y,ea[102]=Q,ea[103]=Z,ea[104]=ee,ea[105]=et):et=ea[105],et}],50224),e.s(["Footer",0,function(e){let r,o,l,i,n,s,c,f,d,u,h,m,v,p,g,b,x,y,C,R,T,E,N=(0,a.c)(44);N[0]!==e?({brandName:r,description:l,columns:n,socials:s,copyright:o,metaLinks:c,className:f,...i}=e,N[0]=e,N[1]=r,N[2]=o,N[3]=l,N[4]=i,N[5]=n,N[6]=s,N[7]=c,N[8]=f):(r=N[1],o=N[2],l=N[3],i=N[4],n=N[5],s=N[6],c=N[7],f=N[8]),N[9]!==n?(d=void 0===n?[]:n,N[9]=n,N[10]=d):d=N[10];let D=d;N[11]!==s?(u=void 0===s?[]:s,N[11]=s,N[12]=u):u=N[12];let L=u;N[13]!==c?(h=void 0===c?[]:c,N[13]=c,N[14]=h):h=N[14];let A=h,k=void 0===f?"":f;N[15]!==k?(m=["footer",k].filter(Boolean),N[15]=k,N[16]=m):m=N[16];let P=m.join(" ");return N[17]!==r?(v=(0,t.jsx)("div",{className:"footer-brand-name",children:r}),N[17]=r,N[18]=v):v=N[18],N[19]!==l?(p=l&&(0,t.jsx)("p",{className:"footer-brand-desc",children:l}),N[19]=l,N[20]=p):p=N[20],N[21]!==L?(g=L.length>0&&(0,t.jsx)("div",{className:"footer-socials",children:L.map(w)}),N[21]=L,N[22]=g):g=N[22],N[23]!==v||N[24]!==p||N[25]!==g?(b=(0,t.jsxs)("div",{children:[v,p,g]}),N[23]=v,N[24]=p,N[25]=g,N[26]=b):b=N[26],N[27]!==D?(x=D.map(S),N[27]=D,N[28]=x):x=N[28],N[29]!==b||N[30]!==x?(y=(0,t.jsxs)("div",{className:"footer-top",children:[b,x]}),N[29]=b,N[30]=x,N[31]=y):y=N[31],N[32]!==o?(C=o&&(0,t.jsx)("div",{className:"footer-copy",children:o}),N[32]=o,N[33]=C):C=N[33],N[34]!==A?(R=A.length>0&&(0,t.jsx)("div",{className:"footer-meta",children:A.map(_)}),N[34]=A,N[35]=R):R=N[35],N[36]!==C||N[37]!==R?(T=(0,t.jsxs)("div",{className:"footer-bottom",children:[C,R]}),N[36]=C,N[37]=R,N[38]=T):T=N[38],N[39]!==i||N[40]!==y||N[41]!==T||N[42]!==P?(E=(0,t.jsxs)("footer",{className:P,...i,children:[y,T]}),N[39]=i,N[40]=y,N[41]=T,N[42]=P,N[43]=E):E=N[43],E}],78780);var C=e.i(33743),R=e.i(11767);let T=`#version 300 es

layout(location = 0) in vec2 a_pos;

out vec2 v_uv;

void main() {
    v_uv        = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`,E=`#version 300 es
precision highp float;

// ── Uniforms ──────────────────────────────────────────────────────────────────

uniform sampler2D u_panelTex;
uniform float     u_time;
uniform float     u_sunMeter;
uniform vec3      u_fillColor;      // linear RGB accent tint
uniform float     u_fillIntensity;
uniform float     u_res;

uniform vec3 u_themeColor1;         // OKLab (L, a, b)
uniform vec3 u_themeColor2;         // OKLab (L, a, b)
uniform vec3 u_themeColor3;         // OKLab (L, a, b)
uniform vec3 u_themeColor4;         // OKLab (L, a, b)

in vec2 v_uv;

layout(location = 0) out vec4 fragColor;

// ── Constants ─────────────────────────────────────────────────────────────────

const float PI      = 3.14159265358979;
const float TWO_PI  = 6.28318530717959;
const float EPS     = 1e-5;
const float IOR     = 1.52;
const float DISP    = 0.045;
const float SPHERE_R = 0.46;

const vec3 C_SPEC_HOT = vec3(1.00, 1.00, 1.00);
const vec3 C_RIM_COLD = vec3(0.60, 0.76, 1.00);
const vec3 C_GOLD     = vec3(1.00, 0.68, 0.01);

// ── Small helpers ─────────────────────────────────────────────────────────────

float pow2(float x) { return x * x; }
float pow3(float x) { return x * x * x; }
float pow5(float x) { float x2 = x * x; return x2 * x2 * x; }
float sat(float x)  { return clamp(x, 0.0, 1.0); }

// ── OKLab → linear sRGB ───────────────────────────────────────────────────────
// Theme uniforms arrive as OKLab triples.  Blend in OKLab space for
// perceptual uniformity; call toRGB() only at the compositing stage.

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

float hash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p.yx + 19.19);
    return fract((p.x + p.y) * p.x);
}

// Smooth value noise — cubic Hermite interpolation.
float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash21(i),               hash21(i + vec2(1.0, 0.0)), u.x),
        mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0)),   u.x),
        u.y
    );
}

// ── Physically-loose shading terms ────────────────────────────────────────────

float schlickF(float cosTheta, float f0) {
    return f0 + (1.0 - f0) * pow5(1.0 - cosTheta);
}

float ggxD(float NdotH, float roughness) {
    float a  = roughness * roughness;
    float a2 = a * a;
    float d  = (NdotH * NdotH) * (a2 - 1.0) + 1.0;
    return a2 / (PI * d * d + EPS);
}

// ── Sun / sky environment ─────────────────────────────────────────────────────

vec3 sunDir() {
    float ang = (u_sunMeter - 0.5) * PI;
    return normalize(vec3(
        sin(ang),
        cos(u_sunMeter * PI) * 0.55 + 0.55,
        0.75 + 0.15 * sin(u_time * 0.4)
    ));
}

vec3 envSky(vec3 dir) {
    // Theme-tinted sky: cool theme stop 1 → warm theme stop 4, by elevation.
    vec3 skyLab = mix(u_themeColor1, u_themeColor4, pow2(sat(dir.y)));
    vec3 sky    = toRGB(skyLab);
    vec3 sun    = sunDir();
    sky += C_GOLD * exp((dot(normalize(dir), sun) - 1.0) * 20.0) * 0.5 * sat(sun.y + 0.15);
    vec3 horizonLab = mix(u_themeColor2, u_themeColor3, 0.4);
    return mix(sky, toRGB(horizonLab) * 0.7, smoothstep(0.05, -0.20, dir.y));
}

vec3 sunGlowAt(vec2 uv) {
    float trackW = 0.084 * 14.0;
    float startX = -trackW * 0.5;
    float sunX   = startX + u_sunMeter * trackW;
    vec2  sP     = uv - vec2(sunX, 0.42);
    float d      = length(sP);

    float sunSzF = 0.8 + 0.2 * (1.0 - cos(u_sunMeter * TWO_PI));
    float rr     = max(d / (0.044 * sunSzF) * 0.11, 0.0001);

    float a      = atan(sP.y, sP.x);
    float slowT  = u_time * 0.3;
    float angA   = abs(sin(a * 5.0 + slowT + cos(a * 9.0 - slowT * 1.4)));
    float frills = max(0.0, 0.1 / pow(rr * 5.0, 5.0)) * angA / 20.0;
    float coreG  = max(0.0, 0.08 / pow(rr * 8.0, 0.85)) * (2.2 + 0.05 * sin(u_time * 1.5));

    float env      = exp(1.0 - rr) / 4.5;
    float dayPhase = sin(u_sunMeter * PI);
    float duskB    = smoothstep(0.70, 1.00, u_sunMeter);

    // Sun glow tints lean on theme stops 3/4 instead of hard-coded hues.
    vec3 fCol  = mix(mix(toRGB(u_themeColor2), toRGB(u_themeColor3) * 0.4, duskB),
                      toRGB(u_themeColor4), dayPhase);
    vec3 cColA = mix(mix(toRGB(u_themeColor3), toRGB(u_themeColor2) * 0.4, duskB),
                      toRGB(u_themeColor4), dayPhase);
    vec3 cColB = mix(toRGB(u_themeColor3), vec3(1.0), dayPhase);

    vec3 g = vec3(0.0);
    g += fCol  * frills * env * 14.0;
    g += cColA * coreG  * env * 0.9;
    g += cColB * coreG  * env * 0.5;
    return g;
}

// ── Procedural background ─────────────────────────────────────────────────────

vec3 getBackground(vec2 uv) {
    vec3 b = toRGB(u_themeColor1) * 0.35;

    b += toRGB(u_themeColor3) * 0.6 * hash21(floor(uv * 9.5 + vec2(0.7, 1.1)))
        * smoothstep(0.72, 0.95, fract(dot(uv, vec2(9.5, 8.2)))) * 0.5;

    b += sunGlowAt(uv) * 0.6;
    return b;
}

vec3 getBgChromatic(vec2 uv, vec2 off, float disp) {
    return vec3(
        getBackground(uv + off * (1.0 - disp)).r,
        getBackground(uv + off).g,
        getBackground(uv + off * (1.0 + disp)).b
    );
}

// ── Internal marble swirl (refractive body fill) ─────────────────────────────

vec2 csqr(vec2 a) { return vec2(a.x * a.x - a.y * a.y, 2.0 * a.x * a.y); }

float marble(vec3 p) {
    float r = 0.0;
    vec3  c = p;
    for (int i = 0; i < 6; i++) {
        p = 0.7 * abs(p) / dot(p, p) - 0.7;
        p.yz = csqr(p.yz);
        p = p.zxy;
        r += exp(-19.0 * abs(dot(p, c)));
    }
    return r / 2.0;
}

// ── Tonemap ────────────────────────────────────────────────────────────────────

vec3 aces(vec3 x) {
    return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

vec3 toSRGB(vec3 c) { return pow(c, vec3(1.0 / 2.2)); }

// ── Main ──────────────────────────────────────────────────────────────────────

void main() {
    vec2 uv = v_uv * 2.0 - 1.0;
    uv.y = -uv.y;
    vec2 uvH = uv * 0.5;

    float dist  = length(uvH);
    float px    = 0.5 / (u_res * 0.5);
    float dSdf  = dist - SPHERE_R;
    float mask  = smoothstep(px * 1.5, -px * 1.5, dSdf);
    vec3  bgCol = getBackground(uv);

    // Drop shadow + chromatic rim just outside the sphere edge.
    {
        float sD = dist - SPHERE_R * 1.18;
        float sM = smoothstep(SPHERE_R * 0.55, 0.0, sD) * (1.0 - mask);
        float crR = exp(-abs(sD + SPHERE_R * 0.14) * 140.0) * 0.15;
        float crG = exp(-abs(sD + SPHERE_R * 0.16) * 140.0) * 0.15;
        float crB = exp(-abs(sD + SPHERE_R * 0.18) * 140.0) * 0.15;
        bgCol = mix(bgCol, vec3(0.0), sM * 0.25);
        bgCol += vec3(crR, crG, crB) * (1.0 - mask);
    }

    if (mask < 0.001) {
        fragColor = vec4(bgCol, 0.0);
        return;
    }

    // ── Hemisphere normal ───────────────────────────────────────────────────
    float z     = sqrt(max(SPHERE_R * SPHERE_R - dist * dist, 0.0));
    float edgeD = 1.0 - (z / SPHERE_R);
    vec3  N     = normalize(vec3(uvH.x, uvH.y, z));
    vec3  V     = vec3(0.0, 0.0, 1.0);
    vec3  I     = -V;
    vec3  L     = sunDir();
    vec3  H     = normalize(L + V);

    float NdotV = sat(dot(N, V));
    float NdotL = sat(dot(N, L));
    float NdotH = sat(dot(N, H));

    // ── Chromatic refraction into background ───────────────────────────────
    vec3 refrDir = refract(I, N, 1.0 / IOR);
    if (dot(refrDir, refrDir) < 0.001) refrDir = reflect(I, N);

    float bgDist = 0.55;
    float twist  = sin(z / SPHERE_R * 8.0 - dot(N, L) * 2.5) * 0.012 * edgeD;
    vec2  bgOff  = refrDir.xy * bgDist + twist;
    vec3  refrBG = getBgChromatic(uv, bgOff, DISP);

    // ── Internal glass body ─────────────────────────────────────────────────
    vec3 bodyLab  = mix(u_themeColor1, u_themeColor1 * vec3(0.25, 1.0, 1.0), pow3(edgeD));
    bodyLab.x     = clamp(bodyLab.x, 0.18, 0.55);
    vec3 bodyDark = toRGB(bodyLab);

    float mScale = 15.0;
    vec3  mP = vec3(uvH.x, uvH.y, z) * mScale;
    float marbleM = marble(mP);

    float bgVis   = mix(0.78, 0.16, pow2(edgeD));
    vec3  refrEnv = mix(bodyDark, refrBG, bgVis);
    float marbleHi = sat(pow(marbleM, 4.0) * 8.0) * (1.0 - edgeD);
    vec3  marbleCol = mix(vec3(0.82), toRGB(u_themeColor1), 0.18);
    refrEnv = mix(refrEnv, refrEnv + marbleCol, marbleHi * 0.22);
    refrEnv += C_RIM_COLD * smoothstep(-0.3, 0.8, uvH.y / SPHERE_R) * 0.30 * (1.0 - edgeD);
    refrEnv  = mix(refrEnv, u_fillColor * 1.35,
        u_fillIntensity * smoothstep(0.30, -0.60, uvH.y / SPHERE_R) * bgVis * 1.4);
    refrEnv += getBackground(uv + reflect(I, -N).xy * 0.25) * 0.30 * (1.0 - edgeD);

    // ── Panel content sample ────────────────────────────────────────────────
    vec2 sphUV       = N.xy * 0.5 + 0.5;
    vec4 panelSample = texture(u_panelTex, sphUV);
    float rimFade    = 1.0 - pow5(clamp(edgeD * 1.2, 0.0, 1.0));
    float panelAlpha = panelSample.a * rimFade;
    vec3  panelCol   = panelSample.rgb;
    float inFill     = smoothstep(0.30, -0.60, uvH.y / SPHERE_R) * u_fillIntensity * 0.10;
    panelCol = mix(panelCol, panelCol * (1.0 + u_fillColor * 0.3), inFill);
    refrEnv  = mix(refrEnv, panelCol, panelAlpha);

    // ── Fresnel reflection + specular ───────────────────────────────────────
    float F0      = pow2((1.0 - IOR) / (1.0 + IOR));
    float fresnel = schlickF(NdotV, F0);
    vec3  envRefl = envSky(reflect(I, N));

    float spec  = ggxD(NdotH, 0.04) * NdotL * 1.8;
    vec3  L2    = normalize(vec3(-L.x * 0.5, 0.15, 0.4));
    float spec2 = ggxD(sat(dot(N, normalize(L2 + V))), 0.12) * sat(dot(N, L2)) * 0.25;

    refrEnv += u_fillColor * exp(-edgeD * 3.5) * u_fillIntensity * 0.55;

    vec3 col = mix(refrEnv, envRefl, fresnel);
    col += C_SPEC_HOT * spec + C_RIM_COLD * spec2;

    float rimF = pow5(1.0 - NdotV);
    col += toRGB(mix(u_themeColor3, u_themeColor4, 0.5)) * rimF * 0.90;
    col += 0.18 * vec3(
        sin(rimF * 6.0 + 0.0) * 0.5 + 0.5,
        sin(rimF * 6.0 + 2.1) * 0.5 + 0.5,
        sin(rimF * 6.0 + 4.2) * 0.5 + 0.5
    ) * rimF;

    col = toSRGB(aces(col * 1.05));
    fragColor = vec4(col, mask);
}`,N=(0,l.createContext)(null);function D(e,t,a){let r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error("[GlassWebGL] shader compile error:",e.getShaderInfoLog(r)),r}function L(e){let t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}function A(){let e=(0,l.useContext)(N);if(!e)throw Error("[GlassWebGL] useGlassWebGL must be used inside <GlassWebGLProvider>.");return e}e.s(["GlassWebGLProvider",0,function({children:e}){let{theme:a}=(0,R.useWebGLContext)(),r=(0,l.useRef)({gl:null,offscreen:null,program:null,textures:new Map,entries:new Map,nextId:1,animId:0,uTime:null,uSun:null,uFill:null,uFillI:null,uTex:null,uRes:null,uTheme1:null,uTheme2:null,uTheme3:null,uTheme4:null,colorsRef:{current:C.THEME_COLORS.frost},reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches});r.current.colorsRef.current=C.THEME_COLORS[a]??C.THEME_COLORS.frost;let[o]=(0,l.useState)(()=>{let e=r.current;return{register:(t,a,r,o,l)=>{let i=e.nextId++,n=document.createElement("canvas"),s=t.getContext("2d");return e.entries.set(i,{id:i,panelCanvas:n,outputCanvas:t,outputCtx:s,drawFn:a,sunMeter:r,fill:o,fillIntensity:l,dirty:!0}),e.gl&&e.textures.set(i,L(e.gl)),i},unregister:t=>{e.entries.delete(t);let a=e.textures.get(t);a&&e.gl&&e.gl.deleteTexture(a),e.textures.delete(t)},markDirty:t=>{let a=e.entries.get(t);a&&(a.dirty=!0)},setDrawFn:(t,a)=>{let r=e.entries.get(t);r&&(r.drawFn=a,r.dirty=!0)},setParams:(t,a,r,o)=>{let l=e.entries.get(t);l&&(l.sunMeter=a,l.fill=r,l.fillIntensity=o)}}});return(0,l.useEffect)(()=>{let e=r.current,t=document.createElement("canvas");e.offscreen=t;let a=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1});if(!a)return void console.warn("[GlassWebGL] WebGL 2 not available.");e.gl=a;let o=D(a,a.VERTEX_SHADER,T),l=D(a,a.FRAGMENT_SHADER,E),i=a.createProgram();if(a.attachShader(i,o),a.attachShader(i,l),a.linkProgram(i),a.detachShader(i,o),a.detachShader(i,l),a.deleteShader(o),a.deleteShader(l),!a.getProgramParameter(i,a.LINK_STATUS))return void console.error("[GlassWebGL] program link error:",a.getProgramInfoLog(i));a.useProgram(i),e.program=i;let n=a.createVertexArray();a.bindVertexArray(n);let s=a.createBuffer();for(let[t]of(a.bindBuffer(a.ARRAY_BUFFER,s),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),a.STATIC_DRAW),a.enableVertexAttribArray(0),a.vertexAttribPointer(0,2,a.FLOAT,!1,0,0),e.uTime=a.getUniformLocation(i,"u_time"),e.uSun=a.getUniformLocation(i,"u_sunMeter"),e.uFill=a.getUniformLocation(i,"u_fillColor"),e.uFillI=a.getUniformLocation(i,"u_fillIntensity"),e.uTex=a.getUniformLocation(i,"u_panelTex"),e.uRes=a.getUniformLocation(i,"u_res"),e.uTheme1=a.getUniformLocation(i,"u_themeColor1"),e.uTheme2=a.getUniformLocation(i,"u_themeColor2"),e.uTheme3=a.getUniformLocation(i,"u_themeColor3"),e.uTheme4=a.getUniformLocation(i,"u_themeColor4"),a.clearColor(0,0,0,0),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),e.entries))e.textures.has(t)||e.textures.set(t,L(a));let c=Math.min(window.devicePixelRatio||1,2),f=performance.now(),d=0,u=!0,h=()=>{u="visible"===document.visibilityState};document.addEventListener("visibilitychange",h);let m=e=>{let t=Math.round((e.outputCanvas.getBoundingClientRect().width||280)*c);e.panelCanvas.width=t,e.panelCanvas.height=t,e.dirty=!0},v=new ResizeObserver(()=>{for(let t of e.entries.values())m(t)});for(let t of e.entries.values())m(t),v.observe(t.outputCanvas);let p=(r,o)=>{let l=r.panelCanvas.width;if(0===l)return;let i=e.textures.get(r.id);if(!i)return;if((t.width!==l||t.height!==l)&&(t.width=l,t.height=l,a.viewport(0,0,l,l)),r.dirty){let e=r.panelCanvas.getContext("2d");e.setTransform(c,0,0,c,0,0),r.drawFn(e,l/c),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,r.panelCanvas),r.dirty=!1}let n=e.colorsRef.current;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(e.uTex,0),a.uniform1f(e.uTime,o),a.uniform1f(e.uSun,r.sunMeter),a.uniform3fv(e.uFill,r.fill),a.uniform1f(e.uFillI,r.fillIntensity),a.uniform1f(e.uRes,l),a.uniform3fv(e.uTheme1,n.subarray(0,3)),a.uniform3fv(e.uTheme2,n.subarray(3,6)),a.uniform3fv(e.uTheme3,n.subarray(6,9)),a.uniform3fv(e.uTheme4,n.subarray(9,12)),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_STRIP,0,4);let s=r.outputCtx;r.outputCanvas.width!==l&&(r.outputCanvas.width=l),r.outputCanvas.height!==l&&(r.outputCanvas.height=l),s.clearRect(0,0,l,l),s.drawImage(t,0,0)},g=t=>{if(e.animId=requestAnimationFrame(g),!u||t-d<33)return;d=t;let a=(t-f)*.001;for(let t of e.entries.values())p(t,a)};if(e.reducedMotion)for(let t of e.entries.values())p(t,0);else e.animId=requestAnimationFrame(g);return document.fonts.ready.then(()=>{for(let t of e.entries.values())t.dirty=!0}),()=>{for(let t of(cancelAnimationFrame(e.animId),document.removeEventListener("visibilitychange",h),v.disconnect(),e.textures.values()))a.deleteTexture(t);a.deleteBuffer(s),a.deleteVertexArray(n),a.deleteProgram(i),e.gl=null}},[]),(0,t.jsx)(N.Provider,{value:o,children:e})},"useGlassWebGL",0,A],71707),e.s(["GlassOrb",0,function(e){let r,o,i,n,s,c,f,d,u,h,m,v,p,g,b,x,y,_,S=(0,a.c)(39);S[0]!==e?({panel:n,fill:i,fillIntensity:s,sunMeter:c,size:f,className:o,...r}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=i,S[4]=n,S[5]=s,S[6]=c,S[7]=f):(r=S[1],o=S[2],i=S[3],n=S[4],s=S[5],c=S[6],f=S[7]);let w=void 0===s?.5:s,C=void 0===c?.5:c,R=void 0===f?280:f,{register:T,unregister:E,setDrawFn:N,setParams:D}=A(),L=(0,l.useRef)(null),k=(0,l.useRef)(0);S[8]!==i||S[9]!==w||S[10]!==n||S[11]!==T||S[12]!==C||S[13]!==E?(d=()=>{let e=L.current;if(e)return k.current=T(e,n,C,i,w),()=>{E(k.current)}},S[8]=i,S[9]=w,S[10]=n,S[11]=T,S[12]=C,S[13]=E,S[14]=d):d=S[14],S[15]===Symbol.for("react.memo_cache_sentinel")?(u=[],S[15]=u):u=S[15],(0,l.useEffect)(d,u),S[16]!==n||S[17]!==N?(h=()=>{k.current&&N(k.current,n)},m=[n,N],S[16]=n,S[17]=N,S[18]=h,S[19]=m):(h=S[18],m=S[19]),(0,l.useEffect)(h,m),S[20]!==i||S[21]!==w||S[22]!==D||S[23]!==C?(v=()=>{k.current&&D(k.current,C,i,w)},p=[C,i,w,D],S[20]=i,S[21]=w,S[22]=D,S[23]=C,S[24]=v,S[25]=p):(v=S[24],p=S[25]),(0,l.useEffect)(v,p),S[26]!==R?(g=()=>({"--glass-orb-size":`${R}px`}),S[26]=R,S[27]=g):g=S[27];let P=g;S[28]!==o?(b=["glass-orb__wrapper",o].filter(Boolean),S[28]=o,S[29]=b):b=S[29];let B=b.join(" ");S[30]!==P?(x=P(),S[30]=P,S[31]=x):x=S[31];let F=void 0===r["aria-label"]||void 0;return S[32]!==r||S[33]!==F?(y=(0,t.jsx)("canvas",{ref:L,className:"glass-orb__canvas","aria-hidden":F,...r}),S[32]=r,S[33]=F,S[34]=y):y=S[34],S[35]!==B||S[36]!==x||S[37]!==y?(_=(0,t.jsx)("div",{className:B,style:x,children:y}),S[35]=B,S[36]=x,S[37]=y,S[38]=_):_=S[38],_}],99893),e.s(["GlassPanel",0,function(e){let r,o,l,i,n,s,c,f,d=(0,a.c)(16);d[0]!==e?({children:r,variant:l,size:i,as:n,className:s,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=l,d[4]=i,d[5]=n,d[6]=s):(r=d[1],o=d[2],l=d[3],i=d[4],n=d[5],s=d[6]);let u=void 0===l?"default":l,h=void 0===i?"md":i,m=void 0===n?"div":n,v=void 0===s?"":s,p="default"!==u?`glass-panel--${u}`:"",g="md"!==h?`glass-panel--${h}`:"";d[7]!==v||d[8]!==p||d[9]!==g?(c=["glass-panel",p,g,v].filter(Boolean),d[7]=v,d[8]=p,d[9]=g,d[10]=c):c=d[10];let b=c.join(" ");return d[11]!==m||d[12]!==r||d[13]!==b||d[14]!==o?(f=(0,t.jsx)(m,{className:b,...o,children:r}),d[11]=m,d[12]=r,d[13]=b,d[14]=o,d[15]=f):f=d[15],f}],55859);let k=["item1","item2","item3","item4"];function P(e){return(0,t.jsx)("span",{className:"marquee-item",children:e},`${e}-clone`)}function B(e){return(0,t.jsx)("span",{className:"marquee-item",children:e},e)}e.s(["Marquee",0,function(e){let r,o,l,i,n,s,c=(0,a.c)(16),{items:f,direction:d,duration:u,className:h}=e,m=void 0===f?k:f,v=void 0===h?"":h,p=`marquee-track marquee-track--${void 0===d?"forward":d}`;c[0]!==v?(r=["marquee-strip",v].filter(Boolean),c[0]=v,c[1]=r):r=c[1];let g=r.join(" "),b=`${void 0===u?32:u}s`;c[2]!==b?(o={"--marquee-duration":b},c[2]=b,c[3]=o):o=c[3];let x=o;return c[4]!==m?(l=m.map(B),c[4]=m,c[5]=l):l=c[5],c[6]!==m?(i=m.map(P),c[6]=m,c[7]=i):i=c[7],c[8]!==l||c[9]!==i||c[10]!==p?(n=(0,t.jsxs)("div",{className:p,children:[l,i]}),c[8]=l,c[9]=i,c[10]=p,c[11]=n):n=c[11],c[12]!==n||c[13]!==g||c[14]!==x?(s=(0,t.jsx)("div",{className:g,"aria-hidden":"true",style:x,children:n}),c[12]=n,c[13]=g,c[14]=x,c[15]=s):s=c[15],s}],11030),e.s(["SectionLabel",0,function(e){let r,o,l,i,n,s,c=(0,a.c)(12);c[0]!==e?({children:r,variant:l,className:i,...o}=e,c[0]=e,c[1]=r,c[2]=o,c[3]=l,c[4]=i):(r=c[1],o=c[2],l=c[3],i=c[4]);let f=void 0===l?"default":l,d=void 0===i?"":i,u="default"!==f?`section-label--${f}`:"";c[5]!==d||c[6]!==u?(n=["section-label",u,d].filter(Boolean),c[5]=d,c[6]=u,c[7]=n):n=c[7];let h=n.join(" ");return c[8]!==r||c[9]!==h||c[10]!==o?(s=(0,t.jsx)("div",{className:h,...o,children:r}),c[8]=r,c[9]=h,c[10]=o,c[11]=s):s=c[11],s}],65280);let F=`#version 300 es

layout(location = 0) in vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,O=`#version 300 es
precision highp float;

// ── Uniforms ──────────────────────────────────────────────────────────────────

uniform vec2  u_res;
uniform float u_time;
uniform vec3  u_color1;   // OKLab (L, a, b)
uniform vec3  u_color2;   // OKLab (L, a, b)
uniform vec3  u_color3;   // OKLab (L, a, b)
uniform vec3  u_color4;   // OKLab (L, a, b)

layout(location = 0) out vec4 fragColor;

// ── Constants ─────────────────────────────────────────────────────────────────

const int   MARCH_STEPS    = 72;
const float STEP_SCALE     = 0.93;
const float HIT_DIST       = 0.002;
const float MAX_DIST       = 14.0;
const float PI             = 3.14159265358979;
const float F0_DIELECTRIC  = 0.04;   // glass reflectance at normal incidence

// ── OKLab → linear sRGB ───────────────────────────────────────────────────────
// All palette uniforms arrive as OKLab triples.  Blend in OKLab space for
// perceptual uniformity; call toRGB() only at the compositing stage.

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

float hash(vec3 p) {
    p = fract(p * vec3(443.897, 441.423, 437.195));
    p += dot(p, p.yzx + 19.19);
    return fract((p.x + p.y) * p.z);
}

// Smooth value noise — quintic C2 interpolation (no derivative discontinuity).
float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    return mix(
        mix(mix(hash(i),               hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
        f.z);
}

// 4-octave FBM — normalised so peak amplitude ≈ 1.0.
const float FBM_NORM = 1.0 / (0.500 + 0.250 + 0.125 + 0.0625);
float fbm(vec3 p, float t) {
    return (  noise(p          + vec3(t * 0.17, 0.0,      t * 0.13)) * 0.5000
            + noise(p * 2.10   + vec3(0.0,      t * 0.23, t * 0.19)) * 0.2500
            + noise(p * 4.40   + vec3(t * 0.31, t * 0.27, 0.0     )) * 0.1250
            + noise(p * 8.80   + vec3(0.0,      t * 0.41, t * 0.37)) * 0.0625
           ) * FBM_NORM;
}

// ── SDF primitives ────────────────────────────────────────────────────────────

// Polynomial smooth-min (Inigo Quilez).
float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float sdSphere(vec3 p, vec3 c, float r) {
    return length(p - c) - r;
}

float sdCapsule(vec3 p, vec3 a, vec3 b, float r) {
    vec3  ab = b - a, ap = p - a;
    float t  = clamp(dot(ap, ab) / dot(ab, ab), 0.0, 1.0);
    return length(ap - ab * t) - r;
}

// ── Blob kinematics ───────────────────────────────────────────────────────────

vec3 blobPos(int i, float t) {
    float f    = float(i);
    float spd  = 0.09 + f * 0.031;
    float R    = 1.20 + f * 0.30;
    float tilt = f * 0.62 + 0.30;
    float ph   = f * 2.399;
    return vec3(
        R * cos(t * spd + ph),
        R * sin(t * spd * 0.59 + ph * 1.17) * cos(tilt),
        R * sin(t * spd * 0.37 + ph * 0.71) * sin(tilt) - 0.40
    );
}

// ── Scene SDF ─────────────────────────────────────────────────────────────────

float scene(vec3 p) {
    float d = 1e10;

    // Primary blobs
    for (int i = 0; i < 6; i++) {
        d = smin(d, sdSphere(p, blobPos(i, u_time), 0.62 + float(i) * 0.07), 0.55);
    }

    // Satellite spheres (medium)
    for (int i = 0; i < 6; i++) {
        float f = float(i), ph = f * 1.047;
        vec3 sp = vec3(
            2.2 * sin(u_time * 0.28 + ph),
            1.4 * cos(u_time * 0.19 + ph * 1.3),
            1.6 * sin(u_time * 0.22 + ph * 0.7)
        );
        d = smin(d, sdSphere(p, sp, 0.20), 0.14);
    }

    // Satellite spheres (small)
    for (int i = 0; i < 4; i++) {
        float f = float(i), ph = f * 1.571 + 1.3;
        vec3 sp = vec3(
            1.8 * cos(u_time * 0.35 + ph),
            2.0 * sin(u_time * 0.24 + ph * 0.9),
            1.0 * cos(u_time * 0.31 + ph * 1.4)
        );
        d = smin(d, sdSphere(p, sp, 0.14), 0.10);
    }

    // Connecting capsule
    d = smin(d, sdCapsule(p, blobPos(0, u_time) * 0.6, blobPos(3, u_time) * 0.6, 0.10), 0.28);
    return d;
}

// ── Shading helpers ───────────────────────────────────────────────────────────

// 4-tap tetrahedron normal — same accuracy as 6-tap central differences,
// 2 fewer scene evaluations per fragment.
vec3 calcNormal(vec3 p) {
    const float e = 0.004;
    const vec2  k = vec2(1.0, -1.0) * e;
    return normalize(
        k.xyy * scene(p + k.xyy) +
        k.yyx * scene(p + k.yyx) +
        k.yxy * scene(p + k.yxy) +
        k.xxx * scene(p + k.xxx)
    );
}

// 5-tap horizon AO with exponential weight decay.
float calcAO(vec3 p, vec3 n) {
    float ao = 0.0, w = 1.0;
    for (int i = 1; i <= 5; i++) {
        float h  = float(i) * 0.08;
        float sd = scene(p + n * h);
        ao += w * max(h - sd, 0.0);
        w  *= 0.55;
    }
    return clamp(1.0 - ao * 1.8, 0.0, 1.0);
}

// Schlick Fresnel — dielectric surface (F0 = 0.04 ≈ glass).
float schlick(float cosTheta, float f0) {
    float t = 1.0 - cosTheta;
    float t2 = t * t;
    return f0 + (1.0 - f0) * t2 * t2 * t;
}

// silkRibbon — domain-warped iridescent surface layer.
// Blending in OKLab space; converted to linear sRGB on return.
vec3 silkRibbon(vec3 p, vec3 rd, float t) {
    float warpN = fbm(p * 0.55, t);
    vec3  q     = p + vec3(warpN, -warpN * 0.60, warpN * 0.80) * 0.18;

    float film     = fbm(q * 0.90, t * 0.50);
    float viewProj = abs(dot(rd, normalize(q)));
    float phase    = (film * 5.0 + viewProj * 1.80) * PI;

    float fr  = 0.5 + 0.5 * cos(phase);
    float fg  = 0.5 + 0.5 * cos(phase * 1.25 + 2.094);
    float fbl = 0.5 + 0.5 * cos(phase * 1.55 + 4.189);

    // Iridescence: blend palette in OKLab space.
    vec3 silk = (u_color2 * fr + u_color3 * fg + u_color4 * fbl) * 0.55;

    // Rotating ribbon mask.
    float ang = t * 0.15;
    float ca  = cos(ang), sa = sin(ang);
    vec3  qr  = vec3(q.x * ca - q.z * sa, q.y, q.x * sa + q.z * ca);

    float r1 = sin(qr.x * 2.60 + qr.y * 1.20 + t * 0.48)
             * cos(qr.y * 1.90 - qr.z * 1.40 + t * 0.35);
    float r2 = sin(qr.x * 1.30 - qr.z * 2.10 + t * 0.27)
             * cos(qr.y * 2.80 + qr.x * 0.50 + t * 0.56);

    float w1 = exp(-abs(r1) * 4.50) * (0.60 + 0.40 * film);
    float w2 = exp(-abs(r2) * 3.80) * 0.70;

    silk += mix(u_color3, u_color4, fr)  * w1 * 0.70;
    silk += mix(u_color2, u_color3, fbl) * w2 * 0.45;

    float core = exp(-length(q) * 0.50) * (0.60 + 0.40 * film);
    silk += u_color3 * core * 0.55;

    return toRGB(silk);
}

// Background radial gradient — blends in OKLab; converted to sRGB on return.
vec3 background(vec2 uv, float t) {
    vec3 bg = u_color1;
    bg += u_color2 * exp(-length(uv - vec2(-0.15,  0.05)) * 1.8) * 0.70;
    bg += u_color2 * exp(-length(uv - vec2( 0.30, -0.10)) * 3.2) * 0.40;
    bg += u_color3 * exp(-abs(uv.y + 0.15) * 4.0)                * 0.20;
    return toRGB(bg);
}

// ── Main ──────────────────────────────────────────────────────────────────────

void main() {
    vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / u_res.y;

    // ── Camera ────────────────────────────────────────────────────────────────
    float camAngle  = u_time * 0.048;
    float camBob    = sin(u_time * 0.11) * 0.15;
    vec3  rayOrigin = vec3(sin(camAngle) * 5.6, 0.50 + camBob, cos(camAngle) * 5.6);
    vec3  target    = vec3(sin(u_time * 0.07) * 0.25,
                           -0.12 + sin(u_time * 0.13) * 0.08,
                           0.0);
    vec3  fwd = normalize(target - rayOrigin);
    vec3  rgt = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
    vec3  up  = cross(fwd, rgt);
    vec3  rd  = normalize(fwd + uv.x * rgt + uv.y * up);

    // ── Ray march ─────────────────────────────────────────────────────────────
    float tRay = 0.1;
    bool  hit  = false;
    for (int i = 0; i < MARCH_STEPS; i++) {
        float d = scene(rayOrigin + rd * tRay);
        if (d < HIT_DIST) { hit = true; break; }
        if (tRay > MAX_DIST) break;
        tRay += d * STEP_SCALE;
    }

    vec3 col = background(uv, u_time);

    if (hit) {
        vec3  p  = rayOrigin + rd * tRay;
        vec3  n  = calcNormal(p);
        float ao = calcAO(p, n);

        // Lights
        const vec3 Lkey  = normalize(vec3( 2.0,  3.8,  1.5));
        const vec3 Lrim  = normalize(vec3(-0.5, -0.8, -2.5));
        const vec3 Lrim2 = normalize(vec3( 1.0, -0.5, -1.8));

        float diffR  = pow(max(dot(n, Lrim),  0.0), 3.5) * 0.45;
        float diffR2 = pow(max(dot(n, Lrim2), 0.0), 4.0) * 0.28;

        vec3  hv    = normalize(Lkey - rd);
        float NdotH = max(dot(n,  hv), 0.0);
        float NdotV = max(dot(n, -rd), 0.0);

        // Schlick Fresnel with dielectric F0.
        float fresnel = schlick(NdotV, F0_DIELECTRIC);

        // Refracted silk sample.
        vec3 refDir = refract(rd, n, 1.0 / 1.47);
        if (dot(refDir, refDir) < 0.001) refDir = rd;
        vec3 silk = silkRibbon(p + refDir * 0.55, rd, u_time);

        // Concentric glow rings.
        float ringDist = length(p);
        float rings    = 0.0;
        for (int i = 1; i <= 4; i++) {
            float r = 0.55 + float(i) * 0.38;
            rings += exp(-abs(ringDist - r) * 14.0) * (0.06 / float(i));
        }

        // Two-lobe specular: sharp highlight + broad sheen.
        float spec1  = pow(NdotH, 400.0) * 2.50;
        float spec2  = pow(NdotH,  32.0) * 0.14;
        vec3  specCol    = mix(vec3(1.0), toRGB(u_color4), 0.25);
        vec3  fresnelCol = toRGB(mix(u_color3, u_color4, pow(1.0 - NdotV, 2.0)));

        col  = silk * (1.0 - fresnel * 0.72);
        col += toRGB(u_color4) * rings       * 0.80;
        col += specCol         * (spec1 + spec2);
        col += fresnelCol      * fresnel      * 0.85;
        col += toRGB(u_color3) * diffR        * 0.45;
        col += toRGB(u_color2) * diffR2       * 0.28;
        col *= mix(toRGB(u_color1) * 0.60, vec3(1.0), 0.50 + 0.50 * ao);
        col  = mix(col, background(uv, u_time), 1.0 - exp(-tRay * 0.022));
    }

    // Blob halos — projected screen-space glow.
    for (int i = 0; i < 6; i++) {
        vec3  bp   = blobPos(i, u_time);
        vec3  tb   = bp - rayOrigin;
        float pz   = dot(tb, fwd);
        if (pz < 0.1) continue;
        float invPz = 1.0 / pz;
        vec2  sc    = vec2(dot(tb, rgt) * invPz, dot(tb, up) * invPz);
        vec2  dv    = uv - sc;
        vec3  hCol  = toRGB(mix(u_color2, u_color4, float(i) * 0.20));
        col += hCol * exp(-dot(dv, dv) * (2.8 + float(i) * 0.55)) * 0.07;
    }

    // Vignette.
    col *= 1.0 - dot(uv * 0.95, uv * 0.95) * 0.88;

    fragColor = vec4(clamp(col, 0.0, 1.0), hit ? 1.0 : 0.0);
}`;function I(e,t,a){let r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error("[SphereMarch] shader compile error:",e.getShaderInfoLog(r)),r}e.s(["SphereMarch",0,function({className:e,"aria-label":a="Animated background"}){let{theme:r}=(0,R.useWebGLContext)(),o=(0,l.useRef)(null),i=(0,l.useRef)(C.THEME_COLORS_VISIBILITY[r]??C.THEME_COLORS_VISIBILITY.meadow);return i.current=C.THEME_COLORS_VISIBILITY[r]??C.THEME_COLORS_VISIBILITY.meadow,(0,l.useEffect)(()=>{let e=o.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!t)return void console.warn("[SphereMarch] WebGL 2 not available.");let a=I(t,t.VERTEX_SHADER,F),r=I(t,t.FRAGMENT_SHADER,O),l=t.createProgram();if(t.attachShader(l,a),t.attachShader(l,r),t.linkProgram(l),t.detachShader(l,a),t.detachShader(l,r),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(l,t.LINK_STATUS))return void console.error("[SphereMarch] link error:",t.getProgramInfoLog(l));t.useProgram(l);let n=t.createVertexArray();t.bindVertexArray(n);let s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null);let c={res:t.getUniformLocation(l,"u_res"),time:t.getUniformLocation(l,"u_time"),color1:t.getUniformLocation(l,"u_color1"),color2:t.getUniformLocation(l,"u_color2"),color3:t.getUniformLocation(l,"u_color3"),color4:t.getUniformLocation(l,"u_color4")},f=.75*Math.min(window.devicePixelRatio,1.5),d=()=>{e.width=Math.round(e.clientWidth*f),e.height=Math.round(e.clientHeight*f),t.viewport(0,0,e.width,e.height)};d();let u=new ResizeObserver(d);u.observe(e);let h="visible"===document.visibilityState,m=()=>{h="visible"===document.visibilityState};document.addEventListener("visibilitychange",m);let v=new IntersectionObserver(([e])=>{h=e?.isIntersecting??!1},{threshold:0});v.observe(e);let p=a=>{let r=i.current;t.uniform2f(c.res,e.width,e.height),t.uniform1f(c.time,a),t.uniform3fv(c.color1,r.subarray(0,3)),t.uniform3fv(c.color2,r.subarray(3,6)),t.uniform3fv(c.color3,r.subarray(6,9)),t.uniform3fv(c.color4,r.subarray(9,12))};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return t.bindVertexArray(n),d(),p(0),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.bindVertexArray(null),()=>{u.disconnect(),v.disconnect(),document.removeEventListener("visibilitychange",m),t.deleteBuffer(s),t.deleteVertexArray(n),t.deleteProgram(l)};let g=performance.now(),b=0,x=0,y=e=>{b=requestAnimationFrame(y),h&&!(e-x<40)&&(x=e,t.bindVertexArray(n),p((e-g)*.001),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.bindVertexArray(null))};return b=requestAnimationFrame(y),()=>{cancelAnimationFrame(b),u.disconnect(),v.disconnect(),document.removeEventListener("visibilitychange",m),t.deleteBuffer(s),t.deleteVertexArray(n),t.deleteProgram(l)}},[i.current,o.current]),(0,t.jsx)("div",{className:["sphere-march__wrapper",e].filter(Boolean).join(" "),children:(0,t.jsx)("canvas",{ref:o,className:"sphere-march__canvas","aria-label":a||void 0,"aria-hidden":""===a||void 0})})}],68352),e.i(98946),e.i(72120);let G=`#version 300 es

layout(location = 0) in vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,M=`#version 300 es
precision highp float;

// ── Uniforms ──────────────────────────────────────────────────────────────────

uniform vec2  u_res;
uniform float u_time;
uniform vec3  u_color1;   // OKLab (L, a, b) — theme background base
uniform vec3  u_color2;   // OKLab (L, a, b) — theme accent
uniform vec3  u_color3;   // OKLab (L, a, b) — theme mid tone
uniform vec3  u_color4;   // OKLab (L, a, b) — theme highlight

layout(location = 0) out vec4 fragColor;

// ── Constants ─────────────────────────────────────────────────────────────────

const float PI      = 3.14159265359;
const float TWO_PI  = 6.28318530718;
const float EPSILON = 1e-6;

float saturate(float x) { return clamp(x, 0.0, 1.0); }
vec2  saturate(vec2 x)  { return clamp(x, 0.0, 1.0); }
vec3  saturate(vec3 x)  { return clamp(x, 0.0, 1.0); }
vec4  saturate(vec4 x)  { return clamp(x, 0.0, 1.0); }
float pow2(float x){ float y=x; return y*y; }
float pow3(float x){ float y=x*x; return y*x; }
float pow4(float x){ float y=x*x; return y*y; }
float pow5(float x){ float y=x*x; return y*y*x; }
float pow6(float x){ float y=x*x*x; return y*y; }

// ── OKLab → linear sRGB ───────────────────────────────────────────────────────
// Theme uniforms arrive as OKLab triples, matching sphere-webgl's
// convention. Blend in OKLab space for perceptual uniformity; call toRGB()
// only at the compositing stage.

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

// Cube background gradient, themed off the site palette instead of a fixed
// gray. IMPORTANT: rd here is a ray *direction* through/around a small
// cube seen from camera distance ~4.7 -- across the entire visible cube,
// rd.y only spans roughly -0.2..0.2 (not -1..1), so a naive
// rd.y * 0.5 + 0.5 barely moves and reads as a single flat color. Scaling
// by GRADIENT_SPREAD before saturating stretches that narrow real range
// back out to use the full 0..1 mix span, and blending across both rd.y
// and rd.x (not just vertical) pulls in more of all 4 theme colors so the
// result reads as a genuine gradient rather than a wash.
const float GRADIENT_SPREAD = 3.2;

vec3 themeBackground(vec3 rd) {
    float vAxis = saturate(rd.y * GRADIENT_SPREAD * 0.5 + 0.5);
    float hAxis = saturate(rd.x * GRADIENT_SPREAD * 0.5 + 0.5);

    vec3 grad = mix(u_color1, u_color3, vAxis);
    grad = mix(grad, u_color4, vAxis * 0.5);
    grad = mix(grad, u_color2, hAxis * 0.4); // horizontal sweep pulls in the accent color too
    return toRGB(grad);
}

// ── Weather cycle ─────────────────────────────────────────────────────────────
// Sky tint, light, cloud mood and glass precipitation all step through
// WEATHER_COUNT states in order, crossfading into the next every
// WEATHER_SEGMENT seconds so nothing pops.

const float WEATHER_SEGMENT = 10.0;
const float WEATHER_BLEND   = 2.5;   // default crossfade length; thunderstorm pairs override, see weatherBlendDuration()
const int   WEATHER_COUNT   = 7;

const int WX_SUNNY        = 0;
const int WX_CLOUDY       = 1;
const int WX_OVERCAST     = 2;
const int WX_RAIN         = 3;
const int WX_SNOW         = 4;
const int WX_HAIL         = 5;
const int WX_THUNDERSTORM = 6;

struct Weather {
    vec3  skyTop;
    vec3  skyBottom;
    vec3  lightColor;
    float lightStrength;
    vec3  cloudTint;
    float cloudDensity;
    float sunVisibility;
    float rain;
    float snow;
    float hail;
    float fogAmount;
    float rainSpeedMul;
    float lightning;
};

Weather getWeather(int id) {
    if (id == WX_SUNNY) {
        return Weather(
            vec3(0.12, 0.16, 0.24), vec3(0.40, 0.48, 0.62),
            vec3(1.20, 1.10, 0.90), 1.3,
            vec3(1.05, 1.00, 0.90), 0.06,
            1.0,
            0.0, 0.0, 0.0,
            0.0,
            1.0, 0.0
        );
    } else if (id == WX_CLOUDY) {
        return Weather(
            vec3(0.09, 0.11, 0.16), vec3(0.28, 0.30, 0.36),
            vec3(1.0, 0.98, 0.95), 0.9,
            vec3(0.95, 0.94, 0.96), 0.75,
            0.75,
            0.0, 0.0, 0.0,
            0.1,
            1.0, 0.0
        );
    } else if (id == WX_OVERCAST) {
        return Weather(
            vec3(0.07, 0.08, 0.10), vec3(0.20, 0.21, 0.24),
            vec3(0.75, 0.76, 0.82), 0.55,
            vec3(0.55, 0.56, 0.62), 1.5,
            0.15,
            0.05, 0.0, 0.0,
            0.35,
            1.0, 0.0
        );
    } else if (id == WX_RAIN) {
        return Weather(
            vec3(0.045, 0.05, 0.065), vec3(0.14, 0.15, 0.18),
            vec3(0.55, 0.58, 0.68), 0.4,
            vec3(0.40, 0.42, 0.50), 1.85,
            0.05,
            1.0, 0.0, 0.0,
            0.55,
            1.0, 0.0
        );
    } else if (id == WX_SNOW) {
        return Weather(
            vec3(0.16, 0.17, 0.20), vec3(0.42, 0.44, 0.48),
            vec3(0.85, 0.88, 0.95), 0.75,
            vec3(0.80, 0.84, 0.92), 1.2,
            0.35,
            0.0, 1.0, 0.0,
            0.45,
            1.0, 0.0
        );
    } else if (id == WX_HAIL) {
        return Weather(
            vec3(0.05, 0.055, 0.075), vec3(0.16, 0.17, 0.21),
            vec3(0.65, 0.68, 0.80), 0.5,
            vec3(0.45, 0.48, 0.58), 1.7,
            0.1,
            0.35, 0.0, 1.0,
            0.4,
            1.0, 0.0
        );
    } else {
        // Thunderstorm is a variant of Rain — same coverage, a touch
        // faster-falling, darker sky, plus lightning.
        return Weather(
            vec3(0.03, 0.032, 0.045), vec3(0.10, 0.105, 0.13),
            vec3(0.50, 0.52, 0.62), 0.35,
            vec3(0.32, 0.34, 0.42), 1.95,
            0.04,
            1.0, 0.0, 0.0,
            0.58,
            1.18, 1.0
        );
    }
}

Weather mixWeather(Weather a, Weather b, float t) {
    Weather w;
    w.skyTop        = mix(a.skyTop, b.skyTop, t);
    w.skyBottom     = mix(a.skyBottom, b.skyBottom, t);
    w.lightColor    = mix(a.lightColor, b.lightColor, t);
    w.lightStrength = mix(a.lightStrength, b.lightStrength, t);
    w.cloudTint     = mix(a.cloudTint, b.cloudTint, t);
    w.cloudDensity  = mix(a.cloudDensity, b.cloudDensity, t);
    w.sunVisibility = mix(a.sunVisibility, b.sunVisibility, t);
    w.rain          = mix(a.rain, b.rain, t);
    w.snow          = mix(a.snow, b.snow, t);
    w.hail          = mix(a.hail, b.hail, t);
    w.fogAmount     = mix(a.fogAmount, b.fogAmount, t);
    w.rainSpeedMul  = mix(a.rainSpeedMul, b.rainSpeedMul, t);
    w.lightning     = mix(a.lightning, b.lightning, t);
    return w;
}

Weather gWeather; // resolved once per frame in main(), read by sky/cloud/glass/precipitation below

// Thunderstorm pairs get a longer, gentler crossfade — storm light/dark vs
// calm daylight is the biggest jump in the cycle, so the uniform 2.5s used
// elsewhere reads as abrupt here.
float weatherBlendDuration(int idxA, int idxB) {
    bool involvesThunder = (idxA == WX_THUNDERSTORM || idxB == WX_THUNDERSTORM);
    return involvesThunder ? WEATHER_BLEND * 1.8 : WEATHER_BLEND;
}

Weather computeWeather(float time) {
    float cycle = time / WEATHER_SEGMENT;
    int idxA = int(mod(floor(cycle), float(WEATHER_COUNT)));
    int idxB = int(mod(floor(cycle) + 1.0, float(WEATHER_COUNT)));
    float localT = fract(cycle);
    float blendDur = weatherBlendDuration(idxA, idxB);
    float blendT = smoothstep(0.0, 1.0, saturate(localT * (WEATHER_SEGMENT / blendDur)));
    return mixWeather(getWeather(idxA), getWeather(idxB), blendT);
}

// ── Day / night cycle ─────────────────────────────────────────────────────────
// Independent of weather — any of the seven states can occur under either
// the sun or the moon. One full lap of all weather states happens under the
// sun, then a full lap under the moon, then repeats.

const float CELESTIAL_BLEND = 3.0; // seconds of crossfade at the sun<->moon handoff

float gCelestialBody = 0.0; // 0 = sun, 1 = moon, blended across the handoff

float computeCelestialBody(float time) {
    float weatherCycleLen  = WEATHER_SEGMENT * float(WEATHER_COUNT);
    float dayNightCycleLen = weatherCycleLen * 2.0;
    float t = mod(time, dayNightCycleLen);

    float body = (t < weatherCycleLen) ? 0.0 : 1.0;

    // Two handoffs per cycle: sun->moon at t = weatherCycleLen, moon->sun at
    // t = 0 (wrapping). Cross into the other body's value across a
    // +/-CELESTIAL_BLEND window around whichever is closer.
    float distToSunMoon = abs(t - weatherCycleLen);
    float distToMoonSun = min(t, dayNightCycleLen - t);

    if (distToSunMoon < CELESTIAL_BLEND) {
        float w = smoothstep(0.0, 1.0, saturate((t - (weatherCycleLen - CELESTIAL_BLEND)) / CELESTIAL_BLEND));
        return mix(0.0, 1.0, w);
    }
    if (distToMoonSun < CELESTIAL_BLEND) {
        float tSinceWrap = (t < weatherCycleLen) ? t : (t - dayNightCycleLen);
        float w = smoothstep(0.0, 1.0, saturate(tSinceWrap / CELESTIAL_BLEND * 0.5 + 0.5));
        return mix(1.0, 0.0, w);
    }
    return body;
}

// Exterior-facing background: used as the fallback color where a
// refracted/reflected ray exits the cube (see shadeGlassCube) and for the
// cube's own edge/grazing reflections. Themed the same as the interior sky.
vec3 background(vec3 rd) {
    return themeBackground(rd);
}

// ── Lightning ─────────────────────────────────────────────────────────────────
// Thunderstorm-only. A sparse strike timer decides when a flash happens; the
// bolt shape is a jagged 3D polyline built from hashed waypoints rather than
// a screen-space warp, so it reads correctly from any camera angle.

float lightningHash11(float p) {
    p = fract(p * .1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}
float lightningHash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}
mat2 lightningRotate2D(float theta) {
    float c = cos(theta), s = sin(theta);
    return mat2(c, -s, s, c);
}
float lightningNoise(vec2 p) {
    vec2 ip = floor(p);
    vec2 fp = fract(p);
    float a = lightningHash12(ip);
    float b = lightningHash12(ip + vec2(1, 0));
    float c = lightningHash12(ip + vec2(0, 1));
    float d = lightningHash12(ip + vec2(1, 1));
    vec2 t = smoothstep(0.0, 1.0, fp);
    return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}
float lightningFBM(vec2 p, int octaveCount) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < octaveCount; ++i) {
        value += amplitude * lightningNoise(p);
        p *= lightningRotate2D(0.45);
        p *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

// Bolt geometry travels from the cloud shell's outer half (clear of the
// sun/moon itself) out toward the glass wall.
const float CLOUD_INNER_APPROX = 0.46;
const float CLOUD_OUTER_APPROX = 0.62; // matches marchClouds' OUTER_R
const float STRIKE_REACH       = 0.97; // CUBE_HALF = 1.0
const int   BOLT_SEGMENTS      = 10;

float gStrikeActive = 0.0; // is a strike happening this instant
float gStrikeFlash  = 0.0; // 0..1 envelope of the current strike
float gStrikeSlot   = 0.0; // seeds this strike's whole shape
float gThunderFlash = 0.0; // weaker delayed secondary flash

// Sparse strike timer — most of the time nothing happens; occasionally a
// short strike fires with a fast attack / slower decay envelope.
void computeLightningStrike(float time, float lightningAmount) {
    if (lightningAmount < 0.01) { gStrikeActive = 0.0; gStrikeFlash = 0.0; gThunderFlash = 0.0; return; }

    float period = 1.4;
    float slot = floor(time / period);
    float roll = lightningHash11(slot * 17.13);
    float strikeChance = mix(0.05, 0.55, lightningAmount);
    float localT = fract(time / period);

    if (roll < strikeChance) {
        float attack = smoothstep(0.0, 0.04, localT);
        float decay  = 1.0 - smoothstep(0.06, 0.35, localT);
        gStrikeFlash = saturate(attack * decay);
        // Occasional quick double-flash for variety.
        float second = smoothstep(0.12, 0.14, localT) * (1.0 - smoothstep(0.16, 0.26, localT));
        gStrikeFlash = saturate(gStrikeFlash + second * step(0.5, lightningHash11(slot * 91.7)));
        gStrikeActive = step(0.001, gStrikeFlash);

        // Thunder-lag: a weaker secondary dim flash ~200-400ms after the
        // main strike, deterministic off the same slot's localT.
        float lagCenter = mix(0.20, 0.40, lightningHash11(slot * 53.9 + 4.4));
        float lag = 1.0 - saturate(abs(localT - lagCenter) / 0.05);
        gThunderFlash = smoothstep(0.0, 1.0, lag) * 0.35;
    } else {
        gStrikeActive = 0.0;
        gStrikeFlash = 0.0;
        gThunderFlash = 0.0;
    }

    gStrikeSlot = slot;
}

// Random point on the unit sphere — this strike's overall travel direction,
// so different strikes reach toward different cube faces/edges/corners.
vec3 boltDirection() {
    float u = lightningHash11(gStrikeSlot * 2.17 + 0.31) * 2.0 - 1.0;
    float phi = lightningHash11(gStrikeSlot * 6.53 + 0.77) * TWO_PI;
    float r = sqrt(max(0.0, 1.0 - u * u));
    return normalize(vec3(r * cos(phi), u, r * sin(phi)));
}

// i-th waypoint (0..BOLT_SEGMENTS) of this strike's jagged path, travelling
// radially from the cloud shell out toward the glass along boltDirection().
// Jitter is applied perpendicular to the travel direction (so the path
// wiggles across its own route) and tapers at both ends, keeping the root
// anchored in the cloud and the tip aimed at the wall.
vec3 boltWaypoint(int i) {
    float fi = float(i);
    float fN = float(BOLT_SEGMENTS);
    float s = fi / fN;

    vec3 dir = boltDirection();
    float travelDist = mix(CLOUD_INNER_APPROX, STRIKE_REACH, s);
    vec3 basePos = dir * travelDist;

    vec3 up = abs(dir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 perpA = normalize(cross(dir, up));
    vec3 perpB = cross(dir, perpA);

    // Jitter is smallest near the root and tip, largest mid-flight — real
    // bolts fork and wander most mid-flight, not at start or point of contact.
    float endFade = smoothstep(0.0, 0.2, s) * smoothstep(1.0, 0.8, s);
    float jitterMag = mix(0.015, 0.11, endFade);

    float jA = (lightningHash11(gStrikeSlot * 13.1 + fi * 4.21 + 0.5) * 2.0 - 1.0);
    float jB = (lightningHash11(gStrikeSlot * 21.7 + fi * 6.83 + 1.3) * 2.0 - 1.0);

    return basePos + (perpA * jA + perpB * jB) * jitterMag;
}

// ── Branching ──────────────────────────────────────────────────────────────
// Each branch reuses the trunk as its root: pick a fork point in the
// trunk's middle third, then walk BRANCH_SEGMENTS more waypoints outward
// along a direction nudged off the trunk's own local direction there — so
// it reads as splitting FROM the trunk, not a second unrelated bolt.

const int BRANCH_COUNT    = 2;
const int BRANCH_SEGMENTS = 5;

float branchForkS(int branchIdx) {
    float fb = lightningHash11(gStrikeSlot * 31.7 + float(branchIdx) * 9.13 + 2.1);
    return mix(0.35, 0.7, fb); // biased to the middle third, like real branching
}

vec3 branchWaypoint(int branchIdx, int i) {
    float forkS = branchForkS(branchIdx);
    vec3 dir = boltDirection();
    vec3 forkPos = dir * mix(CLOUD_INNER_APPROX, STRIKE_REACH, forkS);

    vec3 up = abs(dir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 perpA = normalize(cross(dir, up));
    vec3 perpB = cross(dir, perpA);
    float bSeed = float(branchIdx) * 17.0;
    float splayA = (lightningHash11(gStrikeSlot * 41.3 + bSeed + 0.7) * 2.0 - 1.0);
    float splayB = (lightningHash11(gStrikeSlot * 47.9 + bSeed + 1.9) * 2.0 - 1.0);
    vec3 branchDir = normalize(dir * 1.4 + perpA * splayA * 0.7 + perpB * splayB * 0.7);

    float fi = float(i);
    float fN = float(BRANCH_SEGMENTS);
    float s = fi / fN;
    float remainingReach = mix(forkS, min(forkS + (1.0 - forkS) * 0.85, 1.0), s);
    float travelDist = mix(CLOUD_INNER_APPROX, STRIKE_REACH, remainingReach);
    vec3 basePos = branchDir * travelDist;

    vec3 bUp = abs(branchDir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 bPerpA = normalize(cross(branchDir, bUp));
    vec3 bPerpB = cross(branchDir, bPerpA);

    float endFade = smoothstep(0.0, 0.25, s) * smoothstep(1.0, 0.75, s);
    float jitterMag = mix(0.008, 0.06, endFade);
    float jA = (lightningHash11(gStrikeSlot * 61.1 + bSeed + fi * 5.31 + 0.3) * 2.0 - 1.0);
    float jB = (lightningHash11(gStrikeSlot * 71.3 + bSeed + fi * 7.17 + 1.1) * 2.0 - 1.0);
    vec3 branchPos = basePos + (bPerpA * jA + bPerpB * jB) * jitterMag;

    // First waypoint pins exactly to the fork point so there's no gap.
    return (i == 0) ? forkPos : branchPos;
}

// Closest-approach distance between a ray and a 3D segment (standard
// closest-point-between-two-lines solve).
float raySegmentDist(vec3 ro, vec3 rd, vec3 a, vec3 b) {
    vec3 segDir = b - a;
    vec3 w0 = ro - a;
    float rd_rd = dot(rd, rd);
    float rd_seg = dot(rd, segDir);
    float seg_seg = dot(segDir, segDir);
    float rd_w0 = dot(rd, w0);
    float seg_w0 = dot(segDir, w0);
    float denom = rd_rd * seg_seg - rd_seg * rd_seg;

    float tRay = 0.0;
    float sSeg = 0.0;
    if (abs(denom) > 1e-6) {
        tRay = (rd_seg * seg_w0 - seg_seg * rd_w0) / denom;
        sSeg = (rd_rd * seg_w0 - rd_seg * rd_w0) / denom;
    }
    tRay = max(tRay, 0.0);
    sSeg = clamp(sSeg, 0.0, 1.0);

    vec3 rayP = ro + rd * tRay;
    vec3 segP = a + segDir * sSeg;
    return length(rayP - segP);
}

// Bolt glow for a ray through the scene — nearest distance to either the
// trunk or a branch segment drives a three-term falloff (hot core, mid
// body, wide bloom halo).
vec3 lightningBoltGlow(vec3 ro, vec3 rd) {
    if (gStrikeActive < 0.5) return vec3(0.0);

    float minDist = 1e10;

    vec3 prev = boltWaypoint(0);
    for (int i = 1; i <= BOLT_SEGMENTS; i++) {
        vec3 curr = boltWaypoint(i);
        minDist = min(minDist, raySegmentDist(ro, rd, prev, curr));
        prev = curr;
    }

    for (int b = 0; b < BRANCH_COUNT; b++) {
        vec3 bprev = branchWaypoint(b, 0);
        for (int i = 1; i <= BRANCH_SEGMENTS; i++) {
            vec3 bcurr = branchWaypoint(b, i);
            minDist = min(minDist, raySegmentDist(ro, rd, bprev, bcurr));
            bprev = bcurr;
        }
    }

    float glow = exp(-minDist * 80.0) * gStrikeFlash * 0.8;
    glow += exp(-minDist * 22.0) * gStrikeFlash;
    glow += exp(-minDist * 5.0)  * gStrikeFlash * 0.35;

    vec3 boltCol = vec3(0.75, 0.85, 1.0);
    return boltCol * glow;
}

// ── Moon ───────────────────────────────────────────────────────────────────
// Shaded from the sun sphere's own real hit normal (see intersectSphere
// below) rather than a reconstructed screen-space normal, so the surface
// noise stays locked to the sphere and doesn't swim as the camera orbits.

float moonValueNoise(vec3 uv, float res) {
    const vec3 s = vec3(1e0, 1e2, 1e4);
    uv *= res;
    vec3 uv0 = floor(mod(uv, res)) * s;
    vec3 uv1 = floor(mod(uv + vec3(1.0), res)) * s;
    vec3 f = fract(uv);
    f = f * f * (3.0 - 2.0 * f);
    vec4 v = vec4(uv0.x + uv0.y + uv0.z, uv1.x + uv0.y + uv0.z,
                  uv0.x + uv1.y + uv0.z, uv1.x + uv1.y + uv0.z);
    vec4 r = fract(sin(v * 1e-3) * 1e5);
    float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
    r = fract(sin((v + uv1.z - uv0.z) * 1e-3) * 1e5);
    float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
    return mix(r0, r1, f.z) * 2.0 - 1.0;
}
// Layered fbm for crater/mare mottling, evaluated on a fixed 3D point on
// the sphere so it stays put on the surface.
float moonSurfaceNoise(vec3 p) {
    float n = 0.0;
    n += 0.55 * moonValueNoise(p, 4.0);
    n += 0.30 * moonValueNoise(p + 7.1, 9.0);
    n += 0.15 * moonValueNoise(p + 3.3, 20.0);
    return n;
}

const vec3 MOON_LIT      = vec3(1.65, 1.68, 1.72);
const vec3 MOON_DARK     = vec3(0.35, 0.40, 0.52);
const vec3 MOON_SKY_GLOW = vec3(0.45, 0.55, 0.72);

// Reflected light (not emissive), shaded from the real hit normal N.
vec3 shadeMoonSurface(vec3 N) {
    float mTime = u_time * 0.05;
    vec3 moonLightDir = normalize(vec3(cos(mTime), 0.15, sin(mTime) * 0.6 + 0.8));
    float ndotl = dot(N, moonLightDir);

    // Soft-wrapped lighting — floor kept high so the unlit hemisphere never
    // crushes toward black even at grazing camera angles.
    float shade = pow(clamp(ndotl * 0.35 + 0.85, 0.0, 1.0), 1.1);

    float n = moonSurfaceNoise(N * 1.5 + vec3(0.0, 0.0, mTime * 0.3));
    float albedo = 0.88 + n * 0.12;
    return mix(MOON_DARK, MOON_LIT, shade) * albedo;
}

// ── Sun ──────────────────────────────────────────────────────────────────────
// A real 3D object at the cube's center. Surface shading reuses a radial
// frill/corona pattern mapped onto the sphere, plus a proximity glow for
// rays that pass near without hitting. gCelestialBody crossfades the whole
// body over to the moon look once a full weather lap completes under the sun.

const vec3  SUN_CTR = vec3(0.0, 0.0, 0.0);
const float SUN_R   = 0.16;

float sunFrillPattern(vec2 sP) {
    float a     = atan(sP.y, sP.x);
    float slowT = u_time * 0.3;
    return abs(sin(a * 5.0 + slowT + cos(a * 9.0 - slowT * 1.4)));
}

float intersectSphere(vec3 ro, vec3 rd, vec3 ctr, float r, out vec3 hitP, out vec3 hitN) {
    vec3 oc = ro - ctr;
    float b = dot(oc, rd);
    float c = dot(oc, oc) - r * r;
    float h = b * b - c;
    if (h < 0.0) return -1.0;
    h = sqrt(h);
    float t = -b - h;
    if (t < 0.0) return -1.0;
    hitP = ro + rd * t;
    hitN = normalize(hitP - ctr);
    return t;
}

// Crossfades to the moon look as gCelestialBody goes 0 -> 1, sharing the
// same hit normal so the swap needs no restructuring elsewhere.
vec3 shadeSunSurface(vec3 N) {
    vec3 up = abs(N.y) < 0.99 ? vec3(0, 1, 0) : vec3(1, 0, 0);
    vec3 t1 = normalize(cross(N, up));
    vec3 t2 = cross(N, t1);
    vec2 sP = vec2(dot(N, t1), dot(N, t2)) * 6.0;

    float frills = sunFrillPattern(sP);
    vec3 core  = vec3(1.00, 0.95, 0.80);
    vec3 hot   = vec3(1.00, 0.70, 0.30);
    vec3 sunCol = mix(core, hot, frills * 0.5) * 2.9;

    if (gCelestialBody > 0.001) {
        sunCol = mix(sunCol, shadeMoonSurface(N), gCelestialBody);
    }
    return sunCol;
}

// Proximity corona for rays that pass near without hitting the surface —
// closest-approach distance in 3D, so it reads correctly around a physical
// sphere from any angle. The moon gets a much fainter, flat halo instead of
// the sun's hot frilly corona.
vec3 sunProximityGlow(vec3 ro, vec3 rd) {
    vec3 oc = SUN_CTR - ro;
    float tClosest = max(dot(oc, rd), 0.0);
    vec3 closestP  = ro + rd * tClosest;
    float d = max(length(closestP - SUN_CTR) - SUN_R, 0.0);

    float glow = exp(-d * 9.0) * 0.9;
    vec2 sP = vec2(closestP.x - SUN_CTR.x, closestP.y - SUN_CTR.y) * 10.0;
    float frills = sunFrillPattern(sP);
    vec3 coronaCol = mix(vec3(1.0, 0.55, 0.20), vec3(1.0, 0.92, 0.75), frills);
    vec3 sunGlow = coronaCol * glow;

    if (gCelestialBody > 0.001) {
        float moonGlow = exp(-d * 14.0) * 0.35;
        sunGlow = mix(sunGlow, MOON_SKY_GLOW * moonGlow, gCelestialBody);
    }
    return sunGlow;
}

// ── Clouds ─────────────────────────────────────────────────────────────────────
// Gyroid volumetric SDF + gradient forming a cloud shell around the sun.

const float GOLDEN = 1.618034;

float Gyroids(vec3 p, float s) {
    return (dot(cos(p), sin(p.yzx * s)) - p.y * 0.125) * inversesqrt(1.0 + s * s);
}
vec3 GyroidsGradient(vec3 p, float s) {
    vec3 g;
    g.x = s * cos(p.z) * cos(p.x * s) - sin(p.x) * sin(p.y * s);
    g.y = s * cos(p.x) * cos(p.y * s) - sin(p.y) * sin(p.z * s) - 0.125;
    g.z = s * cos(p.y) * cos(p.z * s) - sin(p.z) * sin(p.x * s);
    return g * inversesqrt(1.0 + s * s);
}

// Density fills the whole shell between the sun's surface and OUTER_R (not
// just an outer rind), so rays threading between sun and glass genuinely
// pass through cloud material. March is depth-limited by maxT so it stops
// correctly at the sun's surface or the glass exit.
vec4 marchClouds(vec3 ro, vec3 rd, vec3 sDir, float maxT) {
    const int   SAMPLES = 56;
    const float OUTER_R = 0.62; // cube half = 1.0

    vec3 oc = ro - SUN_CTR;
    float b = dot(oc, rd);
    float c = dot(oc, oc) - OUTER_R * OUTER_R;
    float h = b * b - c;
    if (h < 0.0) return vec4(0.0);
    h = sqrt(h);
    float tNear = max(-b - h, 0.0);
    float tFar  = min(-b + h, maxT);
    if (tFar <= tNear) return vec4(0.0);

    float stepLen = (tFar - tNear) / float(SAMPLES);
    float t = tNear + stepLen * 0.5;
    float speed = u_time * 0.12;

    vec3  accumCol   = vec3(0.0);
    float accumAlpha = 0.0;

    for (int i = 0; i < SAMPLES; i++) {
        if (accumAlpha > 0.97) break;
        vec3 p = ro + rd * t - SUN_CTR;
        float distFromCtr = length(p);

        // Zero inside the sun, rises through a soft inner band, fills the
        // shell to OUTER_R, fades at the outer edge.
        float innerFade = smoothstep(SUN_R * 0.9, SUN_R * 1.6, distFromCtr);
        float outerFade = 1.0 - smoothstep(OUTER_R * 0.75, OUTER_R, distFromCtr);
        float envelope  = innerFade * outerFade;

        if (envelope > 0.005) {
            vec3 gp = p * 6.0;
            float g = Gyroids(gp + vec3(0.0, 0.0, speed), GOLDEN * 0.5)
                    + Gyroids(gp * 2.1, GOLDEN)       * 0.4
                    + Gyroids(gp * 4.4, GOLDEN * 2.0) * 0.15;
            g /= (1.0 + 0.4 + 0.15);

            // Weather controls both the porous band width (how much of the
            // shell counts as cloud at all) and the resulting opacity — low
            // density clears the sky rather than just fading haze.
            float gateWidth = mix(0.05, 0.24, saturate(gWeather.cloudDensity));
            float density = smoothstep(gateWidth, 0.0, abs(g)) * envelope;
            density = saturate(density * min(gWeather.cloudDensity, 1.0) * 1.55);

            if (density > 0.01) {
                vec3 n = GyroidsGradient(gp + vec3(0.0, 0.0, speed), GOLDEN * 0.5)
                       + GyroidsGradient(gp * 2.1, GOLDEN)       * 0.4
                       + GyroidsGradient(gp * 4.4, GOLDEN * 2.0) * 0.15;
                n = normalize(n);

                vec3 toSun   = normalize(-p);
                float ndotl  = max(dot(n, toSun), 0.0);
                float litFactor = smoothstep(0.22, 0.50, ndotl) * 0.6
                                 + smoothstep(0.55, 0.82, ndotl) * 0.4;

                vec3 cloudShadow = vec3(0.24, 0.26, 0.40) * gWeather.cloudTint;
                vec3 cloudTop    = vec3(1.20, 1.14, 1.02) * gWeather.cloudTint;
                vec3 sampleCol   = mix(cloudShadow, cloudTop, litFactor);

                // Warmth for cloud material near the sun, as if lit from
                // within — fades to a cooler, fainter pearl tint under the
                // moon instead.
                float sunProx = 1.0 - saturate((distFromCtr - SUN_R) / (OUTER_R * 0.5));
                vec3 sunWarmth  = vec3(1.0, 0.65, 0.30) * pow3(sunProx) * 0.8 * gWeather.sunVisibility;
                vec3 moonCoolth = MOON_SKY_GLOW * pow3(sunProx) * 0.25 * gWeather.sunVisibility;
                sampleCol += mix(sunWarmth, moonCoolth, gCelestialBody);

                float a = density * 0.45;
                accumCol   += sampleCol * a * (1.0 - accumAlpha);
                accumAlpha += a * (1.0 - accumAlpha);
            }
        }

        t += stepLen;
    }

    return vec4(accumCol, saturate(accumAlpha));
}

// ── Interior scene ─────────────────────────────────────────────────────────────
// What a refracted ray sees inside the cube: the sun sphere wrapped in a
// volumetric cloud shell, depth-composited correctly against it.
vec3 sceneEnv(vec3 ro, vec3 rd) {
    vec3 sDir = normalize(SUN_CTR - ro);

    vec3 col = themeBackground(rd) * mix(0.55, 1.0, gWeather.sunVisibility);

    // Thunderstorm flash: briefly floods the interior sky, echoing how a
    // real strike backlights the whole cloud mass.
    col += vec3(0.85, 0.9, 1.0) * gStrikeFlash * 0.6;
    col += vec3(0.7, 0.78, 1.0) * gThunderFlash * 0.25;

    vec3 sunHitP, sunHitN;
    float tSun = intersectSphere(ro, rd, SUN_CTR, SUN_R, sunHitP, sunHitN);
    float maxT = (tSun > 0.0) ? tSun : 4.0;

    // Moonlight reads through far more cloud cover than sunlight before
    // washing out, so its obscure floor is much gentler.
    float obscureFloorDisc = mix(0.35, 0.7, gCelestialBody);
    float obscureFloorGlow = mix(0.25, 0.6, gCelestialBody);

    if (tSun > 0.0) {
        vec3 sunCol = shadeSunSurface(sunHitN);
        float lum = dot(sunCol, vec3(0.299, 0.587, 0.114));
        sunCol = mix(vec3(lum) * 0.6, sunCol, gWeather.sunVisibility);
        col = sunCol * mix(obscureFloorDisc, 1.0, gWeather.sunVisibility);
    } else {
        col += sunProximityGlow(ro, rd) * mix(obscureFloorGlow, 1.0, gWeather.sunVisibility);
    }

    vec4 cloud = marchClouds(ro, rd, sDir, maxT);
    col = mix(col, cloud.rgb, cloud.a);

    // Added after the cloud composite so it reads as light coming
    // through/around the cloud rather than being replaced by it.
    col += lightningBoltGlow(ro, rd);

    return col;
}

// ── Glass optics ───────────────────────────────────────────────────────────────

float schlickF(float cosTheta, float F0) {
    return F0 + (1.0 - F0) * pow5(1.0 - cosTheta);
}

const vec3 C_CHROME = vec3(0.80, 0.88, 0.96);

// ── Cube geometry ──────────────────────────────────────────────────────────────

const float CUBE_HALF  = 1.0;
const float CUBE_ROUND = 0.035;

float sdRoundBox(vec3 p, vec3 b, float r) {
    vec3 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;
}
float cubeSDF(vec3 p) {
    return sdRoundBox(p, vec3(CUBE_HALF), CUBE_ROUND);
}
vec3 cubeNormal(vec3 p) {
    const float e = 0.0015;
    vec2 k = vec2(1.0, -1.0);
    return normalize(
        k.xyy * cubeSDF(p + k.xyy * e) +
        k.yyx * cubeSDF(p + k.yyx * e) +
        k.yxy * cubeSDF(p + k.yxy * e) +
        k.xxx * cubeSDF(p + k.xxx * e)
    );
}

float traceCube(vec3 ro, vec3 rd, out vec3 hitP, out vec3 hitN) {
    vec3 invD = 1.0 / rd;
    vec3 t0s = (vec3(-CUBE_HALF) - ro) * invD;
    vec3 t1s = (vec3( CUBE_HALF) - ro) * invD;
    vec3 tsm = min(t0s, t1s);
    vec3 tbg = max(t0s, t1s);
    float tmin = max(max(tsm.x, tsm.y), tsm.z);
    float tmax = min(min(tbg.x, tbg.y), tbg.z);
    if (tmax < 0.0 || tmin > tmax) return -1.0;

    float t = max(tmin - 0.05, 0.0);
    for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        float d = cubeSDF(p);
        if (d < 0.0008) { hitP = p; hitN = cubeNormal(p); return t; }
        t += d;
        if (t > tmax + 0.2) break;
    }
    return -1.0;
}

float traceCubeInside(vec3 ro, vec3 rd, out vec3 hitP, out vec3 hitN) {
    float t = 0.01;
    for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        float d = -cubeSDF(p);
        if (d < 0.0008) { hitP = p; hitN = -cubeNormal(p); return t; }
        t += max(d, 0.005);
        if (t > 6.0) break;
    }
    hitP = ro + rd * 3.0;
    hitN = -rd;
    return 3.0;
}

// ── Precipitation on glass ─────────────────────────────────────────────────────
// Faithful port of Heartfelt's drop mechanics (Martijn Steinrucken /
// BigWings) — same hash functions, Saw() timing curve and DropLayer2
// formula. The coverage field is used two ways: finite-differenced into a
// normal that bends the refracted ray (real lensing, not painted-on
// shapes), and as a trail mask that darkens/wets the surface where water
// has run. Snow and hail are separate hash-grid fields built the same way.

float SP(float a, float b, float t) { return smoothstep(a, b, t); }

vec3 N13p(float p) {
    vec3 p3 = fract(vec3(p) * vec3(.1031, .11369, .13787));
    p3 += dot(p3, p3.yzx + 19.19);
    return fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
}
float Np(float t) { return fract(sin(t * 12345.564) * 7658.76); }
float SawP(float b, float t) { return SP(0., b, t) * SP(1., b, t); }

// UV is the unscaled local coordinate — matches the original's use of
// UV.y for the wiggle phase and droplet placement.
vec2 dropLayer(vec2 uv, float t) {
    vec2 UV = uv;

    uv.y += t * 0.75;
    vec2 a = vec2(6., 1.);
    vec2 grid = a * 2.;
    vec2 id = floor(uv * grid);

    float colShift = Np(id.x);
    uv.y += colShift;

    id = floor(uv * grid);
    vec3 n = N13p(id.x * 35.2 + id.y * 2376.1);
    vec2 st = fract(uv * grid) - vec2(.5, 0);

    float x = n.x - .5;

    float y = UV.y * 20.;
    float wiggle = sin(y + sin(y));
    x += wiggle * (.5 - abs(x)) * (n.z - .5);
    x *= .7;
    float ti = fract(t + n.z);
    y = (SawP(.85, ti) - .5) * .9 + .5;
    vec2 p = vec2(x, y);

    float d = length((st - p) * a.yx);
    float mainDrop = SP(.4, .0, d);

    float r = sqrt(SP(1., y, st.y));
    float cd = abs(st.x - x);
    float trail = SP(.23 * r, .15 * r * r, cd);
    float trailFront = SP(-.02, .02, st.y - y);
    trail *= trailFront * r * r;

    y = UV.y;
    float trail2 = SP(.2 * r, .0, cd);
    float droplets = max(0., (sin(y * (1. - y) * 120.) - st.y)) * trail2 * trailFront * n.z;
    y = fract(y * 10.) + (st.y - .5);
    float dd = length(st - vec2(x, y));
    droplets = SP(.3, 0., dd);
    float m = mainDrop + droplets * r * trailFront;

    return vec2(m, trail);
}

float staticDrops(vec2 uv, float t) {
    uv *= 40.;
    vec2 id = floor(uv);
    uv = fract(uv) - .5;
    vec3 n = N13p(id.x * 107.45 + id.y * 3543.654);
    vec2 p = (n.xy - .5) * .7;
    float d = length(uv - p);

    float fade = SawP(.025, fract(t + n.z));
    return SP(.3, 0., d) * fract(n.z * 10.) * fade;
}

// Static condensation + two moving layers, matching Heartfelt's Drops()
// composition. Returns (coverage, trailMask).
vec2 rainField(vec2 uv, float t, float amount) {
    float l0 = SP(-.5, 1., amount) * 2.;
    float l1 = SP(.25, .75, amount);
    float l2 = SP(.0, .5, amount);

    float s  = staticDrops(uv, t) * l0;
    vec2 m1  = dropLayer(uv, t) * l1;
    vec2 m2  = dropLayer(uv * 1.85, t) * l2;

    float c = s + m1.x + m2.x;
    c = SP(.3, 1., c);

    return vec2(c, max(m1.y * l0, m2.y * l1));
}

// Direct port of the layered Worley-ish flake field from
// https://www.shadertoy.com/view/ldsGDn — same hash matrix, same per-layer
// depth/width/speed falloff. The original drives depth/width/speed off
// mouse-Y; here the weather's snow amount drives the same curves directly.
const mat3 SNOW_P = mat3(13.323122,23.5112,21.71123, 21.1212,28.7312,11.9312, 21.8112,14.7212,61.3934);

float snowField(vec2 uv, float t, float amount) {
    float my = amount * 0.25;
    float depth = smoothstep(.3, .1, my);
    float width = smoothstep(.4, .3, my);
    float speed = smoothstep(.6, .1, my);

    float acc = 0.0;
    const int SNOW_LAYERS = 40; // fewer than the original 66 — this is a small patch of a full frame
    float dof = 5.0 * sin(t * 0.1);
    for (int i = 0; i < SNOW_LAYERS; i++) {
        float fi = float(i);
        vec2 q = uv * (1.0 + fi * depth);
        float w = width * mod(fi * 7.238917, 1.0) - width * 0.1 * sin(t * 2.0 + fi);
        q += vec2(q.y * w, speed * t / (1.0 + fi * depth * 0.03));
        vec3 n = vec3(floor(q), 31.189 + fi);
        vec3 m = floor(n) * 0.00001 + fract(n);
        vec3 mp = (31415.9 + m) / fract(SNOW_P * m);
        vec3 r = fract(mp);
        vec2 s = abs(mod(q, 1.0) - 0.5 + 0.9 * r.xy - 0.45);
        s += 0.01 * abs(2.0 * fract(10.0 * q.yx) - 1.0);
        float d = 0.6 * max(s.x - s.y, s.x + s.y) + max(s.x, s.y) - 0.01;
        float edge = 0.05 + 0.05 * min(0.5 * abs(fi - 5.0 - dof), 1.0);
        acc += smoothstep(edge, -edge, d) * (r.x / (1.0 + 0.02 * fi * depth));
    }
    return saturate(acc);
}

// Same per-cell drop mechanics as rain but fast, small, near-vertical, with
// a hard bright core and no soft trail — reads as ice pellets, not water.
vec2 hailField(vec2 uv, float t) {
    vec2 UV = uv;
    uv.y += t * 2.2;
    vec2 a = vec2(10., 1.);
    vec2 grid = a * 2.;
    vec2 id = floor(uv * grid);

    float colShift = Np(id.x + 61.1);
    uv.y += colShift;

    id = floor(uv * grid);
    vec3 n = N13p(id.x * 51.3 + id.y * 918.2 + 7.0);
    vec2 st = fract(uv * grid) - vec2(.5, 0);

    float x = (n.x - .5) * .5;
    float ti = fract(t * 1.6 + n.z);
    float y = (SawP(.6, ti) - .5) * .9 + .5;
    vec2 p = vec2(x, y * 0.4);

    float d = length((st - p) * vec2(a.y, a.x * 1.8));
    float core = SP(.22, .0, d) * step(0.4, n.z); // sparse — not every cell gets a pellet
    return vec2(core, 0.0);
}

vec3 applyPrecipitation(vec3 col, float dropCoverage, float trailMask, float hailCoverage, float snowCoverage) {
    // The lensing itself already happened upstream via the normal offset;
    // here we only add the wet darkening / icy surface color.
    if (gWeather.rain > 0.001) {
        col = mix(col, col * 0.88, trailMask * 0.6 * gWeather.rain);
        col += dropCoverage * 0.12 * gWeather.rain;
    }
    if (gWeather.hail > 0.001) {
        col = mix(col, vec3(1.0, 1.0, 1.02), hailCoverage * 0.85);
    }
    if (gWeather.snow > 0.001) {
        col = mix(col, vec3(0.95, 0.96, 1.0), snowCoverage * 0.75);
    }
    return col;
}

// Gravity-aligned tangent basis at a hit point. tangentV is world-down
// flattened into the surface's tangent plane; gravityStrength is how much
// of world-down actually lies in that plane (1 = vertical pane, 0 =
// horizontal pane with no meaningful downhill direction).
const vec3 WORLD_UP = vec3(0.0, 1.0, 0.0);

void surfaceBasis(vec3 N, out vec3 tangentU, out vec3 tangentV, out float gravityStrength) {
    // dropLayer()/hailField()/snowField() all inherit the convention that
    // increasing uv.y is up, so tangentV must point world-up or the whole
    // falling direction inverts.
    vec3 upInPlane = WORLD_UP - N * dot(WORLD_UP, N);
    gravityStrength = length(upInPlane);

    if (gravityStrength > 0.02) {
        tangentV = upInPlane / gravityStrength;
    } else {
        // Near-horizontal face — no in-plane gravity component; caller uses
        // gravityStrength to suppress directional streaking here instead of
        // faking a fall direction.
        vec3 fallback = abs(N.y) > 0.9 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
        tangentV = normalize(fallback - N * dot(fallback, N));
    }
    tangentU = cross(N, tangentV);
}

// Precipitation seen through a horizontal face (top/bottom), looking down
// the actual fall axis rather than a 2D texture rotated onto the face.
// Through the top you're looking the way gravity pulls (far flakes small,
// growing as they near the glass); through the bottom you're looking
// backward against the fall (near flakes large, shrinking as they recede).
// Each flake composites with real "over" alpha blending across a small
// grid of depth-sorted layers, near-to-far, so nearer flakes read in front
// of farther ones instead of replacing them.
float verticalFallField(vec2 planeUV, float t, float amount, bool viewingFromAbove, float baseSize, out float bumpX, out float bumpY) {
    const int DEPTH_LAYERS = 12;
    float accAlpha = 0.0;
    vec2 accBump = vec2(0.0);

    for (int i = 0; i < DEPTH_LAYERS; i++) {
        if (accAlpha > 0.97) break;
        float fi = float(i);
        float cellSize = mix(0.30, 0.60, fract(fi * 0.371));
        vec2 cell = planeUV / cellSize + vec2(fi * 3.7, fi * 1.9);
        vec2 id = floor(cell);
        vec2 local = fract(cell) - 0.5;

        vec3 n = N13p(id.x * 91.7 + id.y * 51.3 + fi * 13.0 + 401.0);
        local += (n.xy - 0.5) * 0.5;

        float phase = fract(t * (0.15 + n.z * 0.1) + n.x);
        float depth = phase; // 0 = just spawned, 1 = at the glass
        float depthFromCam = viewingFromAbove ? depth : (1.0 - depth);

        float r = mix(baseSize * 0.15, baseSize, depthFromCam);
        // Motion elongation — fast flakes near the glass stretch slightly
        // along their radial fall direction.
        float stretch = mix(1.0, 1.8, smoothstep(0.6, 1.0, depthFromCam));
        vec2 localS = local * vec2(1.0, stretch);
        float d = length(localS);

        float lifeFade = smoothstep(0.0, 0.15, depth) * smoothstep(1.0, 0.85, depth);
        float edgeSoftness = mix(r * 1.6, r * 0.12, depthFromCam);
        float shape = smoothstep(r + edgeSoftness, r * 0.1, d);
        float brightness = mix(0.15, 1.0, depthFromCam * depthFromCam);

        float a = shape * lifeFade * brightness * (0.4 + 0.6 * n.z);
        float take = a * mix(0.35, 1.0, depthFromCam);
        accBump += local * take * (1.0 - accAlpha);
        accAlpha += take * (1.0 - accAlpha);
    }

    bumpX = accBump.x;
    bumpY = accBump.y;
    return saturate(accAlpha) * amount;
}

// ── Shade ──────────────────────────────────────────────────────────────────────
// Refraction through both faces (chromatic) blended with fresnel-grazing
// reflection, plus GGX specular. Also computes the precipitation field
// directly on the outer surface using a gravity-aligned tangent basis, so
// drops run downward as seen by the camera on every face and don't fake a
// slide direction where gravity has no in-plane component at all.
vec3 shadeGlassCube(vec3 rd, vec3 p, vec3 N) {
    vec3 V = -rd;

    float ior = 1.52;
    float F0  = pow2((1.0 - ior) / (1.0 + ior));
    float NdotV = saturate(dot(N, V));
    float fresnel = schlickF(NdotV, F0);

    vec3 tangentU, tangentV;
    float gravityStrength;
    surfaceBasis(N, tangentU, tangentV, gravityStrength);
    float fallAmount = smoothstep(0.0, 0.3, gravityStrength); // 1 = vertical glass, 0 = horizontal glass

    vec2 eps = vec2(0.0025, 0.0);
    vec2 dropN2D = vec2(0.0);
    float rC_x_coverage = 0.0, rC_y_trail = 0.0, hC_coverage = 0.0, snowC = 0.0;

    if (fallAmount > 0.05) {
        // Vertical glass: drops/hail slide and streak downward.
        float faceHash = fract(sin(dot(N, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
        vec2 faceOffset = vec2(faceHash, fract(faceHash * 17.13)) * 37.0;
        vec2 fUV = vec2(dot(p, tangentU), dot(p, tangentV)) + faceOffset;

        float rainT = u_time * 0.2 * gWeather.rainSpeedMul;
        vec2 rUV = fUV * 1.1;
        vec2 rC = rainField(rUV, rainT, gWeather.rain);
        float rC_x = rainField(rUV + eps.xy, rainT, gWeather.rain).x;
        float rC_y = rainField(rUV + eps.yx, rainT, gWeather.rain).x;
        dropN2D += vec2(rC_x - rC.x, rC_y - rC.x) * 6.0 * gWeather.rain * fallAmount;
        rC_x_coverage = rC.x; rC_y_trail = rC.y;

        float hailT = u_time * 0.6;
        vec2 hUV = fUV * 1.3;
        vec2 hC = hailField(hUV, hailT) * gWeather.hail;
        float hC_x = hailField(hUV + eps.xy, hailT).x * gWeather.hail;
        float hC_y = hailField(hUV + eps.yx, hailT).x * gWeather.hail;
        dropN2D += vec2(hC_x - hC.x, hC_y - hC.x) * 4.0 * fallAmount;
        hC_coverage = hC.x;

        float snowT = u_time * 0.3;
        vec2 sUV = fUV * 0.9;
        float sC = snowField(sUV, snowT, gWeather.snow) * gWeather.snow;
        float snC_x = snowField(sUV + eps.xy, snowT, gWeather.snow) * gWeather.snow;
        float snC_y = snowField(sUV + eps.yx, snowT, gWeather.snow) * gWeather.snow;
        dropN2D += vec2(snC_x - sC, snC_y - sC) * 2.5 * fallAmount;
        snowC = sC;
    }

    if (fallAmount < 0.95) {
        // Horizontal glass (top/bottom): use the true horizontal plane
        // directly rather than the gravity-tangent basis, since there's no
        // meaningful "down" here — particles approach/recede along the
        // view instead of sliding sideways.
        bool viewingFromAbove = N.y > 0.0;
        vec2 planeUV = p.xz * 1.4;

        float rainT2 = u_time * 0.9 * gWeather.rainSpeedMul;
        float rBumpX, rBumpY;
        float rainFall = verticalFallField(planeUV, rainT2, gWeather.rain, viewingFromAbove, 0.10, rBumpX, rBumpY);
        dropN2D += vec2(rBumpX, rBumpY) * 3.0 * (1.0 - fallAmount);
        rC_x_coverage = max(rC_x_coverage, rainFall);

        float hailT2 = u_time * 1.3;
        float hBumpX, hBumpY;
        float hailFall = verticalFallField(planeUV * 1.2, hailT2, gWeather.hail, viewingFromAbove, 0.08, hBumpX, hBumpY);
        dropN2D += vec2(hBumpX, hBumpY) * 2.5 * (1.0 - fallAmount);
        hC_coverage = max(hC_coverage, hailFall);

        float snowT2 = u_time * 0.35;
        float sBumpX, sBumpY;
        float snowFall = verticalFallField(planeUV * 0.85, snowT2, gWeather.snow, viewingFromAbove, 0.13, sBumpX, sBumpY);
        dropN2D += vec2(sBumpX, sBumpY) * 2.0 * (1.0 - fallAmount);
        snowC = max(snowC, snowFall);
    }

    // Re-express the 2D drop-field normal back into world space.
    vec3 dropN = tangentU * dropN2D.x + tangentV * dropN2D.y;
    vec3 Nb = normalize(N + dropN * 0.35);

    float disp = 0.020;
    vec3 refrDirR = refract(rd, Nb, 1.0 / (ior - disp));
    vec3 refrDirG = refract(rd, Nb, 1.0 / ior);
    vec3 refrDirB = refract(rd, Nb, 1.0 / (ior + disp));
    if (dot(refrDirG, refrDirG) < 0.001) refrDirG = reflect(rd, Nb);
    if (dot(refrDirR, refrDirR) < 0.001) refrDirR = refrDirG;
    if (dot(refrDirB, refrDirB) < 0.001) refrDirB = refrDirG;

    vec3 exitP, exitN;
    traceCubeInside(p + refrDirG * 0.01, refrDirG, exitP, exitN);
    vec3 outDirG = refract(refrDirG, exitN, ior);
    if (dot(outDirG, outDirG) < 0.001) outDirG = refrDirG;

    vec3 exitPR, exitNR;
    traceCubeInside(p + refrDirR * 0.01, refrDirR, exitPR, exitNR);
    vec3 outDirR = refract(refrDirR, exitNR, ior - disp);
    if (dot(outDirR, outDirR) < 0.001) outDirR = refrDirR;

    vec3 exitPB, exitNB;
    traceCubeInside(p + refrDirB * 0.01, refrDirB, exitPB, exitNB);
    vec3 outDirB = refract(refrDirB, exitNB, ior + disp);
    if (dot(outDirB, outDirB) < 0.001) outDirB = refrDirB;

    // Interior scene is sampled along each refracted ray's path through the
    // glass volume, so the corona/clouds look like they float inside the
    // cube rather than being painted on it.
    vec3 sceneG = sceneEnv(p, refrDirG);
    vec3 sceneR = sceneEnv(p, refrDirR);
    vec3 sceneB = sceneEnv(p, refrDirB);

    // Past the exit face the ray would continue into the flat outside
    // background — blend a touch in at the exit point.
    vec3 refrEnv = vec3(
        mix(sceneR.r, background(outDirR).r, 0.15),
        mix(sceneG.g, background(outDirG).g, 0.15),
        mix(sceneB.b, background(outDirB).b, 0.15)
    );

    vec3 envRefl = background(reflect(rd, Nb));

    vec3 col = mix(refrEnv, envRefl, fresnel);

    float rimFresnel = pow5(1.0 - NdotV);
    col += C_CHROME * rimFresnel * 0.35;

    // Lightning catching the glass edges: same bolt glow used inside the
    // cube, sampled from the outer surface looking toward the camera —
    // strongest at grazing angles, like real light scattering along an edge.
    vec3 edgeGlow = lightningBoltGlow(p, V);
    col += edgeGlow * (0.4 + rimFresnel * 1.6);

    // Foggy-glass effect for wet/overcast weather: interior detail flattens
    // toward a soft neutral haze.
    vec3 haze = mix(refrEnv, envRefl, fresnel * 0.5 + 0.25);
    haze = mix(haze, vec3(dot(haze, vec3(0.299, 0.587, 0.114))), 0.6);
    col = mix(col, haze, gWeather.fogAmount * 0.5);

    col = applyPrecipitation(col, rC_x_coverage, rC_y_trail, hC_coverage, snowC);

    return col;
}

// ── Camera ─────────────────────────────────────────────────────────────────────
// Fixed orbit, no pointer input: circles the cube on yaw while a slower,
// gentler pitch bob rides on top, so the path reads as a loose figure-eight
// around the cube rather than a flat horizontal spin.

mat3 rotY(float a){ float s=sin(a),c=cos(a); return mat3(c,0.0,-s, 0.0,1.0,0.0, s,0.0,c); }
mat3 rotX(float a){ float s=sin(a),c=cos(a); return mat3(1.0,0.0,0.0, 0.0,c,s, 0.0,-s,c); }

const float ORBIT_SPEED = 0.12;
const float ORBIT_DIST  = 4.7;
const float PITCH_SPEED = 0.045;  // slower than yaw so the two drift out of phase
const float PITCH_AMP   = 0.28;   // radians — gentle enough to keep the cube framed

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - 0.5 * u_res.xy) / u_res.y;

    gWeather = computeWeather(u_time);
    gCelestialBody = computeCelestialBody(u_time);
    computeLightningStrike(u_time, gWeather.lightning);

    float yaw   = u_time * ORBIT_SPEED;
    float pitch = sin(u_time * PITCH_SPEED) * PITCH_AMP;
    mat3 camRot = rotY(yaw) * rotX(pitch);
    vec3 ro = camRot * vec3(0.0, 0.0, -ORBIT_DIST);
    vec3 rd = normalize(camRot * normalize(vec3(uv, 1.6)));

    vec3 col = background(rd);
    float alpha = 0.0;

    vec3 hitP, hitN;
    float t = traceCube(ro, rd, hitP, hitN);
    if (t > 0.0) {
        col = shadeGlassCube(rd, hitP, hitN);
        alpha = 1.0;
    }

    // A strike briefly lifts the whole frame's exposure, echoing how real
    // lightning throws ambient light across everything nearby.
    col += vec3(0.7, 0.78, 1.0) * gStrikeFlash * 0.12;
    col += vec3(0.6, 0.68, 0.95) * gThunderFlash * 0.06;

    fragColor = vec4(saturate(col), alpha);
}`;function U(e,t,a){let r=e.createShader(t);return e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error("[WeatherCube] shader compile error:",e.getShaderInfoLog(r)),r}e.s(["WeatherCube",0,function({className:e,"aria-label":a="Interactive weather cube"}){let{theme:r}=(0,R.useWebGLContext)(),o=(0,l.useRef)(null),i=(0,l.useRef)(C.THEME_COLORS[r]??C.THEME_COLORS.meadow);return i.current=C.THEME_COLORS[r]??C.THEME_COLORS.meadow,(0,l.useEffect)(()=>{let e=o.current;if(!e)return;let t=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});if(!t)return void console.warn("[WeatherCube] WebGL 2 not available.");let a=U(t,t.VERTEX_SHADER,G),r=U(t,t.FRAGMENT_SHADER,M),l=t.createProgram();if(t.attachShader(l,a),t.attachShader(l,r),t.linkProgram(l),t.detachShader(l,a),t.detachShader(l,r),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(l,t.LINK_STATUS))return void console.error("[WeatherCube] link error:",t.getProgramInfoLog(l));t.useProgram(l);let n=t.createVertexArray();t.bindVertexArray(n);let s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null);let c={res:t.getUniformLocation(l,"u_res"),time:t.getUniformLocation(l,"u_time"),color1:t.getUniformLocation(l,"u_color1"),color2:t.getUniformLocation(l,"u_color2"),color3:t.getUniformLocation(l,"u_color3"),color4:t.getUniformLocation(l,"u_color4")},f=.85*Math.min(window.devicePixelRatio,1.5),d=()=>{e.width=Math.round(e.clientWidth*f),e.height=Math.round(e.clientHeight*f),t.viewport(0,0,e.width,e.height)};d();let u=new ResizeObserver(d);u.observe(e);let h="visible"===document.visibilityState,m=()=>{h="visible"===document.visibilityState};document.addEventListener("visibilitychange",m);let v=new IntersectionObserver(([e])=>{h=e?.isIntersecting??!1},{threshold:0});v.observe(e);let p=a=>{let r=i.current;t.uniform2f(c.res,e.width,e.height),t.uniform1f(c.time,a),t.uniform3fv(c.color1,r.subarray(0,3)),t.uniform3fv(c.color2,r.subarray(3,6)),t.uniform3fv(c.color3,r.subarray(6,9)),t.uniform3fv(c.color4,r.subarray(9,12))};if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return t.bindVertexArray(n),d(),p(0),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.bindVertexArray(null),()=>{u.disconnect(),v.disconnect(),document.removeEventListener("visibilitychange",m),t.deleteBuffer(s),t.deleteVertexArray(n),t.deleteProgram(l)};let g=performance.now(),b=0,x=0,y=e=>{b=requestAnimationFrame(y),h&&!(e-x<33)&&(x=e,t.bindVertexArray(n),p((e-g)*.001),t.drawArrays(t.TRIANGLE_STRIP,0,4),t.bindVertexArray(null))};return b=requestAnimationFrame(y),()=>{cancelAnimationFrame(b),u.disconnect(),v.disconnect(),document.removeEventListener("visibilitychange",m),t.deleteBuffer(s),t.deleteVertexArray(n),t.deleteProgram(l)}},[o.current]),(0,t.jsx)("div",{className:["weather-cube__wrapper",e].filter(Boolean).join(" "),children:(0,t.jsx)("canvas",{ref:o,className:"weather-cube__canvas","aria-label":a||void 0,"aria-hidden":""===a||void 0})})}],93533),e.s([],47315)}]);