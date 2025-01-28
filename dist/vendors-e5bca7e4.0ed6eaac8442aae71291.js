/*! For license information please see vendors-e5bca7e4.0ed6eaac8442aae71291.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_bible_app=self.webpackChunkreact_bible_app||[]).push([[765],{976:(e,t,r)=>{var n,o;r.d(t,{Kd:()=>f,N_:()=>h});var a=r(540),i=r(961),u=r(767),l=r(588);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const c=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}new Map;const p=(n||(n=r.t(a,2))).startTransition;function f(e){let{basename:t,children:r,future:n,window:o}=e,i=a.useRef();null==i.current&&(i.current=(0,l.zR)({window:o,v5Compat:!0}));let s=i.current,[c,f]=a.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},v=a.useCallback((e=>{d&&p?p((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>s.listen(v)),[s,v]),a.useEffect((()=>(0,u.V8)(n)),[n]),a.createElement(u.Ix,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:n})}(o||(o=r.t(i,2))).flushSync,(n||(n=r.t(a,2))).useId;const d="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h=a.forwardRef((function(e,t){let r,{onClick:n,relative:o,reloadDocument:i,replace:p,state:f,target:h,to:m,preventScrollReset:y,viewTransition:g}=e,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,c),{basename:_}=a.useContext(u.jb),S=!1;if("string"==typeof m&&v.test(m)&&(r=m,d))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),r=(0,l.pb)(t.pathname,_);t.origin===e.origin&&null!=r?m=r+t.search+t.hash:S=!0}catch(e){}let R=(0,u.$P)(m,{relative:o}),C=function(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:s,viewTransition:c}=void 0===t?{}:t,p=(0,u.Zp)(),f=(0,u.zy)(),d=(0,u.x$)(e,{relative:s});return a.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==n?n:(0,l.AO)(f)===(0,l.AO)(d);p(e,{replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:c})}}),[f,p,d,n,o,r,e,i,s,c])}(m,{replace:p,state:f,target:h,preventScrollReset:y,relative:o,viewTransition:g});return a.createElement("a",s({},b,{href:r||R,onClick:S||i?n:function(e){n&&n(e),e.defaultPrevented||C(e)},ref:t,target:h}))}));var m,y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(m||(m={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(y||(y={}))},767:(e,t,r)=>{var n;r.d(t,{$P:()=>d,BV:()=>F,Ix:()=>D,V8:()=>j,Zp:()=>y,jb:()=>s,qh:()=>$,sv:()=>T,x$:()=>b,zy:()=>h});var o=r(540),a=r(588);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const u=o.createContext(null),l=o.createContext(null),s=o.createContext(null),c=o.createContext(null),p=o.createContext({outlet:null,matches:[],isDataRoute:!1}),f=o.createContext(null);function d(e,t){let{relative:r}=void 0===t?{}:t;v()||(0,a.Oi)(!1);let{basename:n,navigator:i}=o.useContext(s),{hash:u,pathname:l,search:c}=b(e,{relative:r}),p=l;return"/"!==n&&(p="/"===l?n:(0,a.HS)([n,l])),i.createHref({pathname:p,search:c,hash:u})}function v(){return null!=o.useContext(c)}function h(){return v()||(0,a.Oi)(!1),o.useContext(c).location}function m(e){o.useContext(s).static||o.useLayoutEffect(e)}function y(){let{isDataRoute:e}=o.useContext(p);return e?function(){let{router:e}=function(){let e=o.useContext(u);return e||(0,a.Oi)(!1),e}(x.UseNavigateStable),t=k(w.UseNavigateStable),r=o.useRef(!1);return m((()=>{r.current=!0})),o.useCallback((function(n,o){void 0===o&&(o={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,i({fromRouteId:t},o)))}),[e,t])}():function(){v()||(0,a.Oi)(!1);let e=o.useContext(u),{basename:t,future:r,navigator:n}=o.useContext(s),{matches:i}=o.useContext(p),{pathname:l}=h(),c=JSON.stringify((0,a.yD)(i,r.v7_relativeSplatPath)),f=o.useRef(!1);return m((()=>{f.current=!0})),o.useCallback((function(r,o){if(void 0===o&&(o={}),!f.current)return;if("number"==typeof r)return void n.go(r);let i=(0,a.Gh)(r,JSON.parse(c),l,"path"===o.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(o.replace?n.replace:n.push)(i,o.state,o)}),[t,n,c,l,e])}()}const g=o.createContext(null);function b(e,t){let{relative:r}=void 0===t?{}:t,{future:n}=o.useContext(s),{matches:i}=o.useContext(p),{pathname:u}=h(),l=JSON.stringify((0,a.yD)(i,n.v7_relativeSplatPath));return o.useMemo((()=>(0,a.Gh)(e,JSON.parse(l),u,"path"===r)),[e,l,u,r])}function _(e,t,r,n){v()||(0,a.Oi)(!1);let{navigator:u}=o.useContext(s),{matches:l}=o.useContext(p),f=l[l.length-1],d=f?f.params:{},m=(f&&f.pathname,f?f.pathnameBase:"/");f&&f.route;let y,g=h();if(t){var b;let e="string"==typeof t?(0,a.Rr)(t):t;"/"===m||(null==(b=e.pathname)?void 0:b.startsWith(m))||(0,a.Oi)(!1),y=e}else y=g;let _=y.pathname||"/",S=_;if("/"!==m){let e=m.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=(0,a.ue)(e,{pathname:S}),w=function(e,t,r,n){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===n&&(n=null),null==e){var u;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(u=n)&&u.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||(0,a.Oi)(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(p=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){c=!0,l=p>=0?l.slice(0,p+1):[l[0]];break}}}return l.reduceRight(((e,n,a)=>{let i,u=!1,f=null,d=null;var v;r&&(i=s&&n.route.id?s[n.route.id]:void 0,f=n.route.errorElement||R,c&&(p<0&&0===a?(O[v="route-fallback"]||(O[v]=!0),u=!0,d=null):p===a&&(u=!0,d=n.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,a+1)),m=()=>{let t;return t=i?f:u?d:n.route.Component?o.createElement(n.route.Component,null):n.route.element?n.route.element:e,o.createElement(E,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?o.createElement(C,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:(0,a.HS)([m,u.encodeLocation?u.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,a.HS)([m,u.encodeLocation?u.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r,n);return t&&w?o.createElement(c.Provider,{value:{location:i({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:a.rc.Pop}},w):w}function S(){let e=function(){var e;let t=o.useContext(f),r=function(){let e=o.useContext(l);return e||(0,a.Oi)(!1),e}(w.UseRouteError),n=k(w.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[n]}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:n},r):null,null)}const R=o.createElement(S,null);class C extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(p.Provider,{value:this.props.routeContext},o.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(u);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(p.Provider,{value:t},n)}var x=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(x||{}),w=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(w||{});function k(e){let t=function(){let e=o.useContext(p);return e||(0,a.Oi)(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.Oi)(!1),r.route.id}const O={},P={},U=(e,t,r)=>{var n;P[n="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+r+"."]||(P[n]=!0,console.warn(n))};function j(e,t){void 0===(null==e?void 0:e.v7_startTransition)&&U("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void 0!==(null==e?void 0:e.v7_relativeSplatPath)||t&&t.v7_relativeSplatPath||U("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(void 0===t.v7_fetcherPersist&&U("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),void 0===t.v7_normalizeFormMethod&&U("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),void 0===t.v7_partialHydration&&U("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),void 0===t.v7_skipActionErrorRevalidation&&U("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function T(e){return function(e){let t=o.useContext(p).outlet;return t?o.createElement(g.Provider,{value:e},t):t}(e.context)}function $(e){(0,a.Oi)(!1)}function D(e){let{basename:t="/",children:r=null,location:n,navigationType:u=a.rc.Pop,navigator:l,static:p=!1,future:f}=e;v()&&(0,a.Oi)(!1);let d=t.replace(/^\/*/,"/"),h=o.useMemo((()=>({basename:d,navigator:l,static:p,future:i({v7_relativeSplatPath:!1},f)})),[d,f,l,p]);"string"==typeof n&&(n=(0,a.Rr)(n));let{pathname:m="/",search:y="",hash:g="",state:b=null,key:_="default"}=n,S=o.useMemo((()=>{let e=(0,a.pb)(m,d);return null==e?null:{location:{pathname:e,search:y,hash:g,state:b,key:_},navigationType:u}}),[d,m,y,g,b,_,u]);return null==S?null:o.createElement(s.Provider,{value:h},o.createElement(c.Provider,{children:r,value:S}))}function F(e){let{children:t,location:r}=e;return _(B(t),r)}function B(e,t){void 0===t&&(t=[]);let r=[];return o.Children.forEach(e,((e,n)=>{if(!o.isValidElement(e))return;let i=[...t,n];if(e.type===o.Fragment)return void r.push.apply(r,B(e.props.children,i));e.type!==$&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let u={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(u.children=B(e.props.children,i)),r.push(u)})),r}(n||(n=r.t(o,2))).startTransition,new Promise((()=>{})),o.Component},287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator,v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var _=b.prototype=new g;_.constructor=b,h(_,y.prototype),_.isPureReactComponent=!0;var S=Array.isArray,R=Object.prototype.hasOwnProperty,C={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:u,props:a,_owner:C.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+O(l,0):a,S(i)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",S(e))for(var s=0;s<e.length;s++){var c=a+O(u=e[s],s);l+=P(u,t,o,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(u=e.next()).done;)l+=P(u=u.value,t,o,c=a+O(u,s++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function U(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},$={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:$,ReactCurrentOwner:C};function F(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:U,forEach:function(e,t,r){U(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return U(e,(function(){t++})),t},toArray:function(e){return U(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=F,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)R.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=F,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)}}]);
//# sourceMappingURL=vendors-e5bca7e4.0ed6eaac8442aae71291.js.map