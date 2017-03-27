'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FilterContainer = (function (_Component) {
    _inherits(FilterContainer, _Component);

    FilterContainer.prototype.initCat = function initCat() {
        var catList = _react2['default'].Children.map(this.props.children, function (panel, index) {
            //如果panel设置了selected属性的话直接读取selected属性，
            //如果panel没有设置selected属性，则读取default用来展示在cat列表中
            var cat = panel.props.selected ? panel.props.selected : {
                key: '',
                value: panel.props['default'] ? panel.props['default'] : ''
            };
            return cat;
        });
        return catList;
    };

    function FilterContainer(props, context) {
        _classCallCheck(this, FilterContainer);

        _Component.call(this, props, context);
        this.state = {
            catList: this.initCat(),
            activeCat: props.activeIndex
        };
    }

    //如果设置了hideCat并且只有一个panel，则该panel一直会显示

    FilterContainer.prototype.categoryChange = function categoryChange(index, category) {
        var catList = this.state.catList.slice();
        catList[index] = category;
        this.setState({
            catList: catList,
            activeCat: -1
        });
        this.props.onChange && this.props.onChange(category.key);
    };

    FilterContainer.prototype.activeCat = function activeCat(index) {
        //展开某一个cat
        if (index == this.state.activeCat) {
            index = -1;
        }
        this.setState({
            activeCat: index
        });
    };

    FilterContainer.prototype.renderPanelList = function renderPanelList() {
        var self = this;
        var _self$state = self.state;
        var catList = _self$state.catList;
        var activeCat = _self$state.activeCat;

        return _react2['default'].Children.map(this.props.children, function (panel, index) {
            var show = index == activeCat;
            if (self.props.hideCat && index == 0) {
                show = true;
            }
            return _react2['default'].cloneElement(panel, {
                categoryChange: self.categoryChange.bind(self),
                selected: catList[index],
                panelIndex: index,
                show: show,
                choose: self.props.choose,
                getChooseData: self.props.getChooseData
            });
        });
    };

    FilterContainer.prototype.renderCatList = function renderCatList() {
        if (this.props.hideCat) {
            return null;
        }
        var self = this;
        var _self$state2 = self.state;
        var catList = _self$state2.catList;
        var activeCat = _self$state2.activeCat;
        var width = '100%';
        if (catList.length) {
            width = (100 / catList.length).toFixed(2) + '%';
        }
        return catList.map(function (catCfg, index) {
            return _react2['default'].createElement(
                'a',
                { href: 'javascript:void(0)',
                    className: "item" + (index == activeCat ? ' active' : ''),
                    style: { width: width },
                    key: 'cat-' + index,
                    onClick: function () {
                        self.activeCat(index);
                    } },
                catList[index].value
            );
        });
    };

    FilterContainer.prototype.render = function render() {
        var panelList = this.renderPanelList(),
            catList = this.renderCatList();

        return _react2['default'].createElement(
            'div',
            { className: 'filter-container' },
            _react2['default'].createElement(
                'div',
                { className: 'cat' },
                catList
            ),
            panelList
        );
    };

    _createClass(FilterContainer, null, [{
        key: 'propTypes',
        value: {
            /**
             * 用户选择了某一项item之后触发的回调函数
             * @method onChange
             * @type Function
             * */
            onChange: _react.PropTypes.func,
            /**
             * 默认展开筛选的索引，默认－1，即都不展开
             * @property activeIndex
             * @type Number
             * */
            activeIndex: _react.PropTypes.number,
            /**
             * 是否隐藏头部
             * @property hideCat
             * @type Boolean
             * */
            hideCat: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            activeIndex: -1,
            choose: []
        },
        enumerable: true
    }]);

    return FilterContainer;
})(_react.Component);

exports['default'] = FilterContainer;
module.exports = exports['default'];