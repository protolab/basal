'use strict';

function isString(s) {
    return typeof  s === 'string' || s instanceof String;
}

function isNumber(n) {
    return typeof  n === 'number' || n instanceof Number;
}

/**
 * Checks that the specified object is of type 'function'.
 *
 * @param {function} fn - a function
 * @return {boolean}
 */
function isFunction(fn) {
    return typeof fn === 'function';
}

function isObject(o) {
    return o != null && typeof  o === 'object';
}

/**
 * Checks if object contains no values
 * (no enumerable own-properties for an Object, empty string,
 * empty array).
 *
 * @param {object|string|Array} obj - the object to be checked.
 * @return {boolean} true if object contains no value(s).
 * @throws {Error} if the specified obj is null/undefined
 */
function isEmpty(obj) {
    if (obj == null) {
        throw new Error('Must be not null! Cannot check null for emptiness!');
    }

    if (isObject(obj)) {
        return !Object.keys(obj).length;
    }
    return !obj.length; // string, array
}

function isBoolean(b) {
    return b === !!b || b instanceof Boolean;
}

module.exports = {
    obj: isObject,
    fn: isFunction,
    empty: isEmpty,
    bool: isBoolean,
    string: isString,
    number: isNumber
};
