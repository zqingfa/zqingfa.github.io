"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9155],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9581:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={id:"commonly-used-util.js",slug:"/commonly-used-util.js",title:"\u5e38\u7528util.js",date:new Date("2020-10-21T00:00:00.000Z"),authors:"kuizuo",tags:["js","util"],keywords:["js","util"]},s=void 0,u={unversionedId:"skill/js/commonly-used-util.js",id:"skill/js/commonly-used-util.js",title:"\u5e38\u7528util.js",description:"\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u5728 js \u5b66\u4e60\u4e2d\u5e38\u7528\u5230\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u8fdb\u884c\u5c01\u88c5\u4f7f\u7528",source:"@site/docs/skill/js/\u5e38\u7528util.js.md",sourceDirName:"skill/js",slug:"/commonly-used-util.js",permalink:"/en/docs/commonly-used-util.js",draft:!1,tags:[{label:"js",permalink:"/en/docs/tags/js"},{label:"util",permalink:"/en/docs/tags/util"}],version:"current",frontMatter:{id:"commonly-used-util.js",slug:"/commonly-used-util.js",title:"\u5e38\u7528util.js",date:"2020-10-21T00:00:00.000Z",authors:"kuizuo",tags:["js","util"],keywords:["js","util"]},sidebar:"skill",previous:{title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",permalink:"/en/docs/typescript-advanced-grammar"},next:{title:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c",permalink:"/en/docs/querystring-and-json-convert"}},c={},p=[{value:"1.\u65f6\u95f4\u683c\u5f0f\u89e3\u6790",id:"1\u65f6\u95f4\u683c\u5f0f\u89e3\u6790",level:2},{value:"2.\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee",id:"2\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee",level:2},{value:"3.\u53d6\u968f\u673a\u6570\uff0c\u5b57\u6bcd",id:"3\u53d6\u968f\u673a\u6570\u5b57\u6bcd",level:2},{value:"4.\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e json \u4e92\u8f6c",id:"4\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c",level:2},{value:"5.\u63d0\u53d6 url \u4e2d\u7684 Query \u5bf9\u8c61",id:"5\u63d0\u53d6-url-\u4e2d\u7684-query-\u5bf9\u8c61",level:2},{value:"6.\u6df1\u62f7\u8d1d",id:"6\u6df1\u62f7\u8d1d",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u5728 js \u5b66\u4e60\u4e2d\u5e38\u7528\u5230\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u8fdb\u884c\u5c01\u88c5\u4f7f\u7528"),(0,o.kt)("h2",{id:"1\u65f6\u95f4\u683c\u5f0f\u89e3\u6790"},"1.\u65f6\u95f4\u683c\u5f0f\u89e3\u6790"),(0,o.kt)("p",null,"\u9996\u5f53\u5176\u51b2\u7684\u5c31\u662f\u8fd9\u4e2a\u65f6\u95f4\u683c\u5f0f\u89e3\u6790\u4e86\uff0cjs \u7684 Date \u4e2d\u6709\u4e00\u4e2a\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"toLocaleString()")," \u8fd4\u56de\u7684\u7ed3\u679c\u4e3a\u672c\u5730\u65f6\u95f4\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"new Date().toLocaleString()"),"\u8fd4\u56de\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"2020/10/21 \u4e0a\u53481:03:17"),"\uff0c\u597d\u50cf\u770b\u7740\u5e76\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u6211\u5982\u679c\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"2020/10/21 \u4e0a\u53481:03:17"),"\u8f6c\u4e3a\u65f6\u95f4\u6233\u7684\u8bdd\uff0c\u4e5f\u5c31\u662f\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},'new Date("2020/10/21 \u4e0a\u53485:03:17").getTime()'),"\uff0c\u7136\u800c\u5b83\u5374\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),"\uff0c\u4e0d\u5408\u7406\u554a\uff0c\u65f6\u95f4\u683c\u5f0f\u96be\u9053\u4e0d\u662f\u8fd9\u6837\u7684\u5417\uff0c\u65f6\u95f4\u683c\u5f0f\u8fd8\u771f\u4e0d\u662f\u8fd9\u6837\uff0c\u4e0a\u9762\u53ea\u662f\u663e\u793a\u4e3a\u672c\u5730\u7684\u65f6\u95f4\uff0c\u7136\u800c\u5bf9\u4e8e js \u800c\u8a00\uff0c\u5b83\u53ea\u8bc6\u522b",(0,o.kt)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss"),"\u8fd9\u6837\u7684\u65f6\u95f4\u683c\u5f0f\u3002\u4e8e\u662f\u5c31\u9700\u8981\u5bf9\u8fd4\u56de\u7684\u65f6\u95f4\u683c\u5f0f\u8fdb\u884c\u64cd\u4f5c\u4e86\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e0b\u65b9\u7684\u89e3\u6790\u51fd\u6570\uff0c\u5e76\u5e26\u4e0a\u5bf9\u5e94\u7684\u65f6\u95f4\u683c\u5f0f\u8fd4\u56de\u7ed9\u6211\u5bf9\u5e94\u7684\u65f6\u95f4\uff0c\u4ee3\u7801\u5c31\u4e0d\u5206\u6790\u4e86\uff0c\u6211\u4e5f\u662f\u501f\u9274\u7f51\u7edc\u4e0a\u7684\u4e00\u4e9b\u683c\u5f0f\u5316\u65f6\u95f4\u4ee3\u7801\uff0c\u4fee\u6539\u800c\u6765\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function parseTime(time, cFormat) {\n  if (arguments.length === 0 || !time) {\n    return null\n  }\n  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'\n  let date\n  if (typeof time === 'object') {\n    date = time\n  } else {\n    if (typeof time === 'string') {\n      if (/^[0-9]+$/.test(time)) {\n        time = parseInt(time)\n      } else {\n        time = time.replace(new RegExp(/-/gm), '/')\n      }\n    }\n\n    if (typeof time === 'number' && time.toString().length === 10) {\n      time = time * 1000\n    }\n    date = new Date(time)\n  }\n  const formatObj = {\n    y: date.getFullYear(),\n    m: date.getMonth() + 1,\n    d: date.getDate(),\n    h: date.getHours(),\n    i: date.getMinutes(),\n    s: date.getSeconds(),\n    a: date.getDay(),\n  }\n  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {\n    const value = formatObj[key]\n    if (key === 'a') {\n      return ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'][value]\n    }\n    return value.toString().padStart(2, '0')\n  })\n  return time_str\n}\n")),(0,o.kt)("h2",{id:"2\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee"},"2.\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u8ddd\u79bb\u73b0\u5728\u65f6\u95f4\u5dee"),(0,o.kt)("p",null,"\u4e0a\u9762\u8bf4\u5230\u7684\u662f\u65f6\u95f4\u7ed3\u6784\u7684\u89e3\u6790\uff0c\u4f46\u6709\u65f6\u5019\u9700\u8981\u8ba1\u7b97\u8fc7\u53bb\u65f6\u95f4\u4e0e\u73b0\u5728\u7684\u65f6\u95f4\u5dee\uff0c\u6bd4\u5982\u8ba1\u7b97\u8bc4\u8bba\u53d1\u5e03\u7684\u65f6\u95f4\u3002\u8fd9\u4e2a\u6211\u4e5f\u653e\u4e00\u4e2a\u5bf9\u5e94\u7684\u76f8\u5173\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function formatTime(time, option) {\n  if (('' + time).length === 10) {\n    time = parseInt(time) * 1000\n  } else {\n    time = +time\n  }\n  const d = new Date(time)\n  const now = Date.now()\n\n  const diff = (now - d) / 1000\n\n  if (diff < 30) {\n    return '\u521a\u521a'\n  } else if (diff < 3600) {\n    // less 1 hour\n    return Math.ceil(diff / 60) + '\u5206\u949f\u524d'\n  } else if (diff < 3600 * 24) {\n    return Math.ceil(diff / 3600) + '\u5c0f\u65f6\u524d'\n  } else if (diff < 3600 * 24 * 2) {\n    return '1\u5929\u524d'\n  }\n  if (option) {\n    return parseTime(time, option)\n  } else {\n    return d.getFullYear() + '\u5e74' + (d.getMonth() + 1) + '\u6708' + d.getDate() + '\u65e5' + d.getHours() + '\u65f6' + d.getMinutes() + '\u5206'\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u63d0\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"moment.js"),"\uff0c\u4e00\u4e2a js \u65e5\u671f\u5904\u7406\u7684\u7c7b\u5e93\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u4e86\u89e3\u4e00\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"http://momentjs.cn/"},"moment.js")),(0,o.kt)("h2",{id:"3\u53d6\u968f\u673a\u6570\u5b57\u6bcd"},"3.\u53d6\u968f\u673a\u6570\uff0c\u5b57\u6bcd"),(0,o.kt)("p",null,"js \u63d0\u4f9b\u4e86\u83b7\u53d6\u968f\u673a\u6570\u7684\u65b9\u6cd5",(0,o.kt)("inlineCode",{parentName:"p"},"Math.random()")," \uff0c\u4f46\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u83b7\u53d6 0-1 \u4e4b\u95f4\u7684\u968f\u673a\u6570\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"0.8790767725487598"),"\uff0c\u5f53\u7136\uff0c\u8fd9\u80af\u5b9a\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\uff0c\u6211\u8981\u7684\u53ea\u662f\u4e00\u4e2a 0-9 \u6570\u5b57\uff0c\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06\u4e0a\u9762\u83b7\u53d6\u5230\u7684\u968f\u673a\u6570\u4e58 10\uff0c\u7136\u540e\u53d6\u4e2a\u4f4d\u6570\u4e0d\u5c31\u6210\u4e86\u3002\u5bf9\u5e94\u7684\u4e5f\u5c31\u662f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parseInt(Math.random() * 10)")),(0,o.kt)("p",null,"\u6709\u65f6\u5019\u80af\u5b9a\u4e0d\u53ea\u662f\u8981 0-9 \u4e4b\u95f4\uff0c\u53ef\u80fd\u662f\u8981 0-100 \u7684\uff0c\u539f\u7406\u4e00\u6837\uff0c\u5bf9\u5e94\u7684\u6362\u7b97\u516c\u5f0f\u5982\u4e0b"),(0,o.kt)("p",null,"\u83b7\u53d6 N-M \u7684\u968f\u673a\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt(Math.random() * (M - N + 1) + N)")),(0,o.kt)("p",null,"\u5c01\u88c5\u6210\u5982\u4e0b\u5bf9\u5e94\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function ranNum(min, max) {\n  if (arguments.length === 0) {\n    return parseInt(Math.random() * 10)\n  }\n  return parseInt(Math.random() * (max - min + 1) + min)\n}\n")),(0,o.kt)("p",null,"\u5bf9\u5e94\u7684\u83b7\u53d6\u968f\u673a\u5b57\u6bcd\u4e5f\u7b80\u5355,\u53ea\u8981\u901a\u8fc7 ASCII \u7801 A \u4e3a 65\uff0cZ \u4e3a 90\uff0c\u7136\u540e\u83b7\u53d6\u968f\u673a\u6570 0-25\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"String.fromCharCode"),"\u4f20\u5165\u5bf9\u5e94\u7684 ASCII \u7801\u5373\u53ef\uff0c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function ranChar() {\n  return String.fromCharCode(65 + parseInt(Math.random() * 25))\n}\n")),(0,o.kt)("h2",{id:"4\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c"},"4.\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e json \u4e92\u8f6c"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u5728\u6211\u7684\u53e6\u4e00\u7bc7\u6587\u7ae0 ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/querystring-and-json-convert"},"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e JSON \u4e92\u8f6c")," \u4e2d\u6709\u5199\u5230\u4e86\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u505a\u8fc7\u591a\u53d9\u8ff0\u4e86"),(0,o.kt)("h2",{id:"5\u63d0\u53d6-url-\u4e2d\u7684-query-\u5bf9\u8c61"},"5.\u63d0\u53d6 url \u4e2d\u7684 Query \u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getQueryObject(url) {\n  url = url == null ? window.location.href : url\n  const search = url.substring(url.lastIndexOf('?') + 1)\n  const obj = {}\n  const reg = /([^?&=]+)=([^?&=]*)/g\n  search.replace(reg, (rs, $1, $2) => {\n    const name = decodeURIComponent($1)\n    let val = decodeURIComponent($2)\n    val = String(val)\n    obj[name] = val\n    return rs\n  })\n  return obj\n}\n")),(0,o.kt)("h2",{id:"6\u6df1\u62f7\u8d1d"},"6.\u6df1\u62f7\u8d1d"),(0,o.kt)("p",null,"\u6d45\u62f7\u8d1d\u5c31\u4e0d\u8bf4\u4e86\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign"),"\u5c31\u80fd\u89e3\u51b3\u4e86\uff0c\u6709\u5173 js \u5bf9\u8c61\u62f7\u8d1d\u8fd9\u91cc\u4e5f\u4e0d\u505a\u8fc7\u591a\u7684\u8d58\u8ff0\uff0c\u968f\u4fbf\u4e00\u641c\u5c31\u6709\u5404\u79cd\u76f8\u5173\u7684\u3002\u8fd9\u91cc\u5c31\u8d34\u4e00\u4e2a\u6df1\u62f7\u8d1d\u7684\u76f8\u5173\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function deepClone(source) {\n  if (!source && typeof source !== 'object') {\n    throw new Error('error arguments', 'deepClone')\n  }\n  const targetObj = source.constructor === Array ? [] : {}\n  Object.keys(source).forEach((keys) => {\n    if (source[keys] && typeof source[keys] === 'object') {\n      targetObj[keys] = deepClone(source[keys])\n    } else {\n      targetObj[keys] = source[keys]\n    }\n  })\n  return targetObj\n}\n")))}d.isMDXComponent=!0}}]);