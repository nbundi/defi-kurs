(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4748,5324],{94234:function(e,t,r){let n=r(67294);e.exports=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}))}},11943:function(e,t,r){let n=r(67294);e.exports=function(e){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))}},26555:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(84314),o=r(24262),i=r(19013),a=r(13882);function s(e){(0,a.Z)(1,arguments);var t=(0,i.Z)(e);return t.setHours(0,0,0,0),t}var u=r(58091),c=r(86559),f=r(92234),l=r(83946);function v(e,t,r){(0,a.Z)(2,arguments);var v,d,p,m,h,g,y,b,w,E,T=(0,i.Z)(e),P=(0,i.Z)(t),_=(0,n.j)(),x=null!==(v=null!==(d=null==r?void 0:r.locale)&&void 0!==d?d:_.locale)&&void 0!==v?v:c.Z,O=(0,l.Z)(null!==(p=null!==(m=null!==(h=null!==(g=null==r?void 0:r.weekStartsOn)&&void 0!==g?g:null==r?void 0:null===(y=r.locale)||void 0===y?void 0:null===(b=y.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==h?h:_.weekStartsOn)&&void 0!==m?m:null===(w=_.locale)||void 0===w?void 0:null===(E=w.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==p?p:0);if(!x.localize)throw RangeError("locale must contain localize property");if(!x.formatLong)throw RangeError("locale must contain formatLong property");if(!x.formatRelative)throw RangeError("locale must contain formatRelative property");var S=function(e,t){(0,a.Z)(2,arguments);var r=s(e),n=s(t);return Math.round((r.getTime()-(0,o.Z)(r)-(n.getTime()-(0,o.Z)(n)))/864e5)}(T,P);if(isNaN(S))throw RangeError("Invalid time value");var R=(0,f.Z)(T,(0,o.Z)(T)),M=(0,f.Z)(P,(0,o.Z)(P)),L=x.formatRelative(S<-6?"other":S<-1?"lastWeek":S<0?"yesterday":S<1?"today":S<2?"tomorrow":S<7?"nextWeek":"other",R,M,{locale:x,weekStartsOn:O});return(0,u.Z)(T,L,{locale:x,weekStartsOn:O})}},42227:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(19013),o=r(83946),i=r(13882);function a(e){(0,i.Z)(1,arguments);var t=(0,o.Z)(e);return(0,n.Z)(1e3*t)}},42699:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(19013),o=r(13882);function i(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e),i=(0,n.Z)(t);return r.getTime()>i.getTime()}},313:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(19013),o=r(13882);function i(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e),i=(0,n.Z)(t);return r.getTime()<i.getTime()}},88079:function(e,t,r){"use strict";var n=r(67294);function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var a=i(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,v=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case v:case u:return e;default:return t}}case m:case p:case o:return t}}}function g(e){return h(e)===l}t.typeOf=h,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=c,t.ContextProvider=u,t.Element=n,t.ForwardRef=v,t.Fragment=i,t.Lazy=m,t.Memo=p,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===s||e===a||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===u||e.$$typeof===c||e.$$typeof===v)},t.isAsyncMode=function(e){return g(e)||h(e)===f},t.isConcurrentMode=g,t.isContextConsumer=function(e){return h(e)===c},t.isContextProvider=function(e){return h(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return h(e)===v},t.isFragment=function(e){return h(e)===i},t.isLazy=function(e){return h(e)===m},t.isMemo=function(e){return h(e)===p},t.isPortal=function(e){return h(e)===o},t.isProfiler=function(e){return h(e)===s},t.isStrictMode=function(e){return h(e)===a},t.isSuspense=function(e){return h(e)===d}});function s(){}function u(){}o(a),o(i(function(e,t){})),i(function(e){e.exports=a}),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}(),Function.call.bind(Object.prototype.hasOwnProperty),u.resetWarningCache=s;var c=i(function(e){e.exports=function(){function e(e,t,r,n,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:s};return r.PropTypes=r,r}()}),f=[],l=function(e){function t(){e.apply(this,arguments),this.state={isLoading:!0}}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.loadTweetForProps=function(e){var t=this,r=function(){window.twttr.ready().then(function(r){var n=r.widgets;t._div&&(t._div.innerHTML="");var o=e.onTweetLoadSuccess,i=e.onTweetLoadError;n.createTweetEmbed(t.props.id,t._div,e.options).then(function(e){t.setState({isLoading:!1}),o&&o(e)}).catch(i)})},n=window.twttr;n&&n.ready?r():function(e,t){if(0===f.length){f.push(t);var r=document.createElement("script");r.setAttribute("src",e),r.onload=function(){return f.forEach(function(e){return e()})},document.body.appendChild(r)}else f.push(t)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",r)},t.prototype.componentDidMount=function(){this.loadTweetForProps(this.props)},t.prototype.shouldComponentUpdate=function(e,t){return this.props.id!==e.id||this.props.className!==e.className},t.prototype.componentWillUpdate=function(e,t){this.props.id!==e.id&&this.loadTweetForProps(e)},t.prototype.render=function(){var e=this;return n.createElement("div",{className:this.props.className,ref:function(t){e._div=t}},this.state.isLoading&&this.props.placeholder)},t}(n.Component);l.propTypes={id:c.string,options:c.object,protocol:c.string,onTweetLoadSuccess:c.func,onTweetLoadError:c.func,className:c.string},l.defaultProps={protocol:"https:",options:{},className:null},t.Z=l},45324:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=r(67294)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=function(e){return"shadertoy-react: ".concat(e)};function a(){var e=u(["Please upload a video or an image with a valid format"]);return a=function(){return e},e}function s(){var e=u(["Missing url, please make sure to pass the url of your texture { url: ... }"]);return s=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return 0==(e&e-1)},l=function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},v=function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),c(this,"isLoaded",!1),c(this,"url",void 0),c(this,"wrapS",void 0),c(this,"wrapT",void 0),c(this,"minFilter",void 0),c(this,"magFilter",void 0),c(this,"source",void 0),c(this,"flipY",-1),c(this,"width",0),c(this,"height",0),c(this,"_webglTexture",null),c(this,"updateTexture",function(e,t,n){var o=r.gl,i=o.RGBA,a=o.RGBA,s=o.UNSIGNED_BYTE;o.bindTexture(o.TEXTURE_2D,e),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,n),o.texImage2D(o.TEXTURE_2D,0,i,a,s,t)}),c(this,"setupVideo",function(e){var t=document.createElement("video"),n=!1,o=!1;t.autoplay=!0,t.muted=!0,t.loop=!0,t.crossOrigin="anonymous";var i=function(){n&&o&&(r.isLoaded=!0)};return t.addEventListener("playing",function(){n=!0,r.width=t.videoWidth||0,r.height=t.videoHeight||0,i()},!0),t.addEventListener("timeupdate",function(){o=!0,i()},!0),t.src=e,t}),c(this,"makePowerOfTwo",function(e){return e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageBitmap?(void 0===r.pow2canvas&&(r.pow2canvas=document.createElement("canvas")),r.pow2canvas.width=l(e.width),r.pow2canvas.height=l(e.height),r.pow2canvas.getContext("2d").drawImage(e,0,0,r.pow2canvas.width,r.pow2canvas.height),console.warn(i("Image is not power of two ".concat(e.width," x ").concat(e.height,". Resized to ").concat(r.pow2canvas.width," x ").concat(r.pow2canvas.height,";"))),r.pow2canvas):e}),c(this,"load",function(e,t){var n=r.gl,o=e.url,u=e.wrapS,c=e.wrapT,l=e.minFilter,v=e.magFilter,d=e.flipY,p=void 0===d?-1:d;if(!o)return Promise.reject(Error(i(s())));var m=/(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(o),h=/(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(o);if(null===m&&null===h)return Promise.reject(Error(i(a()),o));Object.assign(r,{url:o,wrapS:u,wrapT:c,minFilter:l,magFilter:v,flipY:p});var g=n.RGBA,y=n.RGBA,b=n.UNSIGNED_BYTE,w=new Uint8Array([255,255,255,0]),E=n.createTexture();if(n.bindTexture(n.TEXTURE_2D,E),n.texImage2D(n.TEXTURE_2D,0,g,1,1,0,y,b,w),h){var T=r.setupVideo(o);return n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),r._webglTexture=E,r.source=T,r.isVideo=!0,T.play().then(function(){return r})}return new Promise(function(e,t){var r=new Image;r.crossOrigin="anonymous",r.onload=function(){return e(r)},r.onerror=function(){return t(Error(i("failed loading url: ".concat(o))))},r.src=o}).then(function(t){var o=f(t.width)&&f(t.height);return(33071!==e.wrapS||33071!==e.wrapT||9728!==e.minFilter&&9729!==e.minFilter)&&!1===o&&(t=r.makePowerOfTwo(t),o=!0),n.bindTexture(n.TEXTURE_2D,E),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p),n.texImage2D(n.TEXTURE_2D,0,g,y,b,t),o&&9728!==e.minFilter&&9729!==e.minFilter&&n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,r.wrapS||10497),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,r.wrapT||10497),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r.minFilter||9987),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,r.magFilter||9729),r._webglTexture=E,r.source=t,r.isVideo=!1,r.isLoaded=!0,r.width=t.width||0,r.height=t.height||0,r})}),this.gl=t};function d(){var e,t,r=(e=['The uniform type "','" is not valid, please make sure your uniform type is valid'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return d=function(){return r},r}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){var e=y(["wrong precision type ",", please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp."]);return m=function(){return e},e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){P(e,t,r[t])})}return e}function g(){var e=y(["Error compiling the shader:"]);return g=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",function(){return A}),r.d(t,"NearestFilter",function(){return 9728}),r.d(t,"LinearFilter",function(){return 9729}),r.d(t,"NearestMipMapNearestFilter",function(){return 9984}),r.d(t,"LinearMipMapNearestFilter",function(){return 9985}),r.d(t,"NearestMipMapLinearFilter",function(){return 9986}),r.d(t,"LinearMipMapLinearFilter",function(){return 9987}),r.d(t,"ClampToEdgeWrapping",function(){return 33071}),r.d(t,"MirroredRepeatWrapping",function(){return 33648}),r.d(t,"RepeatWrapping",function(){return 10497});var _=["lowp","mediump","highp"],x="attribute vec3 aVertexPosition;\nvoid main(void) {\n    gl_Position = vec4(aVertexPosition, 1.0);\n}",O="iTimeDelta",S="iResolution",R="iChannelResolution",M="iDeviceOrientation",L=function(e,t,r){return e*(1-r)+t*r},A=function(e){var t;function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),P(T(T(n=(a=w(r).call(this,e))&&("object"===p(a)||"function"==typeof a)?a:T(this))),"componentDidMount",function(){n.initWebGL();var e=n.props,t=e.fs,r=e.vs,o=e.clearColor,i=T(T(n)).gl;if(i){i.clearColor.apply(i,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(a=void 0===o?[0,0,0,1]:o)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()),i.clearDepth(1),i.enable(i.DEPTH_TEST),i.depthFunc(i.LEQUAL),i.viewport(0,0,n.canvas.width,n.canvas.height),n.canvas.height=n.canvas.clientHeight,n.canvas.width=n.canvas.clientWidth,n.processCustomUniforms(),n.processTextures();var a,s=n.preProcessShaders(t||"void mainImage( out vec4 fragColor, in vec2 fragCoord ) {\n    vec2 uv = fragCoord/iResolution.xy;\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n    fragColor = vec4(col,1.0);\n}",r||x);n.initShaders(s),n.initBuffers(),n.drawScene(),n.addEventListeners(),n.onResize()}}),P(T(T(n)),"shouldComponentUpdate",function(){return!1}),P(T(T(n)),"setupChannelRes",function(e,t){var r=e.width,o=e.height,i=n.props.devicePixelRatio,a=void 0===i?1:i;n.uniforms.iChannelResolution.value[3*t]=r*a,n.uniforms.iChannelResolution.value[3*t+1]=o*a,n.uniforms.iChannelResolution.value[3*t+2]=0}),P(T(T(n)),"initWebGL",function(){var e=n.props.contextAttributes;n.gl=n.canvas.getContext("webgl",e)||n.canvas.getContext("experimental-webgl",e),n.gl.getExtension("OES_standard_derivatives"),n.gl.getExtension("EXT_shader_texture_lod")}),P(T(T(n)),"initBuffers",function(){var e=T(T(n)).gl;n.squareVerticesBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,n.squareVerticesBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0]),e.STATIC_DRAW)}),P(T(T(n)),"addEventListeners",function(){var e={passive:!0};n.uniforms.iMouse.isNeeded&&(n.canvas.addEventListener("mousemove",n.mouseMove,e),n.canvas.addEventListener("mouseout",n.mouseUp,e),n.canvas.addEventListener("mouseup",n.mouseUp,e),n.canvas.addEventListener("mousedown",n.mouseDown,e),n.canvas.addEventListener("touchmove",n.mouseMove,e),n.canvas.addEventListener("touchend",n.mouseUp,e),n.canvas.addEventListener("touchstart",n.mouseDown,e)),n.uniforms.iDeviceOrientation.isNeeded&&window.addEventListener("deviceorientation",n.onDeviceOrientationChange,e),window.addEventListener("resize",n.onResize,e)}),P(T(T(n)),"removeEventListeners",function(){var e={passive:!0};n.uniforms.iMouse.isNeeded&&(n.canvas.removeEventListener("mousemove",n.mouseMove,e),n.canvas.removeEventListener("mouseout",n.mouseUp,e),n.canvas.removeEventListener("mouseup",n.mouseUp,e),n.canvas.removeEventListener("mousedown",n.mouseDown,e),n.canvas.removeEventListener("touchmove",n.mouseMove,e),n.canvas.removeEventListener("touchend",n.mouseUp,e),n.canvas.removeEventListener("touchstart",n.mouseDown,e)),n.uniforms.iDeviceOrientation.isNeeded&&window.removeEventListener("deviceorientation",n.onDeviceOrientationChange,e),window.removeEventListener("resize",n.onResize,e)}),P(T(T(n)),"onDeviceOrientationChange",function(e){var t=e.alpha,r=e.beta,o=e.gamma;n.uniforms.iDeviceOrientation.value=[t,r,o,window.orientation||0]}),P(T(T(n)),"mouseDown",function(e){var t=e.clientX||e.changedTouches[0].clientX,r=e.clientY||e.changedTouches[0].clientY,o=t-n.canvasPosition.left-window.pageXOffset,i=n.canvasPosition.height-r-n.canvasPosition.top-window.pageYOffset;n.mousedown=!0,n.uniforms.iMouse.value[2]=o,n.uniforms.iMouse.value[3]=i,n.lastMouseArr[0]=o,n.lastMouseArr[1]=i}),P(T(T(n)),"mouseMove",function(e){n.canvasPosition=n.canvas.getBoundingClientRect();var t=n.props.lerp,r=e.clientX||e.changedTouches[0].clientX,o=e.clientY||e.changedTouches[0].clientY,i=r-n.canvasPosition.left,a=n.canvasPosition.height-o-n.canvasPosition.top;1!==(void 0===t?1:t)?(n.lastMouseArr[0]=i,n.lastMouseArr[1]=a):(n.uniforms.iMouse.value[0]=i,n.uniforms.iMouse.value[1]=a)}),P(T(T(n)),"mouseUp",function(e){n.uniforms.iMouse.value[2]=0,n.uniforms.iMouse.value[3]=0}),P(T(T(n)),"onResize",function(){var e=T(T(n)).gl,t=n.props.devicePixelRatio;n.canvasPosition=n.canvas.getBoundingClientRect();var r=void 0===t?1:t,o=Math.floor(n.canvasPosition.width*r),i=Math.floor(n.canvasPosition.height*r);if(e.canvas.width=o,e.canvas.height=i,n.uniforms.iResolution.isNeeded){var a=e.getUniformLocation(n.shaderProgram,S);e.uniform2fv(a,[e.canvas.width,e.canvas.height])}}),P(T(T(n)),"drawScene",function(e){var t=T(T(n)).gl,r=n.props.lerp,o=void 0===r?1:r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.bindBuffer(t.ARRAY_BUFFER,n.squareVerticesBuffer),t.vertexAttribPointer(n.vertexPositionAttribute,3,t.FLOAT,!1,0,0),n.setUniforms(e),t.drawArrays(t.TRIANGLE_STRIP,0,4),n.uniforms.iMouse.isNeeded&&1!==o&&(n.uniforms.iMouse.value[0]=L(n.uniforms.iMouse.value[0],n.lastMouseArr[0],o),n.uniforms.iMouse.value[1]=L(n.uniforms.iMouse.value[1],n.lastMouseArr[1],o)),n.animFrameId=requestAnimationFrame(n.drawScene)}),P(T(T(n)),"createShader",function(e,t){var r=T(T(n)).gl,o=r.createShader(e);if(r.shaderSource(o,t),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS)){console.warn(i(g()),t);var a=r.getShaderInfoLog(o);r.deleteShader(o),console.error(i("Shader compiler log: ".concat(a)))}return o}),P(T(T(n)),"initShaders",function(e){var t=e.fs,r=e.vs,o=T(T(n)).gl,a=n.createShader(o.FRAGMENT_SHADER,t),s=n.createShader(o.VERTEX_SHADER,r);n.shaderProgram=o.createProgram(),o.attachShader(n.shaderProgram,s),o.attachShader(n.shaderProgram,a),o.linkProgram(n.shaderProgram),o.getProgramParameter(n.shaderProgram,o.LINK_STATUS)?(o.useProgram(n.shaderProgram),n.vertexPositionAttribute=o.getAttribLocation(n.shaderProgram,"aVertexPosition"),o.enableVertexAttribArray(n.vertexPositionAttribute)):console.error(i("Unable to initialize the shader program: ".concat(o.getProgramInfoLog(n.shaderProgram))))}),P(T(T(n)),"processCustomUniforms",function(){var e=n.props.uniforms;e&&Object.keys(e).forEach(function(e,t){var r=n.props.uniforms[e],o=r.value,a=r.type,s=function(e){switch(e){case"1f":case"1fv":return"float";case"2f":case"2fv":return"vec2";case"3f":case"3fv":return"vec3";case"4f":case"4fv":return"vec4";case"1i":case"1iv":return"int";case"2i":case"2iv":return"ivec2";case"3i":case"3iv":return"ivec3";case"4i":case"4iv":return"ivec4";case"Matrix2fv":return"mat2";case"Matrix3fv":return"mat3";case"Matrix4fv":return"mat4";default:console.error(i(d()))}}(a);if(s){var u={};if(a.includes("Matrix")){var c=a.length,f=a.charAt(c-3),l=Math.floor(o.length/(f*f));o.length>f*f&&(u.arraySize="[".concat(l,"]"))}else a.includes("v")&&o.length>a.charAt(0)&&(u.arraySize="[".concat(Math.floor(o.length/a.charAt(0)),"]"));n.uniforms[e]=h({type:s,isNeeded:!1,value:o},u)}})}),P(T(T(n)),"processTextures",function(){var e=T(T(n)).gl,t=n.props,r=t.textures,o=t.onDoneLoadingTextures;r&&0<r.length?(n.uniforms["".concat(R)]={type:"vec3",isNeeded:!1,arraySize:"[".concat(r.length,"]"),value:[]},Promise.all(r.map(function(t,r){return n.uniforms["".concat("iChannel").concat(r)]={type:"sampler2D",isNeeded:!1},n.setupChannelRes(t,r),n.texturesArr[r]=new v(e),n.texturesArr[r].load(t,r).then(function(e){return n.setupChannelRes(e,r)})})).then(function(){return o&&o()}).catch(function(e){console.error(e),o&&o()})):o&&o()}),P(T(T(n)),"preProcessShaders",function(e,t){var r=n.props,o=r.precision,a=r.devicePixelRatio,s="#define DPR ".concat((void 0===a?1:a).toFixed(1),"\n"),u=_.includes(o),c="precision ".concat(u?o:_[1]," float;\n");u||console.warn(i(m()));var f=c.concat(s).concat(e).replace(/texture\(/g,"texture2D("),l=f.lastIndexOf(c);return Object.keys(n.uniforms).forEach(function(t){var r,o,i;e.includes(t)&&(r=f,o="uniform ".concat(n.uniforms[t].type," ").concat(t).concat(n.uniforms[t].arraySize||"","; \n"),f=0<(i=l+c.length)?r.substring(0,i)+o+r.substring(i,r.length):o+r,n.uniforms[t].isNeeded=!0)}),/mainImage/.test(e)&&(f=f.concat("\nvoid main(void){\n    vec4 color = vec4(0.0,0.0,0.0,1.0);\n    mainImage( color, gl_FragCoord.xy );\n    gl_FragColor = color;\n}")),{fs:f,vs:t}}),P(T(T(n)),"setUniforms",function(e){var t=T(T(n)).gl,r=n.lastTime?(e-n.lastTime)/1e3:0;if(n.lastTime=e,n.props.uniforms&&Object.keys(n.props.uniforms).forEach(function(e){var r=n.props.uniforms[e];if(n.uniforms[e].isNeeded){var o=t.getUniformLocation(n.shaderProgram,e);!function(e,t,r,n){switch(r){case"1f":e.uniform1f(t,n);break;case"2f":e.uniform2f(t,n[0],n[1]);break;case"3f":e.uniform3f(t,n[0],n[1],n[2]);break;case"4f":e.uniform4f(t,n[0],n[1],n[2],n[3]);break;case"1i":e.uniform1i(t,n);break;case"2i":e.uniform2i(t,n[0],n[1]);break;case"3i":e.uniform3i(t,n[0],n[1],n[2]);break;case"4i":e.uniform3i(t,n[0],n[1],n[2],n[3]);break;case"1iv":e.uniform1iv(t,n);break;case"2iv":e.uniform2iv(t,n);break;case"3iv":e.uniform3iv(t,n);break;case"4iv":e.uniform4iv(t,n);break;case"1fv":e.uniform1fv(t,n);break;case"2fv":e.uniform2fv(t,n);break;case"3fv":e.uniform3fv(t,n);break;case"4fv":e.uniform4fv(t,n);break;case"Matrix2fv":e.uniformMatrix2fv(t,!1,n);break;case"Matrix3fv":e.uniformMatrix3fv(t,!1,n);break;case"Matrix4fv":e.uniformMatrix4fv(t,!1,n)}}(t,o,r.type,r.value)}}),n.uniforms.iMouse.isNeeded){var o=t.getUniformLocation(n.shaderProgram,"iMouse");t.uniform4fv(o,n.uniforms.iMouse.value)}if(n.uniforms.iChannelResolution&&n.uniforms.iChannelResolution.isNeeded){var i=t.getUniformLocation(n.shaderProgram,R);t.uniform3fv(i,n.uniforms.iChannelResolution.value)}if(n.uniforms.iDeviceOrientation.isNeeded){var a=t.getUniformLocation(n.shaderProgram,M);t.uniform4fv(a,n.uniforms.iDeviceOrientation.value)}if(n.uniforms.iTime.isNeeded){var s=t.getUniformLocation(n.shaderProgram,"iTime");t.uniform1f(s,n.timer+=r)}if(n.uniforms.iTimeDelta.isNeeded){var u=t.getUniformLocation(n.shaderProgram,O);t.uniform1f(u,r)}if(n.uniforms.iDate.isNeeded){var c=new Date,f=c.getMonth()+1,l=c.getDate(),v=c.getFullYear(),d=60*c.getHours()*60+60*c.getMinutes()+c.getSeconds()+.001*c.getMilliseconds(),p=t.getUniformLocation(n.shaderProgram,"iDate");t.uniform4fv(p,[v,f,l,d])}if(n.uniforms.iFrame.isNeeded){var m=t.getUniformLocation(n.shaderProgram,"iFrame");t.uniform1i(m,n.uniforms.iFrame.value++)}0<n.texturesArr.length&&n.texturesArr.forEach(function(e,r){var o=e.isVideo,i=e._webglTexture,a=e.source,s=e.flipY;if(e.isLoaded&&n.uniforms["iChannel".concat(r)].isNeeded){var u=t.getUniformLocation(n.shaderProgram,"iChannel".concat(r));t.activeTexture(t["TEXTURE".concat(r)]),t.bindTexture(t.TEXTURE_2D,i),t.uniform1i(u,r),o&&e.updateTexture(i,a,s)}})}),P(T(T(n)),"registerCanvas",function(e){n.canvas=e}),P(T(T(n)),"gl",void 0),P(T(T(n)),"squareVerticesBuffer",void 0),P(T(T(n)),"shaderProgram",void 0),P(T(T(n)),"vertexPositionAttribute",void 0),P(T(T(n)),"animFrameId",void 0),P(T(T(n)),"timeoutId",void 0),P(T(T(n)),"canvas",void 0),P(T(T(n)),"mousedown",!1),P(T(T(n)),"canvasPosition",void 0),P(T(T(n)),"timer",0),P(T(T(n)),"lastMouseArr",[0,0]),P(T(T(n)),"texturesArr",[]),P(T(T(n)),"lastTime",0),P(T(T(n)),"render",function(){var e={glCanvas:h({height:"100%",width:"100%"},n.props.style)};return o.a.createElement("canvas",{style:e.glCanvas,ref:n.registerCanvas})}),n.uniforms=(P(t={},"iTime",{type:"float",isNeeded:!1,value:0}),P(t,O,{type:"float",isNeeded:!1,value:0}),P(t,"iDate",{type:"vec4",isNeeded:!1,value:[0,0,0,0]}),P(t,"iMouse",{type:"vec4",isNeeded:!1,value:[0,0,0,0]}),P(t,S,{type:"vec2",isNeeded:!1,value:[0,0]}),P(t,"iFrame",{type:"int",isNeeded:!1,value:0}),P(t,M,{type:"vec4",isNeeded:!1,value:[0,0,0,0]}),t),n}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(r,n.Component),b(r.prototype,[{key:"componentWillUnmount",value:function(){var e=this.gl;e&&(e.getExtension("WEBGL_lose_context").loseContext(),e.useProgram(null),e.deleteProgram(this.shaderProgram),0<this.texturesArr.length&&this.texturesArr.forEach(function(t){e.deleteTexture(t._webglTexture)}),this.shaderProgram=null),this.removeEventListeners(),cancelAnimationFrame(this.animFrameId)}}]),t&&b(r,t),r}();P(A,"defaultProps",{textures:[],contextAttributes:{},devicePixelRatio:1,vs:x,precision:"highp"})}])},74752:function(e,t,r){"use strict";var n=r(77904);t.Z=function(e,t,r){"__proto__"==t&&n.Z?(0,n.Z)(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},95163:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=function(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n},o=r(820),i=function(e,t,r,n){return(0,o.Z)(e,function(e,o,i){t(n,e,r(e),i)}),n},a=r(64007),s=r(27771),u=function(e,t){return function(r,o){var u=(0,s.Z)(r)?n:i,c=t?t():{};return u(r,e,(0,a.Z)(o,2),c)}}},77904:function(e,t,r){"use strict";var n=r(62508),o=function(){try{var e=(0,n.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=o},7161:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(39044),o=r(50585),i=r(93589),a=r(27771),s=r(18533),u=r(28407),c=r(34148),f=Math.max,l=function(e,t,r,l){e=(0,o.Z)(e)?e:(0,c.Z)(e),r=r&&!l?(0,u.Z)(r):0;var v,d=e.length;return r<0&&(r=f(d+r,0)),"string"==typeof(v=e)||!(0,a.Z)(v)&&(0,s.Z)(v)&&"[object String]"==(0,i.Z)(v)?r<=d&&e.indexOf(t,r)>-1:!!d&&(0,n.Z)(e,t,r)>-1}},69884:function(e,t,r){"use strict";var n=r(74752),o=(0,r(95163).Z)(function(e,t,r){(0,n.Z)(e,r,t)});t.Z=o},17277:function(e,t){"use strict";var r=Array.prototype.reverse;t.Z=function(e){return null==e?e:r.call(e)}},55284:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n,o,i,a,s,u,c=r(58694),f=r(17685),l=r(29169),v=r(27771),d=f.Z?f.Z.isConcatSpreadable:void 0,p=function(e){return(0,v.Z)(e)||(0,l.Z)(e)||!!(d&&e&&e[d])},m=function e(t,r,n,o,i){var a=-1,s=t.length;for(n||(n=p),i||(i=[]);++a<s;){var u=t[a];r>0&&n(u)?r>1?e(u,r-1,n,o,i):(0,c.Z)(i,u):o||(i[i.length]=u)}return i},h=r(5505),g=r(69203),y=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},b=Math.max,w=r(77904),E=w.Z?function(e,t){return(0,w.Z)(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:g.Z,T=Date.now,P=(n=0,o=0,function(){var e=T(),t=16-(e-o);if(o=e,t>0){if(++n>=800)return arguments[0]}else n=0;return E.apply(void 0,arguments)}),_=r(79651),x=r(50585),O=r(56009),S=r(77226),R=function(e,t,r){if(!(0,S.Z)(r))return!1;var n=typeof t;return("number"==n?!!((0,x.Z)(r)&&(0,O.Z)(t,r.length)):"string"==n&&t in r)&&(0,_.Z)(r[t],e)},M=P((a=i=function(e,t){if(null==e)return[];var r=t.length;return r>1&&R(e,t[0],t[1])?t=[]:r>2&&R(t[0],t[1],t[2])&&(t=[t[0]]),(0,h.Z)(e,m(t,1),[])},s=void 0,u=g.Z,s=b(void 0===s?a.length-1:s,0),function(){for(var e=arguments,t=-1,r=b(e.length-s,0),n=Array(r);++t<r;)n[t]=e[s+t];t=-1;for(var o=Array(s+1);++t<s;)o[t]=e[t];return o[s]=u(n),y(a,this,o)}),i+"")},34148:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(74073),o=r(10336),i=function(e){var t;return null==e?[]:(t=(0,o.Z)(e),(0,n.Z)(t,function(t){return e[t]}))}},81531:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(90607);function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,n.Z)(e,t)}},90607:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return n}})}}]);