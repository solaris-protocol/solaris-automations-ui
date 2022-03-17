(this["webpackJsonpsolaris-automations-ui"]=this["webpackJsonpsolaris-automations-ui"]||[]).push([[3],{428:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n}(o(t(56)).default);n.default=i},429:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var c=a(t(428)),s=a(t(430)),u=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return r(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return o(this,void 0,void 0,(function(){var e=this;return i(this,(function(n){switch(n.label){case 0:return this._instance=new s.default(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signTransaction(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signAllTransactions=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signAllTransactions(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),o(this,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(c.default);n.default=u},430:function(e,n,t){"use strict";t.r(n);var r=t(18),o=t(11),i=t(12),a=t(6),c=t(7),s=t(43),u=t(13),l=t(14),d=t(1),f=t.n(d),p=t(56),h=t.n(p),_=t(8),v=t(37),y=t.n(v),w=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e,c){var u,l,d;if(Object(a.a)(this,t),u=n.call(this),l=Object(s.a)(u),u._handleMessage=function(e){if(u._injectedProvider&&e.source===window||e.origin===u._providerUrl.origin&&e.source===u._popup)if("connected"===e.data.method){var n=new _.PublicKey(e.data.params.publicKey);u._publicKey&&u._publicKey.equals(n)||(u._publicKey&&!u._publicKey.equals(n)&&u._handleDisconnect(),u._publicKey=n,u._autoApprove=!!e.data.params.autoApprove,u.emit("connect",u._publicKey))}else if("disconnected"===e.data.method)u._handleDisconnect();else if((e.data.result||e.data.error)&&u._responsePromises.has(e.data.id)){var t=u._responsePromises.get(e.data.id),r=Object(i.a)(t,2),o=r[0],a=r[1];e.data.result?o(e.data.result):a(new Error(e.data.error))}},u._handleConnect=function(){return u._handlerAdded||(u._handlerAdded=!0,window.addEventListener("message",u._handleMessage),window.addEventListener("beforeunload",u.disconnect)),u._injectedProvider?new Promise((function(e){u._sendRequest("connect",{}),e()})):(window.name="parent",u._popup=window.open(u._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){u.once("connect",e)})))},u._handleDisconnect=function(){u._handlerAdded&&(u._handlerAdded=!1,window.removeEventListener("message",u._handleMessage),window.removeEventListener("beforeunload",u.disconnect)),u._publicKey&&(u._publicKey=null,u.emit("disconnect")),u._responsePromises.forEach((function(e,n){var t=Object(i.a)(e,2),r=(t[0],t[1]);u._responsePromises.delete(n),r("Wallet disconnected")}))},u._sendRequest=function(){var e=Object(o.a)(f.a.mark((function e(n,t){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connect"===n||l.connected){e.next=2;break}throw new Error("Wallet not connected");case 2:return o=l._nextRequestId,++l._nextRequestId,e.abrupt("return",new Promise((function(e,i){l._responsePromises.set(o,[e,i]),l._injectedProvider?l._injectedProvider.postMessage({jsonrpc:"2.0",id:o,method:n,params:Object(r.a)({network:l._network},t)}):(l._popup.postMessage({jsonrpc:"2.0",id:o,method:n,params:t},l._providerUrl.origin),l.autoApprove||l._popup.focus())})));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u.connect=function(){return u._popup&&u._popup.close(),u._handleConnect()},u.disconnect=Object(o.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l._injectedProvider){e.next=3;break}return e.next=3,l._sendRequest("disconnect",{});case 3:l._popup&&l._popup.close(),l._handleDisconnect();case 5:case"end":return e.stop()}}),e)}))),u.sign=function(){var e=Object(o.a)(f.a.mark((function e(n,t){var r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof Uint8Array){e.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return e.next=4,l._sendRequest("sign",{data:n,display:t});case 4:return r=e.sent,o=y.a.decode(r.signature),i=new _.PublicKey(r.publicKey),e.abrupt("return",{signature:o,publicKey:i});case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u.signTransaction=function(){var e=Object(o.a)(f.a.mark((function e(n){var t,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l._sendRequest("signTransaction",{message:y.a.encode(n.serializeMessage())});case 2:return t=e.sent,r=y.a.decode(t.signature),o=new _.PublicKey(t.publicKey),n.addSignature(o,r),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u.signAllTransactions=function(){var e=Object(o.a)(f.a.mark((function e(n){var t,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l._sendRequest("signAllTransactions",{messages:n.map((function(e){return y.a.encode(e.serializeMessage())}))});case 2:return t=e.sent,r=t.signatures.map((function(e){return y.a.decode(e)})),o=new _.PublicKey(t.publicKey),n=n.map((function(e,n){return e.addSignature(o,r[n]),e})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),function(e){return"object"===typeof e&&null!==e}(d=e)&&function(e){return"function"===typeof e}(d.postMessage))u._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");u._providerUrl=new URL(e),u._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:c}).toString()}return u._network=c,u._publicKey=null,u._autoApprove=!1,u._popup=null,u._handlerAdded=!1,u._nextRequestId=1,u._responsePromises=new Map,u}return Object(c.a)(t,[{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}}]),t}(h.a);n.default=w},431:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},o.apply(this,arguments)},i=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},a=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=t(8),u=c(t(428)),l=t(153),d=c(t(37)),f=function(e){function n(n,t){var r,i=e.call(this)||this;return i._publicKey=null,i._messageHandlers={},i.handleMessage=function(e){if(i._messageHandlers[e.id]){var n=i._messageHandlers[e.id],t=n.resolve,r=n.reject;delete i._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},i._sendMessage=function(e){if(!i.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,a,c=(0,l.v4)();i._messageHandlers[c]={resolve:n,reject:t},null===(a=null===(r=i._iframe)||void 0===r?void 0:r.contentWindow)||void 0===a||a.postMessage({channel:"solflareWalletAdapterToIframe",data:o({id:c},e)},"*")}))},i._iframe=n,i._publicKey=new s.PublicKey(null===(r=null===t||void 0===t?void 0:t.toString)||void 0===r?void 0:r.call(t)),i}return r(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return i(this,void 0,void 0,(function(){return a(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return i(this,void 0,void 0,(function(){var n,t,r,o;return a(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:d.default.encode(e.serializeMessage())}})];case 2:return n=i.sent(),t=n.publicKey,r=n.signature,e.addSignature(new s.PublicKey(t),d.default.decode(r)),[2,e];case 3:throw o=i.sent(),console.log(o),new Error("Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){return i(this,void 0,void 0,(function(){var n,t,r,o;return a(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return d.default.encode(e.serializeMessage())}))}})];case 2:return n=i.sent(),t=n.publicKey,r=n.signatures,[2,e.map((function(e,n){return e.addSignature(new s.PublicKey(t),d.default.decode(r[n])),e}))];case 3:throw o=i.sent(),console.log(o),new Error("Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),i(this,void 0,void 0,(function(){var t,r;return a(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return t=o.sent(),[2,Uint8Array.from(d.default.decode(t))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},n}(u.default);n.default=f},432:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__values||function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=c(t(56)),u=c(t(429)),l=c(t(431)),d=function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new u.default(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new l.default(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"collapse":return void r._collapseIframe();default:return}},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=a(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(c){e={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin)),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===t||void 0===t?void 0:t.network)&&(r._network=null===t||void 0===t?void 0:t.network),r}return r(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return o(this,void 0,void 0,(function(){var e=this;return i(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signTransaction(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signAllTransactions=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signAllTransactions(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){return void 0===e&&(e=10),o(this,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t){var r=null;function o(e){!function(){window.removeEventListener("message",a,!1),r&&(document.body.removeChild(r),r=null);i&&(clearTimeout(i),i=null)}(),t(e)}var i=setTimeout((function(){o(!1)}),1e3*e);function a(e){var n,t,r;"solflareDetectorToAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)&&o(!!(null===(r=null===(t=e.data)||void 0===t?void 0:t.data)||void 0===r?void 0:r.detected))}window.addEventListener("message",a,!1),(r=document.createElement("div")).className="solflare-wallet-detect-iframe",r.innerHTML="\n        <iframe src='".concat(n.DETECT_IFRAME_URL,"?timeout=").concat(e,"' style='position: fixed; top: -9999px; left: -9999px; width: 0; height: 0; pointer-events: none; border: none;'></iframe>\n      "),document.body.appendChild(r)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n.DETECT_IFRAME_URL="https://connect.solflare.com/detect",n}(s.default);n.default=d}}]);