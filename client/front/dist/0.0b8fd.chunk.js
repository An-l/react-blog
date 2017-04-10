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
                                '(\xA0',
                                _react3.default.createElement(
                                    'span',
                                    { className: 'createdAt' },
                                    post.createdAt.slice(0, 10)
                                ),
                                _react3.default.createElement(
                                    'span',
                                    { className: 'tags' },
                                    '\u6807\u7B7E:',
                                    post.tags.length !== 0 ? _this3._renderTags(post.tags) : ' '
                                ),
                                '\xA0)'
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
                    { key: tag, className: 'article-tag-link notebook', to: 'tag/' + tag + '/' },
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

/***/ "./components/Loading.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Loading: {
        displayName: "Loading"
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: "C:/Users/li/Desktop/test/react/blog/client/front/src/components/Loading.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Loading = _wrapComponent("Loading")(function (_Component) {
    _inherits(Loading, _Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                { className: "spinner" },
                _react3.default.createElement("div", { className: "rect1" }),
                _react3.default.createElement("div", { className: "rect2" }),
                _react3.default.createElement("div", { className: "rect3" }),
                _react3.default.createElement("div", { className: "rect4" }),
                _react3.default.createElement("div", { className: "rect5" })
            );
        }
    }]);

    return Loading;
}(_react2.Component));

exports.default = Loading;
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

var _Loading = __webpack_require__("./components/Loading.jsx");

var _Loading2 = _interopRequireDefault(_Loading);

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

            if (!this.state.categoryList.length) {

                return _react3.default.createElement(_Loading2.default, null);
            } else {
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
        }
    }]);

    return Category;
}(_react2.Component));

exports.default = Category;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./utils/request.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = request;
function request(method, url, body) {
    method = method.toUpperCase();
    url = 'http://127.0.0.1:3000/api/' + url;

    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method: method
    }).then(function (res) {
        return res.json();
    }).catch(function (err) {
        return alert('无法连接服务器.');
    });
}

var getPostList = exports.getPostList = function getPostList(limit) {
    var url = limit ? 'post?limit=' + limit + '&sort=1' : 'post?sort=1';
    return request('GET', url);
};
var getCategoriesList = exports.getCategoriesList = function getCategoriesList(limit) {
    var url = 'category'; //按时间倒序，新->旧
    url += limit ? '?limit=' + limit : '';
    return request('GET', url);
};

var getPostById = exports.getPostById = function getPostById(id) {
    return request('GET', 'post/' + id);
};
var getPostByTag = exports.getPostByTag = function getPostByTag(tag) {
    var url = 'post?conditions={"tags":"' + tag + '"}';
    return request('GET', url);
};
var getPostByCategory = exports.getPostByCategory = function getPostByCategory(category) {
    var url = 'post?conditions={"category":"' + category + '"}';
    return request('GET', url);
};
var getPostByTitle = exports.getPostByTitle = function getPostByTitle(title) {
    var url = 'post?like={"title":"' + title + '"}';
    return request('GET', url);
};

var getTag = exports.getTag = function getTag() {
    return request('GET', 'tag');
};
var getTagNum = exports.getTagNum = function getTagNum(tag) {
    var url = 'post?conditions={"tags":"' + tag + '"}&count=1';
    return request('GET', url);
};

