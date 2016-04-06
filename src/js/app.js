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