var simpleStorage = require('simplestorage.js');
module.exports = {
	save: function(key, val, options) {
		simpleStorage.set(key, val, options);
	},
	get: function(key, defaultVal) {
		return simpleStorage.get(key, defaultVal);
	},
	saveGroup: function(groupName, key, val) {
		simpleStorage.set(key + groupName, val);
	},
	getGroup: function(groupName, key, defaultVal) {
		return simpleStorage.get(key + groupName, defaultVal);
	},
	flush: function() {
		return simpleStorage.flush();
	},
	size: function() {
		return simpleStorage.storageSize();
	}
};