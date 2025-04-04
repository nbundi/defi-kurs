"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5147],{31389:function(e,t,r){r(67294);var n=r(15277);t.Z=function(e){var t=e.children,r=e.className;return(0,n.tZ)("div",{className:r,sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:t})}},16394:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(59499),i=r(67294),o=r(42708),a=r(95465),c=r(79161),s=r(15277);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={display:"flex",alignItems:"center",justifyContent:"center",position:"relative",minHeight:["20rem","30rem"],height:["46vh","66vh"],py:[4,null,6],px:[4,6],width:"100%","& img, & video":{display:"block",borderRadius:"0 !important",width:"100%",maxHeight:["calc(46vh - 4rem)","32rem"],height:"100%",objectFit:"contain",py:[4,6]},"&::after":{content:'""',borderBottom:"2px solid rgba(var(--foreground), var(--shadeForegroundTertiary))",position:"absolute",left:"1px",right:"1px",bottom:0,zIndex:2,pointerEvents:"none"}};function f(e){var t=e.nftData,r=e.isLoading,n=e.disableLightbox,u=e.className,f=e.sxContainer,h=(0,o.YD)({threshold:0,triggerOnce:!0}),p=h.ref,v=h.inView,m=(0,i.useState)(!1),g=m[0],b=m[1],x=(0,i.useCallback)(function(){b(!g)},[g]),y=(0,i.useCallback)(function(){b(!1)},[]);return(0,i.useEffect)(function(){return window.addEventListener("scroll",y,!1),function(){return window.removeEventListener("scroll",y,!1)}},[y]),(0,s.tZ)(s.HY,{children:(0,s.tZ)("div",{className:"AuctionMedia".concat(u?" ".concat(u):"").concat(g?" lightbox--active":""),ref:p,sx:l(l({},d),f),children:r||!v?(0,s.tZ)("div",{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.tZ)(c.Z,{size:"48px"})}):(0,s.BX)("div",{sx:l({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center","& img, & video":{filter:"drop-shadow(0 0.25rem 1rem rgba(0,0,0,0.15))"},"& audio":{position:"relative",zIndex:3},"& .MediaAudio:nth-child(2)":{px:[4,12],py:[0,0]}},g?{background:"rgb(var(--groupBackground))",position:"fixed",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",top:0,left:0,right:0,bottom:0,zIndex:99,"& img, & video":{aspectRatio:"unset",flex:1,maxHeight:"100vh"},".MediaContainerAudio":{alignItems:"center",justifyContent:"center",maxHeight:"100vh",padding:[4,12]}}:{}),children:[(0,s.tZ)("div",{sx:l({width:"100%"},e.sxMediaContainer),children:(0,s.tZ)(a.Z,{autoPlay:!0,disableLightbox:n,media:t.contentURI,mediaMimeType:t.metadata.mimeType,mediaSecondary:t.contentURISecondary,mediaSecondaryMimeType:t.metadata.mimeTypeSecondary})}),!n&&(0,s.tZ)("button",{sx:{background:0,margin:0,border:0,outline:0,position:"absolute",top:0,left:0,right:0,bottom:0,height:"100%",width:"100%",display:"block",zIndex:2,cursor:g?"zoom-out":"zoom-in "},onClick:x})]})})})}},95465:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(89755),i=r.n(n),o=r(67294),a=r(15277);function c(e){var t=e.media,r=(0,o.useState)(null),n=r[0],i=r[1];return(0,o.useEffect)(function(){fetch(t).then(function(e){return e.text()}).then(function(e){return i(e)})},[t]),(0,a.tZ)("div",{sx:{fontSize:"lg",fontFamily:"Georgia",p:6,lineHeight:1.6,maxHeight:"18.25rem",overflow:"hidden",color:"text"},children:n})}function s(e){var t=e.media,r=e.autoPlay,n=e.controls,i=(0,o.useRef)(null),c=(0,o.useState)(!0),s=c[0],u=c[1];return(0,o.useEffect)(function(){i.current&&(i.current.muted=!0,i.current.play().then(function(e){}).catch(function(e){}))},[]),(0,a.BX)(a.HY,{children:[(0,a.tZ)("video",{autoPlay:r,controls:n||!r,loop:!0,muted:s,playsInline:!0,ref:i,src:t,sx:{outline:0}}),(0,a.tZ)("button",{className:"videoMute",sx:{position:"absolute",bottom:0,right:0,margin:2,zIndex:3,border:0,outline:0,height:10,width:10,padding:0,borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",backdropFilter:"blur(2px)",background:"\n          linear-gradient(\n              to right,\n              rgba(var(--foreground), 0.1),\n              rgba(var(--foreground), 0.1)\n            ),\n            linear-gradient(to right, rgba(var(--background), 0.8), rgba(var(--background), 0.8))\n          ",color:"textSecondary",cursor:"pointer",transition:"150ms ease-in-out background, 150ms ease-in-out color","&:hover":{color:"text"}},onClick:function(){return u(!s)},children:s?(0,a.BX)("svg",{fill:"none",stroke:"currentColor",sx:{height:6,width:6},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.tZ)("path",{clipRule:"evenodd",d:"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),(0,a.tZ)("path",{d:"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})]}):(0,a.tZ)("svg",{fill:"none",stroke:"currentColor",sx:{height:6,width:6},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.tZ)("path",{d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})})})]})}function u(e){var t=e.media;return(0,a.tZ)("div",{className:"MediaAudio",sx:{display:"flex",alignItems:"center",width:"100%",p:4},children:(0,a.tZ)("audio",{controls:!0,controlsList:"nodownload",src:t,sx:{width:"100%",outline:0,maxWidth:"53rem",mx:"auto"}})})}function l(e){var t=e.media,r=e.className;return(0,a.tZ)(a.HY,{children:!!t&&(0,a.tZ)(i(),{className:r,layout:"fill",src:t})})}function d(e){var t=e.media,r=e.disableLightbox,n=e.unoptimized,i=e.mediaMimeType,o=e.mediaSecondary,d=e.mediaSecondaryMimeType,f=e.autoPlay;switch(!0){case null==i?void 0:i.includes("text"):return(0,a.tZ)(c,{media:t});case null==i?void 0:i.includes("video"):return(0,a.tZ)(s,{autoPlay:f,controls:r,media:t});case null==i?void 0:i.includes("audio"):return(0,a.BX)("div",{className:"MediaContainerAudio",sx:{display:"flex",flexDirection:"column",width:"100%"},children:[o&&d.includes("image")?(0,a.tZ)(l,{media:o,sx:{width:"100%"}}):null,(0,a.tZ)(u,{media:t})]});case n:return(0,a.tZ)("img",{src:t});default:return(0,a.tZ)(l,{media:t})}}},22113:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(59499),i=r(50029),o=r(87794),a=r.n(o),c=r(9669),s=r.n(c),u=r(89755),l=r.n(u),d=r(67294),f=r(22982),h=r(31800),p=r(15277);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function g(e){var t=e.src,r=e.alt,n=e.className,o=e.isLoading,c=(0,d.useState)(""),u=c[0],v=c[1],g=!!t&&t.includes(h.cK)&&!!r,x=!!u&&!!r,y=(g||x)&&!o;return(0,d.useEffect)(function(){if(t&&!g){var e;(e=(0,i.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(t);case 3:v(t),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}},e,null,[[0,6]])})),function(){return e.apply(this,arguments)})()}},[t,g]),(0,p.tZ)(f.ZP,m(m({},e),{},{border:y,children:function(){switch(!0){case g:return(0,p.tZ)(l(),{alt:r,className:n,layout:"fill",src:t,sx:{borderRadius:"100%",objectFit:"cover"}});case x:return(0,p.tZ)("img",{alt:r,src:u,sx:{position:"absolute",height:"100%",width:"100%",objectFit:"cover",borderRadius:"100%",overflow:"hidden"}});case!o:return(0,p.tZ)(b,{});default:return null}}()}))}function b(){return(0,p.tZ)("svg",{fill:"rgba(var(--foreground), var(--shadeTextSecondary))",sx:{height:8,width:8},viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,p.tZ)("path",{clipRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",fillRule:"evenodd"})})}},57442:function(e,t,r){r.d(t,{I:function(){return a},t:function(){return c}});var n=r(16835),i=r(67294),o=r(15277),a=i.createContext({setSubscriberNft:function(){}}),c=function(e){var t=e.children,r=i.useState(void 0),c=(0,n.Z)(r,2),s=c[0],u=c[1];return(0,o.tZ)(a.Provider,{value:{subscriberNft:s,setSubscriberNft:u},children:t})}},32749:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(50029),i=r(87794),o=r.n(i),a=r(19485),c=r(67294),s=r(28465),u=r(22113),l=r(22982),d=r(1033),f=r(17243),h=r(1004),p=r(92366),v=r(15277),m={display:"flex",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",color:"text",lineHeight:1.4},g={fontWeight:525,color:"textSecondary",marginRight:2},b={mr:2,fontWeight:500,color:"rgb(var(--text))",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},x=["0xF9875C1544f2C9AeACEc50feD687D984dDAa9D00"];function y(e){var t=e.contributor,r=e.timestamp,i=e.className,y=e.nft,w=e.isWrappable,Z=e.isCondensed,O=e.label,k=e.iconSize,j=e.isLoading,P=(0,c.useState)(""),S=P[0],z=P[1];(0,c.useEffect)(function(){var e;(e=(0,n.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:z(null!=t&&t.displayName?a.isAddress(null==t?void 0:t.displayName)?(0,p.kS)(null==t?void 0:t.displayName):null==t?void 0:t.displayName:(0,p.kS)(null==t?void 0:t.address));case 2:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})()},[null==t?void 0:t.address,null==t?void 0:t.displayName]);var C=k&&k.includes("xs")?2:3,I=x.includes(null==t?void 0:t.address);return(0,v.BX)("div",{className:i,sx:m,children:[Z?null:(0,v.tZ)("div",{sx:{pointerEvents:"none",mr:C},children:(0,v.tZ)(u.Z,{alt:null==t?void 0:t.displayName,as:"div",isLoading:j,size:void 0!==k?k:l.am.sm,src:null==t?void 0:t.avatarURL,sx:{color:"currentColor"}})}),(0,v.BX)("div",{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flexWrap:w?"wrap":void 0},children:[(0,v.BX)("div",{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",mr:1,px:1,ml:"-0.25rem",width:!Z&&w?"100%":void 0},children:[Z?null:(0,v.BX)(v.HY,{children:[!j&&O?(0,v.tZ)("div",{sx:g,children:O}):null,(0,v.tZ)("div",{sx:b,children:j?(0,v.BX)(v.HY,{children:[(0,v.tZ)(d.Z,{height:"1.5em",width:"10em"})," "]}):null!=t&&t.href?(0,v.tZ)("a",{href:null==t?void 0:t.href,children:S}):S})]}),null!=t&&t.displayName&&null!=t&&t.address?(0,v.tZ)(s.Z,{address:null==t?void 0:t.address,href:null==t?void 0:t.href}):null]}),y&&!I?(0,v.tZ)(f.Z,{contributor:t,nft:y,sx:{mr:[2]}}):null,r?(0,v.tZ)("time",{className:i,sx:{display:"block",color:"rgba(var(--foreground), var(--shadeTextSecondary))",fontWeight:400,fontSize:Z?"md":"sm",whiteSpace:"nowrap"},children:(0,h.ig)(r)}):null]})]})}},32480:function(e,t,r){var n=r(15277);t.Z=function(e){var t=e.value,r=e.icon,i=e.className;return(0,n.BX)("div",{className:i,sx:{backgroundColor:"foregroundTertiary",px:[2,4],height:14,borderRadius:"xl",display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:500},children:[t,r]})}},81822:function(e,t,r){var n=r(59499),i=r(94234),o=r.n(i),a=r(92366),c=r(32480),s=r(15277);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}t.Z=function(e){return(0,s.tZ)(c.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({icon:(0,s.tZ)(o(),{sx:{height:"24px",width:"24px"}}),value:(0,a.kS)(e.address)},e))}},92490:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(15277);function i(e){var t=e.className,r=e.size,i=void 0===r?"24px":r;return(0,n.tZ)("svg",{className:t,fill:"none",stroke:"currentColor",style:{height:i,width:i},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.tZ)("path",{d:"M5 13l4 4L19 7",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})})}},38618:function(e,t,r){var n=r(59499),i=r(31389),o=r(79161),a=r(15277);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}t.Z=function(e){return(0,a.tZ)(i.Z,s(s({sx:{position:e.fixed?"fixed":"static",top:0,left:0,right:0,bottom:0,color:"text",flex:1}},e),{},{children:(0,a.tZ)(o.Z,{variant:"lg"})}))}},17243:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),i=r(70916),o=r(79161),a=r(39640),c=r(15277);function s(e){var t=e.hover,r=e.className,s=e.link,u=e.size,l=e.contributor,d=e.nft,f=u||"lg",h=function(e){switch(e){case"md":case"sm":return{strokeWidth:"4",space:2,sizeSpinner:"0.9rem",sizeIcon:"0.65rem"};default:return{strokeWidth:"3",space:2,sizeSpinner:"1em",sizeIcon:"1em"}}}(f);if(!d||!l)switch(!0){case"md"===f:return(0,c.tZ)(a.Z,{className:r,hover:t,size:"md",children:(0,c.tZ)(i.Z,{size:h.sizeIcon})});case"sm"===f:return(0,c.tZ)(a.Z,{className:r,hover:t,size:"sm",children:(0,c.tZ)(i.Z,{size:h.sizeIcon})});default:return(0,c.tZ)("div",{className:r,children:(0,c.tZ)(i.Z,{size:h.sizeIcon})})}var p="https://zora.co/".concat(l.address,"/").concat(d.tokenId),v=!d.tokenId,m=!1!==s,g=function(){return v?(0,c.BX)("div",{sx:{display:"flex",alignItems:"center"},children:[(0,c.tZ)(o.Z,{size:h.sizeSpinner,strokeWidth:h.strokeWidth,sx:{mr:h.space}}),(0,c.tZ)(i.Z,{size:h.sizeIcon})]}):(0,c.tZ)("div",{children:(0,c.tZ)(i.Z,{size:h.sizeIcon})})};switch(!0){case!v&&m&&"lg"===f:return(0,c.tZ)("a",{className:r,href:p,rel:"noreferrer",target:"_blank",children:g()});case!v&&m:return(0,c.tZ)(a.Z,{className:r,hover:m&&!v,size:f,children:(0,c.tZ)("a",{href:p,rel:"noreferrer",target:"_blank",children:g()})});case"md"===f||"sm"===f:return(0,c.tZ)(a.Z,{className:r,hover:m&&!v,size:f,children:g()});default:return(0,n.cloneElement)(g(),{className:r})}}},37437:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(11163),i=r(81933),o=r(15277);function a(e){var t=e.size,r=void 0===t?"24px":t,n=e.strokeWidth;return(0,o.tZ)("svg",{fill:"none",stroke:"currentColor",style:{height:r,width:r,display:"block"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.tZ)("path",{d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:void 0===n?2:n})})}var c=r(39640),s=function(e){var t=e.root,r=e.subdomain,s=e.href,u=e.target,l=(0,n.useRouter)().pathname,d=l.startsWith("/crowdfunds")||l.startsWith("/auctions")||l.startsWith("/splits");return!s||d?null:(0,o.tZ)(i.Z,{href:s,root:t,subdomain:r,target:void 0===u?"_blank":u,children:(0,o.tZ)(c.Z,{hover:!0,children:(0,o.tZ)(a,{size:"16px",strokeWidth:2.5})})})}},75594:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(41664),i=r.n(n),o=r(39890),a=r(40829),c=r(79161),s=r(45871),u=r(32427),l=r(15277),d=function(e){var t=e.onClose,r=e.transactionHash,n=e.heading,d=e.subheading,f=e.isDeploying,h=e.isRedirecting,p=e.mainCTAText,v=r?u.Z.createTxHashLink(r):null;return(0,l.BX)(s.Z,{isOpen:!0,onClose:t,children:[(0,l.BX)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",borderRadius:"lg",position:"relative"},children:[(0,l.tZ)("div",{sx:{mx:"auto",my:8},children:(0,l.tZ)(c.Z,{size:"48px",strokeWidth:"3",sx:{color:"accent"}})}),(0,l.tZ)("div",{sx:a.h2,children:n}),(0,l.tZ)("div",{sx:{my:4,color:"textSecondary",fontSize:"base"},children:d||"Your transaction has been sent. It may take several minutes for it to complete."})]}),f?null:(0,l.tZ)(o.ZP,{disabled:h,loading:h,sx:{justifyContent:"center"},variant:"highlight",onClick:t,children:p||"Close"}),v?(0,l.tZ)(i(),{href:v,target:"_blank",children:(0,l.tZ)(o.ZP,{sx:{justifyContent:"center",width:"100%"},variant:f?"highlight":"secondary",children:"View on Etherscan"})}):null]})}},37474:function(e,t,r){r.d(t,{_:function(){return n}});var n=r(67294).createContext(void 0)},72095:function(e,t,r){r.d(t,{Z:function(){return v}});var n,i=r(27812),o=r(50029),a=r(92777),c=r(82262),s=r(59499),u=r(87794),l=r.n(u),d=r(69884),f=(n=(0,o.Z)(l().mark(function e(){var t=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]&&t[0],e.abrupt("return",[]);case 2:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var v=new(function(){var e;function t(){(0,a.Z)(this,t),(0,s.Z)(this,"identities",void 0),(0,s.Z)(this,"unverifiedIdentities",void 0),this.unverifiedIdentities=null,this.identities=null}return(0,c.Z)(t,[{key:"getIdentities",value:(e=(0,o.Z)(l().mark(function e(){var t,r,n,o,a,c=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:{},!this.identities){e.next=3;break}return e.abrupt("return",this.identities);case 3:return e.next=5,f(t);case 5:if(r=e.sent){e.next=8;break}return e.abrupt("return",{});case 8:return n={username:"$ESSAY Crowdfund",account:"0x517bab7661c315c63c6465eed1b4248e6f7fe183",address:"0x517bab7661c315c63c6465eed1b4248e6f7fe183"},o=p(p({},r.find(function(e){return"jarroddicker"===e.username})),{},{account:"0x9F3Ab3265bA7B7c1dE7D3D7C9A6A06E63D30cCb8",address:"0x9F3Ab3265bA7B7c1dE7D3D7C9A6A06E63D30cCb8"}),a=(0,d.Z)([].concat((0,i.Z)(r),[n,o]),"account"),this.identities=a,e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})}],[{key:"getS3Url",value:function(){return"https://s3-us-west-2.amazonaws.com/write-race.mirror.xyz/identityV2.json"}}]),t}())},94724:function(e,t,r){var n=r(50029),i=r(92777),o=r(82262),a=r(87794),c=r.n(a),s=r(9669),u=r.n(s),l=r(92366),d=function(){var e,t,r;function a(){(0,i.Z)(this,a)}return(0,o.Z)(a,null,[{key:"ethInUsd",value:(e=(0,n.Z)(c().mark(function e(){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,u().get("https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=ethereum");case 4:return t=e.sent.data.ethereum.usd,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}},e,null,[[1,10]])})),function(){return e.apply(this,arguments)})},{key:"maticInUsd",value:(t=(0,n.Z)(c().mark(function e(){var t;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,u().get("https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=matic-network");case 4:return t=e.sent.data["matic-network"].usd,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}},e,null,[[1,10]])})),function(){return t.apply(this,arguments)})},{key:"ethToUsd",value:function(e){var t=e.ethValue,r=e.ethInUsd;return r&&t?(0,l._W)(t*r):"0.00"}},{key:"ethToUsdV2",value:(r=(0,n.Z)(c().mark(function e(t){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","0.00");case 2:return e.next=4,a.ethInUsd();case 4:return r=e.sent,e.abrupt("return",(0,l._W)(t*r));case 6:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)})}]),a}();t.Z=d},35346:function(e,t,r){function n(e){var t=e.includes("localhost"),r=e.split(".");if(!t&&3===r.length||t&&2===r.length){var n=r[0];if("www"===n)return;return n}}function i(e){var t=e.includes("localhost"),r=e.split(".");return(!t&&3===r.length||!!t&&2===r.length)&&"www"!==r[0]}r.d(t,{VW:function(){return n},YX:function(){return i}}),r(87794)},1194:function(e,t,r){r.d(t,{U:function(){return l}});var n=r(50029),i=r(87794),o=r.n(i),a=r(67294),c=r(69077),s=r(38716),u=r(67688);function l(){var e=(0,c.$4)({connector:s.yo}).connect;a.useEffect(function(){var t;(t=(0,n.Z)(o().mark(function t(){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((0,u.yq)()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,window.ethereum.request({method:"eth_accounts"});case 4:t.sent.length>0&&setTimeout(function(){return e()},0);case 7:case"end":return t.stop()}},t)})),function(){return t.apply(this,arguments)})()},[e])}}}]);