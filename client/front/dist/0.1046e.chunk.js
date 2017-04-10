webpackJsonp([0],{

/***/ "../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

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
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./components/ArchiveList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = __webpack_require__("../node_modules/react/react.js");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__("../node_modules/react-transform-hmr/lib/index.js");

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__("../node_modules/react-router/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ArchiveList: {
        displayName: 'ArchiveList'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/ArchiveList.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var ArchiveList = _wrapComponent('ArchiveList')(function (_Component) {
    _inherits(ArchiveList, _Component);

    function ArchiveList() {
        _classCallCheck(this, ArchiveList);

        return _possibleConstructorReturn(this, (ArchiveList.__proto__ || Object.getPrototypeOf(ArchiveList)).apply(this, arguments));
    }

    _createClass(ArchiveList, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: 'archive-list' },
                this._renderPostList(this.props.timeList)
            );
        }
    }, {
        key: '_renderPostList',
        value: function _renderPostList(timeList) {
            var _this2 = this;

            return (
                // 先对对象属性进行排序，然后遍历输出
                Object.keys(timeList).sort(function (a, b) {
                    return b - a;
                }).map(function (year) {
                    return _this2._renderPostListByYear(timeList, year);
                })
            );
        }
    }, {
        key: '_renderPostListByYear',
        value: function _renderPostListByYear(timeList, time) {
            var _this3 = this;

            if (Object.keys(timeList).length === 0) return;
            var year = time;

            return _react3.default.createElement(
                'div',
                { key: year, className: 'archive-item' },
                _react3.default.createElement(
                    'h3',
                    { className: 'archive-year' },
                    year,
                    ' \u5E74 (',
                    timeList[year].length,
                    ')'
                ),
                _react3.default.createElement(
                    'ul',
                    null,
                    timeList[year].map(function (post) {
                        return _react3.default.createElement(
                            'li',
                            { key: post.title },
                            _react3.default.createElement(
                                _reactRouter.Link,
                                { to: 'post/' + post['_id'] },
                                post.title
                            ),
                            _react3.default.createElement(
                                'span',
                                { className: 'post-info' },
                                '(',
                                _react3.default.createElement(
                                    'span',
                                    { className: 'createdAt' },
                                    post.createdAt.slice(0, 10)
                                ),
                                _react3.default.createElement(
                                    'span',
                                    { className: 'tags' },
                                    '\xB7 \u6807\u7B7E:',
                                    post.tags.length !== 0 ? _this3._renderTags(post.tags) : ' '
                                ),
                                _react3.default.createElement(
                                    'span',
                                    { className: 'disqus-comment-count' },
                                    '\xB7\u6682\u65E0\u8BC4\u8BBA)'
                                )
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: '_renderTags',
        value: function _renderTags(tags) {
            return tags.map(function (tag) {
                return _react3.default.createElement(
                    _reactRouter.Link,
                    { key: tag, className: 'article-tag-link', to: 'tag/' + tag + '/' },
                    tag + '  ',
                    ' '
                );
            });
        }
    }]);

    return ArchiveList;
}(_react2.Component));

exports.default = ArchiveList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/CategoryList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = __webpack_require__("../node_modules/react/react.js");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__("../node_modules/react-transform-hmr/lib/index.js");

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__("../node_modules/react-router/es/index.js");

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CategoryList: {
        displayName: 'CategoryList'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/CategoryList.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var CategoryList = _wrapComponent('CategoryList')(function (_Component) {
    _inherits(CategoryList, _Component);

    function CategoryList() {
        _classCallCheck(this, CategoryList);

        return _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).apply(this, arguments));
    }

    _createClass(CategoryList, [{
        key: 'render',
        value: function render() {
            return this._renderCategoryList(this.props.categoryList);
        }
    }, {
        key: '_renderCategoryList',
        value: function _renderCategoryList(categoryList) {
            var _this2 = this;

            var checkActive = function checkActive(name) {
                return (0, _classnames2.default)({ 'active': _this2.props.activeCategory === name });
            };
            return _react3.default.createElement(
                'div',
                { className: 'category-list-wrap', 'aria-hidden': 'true' },
                _react3.default.createElement(
                    'h2',
                    { className: 'title' },
                    '\u5206\u7C7B'
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'category-list' },
                    categoryList.map(function (item) {
                        return _react3.default.createElement(
                            _reactRouter.Link,
                            { className: checkActive(item.name),
                                key: item['_id'],
                                to: 'category/' + item.name,
                                onClick: function onClick() {
                                    return _this2.props.handleActiveChange(item.name);
                                } },
                            item.name
                        );
                    })
                )
            );
        }
    }]);

    return CategoryList;
}(_react2.Component));

exports.default = CategoryList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/Category.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = __webpack_require__("../node_modules/react/react.js");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__("../node_modules/react-transform-hmr/lib/index.js");

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__("../node_modules/react-router/es/index.js");

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CategoryList = __webpack_require__("./components/CategoryList.jsx");

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _ArchiveList = __webpack_require__("./components/ArchiveList.jsx");

var _ArchiveList2 = _interopRequireDefault(_ArchiveList);

var _request = __webpack_require__("./utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Category: {
        displayName: 'Category'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Category.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Category = _wrapComponent('Category')(function (_Component) {
    _inherits(Category, _Component);

    function Category(props) {
        _classCallCheck(this, Category);

        var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

        _this.state = {
            categoryList: [],
            timeList: {},
            activeCategory: '前端杂谈'
        };
        _this.handleActiveChange = _this.handleActiveChange.bind(_this);
        return _this;
    }

    _createClass(Category, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var category = this.props.params.name || this.state.activeCategory;
            // 获取分类列表
            (0, _request.getCategoriesList)().then(function (res) {
                _this2.setState({
                    categoryList: res
                });
            });
            // 根据分类获取文章列表
            this._getPostList(category);
        }

        // 改变当前选中的分类

    }, {
        key: 'handleActiveChange',
        value: function handleActiveChange(category) {
            this._getPostList(category);
        }

        // 根据分类获取文章数组

    }, {
        key: '_getPostList',
        value: function _getPostList(category) {
            var _this3 = this;

            (0, _request.getPostByCategory)(category).then(function (res) {
                _this3.initTimeList(res, category);
            });
        }

        // 从获取的文章数组中，初始化时间列表对象

    }, {
        key: 'initTimeList',
        value: function initTimeList(postList, category) {
            var newTimeList = {};

            postList.length && postList.forEach(function (post) {
                var timeArr = post['createdAt'].split("-", 2);
                var year = timeArr[0];

                if (!newTimeList[year]) {
                    newTimeList[year] = [];
                }
                newTimeList[year].push(post);
            });

            this.setState({
                timeList: newTimeList,
                activeCategory: category
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react3.default.createElement(
                'section',
                { className: 'category' },
                _react3.default.createElement(_CategoryList2.default, {
                    categoryList: this.state.categoryList,
                    activeCategory: this.state.activeCategory,
                    handleActiveChange: this.handleActiveChange }),
                _react3.default.createElement(_ArchiveList2.default, {
                    timeList: this.state.timeList,
                    year: this.props.params.year })
            );
        }
    }]);

    return Category;
}(_react2.Component));

exports.default = Category;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJjaGl2ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9DYXRlZ29yeS5qc3giXSwibmFtZXMiOlsiX3JlbmRlclBvc3RMaXN0IiwicHJvcHMiLCJ0aW1lTGlzdCIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJfcmVuZGVyUG9zdExpc3RCeVllYXIiLCJ5ZWFyIiwidGltZSIsImxlbmd0aCIsInBvc3QiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsInNsaWNlIiwidGFncyIsIl9yZW5kZXJUYWdzIiwidGFnIiwiQXJjaGl2ZUxpc3QiLCJfcmVuZGVyQ2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcnlMaXN0IiwiY2hlY2tBY3RpdmUiLCJuYW1lIiwiYWN0aXZlQ2F0ZWdvcnkiLCJpdGVtIiwiaGFuZGxlQWN0aXZlQ2hhbmdlIiwiQ2F0ZWdvcnlMaXN0Iiwic3RhdGUiLCJiaW5kIiwiY2F0ZWdvcnkiLCJwYXJhbXMiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJfZ2V0UG9zdExpc3QiLCJpbml0VGltZUxpc3QiLCJwb3N0TGlzdCIsIm5ld1RpbWVMaXN0IiwiZm9yRWFjaCIsInRpbWVBcnIiLCJzcGxpdCIsInB1c2giLCJDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7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ZSI6IjAuMTA0NmUuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNsYXNzIEFyY2hpdmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmNoaXZlLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJQb3N0TGlzdCh0aGlzLnByb3BzLnRpbWVMaXN0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAgX3JlbmRlclBvc3RMaXN0KHRpbWVMaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8g5YWI5a+55a+56LGh5bGe5oCn6L+b6KGM5o6S5bqP77yM54S25ZCO6YGN5Y6G6L6T5Ye6XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRpbWVMaXN0KS5zb3J0KChhLGIpID0+IGItYSkubWFwKHllYXIgPT4gdGhpcy5fcmVuZGVyUG9zdExpc3RCeVllYXIodGltZUxpc3QsIHllYXIpIClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclBvc3RMaXN0QnlZZWFyKHRpbWVMaXN0LCB0aW1lKSB7XHJcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGltZUxpc3QpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB5ZWFyID0gdGltZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17eWVhcn0gY2xhc3NOYW1lPSdhcmNoaXZlLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFyY2hpdmUteWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt5ZWFyfSDlubQgKHt0aW1lTGlzdFt5ZWFyXS5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMaXN0W3llYXJdLm1hcChwb3N0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgcG9zdC8ke3Bvc3RbJ19pZCddfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwb3N0LWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjcmVhdGVkQXQnPntwb3N0LmNyZWF0ZWRBdC5zbGljZSgwLDEwKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RhZ3MnPsK3IOagh+etvjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudGFncy5sZW5ndGghPT0wID8gdGhpcy5fcmVuZGVyVGFncyhwb3N0LnRhZ3MpIDogJyAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcXVzLWNvbW1lbnQtY291bnRcIj7Ct+aaguaXoOivhOiuuik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgIF9yZW5kZXJUYWdzKHRhZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXt0YWd9IGNsYXNzTmFtZT1cImFydGljbGUtdGFnLWxpbmtcIiB0bz17YHRhZy8ke3RhZ30vYH0+e3RhZyArICcgICd9IDwvTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmNoaXZlTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNsYXNzIENhdGVnb3J5TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyQ2F0ZWdvcnlMaXN0KHRoaXMucHJvcHMuY2F0ZWdvcnlMaXN0KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgIF9yZW5kZXJDYXRlZ29yeUxpc3QoY2F0ZWdvcnlMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tBY3RpdmUgPSAobmFtZSkgPT4gY2xhc3NuYW1lcyh7J2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlQ2F0ZWdvcnkgPT09IG5hbWV9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpc3Qtd3JhcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+5YiG57G7PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlMaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2NoZWNrQWN0aXZlKGl0ZW0ubmFtZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1bJ19pZCddfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2BjYXRlZ29yeS8ke2l0ZW0ubmFtZX1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVBY3RpdmVDaGFuZ2UoaXRlbS5uYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yeUxpc3QuanN4JztcclxuaW1wb3J0IEFyY2hpdmVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXJjaGl2ZUxpc3QuanN4JztcclxuaW1wb3J0IHtnZXRQb3N0QnlDYXRlZ29yeSwgZ2V0Q2F0ZWdvcmllc0xpc3R9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IFtdLFxyXG4gICAgICAgICAgICB0aW1lTGlzdDoge30sXHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiAn5YmN56uv5p2C6LCIJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBY3RpdmVDaGFuZ2UgPSB0aGlzLmhhbmRsZUFjdGl2ZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMucHJvcHMucGFyYW1zLm5hbWUgfHwgdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeTsgXHJcbiAgICAgICAgIC8vIOiOt+WPluWIhuexu+WIl+ihqFxyXG4gICAgICAgIGdldENhdGVnb3JpZXNMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5qC55o2u5YiG57G76I635Y+W5paH56ug5YiX6KGoXHJcbiAgICAgICAgdGhpcy5fZ2V0UG9zdExpc3QoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaUueWPmOW9k+WJjemAieS4reeahOWIhuexu1xyXG4gICAgaGFuZGxlQWN0aXZlQ2hhbmdlKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0UG9zdExpc3QoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgICAvLyDmoLnmja7liIbnsbvojrflj5bmlofnq6DmlbDnu4RcclxuICAgICBfZ2V0UG9zdExpc3QoY2F0ZWdvcnkpIHtcclxuICAgICAgICBnZXRQb3N0QnlDYXRlZ29yeShjYXRlZ29yeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRpbWVMaXN0KHJlcyxjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvLyDku47ojrflj5bnmoTmlofnq6DmlbDnu4TkuK3vvIzliJ3lp4vljJbml7bpl7TliJfooajlr7nosaFcclxuICAgIGluaXRUaW1lTGlzdChwb3N0TGlzdCwgY2F0ZWdvcnkpIHtcclxuICAgICAgICBsZXQgbmV3VGltZUxpc3QgPSB7fTtcclxuXHJcbiAgICAgICAgcG9zdExpc3QubGVuZ3RoICYmIHBvc3RMaXN0LmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lQXJyID0gcG9zdFsnY3JlYXRlZEF0J10uc3BsaXQoXCItXCIsMik7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGltZUFyclswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFuZXdUaW1lTGlzdFt5ZWFyXSl7XHJcbiAgICAgICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1RpbWVMaXN0W3llYXJdLnB1c2gocG9zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aW1lTGlzdDogbmV3VGltZUxpc3QsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3J5TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcnlMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeT17dGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWN0aXZlQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdGl2ZUNoYW5nZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBcmNoaXZlTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICB0aW1lTGlzdD17dGhpcy5zdGF0ZS50aW1lTGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcj17dGhpcy5wcm9wcy5wYXJhbXMueWVhcn0vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQ2F0ZWdvcnkuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==