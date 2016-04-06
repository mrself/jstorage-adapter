beforeEach(function() {
	_storage.flush();
});

describe('#set', function() {

	it ('TTL option should work', function(done) {
		_storage.set('key', 1, {TTL: 300});
		setTimeout(function() {
			assert(_storage.get('key') == undefined);
			done();
		}, 500);
	});

	it('should return default value if a key is empty', function() {
		assert(_storage.get('k', 8) == 8);
	});
});

describe('#setGroup', function() {
	it ('TTL option should work', function(done) {
		_storage.setGroup('q', 'key', 1, {TTL: 300});
		setTimeout(function() {
			assert(_storage.getGroup('q', 'key') == undefined);
			done();
		}, 500);
	});
});

it('#flush', function() {
	_storage.set('k', 3);
	_storage.flush();
	assert(_storage.get('k') == undefined);
});