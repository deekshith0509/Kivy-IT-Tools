import{D as b,aL as Se,E,d as ee,b7 as Be,au as Pe,n as B,am as Te,b5 as ke,P as p,bb as oe,ap as Re,H as g,aD as l,aF as X,aE as He,J as re,as as Ie,aq as Ee,a as R,I as _e,a$ as De,Y as Fe,L as r,aC as H,M as Oe,aI as U,bc as je,aH as Ne,aJ as Ke,Q as Me,aK as Ge}from"./index-bdafdd1b.js";import{i as _}from"./is-browser-fc34c9a6.js";import{u as Ve}from"./use-form-item-a52b9253.js";import{c as Z}from"./color-to-class-8578b472.js";const{cubicBezierEaseInOut:C}=Se;function We({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}const qe=E("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Qe=ee({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Be("-base-wave",qe,Pe(e,"clsPrefix"));const f=B(null),h=B(!1);let u=null;return Te(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),ke(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Le=_&&"chrome"in window;_&&navigator.userAgent.includes("Firefox");const Ae=_&&navigator.userAgent.includes("Safari")&&!Le;function z(e){return oe(e,[255,255,255,.16])}function I(e){return oe(e,[0,0,0,.12])}const Ye=Re("n-button-group"),Je=b([E("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("color",[l("border",{borderColor:"var(--n-border-color)"}),g("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),X("disabled",[b("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),g("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),g("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),X("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),g("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),g("loading","cursor: wait;"),E("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[g("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),_&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[E("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[He({top:"50%",originalTransform:"translateY(-50%)"})]),We()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),g("block",`
 display: flex;
 width: 100%;
 `),g("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),g("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Xe=Object.assign(Object.assign({},re.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Ae}}),te=ee({name:"Button",props:Xe,slots:Object,setup(e){const f=B(null),h=B(null),u=B(!1),v=Ie(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),ne=Ee(Ye,{}),{mergedSizeRef:D}=Ve({},{defaultSize:"medium",mergedSize:t=>{const{size:d}=e;if(d)return d;const{size:x}=ne;if(x)return x;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),F=R(()=>e.focusable&&!e.disabled),ie=t=>{var d;F.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&F.value&&((d=f.value)===null||d===void 0||d.focus({preventScroll:!0})))},ae=t=>{var d;if(!e.disabled&&!e.loading){const{onClick:x}=e;x&&Ge(x,t),e.text||(d=h.value)===null||d===void 0||d.play()}},se=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;u.value=!1}},le=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},de=()=>{u.value=!1},{inlineThemeDisabled:Q,mergedClsPrefixRef:O,mergedRtlRef:ce}=_e(e),ue=re("Button","-button",Je,De,e,O),be=Fe("Button",ce,O),L=R(()=>{const t=ue.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:x},self:o}=t,{rippleDuration:j,opacityDisabled:P,fontWeight:N,fontWeightStrong:K}=o,m=D.value,{dashed:M,type:w,ghost:G,text:y,color:i,round:A,circle:V,textColor:$,secondary:fe,tertiary:Y,quaternary:he,strong:ve}=e,pe={"--n-font-weight":ve?K:N};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const T=w==="tertiary",J=w==="default",n=T?"default":w;if(y){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":s||o[r("textColorText",n)],"--n-text-color-hover":s?z(s):o[r("textColorTextHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorTextPressed",n)],"--n-text-color-focus":s?z(s):o[r("textColorTextHover",n)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",n)]}}else if(G||M){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":s||o[r("textColorGhost",n)],"--n-text-color-hover":s?z(s):o[r("textColorGhostHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorGhostPressed",n)],"--n-text-color-focus":s?z(s):o[r("textColorGhostHover",n)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",n)]}}else if(fe){const s=J?o.textColor:T?o.textColorTertiary:o[r("color",n)],c=i||s,k=w!=="default"&&w!=="tertiary";a={"--n-color":k?H(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?H(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(Y||he){const s=J?o.textColor:T?o.textColorTertiary:o[r("color",n)],c=i||s;Y?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=c,a["--n-text-color-hover"]=c,a["--n-text-color-pressed"]=c,a["--n-text-color-focus"]=c,a["--n-text-color-disabled"]=c}else a={"--n-color":i||o[r("color",n)],"--n-color-hover":i?z(i):o[r("colorHover",n)],"--n-color-pressed":i?I(i):o[r("colorPressed",n)],"--n-color-focus":i?z(i):o[r("colorFocus",n)],"--n-color-disabled":i||o[r("colorDisabled",n)],"--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":$||(i?o.textColorPrimary:T?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":$||(i?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":$||(i?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":$||(i?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":$||(i?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let W={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};y?W={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:W={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",m)]:q,[r("fontSize",m)]:me,[r("padding",m)]:ge,[r("paddingRound",m)]:xe,[r("iconSize",m)]:ye,[r("borderRadius",m)]:Ce,[r("iconMargin",m)]:we,waveOpacity:$e}=o,ze={"--n-width":V&&!y?q:"initial","--n-height":y?"initial":q,"--n-font-size":me,"--n-padding":V||y?"initial":A?xe:ge,"--n-icon-size":ye,"--n-icon-margin":we,"--n-border-radius":y?"initial":V||A?q:Ce};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":x,"--n-ripple-duration":j,"--n-opacity-disabled":P,"--n-wave-opacity":$e},pe),a),W),ze)}),S=Q?Oe("button",R(()=>{let t="";const{dashed:d,type:x,ghost:o,text:j,color:P,round:N,circle:K,textColor:m,secondary:M,tertiary:w,quaternary:G,strong:y}=e;d&&(t+="a"),o&&(t+="b"),j&&(t+="c"),N&&(t+="d"),K&&(t+="e"),M&&(t+="f"),w&&(t+="g"),G&&(t+="h"),y&&(t+="i"),P&&(t+=`j${Z(P)}`),m&&(t+=`k${Z(m)}`);const{value:i}=D;return t+=`l${i[0]}`,t+=`m${x[0]}`,t}),L,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:O,mergedFocusable:F,mergedSize:D,showBorder:v,enterPressed:u,rtlEnabled:be,handleMousedown:ie,handleKeydown:le,handleBlur:de,handleKeyup:se,handleClick:ae,customColorCssVars:R(()=>{const{color:t}=e;if(!t)return null;const d=z(t);return{"--n-border-color":t,"--n-border-color-hover":d,"--n-border-color-pressed":I(t),"--n-border-color-focus":d,"--n-border-color-disabled":t}}),cssVars:Q?void 0:L,themeClass:S?.themeClass,onRender:S?.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h?.();const u=U(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(je,{width:!0},{default:()=>U(this.$slots.icon,v=>(this.loading||this.renderIcon||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Ne(this.$slots.default)?"0":""}},p(Ke,null,{default:()=>this.loading?p(Me,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Qe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),ro=te,to=te;export{to as X,ro as _,Ye as b,Ae as i};
