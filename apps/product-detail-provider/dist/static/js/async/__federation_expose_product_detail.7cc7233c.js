/*! For license information please see __federation_expose_product_detail.7cc7233c.js.LICENSE.txt */
"use strict";(self.webpackChunkproduct_detail_provider=self.webpackChunkproduct_detail_provider||[]).push([["816"],{458:function(){},474:function(e,s,a){a.d(s,{Z:()=>l});var t=a("601");let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=(...e)=>e.filter((e,s,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===s).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,t.forwardRef)(({color:e="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:c="",children:l,iconNode:o,...d},m)=>(0,t.createElement)("svg",{ref:m,...i,width:s,height:s,stroke:e,strokeWidth:r?24*Number(a)/Number(s):a,className:n("lucide",c),...d},[...o.map(([e,s])=>(0,t.createElement)(e,s)),...Array.isArray(l)?l:[l]])),l=(e,s)=>{let a=(0,t.forwardRef)(({className:a,...i},l)=>(0,t.createElement)(c,{ref:l,iconNode:s,className:n(`lucide-${r(e)}`,a),...i}));return a.displayName=`${e}`,a}},824:function(e,s,a){a.d(s,{Z:function(){return r}});var t=a(474);let r=(0,t.Z)("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]])},206:function(e,s,a){a.d(s,{Z:function(){return r}});var t=a(474);let r=(0,t.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},38:function(e,s,a){a.d(s,{Z:function(){return r}});var t=a(474);let r=(0,t.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},143:function(e,s,a){a.d(s,{Z:function(){return r}});var t=a(474);let r=(0,t.Z)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])},220:function(e,s){var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(e,s,t){var r=null;if(void 0!==t&&(r=""+t),void 0!==s.key&&(r=""+s.key),"key"in s)for(var n in t={},s)"key"!==n&&(t[n]=s[n]);else t=s;return{$$typeof:a,type:e,key:r,ref:void 0!==(s=t.ref)?s:null,props:t}}s.jsx=r,s.jsxs=r},271:function(e,s,a){e.exports=a(220)},620:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var t=a(271),r=a(601),n=a(206),i=a(38),c=a(143),l=a(824),o=a(545),d=a.n(o);a(458);let m=function(){let[e,s]=(0,r.useState)(0),a=["https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=300&q=20","https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=300&q=20"];return(0,t.jsxs)("main",{className:"product-detail",children:[(0,t.jsxs)("div",{className:"product__carousel-container",children:[(0,t.jsxs)("div",{className:"carousel",children:[(0,t.jsx)("button",{className:"carousel-btn carousel-btn--prev",onClick:()=>{s(e=>(e-1+a.length)%a.length)},children:(0,t.jsx)(n.Z,{size:24})}),(0,t.jsx)("img",{src:a[e],alt:"Smart Watch",className:"product-image"}),(0,t.jsx)("button",{className:"carousel-btn carousel-btn--next",onClick:()=>{s(e=>(e+1)%a.length)},children:(0,t.jsx)(i.Z,{size:24})}),(0,t.jsxs)("div",{className:"carousel-indicator",children:[e+1," / ",a.length]})]}),(0,t.jsx)("div",{className:"badges",children:(0,t.jsxs)("div",{className:"free-stamp-section","data-testid":"free-stamp-section",children:[(0,t.jsxs)("div",{className:"free-stamp free-cargo-stamp",children:[(0,t.jsx)("span",{style:{display:"inline-block",width:16,height:16,backgroundSize:"cover",maskImage:"url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)",backgroundImage:"url(https://cdn.dsmcdn.com/sfint/production/icons/free-cargo-icon_1721125850634.svg)"},className:"free-stamp-icon"}),(0,t.jsxs)("span",{className:"free-stamp-text",children:[(0,t.jsx)("p",{className:"free-cargo-text",children:"FREE"})," SHIPPING"]})]}),(0,t.jsxs)("div",{className:"free-stamp free-return-stamp",children:[(0,t.jsx)("span",{style:{display:"inline-block",width:16,height:16,backgroundSize:"cover",maskImage:"url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)",backgroundImage:"url(https://cdn.dsmcdn.com/sfint/production/icons/free-return-icon_1721208792202.svg)"},className:"free-stamp-icon"}),(0,t.jsxs)("span",{className:"free-stamp-text",children:[(0,t.jsx)("p",{className:"free-returns-text",children:"FREE"})," RETURN"]})]})]})})]}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsxs)("div",{className:"category",children:[(0,t.jsx)("span",{children:"in Smart Bracelets"}),(0,t.jsx)("span",{className:"highlight",children:"#1 Bestseller"})]}),(0,t.jsx)("h1",{className:"title",children:'Example WATCH Ultra Pro Mega Giga Max - 2" OLED Display, Ultra-Slim Design'}),(0,t.jsxs)("div",{className:"rating",children:[(0,t.jsx)("div",{className:"stars",children:[void 0,void 0,void 0,void 0,void 0].map((e,s)=>(0,t.jsx)(c.Z,{size:14,fill:"#ffd700",color:"#ffd700"},s))}),(0,t.jsx)("span",{children:"(16)"}),(0,t.jsx)(l.Z,{size:16})]}),(0,t.jsx)("div",{className:"stats",children:(0,t.jsx)("span",{children:"968 items added to cart in the last 3 days."})}),(0,t.jsx)(d(),{})]})]})}}}]);