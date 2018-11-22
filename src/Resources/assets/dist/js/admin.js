/*! Sortable 1.7.0 - MIT | git://github.com/rubaxa/Sortable.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():window.Sortable=a()}(function(){"use strict";function a(b,c){if(!b||!b.nodeType||1!==b.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(b);this.el=b,this.options=c=t({},c),b[V]=this;var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(b.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:a.supportPointer!==!1};for(var e in d)!(e in c)&&(c[e]=d[e]);ka(c);for(var g in this)"_"===g.charAt(0)&&"function"==typeof this[g]&&(this[g]=this[g].bind(this));this.nativeDraggable=!c.forceFallback&&ca,f(b,"mousedown",this._onTapStart),f(b,"touchstart",this._onTapStart),c.supportPointer&&f(b,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(b,"dragover",this),f(b,"dragenter",this)),ia.push(this._onDragOver),c.store&&this.sort(c.store.get(this))}function b(a,b){"clone"!==a.lastPullMode&&(b=!0),B&&B.state!==b&&(i(B,"display",b?"none":""),b||B.state&&(a.options.group.revertClone?(C.insertBefore(B,D),a._animate(y,B)):C.insertBefore(B,y)),B.state=b)}function c(a,b,c){if(a){c=c||X;do if(">*"===b&&a.parentNode===c||r(a,b))return a;while(a=d(a))}return null}function d(a){var b=a.host;return b&&b.nodeType?b:a.parentNode}function e(a){a.dataTransfer&&(a.dataTransfer.dropEffect="move"),a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,aa)}function g(a,b,c){a.removeEventListener(b,c,aa)}function h(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(T," ").replace(" "+b+" "," ");a.className=(d+(c?" "+b:"")).replace(T," ")}}function i(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return X.defaultView&&X.defaultView.getComputedStyle?c=X.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;e<f;e++)c(d[e],e);return d}return[]}function k(a,b,c,d,e,f,g,h){a=a||b[V];var i=X.createEvent("Event"),j=a.options,k="on"+c.charAt(0).toUpperCase()+c.substr(1);i.initEvent(c,!0,!0),i.to=e||b,i.from=f||b,i.item=d||b,i.clone=B,i.oldIndex=g,i.newIndex=h,b.dispatchEvent(i),j[k]&&j[k].call(a,i)}function l(a,b,c,d,e,f,g,h){var i,j,k=a[V],l=k.options.onMove;return i=X.createEvent("Event"),i.initEvent("move",!0,!0),i.to=b,i.from=a,i.dragged=c,i.draggedRect=d,i.related=e||b,i.relatedRect=f||b.getBoundingClientRect(),i.willInsertAfter=h,a.dispatchEvent(i),l&&(j=l.call(k,i,g)),j}function m(a){a.draggable=!1}function n(){ea=!1}function o(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5||b.clientX-(d.left+d.width)>5}function p(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function q(a,b){var c=0;if(!a||!a.parentNode)return-1;for(;a&&(a=a.previousElementSibling);)"TEMPLATE"===a.nodeName.toUpperCase()||">*"!==b&&!r(a,b)||c++;return c}function r(a,b){if(a){b=b.split(".");var c=b.shift().toUpperCase(),d=new RegExp("\\s("+b.join("|")+")(?=\\s)","g");return!(""!==c&&a.nodeName.toUpperCase()!=c||b.length&&((" "+a.className+" ").match(d)||[]).length!=b.length)}return!1}function s(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,Z(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}function t(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function u(a){return _&&_.dom?_.dom(a).cloneNode(!0):$?$(a).clone(!0)[0]:a.cloneNode(!0)}function v(a){for(var b=a.getElementsByTagName("input"),c=b.length;c--;){var d=b[c];d.checked&&ha.push(d)}}function w(a){return Z(a,0)}function x(a){return clearTimeout(a)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S={},T=/\s+/g,U=/left|right|inline/,V="Sortable"+(new Date).getTime(),W=window,X=W.document,Y=W.parseInt,Z=W.setTimeout,$=W.jQuery||W.Zepto,_=W.Polymer,aa=!1,ba=!1,ca="draggable"in X.createElement("div"),da=function(a){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(a=X.createElement("x"),a.style.cssText="pointer-events:auto","auto"===a.style.pointerEvents)}(),ea=!1,fa=Math.abs,ga=Math.min,ha=[],ia=[],ja=s(function(a,b,c){if(c&&b.scroll){var d,e,f,g,h,i,j=c[V],k=b.scrollSensitivity,l=b.scrollSpeed,m=a.clientX,n=a.clientY,o=window.innerWidth,p=window.innerHeight;if(G!==c&&(F=b.scroll,G=c,H=b.scrollFn,F===!0)){F=c;do if(F.offsetWidth<F.scrollWidth||F.offsetHeight<F.scrollHeight)break;while(F=F.parentNode)}F&&(d=F,e=F.getBoundingClientRect(),f=(fa(e.right-m)<=k)-(fa(e.left-m)<=k),g=(fa(e.bottom-n)<=k)-(fa(e.top-n)<=k)),f||g||(f=(o-m<=k)-(m<=k),g=(p-n<=k)-(n<=k),(f||g)&&(d=W)),S.vx===f&&S.vy===g&&S.el===d||(S.el=d,S.vx=f,S.vy=g,clearInterval(S.pid),d&&(S.pid=setInterval(function(){return i=g?g*l:0,h=f?f*l:0,"function"==typeof H?H.call(j,h,i,a):void(d===W?W.scrollTo(W.pageXOffset+h,W.pageYOffset+i):(d.scrollTop+=i,d.scrollLeft+=h))},24)))}},30),ka=function(a){function b(a,b){return void 0!==a&&a!==!0||(a=c.name),"function"==typeof a?a:function(c,d){var e=d.options.group.name;return b?a:a&&(a.join?a.indexOf(e)>-1:e==a)}}var c={},d=a.group;d&&"object"==typeof d||(d={name:d}),c.name=d.name,c.checkPull=b(d.pull,!0),c.checkPut=b(d.put),c.revertClone=d.revertClone,a.group=c};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ba=!1,aa={capture:!1,passive:ba}}}))}catch(a){}return a.prototype={constructor:a,_onTapStart:function(a){var b,d=this,e=this.el,f=this.options,g=f.preventOnFilter,h=a.type,i=a.touches&&a.touches[0],j=(i||a).target,l=a.target.shadowRoot&&a.path&&a.path[0]||j,m=f.filter;if(v(e),!y&&!(/mousedown|pointerdown/.test(h)&&0!==a.button||f.disabled)&&!l.isContentEditable&&(j=c(j,f.draggable,e),j&&E!==j)){if(b=q(j,f.draggable),"function"==typeof m){if(m.call(this,a,j,this))return k(d,l,"filter",j,e,e,b),void(g&&a.preventDefault())}else if(m&&(m=m.split(",").some(function(a){if(a=c(l,a.trim(),e))return k(d,a,"filter",j,e,e,b),!0})))return void(g&&a.preventDefault());f.handle&&!c(l,f.handle,e)||this._prepareDragStart(a,i,j,b)}},_prepareDragStart:function(a,b,c,d){var e,g=this,i=g.el,l=g.options,n=i.ownerDocument;c&&!y&&c.parentNode===i&&(P=a,C=i,y=c,z=y.parentNode,D=y.nextSibling,E=c,N=l.group,L=d,this._lastX=(b||a).clientX,this._lastY=(b||a).clientY,y.style["will-change"]="all",e=function(){g._disableDelayedDrag(),y.draggable=g.nativeDraggable,h(y,l.chosenClass,!0),g._triggerDragStart(a,b),k(g,C,"choose",y,C,C,L)},l.ignore.split(",").forEach(function(a){j(y,a.trim(),m)}),f(n,"mouseup",g._onDrop),f(n,"touchend",g._onDrop),f(n,"touchcancel",g._onDrop),f(n,"selectstart",g),l.supportPointer&&f(n,"pointercancel",g._onDrop),l.delay?(f(n,"mouseup",g._disableDelayedDrag),f(n,"touchend",g._disableDelayedDrag),f(n,"touchcancel",g._disableDelayedDrag),f(n,"mousemove",g._disableDelayedDrag),f(n,"touchmove",g._disableDelayedDrag),l.supportPointer&&f(n,"pointermove",g._disableDelayedDrag),g._dragStartTimer=Z(e,l.delay)):e())},_disableDelayedDrag:function(){var a=this.el.ownerDocument;clearTimeout(this._dragStartTimer),g(a,"mouseup",this._disableDelayedDrag),g(a,"touchend",this._disableDelayedDrag),g(a,"touchcancel",this._disableDelayedDrag),g(a,"mousemove",this._disableDelayedDrag),g(a,"touchmove",this._disableDelayedDrag),g(a,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(a,b){b=b||("touch"==a.pointerType?a:null),b?(P={target:y,clientX:b.clientX,clientY:b.clientY},this._onDragStart(P,"touch")):this.nativeDraggable?(f(y,"dragend",this),f(C,"dragstart",this._onDragStart)):this._onDragStart(P,!0);try{X.selection?w(function(){X.selection.empty()}):window.getSelection().removeAllRanges()}catch(a){}},_dragStarted:function(){if(C&&y){var b=this.options;h(y,b.ghostClass,!0),h(y,b.dragClass,!1),a.active=this,k(this,C,"start",y,C,C,L)}else this._nulling()},_emulateDragOver:function(){if(Q){if(this._lastX===Q.clientX&&this._lastY===Q.clientY)return;this._lastX=Q.clientX,this._lastY=Q.clientY,da||i(A,"display","none");var a=X.elementFromPoint(Q.clientX,Q.clientY),b=a,c=ia.length;if(a&&a.shadowRoot&&(a=a.shadowRoot.elementFromPoint(Q.clientX,Q.clientY),b=a),b)do{if(b[V]){for(;c--;)ia[c]({clientX:Q.clientX,clientY:Q.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);da||i(A,"display","")}},_onTouchMove:function(b){if(P){var c=this.options,d=c.fallbackTolerance,e=c.fallbackOffset,f=b.touches?b.touches[0]:b,g=f.clientX-P.clientX+e.x,h=f.clientY-P.clientY+e.y,j=b.touches?"translate3d("+g+"px,"+h+"px,0)":"translate("+g+"px,"+h+"px)";if(!a.active){if(d&&ga(fa(f.clientX-this._lastX),fa(f.clientY-this._lastY))<d)return;this._dragStarted()}this._appendGhost(),R=!0,Q=f,i(A,"webkitTransform",j),i(A,"mozTransform",j),i(A,"msTransform",j),i(A,"transform",j),b.preventDefault()}},_appendGhost:function(){if(!A){var a,b=y.getBoundingClientRect(),c=i(y),d=this.options;A=y.cloneNode(!0),h(A,d.ghostClass,!1),h(A,d.fallbackClass,!0),h(A,d.dragClass,!0),i(A,"top",b.top-Y(c.marginTop,10)),i(A,"left",b.left-Y(c.marginLeft,10)),i(A,"width",b.width),i(A,"height",b.height),i(A,"opacity","0.8"),i(A,"position","fixed"),i(A,"zIndex","100000"),i(A,"pointerEvents","none"),d.fallbackOnBody&&X.body.appendChild(A)||C.appendChild(A),a=A.getBoundingClientRect(),i(A,"width",2*b.width-a.width),i(A,"height",2*b.height-a.height)}},_onDragStart:function(a,b){var c=this,d=a.dataTransfer,e=c.options;c._offUpEvents(),N.checkPull(c,c,y,a)&&(B=u(y),B.draggable=!1,B.style["will-change"]="",i(B,"display","none"),h(B,c.options.chosenClass,!1),c._cloneId=w(function(){C.insertBefore(B,y),k(c,C,"clone",y)})),h(y,e.dragClass,!0),b?("touch"===b?(f(X,"touchmove",c._onTouchMove),f(X,"touchend",c._onDrop),f(X,"touchcancel",c._onDrop),e.supportPointer&&(f(X,"pointermove",c._onTouchMove),f(X,"pointerup",c._onDrop))):(f(X,"mousemove",c._onTouchMove),f(X,"mouseup",c._onDrop)),c._loopId=setInterval(c._emulateDragOver,50)):(d&&(d.effectAllowed="move",e.setData&&e.setData.call(c,d,y)),f(X,"drop",c),c._dragStartId=w(c._dragStarted))},_onDragOver:function(d){var e,f,g,h,j=this.el,k=this.options,m=k.group,p=a.active,q=N===m,r=!1,s=k.sort;if(void 0!==d.preventDefault&&(d.preventDefault(),!k.dragoverBubble&&d.stopPropagation()),!y.animated&&(R=!0,p&&!k.disabled&&(q?s||(h=!C.contains(y)):O===this||(p.lastPullMode=N.checkPull(this,p,y,d))&&m.checkPut(this,p,y,d))&&(void 0===d.rootEl||d.rootEl===this.el))){if(ja(d,k,this.el),ea)return;if(e=c(d.target,k.draggable,j),f=y.getBoundingClientRect(),O!==this&&(O=this,r=!0),h)return b(p,!0),z=C,void(B||D?C.insertBefore(y,B||D):s||C.appendChild(y));if(0===j.children.length||j.children[0]===A||j===d.target&&o(j,d)){if(0!==j.children.length&&j.children[0]!==A&&j===d.target&&(e=j.lastElementChild),e){if(e.animated)return;g=e.getBoundingClientRect()}b(p,q),l(C,j,y,f,e,g,d)!==!1&&(y.contains(j)||(j.appendChild(y),z=j),this._animate(f,y),e&&this._animate(g,e))}else if(e&&!e.animated&&e!==y&&void 0!==e.parentNode[V]){I!==e&&(I=e,J=i(e),K=i(e.parentNode)),g=e.getBoundingClientRect();var t=g.right-g.left,u=g.bottom-g.top,v=U.test(J.cssFloat+J.display)||"flex"==K.display&&0===K["flex-direction"].indexOf("row"),w=e.offsetWidth>y.offsetWidth,x=e.offsetHeight>y.offsetHeight,E=(v?(d.clientX-g.left)/t:(d.clientY-g.top)/u)>.5,F=e.nextElementSibling,G=!1;if(v){var H=y.offsetTop,L=e.offsetTop;G=H===L?e.previousElementSibling===y&&!w||E&&w:e.previousElementSibling===y||y.previousElementSibling===e?(d.clientY-g.top)/u>.5:L>H}else r||(G=F!==y&&!x||E&&x);var M=l(C,j,y,f,e,g,d,G);M!==!1&&(1!==M&&M!==-1||(G=1===M),ea=!0,Z(n,30),b(p,q),y.contains(j)||(G&&!F?j.appendChild(y):e.parentNode.insertBefore(y,G?F:e)),z=y.parentNode,this._animate(f,y),this._animate(g,e))}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();1===a.nodeType&&(a=a.getBoundingClientRect()),i(b,"transition","none"),i(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,i(b,"transition","all "+c+"ms"),i(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=Z(function(){i(b,"transition",""),i(b,"transform",""),b.animated=!1},c)}},_offUpEvents:function(){var a=this.el.ownerDocument;g(X,"touchmove",this._onTouchMove),g(X,"pointermove",this._onTouchMove),g(a,"mouseup",this._onDrop),g(a,"touchend",this._onDrop),g(a,"pointerup",this._onDrop),g(a,"touchcancel",this._onDrop),g(a,"pointercancel",this._onDrop),g(a,"selectstart",this)},_onDrop:function(b){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(S.pid),clearTimeout(this._dragStartTimer),x(this._cloneId),x(this._dragStartId),g(X,"mouseover",this),g(X,"mousemove",this._onTouchMove),this.nativeDraggable&&(g(X,"drop",this),g(c,"dragstart",this._onDragStart)),this._offUpEvents(),b&&(R&&(b.preventDefault(),!d.dropBubble&&b.stopPropagation()),A&&A.parentNode&&A.parentNode.removeChild(A),C!==z&&"clone"===a.active.lastPullMode||B&&B.parentNode&&B.parentNode.removeChild(B),y&&(this.nativeDraggable&&g(y,"dragend",this),m(y),y.style["will-change"]="",h(y,this.options.ghostClass,!1),h(y,this.options.chosenClass,!1),k(this,C,"unchoose",y,z,C,L),C!==z?(M=q(y,d.draggable),M>=0&&(k(null,z,"add",y,z,C,L,M),k(this,C,"remove",y,z,C,L,M),k(null,z,"sort",y,z,C,L,M),k(this,C,"sort",y,z,C,L,M))):y.nextSibling!==D&&(M=q(y,d.draggable),M>=0&&(k(this,C,"update",y,z,C,L,M),k(this,C,"sort",y,z,C,L,M))),a.active&&(null!=M&&M!==-1||(M=L),k(this,C,"end",y,z,C,L,M),this.save()))),this._nulling()},_nulling:function(){C=y=z=A=D=B=E=F=G=P=Q=R=M=I=J=O=N=a.active=null,ha.forEach(function(a){a.checked=!0}),ha.length=0},handleEvent:function(a){switch(a.type){case"drop":case"dragend":this._onDrop(a);break;case"dragover":case"dragenter":y&&(this._onDragOver(a),e(a));break;case"mouseover":this._onDrop(a);break;case"selectstart":a.preventDefault()}},toArray:function(){for(var a,b=[],d=this.el.children,e=0,f=d.length,g=this.options;e<f;e++)a=d[e],c(a,g.draggable,this.el)&&b.push(a.getAttribute(g.dataIdAttr)||p(a));return b},sort:function(a){var b={},d=this.el;this.toArray().forEach(function(a,e){var f=d.children[e];c(f,this.options.draggable,d)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(d.removeChild(b[a]),d.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return c(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:(c[a]=b,void("group"===a&&ka(c)))},destroy:function(){var a=this.el;a[V]=null,g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"pointerdown",this._onTapStart),this.nativeDraggable&&(g(a,"dragover",this),g(a,"dragenter",this)),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),ia.splice(ia.indexOf(this._onDragOver),1),this._onDrop(),this.el=a=null}},f(X,"touchmove",function(b){a.active&&b.preventDefault()}),a.utils={on:f,off:g,css:i,find:j,is:function(a,b){return!!c(a,b,a)},extend:t,throttle:s,closest:c,toggleClass:h,clone:u,index:q,nextTick:w,cancelNextTick:x},a.create=function(b,c){return new a(b,c)},a.version="1.7.0",a});;(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var InputImgs = function () {
    function InputImgs() {
        _classCallCheck(this, InputImgs);
    }

    _createClass(InputImgs, [{
        key: "bindEventlisteners",
        value: function bindEventlisteners() {
            var _this = this;

            $('.input-imgs__btn').on('click', function (e) {
                e.preventDefault();
                var btn = $(this);
                var wrap = $(this).parents('.input-imgs');
                var input = wrap.find('.input-imgs__val');
                var thumbs = wrap.find('.input-imgs__thumbs');
                var frame = wp.media({
                    title: 'Select image',
                    button: {
                        text: 'Select'
                    },
                    multiple: 'add'
                });
                frame.on('open', function () {
                    var selection = frame.state().get('selection');
                    var imgIds = input.val();
                    if (imgIds) {
                        var imgIds = imgIds.split(',');
                        imgIds.forEach(function (imgId) {
                            selection.add(wp.media.attachment(imgId));
                        });
                    }
                });
                frame.on('select', function () {
                    var selection = frame.state().get('selection');
                    var imgIds = [];
                    thumbs.html('');
                    selection.map(function (attachment) {
                        attachment = attachment.toJSON();
                        thumbs.append($('<div data-id="' + attachment.id + '" class="input-imgs__thumb"><img class="input-imgs__thumb-img" src="' + attachment.url + '" /><div class="input-imgs__thumb-remove">X</div></div>'));
                        imgIds.push(attachment.id);
                    });
                    input.val(imgIds.join(','));
                });
                frame.open();
            });
            $('.input-imgs__thumb-remove').on('click', function (e) {
                var wrap = $(this).parents('.input-imgs');
                var input = wrap.find('.input-imgs__val');
                var img = $(this).parents('.input-imgs__thumb');
                var id = img.data('id').toString();
                var ids = input.val().split(',');
                ids.splice(ids.indexOf(id), 1);
                input.val(ids.join(','));
                img.remove();
            });
            var el = document.getElementById('input-imgs__thumbs');
            Sortable.create(el, {
                onEnd: function onEnd(e) {
                    _this.refreshList($(e.target));
                },
                animation: 100
            });
        }
    }, {
        key: "refreshList",
        value: function refreshList(target) {
            var ids = [];
            target.find('.input-imgs__thumb').each(function (i, item) {
                ids.push($(item).data('id'));
            });
            target.parents('.input-imgs').find('.input-imgs__val').val(ids.join(','));
        }
    }]);

    return InputImgs;
}();

exports.InputImgs = InputImgs;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_imgs_1 = require("./components/input-imgs");
jQuery(document).ready(function ($) {
    $('.input-img .input-img__button').on('click', function (e) {
        e.preventDefault();
        var frame = wp.media({
            title: 'Select image',
            button: {
                text: 'Select'
            },
            multiple: false
        });
        var wrap = $(this).parents('.input-img');
        var input = wrap.find('.input-img__val');
        var thumb = wrap.find('.input-img__thumb');
        frame.on('select', function () {
            var img = frame.state().get('selection').first().toJSON();
            wrap.addClass('input-img--has-image');
            input.val(img.id);
            thumb.html('<img class="input-img__thumb-img" src="' + img.url + '" />');
        });
        frame.open();
    });
    $('.input-img .input-img__button--remove').on('click', function (e) {
        var wrap = $(this).parents('.input-img');
        var input = wrap.find('.input-img__val');
        var thumb = wrap.find('.input-img__thumb');
        wrap.removeClass('input-img--has-image');
        input.val('');
        thumb.html('');
    });
    var inputImgs = new input_imgs_1.InputImgs();
    inputImgs.bindEventlisteners();
});

},{"./components/input-imgs":1}]},{},[2]);
