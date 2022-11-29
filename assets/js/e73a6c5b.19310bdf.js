"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6507],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=s(n),k=i,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,l(l({ref:e},p),{},{components:n})):r.createElement(d,l({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95334:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={id:"husky",slug:"/husky",title:"husky",authors:"kuizuo",keywords:["code-style","husky"]},c=void 0,s={unversionedId:"skill/code-specification/husky",id:"skill/code-specification/husky",title:"husky",description:"\u4e3a\u4e86\u786e\u4fdd\u53ea\u6709\u5408\u683c\u7684\u4ee3\u7801\u624d\u80fd\u591f\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002\u9700\u8981\u914d\u7f6e\u81ea\u52a8\u5316\u811a\u672c\uff0c\u786e\u4fdd\u4ee3\u7801\u5728\u63d0\u4ea4\u524d\u901a\u8fc7\u4e86\u4ee3\u7801\u9a8c\u8bc1\u5de5\u5177\u7684\u68c0\u9a8c\u3002",source:"@site/docs/skill/code-specification/husky.md",sourceDirName:"skill/code-specification",slug:"/husky",permalink:"/docs/husky",draft:!1,tags:[],version:"current",frontMatter:{id:"husky",slug:"/husky",title:"husky",authors:"kuizuo",keywords:["code-style","husky"]},sidebar:"skill",previous:{title:"editorconfig",permalink:"/docs/editorconfig"},next:{title:"npmrc",permalink:"/docs/npmrc"}},p={},u=[{value:"githooks",id:"githooks",level:2},{value:"\u5728 commit \u63d0\u4ea4\u524d\u6267\u884c lint \u4ee3\u7801\u6821\u9a8c",id:"\u5728-commit-\u63d0\u4ea4\u524d\u6267\u884c-lint-\u4ee3\u7801\u6821\u9a8c",level:3},{value:"\u5728 push \u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5",id:"\u5728-push-\u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5 commit \u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42",id:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5-commit-\u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42",level:3}],m={toc:u};function k(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u53ea\u6709\u5408\u683c\u7684\u4ee3\u7801\u624d\u80fd\u591f\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002\u9700\u8981\u914d\u7f6e\u81ea\u52a8\u5316\u811a\u672c\uff0c\u786e\u4fdd\u4ee3\u7801\u5728\u63d0\u4ea4\u524d\u901a\u8fc7\u4e86\u4ee3\u7801\u9a8c\u8bc1\u5de5\u5177\u7684\u68c0\u9a8c\u3002"),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a git \u672c\u8eab\u5c31\u8bbe\u8ba1\u4e86\u751f\u547d\u5468\u671f\u94a9\u5b50\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\u3002\u4f46\u662f\u8bbe\u7f6e\u8fc7\u7a0b\u6bd4\u8f83\u590d\u6742\u3002\u6240\u4ee5\u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528 husky \u6765\u7b80\u5316\u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"Husky")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/githooks"},"Git - githooks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i husky -D\n")),(0,o.kt)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a npm script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'npm set-script prepare "husky install"\n')),(0,o.kt)("h2",{id:"githooks"},"githooks"),(0,o.kt)("h3",{id:"\u5728-commit-\u63d0\u4ea4\u524d\u6267\u884c-lint-\u4ee3\u7801\u6821\u9a8c"},"\u5728 commit \u63d0\u4ea4\u524d\u6267\u884c lint \u4ee3\u7801\u6821\u9a8c"),(0,o.kt)("p",null,"\u6267\u884c\u4e0b\u65b9\u547d\u4ee4\uff0c\u4ee5\u6dfb\u52a0\u751f\u547d\u5468\u671f\u94a9\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'npx husky add .husky/pre-commit "pnpm lint"\n')),(0,o.kt)("p",null,"\u4f1a\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},".husky/pre-commit")," \u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='.husky/pre-commit'",title:"'.husky/pre-commit'"},'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\npnpm lint\n')),(0,o.kt)("p",null,"\u5728\u6bcf\u6b21\u63d0\u4ea4\u65f6\uff0c\u90fd\u5c06\u4f1a\u6267\u884c lint \u811a\u672c\u6765\u68c0\u67e5\u4ee3\u7801\u3002"),(0,o.kt)("h3",{id:"\u5728-push-\u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5"},"\u5728 push \u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u4e0d\u8fc7\u66f4\u591a\u7684\u505a\u6cd5\u90fd\u662f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"github action")," \u914d\u7f6e CI \u5728\u865a\u62df\u673a\u4e0a\u8dd1\u6d4b\u8bd5\uff0c\u800c\u4e0d\u662f\u672c\u5730\u6d4b\u8bd5\u3002\uff08\u6545\u8fd9\u6b65\u53ef\u7701\u7565\uff09"),(0,o.kt)("p",null,"\u6267\u884c\u4e0b\u65b9\u547d\u4ee4\uff0c\u4ee5\u6dfb\u52a0\u751f\u547d\u5468\u671f\u94a9\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx husky add .husky/pre-push "pnpm test"\n')),(0,o.kt)("h3",{id:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5-commit-\u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42"},"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5 commit \u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://commitlint.js.org/#/?id=getting-started"},"commitlint - Lint commit messages")),(0,o.kt)("p",null,"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i -g @commitlint/cli @commitlint/config-conventional\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"module.exports = {extends: ['@commitlint/config-conventional']}\" > commitlint.config.js\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"windows \u7cfb\u7edf\u8bf7\u52ff\u4f7f\u7528\u4e0a\u884c\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u7f16\u7801\u4e0d\u662f UTF-8\u3002\u5efa\u8bae\u76f4\u63a5\u590d\u5236\u6587\u672c\u5185\u5bb9\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"commitlint.config.js")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='commitlint.config.js'",title:"'commitlint.config.js'"},"module.exports = {extends: ['@commitlint/config-conventional']};\n"))),(0,o.kt)("p",null,"\u5c06 commitlint \u811a\u672c\u6dfb\u52a0\u5230 githooks \u4e2d\uff0c \u8ba9\u6bcf\u6b21\u63d0\u4ea4\u524d\u90fd\u9a8c\u8bc1\u4fe1\u606f\u662f\u5426\u6b63\u5e38\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""\n')),(0,o.kt)("p",null,"\u5176\u5185\u5bb9\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='.husky/commit-msg'",title:"'.husky/commit-msg'"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit "$1"\n')),(0,o.kt)("p",null,"\u6d4b\u8bd5 commit \u63d0\u4ea4 ",(0,o.kt)("inlineCode",{parentName:"p"},"echo 'foo: bar' | commitlint")," \u5c06\u4f1a\u62a5\u9519\uff0c\u4e0d\u7b26\u5408 commit msg \u89c4\u8303\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo 'foo: bar' | commitlint\n\u29d7   input: foo: bar\u2716   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]\n\n\u2716   found 1 problems, 0 warnings\n\u24d8   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint\n")))}k.isMDXComponent=!0}}]);