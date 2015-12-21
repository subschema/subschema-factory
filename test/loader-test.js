var expect = require('expect');
var each = require('lodash/collection/each');
var loaderFactory = require('../src/loaderFactory');

describe('loader', function () {
    each(['Template', 'Type', 'Schema', 'Validator', 'Operator', 'Processor'], function (v, i) {
        var loader = loaderFactory();
        var value = {};
        it(`should add a ${v}`, function () {
            loader[`add${v}`](v, value);
        });

        it(`should load a ${v}`, function () {
            expect(loader[`load${v}`](v)).toBe(value, 'The value of load');
        });
        it(`should list a ${v}`, function () {
            expect(loader[`list${v}s`]()[0].name).toBe(v, 'The list of the value loaded');
        });
    });
})