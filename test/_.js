/*
 * use mocha to test me
 * http://visionmedia.github.com/mocha/
 */
if (this['window'] !== this) {
    require('./helper.js');
    // not "var _"; node also aliases _ to global by default
    var $ = require('../morscript.js');
}

(function(root){
    'use strict';
    var prefix = $ ? '$.' : '';
    $ = $ || eval('_');
    describe('OK', function() {
        it ('loaded', ok($));
    });
    describe('_', function() {
        var s = 'Hello, world';
        it('______', ok(eval(prefix + $._.______(s)), s));
    });
})(this);
