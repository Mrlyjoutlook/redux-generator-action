'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
        return function (action) {
            var _marked = [gen].map(_regenerator2.default.mark);

            //Check action is Array?
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
                var i;
                return _regenerator2.default.wrap(function gen$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                i = 0;

                            case 1:
                                if (!(i < arr.length)) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 4;
                                return Array.isArray(arr[i]) ? gen(arr[i]) : dealType(arr[i]);

                            case 4:
                                _context.next = 1;
                                break;

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _marked[0], this);
            }

            return (0, _co2.default)(gen(action));
        };
    };
};