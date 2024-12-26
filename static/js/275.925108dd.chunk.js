"use strict";(self.webpackChunkquizcode=self.webpackChunkquizcode||[]).push([[275],{68096:function(e,r,o){o.d(r,{Z:function(){return g}});var i=o(29439),t=o(63366),a=o(87462),n=o(72791),l=o(28182),s=o(94419),d=o(31402),u=o(66934),c=o(35470),m=o(14036),f=o(19103),p=o(93840),v=o(21217);function Z(e){return(0,v.Z)("MuiFormControl",e)}(0,o(75878).Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var h=o(80184),b=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],x=(0,u.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return(0,a.Z)({},r.root,r["margin".concat((0,m.Z)(o.margin))],o.fullWidth&&r.fullWidth)}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===r.margin&&{marginTop:16,marginBottom:8},"dense"===r.margin&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})})),g=n.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiFormControl"}),u=o.children,v=o.className,g=o.color,w=void 0===g?"primary":g,F=o.component,S=void 0===F?"div":F,k=o.disabled,z=void 0!==k&&k,q=o.error,R=void 0!==q&&q,C=o.focused,y=o.fullWidth,M=void 0!==y&&y,W=o.hiddenLabel,P=void 0!==W&&W,L=o.margin,N=void 0===L?"none":L,T=o.required,I=void 0!==T&&T,j=o.size,A=void 0===j?"medium":j,B=o.variant,E=void 0===B?"outlined":B,H=(0,t.Z)(o,b),O=(0,a.Z)({},o,{color:w,component:S,disabled:z,error:R,fullWidth:M,hiddenLabel:P,margin:N,required:I,size:A,variant:E}),V=function(e){var r=e.classes,o=e.margin,i=e.fullWidth,t={root:["root","none"!==o&&"margin".concat((0,m.Z)(o)),i&&"fullWidth"]};return(0,s.Z)(t,Z,r)}(O),D=n.useState((function(){var e=!1;return u&&n.Children.forEach(u,(function(r){if((0,f.Z)(r,["Input","Select"])){var o=(0,f.Z)(r,["Select"])?r.props.input:r;o&&(0,c.B7)(o.props)&&(e=!0)}})),e})),G=(0,i.Z)(D,2),J=G[0],K=G[1],Q=n.useState((function(){var e=!1;return u&&n.Children.forEach(u,(function(r){(0,f.Z)(r,["Input","Select"])&&(0,c.vd)(r.props,!0)&&(e=!0)})),e})),U=(0,i.Z)(Q,2),X=U[0],Y=U[1],$=n.useState(!1),_=(0,i.Z)($,2),ee=_[0],re=_[1];z&&ee&&re(!1);var oe=void 0===C||z?ee:C,ie=n.useCallback((function(){Y(!0)}),[]),te={adornedStart:J,setAdornedStart:K,color:w,disabled:z,error:R,filled:X,focused:oe,fullWidth:M,hiddenLabel:P,size:A,onBlur:function(){re(!1)},onEmpty:n.useCallback((function(){Y(!1)}),[]),onFilled:ie,onFocus:function(){re(!0)},registerEffect:undefined,required:I,variant:E};return(0,h.jsx)(p.Z.Provider,{value:te,children:(0,h.jsx)(x,(0,a.Z)({as:S,ownerState:O,className:(0,l.Z)(V.root,v),ref:r},H,{children:u}))})}))},47071:function(e,r,o){o.d(r,{Z:function(){return w}});var i=o(4942),t=o(63366),a=o(87462),n=o(72791),l=o(28182),s=o(94419),d=o(76147),u=o(52930),c=o(66934),m=o(14036),f=o(21217);function p(e){return(0,f.Z)("MuiFormHelperText",e)}var v,Z=(0,o(75878).Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),h=o(31402),b=o(80184),x=["children","className","component","disabled","error","filled","focused","margin","required","variant"],g=(0,c.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.size&&r["size".concat((0,m.Z)(o.size))],o.contained&&r.contained,o.filled&&r.filled]}})((function(e){var r,o=e.theme,t=e.ownerState;return(0,a.Z)({color:(o.vars||o).palette.text.secondary},o.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,i.Z)(r,"&.".concat(Z.disabled),{color:(o.vars||o).palette.text.disabled}),(0,i.Z)(r,"&.".concat(Z.error),{color:(o.vars||o).palette.error.main}),r),"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})})),w=n.forwardRef((function(e,r){var o=(0,h.Z)({props:e,name:"MuiFormHelperText"}),i=o.children,n=o.className,c=o.component,f=void 0===c?"p":c,Z=(0,t.Z)(o,x),w=(0,u.Z)(),F=(0,d.Z)({props:o,muiFormControl:w,states:["variant","size","disabled","error","filled","focused","required"]}),S=(0,a.Z)({},o,{component:f,contained:"filled"===F.variant||"outlined"===F.variant,variant:F.variant,size:F.size,disabled:F.disabled,error:F.error,filled:F.filled,focused:F.focused,required:F.required}),k=function(e){var r=e.classes,o=e.contained,i=e.size,t=e.disabled,a=e.error,n=e.filled,l=e.focused,d=e.required,u={root:["root",t&&"disabled",a&&"error",i&&"size".concat((0,m.Z)(i)),o&&"contained",l&&"focused",n&&"filled",d&&"required"]};return(0,s.Z)(u,p,r)}(S);return(0,b.jsx)(g,(0,a.Z)({as:f,ownerState:S,className:(0,l.Z)(k.root,n),ref:r},Z,{children:" "===i?v||(v=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):i}))}))},97275:function(e,r,o){o.d(r,{Z:function(){return A}});var i=o(87462),t=o(63366),a=o(72791),n=o(28182),l=o(94419),s=o(96248),d=o(66934),u=o(31402),c=o(37078),m=o(14527),f=o(28029),p=o(4942),v=o(76147),Z=o(52930),h=o(14036),b=o(21217),x=o(75878);function g(e){return(0,b.Z)("MuiFormLabel",e)}var w=(0,x.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),F=o(80184),S=["children","className","color","component","disabled","error","filled","focused","required"],k=(0,d.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return(0,i.Z)({},r.root,"secondary"===o.color&&r.colorSecondary,o.filled&&r.filled)}})((function(e){var r,o=e.theme,t=e.ownerState;return(0,i.Z)({color:(o.vars||o).palette.text.secondary},o.typography.body1,(r={lineHeight:"1.4375em",padding:0,position:"relative"},(0,p.Z)(r,"&.".concat(w.focused),{color:(o.vars||o).palette[t.color].main}),(0,p.Z)(r,"&.".concat(w.disabled),{color:(o.vars||o).palette.text.disabled}),(0,p.Z)(r,"&.".concat(w.error),{color:(o.vars||o).palette.error.main}),r))})),z=(0,d.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,p.Z)({},"&.".concat(w.error),{color:(r.vars||r).palette.error.main})})),q=a.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiFormLabel"}),a=o.children,s=o.className,d=o.component,c=void 0===d?"label":d,m=(0,t.Z)(o,S),f=(0,Z.Z)(),p=(0,v.Z)({props:o,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),b=(0,i.Z)({},o,{color:p.color||"primary",component:c,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),x=function(e){var r=e.classes,o=e.color,i=e.focused,t=e.disabled,a=e.error,n=e.filled,s=e.required,d={root:["root","color".concat((0,h.Z)(o)),t&&"disabled",a&&"error",n&&"filled",i&&"focused",s&&"required"],asterisk:["asterisk",a&&"error"]};return(0,l.Z)(d,g,r)}(b);return(0,F.jsxs)(k,(0,i.Z)({as:c,ownerState:b,className:(0,n.Z)(x.root,s),ref:r},m,{children:[a,p.required&&(0,F.jsxs)(z,{ownerState:b,"aria-hidden":!0,className:x.asterisk,children:["\u2009","*"]})]}))}));function R(e){return(0,b.Z)("MuiInputLabel",e)}(0,x.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var C=["disableAnimation","margin","shrink","variant"],y=(0,d.ZP)(q,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[(0,p.Z)({},"& .".concat(w.asterisk),r.asterisk),r.root,o.formControl&&r.formControl,"small"===o.size&&r.sizeSmall,o.shrink&&r.shrink,!o.disableAnimation&&r.animated,r[o.variant]]}})((function(e){var r=e.theme,o=e.ownerState;return(0,i.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===o.size&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:r.transitions.create(["color","transform","max-width"],{duration:r.transitions.duration.shorter,easing:r.transitions.easing.easeOut})},"filled"===o.variant&&(0,i.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===o.size&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&(0,i.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===o.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===o.variant&&(0,i.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===o.size&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))})),M=a.forwardRef((function(e,r){var o=(0,u.Z)({name:"MuiInputLabel",props:e}),a=o.disableAnimation,n=void 0!==a&&a,s=o.shrink,d=(0,t.Z)(o,C),c=(0,Z.Z)(),m=s;"undefined"===typeof m&&c&&(m=c.filled||c.focused||c.adornedStart);var f=(0,v.Z)({props:o,muiFormControl:c,states:["size","variant","required"]}),p=(0,i.Z)({},o,{disableAnimation:n,formControl:c,shrink:m,size:f.size,variant:f.variant,required:f.required}),h=function(e){var r=e.classes,o=e.formControl,t=e.size,a=e.shrink,n={root:["root",o&&"formControl",!e.disableAnimation&&"animated",a&&"shrink","small"===t&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},s=(0,l.Z)(n,R,r);return(0,i.Z)({},r,s)}(p);return(0,F.jsx)(y,(0,i.Z)({"data-shrink":m,ownerState:p,ref:r},d,{classes:h}))})),W=o(68096),P=o(47071),L=o(65594);function N(e){return(0,b.Z)("MuiTextField",e)}(0,x.Z)("MuiTextField",["root"]);var T=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],I={standard:c.Z,filled:m.Z,outlined:f.Z},j=(0,d.ZP)(W.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),A=a.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiTextField"}),a=o.autoComplete,d=o.autoFocus,c=void 0!==d&&d,m=o.children,f=o.className,p=o.color,v=void 0===p?"primary":p,Z=o.defaultValue,h=o.disabled,b=void 0!==h&&h,x=o.error,g=void 0!==x&&x,w=o.FormHelperTextProps,S=o.fullWidth,k=void 0!==S&&S,z=o.helperText,q=o.id,R=o.InputLabelProps,C=o.inputProps,y=o.InputProps,W=o.inputRef,A=o.label,B=o.maxRows,E=o.minRows,H=o.multiline,O=void 0!==H&&H,V=o.name,D=o.onBlur,G=o.onChange,J=o.onFocus,K=o.placeholder,Q=o.required,U=void 0!==Q&&Q,X=o.rows,Y=o.select,$=void 0!==Y&&Y,_=o.SelectProps,ee=o.type,re=o.value,oe=o.variant,ie=void 0===oe?"outlined":oe,te=(0,t.Z)(o,T),ae=(0,i.Z)({},o,{autoFocus:c,color:v,disabled:b,error:g,fullWidth:k,multiline:O,required:U,select:$,variant:ie}),ne=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},N,r)}(ae);var le={};"outlined"===ie&&(R&&"undefined"!==typeof R.shrink&&(le.notched=R.shrink),le.label=A),$&&(_&&_.native||(le.id=void 0),le["aria-describedby"]=void 0);var se=(0,s.Z)(q),de=z&&se?"".concat(se,"-helper-text"):void 0,ue=A&&se?"".concat(se,"-label"):void 0,ce=I[ie],me=(0,F.jsx)(ce,(0,i.Z)({"aria-describedby":de,autoComplete:a,autoFocus:c,defaultValue:Z,fullWidth:k,multiline:O,name:V,rows:X,maxRows:B,minRows:E,type:ee,value:re,id:se,inputRef:W,onBlur:D,onChange:G,onFocus:J,placeholder:K,inputProps:C},le,y));return(0,F.jsxs)(j,(0,i.Z)({className:(0,n.Z)(ne.root,f),disabled:b,error:g,fullWidth:k,ref:r,required:U,color:v,variant:ie,ownerState:ae},te,{children:[null!=A&&""!==A&&(0,F.jsx)(M,(0,i.Z)({htmlFor:se,id:ue},R,{children:A})),$?(0,F.jsx)(L.Z,(0,i.Z)({"aria-describedby":de,id:se,labelId:ue,value:re,input:me},_,{children:m})):me,z&&(0,F.jsx)(P.Z,(0,i.Z)({id:de},w,{children:z}))]}))}))}}]);
//# sourceMappingURL=275.925108dd.chunk.js.map