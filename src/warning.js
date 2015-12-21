'use strict';
var noop = require('lodash/utility/noop');
var warning = noop;

if (process.env.NODE_ENV !== 'production') {
    warning = function (check, format) {
        if (format === undefined) {
            throw new Error('`subschema: warning(condition, format, ...args)` requires a warning message argument');
        }
        if (check) {
            return;
        }

        var args = arguments, i = 2, message = 'Subschema Warning: ' + format.replace(/%s/g, ()=>args[i++]);

        if (typeof console !== void(0)) {
            console.error(message);
        }

        try {
            //trigger debugger;
            throw new Error(message);
        } catch (x) {
        }
    }
}
module.exports = warning;