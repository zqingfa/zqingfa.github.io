"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6008],{76008:function(e,t,n){n.d(t,{T2:function(){return Te}});var r=n(67294);function o(e,t){return e.map((function(e,n){return e+t[n]}))}function i(e,t){return e.map((function(e,n){return e-t[n]}))}function a(e){return Math.hypot.apply(Math,e)}function s(e,t){void 0===t&&(t=e);var n=a(t),r=0===n?0:1/n,o=t.map((function(e){return r*e}));return{distance:a(e),direction:o}}function u(e,t,n){var r=a(t),o=0===r?0:1/r,i=0===n?0:1/n,s=i*r,u=t.map((function(e){return i*e})),c=t.map((function(e){return o*e}));return{velocities:u,velocity:s,distance:a(e),direction:c}}function c(e){return Math.sign?Math.sign(e):Number(e>0)-Number(e<0)||+e}function l(e,t,n){return 0===t||Math.abs(t)===1/0?function(e,t){return Math.pow(e,5*t)}(e,n):e*t*n/(t+n*e)}function d(e,t,n,r){return void 0===r&&(r=.15),0===r?function(e,t,n){return Math.max(t,Math.min(e,n))}(e,t,n):e<t?-l(t-e,n-t,r)+t:e>n?+l(e-n,n-t,r)+n:e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function S(){}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?S:1===t.length?t[0]:function(){for(var e,n,r=y(t);!(n=r()).done;){var o=n.value;e=o.apply(this,arguments)||e}return e}}function w(e,t){if(void 0===e){if(void 0===t)throw new Error("Must define fallback value if undefined is expected");e=t}return Array.isArray(e)?e:[e,e]}function _(e,t){return Object.assign({},t,e||{})}function T(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}return e}function G(e,t){void 0===e&&(e={});for(var n={},r=0,o=Object.entries(t);r<o.length;r++){var i=o[r],a=i[0],s=i[1];switch(typeof s){case"function":n[a]=s.call(n,e[a],a,e);break;case"object":n[a]=G(e[a],s);break;case"boolean":s&&(n[a]=e[a])}}return n}function E(){return"undefined"!=typeof window&&"ontouchstart"in window}function M(e){return"pointerId"in e?null:"touchend"===e.type?e.changedTouches:e.targetTouches}function P(e){return Array.from(M(e)).map((function(e){return e.identifier}))}function I(e){return{buttons:"buttons"in e?e.buttons:0,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey}}var D=function(e){return e};function K(e,t){void 0===t&&(t=D);var n=M(e),r=n?n[0]:e;return t([r.clientX,r.clientY])}function x(e,t,n){void 0===n&&(n=D);var r=Array.from(e.touches).filter((function(e){return t.includes(e.identifier)})),o=r[0],i=r[1];if(!o||!i)throw Error("The event doesn't have two pointers matching the pointerIds");var a=i.clientX-o.clientX,s=i.clientY-o.clientY,u=(i.clientX+o.clientX)/2,c=(i.clientY+o.clientY)/2;return{values:n([Math.hypot(a,s),-180*Math.atan2(a,s)/Math.PI]),origin:n([u,c])}}function C(e,t){void 0===t&&(t=D);var n=e.currentTarget,r=n.scrollX,o=n.scrollY,i=n.scrollLeft,a=n.scrollTop;return t([r||i||0,o||a||0])}function k(e,t){void 0===t&&(t=D);var n=e.deltaX,r=e.deltaY,o=e.deltaMode;return 1===o?(n*=40,r*=40):2===o&&(n*=800,r*=800),t([n,r])}function O(e,t){return void 0===t&&(t=D),t([e.scale,e.rotation])}var H={threshold:function(e){return void 0===e&&(e=0),w(e)},rubberband:function(e){switch(void 0===e&&(e=0),e){case!0:return w(.15);case!1:return w(0);default:return w(e)}},enabled:function(e){return void 0===e&&(e=!0),e},triggerAllEvents:function(e){return void 0===e&&(e=!1),e},initial:function(e){return void 0===e&&(e=0),"function"==typeof e?e:w(e)},transform:!0},W=f({},H,{axis:!0,lockDirection:function(e){return void 0===e&&(e=!1),e},bounds:function(e){if(void 0===e&&(e={}),"function"==typeof e)return function(t){return W.bounds(e(t))};var t=e,n=t.left,r=void 0===n?-1/0:n,o=t.right,i=void 0===o?1/0:o,a=t.top,s=void 0===a?-1/0:a,u=t.bottom;return[[r,i],[s,void 0===u?1/0:u]]}}),A="undefined"!=typeof window&&window.document&&window.document.createElement,L={enabled:function(e){return void 0===e&&(e=!0),e},domTarget:!0,window:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return void 0===e&&(e=A?window:void 0),e})),eventOptions:function(e){var t=void 0===e?{}:e,n=t.passive,r=void 0===n||n,o=t.capture;return{passive:r,capture:void 0!==o&&o}},transform:!0},j=f({},H,{bounds:function(e,t,n){var r=n.distanceBounds,o=void 0===r?{}:r,i=n.angleBounds,a=void 0===i?{}:i,s=function(e){var t=_(T(o,e),{min:-1/0,max:1/0});return[t.min,t.max]},u=function(e){var t=_(T(a,e),{min:-1/0,max:1/0});return[t.min,t.max]};return"function"!=typeof o&&"function"!=typeof a?[s(),u()]:function(e){return[s(e),u(e)]}}}),Y=f({},W,{useTouch:function(e){void 0===e&&(e=!1);var t=E(),n="undefined"!=typeof window&&"onpointerdown"in window;return!(!e||!t)||!(!t||n)},experimental_preventWindowScrollY:function(e){return void 0===e&&(e=!1),e},threshold:function(e,t,n){var r=n.filterTaps,o=void 0!==r&&r,i=n.lockDirection,a=void 0!==i&&i,s=n.axis,u=w(e,o?3:a||(void 0===s?void 0:s)?1:0);return this.filterTaps=o,u},swipeVelocity:function(e){return void 0===e&&(e=.5),w(e)},swipeDistance:function(e){return void 0===e&&(e=50),w(e)},swipeDuration:function(e){return void 0===e&&(e=250),e},delay:function(e){switch(void 0===e&&(e=0),e){case!0:return 180;case!1:return 0;default:return e}}});function V(e){return void 0===e&&(e={}),G(e,L)}function X(e){return void 0===e&&(e={}),G(e,W)}function B(e){return void 0===e&&(e={}),G(e,j)}function R(e){return void 0===e&&(e={}),G(e,Y)}function U(e){return f({_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_threshold:[0,0],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:S,canceled:!1,memo:void 0,args:void 0},e)}function z(){return{shared:{hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},drag:U({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),pinch:U({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),wheel:U({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),move:U({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),scroll:U({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0})}}var F=new Map,N=function(e){return e},$=function(){function e(e,t){var n=this;void 0===t&&(t=[]),this.controller=e,this.args=t,this.debounced=!0,this.setTimeout=function(e,t){var r;void 0===t&&(t=140),clearTimeout(n.controller.timeouts[n.stateKey]);for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];n.controller.timeouts[n.stateKey]=(r=window).setTimeout.apply(r,[e,t].concat(i))},this.clearTimeout=function(){clearTimeout(n.controller.timeouts[n.stateKey])},this.fireGestureHandler=function(e){if(void 0===e&&(e=!1),n.state._blocked)return n.debounced||(n.state._active=!1,n.clean()),null;if(!e&&!n.state.intentional&&!n.config.triggerAllEvents)return null;if(n.state.intentional){var t=n.state.active,r=n.state._active;n.state.active=r,n.state.first=r&&!t,n.state.last=t&&!r,n.controller.state.shared[n.ingKey]=r}var o=n.controller.pointerIds.size||n.controller.touchIds.size,i=n.controller.state.shared.buttons>0||o>0,a=f({},n.controller.state.shared,n.state,n.mapStateValues(n.state),{locked:!!document.pointerLockElement,touches:o,down:i}),s=n.handler(a);return n.state.memo=void 0!==s?s:n.state.memo,a},this.controller=e,this.args=t}var t,n,r,a=e.prototype;return a.updateSharedState=function(e){Object.assign(this.controller.state.shared,e)},a.updateGestureState=function(e){Object.assign(this.state,e)},a.checkIntentionality=function(e,t){return{_intentional:e,_blocked:!1}},a.getMovement=function(e){var t=this.config.rubberband,n=this.state,r=n._bounds,a=n._initial,s=n._active,u=n._intentional,c=n.lastOffset,l=n.movement,d=n._threshold,v=this.getInternalMovement(e,this.state),h=!1===u[0]?q(v[0],d[0]):u[0],p=!1===u[1]?q(v[1],d[1]):u[1],g=this.checkIntentionality([h,p],v);if(g._blocked)return f({},g,{_movement:v,delta:[0,0]});var m=g._intentional,y=v,S=[!1!==m[0]?v[0]-m[0]:0,!1!==m[1]?v[1]-m[1]:0],b=o(S,c),w=s?t:[0,0];return S=J(r,o(S,a),w),f({},g,{intentional:!1!==m[0]||!1!==m[1],_initial:a,_movement:y,movement:S,values:e,offset:J(r,b,w),delta:i(S,l)})},a.clean=function(){this.clearTimeout()},t=e,(n=[{key:"config",get:function(){return this.controller.config[this.stateKey]}},{key:"enabled",get:function(){return this.controller.config.enabled&&this.config.enabled}},{key:"state",get:function(){return this.controller.state[this.stateKey]}},{key:"handler",get:function(){return this.controller.handlers[this.stateKey]}},{key:"transform",get:function(){return this.config.transform||this.controller.config.transform||N}}])&&v(t.prototype,n),r&&v(t,r),e}();function q(e,t){return Math.abs(e)>=t&&c(e)*t}function J(e,t,n){var r=t[0],o=t[1],i=n[0],a=n[1],s=e[0],u=s[0],c=s[1],l=e[1],v=l[0],f=l[1];return[d(r,u,c,i),d(o,v,f,a)]}function Q(e,t,n){var r=e.state,o=t.timeStamp,i=t.type,a=r.values;return{_lastEventType:i,event:t,timeStamp:o,elapsedTime:n?0:o-r.startTime,previous:a}}function Z(e,t,n,r){var o=e.state,a=e.config,s=e.stateKey,u=e.args,c=e.transform,l=o.offset,d=n.timeStamp,v=a.initial,h=a.bounds,p=i(c(a.threshold),c([0,0])).map(Math.abs),g=f({},z()[s],{_active:!0,args:u,values:t,initial:null!=r?r:t,_threshold:p,offset:l,lastOffset:l,startTime:d});return f({},g,{_initial:T(v,g),_bounds:T(h,g)})}var ee=function(e){var t=this;this.classes=e,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=E(),this.supportsGestureEvents=function(){try{return"constructor"in GestureEvent}catch(e){return!1}}(),this.bind=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var o,i={},a=y(t.classes);!(o=a()).done;){var s=o.value;new s(t,n).addBindings(i)}var u=function(e){ce(i,e,(function(r){return t.nativeRefs[e](f({},t.state.shared,{event:r,args:n}))}))};for(var c in t.nativeRefs)u(c);return t.config.domTarget?ie(t,i):ae(t,i)},this.effect=function(){return t.config.domTarget&&t.bind(),t.clean},this.clean=function(){var e=ue(t.config),n=t.config.eventOptions;e&&de(e,se(t.domListeners),n),Object.values(t.timeouts).forEach(clearTimeout),function(e){var t=e.config,n=t.window,r=t.eventOptions,o=e.windowListeners;if(!n)return;for(var i in o){de(n,o[i],r)}e.windowListeners={}}(t)},this.classes=e,this.state=z(),this.timeouts={},this.domListeners=[],this.windowListeners={}};function te(e,t){"pointerId"in t?e.pointerIds.add(t.pointerId):e.touchIds=new Set(P(t))}function ne(e,t){"pointerId"in t?e.pointerIds.delete(t.pointerId):P(t).forEach((function(t){return e.touchIds.delete(t)}))}function re(e,t,n){var r=e.config,o=e.windowListeners;void 0===n&&(n=r.eventOptions),r.window&&(de(r.window,o[t],n),delete o[t])}function oe(e,t,n,r){var o=e.config,i=e.windowListeners;void 0===n&&(n=[]),void 0===r&&(r=o.eventOptions),o.window&&(de(o.window,i[t],r),le(o.window,i[t]=n,r))}function ie(e,t){var n=e.config,r=e.domListeners,o=ue(n);if(!o)throw new Error("domTarget must be defined");var i=n.eventOptions;de(o,se(r),i);for(var a=0,s=Object.entries(t);a<s.length;a++){var u=s[a],c=u[0],l=u[1],d=c.slice(2).toLowerCase();r.push([d,b.apply(void 0,l)])}le(o,r,i)}function ae(e,t){for(var n={},r=e.config.eventOptions.capture?"Capture":"",o=0,i=Object.entries(t);o<i.length;o++){var a=i[o],s=a[0],u=a[1],c=Array.isArray(u)?u:[u];n[s+r]=b.apply(void 0,c)}return n}function se(e){return void 0===e&&(e=[]),e.splice(0,e.length)}function ue(e){var t=e.domTarget;return t&&"current"in t?t.current:t}function ce(e,t,n){e[t]||(e[t]=[]),e[t].push(n)}function le(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={});for(var r,o=y(t);!(r=o()).done;){var i=r.value,a=i[0],s=i[1];e.addEventListener(a,s,n)}}function de(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={});for(var r,o=y(t);!(r=o()).done;){var i=r.value,a=i[0],s=i[1];e.removeEventListener(a,s,n)}}function ve(e,t,n){void 0===n&&(n={});var o=function(e){var t=new Set;e.drag&&t.add(F.get("drag"));e.wheel&&t.add(F.get("wheel"));e.scroll&&t.add(F.get("scroll"));e.move&&t.add(F.get("move"));e.pinch&&t.add(F.get("pinch"));e.hover&&t.add(F.get("hover"));return t}(e),i=r.useMemo((function(){return new ee(o)}),[]);return i.config=t,i.handlers=e,i.nativeRefs=n,r.useEffect(i.effect,[]),i.config.domTarget?fe:i.bind}function fe(){0}var he=function(e){function t(){return e.apply(this,arguments)||this}h(t,e);var n=t.prototype;return n.getInternalMovement=function(e,t){return i(e,t.initial)},n.checkIntentionality=function(e,t){if(!1===e[0]&&!1===e[1])return{_intentional:e,axis:this.state.axis};var n=t.map(Math.abs),r=n[0],o=n[1],i=this.state.axis||(r>o?"x":r<o?"y":void 0);return this.config.axis||this.config.lockDirection?i?this.config.axis&&i!==this.config.axis?{_intentional:e,_blocked:!0,axis:i}:(e["x"===i?1:0]=!1,{_intentional:e,_blocked:!1,axis:i}):{_intentional:[!1,!1],_blocked:!1,axis:i}:{_intentional:e,_blocked:!1,axis:i}},n.getKinematics=function(e,t){var n=this.getMovement(e);if(!n._blocked){var r=t.timeStamp-this.state.timeStamp;Object.assign(n,u(n.movement,n.delta,r))}return n},n.mapStateValues=function(e){return{xy:e.values,vxvy:e.velocities}},t}($);function pe(e){"persist"in e&&"function"==typeof e.persist&&e.persist()}var ge=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="dragging",t.stateKey="drag",t.setPointerCapture=function(e){if(!t.config.useTouch&&!document.pointerLockElement){var n=e.target,r=e.pointerId;n&&"setPointerCapture"in n&&n.setPointerCapture(r),t.updateGestureState({_dragTarget:n,_dragPointerId:r})}},t.releasePointerCapture=function(){if(!t.config.useTouch&&!document.pointerLockElement){var e=t.state,n=e._dragTarget,r=e._dragPointerId;if(r&&n&&"releasePointerCapture"in n&&(!("hasPointerCapture"in n)||n.hasPointerCapture(r)))try{n.releasePointerCapture(r)}catch(o){}}},t.preventScroll=function(e){t.state._dragPreventScroll&&e.cancelable&&e.preventDefault()},t.getEventId=function(e){return t.config.useTouch?e.changedTouches[0].identifier:e.pointerId},t.isValidEvent=function(e){return t.state._pointerId===t.getEventId(e)},t.shouldPreventWindowScrollY=t.config.experimental_preventWindowScrollY&&t.controller.supportsTouchEvents,t.setUpWindowScrollDetection=function(e){pe(e),oe(t.controller,t.stateKey,[["touchmove",t.preventScroll],["touchend",t.clean.bind(g(t))],["touchcancel",t.clean.bind(g(t))]],{passive:!1}),t.setTimeout(t.startDrag.bind(g(t)),250,e)},t.setUpDelayedDragTrigger=function(e){t.state._dragDelayed=!0,pe(e),t.setTimeout(t.startDrag.bind(g(t)),t.config.delay,e)},t.setStartState=function(e){var n=K(e,t.transform);t.updateSharedState(I(e)),t.updateGestureState(f({},Z(g(t),n,e),Q(g(t),e,!0),{_pointerId:t.getEventId(e)})),t.updateGestureState(t.getMovement(n))},t.onDragStart=function(e){te(t.controller,e),t.enabled&&!t.state._active&&(t.setStartState(e),t.setPointerCapture(e),t.shouldPreventWindowScrollY?t.setUpWindowScrollDetection(e):t.config.delay>0?t.setUpDelayedDragTrigger(e):t.startDrag(e,!0))},t.onDragChange=function(e){if(!t.state.canceled&&t.state._active&&t.isValidEvent(e)&&(t.state._lastEventType!==e.type||e.timeStamp!==t.state.timeStamp)){var n;if(document.pointerLockElement){var r=e.movementX,i=e.movementY;n=o(t.transform([r,i]),t.state.values)}else n=K(e,t.transform);var s=t.getKinematics(n,e);if(!t.state._dragStarted){if(t.state._dragDelayed)return void t.startDrag(e);if(!t.shouldPreventWindowScrollY)return;if(t.state._dragPreventScroll||!s.axis)return;if("x"!==s.axis)return void(t.state._active=!1);t.startDrag(e)}var u=I(e);t.updateSharedState(u);var c=Q(g(t),e),l=a(s._movement),d=t.state._dragIsTap;d&&l>=3&&(d=!1),t.updateGestureState(f({},c,s,{_dragIsTap:d})),t.fireGestureHandler()}},t.onDragEnd=function(e){if(ne(t.controller,e),t.isValidEvent(e)&&(t.clean(),t.state._active)){t.state._active=!1;var n=t.state._dragIsTap,r=t.state.velocities,o=r[0],i=r[1],a=t.state.movement,s=a[0],u=a[1],l=t.state._intentional,d=l[0],v=l[1],h=t.config.swipeVelocity,p=h[0],m=h[1],y=t.config.swipeDistance,S=y[0],b=y[1],w=t.config.swipeDuration,_=f({},Q(g(t),e),t.getMovement(t.state.values)),T=[0,0];_.elapsedTime<w&&(!1!==d&&Math.abs(o)>p&&Math.abs(s)>S&&(T[0]=c(o)),!1!==v&&Math.abs(i)>m&&Math.abs(u)>b&&(T[1]=c(i))),t.updateSharedState({buttons:0}),t.updateGestureState(f({},_,{tap:n,swipe:T})),t.fireGestureHandler(t.config.filterTaps&&!0===n)}},t.clean=function(){e.prototype.clean.call(g(t)),t.state._dragStarted=!1,t.releasePointerCapture(),re(t.controller,t.stateKey)},t.onCancel=function(){t.state.canceled||(t.updateGestureState({canceled:!0,_active:!1}),t.updateSharedState({buttons:0}),setTimeout((function(){return t.fireGestureHandler()}),0))},t.onClick=function(e){t.state._dragIsTap||e.stopPropagation()},t}h(t,e);var n=t.prototype;return n.startDrag=function(e,t){void 0===t&&(t=!1),this.state._active&&!this.state._dragStarted&&(t||this.setStartState(e),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())},n.addBindings=function(e){(this.config.useTouch?(ce(e,"onTouchStart",this.onDragStart),ce(e,"onTouchMove",this.onDragChange),ce(e,"onTouchEnd",this.onDragEnd),ce(e,"onTouchCancel",this.onDragEnd)):(ce(e,"onPointerDown",this.onDragStart),ce(e,"onPointerMove",this.onDragChange),ce(e,"onPointerUp",this.onDragEnd),ce(e,"onPointerCancel",this.onDragEnd)),this.config.filterTaps)&&ce(e,this.controller.config.eventOptions.capture?"onClick":"onClickCapture",this.onClick)},t}(he);var me=function(e){function t(){return e.apply(this,arguments)||this}h(t,e);var n=t.prototype;return n.getInternalMovement=function(e,t){var n=t.values[1],r=e[0],o=e[1],a=void 0===o?n:o,s=a-n,u=t.turns;return Math.abs(s)>270&&(u+=c(s)),i([r,a-360*u],t.initial)},n.getKinematics=function(e,t){var n=this.getMovement(e),r=(e[1]-n._movement[1]-this.state.initial[1])/360,o=t.timeStamp-this.state.timeStamp;return f({turns:r},n,p(u(n.movement,n.delta,o),["distance","velocity"]))},n.mapStateValues=function(e){return{da:e.values,vdva:e.velocities}},t}($),ye=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="pinching",t.stateKey="pinch",t.onPinchStart=function(e){te(t.controller,e);var n=t.controller.touchIds;if(t.enabled&&!(t.state._active&&t.state._pointerIds.every((function(e){return n.has(e)}))||n.size<2)){var r=Array.from(n).slice(0,2),o=x(e,r,t.transform),i=o.values,a=o.origin;t.updateSharedState(I(e)),t.updateGestureState(f({},Z(g(t),i,e),Q(g(t),e,!0),{_pointerIds:r,cancel:t.onCancel,origin:a})),t.updateGestureState(t.getMovement(i)),t.fireGestureHandler()}},t.onPinchChange=function(e){var n=t.state,r=n.canceled,o=n._active;if(!r&&o&&e.timeStamp!==t.state.timeStamp){var i=I(e);t.updateSharedState(i);try{var a=x(e,t.state._pointerIds,t.transform),s=a.values,u=a.origin,c=t.getKinematics(s,e);t.updateGestureState(f({},Q(g(t),e),c,{origin:u})),t.fireGestureHandler()}catch(l){t.onPinchEnd(e)}}},t.onPinchEnd=function(e){ne(t.controller,e);var n=P(e);t.state._pointerIds.every((function(e){return!n.includes(e)}))||(t.clean(),t.state._active&&(t.updateGestureState(f({},Q(g(t),e),t.getMovement(t.state.values),{_active:!1})),t.fireGestureHandler()))},t.onCancel=function(){t.state.canceled||(t.updateGestureState({_active:!1,canceled:!0}),setTimeout((function(){return t.fireGestureHandler()}),0))},t.onGestureStart=function(e){if(t.enabled){e.preventDefault();var n=O(e,t.transform);t.updateSharedState(I(e)),t.updateGestureState(f({},Z(g(t),n,e),Q(g(t),e,!0),{origin:[e.clientX,e.clientY],cancel:t.onCancel})),t.updateGestureState(t.getMovement(n)),t.fireGestureHandler()}},t.onGestureChange=function(e){var n=t.state,r=n.canceled,o=n._active;if(!r&&o){e.preventDefault();var i=I(e);t.updateSharedState(i);var a=O(e,t.transform);a[0]=260*(a[0]-t.state.event.scale)+t.state.values[0];var s=t.getKinematics(a,e);t.updateGestureState(f({},Q(g(t),e),s,{origin:[e.clientX,e.clientY]})),t.fireGestureHandler()}},t.onGestureEnd=function(e){t.clean(),t.state._active&&(t.updateGestureState(f({},Q(g(t),e),t.getMovement(t.state.values),{_active:!1,origin:[e.clientX,e.clientY]})),t.fireGestureHandler())},t.wheelShouldRun=function(e){return t.enabled&&e.ctrlKey},t.getWheelValuesFromEvent=function(e){var n=k(e,t.transform)[1],r=t.state.values,o=r[0],i=r[1],a=7*-n,s=void 0!==i?i:0;return{values:[o+a,s],origin:[e.clientX,e.clientY],delta:[a,s]}},t.onWheel=function(e){t.wheelShouldRun(e)&&(t.setTimeout(t.onWheelEnd),t.state._active?t.onWheelChange(e):t.onWheelStart(e))},t.onWheelStart=function(e){var n=t.getWheelValuesFromEvent(e),r=n.values,o=n.delta,i=n.origin;e.cancelable&&e.preventDefault(),t.updateSharedState(I(e)),t.updateGestureState(f({},Z(g(t),r,e,t.state.values),Q(g(t),e,!0),{offset:r,delta:o,origin:i})),t.updateGestureState(t.getMovement(r)),t.fireGestureHandler()},t.onWheelChange=function(e){e.cancelable&&e.preventDefault(),t.updateSharedState(I(e));var n=t.getWheelValuesFromEvent(e),r=n.values,o=n.origin,i=n.delta;t.updateGestureState(f({},Q(g(t),e),t.getKinematics(r,e),{origin:o,delta:i})),t.fireGestureHandler()},t.onWheelEnd=function(){t.clean(),t.state._active&&(t.state._active=!1,t.updateGestureState(t.getMovement(t.state.values)),t.fireGestureHandler())},t}return h(t,e),t.prototype.addBindings=function(e){this.controller.config.domTarget&&!this.controller.supportsTouchEvents&&this.controller.supportsGestureEvents?(ce(e,"onGestureStart",this.onGestureStart),ce(e,"onGestureChange",this.onGestureChange),ce(e,"onGestureEnd",this.onGestureEnd)):(ce(e,"onTouchStart",this.onPinchStart),ce(e,"onTouchMove",this.onPinchChange),ce(e,"onTouchEnd",this.onPinchEnd),ce(e,"onTouchCancel",this.onPinchEnd),ce(e,"onWheel",this.onWheel))},t}(me);var Se=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="wheeling",t.stateKey="wheel",t.debounced=!0,t.handleEvent=function(e){if((!e.ctrlKey||!("pinch"in t.controller.handlers))&&t.enabled){t.setTimeout(t.onEnd),t.updateSharedState(I(e));var n=o(k(e,t.transform),t.state.values);if(t.state._active)t.updateGestureState(f({},Q(g(t),e),t.getKinematics(n,e)));else{t.updateGestureState(f({},Z(g(t),n,e,t.state.values),Q(g(t),e,!0)));var r=t.getMovement(n),i=s(r.delta);t.updateGestureState(r),t.updateGestureState(i)}t.fireGestureHandler()}},t.onEnd=function(){if(t.clean(),t.state._active){var e=t.getMovement(t.state.values);t.updateGestureState(e),t.updateGestureState({_active:!1,velocities:[0,0],velocity:0}),t.fireGestureHandler()}},t}return h(t,e),t.prototype.addBindings=function(e){ce(e,"onWheel",this.handleEvent)},t}(he);var be=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="moving",t.stateKey="move",t.debounced=!0,t.onMove=function(e){t.enabled&&(t.setTimeout(t.onMoveEnd),t.state._active?t.onMoveChange(e):t.onMoveStart(e))},t.onMoveStart=function(e){t.updateSharedState(I(e));var n=K(e,t.transform);t.updateGestureState(f({},Z(g(t),n,e),Q(g(t),e,!0))),t.updateGestureState(t.getMovement(n)),t.fireGestureHandler()},t.onMoveChange=function(e){t.updateSharedState(I(e));var n=K(e,t.transform);t.updateGestureState(f({},Q(g(t),e),t.getKinematics(n,e))),t.fireGestureHandler()},t.onMoveEnd=function(){if(t.clean(),t.state._active){var e=t.state.values;t.updateGestureState(t.getMovement(e)),t.updateGestureState({velocities:[0,0],velocity:0,_active:!1}),t.fireGestureHandler()}},t.hoverTransform=function(){return t.controller.config.hover.transform||t.controller.config.transform},t.onPointerEnter=function(e){if(t.controller.state.shared.hovering=!0,t.controller.config.enabled){if(t.controller.config.hover.enabled){var n=K(e,t.hoverTransform()),r=f({},t.controller.state.shared,t.state,Q(g(t),e,!0),{args:t.args,values:n,active:!0,hovering:!0});t.controller.handlers.hover(f({},r,t.mapStateValues(r)))}"move"in t.controller.handlers&&t.onMoveStart(e)}},t.onPointerLeave=function(e){if(t.controller.state.shared.hovering=!1,"move"in t.controller.handlers&&t.onMoveEnd(),t.controller.config.hover.enabled){var n=K(e,t.hoverTransform()),r=f({},t.controller.state.shared,t.state,Q(g(t),e),{args:t.args,values:n,active:!1});t.controller.handlers.hover(f({},r,t.mapStateValues(r)))}},t}return h(t,e),t.prototype.addBindings=function(e){"move"in this.controller.handlers&&ce(e,"onPointerMove",this.onMove),"hover"in this.controller.handlers&&(ce(e,"onPointerEnter",this.onPointerEnter),ce(e,"onPointerLeave",this.onPointerLeave))},t}(he);var we=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ingKey="scrolling",t.stateKey="scroll",t.debounced=!0,t.handleEvent=function(e){if(t.enabled){t.clearTimeout(),t.setTimeout(t.onEnd);var n=C(e,t.transform);if(t.updateSharedState(I(e)),t.state._active)t.updateGestureState(f({},Q(g(t),e),t.getKinematics(n,e)));else{t.updateGestureState(f({},Z(g(t),n,e,t.state.values),Q(g(t),e,!0)));var r=t.getMovement(n),o=s(r.delta);t.updateGestureState(r),t.updateGestureState(o)}t.fireGestureHandler()}},t.onEnd=function(){t.clean(),t.state._active&&(t.updateGestureState(f({},t.getMovement(t.state.values),{_active:!1,velocities:[0,0],velocity:0})),t.fireGestureHandler())},t}return h(t,e),t.prototype.addBindings=function(e){ce(e,"onScroll",this.handleEvent)},t}(he);var _e=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Te(e,t){void 0===t&&(t={});var n=function(e){var t={},n={},r=new Set;for(var o in e)_e.test(o)?(r.add(RegExp.lastMatch),n[o]=e[o]):t[o]=e[o];return[n,t,r]}(e),r=n[0],o=n[1],i=n[2];F.set("drag",ge),F.set("hover",be),F.set("move",be),F.set("pinch",ye),F.set("scroll",we),F.set("wheel",Se);var a=function(e,t){void 0===e&&(e={}),void 0===t&&(t=new Set);var n=e,r=n.drag,o=n.wheel,i=n.move,a=n.scroll,s=n.pinch,u=n.hover,c=n.eventOptions,l=n.window,d=n.transform,v=V({domTarget:n.domTarget,eventOptions:c,transform:d,window:l,enabled:n.enabled});return t.has("onDrag")&&(v.drag=R(r)),t.has("onWheel")&&(v.wheel=X(o)),t.has("onScroll")&&(v.scroll=X(a)),t.has("onMove")&&(v.move=X(i)),t.has("onPinch")&&(v.pinch=B(s)),t.has("onHover")&&(v.hover=f({enabled:!0},u)),v}(t,i),s={};return i.has("onDrag")&&(s.drag=Ge(r,"onDrag")),i.has("onWheel")&&(s.wheel=Ge(r,"onWheel")),i.has("onScroll")&&(s.scroll=Ge(r,"onScroll")),i.has("onMove")&&(s.move=Ge(r,"onMove")),i.has("onPinch")&&(s.pinch=Ge(r,"onPinch")),i.has("onHover")&&(s.hover=r.onHover),ve(s,a,o)}function Ge(e,t){var n=t+"Start",r=t+"End";return function(o){var i=void 0;return o.first&&n in e&&e[n](o),t in e&&(i=e[t](o)),o.last&&r in e&&e[r](o),i}}}}]);