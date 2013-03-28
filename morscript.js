/*
 * morscript.js
 *
 *  (c) 2013 Dan Kogai
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license
 *
 */
(function(ctx) {
    'use strict';
    if (!Object.create || 'hasOwnProperty' in Object.create(null)) {
        throw new Error('ES5 unsupported');
    }
    var _ = function() {
        return Object.create(null, {
            _: { get: function() { this._______.push(0); return this } },
            __: { get: function() { this._______.push(1); return this } },
            ___: { get: function() {
                var ord = this._______.reduce(function(c, n, i) {
                    return (n << i) | c;
                }, 0);
                this._______ = [];
                this.________ += String.fromCharCode(ord);
                return this;
            }},
            ____: { get: function() { return this.________ }},
            _____: { get: function() { return eval(this.____) }},
            ______: { value: function(s, r) {
                return '_.' + [].slice.call(s)
                    .map(function(c) { return c.charCodeAt(0) })
                    .map(function(n) {
                        var a = [];
                        for (; n; n >>>= 1) a.push(n & 1 ? '__' : '_');
                        return a.join('.') + '.___' + (r || '');
                    })
                    .join('.') + '.____';
            }},
            _______: { value: [], writable: true },
            ________: { value: '', writable: true },
        });
    };
    Object.defineProperty(ctx, '_', { get: _ });
})(this);
