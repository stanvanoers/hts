!function e(t,n,r){function i(s,o){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){},{}],2:[function(e,t,n){"use strict";function r(e){return null!=e&&""!==e}function i(e){return(Array.isArray(e)?e.map(i):e&&"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(r).join(" ")}function a(e){return o[e]||e}function s(e){var t=String(e).replace(u,a);return t===""+e?e:t}n.merge=function e(t,n){if(1===arguments.length){for(var i=t[0],a=1;a<t.length;a++)i=e(i,t[a]);return i}var s=t.class,o=n.class;(s||o)&&(s=s||[],o=o||[],Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),t.class=s.concat(o).filter(r));for(var u in n)"class"!=u&&(t[u]=n[u]);return t},n.joinClasses=i,n.cls=function(e,t){for(var r=[],a=0;a<e.length;a++)t&&t[a]?r.push(n.escape(i([e[a]]))):r.push(i(e[a]));var s=i(r);return s.length?' class="'+s+'"':""},n.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},n.attr=function(e,t,r,i){return"style"===e&&(t=n.style(t)),"boolean"==typeof t||null==t?t?" "+(i?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof t?(JSON.stringify(t).indexOf("&")!==-1&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):r?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t+'"')},n.attrs=function(e,t){var r=[],a=Object.keys(e);if(a.length)for(var s=0;s<a.length;++s){var o=a[s],u=e[o];"class"==o?(u=i(u))&&r.push(" "+o+'="'+u+'"'):r.push(n.attr(o,u,!1,t))}return r.join("")};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;n.escape=s,n.rethrow=function t(n,r,i,a){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&r||a))throw n.message+=" on line "+i,n;try{a=a||e("fs").readFileSync(r,"utf8")}catch(e){t(n,null,i)}var s=3,o=a.split("\n"),u=Math.max(i-s,0),c=Math.min(o.length,i+s),s=o.slice(u,c).map(function(e,t){var n=t+u+1;return(n==i?"  > ":"    ")+n+"| "+e}).join("\n");throw n.path=r,n.message=(r||"Jade")+":"+i+"\n"+s+"\n\n"+n.message,n},n.DebugItem=function(e,t){this.lineno=e,this.filename=t}},{fs:1}],3:[function(e,t,n){var r,i;r=e("./../structure/templates/welcomeMessageTemplate.pug"),i=document.querySelector("[welcomeMessage]"),i.innerHTML=r({yourName:"Stan"}),setTimeout(function(){return i.classList.add("active")},200)},{"./../structure/templates/welcomeMessageTemplate.pug":4}],4:[function(e,t,n){var r=e("jade/lib/runtime.js");t.exports=function(e){var t,n=[],i=e||{};return function(e){n.push('\n<div class="row">'),n.push('\n  <div class="col-xs-12">'),n.push("\n    <h1>"),n.push(""+r.escape(null==(t=e)?"":t)+"'s Starter template"),n.push("</h1>"),n.push("\n  </div>"),n.push('\n  <div class="col-xs-12">'),n.push("\n    <p>"),n.push("With Sass, Pug and Coffeescript. See code for client side templates. Made with Gulp :)"),n.push("</p>"),n.push("\n  </div>"),n.push("\n</div>")}.call(this,"yourName"in i?i.yourName:"undefined"!=typeof yourName?yourName:void 0),n.join("")}},{"jade/lib/runtime.js":2}]},{},[3]);