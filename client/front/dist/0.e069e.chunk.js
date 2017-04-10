webpackJsonp([0],{

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

var _class, _temp;

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

var ArchiveList = _wrapComponent('ArchiveList')((_temp = _class = function (_Component) {
    _inherits(ArchiveList, _Component);

    function ArchiveList(props) {
        _classCallCheck(this, ArchiveList);

        var _this = _possibleConstructorReturn(this, (ArchiveList.__proto__ || Object.getPrototypeOf(ArchiveList)).call(this, props));

        _this.state = {
            timeList: {}
        };
        return _this;
    }

    _createClass(ArchiveList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._initTimeList(this.props.postList);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this._initTimeList(nextProps.postList);
        }

        // 从获取的文章数组中，初始化时间列表对象

    }, {
        key: '_initTimeList',
        value: function _initTimeList(postList) {
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
                timeList: newTimeList
            });
        }

        // 渲染文章列表

    }, {
        key: 'renderPostList',
        value: function renderPostList(timeList) {
            var _this2 = this;

            return (
                // 先对对象属性进行排序，然后遍历输出
                Object.keys(timeList).sort(function (a, b) {
                    return b - a;
                }).map(function (year) {
                    return _this2.renderPostListByYear(timeList, year);
                })
            );
        }

        // 根据年份渲染文章列表

    }, {
        key: 'renderPostListByYear',
        value: function renderPostListByYear(timeList, time) {
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
                                    post.tags.length !== 0 ? _this3.renderTags(post.tags) : ' '
                                ),
                                '\xA0)'
                            )
                        );
                    })
                )
            );
        }

        // 渲染标签列表

    }, {
        key: 'renderTags',
        value: function renderTags(tags) {
            return tags.map(function (tag) {
                return _react3.default.createElement(
                    _reactRouter.Link,
                    { key: tag, className: 'article-tag-link notebook', to: 'tag/' + tag + '/' },
                    tag + '  ',
                    ' '
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: 'archive-list' },
                this.renderPostList(this.state.timeList)
            );
        }
    }]);

    return ArchiveList;
}(_react2.Component), _class.propTypes = {
    postList: _react2.PropTypes.array
}, _temp));

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

var _class, _temp;

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

var CategoryList = _wrapComponent('CategoryList')((_temp = _class = function (_Component) {
    _inherits(CategoryList, _Component);

    function CategoryList() {
        _classCallCheck(this, CategoryList);

        return _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).apply(this, arguments));
    }

    _createClass(CategoryList, [{
        key: 'renderCategoryList',


        // 渲染分类列表
        value: function renderCategoryList(categoryList) {
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
                                to: '/category/' + item.name,
                                onClick: function onClick() {
                                    return _this2.props.handleActiveChange(item.name);
                                } },
                            item.name
                        );
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderCategoryList(this.props.categoryList);
        }
    }]);

    return CategoryList;
}(_react2.Component), _class.propTypes = {
    categoryList: _react2.PropTypes.array,
    activeCategory: _react2.PropTypes.string,
    handleActiveChange: _react2.PropTypes.func
}, _temp));

exports.default = CategoryList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/Loading.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("../node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
    return _react2.default.createElement(
        "div",
        { className: "spinner" },
        _react2.default.createElement("div", { className: "rect1" }),
        _react2.default.createElement("div", { className: "rect2" }),
        _react2.default.createElement("div", { className: "rect3" }),
        _react2.default.createElement("div", { className: "rect4" }),
        _react2.default.createElement("div", { className: "rect5" })
    );
};

exports.default = Loading;

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
            postList: [],
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

            Promise.all([(0, _request.getCategoriesList)(), (0, _request.getPostByCategory)(category)]).then(function (values) {
                _this2.setState({
                    categoryList: values[0],
                    postList: values[1],
                    activeCategory: category
                });
            });
        }

        //  // 从获取的文章数组中，初始化时间列表对象
        // _initTimeList(postList, category) {
        //     let newTimeList = {};

        //     postList.length && postList.forEach(post => {
        //         let timeArr = post['createdAt'].split("-",2);
        //         let year = timeArr[0];

        //         if(!newTimeList[year]){
        //             newTimeList[year] = [];
        //         }
        //         newTimeList[year].push(post);
        //     });

        //     this.setState({
        //         timeList: newTimeList,
        //         activeCategory: category
        //     });
        // }

        // 改变当前选中的分类

    }, {
        key: 'handleActiveChange',
        value: function handleActiveChange(category) {
            var _this3 = this;

            (0, _request.getPostByCategory)(category).then(function (res) {
                _this3.setState({
                    postList: res,
                    activeCategory: category
                });
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
                    _react3.default.createElement(_ArchiveList2.default, { postList: this.state.postList })
                );
            }
        }
    }]);

    return Category;
}(_react2.Component));

