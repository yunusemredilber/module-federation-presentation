/*! For license information please see 478.e4e23a54.js.LICENSE.txt */
"use strict";(self.webpackChunkpayment_ui_provider=self.webpackChunkpayment_ui_provider||[]).push([["478"],{160:function(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function _(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||d}function b(){}function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||d}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var S=m.prototype=new b;S.constructor=m,h(S,_.prototype),S.isPureReactComponent=!0;var E=Array.isArray,w={H:null,A:null,T:null,S:null},g=Object.prototype.hasOwnProperty;function k(e,t,r,o,u,i){return{$$typeof:n,type:e,key:t,ref:void 0!==(r=i.ref)?r:null,props:i}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var H=/\/+/g;function R(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function C(){}function $(e,t,o){if(null==e)return e;var u=[],i=0;return!function e(t,o,u,i,c){var s,a,f,l=typeof t;("undefined"===l||"boolean"===l)&&(t=null);var d=!1;if(null===t)d=!0;else switch(l){case"bigint":case"string":case"number":d=!0;break;case"object":switch(t.$$typeof){case n:case r:d=!0;break;case p:return e((d=t._init)(t._payload),o,u,i,c)}}if(d){;return c=c(t),d=""===i?"."+R(t,0):i,E(c)?(u="",null!=d&&(u=d.replace(H,"$&/")+"/"),e(c,o,u,"",function(e){return e})):null!=c&&(j(c)&&(s=c,a=u+(null==c.key||t&&t.key===c.key?"":(""+c.key).replace(H,"$&/")+"/")+d,c=k(s.type,a,void 0,void 0,void 0,s.props)),o.push(c)),1}d=0;var h=""===i?".":i+":";if(E(t))for(var v=0;v<t.length;v++)l=h+R(i=t[v],v),d+=e(i,o,u,l,c);else{;if("function"==typeof(v=null===(f=t)||"object"!=typeof f?null:"function"==typeof(f=y&&f[y]||f["@@iterator"])?f:null))for(t=v.call(t),v=0;!(i=t.next()).done;)l=h+R(i=i.value,v++),d+=e(i,o,u,l,c);else if("object"===l){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(C,C):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),o,u,i,c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.")}}return d}(e,u,"","",function(e){return t.call(o,e,i++)}),u}function x(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit){process.emit("uncaughtException",e);return}console.error(e)};function A(){}t.Children={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=i,t.PureComponent=m,t.StrictMode=u,t.Suspense=f,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=h({},e.props),o=e.key,u=void 0;if(null!=t)for(i in void 0!==t.ref&&(u=void 0),void 0!==t.key&&(o=""+t.key),t)g.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];r.children=c}return k(e.type,o,void 0,void 0,u,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},t.createElement=function(e,t,n){var r,o={},u=null;if(null!=t)for(r in void 0!==t.key&&(u=""+t.key),t)g.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return k(e,u,void 0,void 0,null,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),o=w.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(A,T)}catch(e){T(e)}finally{w.T=t}},t.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},t.use=function(e){return w.H.use(e)},t.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},t.useCallback=function(e,t){return w.H.useCallback(e,t)},t.useContext=function(e){return w.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return w.H.useEffect(e,t)},t.useId=function(){return w.H.useId()},t.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return w.H.useMemo(e,t)},t.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},t.useRef=function(e){return w.H.useRef(e)},t.useState=function(e){return w.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return w.H.useTransition()},t.version="19.0.0"},263:function(e,t,n){e.exports=n(160)}}]);