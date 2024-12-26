"use strict";(self.webpackChunkquizcode=self.webpackChunkquizcode||[]).push([[29],{93840:function(e,t,n){var o=n(72791).createContext();t.Z=o},76147:function(e,t,n){function o(e){var t=e.props,n=e.states,o=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e}),{})}n.d(t,{Z:function(){return o}})},52930:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(72791),r=n(93840);function i(){return o.useContext(r.Z)}},4834:function(e,t,n){n.d(t,{rA:function(){return j},Ej:function(){return N},ZP:function(){return P},_o:function(){return M},Gx:function(){return L}});var o=n(29439),r=n(4942),i=n(63366),a=n(87462),l=n(46189),u=n(72791),d=n(28182),s=n(47563),c=n(27979),p=n(93981),f=n(75721),m=n(80184),h=["onChange","maxRows","minRows","style","value"];function v(e,t){return parseInt(e[t],10)||0}var b={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},Z=u.forwardRef((function(e,t){var n=e.onChange,r=e.maxRows,l=e.minRows,d=void 0===l?1:l,Z=e.style,g=e.value,y=(0,i.Z)(e,h),x=u.useRef(null!=g).current,w=u.useRef(null),S=(0,s.Z)(t,w),C=u.useRef(null),R=u.useRef(0),A=u.useState({}),z=(0,o.Z)(A,2),k=z[0],O=z[1],W=u.useCallback((function(){var t=w.current,n=(0,c.Z)(t).getComputedStyle(t);if("0px"!==n.width){var o=C.current;o.style.width=n.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var i=n["box-sizing"],a=v(n,"padding-bottom")+v(n,"padding-top"),l=v(n,"border-bottom-width")+v(n,"border-top-width"),u=o.scrollHeight;o.value="x";var s=o.scrollHeight,p=u;d&&(p=Math.max(Number(d)*s,p)),r&&(p=Math.min(Number(r)*s,p));var f=(p=Math.max(p,s))+("border-box"===i?a+l:0),m=Math.abs(p-u)<=1;O((function(e){return R.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==m)?(R.current+=1,{overflow:m,outerHeightStyle:f}):e}))}}),[r,d,e.placeholder]);u.useEffect((function(){var e,t=(0,p.Z)((function(){R.current=0,W()})),n=(0,c.Z)(w.current);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(w.current),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}}),[W]),(0,f.Z)((function(){W()})),u.useEffect((function(){R.current=0}),[g]);return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsx)("textarea",(0,a.Z)({value:g,onChange:function(e){R.current=0,x||W(),n&&n(e)},ref:S,rows:d,style:(0,a.Z)({height:k.outerHeightStyle,overflow:k.overflow?"hidden":null},Z)},y)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,a.Z)({},b,Z,{padding:0})})]})})),g=n(94419),y=n(20627),x=n(76147),w=n(93840),S=n(52930),C=n(66934),R=n(31402),A=n(14036),z=n(42071),k=n(40162),O=n(25502),W=n(35470),F=n(55891),I=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],L=function(e,t){var n=e.ownerState;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat((0,A.Z)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},M=function(e,t){var n=e.ownerState;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},N=(0,C.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:L})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},t.typography.body1,(0,r.Z)({color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(F.Z.disabled),{color:(t.vars||t).palette.text.disabled,cursor:"default"}),n.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),j=(0,C.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:M})((function(e){var t,n=e.theme,o=e.ownerState,i="light"===n.palette.mode,l=(0,a.Z)({color:"currentColor"},n.vars?{opacity:n.vars.opacity.placeholder}:{opacity:i?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),u={opacity:"0 !important"},d=n.vars?{opacity:n.vars.opacity.placeholder}:{opacity:i?.42:.5};return(0,a.Z)((t={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,r.Z)(t,"label[data-shrink=false] + .".concat(F.Z.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d}),(0,r.Z)(t,"&.".concat(F.Z.disabled),{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled}),(0,r.Z)(t,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),t),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),E=(0,m.jsx)(O.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),B=u.forwardRef((function(e,t){var n=(0,R.Z)({props:e,name:"MuiInputBase"}),r=n["aria-describedby"],s=n.autoComplete,c=n.autoFocus,p=n.className,f=n.components,h=void 0===f?{}:f,v=n.componentsProps,b=void 0===v?{}:v,C=n.defaultValue,O=n.disabled,L=n.disableInjectingGlobalStyles,M=n.endAdornment,B=n.fullWidth,P=void 0!==B&&B,H=n.id,T=n.inputComponent,q=void 0===T?"input":T,K=n.inputProps,D=void 0===K?{}:K,V=n.inputRef,G=n.maxRows,U=n.minRows,_=n.multiline,J=void 0!==_&&_,Q=n.name,X=n.onBlur,Y=n.onChange,$=n.onClick,ee=n.onFocus,te=n.onKeyDown,ne=n.onKeyUp,oe=n.placeholder,re=n.readOnly,ie=n.renderSuffix,ae=n.rows,le=n.startAdornment,ue=n.type,de=void 0===ue?"text":ue,se=n.value,ce=(0,i.Z)(n,I),pe=null!=D.value?D.value:se,fe=u.useRef(null!=pe).current,me=u.useRef(),he=u.useCallback((function(e){0}),[]),ve=(0,z.Z)(D.ref,he),be=(0,z.Z)(V,ve),Ze=(0,z.Z)(me,be),ge=u.useState(!1),ye=(0,o.Z)(ge,2),xe=ye[0],we=ye[1],Se=(0,S.Z)();var Ce=(0,x.Z)({props:n,muiFormControl:Se,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ce.focused=Se?Se.focused:xe,u.useEffect((function(){!Se&&O&&xe&&(we(!1),X&&X())}),[Se,O,xe,X]);var Re=Se&&Se.onFilled,Ae=Se&&Se.onEmpty,ze=u.useCallback((function(e){(0,W.vd)(e)?Re&&Re():Ae&&Ae()}),[Re,Ae]);(0,k.Z)((function(){fe&&ze({value:pe})}),[pe,ze,fe]);u.useEffect((function(){ze(me.current)}),[]);var ke=q,Oe=D;J&&"input"===ke&&(Oe=ae?(0,a.Z)({type:void 0,minRows:ae,maxRows:ae},Oe):(0,a.Z)({type:void 0,maxRows:G,minRows:U},Oe),ke=Z);u.useEffect((function(){Se&&Se.setAdornedStart(Boolean(le))}),[Se,le]);var We=(0,a.Z)({},n,{color:Ce.color||"primary",disabled:Ce.disabled,endAdornment:M,error:Ce.error,focused:Ce.focused,formControl:Se,fullWidth:P,hiddenLabel:Ce.hiddenLabel,multiline:J,size:Ce.size,startAdornment:le,type:de}),Fe=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,u=e.fullWidth,d=e.hiddenLabel,s=e.multiline,c=e.size,p=e.startAdornment,f=e.type,m={root:["root","color".concat((0,A.Z)(n)),o&&"disabled",r&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===c&&"sizeSmall",s&&"multiline",p&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel"],input:["input",o&&"disabled","search"===f&&"inputTypeSearch",s&&"inputMultiline","small"===c&&"inputSizeSmall",d&&"inputHiddenLabel",p&&"inputAdornedStart",i&&"inputAdornedEnd"]};return(0,g.Z)(m,F.u,t)}(We),Ie=h.Root||N,Le=b.root||{},Me=h.Input||j;return Oe=(0,a.Z)({},Oe,b.input),(0,m.jsxs)(u.Fragment,{children:[!L&&E,(0,m.jsxs)(Ie,(0,a.Z)({},Le,!(0,y.Z)(Ie)&&{ownerState:(0,a.Z)({},We,Le.ownerState)},{ref:t,onClick:function(e){me.current&&e.currentTarget===e.target&&me.current.focus(),$&&$(e)}},ce,{className:(0,d.Z)(Fe.root,Le.className,p),children:[le,(0,m.jsx)(w.Z.Provider,{value:null,children:(0,m.jsx)(Me,(0,a.Z)({ownerState:We,"aria-invalid":Ce.error,"aria-describedby":r,autoComplete:s,autoFocus:c,defaultValue:C,disabled:Ce.disabled,id:H,onAnimationStart:function(e){ze("mui-auto-fill-cancel"===e.animationName?me.current:{value:"x"})},name:Q,placeholder:oe,readOnly:re,required:Ce.required,rows:ae,value:pe,onKeyDown:te,onKeyUp:ne,type:de},Oe,!(0,y.Z)(Me)&&{as:ke,ownerState:(0,a.Z)({},We,Oe.ownerState)},{ref:Ze,className:(0,d.Z)(Fe.input,Oe.className),onBlur:function(e){X&&X(e),D.onBlur&&D.onBlur(e),Se&&Se.onBlur?Se.onBlur(e):we(!1)},onChange:function(e){if(!fe){var t=e.target||me.current;if(null==t)throw new Error((0,l.Z)(1));ze({value:t.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];D.onChange&&D.onChange.apply(D,[e].concat(o)),Y&&Y.apply(void 0,[e].concat(o))},onFocus:function(e){Ce.disabled?e.stopPropagation():(ee&&ee(e),D.onFocus&&D.onFocus(e),Se&&Se.onFocus?Se.onFocus(e):we(!0))}}))}),M,ie?ie((0,a.Z)({},Ce,{startAdornment:le})):null]}))]})})),P=B},55891:function(e,t,n){n.d(t,{u:function(){return r}});var o=n(21217);function r(e){return(0,o.Z)("MuiInputBase",e)}var i=(0,n(75878).Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=i},35470:function(e,t,n){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||t&&o(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}n.d(t,{B7:function(){return i},vd:function(){return r}})},28029:function(e,t,n){n.d(t,{Z:function(){return k}});var o,r=n(4942),i=n(63366),a=n(87462),l=n(72791),u=n(94419),d=n(66934),s=n(80184),c=["children","classes","className","label","notched"],p=(0,d.ZP)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),f=(0,d.ZP)("legend")((function(e){var t=e.ownerState,n=e.theme;return(0,a.Z)({float:"unset",overflow:"hidden"},!t.withLabel&&{padding:0,lineHeight:"11px",transition:n.transitions.create("width",{duration:150,easing:n.transitions.easing.easeOut})},t.withLabel&&(0,a.Z)({display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:n.transitions.create("max-width",{duration:50,easing:n.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},t.notched&&{maxWidth:"100%",transition:n.transitions.create("max-width",{duration:100,easing:n.transitions.easing.easeOut,delay:50})}))}));var m=n(52930),h=n(76147),v=n(21217),b=n(75878),Z=n(55891);function g(e){return(0,v.Z)("MuiOutlinedInput",e)}var y=(0,a.Z)({},Z.Z,(0,b.Z)("MuiOutlinedInput",["root","notchedOutline","input"])),x=n(4834),w=n(31402),S=["components","fullWidth","inputComponent","label","multiline","notched","type"],C=(0,d.ZP)(x.Ej,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiOutlinedInput",slot:"Root",overridesResolver:x.Gx})((function(e){var t,n=e.theme,o=e.ownerState,i="light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,a.Z)((t={position:"relative",borderRadius:n.shape.borderRadius},(0,r.Z)(t,"&:hover .".concat(y.notchedOutline),{borderColor:n.palette.text.primary}),(0,r.Z)(t,"@media (hover: none)",(0,r.Z)({},"&:hover .".concat(y.notchedOutline),{borderColor:i})),(0,r.Z)(t,"&.".concat(y.focused," .").concat(y.notchedOutline),{borderColor:n.palette[o.color].main,borderWidth:2}),(0,r.Z)(t,"&.".concat(y.error," .").concat(y.notchedOutline),{borderColor:n.palette.error.main}),(0,r.Z)(t,"&.".concat(y.disabled," .").concat(y.notchedOutline),{borderColor:n.palette.action.disabled}),t),o.startAdornment&&{paddingLeft:14},o.endAdornment&&{paddingRight:14},o.multiline&&(0,a.Z)({padding:"16.5px 14px"},"small"===o.size&&{padding:"8.5px 14px"}))})),R=(0,d.ZP)((function(e){var t=e.className,n=e.label,r=e.notched,l=(0,i.Z)(e,c),u=null!=n&&""!==n,d=(0,a.Z)({},e,{notched:r,withLabel:u});return(0,s.jsx)(p,(0,a.Z)({"aria-hidden":!0,className:t,ownerState:d},l,{children:(0,s.jsx)(f,{ownerState:d,children:u?(0,s.jsx)("span",{children:n}):o||(o=(0,s.jsx)("span",{className:"notranslate",children:"\u200b"}))})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:function(e,t){return t.notchedOutline}})((function(e){return{borderColor:"light"===e.theme.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}})),A=(0,d.ZP)(x.rA,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:x._o})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:"light"===t.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===t.palette.mode?null:"#fff",caretColor:"light"===t.palette.mode?null:"#fff",borderRadius:"inherit"}},"small"===n.size&&{padding:"8.5px 14px"},n.multiline&&{padding:0},n.startAdornment&&{paddingLeft:0},n.endAdornment&&{paddingRight:0})})),z=l.forwardRef((function(e,t){var n,o=(0,w.Z)({props:e,name:"MuiOutlinedInput"}),r=o.components,d=void 0===r?{}:r,c=o.fullWidth,p=void 0!==c&&c,f=o.inputComponent,v=void 0===f?"input":f,b=o.label,Z=o.multiline,y=void 0!==Z&&Z,z=o.notched,k=o.type,O=void 0===k?"text":k,W=(0,i.Z)(o,S),F=function(e){var t=e.classes,n=(0,u.Z)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},g,t);return(0,a.Z)({},t,n)}(o),I=(0,m.Z)(),L=(0,h.Z)({props:o,muiFormControl:I,states:["required"]});return(0,s.jsx)(x.ZP,(0,a.Z)({components:(0,a.Z)({Root:C,Input:A},d),renderSuffix:function(e){return(0,s.jsx)(R,{className:F.notchedOutline,label:null!=b&&""!==b&&L.required?n||(n=(0,s.jsxs)(l.Fragment,{children:[b,"\xa0","*"]})):b,notched:"undefined"!==typeof z?z:Boolean(e.startAdornment||e.filled||e.focused)})},fullWidth:p,inputComponent:v,multiline:y,ref:t,type:O},W,{classes:(0,a.Z)({},F,{notchedOutline:null})}))}));z.muiName="Input";var k=z}}]);
//# sourceMappingURL=29.0bea29c9.chunk.js.map