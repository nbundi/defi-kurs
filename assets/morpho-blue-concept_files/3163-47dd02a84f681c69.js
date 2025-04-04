"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3163],{50312:function(e,t,r){var n=r(59499),i=r(67294),o=r(15277);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}t.Z=function(e){var t=e.options,r=e.Component,n=e.id,l=e.callback,c=e.skip,d=void 0!==c&&c,u=e.componentProps,s=(0,i.useRef)(null);return(0,i.useEffect)(function(){var e;return!d&&s.current&&(e=new window.IntersectionObserver(l(n),t)).observe(s.current),function(){e&&e.disconnect()}},[l,n,t,d]),(0,o.tZ)(r,a(a({},u),{},{ref:s}))}},2146:function(e,t,r){r.d(t,{T:function(){return et}});var n=r(19155),i=r(99816),o=r(18913),l=r(92366),a=r(78242),c=r(84186),d=r(46685),u=r(27812),s=r(16835),f=r(59499),p=r(50029),v=r(87794),h=r.n(v),m=r(71641),g=r(93205),b=r(67294),y=r(86931),x=r(25819),Z=r(94371),w=r(15531),O=r(35266),j=r(14154),C=r(58315),S=r(16675),k=r(68288),P=r(75938),A=r(28274),B=r(37477),z=r(94645),I=r(41664),N=r.n(I),D=r(6289),T=r(20946),H=r(7286),X=r(50312),E=r(33751),L=r(1011),M=r(73401),R=r(54725),W=r(15277),_=b.memo(function(e){var t,r,n,o=e.page,a=e.numSold,c=e.proxyAddress,d=e.digest,u=b.useRef(new Set),f=b.useState(!1),p=(0,s.Z)(f,2),v=p[0],h=p[1],y=b.useCallback(function(e){return function(t){var r=(0,s.Z)(t,1)[0];r&&r.isIntersecting&&(0===u.current.size&&h(!0),u.current.add(e))}},[]),x=(0,M.r3)({page:o,numSold:a,pageCount:M.vD}),Z=null===(t=(0,m.a)(O.nbc,{variables:{proxyAddress:c,tokenIds:x},fetchPolicy:"cache-first",skip:!v}))||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:null===(n=r.writingNFTCollections)||void 0===n?void 0:n.collections;return(0,W.tZ)(W.HY,{children:x.map(function(e,t){var r,n,o,a,c,u,s=Z&&Z[t],f=s?null===(r=(0,i.LR)(s.project))||void 0===r?void 0:r.value:null,p=!Z,v=(0,W.tZ)(W.HY,{children:(0,W.BX)(g.sI,{loading:p,children:[(0,W.tZ)(E.H,{project:null!==(n=null==s?void 0:s.project)&&void 0!==n?n:void 0,source:"collector_list",children:(0,W.BX)(g.Kq,{align:"center",direction:"horizontal",space:"8px",children:[(0,W.tZ)(g.Od,{radius:"full",children:(0,W.tZ)(g.qE,{address:null!==(o=null==s?void 0:s.address)&&void 0!==o?o:void 0,ensAvatarHook:L.u,label:null==s?void 0:s.address,size:"20px",src:null!==(a=null==s?void 0:null===(c=s.project)||void 0===c?void 0:c.avatarURL)&&void 0!==a?a:void 0})}),p&&(0,W.tZ)(g.Od,{children:(0,W.tZ)(g.xv,{size:"small",children:"LOADING TEXT"})}),f?(0,W.BX)(W.HY,{children:[(0,W.tZ)(g.xu,{className:T.U4,fontWeight:"semiBold",children:(0,l.aS)(f,20)}),(null==s?void 0:s.address)&&(0,W.tZ)(g.Vp,{size:"small",children:s.address.slice(0,6)})]}):(0,W.tZ)(g.xu,{className:T.U4,fontWeight:"semiBold",children:(0,l.kS)(null!==(u=null==s?void 0:s.address)&&void 0!==u?u:"")})]})}),(0,W.BX)(g.xu,{className:T.qj,color:e<4?"accent":"textTertiary",fontWeight:"semiBold",children:["#",e]})]})}),h=(0,W.tZ)(X.Z,{Component:g.xu,callback:y,componentProps:{alignItems:"center",display:"flex",flexShrink:0,height:"20px",justifyContent:"space-between",paddingX:{xs:"16px",md:"24px"},position:"relative",zIndex:"0",children:v},id:e}),m=(0,i.no)({project:null==s?void 0:s.project,fallbackAddress:null==s?void 0:s.address}),x=m?m+"/collection":null,w=x?(0,W.tZ)(N(),{href:x,onClick:function(){R.lF(d)},children:h}):h;return(0,W.tZ)(b.Fragment,{children:w},e)})})}),F=function(e){var t=e.numSold,r=e.onBecomeACollectorPress,n=e.onClose,i=e.proxyAddress,o=e.href,l=e.digest;return(0,W.tZ)(g.xu,{backgroundColor:"background",borderBottomRadius:{xs:"none",sm:"2xLarge"},borderRadius:"2xLarge",display:"flex",maxWidth:{sm:"384px"},overflow:"hidden",width:"full",children:(0,W.BX)(g.xu,{display:"flex",flexDirection:"column",flexGrow:1,children:[(0,W.BX)(g.xu,{alignItems:"center",backgroundColor:"foregroundTertiary",borderBottomWidth:"1px",className:D.Ly,display:"flex",flexShrink:0,height:"56px",justifyContent:"space-between",paddingX:{xs:"16px",md:"24px"},children:[(0,W.tZ)(g.xu,{as:"button",cursor:"pointer",onClick:n,children:(0,W.tZ)(g.xv,{color:"textSecondary",size:"small",weight:"semiBold",children:"Close"})}),(0,W.tZ)(g.xu,{className:T.U4,children:(0,W.tZ)(g.xv,{weight:"semiBold",children:(0,H._)({count:null!=t?t:0,one:"Collector",other:"Collectors"})})}),r?(0,W.tZ)(g.xu,{as:"button",cursor:"pointer",onClick:function(){R.qe(l),n(),r()},children:(0,W.tZ)(g.xv,{color:"accent",size:"small",weight:"semiBold",children:"Mint"})}):o&&(0,W.tZ)(N(),{href:o,legacyBehavior:!0,passHref:!0,children:(0,W.tZ)(g.xu,{as:"a",children:(0,W.tZ)(g.xv,{color:"accent",size:"small",weight:"semiBold",children:"View Entry"})})})]}),(0,W.tZ)(Z.L,{size:"24px"}),(0,W.tZ)(g.Kq,{direction:"vertical",space:"12px",children:!!t&&Array.from({length:(0,M.CO)({index:Math.min(t,M.IM)-1,pageCount:M.vD})},function(e,r){var n=r+1;return(0,W.tZ)(_,{digest:l,numSold:Math.min(t,M.IM),page:n,proxyAddress:i},n)})}),(0,W.tZ)(Z.L,{size:"24px"})]})})},V=r(95084),U=r(95549),$=r(7337),q=r(51237),Y=r(8120),K=r(3767);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(t){(0,f.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var J={"&::after":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",border:function(e){return"1px solid ".concat(e.colors.foregroundTertiary)},borderLeft:function(e){return[0,0,"1px solid ".concat(e.colors.foregroundTertiary)]},borderRight:function(e){return[0,0,"1px solid ".concat(e.colors.foregroundTertiary)]},borderTop:function(e){return[0,0,"1px solid ".concat(e.colors.foregroundTertiary)]},borderRadius:[null,null,"md"],zIndex:2}};function ee(e){var t,r,n,o,a,c,f,v,I,N,D=e.body,T=e.contributors,H=e.coverImage,X=e.digest,E=e.member,L=e.project,M=e.publishStatus,_=e.publishedAtTimestamp,G=e.timestamp,ee=e.title,et=e.web3Details,er=e.hasWnft,en=e.isWnftIframe,ei=e.collectedBy;(0,C.$)("wnft__entry_read",{skip:!X,key:X,properties:(t=(0,p.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Q,e.t1=Q,e.t2={},e.next=5,R.Hq({digest:X});case 5:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.t5={},e.t6={source__:X},e.abrupt("return",(0,e.t0)(e.t4,e.t5,e.t6));case 10:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})}),(0,j.t_)("collectors","true",function(){return ef("card_link")});var eo=b.useContext(d.i),el=b.useContext(x.V),ea=null===(r=(0,m.a)(O.HDU,X?{variables:{digest:X}}:{skip:!0}).data)||void 0===r?void 0:null===(n=r.entry)||void 0===n?void 0:n.writingNFT,ec=b.useState(null),ed=(0,s.Z)(ec,2),eu=ed[0],es=ed[1],ef=b.useCallback(function(e){e?R.LX(X,e):R.cV(X),es(e)},[X]),ep=[].concat((0,u.Z)(et.transactionId?[{name:"Arweave Transaction",value:(0,l.kS)(et.transactionId,15),href:"https://viewblock.io/arweave/tx/".concat(et.transactionId)}]:[]),[{name:"Author Address",value:(0,l.kS)(null==et?void 0:et.ethAddress,15),href:"https://etherscan.io/address/".concat(null==et?void 0:et.ethAddress)}],(0,u.Z)(ea&&null!=ea&&null!==(o=ea.purchases)&&void 0!==o&&o.numSold?[{name:"Nft Address",value:(0,l.kS)(ea.proxyAddress,15),href:(0,B.n)({type:"collection",collectionAddress:ea.proxyAddress,chainId:null==ea?void 0:null===(a=ea.network)||void 0===a?void 0:a.chainId})}]:[]),[{name:"Content Digest",value:(0,l.kS)(et.digest,15)}]),ev=(0,k.d)(M,P.V.DRAFT);return(0,W.BX)(W.HY,{children:[(0,W.BX)(g.Kq,{direction:"vertical",space:"0px",children:[!!H&&!en&&(0,W.tZ)(g.xu,{marginBottom:"24px",marginTop:"24px",marginX:"auto",maxWidth:"screenMd",paddingX:{xs:"16px",md:"24px"},width:"full",children:(0,W.tZ)(g.xu,{borderRadius:{xs:"medium",md:"medium"},overflow:"hidden",position:"relative",children:(0,W.tZ)(Y.v,{src:H,sx:J,unoptimized:!0})})}),(0,W.tZ)(K.h,{isFeaturedTitle:!H&&!en,title:ee}),(0,W.tZ)(Z.L,{size:"16px"}),L&&E?(0,W.BX)(W.HY,{children:[(0,W.tZ)(g.xu,{marginX:"auto",maxWidth:"screenMd",paddingX:{xs:"16px",sm:"24px"},width:"full",children:(0,W.tZ)(V.Z,{author:E,collectedBy:ei,contributors:T,digest:X,isDraft:ev,isWnftIframe:en,publication:L,publishedAtTimestamp:_,setIsWnftCollectorsModalOpen:function(){ef("byline")},timestamp:G})}),(0,W.tZ)(Z.L,{size:"32px"})]}):null,(0,W.tZ)(q.Z,{body:D}),(0,W.tZ)(Z.L,{size:{xs:"48px",md:"64px"}}),(0,W.BX)(g.xu,{display:"flex",flexDirection:"column",gap:"16px",marginX:"auto",maxWidth:"screenMd",paddingX:{xs:"16px",md:"24px"},width:"full",children:[!en&&(0,W.tZ)(g.xu,{backgroundColor:"foregroundTertiary",borderRadius:"2xLarge",padding:"16px",width:"full",children:(0,W.BX)(g.Kq,{align:{md:"center"},direction:{xs:"vertical",md:"horizontal"},justify:"space-between",children:[(0,W.BX)(g.Kq,{space:"8px",children:[(0,W.tZ)(g.xv,{lineHeight:"none",size:"extraSmall",weight:"semiBold",children:A.El.subscribeTitle(null===(c=(0,i.pY)(L))||void 0===c?void 0:c.value)}),(0,W.tZ)(g.xv,{color:"textSecondary",lineHeight:"none",size:"extraSmall",children:A.El.subscribeDesc})]}),(0,W.tZ)(y.Z,{background:!0,projectAddress:null==L?void 0:L.address,source:"EntryFooter"})]})}),er&&!en&&(0,S.ll)(null==ea?void 0:ea.factoryAddress)&&(0,W.tZ)($.S,{baseURL:"".concat((0,i.no)({project:null==ea?void 0:null===(f=ea.publisher)||void 0===f?void 0:f.project}),"/").concat(X)}),(0,W.BX)(g.Kq,{direction:{xs:"vertical",md:"horizontal"},space:"16px",children:[er&&!en&&(0,W.tZ)(z._,{collectedBy:ei,digest:X,numSold:null==ea?void 0:null===(v=ea.purchases)||void 0===v?void 0:v.numSold,setIsWnftCollectorsModalOpen:function(){ef("footer")},wnftMediaUrl:null==ea?void 0:null===(I=ea.media)||void 0===I?void 0:I.url}),(0,W.BX)(g.xu,{backgroundColor:"foregroundTertiary",borderRadius:"2xLarge",display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1,justifyContent:"space-between",padding:"16px",width:"full",children:[(0,W.BX)(g.xu,{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px",children:[(0,W.tZ)(g.xv,{lineHeight:"none",size:"extraSmall",weight:"semiBold",children:"Verification"}),(0,W.tZ)(g.xv,{color:"textSecondary",size:"extraSmall",children:"This entry has been permanently stored onchain and signed by its creator."})]}),(0,W.tZ)(g.xu,{borderColor:"foregroundSecondary",borderRadius:"large",borderWidth:"1px",display:"flex",flexDirection:"column",overflow:"hidden",children:ep.map(function(e,t){return(0,W.BX)(g.xu,Q(Q({borderBottomWidth:ep.length-1===t?void 0:"1px",borderColor:"foregroundSecondary",paddingX:"12px",paddingY:"8px"},e.href?{as:"a",href:e.href,target:"_blank",rel:"noopener noreferrer",display:"block",transitionProperty:"colors",transitionDuration:"150",backgroundColor:{hover:"foregroundTertiary"},color:{base:"textTertiary",hover:"textSecondary"}}:{color:"textTertiary"}),{},{children:[(0,W.BX)(g.Kq,{align:"center",direction:"horizontal",space:"6px",children:[(0,W.tZ)(g.xu,{fontFamily:"mono",fontWeight:"medium",style:{fontSize:"0.625rem"},textTransform:"uppercase",children:e.name}),e.href&&(0,W.tZ)(g.xu,{style:{transform:"rotate(-45deg)"},children:(0,W.tZ)(g.Ec,{size:"10px"})})]}),(0,W.tZ)(g.xu,{fontFamily:"mono",fontSize:"label",lineHeight:"normal",children:e.value})]}),e.name)})})]})]})]}),(0,W.tZ)(Z.L,{size:"64px"}),!en&&(0,W.tZ)(U.n,{digest:X,publication:L})]}),!!er&&(0,W.tZ)(w.Z,{isOpen:null!==eu,onClose:function(){ef(null)},children:(0,W.tZ)(F,{digest:X,numSold:null==ea?void 0:null===(N=ea.purchases)||void 0===N?void 0:N.numSold,proxyAddress:null==ea?void 0:ea.proxyAddress,onBecomeACollectorPress:function(){X&&(null==el||el("CollectorsModal","entry_page",X,!1,eo))},onClose:function(){ef(null)}})})]})}function et(e){var t,r,u,s,f,p,v,h,m,g,b,y,x,Z,w,O,j,C,S,k,P,A,B,z,I,N,D,T,H,X,E,L,M,R,_,F,V,U,$=e.entry,q=e.wnft,Y=e.isWnftIframe,K=e.referrerAddress,G=null===(t=(0,i.pY)(null==$?void 0:null===(r=$.publisher)||void 0===r?void 0:r.project))||void 0===t?void 0:t.value,Q=(0,l.aS)(null==$?void 0:$.title,64).replace("# ",""),J=null==$?void 0:null===(u=$.featuredImage)||void 0===u?void 0:u.url,et=null==$?void 0:$.settings,er=(0,o.DK)($),en=(null==et?void 0:null===(s=et.metaImage)||void 0===s?void 0:s.url)||J,ei=(null==et?void 0:et.title)||Q,eo=!!(null!=q&&q._id),el=null!=q&&null!==(f=q.network)&&void 0!==f&&f.chainId&&null!=q&&q.proxyAddress?"eip155:".concat(q.network.chainId,":").concat(q.proxyAddress):void 0,ea=eo?"".concat((0,a.FF)(),"://").concat((0,a.vm)(),"/api/frame/entry/initial-wnft?projectAddress=").concat(null==$?void 0:null===(p=$.publisher)||void 0===p?void 0:null===(v=p.project)||void 0===v?void 0:v.address,"&digest=").concat(null==$?void 0:$.digest):"".concat((0,a.FF)(),"://").concat((0,a.vm)(),"/api/frame/entry/initial?projectAddress=").concat(null==$?void 0:null===(h=$.publisher)||void 0===h?void 0:null===(m=h.project)||void 0===m?void 0:m.address,"&digest=").concat(null==$?void 0:$.digest);return(0,W.tZ)(c.G.Provider,{value:null!==(g=null==$?void 0:$.digest)&&void 0!==g?g:void 0,children:(0,W.BX)(d.i.Provider,{value:K,children:[(0,W.tZ)(n.Fb,{description:er,fcFrame:{frameVersion:"vNext",image:"".concat((0,a.FF)(),"://").concat((0,a.vm)(),"/api/frame/images/entry-square?").concat(new URLSearchParams({projectAddress:null!==(b=null==$?void 0:null===(y=$.publisher)||void 0===y?void 0:null===(x=y.project)||void 0===x?void 0:x.address)&&void 0!==b?b:"",title:null!==(Z=null==$?void 0:$.title)&&void 0!==Z?Z:"",featuredImageUrl:null!==(w=null==$?void 0:null===(O=$.featuredImage)||void 0===O?void 0:O.url)&&void 0!==w?w:""}).toString()),buttons:eo?[el?{action:"mint",label:"Mint",target:el}:{action:"post_redirect",label:"Mint"},{action:"post_redirect",label:"Read on Mirror"},{label:"Subscribe \uD83D\uDD14"}]:[{action:"post_redirect",label:"Read on Mirror"},{label:"Subscribe \uD83D\uDD14"}],postUrl:ea,aspectRatio:"1:1"},openGraph:{description:er,image:en||(null==$?void 0:null===(j=$.publisher)||void 0===j?void 0:null===(C=j.project)||void 0===C?void 0:C.avatarURL)||"https://mirror.xyz/images/social-fallback.png",title:ei},title:"".concat(Q," — ").concat(G),twitter:{card:en?"summary_large_image":"summary"}}),(0,W.tZ)(ee,{body:null!==(S=null==$?void 0:$.body)&&void 0!==S?S:void 0,collectedBy:null==$?void 0:null===(k=$.collectorBubbles)||void 0===k?void 0:k.filter(Boolean),contributors:null!==(P=null==$?void 0:null===(A=$.collaborators)||void 0===A?void 0:A.filter(Boolean))&&void 0!==P?P:void 0,coverImage:null!==(B=null==$?void 0:null===(z=$.featuredImage)||void 0===z?void 0:z.url)&&void 0!==B?B:void 0,digest:null!==(I=null==$?void 0:$.digest)&&void 0!==I?I:void 0,hasWnft:eo,isWnftIframe:Y,member:null!==(N=null==$?void 0:null===(D=$.publisher)||void 0===D?void 0:D.member)&&void 0!==N?N:void 0,project:null!==(T=null==$?void 0:null===(H=$.publisher)||void 0===H?void 0:H.project)&&void 0!==T?T:void 0,publishStatus:null!==(X=null==$?void 0:$.publishStatus)&&void 0!==X?X:void 0,publishedAtTimestamp:null!==(E=null==$?void 0:$.publishedAtTimestamp)&&void 0!==E?E:void 0,timestamp:null!==(L=null==$?void 0:$.timestamp)&&void 0!==L?L:void 0,title:null!==(M=null==$?void 0:$.title)&&void 0!==M?M:void 0,web3Details:{transactionId:null!==(R=null==$?void 0:null===(_=$.arweaveTransactionRequest)||void 0===_?void 0:_.transactionId)&&void 0!==R?R:void 0,ethAddress:null!==(F=null==$?void 0:null===(V=$.publisher)||void 0===V?void 0:null===(U=V.member)||void 0===U?void 0:U.address)&&void 0!==F?F:void 0,digest:(null==$?void 0:$.digest)||void 0}})]})})}},51237:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(59499),i=r(67294),o=r(71379),l=r(40829),a=r(15277);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){var t=e.body,r=e.children,n=e.className,c=i.useMemo(function(){return(0,o.Z)().processSync(t).result},[t]);return(0,a.BX)("div",{className:n,sx:d(d({},l.kQ),{},{".katex-html":{display:"none"}}),children:[r,c]})}},71379:function(e,t,r){r.d(t,{Z:function(){return et}});var n=r(67294),i=r(35768),o=r(97871),l=r(11973),a=r(51356),c=r(59457),d=r(95988),u=r(78825),s=r(14193),f=r(82420),p=r(69380),v=r(59499),h=r(22073),m=r(15277);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t=e["data-mirror"],r=n.useMemo(function(){if("string"==typeof t){var e,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}}(e))){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw o}}}}(h.r.values());try{for(r.s();!(e=r.n()).done;){var n=e.value,i=n.matcher(t);if(i)return{href:t,matches:i,embed:n}}}catch(e){r.e(e)}finally{r.f()}}},[t]);return r?(0,m.tZ)(r.embed.component,{attrs:{href:r.href,matches:r.matches},isEditable:!1,isSelected:!1,renderContext:"entry"}):(0,m.tZ)("div",{children:(0,m.tZ)("figure",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,v.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})}var x=r(25675),Z=r.n(x),w=r(11714),O=r(31800);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){(0,v.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function S(e){var t,r=e.src,n=e.alt,i=e.className;if(!r||r.startsWith("/"))return(0,m.tZ)(m.HY,{children:r});try{t=new URL(r)}catch(e){return null}var o=new URLSearchParams(t.search),l=o.get("height"),a=o.get("width"),c=r.includes(O.cK)&&a&&l&&!r.includes(".svg"),d=l&&a?parseInt(l)/parseInt(a)*100+"%":void 0;t.searchParams.delete("height"),t.searchParams.delete("width"),t.searchParams.delete("size"),t.searchParams.delete("hide");var u=t.toString(),s=function(){return c&&u&&!u.includes(".gif")?(0,m.tZ)(Z(),{alt:n||"",height:l,loading:"lazy",quality:75,sizes:"min(100vw, 760px)",src:u,style:{height:"auto",width:function(){try{var e=parseFloat(a);if(isNaN(e))throw Error();return e}catch(e){return}}(),maxWidth:"100%",maxHeight:"100%"},unoptimized:!0,width:a}):(0,m.BX)("div",{sx:{position:"relative",height:"100%",width:"100%"},children:[(0,m.tZ)("img",{alt:n,src:u,sx:C(C({},d?{height:"100%",width:"100%",position:"absolute"}:{}),{},{maxWidth:"100%",maxHeight:"100%"})}),d?(0,m.tZ)("div",{sx:d?{paddingBottom:d}:{}}):null]})};return"zoom"===i?(0,m.tZ)(w.Z,{overlayBgColorEnd:"rgba(var(--background), 1)",overlayBgColorStart:"rgba(var(--background), 0)",children:s()}):s()}var k=/^(?:\w+:)?\/\/(\S+)$/;function P(e){var t,r,n,i=(r=(t=e.href||"").startsWith("/")||t.startsWith("#"),{href:(n=!!t.match(k))||r?t:"http://"+t,isExternal:n,isLocal:r}),o=i.href,l=i.isExternal;return(0,m.tZ)("a",{href:o,rel:"noreferrer",target:l?"_blank":"",children:e.children})}var A=r(99883),B=r(71870),z=r(31871),I=r(48574),N=r(87733),D=r(22374),T=r(49810),H=r(89999),X=r(26130),E=r(89267),L=r(78990),M=r(86927),R=r(78787),W=r(27632),_=r(6393);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}B.$.register(H.Z),B.$.register(T.Z),B.$.register(W.Z),B.$.register(N.Z),B.$.register(z.Z),B.$.register(I.Z),B.$.register(D.Z),B.$.register(M.Z),B.$.register(L.Z),B.$.register(R.Z),B.$.register(E.Z),B.$.register(X.Z),B.$.alias({jsx:["js"]});var V=function(e){var t,r,n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}}(e))){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw o}}}}((null===(t=e.properties)||void 0===t?void 0:t.className)||[]);try{for(n.s();!(r=n.n()).done;){var i=r.value;if("language-"===i.slice(0,9))return i.slice(9).toLowerCase()}}catch(e){n.e(e)}finally{n.f()}return null},U=function(e){return function(t){(0,_.Vn)(t,"element",function(t,r,n){if(n&&"pre"===n.tagName&&"code"===t.tagName){var i,o=V(t);if(null!==o){try{n.properties.className=(n.properties.className||[]).concat("language-"+o),i=B.$.highlight((0,A.B)(t),o)}catch(t){if(null!=e&&e.ignoreMissing&&/Unknown language/.test(t.message))return;throw t}t.children=i.children}}})}},$=r(96484);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach(function(t){(0,v.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var K=function(e,t){var r=e.properties;if((null==r?void 0:r.src)==="")return(0,$.h)("div");var n=t.className,i=new URL(null==r?void 0:r.src),o=new URLSearchParams(i.search),l=o.get("hide"),a="string"==typeof(null==r?void 0:r.alt)&&r.alt.trim().length>0&&"image"!==r.alt.toLowerCase()&&"caption"!==r.alt.toLowerCase()?r.alt:"",c=o.get("size"),d=[n,c?"figure-size-"+c:null].join(" ");return(0,$.h)("figure",{class:d,style:l?"display: none":""},[(0,$.h)("img",Y(Y({},r),{},{className:t&&t.zoom?" zoom":""})),a?(0,$.h)("figcaption",a):""])},G=function(e){var t=e&&e.className||"rehype-figure";return function(e){try{(0,_.Vn)(e,{tagName:"p"},function(r,n){var i=r.children.filter(function(e){return Q(e)}).map(function(e){return"element"!==e.type?void 0:"img"===e.tagName?K(Q(e),{zoom:!0,className:t}):"a"===e.tagName&&e.properties&&!Array.isArray(e.properties)?(e.properties.target="_blank",e.children[0]=K(Q(e),{zoom:!1,className:t}),e):void 0});0!==i.length&&(e.children[n]=1===i.length?i[0]:e.children[n]=(0,$.h)("div",{class:"".concat(t,"-container")},i))})}catch(e){return}}};function Q(e){var t;switch(!0){case"img"===e.tagName:return e;case"a"===e.tagName&&(null===(t=e.children[0])||void 0===t?void 0:t.tagName)==="img":return e.children[0];default:return}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var ee=function(){return function(e){(0,_.Vn)(e,{tagName:"p"},function(t,r,n){if(t.children.length&&1===t.children.length&&null!=t&&null!==(i=t.children)&&void 0!==i&&i[0]&&"tagName"in(null==t?void 0:null===(o=t.children)||void 0===o?void 0:o[0])&&(null==t?void 0:null===(l=t.children)||void 0===l?void 0:l[0].tagName)==="a"&&Array.isArray(null==t?void 0:null===(a=t.children)||void 0===a?void 0:a[0].children)&&(null==t?void 0:null===(c=t.children)||void 0===c?void 0:null===(d=c[0].children[0])||void 0===d?void 0:d.tagName)!=="img"&&(null==n?void 0:n.type)==="root"){var i,o,l,a,c,d,u,s,f,p,v=null===(u=t.children)||void 0===u?void 0:null===(s=u[0])||void 0===s?void 0:null===(f=s.properties)||void 0===f?void 0:f.href,m=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,t)}}(e))){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw o}}}}(h.r.values());try{for(m.s();!(p=m.n()).done;)if(p.value.matcher(v)){e.children[r]=(0,$.h)("figure",{"data-mirror":v});break}}catch(e){m.e(e)}finally{m.f()}}})}};function et(){return(0,p.l)().use(s.Z).use(u.Z,{singleDollarTextMath:!1}).use(d.Z).use(a.Z).use(c.Z).use(f.Z).use(l.Z,{prefix:"heading-"}).use(G).use(ee).use(U,{ignoreMissing:!0}).use(i.Z).use(o.Z,{createElement:n.createElement,components:{a:P,img:S,figure:y}})}},8120:function(e,t,r){r.d(t,{v:function(){return l}});var n=r(89755),i=r.n(n);r(67294);var o=r(15277),l=function(e){var t=e.src,r=e.className,n=e.unoptimized,l=e.reserveSpace;return(0,o.BX)("div",{className:r,sx:{backgroundColor:"foregroundTertiary",position:"relative"},children:[(0,o.tZ)(i(),{layout:"fill",quality:"100",src:t,sx:{objectFit:"cover"},unoptimized:n}),!1!==l?(0,o.tZ)("div",{sx:{paddingBottom:"50% "}}):null]})}},3767:function(e,t,r){r.d(t,{G:function(){return d},h:function(){return u}});var n=r(93205),i=r(41664),o=r.n(i),l=r(67294),a=r(62359),c=r(15277),d={color:"primary",fontSize:["3xl","4xl","5xl"],fontWeight:600,letterSpacing:["snug","tight"],lineHeight:[1.3,1.1]},u=function(e){var t=e.href,r=e.isFeaturedTitle,i=e.title,d=l.useMemo(function(){return i.trim().split(/\s/).reduce(function(e,t,r,n){var i,o,l=null!==(i=null===(o=n[r-1])||void 0===o?void 0:o.length)&&void 0!==i?i:0;return 0===r?t:r===n.length-1&&l+1+t.length<=16?e+"\xa0"+t:e+" "+t},"")},[i]),u=r?(0,c.tZ)(n.xu,{className:a.V,children:d}):(0,c.tZ)(n.xu,{className:a.q,children:d});return t?(0,c.tZ)(n.xu,{marginX:"auto",width:"full",children:(0,c.tZ)(o(),{href:t,passHref:!0,children:u})}):(0,c.tZ)(n.xu,{marginX:"auto",width:"full",children:u})}},94645:function(e,t,r){r.d(t,{_:function(){return f}});var n=r(93205),i=r(25675),o=r.n(i),l=r(67294),a=r(25819),c=r(86757),d=r(1011),u=r(46685),s=r(15277),f=function(e){var t,r=e.setIsWnftCollectorsModalOpen,i=e.numSold,f=e.collectedBy,p=e.wnftMediaUrl,v=e.digest,h=l.useContext(u.i),m=l.useContext(a.V),g=(0,c.i)(f),b=null===(t=null!=i?i:0)||void 0===t?void 0:t.toLocaleString(void 0,{notation:"compact"});return(0,s.tZ)(n.xu,{backgroundColor:"foregroundTertiary",borderRadius:"2xLarge",display:"flex",flexGrow:1,flexShrink:1,minHeight:"288px",padding:"16px",paddingTop:"32px",width:"full",children:(0,s.BX)(n.xu,{alignItems:"center",display:"flex",flexDirection:"column",flexGrow:1,gap:"16px",justifyContent:"center",children:[(0,s.tZ)(n.xu,{aspectRatio:"1/1",backgroundColor:"foregroundTertiary",borderRadius:"2xLarge",overflow:"hidden",position:"relative",width:"192px",children:!!p&&(0,s.BX)(s.HY,{children:[(0,s.tZ)(o(),{alt:"Nft graphic",fill:!0,quality:90,sizes:"192px",src:p,style:{objectFit:"cover",cursor:"pointer"},unoptimized:!0,onClick:function(){v&&(null==m||m("footer","entry_page",v,!1,h))}}),(0,s.tZ)(n.xu,{borderColor:"foreground",borderRadius:"2xLarge",borderWidth:"2px",bottom:"0px",left:"0px",pointerEvents:"none",position:"absolute",right:"0px",style:{opacity:.05},top:"0px"})]})}),(0,s.tZ)(n.xv,{align:"center",color:"textSecondary",size:"extraSmall",children:"Mint this entry as an NFT to add it to your collection."}),(0,s.tZ)(n.zx,{size:"small",variant:"secondary",width:"full",onClick:function(){v&&(null==m||m("footer","entry_page",v,!1,h))},children:"Mint"}),!!i&&(0,s.tZ)(n.xu,{alignItems:"center",as:"button",cursor:"pointer",display:"flex",flexDirection:"row",onClick:r,children:(0,s.tZ)(n.HE,{ensAvatarHook:d.u,hover:!0,members:g,size:"20px",tag:"".concat(b," Collected"),tagTone:"background"})})]})})}},15606:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(15277);function i(e){var t=e.className,r=e.style;return(0,n.BX)("svg",{className:t,fill:"none",height:"16",style:r,viewBox:"0 0 33 16",width:"33",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.tZ)("path",{d:"M7.3271 12V4.72727H12.0572V5.83168H8.64457V7.80611H11.8122V8.91051H8.64457V10.8956H12.0856V12H7.3271ZM19.2779 4.72727V12H18.106L14.6792 7.04616H14.6188V12H13.3013V4.72727H14.4803L17.9036 9.68466H17.9675V4.72727H19.2779ZM24.5658 6.72656C24.5327 6.41643 24.393 6.17495 24.1468 6.00213C23.903 5.82931 23.5857 5.7429 23.1951 5.7429C22.9205 5.7429 22.6849 5.78433 22.4884 5.86719C22.2919 5.95005 22.1416 6.0625 22.0374 6.20455C21.9333 6.34659 21.88 6.50876 21.8776 6.69105C21.8776 6.84257 21.912 6.97396 21.9806 7.08523C22.0516 7.1965 22.1475 7.29119 22.2683 7.36932C22.389 7.44508 22.5228 7.509 22.6695 7.56108C22.8163 7.61316 22.9643 7.65696 23.1134 7.69247L23.7952 7.86293C24.0699 7.92685 24.3338 8.01326 24.5871 8.12216C24.8428 8.23106 25.0713 8.36837 25.2725 8.53409C25.4761 8.69981 25.6371 8.89986 25.7555 9.13423C25.8738 9.36861 25.933 9.64323 25.933 9.9581C25.933 10.3842 25.8241 10.7595 25.6063 11.0838C25.3885 11.4058 25.0737 11.6579 24.6617 11.8402C24.2522 12.0201 23.7562 12.1101 23.1738 12.1101C22.608 12.1101 22.1167 12.0225 21.7001 11.8473C21.2858 11.6721 20.9614 11.4164 20.7271 11.0803C20.4951 10.7441 20.3696 10.3345 20.3506 9.85156H21.6468C21.6657 10.1049 21.7439 10.3156 21.8812 10.4837C22.0185 10.6518 22.1972 10.7772 22.4174 10.8601C22.6399 10.9429 22.8885 10.9844 23.1631 10.9844C23.4496 10.9844 23.7005 10.9418 23.916 10.8565C24.1338 10.7689 24.3042 10.6482 24.4273 10.4943C24.5505 10.3381 24.6132 10.1558 24.6156 9.94744C24.6132 9.75805 24.5576 9.6018 24.4487 9.47869C24.3398 9.35322 24.1871 9.24905 23.9906 9.16619C23.7964 9.08097 23.5692 9.00521 23.3087 8.93892L22.4813 8.72585C21.8824 8.57197 21.4089 8.33878 21.0609 8.02628C20.7152 7.71141 20.5424 7.29356 20.5424 6.77273C20.5424 6.34422 20.6584 5.96899 20.8904 5.64702C21.1248 5.32505 21.4432 5.07528 21.8457 4.89773C22.2481 4.7178 22.7039 4.62784 23.2129 4.62784C23.729 4.62784 24.1811 4.7178 24.5694 4.89773C24.96 5.07528 25.2666 5.32268 25.4891 5.63991C25.7117 5.95478 25.8265 6.317 25.8336 6.72656H24.5658Z",fill:"var(--colors-textTertiary)"}),(0,n.tZ)("rect",{fill:"var(--colors-foregroundTertiary)",height:"16",rx:"8",width:"33"})]})}}}]);