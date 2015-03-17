'use strict';

var ensure = require('../src/ensure');
var expect = require('chai').expect;


describe('ensure tests', function () {
    describe('ensure.obj tests', function () {
        it('ensure.obj({}) should not throw', function () {
            expect(ensure.obj({})).to.not.throw;
        });

        it('ensure.obj(12) should throw TypeError', function () {
            expect(function () {
                ensure.obj(12);
            }).to.throw(TypeError);
        });

        it('ensure.obj({}, true) should throw Error', function () {
            expect(function () {
                ensure.obj({}, true);
            }).to.throw(Error);
        });
    });
});

