"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[850],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),s=l,v=g["".concat(p,".").concat(s)]||g[s]||m[s]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),i=["components"],o={id:"python-cv2-usage",slug:"/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",date:new Date("2022-03-06T00:00:00.000Z"),authors:"kuizuo",tags:["python"],keywords:["python"]},p=void 0,c={unversionedId:"skill/python/python-cv2-usage",id:"skill/python/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",description:"\u6a21\u5757 cv2 \u7684\u7528\u6cd5 - \u9668\u843d&\u65b0\u751f - \u535a\u5ba2\u56ed (cnblogs.com)",source:"@site/docs/skill/python/Python\u4e2d\u7684cv2\u4f7f\u7528.md",sourceDirName:"skill/python",slug:"/python-cv2-usage",permalink:"/en/docs/python-cv2-usage",draft:!1,tags:[{label:"python",permalink:"/en/docs/tags/python"}],version:"current",frontMatter:{id:"python-cv2-usage",slug:"/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",date:"2022-03-06T00:00:00.000Z",authors:"kuizuo",tags:["python"],keywords:["python"]}},u={},m=[{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"\u8bfb\u53d6\u56fe\u50cf",id:"\u8bfb\u53d6\u56fe\u50cf",level:3},{value:"\u5199\u5165\u56fe\u50cf",id:"\u5199\u5165\u56fe\u50cf",level:3},{value:"\u663e\u793a\u56fe\u50cf",id:"\u663e\u793a\u56fe\u50cf",level:3},{value:"img \u7684\u4e00\u4e9b\u5c5e\u6027",id:"img-\u7684\u4e00\u4e9b\u5c5e\u6027",level:3},{value:"\u989c\u8272\u8f6c\u5316",id:"\u989c\u8272\u8f6c\u5316",level:3},{value:"cv \u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316",id:"cv-\u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316",level:3},{value:"\u6dfb\u52a0\u8fb9\u6846",id:"\u6dfb\u52a0\u8fb9\u6846",level:3},{value:"\u6dfb\u52a0\u6587\u672c",id:"\u6dfb\u52a0\u6587\u672c",level:3},{value:"\u56fe\u7247\u7f29\u653e",id:"\u56fe\u7247\u7f29\u653e",level:3}],g={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/shizhengwen/p/8719062.html"},"\u6a21\u5757 cv2 \u7684\u7528\u6cd5 - \u9668\u843d&\u65b0\u751f - \u535a\u5ba2\u56ed (cnblogs.com)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zlel/p/9267629.html"},"Python-OpenCV \u57fa\u672c\u64cd\u4f5c cv2 - \u83dc\u9e1f\u7a0b\u5e8f\u733f","_","python - \u535a\u5ba2\u56ed (cnblogs.com)")),(0,a.kt)("h2",{id:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u56fe\u50cf"},"\u8bfb\u53d6\u56fe\u50cf"),(0,a.kt)("p",null,"cv2.imread(filepath,flags)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"filepath\uff1a\u8981\u8bfb\u5165\u56fe\u7247\u7684\u5b8c\u6574\u8def\u5f84")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"flags\uff1a\u8bfb\u5165\u56fe\u7247\u7684\u6807\u5fd7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cv2.IMREAD_COLOR\uff1a\u9ed8\u8ba4\u53c2\u6570(3)\uff0c\u8bfb\u5165\u4e00\u526f\u5f69\u8272\u56fe\u7247\uff0c\u5ffd\u7565 alpha \u901a\u9053"),(0,a.kt)("li",{parentName:"ul"},"cv2.IMREAD_GRAYSCALE\uff1a\u8bfb\u5165\u7070\u5ea6\u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"cv2.IMREAD_UNCHANGED\uff1a\u987e\u540d\u601d\u4e49\uff0c\u8bfb\u5165\u5b8c\u6574\u56fe\u7247\uff0c\u5305\u62ec alpha \u901a\u9053")))),(0,a.kt)("h3",{id:"\u5199\u5165\u56fe\u50cf"},"\u5199\u5165\u56fe\u50cf"),(0,a.kt)("p",null,"cv2.imwrite(filepath, img, flags)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"filepath: \u8981\u4fdd\u5b58\u56fe\u50cf\u7684\u6587\u4ef6\u540d"),(0,a.kt)("li",{parentName:"ul"},"img: \u8981\u4fdd\u5b58\u7684\u56fe\u50cf"),(0,a.kt)("li",{parentName:"ul"},"flags: \u53ef\u9009\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u5b83\u9488\u5bf9\u7279\u5b9a\u7684\u683c\u5f0f\uff1a\u5bf9\u4e8e JPEG\uff0c\u5176\u8868\u793a\u7684\u662f\u56fe\u50cf\u7684\u8d28\u91cf\uff0c\u7528 0 - 100 \u7684\u6574\u6570\u8868\u793a\uff0c\u9ed8\u8ba4 95;\u5bf9\u4e8e png ,\u7b2c\u4e09\u4e2a\u53c2\u6570\u8868\u793a\u7684\u662f\u538b\u7f29\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a 3.")),(0,a.kt)("p",null,"cv2.IMWRITE_JPEG_QUALITY \u7c7b\u578b\u4e3a long ,\u5fc5\u987b\u8f6c\u6362\u6210 int"),(0,a.kt)("p",null,"cv2.IMWRITE_PNG_COMPRESSION, \u4ece 0 \u5230 9 \u538b\u7f29\u7ea7\u522b\u8d8a\u9ad8\u56fe\u50cf\u8d8a\u5c0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cv2.imwrite('1.png',img, [int(cv2.IMWRITE_JPEG_QUALITY), 95])\ncv2.imwrite('1.png',img, [int(cv2.IMWRITE_PNG_COMPRESSION), 9])\n")),(0,a.kt)("h3",{id:"\u663e\u793a\u56fe\u50cf"},"\u663e\u793a\u56fe\u50cf"),(0,a.kt)("p",null,"\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nimg = cv2.imread('temp.jpg')\ncv2.imwrite('save.jpg', img)\ncv2.imshow('img', img)\ncv2.waitKey(0)\ncv2.destroyAllWindow()\n")),(0,a.kt)("h3",{id:"img-\u7684\u4e00\u4e9b\u5c5e\u6027"},"img \u7684\u4e00\u4e9b\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"img.shape # (1200, 1920, 3) \u5bbd\u3001\u9ad8\u3001\u901a\u9053\u6570\nimg.size # \u50cf\u7d20\u4e2a\u6570\nimg.dtype # uint8\n")),(0,a.kt)("h3",{id:"\u989c\u8272\u8f6c\u5316"},"\u989c\u8272\u8f6c\u5316"),(0,a.kt)("p",null,"\u7531\u4e8e cv2 \u5f97\u5230\u7684\u56fe\u7247\u662f BGR \u683c\u5f0f\uff0c\u800c\u975e\u4f20\u7edf\u7684 RGB \u683c\u5f0f\uff0c\u56e0\u6b64\u9700\u8981\u8fdb\u884c\u8f6c\u5316\u3002"),(0,a.kt)("p",null,"\u6709\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"im_bgr = cv2.imread('temp.jpg')\n\nim_rgb = im_bgr[:, :, [2, 1, 0]]\nim_rgb = im_bgr[:, :, ::-1]\nim_rgb = cv2.cvtColor(im_bgr, cv2.COLOR_BGR2RGB)\n")),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u989c\u8272\u7a7a\u95f4\u8f6c\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#\u5f69\u8272\u56fe\u50cf\u8f6c\u4e3a\u7070\u5ea6\u56fe\u50cf\nimg2 = cv2.cvtColor(img,cv2.COLOR_RGB2GRAY)\n#\u7070\u5ea6\u56fe\u50cf\u8f6c\u4e3a\u5f69\u8272\u56fe\u50cf\nimg3 = cv2.cvtColor(img,cv2.COLOR_GRAY2RGB)\n# cv2.COLOR_X2Y\uff0c\u5176\u4e2dX,Y = RGB, BGR, GRAY, HSV, YCrCb, XYZ, Lab, Luv, HLS\n")),(0,a.kt)("h3",{id:"cv-\u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316"},"cv \u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def bytes2cv(im):\n    return cv2.imdecode(np.array(bytearray(im), dtype='uint8'), cv2.IMREAD_UNCHANGED)\n\ndef cv2bytes(im):\n    return np.array(cv2.imencode('.png', im)[1]).tobytes()\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u8fb9\u6846"},"\u6dfb\u52a0\u8fb9\u6846"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import cv2\n\nposes = [[111, 46, 151, 86], [177, 46, 212, 80],\n         [246, 89, 286, 128], [240, 18, 280, 56]]\n\nimg = cv2.imread("1.jpg")\n\nfor box in poses:\n    x1, y1, x2, y2 = box\n    img = cv2.rectangle(img, (x1, y1), (x2, y2), color=(0, 0, 255), thickness=2)\n\ncv2.imwrite("result.jpg", img)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/result.png",alt:"result"})),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u6587\u672c"},"\u6dfb\u52a0\u6587\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import cv2\n\nimg = cv2.imread(\'temp.jpg\')\n# \u56fe\u7247\u5bf9\u8c61\u3001\u6587\u672c\u3001\u50cf\u7d20\u3001\u5b57\u4f53\u3001\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u3001\u5b57\u4f53\u7c97\u7ec6\nimg_text = cv2.putText(img, "kuizuo", (50, 50),\n                    cv2.FONT_HERSHEY_DUPLEX, 5.5, (35, 175, 255), 2)\ncv2.imwrite("result.jpg", img_text)\n')),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220306203918438.png",alt:"image-20220306203918438"})),(0,a.kt)("h3",{id:"\u56fe\u7247\u7f29\u653e"},"\u56fe\u7247\u7f29\u653e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import cv2\n\nimg = cv2.imread("1.png")\ncv2.imshow("img", img)\n\nimg1 = cv2.resize(img, (200, 100))\n\ncv2.imshow("img1", img1)\n\ncv2.waitKey()\n')))}s.isMDXComponent=!0}}]);