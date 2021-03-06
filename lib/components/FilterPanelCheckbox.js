'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemJs = require('./Item.js');

var _ItemJs2 = _interopRequireDefault(_ItemJs);

var _utilsToolJs = require('../utils/tool.js');

var FilterPanelCheckbox = (function (_Component) {
    _inherits(FilterPanelCheckbox, _Component);

    _createClass(FilterPanelCheckbox, null, [{
        key: 'defaulrProps',
        value: {},
        enumerable: true
    }]);

    function FilterPanelCheckbox(props, context) {
        _classCallCheck(this, FilterPanelCheckbox);

        _Component.call(this, props, context);

        this.init = 0;
        this.choose = props.choose;

        this.state = {
            activeGroupIndex: props.groupIndex,
            allChecked: {},
            itemChecked: {},
            itemDisabled: {}
        };
    }

    FilterPanelCheckbox.prototype.deleteFromArray = function deleteFromArray(val) {
        var choose = this.props.choose;

        var _index = choose.indexOf(val);
        if (_index > -1) {
            choose.splice(_index, 1);
        }
    };

    FilterPanelCheckbox.prototype.mainKeyChange = function mainKeyChange(key) {
        this.setState({
            activeGroupIndex: key
        });
    };

    FilterPanelCheckbox.prototype.onAllItemChange = function onAllItemChange(mainKey, itemKey, e) {
        var choose = this.props.choose;

        var allChecked = this.state.allChecked,
            itemChecked = this.state.itemChecked;

        allChecked[mainKey] = e.target.checked;
        // 全选或全不选
        for (var i in itemChecked[mainKey]) {
            itemChecked[mainKey][i] = e.target.checked;

            if (e.target.checked) {
                // 全选
                if (choose.indexOf(i) == -1 && !this.state.itemDisabled[mainKey][i]) choose.push(i.toString());
            } else {
                // 全不选
                this.deleteFromArray(i);
            }
        }

        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        if (this.props.getChooseData) this.props.getChooseData(choose.join());
    };

    FilterPanelCheckbox.prototype.onItemChange = function onItemChange(mainKey, itemKey, e) {
        var choose = this.props.choose;

        var allChecked = this.state.allChecked,
            itemChecked = this.state.itemChecked;

        itemChecked[mainKey][itemKey] = e.target.checked;

        if (!e.target.checked) {
            // 其中一个不选时去掉全选
            allChecked[mainKey] = false;
            this.deleteFromArray(itemKey.toString());
        }

        if (e.target.checked) {
            var count = true;
            if (choose.indexOf(itemKey) == -1) choose.push(itemKey.toString());
            for (var i in itemChecked[mainKey]) {
                if (!itemChecked[mainKey][i] && !this.state.itemDisabled[mainKey][i]) {
                    count = false;
                    break;
                }
            }
            if (count) allChecked[mainKey] = true;
        }

        this.setState({
            allChecked: allChecked,
            itemChecked: itemChecked
        });

        if (this.props.getChooseData) this.props.getChooseData(choose.join());
    };

    FilterPanelCheckbox.prototype.renderMainMenuList = function renderMainMenuList() {
        var self = this;

        return _react2['default'].Children.map(this.props.children, function (menu, index) {
            return _react2['default'].cloneElement(menu, {
                active: self.state.activeGroupIndex == index,
                groupIndex: index,
                readOnly: self.props.readOnly,
                mainKeyChange: self.mainKeyChange.bind(self)
            });
        });
    };

    FilterPanelCheckbox.prototype.renderSubMenuList = function renderSubMenuList(mainMenuList) {
        var choose = this.props.choose;

        var mainMenu,
            self = this;

        mainMenu = _react2['default'].Children.map(mainMenuList, function (menu) {
            var mainKey = menu.props.mainKey;

            if (menu.props.groupIndex == self.state.activeGroupIndex) {
                var _ret = (function () {
                    var subMenu = [],
                        checkedCount = 0,
                        disabledCount = 0,
                        sum = 0;

                    _react2['default'].Children.map(menu.props.children, function (item) {
                        var key = item.props.itemKey,
                            disabled = item.props.disabled;

                        self.state.itemChecked[mainKey] = self.state.itemChecked[mainKey] || {};
                        self.state.itemDisabled[mainKey] = self.state.itemDisabled[mainKey] || {};

                        if (self.state.itemChecked[mainKey][key] == undefined || self.choose != choose) {
                            // 兼容通过请求获取choose的情况
                            self.state.itemChecked[mainKey][key] = choose.indexOf(key.toString()) != -1;
                        }
                        if (self.state.itemDisabled[mainKey][key] == undefined || self.choose != choose) {
                            self.state.itemDisabled[mainKey][key] = disabled;
                        }

                        if (self.state.itemChecked[mainKey][key]) checkedCount++;
                        if (disabled) {
                            self.deleteFromArray(key.toString());
                            disabledCount++;
                        }
                        sum++;

                        subMenu.push(_react2['default'].cloneElement(item, {
                            active: false,
                            readOnly: self.props.readOnly,
                            categoryChange: self.props.categoryChange,
                            panelIndex: self.props.panelIndex,
                            // new props
                            checked: self.state.itemChecked[mainKey][key],
                            choose: self.props.choose,
                            filterType: "checkbox",
                            mainKey: mainKey,
                            onItemChange: self.onItemChange.bind(self)
                        }));
                    });

                    // new一个全部的elemecontext
                    if (self.state.allChecked[mainKey] == undefined || self.choose != choose) {
                        if (checkedCount + disabledCount == sum) self.state.allChecked[mainKey] = true;else self.state.allChecked[mainKey] = false;
                    }

                    subMenu.unshift(_react2['default'].createElement(
                        _ItemJs2['default'],
                        { active: false, key: mainKey, itemKey: mainKey, mainKey: mainKey, disabled: disabledCount == sum,
                            filterType: 'checkbox', choose: self.props.choose, checked: self.state.allChecked[mainKey],
                            onItemChange: self.onAllItemChange.bind(self) },
                        '全部'
                    ));

                    return {
                        v: subMenu
                    };
                })();

                if (typeof _ret === 'object') return _ret.v;
            }
        });
        self.init = 1;
        // console.log(this.props.choose.join());
        return mainMenu;
    };

    FilterPanelCheckbox.prototype.render = function render() {
        var self = this,
            mainMenuList = this.renderMainMenuList(),
            subMenuList = this.renderSubMenuList(mainMenuList);

        return _react2['default'].createElement(
            'div',
            { className: 'self-filter' },
            _react2['default'].createElement(
                'div',
                { className: (this.props.className ? this.props.className + ' ' : '') + "selector" },
                _react2['default'].createElement(
                    'div',
                    { className: 'menu main' },
                    mainMenuList
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'menu sub' },
                    subMenuList
                )
            )
        );
    };

    return FilterPanelCheckbox;
})(_react.Component);

exports['default'] = FilterPanelCheckbox;
module.exports = exports['default'];