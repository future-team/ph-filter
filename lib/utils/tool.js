'use strict';

exports.__esModule = true;
var Tool = {
    transToArray: function transToArray(val) {
        switch (typeof val) {
            case 'string':
                var arr = [];
                arr = val.split(',');
                return arr;
                break;
            case 'number':
                return val.toString();
            default:
                return val;
        }
    }
};

exports['default'] = Tool;
module.exports = exports['default'];