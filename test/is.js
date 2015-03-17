'use strict';

var is = require('../src/is');
var expect = require('chai').expect;

describe('is tests', function () {
    describe('is.obj tests', function () {
        it('is.obj({}) should be true', function () {
            expect(is.obj({})).to.be.true;
        });

        it('is.obj(null) should be false', function () {
            expect(is.obj(null)).to.be.false;
        });

        it('is.obj("foo") should be false', function () {
            expect(is.obj('foo')).to.be.false;
        });
    });

    describe('is.empty tests', function () {
        it('is.empty({}) should be true', function () {
            expect(is.empty({})).to.be.true;
        });

        it('is.empty({a: 1}) should be false', function () {
            expect(is.empty({a: 1})).to.be.false;
        });

        it('is.empty("") should be true', function () {
            expect(is.empty('')).to.be.true;
        });
        it('is.empty([]) should be true', function () {
            expect(is.empty([])).to.be.true;
        });
    });
});

