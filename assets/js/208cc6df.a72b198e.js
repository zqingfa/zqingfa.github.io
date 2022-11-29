"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6369],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,l=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),m=u(t),g=o,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||l;return t?r.createElement(f,a(a({ref:e},s),{},{components:t})):r.createElement(f,a({ref:e},s))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46974:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={id:"go-call-js",slug:"/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",date:new Date("2022-05-22T00:00:00.000Z"),authors:"kuizuo",tags:["go","javascript"],keywords:["go","javascript"]},c=void 0,u={unversionedId:"skill/go/go-call-js",id:"skill/go/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",description:"\u8fd0\u884c js \u4ee3\u7801",source:"@site/docs/skill/go/Go\u8c03\u7528js\u4ee3\u7801.md",sourceDirName:"skill/go",slug:"/go-call-js",permalink:"/docs/go-call-js",draft:!1,tags:[{label:"go",permalink:"/docs/tags/go"},{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",frontMatter:{id:"go-call-js",slug:"/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",date:"2022-05-22T00:00:00.000Z",authors:"kuizuo",tags:["go","javascript"],keywords:["go","javascript"]},sidebar:"skill",previous:{title:"Go\u53d1\u9001http\u8bf7\u6c42",permalink:"/docs/go-send-http-request"},next:{title:"Go\u5e76\u53d1",permalink:"/docs/go-concurrent"}},s={},p=[{value:"\u8fd0\u884c js \u4ee3\u7801",id:"\u8fd0\u884c-js-\u4ee3\u7801",level:2},{value:"\u8c03\u7528\u51fd\u6570",id:"\u8c03\u7528\u51fd\u6570",level:2},{value:"\u5c01\u88c5\u6210 go \u51fd\u6570",id:"\u5c01\u88c5\u6210-go-\u51fd\u6570",level:2}],m={toc:p};function g(n){var e=n.components,t=(0,o.Z)(n,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8fd0\u884c-js-\u4ee3\u7801"},"\u8fd0\u884c js \u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n\n  "github.com/robertkrimen/otto"\n)\n\nfunc main() {\n  vm := otto.New()\n  result, _ := vm.Run(`\n      foo = 1 + 2\n      console.log(foo)\n      result = foo;\n  `)\n  fmt.Println(result) // 4\n}\n')),(0,l.kt)("h2",{id:"\u8c03\u7528\u51fd\u6570"},"\u8c03\u7528\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  vm := otto.New()\n  vm.Run(`\n  function hello(name){\n      console.log('hello ' + name)\n      return 'OK'\n  }\n`)\n\n  ret, _ := vm.Call(\"hello\", nil, \"kuizuo\")\n  fmt.Println(ret)\n}\n\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4ee5 go \u8c03\u7528 js \u7684 CryptoJS \u6765\u5b9e\u73b0\u52a0\u5bc6\u6f14\u793a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  bytes, _ := ioutil.ReadFile("md5.js")\n  vm := otto.New()\n  vm.Run(string(bytes))\n\n  ret, _ := vm.Call("MD5", nil, "a123456")\n  fmt.Println(ret)\n}\n')),(0,l.kt)("h2",{id:"\u5c01\u88c5\u6210-go-\u51fd\u6570"},"\u5c01\u88c5\u6210 go \u51fd\u6570"),(0,l.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u5199\u6cd5\u4e0d\u65b9\u4fbf\uff0c\u53ef\u4ee5\u5c06\u5176\u5c01\u88c5\u4e3a\u4e00\u4e2a go \u51fd\u6570\u6765\u8c03\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "io/ioutil"\n\n  "github.com/robertkrimen/otto"\n)\n\nvar vm = otto.New()\n\nfunc initJs() {\n  bytes, _ := ioutil.ReadFile("md5.js")\n  vm.Run(string(bytes))\n}\n\nfunc md5(content string) string {\n  ret, err := vm.Call("MD5", nil, content)\n  if err != nil {\n    return ""\n  }\n  return ret.String()\n}\n\nfunc main() {\n  initJs()\n  result := md5("a123456")\n  fmt.Println(result)\n}\n\n')))}g.isMDXComponent=!0}}]);