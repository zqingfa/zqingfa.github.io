"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1959],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||s;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34839:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={id:"frida-python-usage",slug:"/frida-python-usage",title:"Frida Python\u5e93\u4f7f\u7528",date:new Date("2021-02-10T00:00:00.000Z"),authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},p=void 0,d={unversionedId:"skill/reverse/android/frida/frida-python-usage",id:"skill/reverse/android/frida/frida-python-usage",title:"Frida Python\u5e93\u4f7f\u7528",description:"\u542f\u52a8 Frida \u670d\u52a1",source:"@site/docs/skill/reverse/android/frida/Frida Python\u5e93\u4f7f\u7528.md",sourceDirName:"skill/reverse/android/frida",slug:"/frida-python-usage",permalink:"/en/docs/frida-python-usage",draft:!1,tags:[{label:"frida",permalink:"/en/docs/tags/frida"},{label:"app",permalink:"/en/docs/tags/app"},{label:"hook",permalink:"/en/docs/tags/hook"}],version:"current",frontMatter:{id:"frida-python-usage",slug:"/frida-python-usage",title:"Frida Python\u5e93\u4f7f\u7528",date:"2021-02-10T00:00:00.000Z",authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},sidebar:"skill",previous:{title:"\u5b89\u5353",permalink:"/en/docs/category/\u5b89\u5353"},next:{title:"Frida java\u5c42\u81ea\u5410\u52a0\u5bc6\u7b97\u6cd5",permalink:"/en/docs/frida-java-encryption-algorithm"}},c={},l=[{value:"\u542f\u52a8 Frida \u670d\u52a1",id:"\u542f\u52a8-frida-\u670d\u52a1",level:2},{value:"\u5305\u540d\u9644\u52a0",id:"\u5305\u540d\u9644\u52a0",level:3},{value:"pid \u9644\u52a0",id:"pid-\u9644\u52a0",level:3},{value:"spawn \u65b9\u5f0f\u542f\u52a8",id:"spawn-\u65b9\u5f0f\u542f\u52a8",level:3},{value:"\u8fde\u63a5\u975e\u6807\u51c6\u7aef\u53e3",id:"\u8fde\u63a5\u975e\u6807\u51c6\u7aef\u53e3",level:3},{value:"\u8fde\u63a5\u591a\u4e2a\u8bbe\u5907",id:"\u8fde\u63a5\u591a\u4e2a\u8bbe\u5907",level:3},{value:"frida \u4e0e Python \u7684\u4ea4\u4e92",id:"frida-\u4e0e-python-\u7684\u4ea4\u4e92",level:2},{value:"recv \u4e0e script.post",id:"recv-\u4e0e-scriptpost",level:3},{value:"\u7b97\u6cd5\u8f6c\u53d1",id:"\u7b97\u6cd5\u8f6c\u53d1",level:2},{value:"rpc.exports \u4e0e script.exports",id:"rpcexports-\u4e0e-scriptexports",level:3},{value:"\u4f7f\u7528 fastapi \u642d\u5efa\u63a5\u53e3",id:"\u4f7f\u7528-fastapi-\u642d\u5efa\u63a5\u53e3",level:3}],u={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u542f\u52a8-frida-\u670d\u52a1"},"\u542f\u52a8 Frida \u670d\u52a1"),(0,s.kt)("h3",{id:"\u5305\u540d\u9644\u52a0"},"\u5305\u540d\u9644\u52a0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import frida, sys\n\njsCode = """ ...... """\nprocess = frida.get_usb_device().attach(\'com.dodonew.online\')\nscript = process.create_script(jsCode)\nscript.load()\nsys.stdin.read()\n')),(0,s.kt)("h3",{id:"pid-\u9644\u52a0"},"pid \u9644\u52a0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"process = frida.get_usb_device().attach(1234) # 1234 pid\n")),(0,s.kt)("h3",{id:"spawn-\u65b9\u5f0f\u542f\u52a8"},"spawn \u65b9\u5f0f\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'device = frida.get_usb_device()\npid = device.spawn(["com.dodonew.online"])    # \u4ee5\u6302\u8d77\u65b9\u5f0f\u521b\u5efa\u8fdb\u7a0b\nprocess = device.attach(pid)\nscript = process.create_script(jsCode)\nscript.load()\ndevice.resume(pid)  # \u52a0\u8f7d\u5b8c\u811a\u672c, \u6062\u590d\u8fdb\u7a0b\u8fd0\u884c\nsys.stdin.read()\n')),(0,s.kt)("h3",{id:"\u8fde\u63a5\u975e\u6807\u51c6\u7aef\u53e3"},"\u8fde\u63a5\u975e\u6807\u51c6\u7aef\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"process = frida.get_device_manager().add_remote_device('192.168.3.68:8888').attach('com.dodonew.online')\n")),(0,s.kt)("h3",{id:"\u8fde\u63a5\u591a\u4e2a\u8bbe\u5907"},"\u8fde\u63a5\u591a\u4e2a\u8bbe\u5907"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"process = frida.get_device_manager().add_remote_device('192.168.3.68:8888').attach('com.dodonew.online')\nscript = process.create_script(jsCode)\nscript.load()\nprocess1 = frida.get_device_manager().add_remote_device('192.168.3.69:8888').attach('com.dodonew.online')\nscript1 = process.create_script(jsCode)\nscript1.load()\nsys.stdin.read()\n")),(0,s.kt)("h2",{id:"frida-\u4e0e-python-\u7684\u4ea4\u4e92"},"frida \u4e0e Python \u7684\u4ea4\u4e92"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"{7-12,17}","{7-12,17}":!0},"# -*- coding: UTF-8 -*-\nimport frida, sys\n\njsCode = \"\"\"\"\"\"\n\n\ndef onMessage(message, data):\n    # print(message)\n    # {'type': 'send', 'payload':'some strings'}\n    if message[\"type\"] == 'send':\n        print(u\"[*] {0}\".format(message['payload']))\n    else:\n        print(message)\n\n\nprocess = frida.get_usb_device().attach('com.dodonew.online')\nscript = process.create_script(jsCode)\nscript.on('message', onMessage)\nscript.load()\nsys.stdin.read()\n")),(0,s.kt)("p",null,"\u5728 jscode \u4e2d\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"send(data)"),"\uff0c\u5c06\u6570\u636e\u4f20\u5165\u5230 onMessage \u56de\u8c03\u51fd\u6570\u4e2d\u5904\u7406\u3002"),(0,s.kt)("h3",{id:"recv-\u4e0e-scriptpost"},"recv \u4e0e script.post"),(0,s.kt)("p",null,"\u5728 js \u7aef\u4e2d\u53ef\u4ee5\u901a\u8fc7 send \u5411 python \u53d1\u9001\u6570\u636e\uff0c\u800c python \u8981\u5411 js \u53d1\u9001\u6570\u636e\u5219\u9700\u8981\u4f7f\u7528 script.post\uff0cjs \u4e2d\u4f7f\u7528 recv \u6765\u63a5\u6536\uff0c\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8-11,23-24}","{8-11,23-24}":!0},'jsCode = """\n    Java.perform(function(){\n        var Utils = Java.use(\'com.dodonew.online.util.Utils\');\n        Utils.md5.implementation = function(a){\n            console.log(\'MD5 string: \', a);\n            var retval = this.md5(a);\n            send(retval);\n            recv(function(obj){\n                console.log(JSON.stringify(obj));\n                retval = obj.data;\n            }).wait();\n            return retval;\n        }\n    });\n"""\n\n\ndef onMessage(message, data):\n   print(message)\n   if message["type"] == \'send\':\n       print(u"[*] {0}".format(message[\'payload\']))\n       time.sleep(10)\n       script.post({"data": "a123456"})\n   else:\n       print(message)\n')),(0,s.kt)("h2",{id:"\u7b97\u6cd5\u8f6c\u53d1"},"\u7b97\u6cd5\u8f6c\u53d1"),(0,s.kt)("h3",{id:"rpcexports-\u4e0e-scriptexports"},"rpc.exports \u4e0e script.exports"),(0,s.kt)("p",null,"js \u7aef\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"rpc.exports = { func: func}")),(0,s.kt)("p",null,"python \u7aef\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"script.exports.func()/script.exports.FUNC()")),(0,s.kt)("p",null,"\u6ce8: \u5982\u679c js \u5bfc\u51fa\u51fd\u6570\u4e2d\u5305\u542b\u9a7c\u5cf0\u547d\u540d\uff0c\u5219 python \u9700\u8981\u5c06\u5927\u5199\u66ff\u6362\u6210","_","\u5c0f\u5199\uff0c\u5982 getUser => get_user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\njsCode = """\n    function md5(data){\n        var result = "";\n        Java.perform(function(){\n            result = Java.use(\'com.dodonew.online.util.Utils\').md5(data);\n        });\n        return result;\n    }\n\n    rpc.exports = {\n        md5: md5\n    };\n"""\n\n\nresult = script.exports.md5(\'a123456\')\nprint(result)\n')),(0,s.kt)("h3",{id:"\u4f7f\u7528-fastapi-\u642d\u5efa\u63a5\u53e3"},"\u4f7f\u7528 fastapi \u642d\u5efa\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\nimport uvicorn\nimport frida\n\njsCode = """\n    function enc(data){\n        var result;\n        Java.perform(function(){\n            // \u4e3b\u52a8\u8c03\u7528\u96be\u4ee5\u590d\u73b0\u7684\u52a0\u5bc6\u7b97\u6cd5,\u5c06\u7ed3\u679c\u8fd4\u56de\n            result = "a123456" + data;\n        });\n        return result;\n    }\n    rpc.exports = {\n        enc: enc\n    };\n"""\n\nprocess = frida.get_device_manager().add_remote_device(\'192.168.3.68:27042\').attach("com.dodonew.online")\nscript = process.create_script(jsCode)\nscript.load()\n\n\napp = FastAPI()\n\n@app.get("/getEnc")\nasync def getEnc(username=None, password=None):\n    result = script.exports.enc({username: username, password: password})\n    return {"result": result}\n\nclass Item(BaseModel):\n    username: str = None\n    password: str = None\n\n@app.post("/getEnc")\nasync def getEncPost(postData: Item):\n    result = script.exports.enc(postData)\n    return {"result": result}\n\nif __name__ == \'__main__\':\n    uvicorn.run(app, port = 8080)\n\n')),(0,s.kt)("p",null,"http \u53d1\u9001 get \u8bf7\u6c42 \u5982 ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/getEnc?username=kuizuo&password=a123456%EF%BC%8C%E5%8D%B3%E5%8F%AF%E5%BE%97%E5%88%B0enc%E8%B0%83%E7%94%A8%E5%90%8E%E7%9A%84%E7%BB%93%E6%9E%9C%EF%BC%8Cpost%E8%AF%B7%E6%B1%82%E5%90%8C%E7%90%86"},"http://127.0.0.1:8080/getEnc?username=kuizuo&password=a123456\uff0c\u5373\u53ef\u5f97\u5230enc\u8c03\u7528\u540e\u7684\u7ed3\u679c\uff0cpost\u8bf7\u6c42\u540c\u7406")))}m.isMDXComponent=!0}}]);