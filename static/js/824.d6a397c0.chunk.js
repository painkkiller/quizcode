"use strict";(self.webpackChunkquizcode=self.webpackChunkquizcode||[]).push([[824],{55824:function(n,t,i){i.r(t);var o=i(29439),a=i(72791),e=i(66934),r=i(61889),d=i(64554),s=i(20890),c=i(91614),l=i(36151),u=i(6907),g=i(34775),h=i(39709),x=i(80184),m=(0,e.ZP)(r.ZP)((function(n){var t=n.theme;return"\n    background: ".concat(t.colors.gradients.black1,";\n")})),v=(0,e.ZP)(d.Z)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),f=(0,e.ZP)(s.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.trueWhite[100],";\n")})),Z=(0,e.ZP)(s.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.trueWhite[70],";\n")}));t.default=function(){var n=(0,a.useState)(!1),t=(0,o.Z)(n,2),i=t[0],e=t[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.ql,{children:(0,x.jsx)("title",{children:"Status - 500"})}),(0,x.jsx)(v,{children:(0,x.jsxs)(r.ZP,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[(0,x.jsx)(r.ZP,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,x.jsx)(c.Z,{maxWidth:"sm",children:(0,x.jsxs)(d.Z,{textAlign:"center",children:[(0,x.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),(0,x.jsx)(s.Z,{variant:"h2",sx:{my:2},children:"There was an error, please try again later"}),(0,x.jsx)(s.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"The server encountered an internal error and was not able to complete your request"}),(0,x.jsx)(h.Z,{onClick:function(){e(!0)},loading:i,variant:"outlined",color:"primary",startIcon:(0,x.jsx)(g.Z,{}),children:"Refresh view"}),(0,x.jsx)(l.Z,{href:"/overview",variant:"contained",sx:{ml:1},children:"Go back"})]})})}),(0,x.jsx)(m,{sx:{display:{xs:"none",md:"flex"}},xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,x.jsx)(c.Z,{maxWidth:"sm",children:(0,x.jsxs)(d.Z,{textAlign:"center",children:[(0,x.jsx)(f,{variant:"h1",sx:{my:2},children:"Quizcode"}),(0,x.jsx)(Z,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0441\u0432\u043e\u0438 \u0437\u043d\u0430\u043d\u0438\u044f"}),(0,x.jsx)(l.Z,{href:"/overview",size:"large",variant:"contained",children:"Overview"})]})})})]})})]})}},34775:function(n,t,i){var o=i(95318);t.Z=void 0;var a=o(i(45649)),e=i(80184),r=(0,a.default)((0,e.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");t.Z=r},39709:function(n,t,i){i.d(t,{Z:function(){return I}});var o=i(4942),a=i(63366),e=i(87462),r=i(72791),d=i(14036),s=i(67384),c=i(94419),l=i(66934),u=i(31402),g=i(36151),h=i(13239),x=i(21217);function m(n){return(0,x.Z)("MuiLoadingButton",n)}var v=(0,i(75878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),f=i(80184),Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],p=(0,l.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,o.Z)({},"& .".concat(v.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,o.Z)({},"& .".concat(v.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,i=n.theme;return(0,e.Z)((0,o.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,o.Z)({transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short})},"&.".concat(v.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,o.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,o.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginLeft:-8}))})),b=(0,l.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var i=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,d.Z)(i.loadingPosition))]]}})((function(n){var t=n.theme,i=n.ownerState;return(0,e.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{left:"small"===i.size?10:14},"start"===i.loadingPosition&&"text"===i.variant&&{left:6},"center"===i.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{right:"small"===i.size?10:14},"end"===i.loadingPosition&&"text"===i.variant&&{right:6},"start"===i.loadingPosition&&i.fullWidth&&{position:"relative",left:-10},"end"===i.loadingPosition&&i.fullWidth&&{position:"relative",right:-10})})),I=r.forwardRef((function(n,t){var i=(0,u.Z)({props:n,name:"MuiLoadingButton"}),o=i.children,l=i.disabled,g=void 0!==l&&l,x=i.id,v=i.loading,I=void 0!==v&&v,j=i.loadingIndicator,P=i.loadingPosition,S=void 0===P?"center":P,w=i.variant,L=void 0===w?"text":w,W=(0,a.Z)(i,Z),y=(0,s.Z)(x),k=null!=j?j:(0,f.jsx)(h.Z,{"aria-labelledby":y,color:"inherit",size:16}),R=(0,e.Z)({},i,{disabled:g,loading:I,loadingIndicator:k,loadingPosition:S,variant:L}),C=function(n){var t=n.loading,i=n.loadingPosition,o=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,d.Z)(i))],endIcon:[t&&"endIconLoading".concat((0,d.Z)(i))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,d.Z)(i))]},r=(0,c.Z)(a,m,o);return(0,e.Z)({},o,r)}(R);return(0,f.jsx)(p,(0,e.Z)({disabled:g||I,id:y,ref:t},W,{variant:L,classes:C,ownerState:R,children:"end"===R.loadingPosition?(0,f.jsxs)(r.Fragment,{children:[o,I&&(0,f.jsx)(b,{className:C.loadingIndicator,ownerState:R,children:k})]}):(0,f.jsxs)(r.Fragment,{children:[I&&(0,f.jsx)(b,{className:C.loadingIndicator,ownerState:R,children:k}),o]})}))}))},91614:function(n,t,i){i.d(t,{Z:function(){return S}});var o=i(4942),a=i(63366),e=i(87462),r=i(72791),d=i(28182),s=i(27312),c=i(21217),l=i(94419),u=i(86083),g=(0,i(44046).ZP)(),h=i(85080),x=i(80184),m=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,h.Z)(),f=g("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var i=n.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),Z=function(n){return(0,u.Z)({props:n,name:"MuiContainer",defaultTheme:v})},p=function(n,t){var i=n.classes,o=n.fixed,a=n.disableGutters,e=n.maxWidth,r={root:["root",e&&"maxWidth".concat((0,s.Z)(String(e))),o&&"fixed",a&&"disableGutters"]};return(0,l.Z)(r,(function(n){return(0,c.Z)(t,n)}),i)};var b=i(14036),I=i(66934),j=i(31402),P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createStyledComponent,i=void 0===t?f:t,s=n.useThemeProps,c=void 0===s?Z:s,l=n.componentName,u=void 0===l?"MuiContainer":l,g=i((function(n){var t=n.theme,i=n.ownerState;return(0,e.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(n){var t=n.theme;return n.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(n,i){var o=i,a=t.breakpoints.values[o];return 0!==a&&(n[t.breakpoints.up(o)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),n}),{})}),(function(n){var t=n.theme,i=n.ownerState;return(0,e.Z)({},"xs"===i.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&(0,o.Z)({},t.breakpoints.up(i.maxWidth),{maxWidth:"".concat(t.breakpoints.values[i.maxWidth]).concat(t.breakpoints.unit)}))})),h=r.forwardRef((function(n,t){var i=c(n),o=i.className,r=i.component,s=void 0===r?"div":r,l=i.disableGutters,h=void 0!==l&&l,v=i.fixed,f=void 0!==v&&v,Z=i.maxWidth,b=void 0===Z?"lg":Z,I=(0,a.Z)(i,m),j=(0,e.Z)({},i,{component:s,disableGutters:h,fixed:f,maxWidth:b}),P=p(j,u);return(0,x.jsx)(g,(0,e.Z)({as:s,ownerState:j,className:(0,d.Z)(P.root,o),ref:t},I))}));return h}({createStyledComponent:(0,I.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,t){var i=n.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:function(n){return(0,j.Z)({props:n,name:"MuiContainer"})}}),S=P}}]);
//# sourceMappingURL=824.d6a397c0.chunk.js.map