exports.default = Category;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3J5TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9DYXRlZ29yeS5qc3giXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInRpbWVMaXN0IiwiX2luaXRUaW1lTGlzdCIsInBvc3RMaXN0IiwibmV4dFByb3BzIiwibmV3VGltZUxpc3QiLCJsZW5ndGgiLCJmb3JFYWNoIiwidGltZUFyciIsInBvc3QiLCJzcGxpdCIsInllYXIiLCJwdXNoIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImEiLCJiIiwibWFwIiwicmVuZGVyUG9zdExpc3RCeVllYXIiLCJ0aW1lIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJzbGljZSIsInRhZ3MiLCJyZW5kZXJUYWdzIiwidGFnIiwicmVuZGVyUG9zdExpc3QiLCJwcm9wVHlwZXMiLCJhcnJheSIsIkFyY2hpdmVMaXN0IiwiY2F0ZWdvcnlMaXN0IiwiY2hlY2tBY3RpdmUiLCJuYW1lIiwiYWN0aXZlQ2F0ZWdvcnkiLCJpdGVtIiwiaGFuZGxlQWN0aXZlQ2hhbmdlIiwicmVuZGVyQ2F0ZWdvcnlMaXN0Iiwic3RyaW5nIiwiZnVuYyIsIkNhdGVnb3J5TGlzdCIsIkxvYWRpbmciLCJiaW5kIiwiY2F0ZWdvcnkiLCJwYXJhbXMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsInJlcyIsIkNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNSSx5QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVTtBQURELFNBQWI7QUFIZTtB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7MkNBQ21CQSxRLEVBQVU7QUFBQTs7QUFDekIsNENBQWtCQSxRQUFsQixFQUNLSSxJQURMLENBQ1UsZUFBTztBQUNULHVCQUFLbkMsUUFBTCxDQUFjO0FBQ1ZWLDhCQUFVK0MsR0FEQTtBQUVWZixvQ0FBZ0JTO0FBRk4saUJBQWQ7QUFJSCxhQU5MO0FBT0g7OztpQ0FHUTtBQUNMLGdCQUFJLENBQUMsS0FBSzVDLEtBQUwsQ0FBV2dDLFlBQVgsQ0FBd0IxQixNQUE3QixFQUFxQzs7QUFFakMsdUJBQU8sc0RBQVA7QUFDSCxhQUhELE1BR087QUFDSCx1QkFDSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSxVQUFuQjtBQUNJO0FBQ0ksc0NBQWMsS0FBS04sS0FBTCxDQUFXZ0MsWUFEN0I7QUFFSSx3Q0FBZ0IsS0FBS2hDLEtBQUwsQ0FBV21DLGNBRi9CO0FBR0ksNENBQW9CLEtBQUtFLGtCQUg3QixHQURKO0FBTUksMkVBQWEsVUFBVSxLQUFLckMsS0FBTCxDQUFXRyxRQUFsQztBQU5KLGlCQURKO0FBVUg7QUFDSjs7Ozs7O2tCQUdVZ0QsUSIsImZpbGUiOiIwLmUwNjllLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNsYXNzIEFyY2hpdmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgcG9zdExpc3Q6IFByb3BUeXBlcy5hcnJheVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpbWVMaXN0OiB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdFRpbWVMaXN0KHRoaXMucHJvcHMucG9zdExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdFRpbWVMaXN0KG5leHRQcm9wcy5wb3N0TGlzdCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgICAvLyDku47ojrflj5bnmoTmlofnq6DmlbDnu4TkuK3vvIzliJ3lp4vljJbml7bpl7TliJfooajlr7nosaFcclxuICAgIF9pbml0VGltZUxpc3QocG9zdExpc3QpIHtcclxuICAgICAgICBsZXQgbmV3VGltZUxpc3QgPSB7fTtcclxuXHJcbiAgICAgICAgcG9zdExpc3QubGVuZ3RoICYmIHBvc3RMaXN0LmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lQXJyID0gcG9zdFsnY3JlYXRlZEF0J10uc3BsaXQoXCItXCIsMik7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGltZUFyclswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFuZXdUaW1lTGlzdFt5ZWFyXSl7XHJcbiAgICAgICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1RpbWVMaXN0W3llYXJdLnB1c2gocG9zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aW1lTGlzdDogbmV3VGltZUxpc3RcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgXHJcbiAgICAvLyDmuLLmn5Pmlofnq6DliJfooahcclxuICAgIHJlbmRlclBvc3RMaXN0KHRpbWVMaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8g5YWI5a+55a+56LGh5bGe5oCn6L+b6KGM5o6S5bqP77yM54S25ZCO6YGN5Y6G6L6T5Ye6XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRpbWVMaXN0KS5zb3J0KChhLGIpID0+IGItYSkubWFwKHllYXIgPT4gdGhpcy5yZW5kZXJQb3N0TGlzdEJ5WWVhcih0aW1lTGlzdCwgeWVhcikgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja7lubTku73muLLmn5Pmlofnq6DliJfooahcclxuICAgIHJlbmRlclBvc3RMaXN0QnlZZWFyKHRpbWVMaXN0LCB0aW1lKSB7XHJcbiAgICAgICAgaWYoT2JqZWN0LmtleXModGltZUxpc3QpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB5ZWFyID0gdGltZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17eWVhcn0gY2xhc3NOYW1lPSdhcmNoaXZlLWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFyY2hpdmUteWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt5ZWFyfSDlubQgKHt0aW1lTGlzdFt5ZWFyXS5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMaXN0W3llYXJdLm1hcChwb3N0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgcG9zdC8ke3Bvc3RbJ19pZCddfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwb3N0LWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjcmVhdGVkQXQnPntwb3N0LmNyZWF0ZWRBdC5zbGljZSgwLDEwKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RhZ3MnPuagh+etvjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudGFncy5sZW5ndGghPT0wID8gdGhpcy5yZW5kZXJUYWdzKHBvc3QudGFncykgOiAnICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLLmn5PmoIfnrb7liJfooahcclxuICAgIHJlbmRlclRhZ3ModGFncykge1xyXG4gICAgICAgIHJldHVybiB0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e3RhZ30gY2xhc3NOYW1lPVwiYXJ0aWNsZS10YWctbGluayBub3RlYm9va1wiIHRvPXtgdGFnLyR7dGFnfS9gfT57dGFnICsgJyAgJ30gPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJjaGl2ZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0TGlzdCh0aGlzLnN0YXRlLnRpbWVMaXN0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZUxpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcmNoaXZlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNsYXNzIENhdGVnb3J5TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNhdGVnb3J5TGlzdDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGFjdGl2ZUNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGhhbmRsZUFjdGl2ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5riy5p+T5YiG57G75YiX6KGoXHJcbiAgICByZW5kZXJDYXRlZ29yeUxpc3QoY2F0ZWdvcnlMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tBY3RpdmUgPSAobmFtZSkgPT4gY2xhc3NuYW1lcyh7J2FjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlQ2F0ZWdvcnkgPT09IG5hbWV9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpc3Qtd3JhcFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+5YiG57G7PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlMaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2NoZWNrQWN0aXZlKGl0ZW0ubmFtZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1bJ19pZCddfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtpdGVtLm5hbWV9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQWN0aXZlQ2hhbmdlKGl0ZW0ubmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhdGVnb3J5TGlzdCh0aGlzLnByb3BzLmNhdGVnb3J5TGlzdClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3QyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0NFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3Q1XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlMaXN0LmpzeCc7XHJcbmltcG9ydCBBcmNoaXZlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlDYXRlZ29yeSwgZ2V0Q2F0ZWdvcmllc0xpc3R9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG4gXHJcbmNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0OiBbXSxcclxuICAgICAgICAgICAgcG9zdExpc3Q6IFtdLFxyXG4gICAgICAgICAgICBhY3RpdmVDYXRlZ29yeTogJ+WJjeerr+adguiwiCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWN0aXZlQ2hhbmdlID0gdGhpcy5oYW5kbGVBY3RpdmVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLnByb3BzLnBhcmFtcy5uYW1lIHx8IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnk7IFxyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbZ2V0Q2F0ZWdvcmllc0xpc3QoKSwgZ2V0UG9zdEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpXSlcclxuICAgICAgICAgICAgLnRoZW4odmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TGlzdDogdmFsdWVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RMaXN0OiB2YWx1ZXNbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gIC8vIOS7juiOt+WPlueahOaWh+eroOaVsOe7hOS4re+8jOWIneWni+WMluaXtumXtOWIl+ihqOWvueixoVxyXG4gICAgLy8gX2luaXRUaW1lTGlzdChwb3N0TGlzdCwgY2F0ZWdvcnkpIHtcclxuICAgIC8vICAgICBsZXQgbmV3VGltZUxpc3QgPSB7fTtcclxuXHJcbiAgICAvLyAgICAgcG9zdExpc3QubGVuZ3RoICYmIHBvc3RMaXN0LmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCB0aW1lQXJyID0gcG9zdFsnY3JlYXRlZEF0J10uc3BsaXQoXCItXCIsMik7XHJcbiAgICAvLyAgICAgICAgIGxldCB5ZWFyID0gdGltZUFyclswXTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmKCFuZXdUaW1lTGlzdFt5ZWFyXSl7XHJcbiAgICAvLyAgICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXSA9IFtdO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIG5ld1RpbWVMaXN0W3llYXJdLnB1c2gocG9zdCk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICAgICAgICB0aW1lTGlzdDogbmV3VGltZUxpc3QsXHJcbiAgICAvLyAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIOaUueWPmOW9k+WJjemAieS4reeahOWIhuexu1xyXG4gICAgaGFuZGxlQWN0aXZlQ2hhbmdlKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgZ2V0UG9zdEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdDogcmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TGlzdD17dGhpcy5zdGF0ZS5jYXRlZ29yeUxpc3R9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeT17dGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFjdGl2ZUNoYW5nZT17dGhpcy5oYW5kbGVBY3RpdmVDaGFuZ2V9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFyY2hpdmVMaXN0IHBvc3RMaXN0PXt0aGlzLnN0YXRlLnBvc3RMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQ2F0ZWdvcnkuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==