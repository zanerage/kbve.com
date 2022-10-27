import{_ as o}from"./ButtonBase.be32d9b8.js";import{o as b,p as E,q as O,t as S,v as _,d as A,_ as j,e as B,w as L,C as P}from"./TransitionGroupContext.cf51fb81.js";import{r as u}from"./index.0d03162d.js";import{j as N}from"./jsx-runtime.44949ced.js";function k(h){return Object.entries(h).filter(function(r){r[0];var n=r[1];return n||n===!1}).map(function(r){var n=r[0],t=r[1];return encodeURIComponent(n)+"="+encodeURIComponent(t)}).join("&")}var C="hcaptcha-api-script-id",R="hcaptchaOnLoad",x,g,y=new Promise(function(h,r){x=h,g=r}),D=function(r){if(r===void 0&&(r={}),document.getElementById(C))return y;window[R]=x;var n=r.apihost||"https://js.hcaptcha.com";delete r.apihost;var t=document.createElement("script");t.id=C,t.src=n+"/1/api.js?render=explicit&onload="+R,t.async=!0,t.onerror=function(a){return g("script-error")};var e=k(r);return t.src+=e!==""?"&"+e:"",document.head.appendChild(t),y},W=function(h){b(r,h);function r(t){var e;e=h.call(this,t)||this,e.renderCaptcha=e.renderCaptcha.bind(o(e)),e.resetCaptcha=e.resetCaptcha.bind(o(e)),e.removeCaptcha=e.removeCaptcha.bind(o(e)),e.isReady=e.isReady.bind(o(e)),e.loadCaptcha=e.loadCaptcha.bind(o(e)),e.handleOnLoad=e.handleOnLoad.bind(o(e)),e.handleSubmit=e.handleSubmit.bind(o(e)),e.handleExpire=e.handleExpire.bind(o(e)),e.handleError=e.handleError.bind(o(e)),e.handleOpen=e.handleOpen.bind(o(e)),e.handleClose=e.handleClose.bind(o(e)),e.handleChallengeExpired=e.handleChallengeExpired.bind(o(e));var a=typeof hcaptcha<"u";return e.ref=u.exports.createRef(),e.apiScriptRequested=!1,e.state={isApiReady:a,isRemoved:!1,elementId:t.id,captchaId:""},e}var n=r.prototype;return n.componentDidMount=function(){var e=this.state.isApiReady;if(e){this.renderCaptcha();return}this.loadCaptcha()},n.componentWillUnmount=function(){var e=this.state.captchaId;!this.isReady()||(hcaptcha.reset(e),hcaptcha.remove(e))},n.shouldComponentUpdate=function(e,a){return!(this.state.isApiReady!==a.isApiReady||this.state.isRemoved!==a.isRemoved)},n.componentDidUpdate=function(e){var a=this,i=["sitekey","size","theme","tabindex","languageOverride","endpoint"],s=i.every(function(c){return e[c]===a.props[c]});s||this.removeCaptcha(function(){a.renderCaptcha()})},n.loadCaptcha=function(){if(!this.apiScriptRequested){var e=this.props,a=e.apihost,i=e.assethost,s=e.endpoint,c=e.host,p=e.imghost,d=e.languageOverride,l=e.reCaptchaCompat,f=e.reportapi,m=e.sentry,v=e.custom,I={apihost:a,assethost:i,endpoint:s,hl:d,host:c,imghost:p,recaptchacompat:l===!1?"off":null,reportapi:f,sentry:m,custom:v};D(I).then(this.handleOnLoad).catch(this.handleError),this.apiScriptRequested=!0}},n.renderCaptcha=function(e){var a=this.state.isApiReady;if(!!a){var i=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),s=hcaptcha.render(this.ref.current,i);this.setState({isRemoved:!1,captchaId:s},function(){e&&e()})}},n.resetCaptcha=function(){var e=this.state.captchaId;!this.isReady()||hcaptcha.reset(e)},n.removeCaptcha=function(e){var a=this.state.captchaId;!this.isReady()||this.setState({isRemoved:!0},function(){hcaptcha.remove(a),e&&e()})},n.handleOnLoad=function(){var e=this;this.setState({isApiReady:!0},function(){e.renderCaptcha(function(){var a=e.props.onLoad;a&&a()})})},n.handleSubmit=function(e){var a=this.props.onVerify,i=this.state,s=i.isRemoved,c=i.captchaId;if(!(typeof hcaptcha>"u"||s)){var p=hcaptcha.getResponse(c),d=hcaptcha.getRespKey(c);a(p,d)}},n.handleExpire=function(){var e=this.props.onExpire,a=this.state.captchaId;!this.isReady()||(hcaptcha.reset(a),e&&e())},n.handleError=function(e){var a=this.props.onError,i=this.state.captchaId;this.isReady()&&hcaptcha.reset(i),a&&a(e)},n.isReady=function(){var e=this.state,a=e.isApiReady,i=e.isRemoved;return a&&!i},n.handleOpen=function(){!this.isReady()||!this.props.onOpen||this.props.onOpen()},n.handleClose=function(){!this.isReady()||!this.props.onClose||this.props.onClose()},n.handleChallengeExpired=function(){!this.isReady()||!this.props.onChalExpired||this.props.onChalExpired()},n.execute=function(e){e===void 0&&(e=null);var a=this.state.captchaId;if(!!this.isReady())return e&&typeof e!="object"&&(e=null),hcaptcha.execute(a,e)},n.setData=function(e){var a=this.state.captchaId;!this.isReady()||(e&&typeof e!="object"&&(e=null),hcaptcha.setData(a,e))},n.getResponse=function(){return hcaptcha.getResponse(this.state.captchaId)},n.getRespKey=function(){return hcaptcha.getRespKey(this.state.captchaId)},n.render=function(){var e=this.state.elementId;return u.exports.createElement("div",{ref:this.ref,id:e})},r}(u.exports.Component);const U=["className","component"];function T(h={}){const{defaultTheme:r,defaultClassName:n="MuiBox-root",generateClassName:t,styleFunctionSx:e=O}=h,a=E("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(e);return u.exports.forwardRef(function(c,p){const d=S(r),l=_(c),{className:f,component:m="div"}=l,v=A(l,U);return N.exports.jsx(a,j({as:m,ref:p,className:B(f,t?t(n):n),theme:d},v))})}const w=L(),F=T({defaultTheme:w,defaultClassName:"MuiBox-root",generateClassName:P.generate}),$=F;export{$ as B,W as H};
