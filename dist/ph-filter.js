(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("phoenix-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "phoenix-ui"], factory);
	else if(typeof exports === 'object')
		exports["PhFilter"] = factory(require("react"), require("phoenix-ui"));
	else
		root["PhFilter"] = factory(root["React"], root["Phoenix"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(3);

	var _componentsFilterContainerJs = __webpack_require__(7);

	var _componentsFilterContainerJs2 = _interopRequireDefault(_componentsFilterContainerJs);

	exports.FilterContainer = _componentsFilterContainerJs2['default'];

	var _componentsFilterPanelJs = __webpack_require__(10);

	var _componentsFilterPanelJs2 = _interopRequireDefault(_componentsFilterPanelJs);

	exports.Panel = _componentsFilterPanelJs2['default'];

	var _componentsFilterPanelSimpleJs = __webpack_require__(12);

	var _componentsFilterPanelSimpleJs2 = _interopRequireDefault(_componentsFilterPanelSimpleJs);

	exports.PanelSimple = _componentsFilterPanelSimpleJs2['default'];

	var _componentsItemJs = __webpack_require__(13);

	var _componentsItemJs2 = _interopRequireDefault(_componentsItemJs);

	exports.Item = _componentsItemJs2['default'];

	var _componentsItemGroupJs = __webpack_require__(16);

	var _componentsItemGroupJs2 = _interopRequireDefault(_componentsItemGroupJs);

	exports.ItemGroup = _componentsItemGroupJs2['default'];

	var _componentsFilterCheckboxJs = __webpack_require__(17);

	var _componentsFilterCheckboxJs2 = _interopRequireDefault(_componentsFilterCheckboxJs);

	exports.FilterCheckbox = _componentsFilterCheckboxJs2['default'];

	var _componentsFilterPanelCheckboxJs = __webpack_require__(18);

	var _componentsFilterPanelCheckboxJs2 = _interopRequireDefault(_componentsFilterPanelCheckboxJs);

	exports.PanelCheckbox = _componentsFilterPanelCheckboxJs2['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.npminstall/css-loader/0.17.0/css-loader/index.js!../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../node_modules/.npminstall/css-loader/0.17.0/css-loader/index.js!../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".filter-container {\n  position: relative;\n}\n.filter-container .cat {\n  padding: 0px;\n  background: #ffffff;\n}\n.filter-container .cat::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.filter-container .cat .item {\n  display: block;\n  background-repeat: repeat-y;\n  background-position: right 0;\n  background-size: 1px auto;\n  float: left;\n  text-align: center;\n  color: #646464;\n  font-size: 13px;\n  overflow: hidden;\n  height: 40px;\n  line-height: 40px;\n  position: relative;\n  text-decoration: none;\n  border-bottom: 1px solid #ededed;\n}\n.filter-container .cat .item::after {\n  content: '';\n  display: inline-block;\n  margin-left: 7px;\n  margin-bottom: 3px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  border-bottom: 1px solid #666;\n  border-left: 1px solid #666;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n}\n.filter-container .cat .item.active:after {\n  border-color: #ee5511;\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n  margin-bottom: 0;\n}\n.filter-container .selector {\n  position: absolute;\n  z-index: 100;\n  color: #323232;\n  width: 100%;\n  height: 315px;\n  font-size: 15px;\n  overflow-y: hidden;\n  background-color: #fff;\n}\n.filter-container .selector .item {\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  color: #323232;\n  overflow: hidden;\n  cursor: pointer;\n}\n.filter-container .selector.simple-selector {\n  height: inherit;\n  overflow-y: visible;\n}\n.filter-container .selector.simple-selector .menu {\n  height: inherit;\n  max-height: 315px;\n  background: #ffffff;\n}\n.filter-container .selector.simple-selector .menu.sub {\n  position: relative;\n}\n.filter-container .selector.simple-selector .menu .item {\n  border-bottom: 1px solid #eeeeff;\n}\n.filter-container .selector.simple-selector .menu .item:last-child {\n  border-bottom: none;\n}\n.filter-container .menu {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  float: left;\n}\n.filter-container .menu.main {\n  width: 45%;\n  background: #f5f5f5;\n}\n.filter-container .menu.main .item {\n  padding-left: 15px;\n}\n.filter-container .menu.main .item.on {\n  background: #ffffff;\n}\n.filter-container .menu.sub {\n  position: absolute;\n  top: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding-left: 15px;\n  height: 315px;\n  overflow-y: scroll ;\n  -webkit-overflow-scrolling: touch;\n  left: 45%;\n  width: 55%;\n}\n.filter-container .menu.sub.full {\n  width: 100%;\n  left: 0px;\n}\n.filter-container .menu.sub .item.on {\n  color: #ee5511;\n  border-bottom: 1px solid #ee5511;\n}\n.ph-checkbox-filter .selector {\n  z-index: 9;\n  height: auto;\n}\n.ph-checkbox-filter .selector .menu {\n  min-height: 100vh;\n}\n.ph-checkbox-filter .selector .menu.main {\n  width: 35%;\n}\n.ph-checkbox-filter .selector .menu.sub {\n  left: 35%;\n  width: 65%;\n  padding-bottom: 25%;\n}\n.ph-checkbox-filter .selector .menu.sub .item {\n  border-bottom: 1px solid #e1e1e1;\n}\n.ph-checkbox-filter .selector .menu .item {\n  height: 44px;\n  line-height: 44px;\n  white-space: nowrap;\n  font-size: 15px;\n}\n.ph-checkbox-filter .selector .menu .item.ph-disabled {\n  color: #e2e2e2;\n  pointer-events: none;\n}\n.ph-checkbox-filter .selector .ph-multi-group {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  height: 100%;\n  margin-right: 0;\n}\n.ph-checkbox-filter .selector .ph-multi-group .ph-checkbox {\n  margin-right: 15px;\n}\n.ph-checkbox-filter .selector .ph-multi-group .ph-checkbox i {\n  margin-top: 3px;\n}\n.ph-checkbox-filter .selector .ph-multi-group input[type=\"checkbox\"]:checked + i:before {\n  width: 1px;\n  height: 4px;\n  left: 4px;\n  top: 7px;\n}\n.ph-checkbox-filter .selector .ph-multi-group input[type=\"checkbox\"]:checked + i:after {\n  width: 1px;\n  height: 8px;\n  left: 8px;\n  top: 4px;\n}\n.ph-checkbox-filter .selector .ph-multi-group .ph-checkbox,\n.ph-checkbox-filter .selector .ph-multi-group .ph-checkbox i {\n  width: 16px;\n  height: 16px;\n}\n.ph-checkbox-filter .selector .ph-multi-group span {\n  top: 0;\n}\n.ph-checkbox-filter .ph-submit-field {\n  position: absolute;\n  z-index: 10;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  padding: 15px;\n}\n.ph-checkbox-filter .ph-submit-field .ph-button {\n  margin: 0;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _utilsToolJs = __webpack_require__(9);

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
	                choose: _utilsToolJs.transToArray(self.props.choose),
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

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _FilterPanelBaseJs = __webpack_require__(11);

	var _FilterPanelBaseJs2 = _interopRequireDefault(_FilterPanelBaseJs);

	var FilterPanel = (function (_PanelBase) {
	    _inherits(FilterPanel, _PanelBase);

	    FilterPanel.prototype.getActiveGroupIndex = function getActiveGroupIndex() {
	        var activeIndex = 0,
	            selectedKey = this.props.selected.key;
	        if (selectedKey) {
	            _react2['default'].Children.map(this.props.children, function (mainMenu, mainIndex) {
	                _react2['default'].Children.map(mainMenu.props.children, function (subMenu, subIndex) {
	                    if (subMenu.props.itemKey == selectedKey) {
	                        activeIndex = mainIndex;
	                    }
	                });
	            });
	        }
	        return activeIndex;
	    };

	    function FilterPanel(props, context) {
	        _classCallCheck(this, FilterPanel);

	        _PanelBase.call(this, props, context);
	        this.state = {
	            activeGroupIndex: this.getActiveGroupIndex()
	        };
	    }

	    FilterPanel.prototype.renderSubMenuList = function renderSubMenuList(mainMenuList) {
	        var subMenuList = [],
	            self = this;
	        _react2['default'].Children.map(mainMenuList, function (menu, index) {
	            if (menu.props.groupIndex == self.state.activeGroupIndex) {
	                subMenuList = menu.props.children;
	            }
	        });
	        return this.renderItemList(subMenuList);
	    };

	    FilterPanel.prototype.mainKeyChange = function mainKeyChange(key) {
	        this.setState({
	            activeGroupIndex: key
	        });
	    };

	    FilterPanel.prototype.render = function render() {
	        var self = this,
	            mainMenuList = _react2['default'].Children.map(this.props.children, function (menu, index) {
	            return _react2['default'].cloneElement(menu, {
	                active: self.state.activeGroupIndex == index,
	                groupIndex: index,
	                readOnly: self.props.readOnly,
	                mainKeyChange: self.mainKeyChange.bind(self)
	            });
	        }),
	            subMenuList = this.renderSubMenuList(mainMenuList);
	        return this.props.show ? _react2['default'].createElement(
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
	        ) : null;
	    };

	    return FilterPanel;
	})(_FilterPanelBaseJs2['default']);

	exports['default'] = FilterPanel;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var FilterPanelBase = (function (_Component) {
	    _inherits(FilterPanelBase, _Component);

	    function FilterPanelBase() {
	        _classCallCheck(this, FilterPanelBase);

	        _Component.apply(this, arguments);
	    }

	    FilterPanelBase.prototype.renderItemList = function renderItemList(itemList) {
	        var self = this;
	        return _react2['default'].Children.map(itemList, function (item) {
	            var key = item.props.itemKey,
	                selectedKey = self.props.selected && self.props.selected.key ? self.props.selected.key : '';
	            return _react2['default'].cloneElement(item, {
	                active: selectedKey == key,
	                readOnly: self.props.readOnly,
	                categoryChange: self.props.categoryChange,
	                panelIndex: self.props.panelIndex
	            });
	        });
	    };

	    _createClass(FilterPanelBase, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * panel下选中的item的key、value组成的对象，用于设置该panel初始状态下选中的item项
	             * @property selected
	             * @type Object 如{key:'ljz',value:'陆家嘴'}
	             * */
	            selected: _react2['default'].PropTypes.shape({
	                key: _react2['default'].PropTypes.string,
	                value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.element])
	            }),
	            /**
	             * 当不设置panel的选中项时（不选择任何item），可以设置一个默认字符展示在filter上
	             * @property default
	             * @type String
	             * */
	            'default': _react2['default'].PropTypes.string,
	            /**
	             * panel是否为只读模式
	             * @property readOnly
	             * @type Boolean
	             * */
	            readOnly: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);

	    return FilterPanelBase;
	})(_react.Component);

	exports['default'] = FilterPanelBase;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _FilterPanelBaseJs = __webpack_require__(11);

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
	        ) : null;
	    };

	    return FilterPanelSimple;
	})(_FilterPanelBaseJs2['default']);

	exports['default'] = FilterPanelSimple;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(14);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _phoenixUi = __webpack_require__(15);

	var Item = (function (_Component) {
	    _inherits(Item, _Component);

	    _createClass(Item, null, [{
	        key: 'propTypes',
	        value: {
	            /**
	             * item项的唯一标示，必填项
	             * @property itemKey
	             * @type String
	             * */
	            itemKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	            /**
	             * 是否是选择全部的checkbox，可选all
	             * @property type
	             * @type String
	             * @default 无
	             * */
	            type: _react.PropTypes.string,
	            /**
	             * 状态
	             * @property disabled
	             * @type Boolean
	             * @default false
	             * */
	            disabled: _react.PropTypes.bool
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            disabled: false
	        },
	        enumerable: true
	    }]);

	    function Item(props, context) {
	        _classCallCheck(this, Item);

	        _Component.call(this, props, context);

	        this.state = {
	            active: this.props.active ? this.props.active : false
	        };
	    }

	    Item.prototype.clickCallback = function clickCallback() {
	        if (this.props.readOnly || this.props.filterType) {
	            return;
	        }
	        this.props.categoryChange && this.props.categoryChange(this.props.panelIndex, {
	            key: this.props.itemKey,
	            value: this.props.children
	        }, this.props.refValue);
	    };

	    Item.prototype.onChange = function onChange(e) {
	        var _props = this.props;
	        var mainKey = _props.mainKey;
	        var itemKey = _props.itemKey;

	        this.props.onItemChange(mainKey, itemKey, e);
	    };

	    Item.prototype.renderChildren = function renderChildren() {
	        var _props2 = this.props;
	        var filterType = _props2.filterType;
	        var checked = _props2.checked;
	        var disabled = _props2.disabled;
	        var children = _props2.children;

	        if (filterType) {
	            return _react2['default'].createElement(_phoenixUi.Input, { type: 'checkbox', label: children, disabled: disabled, checked: checked && !disabled, onChange: this.onChange.bind(this) });
	        } else {
	            return children;
	        }
	    };

	    Item.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: _classnames2['default']('item' + (this.props.active ? ' on' : ''), this.props.disabled ? 'ph-disabled' : ''),
	                onClick: this.clickCallback.bind(this) },
	            this.renderChildren()
	        );
	    };

	    return Item;
	})(_react.Component);

	exports['default'] = Item;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _phoenixUi = __webpack_require__(15);

	var _FilterContainerJs = __webpack_require__(7);

	var _FilterContainerJs2 = _interopRequireDefault(_FilterContainerJs);

	var _FilterPanelCheckboxJs = __webpack_require__(18);

	var _FilterPanelCheckboxJs2 = _interopRequireDefault(_FilterPanelCheckboxJs);

	var FilterCheckbox = (function (_Component) {
	    _inherits(FilterCheckbox, _Component);

	    function FilterCheckbox(props, context) {
	        _classCallCheck(this, FilterCheckbox);

	        _Component.call(this, props, context);

	        this.choose = props.choose;
	    }

	    FilterCheckbox.prototype.getChooseData = function getChooseData(data) {
	        this.choose = data;
	    };

	    FilterCheckbox.prototype.onSubmitHandle = function onSubmitHandle(e) {
	        e.preventDefault();
	        if (this.props.onSubmit) this.props.onSubmit(this.choose);
	    };

	    FilterCheckbox.prototype.render = function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'ph-checkbox-filter' },
	            _react2['default'].createElement(
	                _FilterContainerJs2['default'],
	                { activeIndex: 0, hideCat: true, choose: this.props.choose, getChooseData: this.getChooseData.bind(this) },
	                _react2['default'].createElement(
	                    _FilterPanelCheckboxJs2['default'],
	                    { groupIndex: this.props.groupIndex },
	                    this.props.children
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'ph-submit-field' },
	                _react2['default'].createElement(
	                    _phoenixUi.Button,
	                    { block: true, onClick: this.onSubmitHandle.bind(this) },
	                    this.props.buttonText
	                )
	            )
	        );
	    };

	    _createClass(FilterCheckbox, null, [{
	        key: 'propTypes',
	        value: {
	            groupIndex: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            groupIndex: 0,
	            buttonText: '提交',
	            buttonStyle: 'primary'
	        },
	        enumerable: true
	    }]);

	    return FilterCheckbox;
	})(_react.Component);

	exports['default'] = FilterCheckbox;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _ItemJs = __webpack_require__(13);

	var _ItemJs2 = _interopRequireDefault(_ItemJs);

	var _utilsToolJs = __webpack_require__(9);

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
	        );
	    };

	    return FilterPanelCheckbox;
	})(_react.Component);

	exports['default'] = FilterPanelCheckbox;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;