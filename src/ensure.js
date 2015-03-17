'use strict';

var is = require('./is');

/**
 * Enforces an object to be set (not null and not 'undefined').
 *
 * @param {object} o - the object to check.
 * @param {string} [message] - an additional information.
 * @return {object} the reference to the checked object.
 */
function requireNotNull(o, message) {
    if (o == null) {
        var msg = 'Must be not null or undefined! ' + message;
        throw new Error(msg);
    }
    return o;
}

/**
 * Enforces that the specified object is of type 'object'.
 *
 * @param {object} obj - the object to check.
 * @param {boolean} [notEmpty] - if true, checks for emptiness.
 * @param {string} [message] - an additional error message.
 * @return {object} the reference to the checked object.
 * @throws {error} if the specified object is null/undefined or is not
 *                 of type 'object'.
 */
function requireObject(obj, notEmpty, message) {
    if (!is.obj(obj)) {
        var msg = concat(
            'Invalid argument! Must not be null and must be an instance ' +
            'of Object!', message);
        throw new TypeError(msg);
    }

    if (notEmpty && is.empty(obj)) {
        throw new Error(concat('The object must not be empty!', message));
    }
    return obj;
}

function requireString(str, notEmpty, message) {
    /**
     * Enforces that the specified object is of type 'string'.
     *
     * @param {string} str - the string to be checked.
     * @param {boolean} [notEmpty] - specifies whether the provided string needs to be
     *                               checked for emptiness.
     * @param {string} [message] - an additional error message.
     * @return {string} the checked string.
     * @throws {error} if the specified string is null/undefined or (optionally)
     *                 an empty string.
     */
    message = message || '';

    if (!is.string(str)) {
        var msg = concat(
            'Invalid argument! Must not be null and must be an instance ' +
            'of String!', message);
        throw new TypeError(msg);
    }

    if (notEmpty && is.empty(str)) {
        throw new Error(concat(
            'Invalid argument! Must not be an empty string!', message));
    }
    return str;
}

/**
 * Enforces that the specified object is of type 'function'.
 *
 * @param {function} fn - the function to be checked.
 * @param {string} [message] - an additional error message.
 * @return {function} the checked function.
 * @throws {error} if the specified object is null/undefined or is
 *                 not of type 'function'.
 */
function requireFunction(fn, message) {
    if (!is.fn(fn)) {
        var msg = concat(
            'Invalid argument! Must not be null and must be an instance ' +
            'of Function!', message);
        throw new TypeError(msg);
    }
    return fn;
}

/**
 * Enforces that the specified object is of type 'Number'.
 *
 * @param {number} num - the object to be checked.
 * @param {string} [message] - an additional error message.
 * @return {number} the checked number.
 * @throws {error} if the specified object is null/undefined or is
 *                 not of type 'number'.
 */
function requireNumber(num, message) {
    if (!is.number(num)) {
        throw new TypeError(concat(
            'Must not be null and must be an instance of Number!',
            message));
    }
    return num;
}

/**
 * Enforces that the specified object is of type 'array'.
 *
 * @param {array} arr - the array to be checked.
 * @param {boolean} [notEmpty] - specifies whether the provided array needs to be
 *                               checked for emptiness. * @param {string} [message] - an additional error message.
 * @param {string} message - additional info.
 * @return {array} the checked array.
 * @throws {error} if the specified array is null/undefined or (optionally)
 *                 an empty array.
 */
function requireArray(arr, notEmpty, message) {
    if (!Array.isArray(arr)) {
        throw new TypeError(concat(
            'Must not be null and must be an instance of Array!',
            message));
    }

    if (notEmpty && is.empty(arr)) {
        throw new Error(concat('The array must not be empty!', message));
    }
    return arr;
}

function concat(msg, anotherMessage) {
    if (!is.string(msg)) {
        throw new TypeError('Cannot amend a non-string!');
    }

    if (anotherMessage && !is.empty(anotherMessage)) {
        return msg + ' ' + anotherMessage;
    }
    return msg;
}

module.exports = {
    notNull: requireNotNull,
    obj: requireObject,
    array: requireArray,
    fn: requireFunction,
    number: requireNumber,
    string: requireString
};
