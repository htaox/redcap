'use strict';

const expect = require('chai').expect;
const usersModule = require('../../../lib/users');
const utils = require('../../../lib/utils');

describe('users', function() {
	it('should be a function', function() {
		expect(usersModule).to.be.a('function');
	});

	var users = usersModule(utils);

	var keys = [
		'export',
		'import',
	];

	it('should return an object with keys', function() {
		expect(users).to.be.an('object').that.has.keys(keys);
	});

	describe('#export', function() {
		it('should be a function', function() {
			expect(usersModule(utils).export).to.be.a('function');
		});
	});
	describe('#import', function() {
		it('should be a function', function() {
			expect(usersModule(utils).import).to.be.a('function');
		});
	});
});

