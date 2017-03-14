'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = generator;

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generator(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    return function (next) {
        return function (action) {
            var _marked = [gen].map(_regenerator2.default.mark);

            // Check action is Array?
            if (!Array.isArray(action)) return next(action);
            function dealType(obj) {
                switch (obj['type']) {
                    case 'GEN_ALL':
                        return Promise.all(obj.data.map(function (val) {
                            return dispatch(val);
                        }));
                        break;
                    case 'GEN_RACE':
                        return Promise.race(obj.data.map(function (val) {
                            return dispatch(val);
                        }));
                        break;
                    default:
                        return dispatch(obj);
                }
            }

            function gen(arr) {
                var i, n;
                return _regenerator2.default.wrap(function gen$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                i = 0, n = arr.length;

                            case 1:
                                if (!(i < n)) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 4;
                                return Array.isArray(arr[i]) ? gen(arr[i]) : _typeof(arr[i]) === 'object' ? dealType(arr[i]) : dispatch(arr[i]);

                            case 4:
                                i++;
                                _context.next = 1;
                                break;

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _marked[0], this);
            }
            return (0, _co2.default)(gen(action));
        };
    };
}