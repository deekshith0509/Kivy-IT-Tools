import{ap as ce,P as l,D as d,E as n,H as b,aD as t,aE as ae,bh as le,bi as de,d as ie,n as _,I as te,au as se,aG as be,as as he,J as K,Y as ue,a as B,L as I,M as ke,aO as fe,aI as ve,aJ as xe,b2 as me,aq as ge,bj as pe,aK as $}from"./index-bdafdd1b.js";import{u as Ce}from"./use-form-item-a52b9253.js";const we=ce("n-checkbox-group"),ye=()=>l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=()=>l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Re=d([n("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[b("show-label","line-height: var(--n-label-line-height);"),d("&:hover",[n("checkbox-box",[t("border","border: var(--n-border-checked);")])]),d("&:focus:not(:active)",[n("checkbox-box",[t("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),b("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[d(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),b("indeterminate",[n("checkbox-box",[n("checkbox-icon",[d(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),d(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),b("checked, indeterminate",[d("&:focus:not(:active)",[n("checkbox-box",[t("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[t("border",{border:"var(--n-border-checked)"})])]),b("disabled",{cursor:"not-allowed"},[b("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[t("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[d(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[t("border",`
 border: var(--n-border-disabled);
 `),n("checkbox-icon",[d(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),t("label",`
 color: var(--n-text-color-disabled);
 `)]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[t("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[d(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ae({left:"1px",top:"1px"})])]),t("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[d("&:empty",{display:"none"})])]),le(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),de(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Se=Object.assign(Object.assign({},K.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),$e=ie({name:"Checkbox",props:Se,setup(o){const a=ge(we,null),h=_(null),{mergedClsPrefixRef:u,inlineThemeDisabled:m,mergedRtlRef:D}=te(o),w=_(o.defaultChecked),y=se(o,"checked"),z=be(y,w),r=he(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return z.value===o.checkedValue}),g=Ce(o,{mergedSize(e){const{size:i}=o;if(i!==void 0)return i;if(a){const{value:c}=a.mergedSizeRef;if(c!==void 0)return c}if(e){const{mergedSize:c}=e;if(c!==void 0)return c.value}return"medium"},mergedDisabled(e){const{disabled:i}=o;if(i!==void 0)return i;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:c},checkedCountRef:s}=a;if(c!==void 0&&s.value>=c&&!r.value)return!0;const{minRef:{value:v}}=a;if(v!==void 0&&s.value<=v&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:R}=g,S=K("Checkbox","-checkbox",Re,pe,o,u);function C(e){if(a&&o.value!==void 0)a.toggleCheckbox(!r.value,o.value);else{const{onChange:i,"onUpdate:checked":c,onUpdateChecked:s}=o,{nTriggerFormInput:v,nTriggerFormChange:M}=g,x=r.value?o.uncheckedValue:o.checkedValue;c&&$(c,x,e),s&&$(s,x,e),i&&$(i,x,e),v(),M(),w.value=x}}function k(e){p.value||C(e)}function V(e){if(!p.value)switch(e.key){case" ":case"Enter":C(e)}}function j(e){switch(e.key){case" ":e.preventDefault()}}const E={focus:()=>{var e;(e=h.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=h.value)===null||e===void 0||e.blur()}},P=ue("Checkbox",D,u),T=B(()=>{const{value:e}=R,{common:{cubicBezierEaseInOut:i},self:{borderRadius:c,color:s,colorChecked:v,colorDisabled:M,colorTableHeader:x,colorTableHeaderModal:F,colorTableHeaderPopover:H,checkMarkColor:U,checkMarkColorDisabled:N,border:L,borderFocus:O,borderDisabled:A,borderChecked:G,boxShadowFocus:J,textColor:W,textColorDisabled:Y,checkMarkColorDisabledChecked:q,colorDisabledChecked:Q,borderDisabledChecked:X,labelPadding:Z,labelLineHeight:ee,labelFontWeight:oe,[I("fontSize",e)]:re,[I("size",e)]:ne}}=S.value;return{"--n-label-line-height":ee,"--n-label-font-weight":oe,"--n-size":ne,"--n-bezier":i,"--n-border-radius":c,"--n-border":L,"--n-border-checked":G,"--n-border-focus":O,"--n-border-disabled":A,"--n-border-disabled-checked":X,"--n-box-shadow-focus":J,"--n-color":s,"--n-color-checked":v,"--n-color-table":x,"--n-color-table-modal":F,"--n-color-table-popover":H,"--n-color-disabled":M,"--n-color-disabled-checked":Q,"--n-text-color":W,"--n-text-color-disabled":Y,"--n-check-mark-color":U,"--n-check-mark-color-disabled":N,"--n-check-mark-color-disabled-checked":q,"--n-font-size":re,"--n-label-padding":Z}}),f=m?ke("checkbox",B(()=>R.value[0]),T,o):void 0;return Object.assign(g,E,{rtlEnabled:P,selfRef:h,mergedClsPrefix:u,mergedDisabled:p,renderedChecked:r,mergedTheme:S,labelId:fe(),handleClick:k,handleKeyUp:V,handleKeyDown:j,cssVars:m?void 0:T,themeClass:f?.themeClass,onRender:f?.onRender})},render(){var o;const{$slots:a,renderedChecked:h,mergedDisabled:u,indeterminate:m,privateInsideTable:D,cssVars:w,labelId:y,label:z,mergedClsPrefix:r,focusable:g,handleKeyUp:p,handleKeyDown:R,handleClick:S}=this;(o=this.onRender)===null||o===void 0||o.call(this);const C=ve(a.default,k=>z||k?l("span",{class:`${r}-checkbox__label`,id:y},z||k):null);return l("div",{ref:"selfRef",class:[`${r}-checkbox`,this.themeClass,this.rtlEnabled&&`${r}-checkbox--rtl`,h&&`${r}-checkbox--checked`,u&&`${r}-checkbox--disabled`,m&&`${r}-checkbox--indeterminate`,D&&`${r}-checkbox--inside-table`,C&&`${r}-checkbox--show-label`],tabindex:u||!g?void 0:0,role:"checkbox","aria-checked":m?"mixed":h,"aria-labelledby":y,style:w,onKeyup:p,onKeydown:R,onClick:S,onMousedown:()=>{me("selectstart",window,k=>{k.preventDefault()},{once:!0})}},l("div",{class:`${r}-checkbox-box-wrapper`}," ",l("div",{class:`${r}-checkbox-box`},l(xe,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${r}-checkbox-icon`},ze()):l("div",{key:"check",class:`${r}-checkbox-icon`},ye())}),l("div",{class:`${r}-checkbox-box__border`}))),C)}});export{$e as _};
