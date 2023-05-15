"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1688],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59748:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],c={id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:new Date("2021-01-07T00:00:00.000Z"),tags:["mysql","database"],keywords:["mysql","database"]},i=void 0,s={unversionedId:"skill/other/database/mysql/mysql-replace-function",id:"skill/other/database/mysql/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",description:"1\u3001\u524d\u8a00",source:"@site/docs/skill/other/database/mysql/Mysql\u66ff\u6362\u51fd\u6570replace.md",sourceDirName:"skill/other/database/mysql",slug:"/mysql-replace-function",permalink:"/docs/mysql-replace-function",draft:!1,tags:[{label:"mysql",permalink:"/docs/tags/mysql"},{label:"database",permalink:"/docs/tags/database"}],version:"current",frontMatter:{id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:"2021-01-07T00:00:00.000Z",tags:["mysql","database"],keywords:["mysql","database"]}},p={},u=[{value:"1\u3001\u524d\u8a00",id:"1\u524d\u8a00",level:2},{value:"2\u3001\u66ff\u6362\u51fd\u6570 replace()",id:"2\u66ff\u6362\u51fd\u6570-replace",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u524d\u8a00"},"1\u3001\u524d\u8a00"),(0,l.kt)("p",null,"\u5f53\u521d\u8bbe\u8ba1\u9898\u5e93\u6570\u636e\u5e93\u65f6\uff0c\u6ca1\u8003\u8651\u5468\u5168\uff0c\u5b58\u5728\u591a\u9898\u76ee\uff0c\u9898\u76ee\u4e0d\u6807\u51c6\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u6837"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210107044832103.png",alt:"image-20210107044832103"})),(0,l.kt)("p",null,"\u9898\u76ee\u524d\u9762\u7684\u3010\u5355\u9009\u9898\u3011\u3010\u5224\u65ad\u9898\u3011\u600e\u4e48\u80fd\u5fcd\uff0c\u4e8e\u662f\u5c31\u767e\u5ea6 mysql \u6587\u672c\u66ff\u6362 \u7b2c\u4e00\u7bc7\u6587\u7ae0\u5c31\u89e3\u51b3\u4e86\u6211\u7684\u95ee\u9898\uff0c\u4e8e\u662f\u6211\u4e5f\u987a\u624b\u8bb0\u5f55\u4e00\u4e0b\uff0c\u4ee5\u9632\u4e0b\u6b21\u4f7f\u7528"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u94fe\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_36663951/article/details/78791138"},"mysql \u66ff\u6362\u51fd\u6570 replace()\u5b9e\u73b0 mysql \u66ff\u6362\u6307\u5b9a\u5b57\u6bb5\u4e2d\u7684\u5b57\u7b26\u4e32"))),(0,l.kt)("h2",{id:"2\u66ff\u6362\u51fd\u6570-replace"},"2\u3001\u66ff\u6362\u51fd\u6570 replace()"),(0,l.kt)("p",null,"\u6700\u5173\u952e\u7684\u4e5f\u5c31\u662f\u8fd9\u4e2a\u51fd\u6570\u4e86\uff0c\u5148\u770b\u770b\u6211\u7684 SQL \u8bed\u53e5\u662f\u600e\u4e48\u5199\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE `kz_answer` SET `topic` = replace (`topic`,'\u3010\u5355\u9009\u9898\u3011','') WHERE `topic` LIKE '%\u3010\u5355\u9009\u9898\u3011%'\n")),(0,l.kt)("p",null,"\u5176\u5b9e\u4e5f\u5c31\u662f UPDATE \u66f4\u65b0\u8bed\u53e5\uff0c\u7136\u540e\u901a\u8fc7 WHERE \u5b50\u53e5\u4e0e LIKE \u6a21\u7cca\u5224\u65ad\uff0c\u6700\u540e\u5c06\u5b57\u6bb5\u7ed9\u4fee\u6539\u4e86\u3002\u4f1a\u70b9 MySQL \u7684\u4e0a\u9762\u4ee3\u7801\u4e00\u773c\u5c31\u61c2\uff0c\u4e0d\u5199\u4e86\uff0c\u8fd8\u8981\u6298\u817e\u9898\u5e93\u63a5\u53e3\u548c\u9898\u5e93\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u662f\u591a\u5b57\u8282\u5b89\u5168\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u4e0d\u7528\u8003\u8651\u662f\u4e2d\u6587\u5b57\u7b26\u8fd8\u662f\u82f1\u6587\u5b57\u7b26\u3002"))}f.isMDXComponent=!0}}]);