(()=>{var e={204:function(e,r,t){Promise.all([t.e("337"),t.e("264"),t.e("461"),t.e("270")]).then(t.bind(t,439))},50:function(e,r,t){"use strict";var n=Error();e.exports=new Promise(function(e,r){if("undefined"!=typeof payment_ui_provider)return e();t.l("https://yunusemredilber.github.io/module-federation-presentation/apps/payment-ui-provider/dist/mf-manifest.json",function(t){if("undefined"!=typeof payment_ui_provider)return e();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+i+")",n.name="ScriptExternalLoadError",n.type=o,n.request=i,r(n)},"payment_ui_provider")}).then(function(){return payment_ui_provider})}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,t.c=r,t.federation||(t.federation={chunkMatcher:function(e){return!/^(264|461)$/.test(e)}}),t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(r,n){return t.f[n](e,r),r},[]))},t.u=function(e){return"static/js/async/"+e+"."+({270:"131deff6",337:"ab257da8",382:"87874265",478:"b21aaeec",601:"17c282b7"})[e]+".js"},t.miniCssF=function(e){return"static/css/async/"+e+".b406f30a.css"},t.h=function(){return"898a8367d4f3b5f5"},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},(()=>{var e={},r="product_detail_provider:";t.l=function(n,o,i,a){if(e[n]){e[n].push(o);return}if(void 0!==i){for(var u,s,c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var f=c[d];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==r+i){u=f;break}}}!u&&(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+i),u.src=n),e[n]=[o];var l=function(r,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(t)}),r)return r(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),s&&document.head.appendChild(u)}})(),(()=>{var e=[];t.O=function(r,n,o,i){if(n){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i];return}for(var u=1/0,a=0;a<e.length;a++){for(var n=e[a][0],o=e[a][1],i=e[a][2],s=!0,c=0;c<n.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every(function(e){return t.O[e](n[c])})?n.splice(c--,1):(s=!1,i<u&&(u=i));if(s){e.splice(a--,1);var d=o();void 0!==d&&(r=d)}}return r}})(),t.p="https://yunusemredilber.github.io/module-federation-presentation/apps/product-detail-provider/dist/",t.rv=function(){return"1.1.8"},t.S={},t.initializeSharingData={scopeToSharingDataMapping:{default:[{name:"react-dom",version:"19.0.0",factory:()=>Promise.all([t.e("264"),t.e("601")]).then(()=>()=>t(61)),eager:0,singleton:1,requiredVersion:"*"},{name:"react",version:"19.0.0",factory:()=>t.e("478").then(()=>()=>t(263)),eager:0,singleton:1,requiredVersion:"*"},"50"]},uniqueName:"product_detail_provider"},t.I=t.I||function(){throw Error("should have __webpack_require__.I")},t.consumesLoadingData={chunkMapping:{264:["601"],270:["290"]},moduleIdToConsumeDataMapping:{601:{shareScope:"default",shareKey:"react",import:"react",requiredVersion:"*",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("478").then(()=>()=>t(263))},290:{shareScope:"default",shareKey:"react-dom",import:"react-dom",requiredVersion:"*",strictVersion:!1,singleton:!0,eager:!1,fallback:()=>t.e("382").then(()=>()=>t(61))}},initialConsumes:[]},t.f.consumes=t.f.consumes||function(){throw Error("should have __webpack_require__.f.consumes")},(()=>{if("undefined"!=typeof document){var e=function(e,r,n,o,i){var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc),a.onerror=a.onload=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||r,s=Error("Loading CSS chunk "+e+" failed.\\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=n,s.request=u,a.parentNode&&a.parentNode.removeChild(a),i(s)}},a.href=r,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},r=function(e,r){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===r))return o}for(var a=document.getElementsByTagName("style"),n=0;n<a.length;n++){var o=a[n],i=o.getAttribute("data-href");if(i===e||i===r)return o}},n={980:0};t.f.miniCss=function(o,i){if(n[o])i.push(n[o]);else if(0!==n[o]&&({270:1})[o]){var a;i.push(n[o]=(a=o,new Promise(function(n,o){var i=t.miniCssF(a),u=t.p+i;if(r(i,u))return n();e(a,u,null,n,o)})).then(function(){n[o]=0},function(e){throw delete n[o],e}))}}}})(),(()=>{var e={980:0};t.f.j=function(r,n){var o=t.o(e,r)?e[r]:void 0;if(0!==o){if(o)n.push(o[2]);else if(/^(264|461)$/.test(r))e[r]=0;else{var i=new Promise(function(t,n){o=e[r]=[t,n]});n.push(o[2]=i);var a=t.p+t.u(r),u=Error();t.l(a,function(n){if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}},"chunk-"+r,r)}}},t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o=n[0],i=n[1],a=n[2],u,s,c=0;if(o.some(function(r){return 0!==e[r]})){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(a)var d=a(t)}for(r&&r(n);c<o.length;c++)s=o[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self.webpackChunkproduct_detail_provider=self.webpackChunkproduct_detail_provider||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.remotesLoadingData={chunkMapping:{461:["545"]},moduleIdToRemoteDataMapping:{545:{shareScope:"default",name:"./payment-widgets",externalModuleId:"50",remoteName:"payment_ui_provider"}}},t.f.remotes=t.f.remotes||function(){throw Error("should have __webpack_require__.f.remotes")},t.ruid="bundler=rspack@1.1.8",t.O(void 0,["776"],function(){return t("91")});var n=t.O(void 0,["776"],function(){return t("204")});n=t.O(n)})();