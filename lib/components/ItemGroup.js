'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Item = (function (_Component) {
    _inherits(Item, _Component);

    function Item(props, context) {
        _classCallCheck(this, Item);

        _Component.call(this, props, context);
    }

    Item.prototype.renderSubMenu = function renderSubMenu() {
        var subContainer = this.props.subContainer;
    };

    Item.prototype.render = function render() {
        var self = this;
        return _react2['default'].createElement(
            'div',
            { className: 'item' + (this.props.active ? ' on' : ''),
                onClick: function () {
                    if (self.props.readOnly) {
                        return;
                    }
                    self.props.mainKeyChange(self.props.groupIndex);
                } },
            this.props.label
        );
    };

    _createClass(Item, null, [{
        key: 'propTypes',
        value: {
            /**
             * 当使用FilterPanel(支持二级选择)时，itemGroup的label属性被用来渲染一级选项，item自身用来渲染二级
             * @property label
             * @type 字符串或者标签
             * */
            label: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.element])
        },
        enumerable: true
    }]);

    return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];