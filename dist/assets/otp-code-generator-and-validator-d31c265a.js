import{d as R,P as t,b4 as Y,bv as F,bs as J,bt as K,bu as Z,a as _,aM as B,D as I,E as m,H as P,I as oe,J as Q,cA as ie,L as U,M as ne,o as V,e as L,f as C,b as se,v as M,a5 as le,i as b,w,cB as q,l as D,t as O,g,m as ee,aY as te,cC as ae,a3 as ce,ad as de,n as ue,x as pe,F as ge,y as fe,B as he}from"./index-bdafdd1b.js";import{u as me,_ as ve}from"./useQRCode-84dbc71a.js";import{c as N}from"./index-10d133aa.js";import{c as ye}from"./token-generator.service-89a72b36.js";import{_ as T}from"./InputCopyable.vue_vue_type_script_setup_true_lang-0bc8f76a.js";import{c as be}from"./computedRefreshable-e0afdfa4.js";import"./is-browser-fc34c9a6.js";import"./use-locale-9f5ebf2e.js";import"./browser-9d43139f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-538efbf0.js";const xe={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},Ce=R({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:o}){function u(i,r,n,a){const{gapDegree:l,viewBoxWidth:v,strokeWidth:f}=e,d=50,c=0,y=d,s=0,h=2*d,S=50+f/2,k=`M ${S},${S} m ${c},${y}
      a ${d},${d} 0 1 1 ${s},${-h}
      a ${d},${d} 0 1 1 ${-s},${h}`,x=Math.PI*2*d,$={stroke:a==="rail"?n:typeof e.fillColor=="object"?"url(#gradient)":n,strokeDasharray:`${i/100*(x-l)}px ${v*8}px`,strokeDashoffset:`-${l/2}px`,transformOrigin:r?"center":void 0,transform:r?`rotate(${r}deg)`:void 0};return{pathString:k,pathStyle:$}}const p=()=>{const i=typeof e.fillColor=="object",r=i?e.fillColor.stops[0]:"",n=i?e.fillColor.stops[1]:"";return i&&t("defs",null,t("linearGradient",{id:"gradient",x1:"0%",y1:"100%",x2:"100%",y2:"0%"},t("stop",{offset:"0%","stop-color":r}),t("stop",{offset:"100%","stop-color":n})))};return()=>{const{fillColor:i,railColor:r,strokeWidth:n,offsetDegree:a,status:l,percentage:v,showIndicator:f,indicatorTextColor:d,unit:c,gapOffsetDegree:y,clsPrefix:s}=e,{pathString:h,pathStyle:S}=u(100,0,r,"rail"),{pathString:k,pathStyle:x}=u(v,a,i,"fill"),$=100+n;return t("div",{class:`${s}-progress-content`,role:"none"},t("div",{class:`${s}-progress-graph`,"aria-hidden":!0},t("div",{class:`${s}-progress-graph-circle`,style:{transform:y?`rotate(${y}deg)`:void 0}},t("svg",{viewBox:`0 0 ${$} ${$}`},p(),t("g",null,t("path",{class:`${s}-progress-graph-circle-rail`,d:h,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:S})),t("g",null,t("path",{class:[`${s}-progress-graph-circle-fill`,v===0&&`${s}-progress-graph-circle-fill--empty`],d:k,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:x}))))),f?t("div",null,o.default?t("div",{class:`${s}-progress-custom-content`,role:"none"},o.default()):l!=="default"?t("div",{class:`${s}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:s},{default:()=>xe[l]})):t("div",{class:`${s}-progress-text`,style:{color:d},role:"none"},t("span",{class:`${s}-progress-text__percentage`},v),t("span",{class:`${s}-progress-text__unit`},c))):null)}}}),_e={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},$e=R({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:o}){const u=_(()=>B(e.height)),p=_(()=>{var n,a;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(n=e.fillColor)===null||n===void 0?void 0:n.stops[0]} , ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[1]})`:e.fillColor}),i=_(()=>e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):""),r=_(()=>e.fillBorderRadius!==void 0?B(e.fillBorderRadius):e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:n,railColor:a,railStyle:l,percentage:v,unit:f,indicatorTextColor:d,status:c,showIndicator:y,processing:s,clsPrefix:h}=e;return t("div",{class:`${h}-progress-content`,role:"none"},t("div",{class:`${h}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${n}`]:!0}]},t("div",{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:a,height:u.value,borderRadius:i.value},l]},t("div",{class:[`${h}-progress-graph-line-fill`,s&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:p.value,height:u.value,lineHeight:u.value,borderRadius:r.value}},n==="inside"?t("div",{class:`${h}-progress-graph-line-indicator`,style:{color:d}},o.default?o.default():`${v}${f}`):null)))),y&&n==="outside"?t("div",null,o.default?t("div",{class:`${h}-progress-custom-content`,style:{color:d},role:"none"},o.default()):c==="default"?t("div",{role:"none",class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:d}},v,f):t("div",{class:`${h}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:h},{default:()=>_e[c]}))):null)}}});function E(e,o,u=100){return`m ${u/2} ${u/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Se=R({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:o}){const u=_(()=>e.percentage.map((r,n)=>`${Math.PI*r/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),p=(i,r)=>{const n=e.fillColor[r],a=typeof n=="object"?n.stops[0]:"",l=typeof n=="object"?n.stops[1]:"";return typeof e.fillColor[r]=="object"&&t("linearGradient",{id:`gradient-${r}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":a}),t("stop",{offset:"100%","stop-color":l}))};return()=>{const{viewBoxWidth:i,strokeWidth:r,circleGap:n,showIndicator:a,fillColor:l,railColor:v,railStyle:f,percentage:d,clsPrefix:c}=e;return t("div",{class:`${c}-progress-content`,role:"none"},t("div",{class:`${c}-progress-graph`,"aria-hidden":!0},t("div",{class:`${c}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${i} ${i}`},t("defs",null,d.map((y,s)=>p(y,s))),d.map((y,s)=>t("g",{key:s},t("path",{class:`${c}-progress-graph-circle-rail`,d:E(i/2-r/2*(1+2*s)-n*s,r,i),"stroke-width":r,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:v[s]},f[s]]}),t("path",{class:[`${c}-progress-graph-circle-fill`,y===0&&`${c}-progress-graph-circle-fill--empty`],d:E(i/2-r/2*(1+2*s)-n*s,r,i),"stroke-width":r,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:u.value[s],strokeDashoffset:0,stroke:typeof l[s]=="object"?`url(#gradient-${s})`:l[s]}})))))),a&&o.default?t("div",null,t("div",{class:`${c}-progress-text`},o.default())):null)}}}),we=I([m("progress",{display:"inline-block"},[m("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),P("line",`
 width: 100%;
 display: block;
 `,[m("progress-content",`
 display: flex;
 align-items: center;
 `,[m("progress-graph",{flex:1})]),m("progress-custom-content",{marginLeft:"14px"}),m("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[P("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),P("circle, dashboard",{width:"120px"},[m("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),m("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),P("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[m("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),m("progress-content",{position:"relative"}),m("progress-graph",{position:"relative"},[m("progress-graph-circle",[I("svg",{verticalAlign:"bottom"}),m("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[P("empty",{opacity:0})]),m("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),m("progress-graph-line",[P("indicator-inside",[m("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[m("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),m("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),P("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[m("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),m("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),m("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[m("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[P("processing",[I("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),I("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),ke=Object.assign(Object.assign({},Q.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Pe=R({name:"Progress",props:ke,setup(e){const o=_(()=>e.indicatorPlacement||e.indicatorPosition),u=_(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:p,inlineThemeDisabled:i}=oe(e),r=Q("Progress","-progress",we,ie,e,p),n=_(()=>{const{status:l}=e,{common:{cubicBezierEaseInOut:v},self:{fontSize:f,fontSizeCircle:d,railColor:c,railHeight:y,iconSizeCircle:s,iconSizeLine:h,textColorCircle:S,textColorLineInner:k,textColorLineOuter:x,lineBgProcessing:$,fontWeightCircle:W,[U("iconColor",l)]:j,[U("fillColor",l)]:z}}=r.value;return{"--n-bezier":v,"--n-fill-color":z,"--n-font-size":f,"--n-font-size-circle":d,"--n-font-weight-circle":W,"--n-icon-color":j,"--n-icon-size-circle":s,"--n-icon-size-line":h,"--n-line-bg-processing":$,"--n-rail-color":c,"--n-rail-height":y,"--n-text-color-circle":S,"--n-text-color-line-inner":k,"--n-text-color-line-outer":x}}),a=i?ne("progress",_(()=>e.status[0]),n,e):void 0;return{mergedClsPrefix:p,mergedIndicatorPlacement:o,gapDeg:u,cssVars:i?void 0:n,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{type:e,cssVars:o,indicatorTextColor:u,showIndicator:p,status:i,railColor:r,railStyle:n,color:a,percentage:l,viewBoxWidth:v,strokeWidth:f,mergedIndicatorPlacement:d,unit:c,borderRadius:y,fillBorderRadius:s,height:h,processing:S,circleGap:k,mergedClsPrefix:x,gapDeg:$,gapOffsetDegree:W,themeClass:j,$slots:z,onRender:A}=this;return A?.(),t("div",{class:[j,`${x}-progress`,`${x}-progress--${e}`,`${x}-progress--${i}`],style:o,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Ce,{clsPrefix:x,status:i,showIndicator:p,indicatorTextColor:u,railColor:r,fillColor:a,railStyle:n,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:v,strokeWidth:f,gapDegree:$===void 0?e==="dashboard"?75:0:$,gapOffsetDegree:W,unit:c},z):e==="line"?t($e,{clsPrefix:x,status:i,showIndicator:p,indicatorTextColor:u,railColor:r,fillColor:a,railStyle:n,percentage:l,processing:S,indicatorPlacement:d,unit:c,fillBorderRadius:s,railBorderRadius:y,height:h},z):e==="multiple-circle"?t(Se,{clsPrefix:x,strokeWidth:f,railColor:r,fillColor:a,railStyle:n,viewBoxWidth:v,percentage:l,showIndicator:p,circleGap:k},z):null)}}),Be={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function Re(e,o){return V(),L("svg",Be,o[0]||(o[0]=[C("path",{fill:"currentColor",d:"M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"},null,-1)]))}const ze={name:"mdi-refresh",render:Re};function Ie(e){return(e.match(/.{1,2}/g)??[]).map(o=>Number.parseInt(o,16))}function Ne(e,o){return N.HmacSHA1(N.enc.Hex.parse(e),N.enc.Hex.parse(re(o))).toString(N.enc.Hex)}function re(e){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(e.toUpperCase().replace(/=+$/,"").split("").map(i=>o.indexOf(i).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(i=>Number.parseInt(i,2).toString(16).padStart(2,"0")).join("")}function Te({key:e,counter:o=0}){const u=Ne(o.toString(16).padStart(16,"0"),e),p=Ie(u),i=p[19]&15,r=(p[i]&127)<<24|(p[i+1]&255)<<16|(p[i+2]&255)<<8|p[i+3]&255;return String(r%1e6).padStart(6,"0")}function H({now:e,timeStep:o}){return Math.floor(e/1e3/o)}function G({key:e,now:o=Date.now(),timeStep:u=30}){const p=H({now:o,timeStep:u});return Te({key:e,counter:p})}function De({secret:e,app:o="IT-Tools",account:u="demo-user",algorithm:p="SHA1",digits:i=6,period:r=30}){const a=se({issuer:o,secret:e,algorithm:p,digits:i,period:r}).map((l,v)=>`${encodeURIComponent(v)}=${encodeURIComponent(l)}`).join("&");return`otpauth://totp/${encodeURIComponent(o)}:${encodeURIComponent(u)}?${a}`}function X(){return ye({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const Oe={flex:"","items-center":""},We=R({__name:"token-display",props:{tokens:{}},setup(e){const o=e,{copy:u,isJustCopied:p}=M({createToast:!1}),{copy:i,isJustCopied:r}=M({createToast:!1}),{copy:n,isJustCopied:a}=M({createToast:!1}),{tokens:l}=le(o);return(v,f)=>{const d=ee,c=te;return V(),L("div",null,[f[3]||(f[3]=C("div",{"mb-5px":"","w-full":"",flex:"","items-center":""},[C("div",{"flex-1":"","text-left":""}," Previous "),C("div",{"flex-1":"","text-center":""}," Current OTP "),C("div",{"flex-1":"","text-right":""}," Next ")],-1)),C("div",Oe,[b(c,{tooltip:g(p)?"Copied !":"Copy previous OTP",position:"bottom","flex-1":""},{default:w(()=>[b(d,{"data-test-id":"previous-otp","w-full":"","important:h-12":"","important:rounded-r-none":"","important:font-mono":"",onClick:f[0]||(f[0]=q(y=>g(u)(g(l).previous),["prevent"]))},{default:w(()=>[D(O(g(l).previous),1)]),_:1})]),_:1},8,["tooltip"]),b(c,{tooltip:g(r)?"Copied !":"Copy current OTP",position:"bottom","flex-1":"","flex-basis-5xl":""},{default:w(()=>[b(d,{"data-test-id":"current-otp","w-full":"","important:border-x":"1px solid gray op-40","important:h-12":"","important:rounded-0":"","important:text-22px":"",onClick:f[1]||(f[1]=q(y=>g(i)(g(l).current),["prevent"]))},{default:w(()=>[D(O(g(l).current),1)]),_:1})]),_:1},8,["tooltip"]),b(c,{tooltip:g(a)?"Copied !":"Copy next OTP",position:"bottom","flex-1":""},{default:w(()=>[b(d,{"data-test-id":"next-otp","w-full":"","important:h-12":"","important:rounded-l-none":"",onClick:f[2]||(f[2]=q(y=>g(n)(g(l).next),["prevent"]))},{default:w(()=>[D(O(g(l).next),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),je={style:{"max-width":"350px"}},Ae={style:{"text-align":"center"}},Me={"mt-4":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},qe={style:{"max-width":"350px"}},Ge=R({__name:"otp-code-generator-and-validator",setup(e){const o=ae(),u=_(()=>o.value/1e3%30),p=ce(),i=de(),r=ue(X());function n(){r.value=X()}const[a]=be(()=>({previous:G({key:r.value,now:o.value-3e4}),current:G({key:r.value,now:o.value}),next:G({key:r.value,now:o.value+3e4})}),{throttle:500}),l=_(()=>De({secret:r.value})),{qrcode:v}=me({text:l,color:{background:_(()=>i.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),f=[{message:"Secret should be a base32 string",validator:d=>d.toUpperCase().match(/^[A-Z234567]+$/)},{message:"Please set a secret",validator:d=>d!==""}];return(d,c)=>{const y=ze,s=ee,h=te,S=fe,k=Pe,x=ve;return V(),L(ge,null,[C("div",je,[b(S,{value:g(r),"onUpdate:value":c[0]||(c[0]=$=>pe(r)?r.value=$:null),label:"Secret",placeholder:"Paste your TOTP secret...","mb-5":"","validation-rules":f},{suffix:w(()=>[b(h,{tooltip:"Generate a new random secret"},{default:w(()=>[b(s,{circle:"",variant:"text",size:"small",onClick:n},{default:w(()=>[b(y)]),_:1})]),_:1})]),_:1},8,["value"]),C("div",null,[b(We,{tokens:g(a)},null,8,["tokens"]),b(k,{percentage:100*g(u)/30,color:g(p).primaryColor,"show-indicator":!1},null,8,["percentage","color"]),C("div",Ae," Next in "+O(String(Math.floor(30-g(u))).padStart(2,"0"))+"s ",1)]),C("div",Me,[b(x,{src:g(v)},null,8,["src"]),b(s,{href:g(l),target:"_blank"},{default:w(()=>c[1]||(c[1]=[D(" Open Key URI in new tab ")])),_:1},8,["href"])])]),C("div",qe,[b(T,{label:"Secret in hexadecimal",value:g(re)(g(r)),readonly:"",placeholder:"Secret in hex will be displayed here","mb-5":""},null,8,["value"]),b(T,{label:"Epoch",value:Math.floor(g(o)/1e3).toString(),readonly:"","mb-5":"",placeholder:"Epoch in sec will be displayed here"},null,8,["value"]),c[2]||(c[2]=C("p",null,"Iteration",-1)),b(T,{value:String(g(H)({now:g(o),timeStep:30})),readonly:"",label:"Count:","label-position":"left","label-width":"90px","label-align":"right",placeholder:"Iteration count will be displayed here"},null,8,["value"]),b(T,{value:g(H)({now:g(o),timeStep:30}).toString(16).padStart(16,"0"),readonly:"",placeholder:"Iteration count in hex will be displayed here","label-position":"left","label-width":"90px","label-align":"right",label:"Padded hex:"},null,8,["value"])])],64)}}});const Qe=he(Ge,[["__scopeId","data-v-388f1b9b"]]);export{Qe as default};
