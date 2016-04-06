(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! simpleStorage v0.2.1, Unlicense 2016. https://github.com/andris9/simpleStorage */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):"undefined"!=typeof exports?module.exports=b():a.simpleStorage=b()}(this,function(){"use strict";function a(){p=j(),d(),g(),b(),"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&c()},!1),p=!0}function b(){"addEventListener"in window?window.addEventListener("storage",c,!1):document.attachEvent("onstorage",c)}function c(){try{d()}catch(a){return void(p=!1)}g()}function d(){var a=localStorage.getItem("simpleStorage");try{n=JSON.parse(a)||{}}catch(b){n={}}o=f()}function e(){try{localStorage.setItem("simpleStorage",JSON.stringify(n)),o=f()}catch(a){return k(a)}return!0}function f(){var a=localStorage.getItem("simpleStorage");return a?String(a).length:0}function g(){var a,b,c,d,f,h=1/0,j=0;if(clearTimeout(q),n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL){for(a=+new Date,f=n.__simpleStorage_meta.TTL.keys||[],d=n.__simpleStorage_meta.TTL.expire||{},b=0,c=f.length;c>b;b++){if(!(d[f[b]]<=a)){d[f[b]]<h&&(h=d[f[b]]);break}j++,delete n[f[b]],delete d[f[b]]}h!==1/0&&(q=setTimeout(g,Math.min(h-a,2147483647))),j&&(f.splice(0,j),i(),e())}}function h(a,b){var c,d,e=+new Date,f=!1;if(b=Number(b)||0,0!==b){if(!n.hasOwnProperty(a))return!1;if(n.__simpleStorage_meta||(n.__simpleStorage_meta={}),n.__simpleStorage_meta.TTL||(n.__simpleStorage_meta.TTL={expire:{},keys:[]}),n.__simpleStorage_meta.TTL.expire[a]=e+b,n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)n.__simpleStorage_meta.TTL.keys[c]===a&&n.__simpleStorage_meta.TTL.keys.splice(c);for(c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)if(n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[c]]>e+b){n.__simpleStorage_meta.TTL.keys.splice(c,0,a),f=!0;break}f||n.__simpleStorage_meta.TTL.keys.push(a)}else if(n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL){if(n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(delete n.__simpleStorage_meta.TTL.expire[a],c=0,d=n.__simpleStorage_meta.TTL.keys.length;d>c;c++)if(n.__simpleStorage_meta.TTL.keys[c]===a){n.__simpleStorage_meta.TTL.keys.splice(c,1);break}i()}return clearTimeout(q),n&&n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL&&n.__simpleStorage_meta.TTL.keys.length&&(q=setTimeout(g,Math.min(Math.max(n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[0]]-e,0),2147483647))),!0}function i(){var a,b=!1,c=!1;if(!n||!n.__simpleStorage_meta)return b;n.__simpleStorage_meta.TTL&&!n.__simpleStorage_meta.TTL.keys.length&&(delete n.__simpleStorage_meta.TTL,b=!0);for(a in n.__simpleStorage_meta)if(n.__simpleStorage_meta.hasOwnProperty(a)){c=!0;break}return c||(delete n.__simpleStorage_meta,b=!0),b}function j(){var a,b=0;if(null===window.localStorage||"unknown"==typeof window.localStorage)throw a=new Error("localStorage is disabled"),a.code=t,a;if(!window.localStorage)throw a=new Error("localStorage not supported"),a.code=s,a;try{b=window.localStorage.length}catch(c){throw k(c)}try{window.localStorage.setItem("__simpleStorageInitTest",Date.now().toString(16)),window.localStorage.removeItem("__simpleStorageInitTest")}catch(c){throw b?k(c):(a=new Error("localStorage is disabled"),a.code=t,a)}return!0}function k(a){var b;return 22===a.code||1014===a.code||[-2147024882,-2146828281,-21474675259].indexOf(a.number)>0?(b=new Error("localStorage quota exceeded"),b.code=u,b):18===a.code||1e3===a.code?(b=new Error("localStorage is disabled"),b.code=t,b):"TypeError"===a.name?(b=new Error("localStorage is disabled"),b.code=t,b):a}function l(a){if(!a)return r="OK",a;switch(a.code){case s:case t:case u:r=a.code;break;default:r=a.code||a.number||a.message||a.name}return a}var m="0.2.1",n=!1,o=0,p=!1,q=null,r="OK",s="LS_NOT_AVAILABLE",t="LS_DISABLED",u="LS_QUOTA_EXCEEDED";try{a()}catch(v){l(v)}return{version:m,status:r,canUse:function(){return"OK"===r&&!!p},set:function(a,b,c){if("__simpleStorage_meta"===a)return!1;if(!n)return!1;if("undefined"==typeof b)return this.deleteKey(a);c=c||{};try{b=JSON.parse(JSON.stringify(b))}catch(d){return k(d)}return n[a]=b,h(a,c.TTL||0),e()},hasKey:function(a){return n&&n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a?!0:!1},get:function(a){return n?n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a&&this.getTTL(a)?n[a]:void 0:!1},deleteKey:function(a){return n&&a in n?(delete n[a],h(a,0),e()):!1},setTTL:function(a,b){return n?(h(a,b),e()):!1},getTTL:function(a){var b;return n&&n.hasOwnProperty(a)?n.__simpleStorage_meta&&n.__simpleStorage_meta.TTL&&n.__simpleStorage_meta.TTL.expire&&n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a)?(b=Math.max(n.__simpleStorage_meta.TTL.expire[a]-+new Date||0,0),b||!1):1/0:!1},flush:function(){if(!n)return!1;n={};try{return localStorage.removeItem("simpleStorage"),!0}catch(a){return k(a)}},index:function(){if(!n)return!1;var a,b=[];for(a in n)n.hasOwnProperty(a)&&"__simpleStorage_meta"!==a&&b.push(a);return b},storageSize:function(){return o}}});
},{}],2:[function(require,module,exports){
var simpleStorage = require('simplestorage.js');
module.exports = {
	save: function(key, val, options) {
		return simpleStorage.set(key, val, options);
	},
	set: function() {
		return this.save.apply(this, arguments);
	},
	get: function(key, defaultVal) {
		var value = simpleStorage.get(key);
		return (typeof value == 'undefined') ? defaultVal : value;
	},
	saveGroup: function(groupName, key, val, options) {
		return simpleStorage.set(key + groupName, val, options);
	},
	setGroup: function(groupName, key, val, options) {
		return this.save.apply(this, arguments);
	},
	getGroup: function(groupName, key, defaultVal) {
		return this.get(key + groupName, defaultVal);
	},
	flush: function() {
		return simpleStorage.flush();
	},
	size: function() {
		return simpleStorage.storageSize();
	},
	instnce: function() {
		return simplestorage;
	}
};
},{"simplestorage.js":1}],3:[function(require,module,exports){
window._storage = require('../src/js/app.js');
},{"../src/js/app.js":2}]},{},[3]);