var countPost = exports.countPost = function countPost() {
    var url = 'post?count=1';
    return request('GET', url);
};
var getPostByPage = exports.getPostByPage = function getPostByPage() {
    var pageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var currentPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    var start = void 0,
        // 从第几篇文章开始
    url = void 0;

    start = limit * (currentPage - 1);

    if (currentPage <= pageNum) {
        url = 'post?limit=' + limit + '&skip=' + start + '&sort=1';
        return request('GET', url);
    }
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJjaGl2ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0NhdGVnb3J5LmpzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIl9yZW5kZXJQb3N0TGlzdCIsInByb3BzIiwidGltZUxpc3QiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImEiLCJiIiwibWFwIiwiX3JlbmRlclBvc3RMaXN0QnlZZWFyIiwieWVhciIsInRpbWUiLCJsZW5ndGgiLCJwb3N0IiwidGl0bGUiLCJjcmVhdGVkQXQiLCJzbGljZSIsInRhZ3MiLCJfcmVuZGVyVGFncyIsInRhZyIsIkFyY2hpdmVMaXN0IiwiX3JlbmRlckNhdGVnb3J5TGlzdCIsImNhdGVnb3J5TGlzdCIsImNoZWNrQWN0aXZlIiwibmFtZSIsImFjdGl2ZUNhdGVnb3J5IiwiaXRlbSIsImhhbmRsZUFjdGl2ZUNoYW5nZSIsIkNhdGVnb3J5TGlzdCIsIkxvYWRpbmciLCJzdGF0ZSIsImJpbmQiLCJjYXRlZ29yeSIsInBhcmFtcyIsInRoZW4iLCJzZXRTdGF0ZSIsInJlcyIsIl9nZXRQb3N0TGlzdCIsImluaXRUaW1lTGlzdCIsInBvc3RMaXN0IiwibmV3VGltZUxpc3QiLCJmb3JFYWNoIiwidGltZUFyciIsInNwbGl0IiwicHVzaCIsIkNhdGVnb3J5IiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJ0b1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImpzb24iLCJjYXRjaCIsImFsZXJ0IiwiZ2V0UG9zdExpc3QiLCJsaW1pdCIsImdldENhdGVnb3JpZXNMaXN0IiwiZ2V0UG9zdEJ5SWQiLCJpZCIsImdldFBvc3RCeVRhZyIsImdldFBvc3RCeUNhdGVnb3J5IiwiZ2V0UG9zdEJ5VGl0bGUiLCJnZXRUYWciLCJnZXRUYWdOdW0iLCJjb3VudFBvc3QiLCJnZXRQb3N0QnlQYWdlIiwicGFnZU51bSIsImN1cnJlbnRQYWdlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSWE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0sscUJBQUtBLGVBQUwsQ0FBcUIsS0FBS0MsS0FBTCxDQUFXQyxRQUFoQztBQURMLGFBREo7QUFLSDs7O3dDQUVnQkEsUSxFQUFVO0FBQUE7O0FBQ3ZCO0FBQ0k7QUFDQUMsdUJBQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsSUFBdEIsQ0FBMkIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsMkJBQVNBLElBQUVELENBQVg7QUFBQSxpQkFBM0IsRUFBeUNFLEdBQXpDLENBQTZDO0FBQUEsMkJBQVEsT0FBS0MscUJBQUwsQ0FBMkJQLFFBQTNCLEVBQXFDUSxJQUFyQyxDQUFSO0FBQUEsaUJBQTdDO0FBRko7QUFJSDs7OzhDQUVxQlIsUSxFQUFVUyxJLEVBQU07QUFBQTs7QUFDbEMsZ0JBQUdSLE9BQU9DLElBQVAsQ0FBWUYs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Y0FBaUIsQ0FBQ25ELEtBQUQsRUFBVztBQUNyQyxRQUFJa0MsK0JBQTZCbEMsS0FBN0IsT0FBSjtBQUNBLFdBQU9nQyxRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0gsQ0FITTs7QUFLQSxJQUFNa0IsMEJBQVMsU0FBVEEsTUFBUztBQUFBLFdBQU1wQixRQUFRLEtBQVIsRUFBZSxLQUFmLENBQU47QUFBQSxDQUFmO0FBQ0EsSUFBTXFCLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ2hELEdBQUQsRUFBUztBQUM5QixRQUFJNkIsb0NBQWtDN0IsR0FBbEMsZUFBSjtBQUNBLFdBQU8yQixRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0gsQ0FITTs7QUFLQSxJQUFNb0IsZ0NBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzNCLFFBQUlwQixNQUFNLGNBQVY7QUFDQSxXQUFPRixRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0gsQ0FITTtBQUlBLElBQU1xQix3Q0FBZ0IsU0FBaEJBLGFBQWdCLEdBQXlDO0FBQUEsUUFBdkNDLE9BQXVDLHVFQUEvQixDQUErQjtBQUFBLFFBQTVCQyxXQUE0Qix1RUFBaEIsQ0FBZ0I7QUFBQSxRQUFiWixLQUFhLHVFQUFQLENBQU87O0FBQ2xFLFFBQUlhLGNBQUo7QUFBQSxRQUFXO0FBQ1B4QixnQkFESjs7QUFHSXdCLFlBQVFiLFNBQVNZLGNBQWMsQ0FBdkIsQ0FBUjs7QUFFQSxRQUFJQSxlQUFlRCxPQUFuQixFQUE0QjtBQUN4QnRCLDhCQUFvQlcsS0FBcEIsY0FBa0NhLEtBQWxDO0FBQ0EsZUFBTzFCLFFBQVEsS0FBUixFQUFlRSxHQUFmLENBQVA7QUFDSDtBQUNSLENBVk0sQyIsImZpbGUiOiIwLjBiOGZkLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jbGFzcyBBcmNoaXZlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyUG9zdExpc3QodGhpcy5wcm9wcy50aW1lTGlzdCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgIF9yZW5kZXJQb3N0TGlzdCh0aW1lTGlzdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIOWFiOWvueWvueixoeWxnuaAp+i/m+ihjOaOkuW6j++8jOeEtuWQjumBjeWOhui+k+WHulxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aW1lTGlzdCkuc29ydCgoYSxiKSA9PiBiLWEpLm1hcCh5ZWFyID0+IHRoaXMuX3JlbmRlclBvc3RMaXN0QnlZZWFyKHRpbWVMaXN0LCB5ZWFyKSApXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJQb3N0TGlzdEJ5WWVhcih0aW1lTGlzdCwgdGltZSkge1xyXG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRpbWVMaXN0KS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBsZXQgeWVhciA9IHRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3llYXJ9IGNsYXNzTmFtZT0nYXJjaGl2ZS1pdGVtJz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcmNoaXZlLXllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eWVhcn0g5bm0ICh7dGltZUxpc3RbeWVhcl0ubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGlzdFt5ZWFyXS5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YHBvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncG9zdC1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3JlYXRlZEF0Jz57cG9zdC5jcmVhdGVkQXQuc2xpY2UoMCwxMCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0YWdzJz7moIfnrb46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnRhZ3MubGVuZ3RoIT09MCA/IHRoaXMuX3JlbmRlclRhZ3MocG9zdC50YWdzKSA6ICcgJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgX3JlbmRlclRhZ3ModGFncykge1xyXG4gICAgICAgIHJldHVybiB0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e3RhZ30gY2xhc3NOYW1lPVwiYXJ0aWNsZS10YWctbGluayBub3RlYm9va1wiIHRvPXtgdGFnLyR7dGFnfS9gfT57dGFnICsgJyAgJ30gPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyY2hpdmVMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXJjaGl2ZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnlMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJDYXRlZ29yeUxpc3QodGhpcy5wcm9wcy5jYXRlZ29yeUxpc3QpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAgX3JlbmRlckNhdGVnb3J5TGlzdChjYXRlZ29yeUxpc3QpIHtcclxuICAgICAgICBjb25zdCBjaGVja0FjdGl2ZSA9IChuYW1lKSA9PiBjbGFzc25hbWVzKHsnYWN0aXZlJzogdGhpcy5wcm9wcy5hY3RpdmVDYXRlZ29yeSA9PT0gbmFtZX0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlzdC13cmFwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj7liIbnsbs8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y2hlY2tBY3RpdmUoaXRlbS5uYW1lKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbVsnX2lkJ119IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YGNhdGVnb3J5LyR7aXRlbS5uYW1lfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUFjdGl2ZUNoYW5nZShpdGVtLm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DYXRlZ29yeUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0M1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0NFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0NVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCc7XHJcbmltcG9ydCBBcmNoaXZlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlDYXRlZ29yeSwgZ2V0Q2F0ZWdvcmllc0xpc3R9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IFtdLFxyXG4gICAgICAgICAgICB0aW1lTGlzdDoge30sXHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiAn5YmN56uv5p2C6LCIJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBY3RpdmVDaGFuZ2UgPSB0aGlzLmhhbmRsZUFjdGl2ZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMucHJvcHMucGFyYW1zLm5hbWUgfHwgdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeTsgXHJcbiAgICAgICAgIC8vIOiOt+WPluWIhuexu+WIl+ihqFxyXG4gICAgICAgIGdldENhdGVnb3JpZXNMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5qC55o2u5YiG57G76I635Y+W5paH56ug5YiX6KGoXHJcbiAgICAgICAgdGhpcy5fZ2V0UG9zdExpc3QoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaUueWPmOW9k+WJjemAieS4reeahOWIhuexu1xyXG4gICAgaGFuZGxlQWN0aXZlQ2hhbmdlKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0UG9zdExpc3QoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgICAvLyDmoLnmja7liIbnsbvojrflj5bmlofnq6DmlbDnu4RcclxuICAgICBfZ2V0UG9zdExpc3QoY2F0ZWdvcnkpIHtcclxuICAgICAgICBnZXRQb3N0QnlDYXRlZ29yeShjYXRlZ29yeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFRpbWVMaXN0KHJlcyxjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICAvLyDku47ojrflj5bnmoTmlofnq6DmlbDnu4TkuK3vvIzliJ3lp4vljJbml7bpl7TliJfooajlr7nosaFcclxuICAgIGluaXRUaW1lTGlzdChwb3N0TGlzdCwgY2F0ZWdvcnkpIHtcclxuICAgICAgICBsZXQgbmV3VGltZUxpc3QgPSB7fTtcclxuXHJcbiAgICAgICAgcG9zdExpc3QubGVuZ3RoICYmIHBvc3RMaXN0LmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lQXJyID0gcG9zdFsnY3JlYXRlZEF0J10uc3BsaXQoXCItXCIsMik7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGltZUFyclswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFuZXdUaW1lTGlzdFt5ZWFyXSl7XHJcbiAgICAgICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1RpbWVMaXN0W3llYXJdLnB1c2gocG9zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aW1lTGlzdDogbmV3VGltZUxpc3QsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY2F0ZWdvcnlMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5TGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlMaXN0PXt0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5PXt0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWN0aXZlQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdGl2ZUNoYW5nZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QXJjaGl2ZUxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMaXN0PXt0aGlzLnN0YXRlLnRpbWVMaXN0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17dGhpcy5wcm9wcy5wYXJhbXMueWVhcn0vPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQ2F0ZWdvcnkuanN4IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBib2R5KSB7XHJcbiAgICBtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcclxuICAgIHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvYXBpLycgKyB1cmw7XHJcblxyXG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAvLyBmZXRjaOeahEdFVOS4jeWFgeiuuOaciWJvZHnvvIzlj4LmlbDlj6rog73mlL7lnKh1cmzkuK1cclxuICAgICAgICBib2R5ID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBib2R5ID0gYm9keSAmJiBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGFsZXJ0KCfml6Dms5Xov57mjqXmnI3liqHlmaguJykpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdExpc3QgPSAobGltaXQpID0+IHtcclxuICAgIGxldCB1cmwgPSBsaW1pdCA/IGBwb3N0P2xpbWl0PSR7bGltaXR9JnNvcnQ9MWAgOiAncG9zdD9zb3J0PTEnO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybClcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXNMaXN0ID0gKGxpbWl0KSA9PiB7XHJcbiAgICBsZXQgdXJsID0gJ2NhdGVnb3J5JzsgLy/mjInml7bpl7TlgJLluo/vvIzmlrAtPuaXp1xyXG4gICAgdXJsICs9IGxpbWl0ID8gYD9saW1pdD0ke2xpbWl0fWAgOiAnJztcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5SWQgPSAoaWQpID0+IHJlcXVlc3QoJ0dFVCcsICdwb3N0LycgKyBpZCk7XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlUYWcgPSAodGFnKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/Y29uZGl0aW9ucz17XCJ0YWdzXCI6XCIke3RhZ31cIn1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1wiY2F0ZWdvcnlcIjpcIiR7Y2F0ZWdvcnl9XCJ9YDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5VGl0bGUgPSAodGl0bGUpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9saWtlPXtcInRpdGxlXCI6XCIke3RpdGxlfVwifWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWcgPSAoKSA9PiByZXF1ZXN0KCdHRVQnLCAndGFnJyk7XHJcbmV4cG9ydCBjb25zdCBnZXRUYWdOdW0gPSAodGFnKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/Y29uZGl0aW9ucz17XCJ0YWdzXCI6XCIke3RhZ31cIn0mY291bnQ9MWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudFBvc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gJ3Bvc3Q/Y291bnQ9MSc7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5UGFnZSA9ICggcGFnZU51bT0wLCBjdXJyZW50UGFnZT0xLCBsaW1pdD0yICkgPT4ge1xyXG4gICAgbGV0IHN0YXJ0LCAvLyDku47nrKzlh6Dnr4fmlofnq6DlvIDlp4tcclxuICAgICAgICB1cmw7IFxyXG5cclxuICAgICAgICBzdGFydCA9IGxpbWl0ICogKGN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IHBhZ2VOdW0pIHtcclxuICAgICAgICAgICAgdXJsID0gYHBvc3Q/bGltaXQ9JHtsaW1pdH0mc2tpcD0ke3N0YXJ0fSZzb3J0PTFgO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxuICAgICAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcmVxdWVzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=