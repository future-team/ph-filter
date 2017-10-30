'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterPanelBaseJs = require('./FilterPanelBase.js');

var _FilterPanelBaseJs2 = _interopRequireDefault(_FilterPanelBaseJs);

var FilterPanelSimple = (function (_PanelBase) {
    _inherits(FilterPanelSimple, _PanelBase);

    function FilterPanelSimple(props, context) {
        _classCallCheck(this, FilterPanelSimple);

        _PanelBase.call(this, props, context);
    }

    FilterPanelSimple.prototype.render = function render() {
        var itemList = this.renderItemList(this.props.children);
        return this.props.show ? _react2['default'].createElement(
            'div',
            { className: 'self-filter' },
            _react2['default'].createElement(
                'div',
                { className: (this.props.className ? this.props.className + ' ' : '') + "selector simple-selector" },
                _react2['default'].createElement(
                    'div',
                    { className: 'menu sub full' },
                    _react2['default'].createElement(
                        'div',
                        null,
                        itemList
                    )
                )
            )
        ) : null;
    };

    return FilterPanelSimple;
})(_FilterPanelBaseJs2['default']);

exports['default'] = FilterPanelSimple;
module.exports = exports['default'];