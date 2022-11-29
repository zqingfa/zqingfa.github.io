"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[882],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return m}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),k=u(a),m=n,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||r;return a?l.createElement(d,s(s({ref:t},i),{},{components:a})):l.createElement(d,s({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15884:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),s=["components"],o={slug:"java-reflect",title:"java\u53cd\u5c04",date:new Date("2022-01-16T00:00:00.000Z"),authors:"kuizuo",tags:["java"],keywords:["java"]},p=void 0,u={unversionedId:"skill/java/Java\u53cd\u5c04",id:"skill/java/Java\u53cd\u5c04",title:"java\u53cd\u5c04",description:"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f",source:"@site/docs/skill/java/Java\u53cd\u5c04.md",sourceDirName:"skill/java",slug:"/skill/java/java-reflect",permalink:"/docs/skill/java/java-reflect",draft:!1,tags:[{label:"java",permalink:"/docs/tags/java"}],version:"current",frontMatter:{slug:"java-reflect",title:"java\u53cd\u5c04",date:"2022-01-16T00:00:00.000Z",authors:"kuizuo",tags:["java"],keywords:["java"]},sidebar:"skill",previous:{title:"Java",permalink:"/docs/category/java"},next:{title:"Python",permalink:"/docs/category/python"}},i={},c=[{value:"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f\u3000\u3000",id:"\u4ec0\u4e48\u662f\u53cd\u5c04",level:2},{value:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48\uff1f",id:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48",level:2},{value:"\u53cd\u5c04\u5e38\u7528 API",id:"\u53cd\u5c04\u5e38\u7528-api",level:2},{value:"\u83b7\u53d6 Class \u5bf9\u8c61",id:"\u83b7\u53d6-class-\u5bf9\u8c61",level:3},{value:"\u54ea\u4e9b\u6709 Class \u5bf9\u8c61",id:"\u54ea\u4e9b\u6709-class-\u5bf9\u8c61",level:4},{value:"\u521b\u5efa\u7c7b\u5bf9\u8c61\uff08\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570\uff09",id:"\u521b\u5efa\u7c7b\u5bf9\u8c61\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570",level:3},{value:"\u83b7\u53d6\u7c7b\u5c5e\u6027",id:"\u83b7\u53d6\u7c7b\u5c5e\u6027",level:3},{value:"\u83b7\u53d6\u7c7b\u65b9\u6cd5",id:"\u83b7\u53d6\u7c7b\u65b9\u6cd5",level:3},{value:"\u83b7\u53d6\u7236\u7c7b",id:"\u83b7\u53d6\u7236\u7c7b",level:3},{value:"\u83b7\u53d6\u5185\u90e8\u7c7b",id:"\u83b7\u53d6\u5185\u90e8\u7c7b",level:3},{value:"\u83b7\u53d6\u63a5\u53e3",id:"\u83b7\u53d6\u63a5\u53e3",level:3},{value:"\u5176\u4ed6\u65b9\u6cd5",id:"\u5176\u4ed6\u65b9\u6cd5",level:3}],k={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u53cd\u5c04"},"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f\u3000\u3000"),(0,r.kt)("p",null,"Java \u53cd\u5c04\uff08Reflection\uff09\u5c31\u662f\u5728\u8fd0\u884c\u72b6\u6001\u4e2d\uff0c\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u7c7b\uff0c\u90fd\u80fd\u591f\u77e5\u9053\u8fd9\u4e2a\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff1b\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90fd\u80fd\u591f\u8c03\u7528\u5b83\u7684\u4efb\u610f\u65b9\u6cd5\u548c\u5c5e\u6027\uff1b\u5e76\u4e14\u80fd\u6539\u53d8\u5b83\u7684\u5c5e\u6027\u3002\uff08\u6458\u81ea\u7f51\u7edc\uff09"),(0,r.kt)("h2",{id:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48"},"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u80fd\u591f\u77e5\u9053\u8fd9\u4e2a\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5e76\u4e14\u53ef\u4ee5\u8c03\u7528\u5176\u65b9\u6cd5\u4e0e\u5c5e\u6027\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u5916\u90e8\uff0c\u4e0d\u901a\u8fc7\u4fee\u6539\u7c7b\u7684\u5f62\u5f0f\u6765\u7ed9\u7c7b\u589e\u52a0\u989d\u5916\u81ea\u5b9a\u4e49\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u6846\u67b6\u5f00\u53d1\u4e2d\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u7684\u7f16\u5199\u4ee3\u7801\uff0c\u5728\u8fd0\u884c\u65f6\u88c5\u914d\u65e0\u9700\u9488\u5bf9\u539f\u7c7b\u8fdb\u884c\u5927\u5e45\u5ea6\u6539\u52a8\uff0c\u964d\u4f4e\u4ee3\u7801\u8026\u5408\u5ea6\u3002"),(0,r.kt)("p",null,"\u5728\u5b89\u5353\u9006\u5411\u4e2d\uff0c\u53cd\u5c04\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u5bfb\u627e\u5230\u67d0\u4e2a\u7c7b\uff0c\u53bb\u6ce8\u5165\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u4ee5\u4fbf\u67e5\u770b\u8c03\u7528\u524d\u540e\u7684\u53c2\u6570\u4e0e\u7ed3\u679c\uff0c\u4e5f\u79f0\u4e4b\u4e3a hook\u3002"),(0,r.kt)("h2",{id:"\u53cd\u5c04\u5e38\u7528-api"},"\u53cd\u5c04\u5e38\u7528 API"),(0,r.kt)("h3",{id:"\u83b7\u53d6-class-\u5bf9\u8c61"},"\u83b7\u53d6 Class \u5bf9\u8c61"),(0,r.kt)("p",null,"\u5728\u53cd\u5c04\u4e2d\uff0c\u8981\u83b7\u53d6\u4e00\u4e2a\u7c7b\u6216\u8c03\u7528\u4e00\u4e2a\u7c7b\u7684\u65b9\u6cd5\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u83b7\u53d6\u5230\u8be5\u7c7b\u7684 Class \u5bf9\u8c61\uff0c\u83b7\u53d6 Class \u7c7b\u5bf9\u8c61\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u4f7f\u7528 Class.forName \u9759\u6001\u65b9\u6cd5\u3002\u5f53\u4f60\u77e5\u9053\u8be5\u7c7b\u7684\u5168\u8def\u5f84\u540d\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u83b7\u53d6 Class \u7c7b\u5bf9\u8c61\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Class cls = Class.forName("java.lang.String");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u4f7f\u7528 .class \u65b9\u6cd5\u3002")),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u53ea\u9002\u5408\u5728\u7f16\u8bd1\u524d\u5c31\u77e5\u9053\u64cd\u4f5c\u7684 Class\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Class cls = String.class;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\u3001\u4f7f\u7528\u7c7b\u5bf9\u8c61\u7684 getClass() \u65b9\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String str = new String("Hello");\nClass cls = str.getClass();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4\u3001ClassLoader.loadClass()")),(0,r.kt)("p",null,"\u524d\u63d0\uff1a\u5df2\u7ecf\u83b7\u53d6\u5230 ClassLoader \u7684\u60c5\u51b5\u4e0b\uff08Person \u662f\u5b9a\u4e49\u597d\u7684\u7c7b\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"String.class.getClassLoader()"),"\u83b7\u53d6\u5230\u5f97\u4e3a null\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ClassLoader clsl = Person.class.getClassLoader();\nClass<?> cls = clsl.loadClass("Person");\n')),(0,r.kt)("p",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u7c7b\u5bf9\u8c61\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"int.class")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer.TYPE")," \u5f97\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"int")),(0,r.kt)("p",null,"\u5305\u88c5\u7c7b\u7684 Class \u7c7b\u5bf9\u8c61\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer.class")," \u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"class java.lang.Integer")),(0,r.kt)("h4",{id:"\u54ea\u4e9b\u6709-class-\u5bf9\u8c61"},"\u54ea\u4e9b\u6709 Class \u5bf9\u8c61"),(0,r.kt)("p",null,"\u5e76\u975e\u6240\u6709 java \u5bf9\u8c61\u90fd\u6709 Class \u5bf9\u8c61\uff0c\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b")),(0,r.kt)("p",null,"\u5185\u90e8\u7c7b\u7684\u83b7\u53d6\u65b9\u5f0f\u901a\u8fc7$\u8fde\u63a5\u5916\u90e8\u7c7b\u4e0e\u5185\u90e8\u7c7b\uff0c\u591a\u4e2a\u5185\u90e8\u7c7b\u4e5f\u53ef\u901a\u8fc7$1\uff0c$2 \u4f9d\u6b21\u83b7\u53d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Class cls1 = Class.forName("OutClass$InnerClass");\nClass cls2 = Class.forName("OutClass$1");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3 =>",(0,r.kt)("inlineCode",{parentName:"li"},"interface DemoI")),(0,r.kt)("li",{parentName:"ul"},"\u6570\u7ec4 => ",(0,r.kt)("inlineCode",{parentName:"li"},"class [Ljava.lang.String;")),(0,r.kt)("li",{parentName:"ul"},"\u679a\u4e3e enum"),(0,r.kt)("li",{parentName:"ul"},"Thread.State"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u89e3 anntation"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u88c5\u7c7b"),(0,r.kt)("li",{parentName:"ul"},"void")),(0,r.kt)("h3",{id:"\u521b\u5efa\u7c7b\u5bf9\u8c61\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570"},"\u521b\u5efa\u7c7b\u5bf9\u8c61\uff08\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u901a\u8fc7 Class \u5bf9\u8c61\u7684 newInstance \u65b9\u6cd5"),"\uff08\u65e0\u6cd5\u4f20\u53c2\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Person p = Person.class.newInstance();\n// \u76f8\u5f53\u4e8e Person p = new Person();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u901a\u8fc7 Constructor \u5bf9\u8c61\u7684 newInstance() \u65b9\u6cd5")," \uff08\u53ef\u4f20\u53c2\u6570\uff09"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f20\u53c2\u6570\uff0c\u4f46\u9700\u8981\u77e5\u9053\u4f20\u5165\u53c2\u6570\u7c7b\u578b\uff0c\u4ee5\u786e\u5b9a\u54ea\u4e2a\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Constructor<Person> constructor = Person.class.getConstructor(String.class);\nPerson p = constructor.newInstance("kuizuo");\n')),(0,r.kt)("p",null,"\u5982\u679c\u6784\u9020\u51fd\u6570\u662f\u79c1\u6709\u65b9\u6cd5\uff0c\u5219\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"getDeclaredConstructor"),"\u83b7\u53d6 Constructor"),(0,r.kt)("p",null,"\u540c\u65f6\u8bbe\u7f6e\u662f\u5426\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor.setAccessible(true)")," \u624d\u53ef\u8bbf\u95ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Constructor<Person> constructor = Person.class.getDeclaredConstructor(String.class);\nconstructor.setAccessible(true);\nPerson p = constructor.newInstance("kuizuo");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getParamerTypes")," \u83b7\u53d6\u53c2\u6570\u7c7b\u578b\u6570\u7ec4(Class [])"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8981\u83b7\u53d6\u79c1\u6709\u5c5e\u6027\uff0c\u79c1\u6709\u65b9\u6cd5\u6216\u79c1\u6709\u6784\u9020\u5668\uff0c\u5219\u5fc5\u987b\u4f7f\u7528\u6709 declared \u5173\u952e\u5b57\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u7c7b\u5c5e\u6027"},"\u83b7\u53d6\u7c7b\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getField "),"\u53ea\u53ef\u83b7\u53d6\u516c\u6709\u5c5e\u6027")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Field nameField = Person.class.getField("name");\nString name =(String) nameField.get(p);\n')),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5c5e\u6027\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Field nameField = Person.class.getField("name");\nnameField.set(p,"kuizuo12");\n')),(0,r.kt)("p",null,"\u8bbe\u7f6e\u9759\u6001\u5c5e\u6027\u503c set \u7b2c\u4e00\u4e2a\u53c2\u6570\u7ed9 null \u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Field nameField = Person.class.getField("name");\nnameField.set(null,"kuizuo12");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getDeclaredField "),"\u53ea\u53ef\u83b7\u53d6\u6240\u6709\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getFields")," \u83b7\u53d6\u6240\u6709\u5171\u6709\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getDeclaredFields")," \u83b7\u53d6\u6240\u6709\u5c5e\u6027")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"  Field[] fields = Person.class.getDeclaredFields();\n  for (Field field : fields) {\n      System.out.println(field.getName());\n  }\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u7c7b\u65b9\u6cd5"},"\u83b7\u53d6\u7c7b\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getMethod")," \u83b7\u53d6")),(0,r.kt)("p",null,"\u53c2\u6570\u4e00\u4e3a\u65b9\u6cd5\u540d\uff0c\u5176\u4f59\u53c2\u6570\u4e3a\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("p",null,"\u8c03\u7528\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"method.invoke"),"\u8c03\u7528\uff0c\u53c2\u6570\u4e00\u4e3a\u5bf9\u8c61\uff0c\u5176\u4f59\u53c2\u6570\u4e3a\u5b9e\u53c2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Method method = Person.class.getMethod("say", String.class);\nmethod.invoke(p, "hello")\uff1b\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u662f\u9759\u6001\u65b9\u6cd5\uff0cinvoke \u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4f20\u5165 null")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getDeclaredMethod")," \u53ef\u83b7\u53d6\u79c1\u6709\u65b9\u6cd5 \uff08\u4e5f\u9700\u8981 setAccessible\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Method method = Person.class.getDeclaredMethod("say", String.class);\nmethod.setAccessible(true);\nmethod.invoke(p, "hello");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getMethods")," \u83b7\u53d6\u6240\u6709\u516c\u6709\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getDeclaredMethods"),"\u83b7\u53d6\u6240\u6709\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Method[] methods = Person.class.getDeclaredMethods();\nfor (Method method : methods) {\n    System.out.println(method.getName());\n}\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u7236\u7c7b"},"\u83b7\u53d6\u7236\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getSuperclass"))),(0,r.kt)("p",null,"\u63a5\u53e3\u65e0\u7236\u7c7b"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5185\u90e8\u7c7b"},"\u83b7\u53d6\u5185\u90e8\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getClasses"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Class<?>[] classes = Person.class.getClasses();\nSystem.out.println(classes[0]);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getDeclaredClasses")," \u83b7\u53d6\u6240\u6709\u5185\u90e8\u7c7b\uff08\u5305\u62ec\u79c1\u6709\uff09")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u63a5\u53e3"},"\u83b7\u53d6\u63a5\u53e3"),(0,r.kt)("p",null,"\u524d\u63d0\uff1a\u5b9e\u73b0\uff08implements\uff09\u4e00\u4e2a\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Class<?>[] interfaces = Person.class.getInterfaces();\nSystem.out.println(interfaces.length);\n")),(0,r.kt)("h3",{id:"\u5176\u4ed6\u65b9\u6cd5"},"\u5176\u4ed6\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5b98\u65b9\u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/"},"Class (Java Platform SE 8 ) (oracle.com)")),(0,r.kt)("p",null,"\u5927\u81f4\u5e38\u7528\u7684\u65b9\u6cd5\u5982\u4e0a\uff0c\u5176\u4f59\u7684 Class \u7c7b\u7684\u65b9\u6cd5\u8fd8\u6709"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getName \u83b7\u53d6\u5168\u7c7b\u540d"),(0,r.kt)("li",{parentName:"ul"},"getSimpleName \u83b7\u53d6\u7b80\u5355\u7c7b\u540d"),(0,r.kt)("li",{parentName:"ul"},"getModifiers \u83b7\u53d6\u6807\u8bc6\u7b26"),(0,r.kt)("li",{parentName:"ul"},"getAnnotations \u83b7\u53d6\u6ce8\u89e3"),(0,r.kt)("li",{parentName:"ul"},"getPackage \u83b7\u53d6\u5305\u540d")),(0,r.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5c31\u4e0d\u6f14\u793a\u4e86\u3002"))}m.isMDXComponent=!0}}]);