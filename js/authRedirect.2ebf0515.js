(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authRedirect"],{"386d":function(n,t,e){"use strict";var a=e("cb7c"),c=e("83a1"),i=e("5f1b");e("214f")("search",1,function(n,t,e,r){return[function(e){var a=n(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,a):new RegExp(e)[t](String(a))},function(n){var t=r(e,n,this);if(t.done)return t.value;var o=a(n),u=String(this),l=o.lastIndex;c(l,0)||(o.lastIndex=0);var d=i(o,u);return c(o.lastIndex,l)||(o.lastIndex=l),null===d?-1:d.index}]})},"83a1":function(n,t){n.exports=Object.is||function(n,t){return n===t?0!==n||1/n===1/t:n!=n&&t!=t}},b829:function(n,t,e){"use strict";e.r(t);e("386d");var a=e("d225"),c=e("b0b4"),i=e("308d"),r=e("6bb5"),o=e("4e2b"),u=e("9ab4"),l=e("60a3"),d=function(n){function t(){return Object(a["a"])(this,t),Object(i["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(o["a"])(t,n),Object(c["a"])(t,[{key:"created",value:function(){var n=window.location.search.slice(1);window.localStorage&&(window.localStorage.setItem("x-admin-oauth-code",n),window.close())}},{key:"render",value:function(){}}]),t}(l["c"]);d=u["a"]([l["a"]],d);var s,b,f=d,w=f,v=e("0c7c"),h=Object(v["a"])(w,s,b,!1,null,null,null);t["default"]=h.exports}}]);