webpackJsonp([3],{

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

/***/ "./components/Pagination.jsx":
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
    Pagination: {
        displayName: 'Pagination'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/Pagination.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Pagination = _wrapComponent('Pagination')((_temp = _class = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                pageNum = _props.pageNum,
                currentPage = _props.currentPage,
                handleNext = _props.handleNext,
                handlePrev = _props.handlePrev;

            return _react3.default.createElement(
                'nav',
                { className: 'pagination' },
                currentPage > 1 && _react3.default.createElement(
                    _reactRouter.Link,
                    { to: '?page=' + (currentPage - 1), className: 'prev', onClick: handlePrev },
                    '\xAB \u4E0A\u4E00\u9875'
                ),
                currentPage < pageNum && _react3.default.createElement(
                    _reactRouter.Link,
                    { to: '?page=' + (currentPage + 1), className: 'next', onClick: handleNext },
                    '\u4E0B\u4E00\u9875 \xBB'
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'pagination-center' },
                    _react3.default.createElement(
                        _reactRouter.Link,
                        { to: '/archive' },
                        '\u535A\u5BA2\u5F52\u6863'
                    )
                )
            );
        }
    }]);

    return Pagination;
}(_react2.Component), _class.propTypes = {
    currentPage: _react2.PropTypes.number,
    pageNum: _react2.PropTypes.number,
    handleNext: _react2.PropTypes.func,
    handlePrev: _react2.PropTypes.func
}, _temp));

exports.default = Pagination;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/PostList.jsx":
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

var _Loading = __webpack_require__("./components/Loading.jsx");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PostList: {
        displayName: 'PostList'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/PostList.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var PostList = _wrapComponent('PostList')((_temp = _class = function (_Component) {
    _inherits(PostList, _Component);

    function PostList() {
        _classCallCheck(this, PostList);

        return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
    }

    _createClass(PostList, [{
        key: 'renderPostList',


        // 渲染文章列表
        value: function renderPostList(postList) {
            return postList.map(function (post) {
                var summary = post.content.slice(0, 150) + '...';

                return _react3.default.createElement(
                    'article',
                    { className: 'post-item', key: post['_id'] },
                    _react3.default.createElement(
                        'header',
                        null,
                        _react3.default.createElement(
                            'h2',
                            { className: 'post-item-title' },
                            _react3.default.createElement(
                                _reactRouter.Link,
                                { to: '/post/' + post['_id'] },
                                post.title
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'post-item-meta' },
                            _react3.default.createElement(
                                'time',
                                { className: 'post-item-time' },
                                post.createdAt
                            )
                        ),
                        _react3.default.createElement(
                            'div',
                            { className: 'post-item-info' },
                            _react3.default.createElement(
                                _reactRouter.Link,
                                { className: 'post-item-category',
                                    to: '/category/' + post.category },
                                post.category
                            )
                        )
                    ),
                    _react3.default.createElement('div', { className: 'post-item-summary',
                        dangerouslySetInnerHTML: { __html: summary } })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var postList = this.props.postList;


            if (!postList.length) {
                return _react3.default.createElement(_Loading2.default, null);
            } else {
                return _react3.default.createElement(
                    'div',
                    { className: 'post-list' },
                    this.renderPostList(postList)
                );
            }
        }
    }]);

    return PostList;
}(_react2.Component), _class.propTypes = {
    postList: _react2.PropTypes.array
}, _temp));

exports.default = PostList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/Home.jsx":
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

var _PostList = __webpack_require__("./components/PostList.jsx");

var _PostList2 = _interopRequireDefault(_PostList);

var _Pagination = __webpack_require__("./components/Pagination.jsx");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Loading = __webpack_require__("./components/Loading.jsx");

var _Loading2 = _interopRequireDefault(_Loading);

var _request = __webpack_require__("./utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Home: {
        displayName: 'Home'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Home.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Home = _wrapComponent('Home')(function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            currentPage: 1,
            pageNum: 0,
            limit: 6,
            postList: []
        };

        _this.handleNext = _this.handleNext.bind(_this);
        _this.handlePrev = _this.handlePrev.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _request.countPost)().then(function (res) {
                var pageNum = Math.ceil(res / _this2.state.limit);
                _this2._pageQuery(pageNum);
            });
        }

        // 分页，获取文章列表

    }, {
        key: '_pageQuery',
        value: function _pageQuery() {
            var _this3 = this;

            var newPageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var currentPage = arguments[1];

            // 如果不传入currentPage参数，说明是在页面加载时调用此方法，设置currentPage = url中的page参数
            currentPage = currentPage ? currentPage : parseInt(this.props.location.query.page);
            // 如果url中的page参数大于总页数，则加载第一页
            currentPage = currentPage > newPageNum ? 1 : currentPage;
            // 经过上面的处理，如果currentPage依然不存在，则默认加载第一页
            currentPage = currentPage ? currentPage : 1;

            (0, _request.getPostByPage)(newPageNum, currentPage, this.state.limit).then(function (res) {
                _this3.setState({
                    pageNum: newPageNum,
                    currentPage: currentPage,
                    postList: res
                });
            });
        }

        // 下一页

    }, {
        key: 'handleNext',
        value: function handleNext() {
            var _state = this.state,
                pageNum = _state.pageNum,
                currentPage = _state.currentPage;


            if (currentPage >= pageNum) {
                return;
            }

            currentPage++;
            this._pageQuery(pageNum, currentPage);
            this.setState({
                currentPage: currentPage
            });
        }

        // 上一页

    }, {
        key: 'handlePrev',
        value: function handlePrev() {
            var _state2 = this.state,
                pageNum = _state2.pageNum,
                currentPage = _state2.currentPage;


            if (currentPage <= 1) {
                return;
            }

            currentPage--;
            this._pageQuery(pageNum, currentPage);
            this.setState({
                currentPage: currentPage
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                pageNum = _state3.pageNum,
                currentPage = _state3.currentPage,
                postList = _state3.postList;


            if (!postList.length) {
                return _react3.default.createElement(_Loading2.default, null);
            } else {
                return _react3.default.createElement(
                    'section',
                    { className: 'home' },
                    _react3.default.createElement(_PostList2.default, { postList: postList }),
                    _react3.default.createElement(_Pagination2.default, {
                        currentPage: currentPage,
                        pageNum: pageNum,
                        handleNext: this.handleNext,
                        handlePrev: this.handlePrev })
                );
            }
        }
    }]);

    return Home;
}(_react2.Component));

exports.default = Home;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS5qc3giXSwibmFtZXMiOlsiTG9hZGluZyIsInByb3BzIiwicGFnZU51bSIsImN1cnJlbnRQYWdlIiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJmdW5jIiwiUGFnaW5hdGlvbiIsInBvc3RMaXN0IiwibWFwIiwicG9zdCIsInN1bW1hcnkiLCJjb250ZW50Iiwic2xpY2UiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsImNhdGVnb3J5IiwiX19odG1sIiwibGVuZ3RoIiwicmVuZGVyUG9zdExpc3QiLCJhcnJheSIsIlBvc3RMaXN0Iiwic3RhdGUiLCJsaW1pdCIsImJpbmQiLCJ0aGVuIiwiTWF0aCIsImNlaWwiLCJyZXMiLCJfcGFnZVF1ZXJ5IiwibmV3UGFnZU51bSIsInBhcnNlSW50IiwibG9jYXRpb24iLCJxdWVyeSIsInBhZ2UiLCJzZXRTdGF0ZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJLCtDQUFLLFdBQVUsT0FBZixHQURKO0FBRUksK0NBQUssV0FBVSxPQUFmLEdBRko7QUFHSSwrQ0FBSyxXQUFVLE9BQWYsR0FISjtBQUlJLCtDQUFLLFdBQVUsT0FBZixHQUpKO0FBS0ksK0NBQUssV0FBVSxPQUFmO0FBTEosS0FESjtBQVNILENBVkQ7O2tCQVllQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVVhO0FB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T0FBbkIsRUFBNEI7QUFDeEI7QUFDSDs7QUFFREM7QUFDQSxpQkFBSzRCLFVBQUwsQ0FBZ0I3QixPQUFoQixFQUF5QkMsV0FBekI7QUFDQSxpQkFBS2tDLFFBQUwsQ0FBYztBQUNWbEMsNkJBQWFBO0FBREgsYUFBZDtBQUdIOztBQUVEOzs7O3FDQUNhO0FBQUEsMEJBQ29CLEtBQUtxQixLQUR6QjtBQUFBLGdCQUNKdEIsT0FESSxXQUNKQSxPQURJO0FBQUEsZ0JBQ0tDLFdBREwsV0FDS0EsV0FETDs7O0FBR1QsZ0JBQUlBLGVBQWUsQ0FBbkIsRUFBc0I7QUFDbEI7QUFDSDs7QUFFREE7QUFDQSxpQkFBSzRCLFVBQUwsQ0FBZ0I3QixPQUFoQixFQUF5QkMsV0FBekI7QUFDQSxpQkFBS2tDLFFBQUwsQ0FBYztBQUNWbEMsNkJBQWFBO0FBREgsYUFBZDtBQUdIOzs7aUNBRVE7QUFBQSwwQkFDb0MsS0FBS3FCLEtBRHpDO0FBQUEsZ0JBQ0V0QixPQURGLFdBQ0VBLE9BREY7QUFBQSxnQkFDV0MsV0FEWCxXQUNXQSxXQURYO0FBQUEsZ0JBQ3dCTyxRQUR4QixXQUN3QkEsUUFEeEI7OztBQUdMLGdCQUFJLENBQUNBLFNBQVNVLE1BQWQsRUFBc0I7QUFDbEIsdUJBQU8sc0RBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFDSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSxNQUFuQjtBQUNJLHdFQUFVLFVBQVVWLFFBQXBCLEdBREo7QUFFSTtBQUNJLHFDQUFhUCxXQURqQjtBQUVJLGlDQUFTRCxPQUZiO0FBR0ksb0NBQVksS0FBS0UsVUFIckI7QUFJSSxvQ0FBWSxLQUFLQyxVQUpyQjtBQUZKLGlCQURKO0FBVUg7QUFDSjs7Ozs7O2tCQUlVaUMsSSIsImZpbGUiOiIzLjc1NDkwLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3QxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0M1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3Q0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcGFnZU51bTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBoYW5kbGVOZXh0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBoYW5kbGVQcmV2OiBQcm9wVHlwZXMuZnVuY1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3BhZ2VOdW0sIGN1cnJlbnRQYWdlLCBoYW5kbGVOZXh0LCBoYW5kbGVQcmV2fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J3BhZ2luYXRpb24nPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlID4gMSAmJiA8TGluayB0bz17YD9wYWdlPSR7Y3VycmVudFBhZ2UtMX1gfSBjbGFzc05hbWU9J3ByZXYnIG9uQ2xpY2s9e2hhbmRsZVByZXZ9PsKrIOS4iuS4gOmhtTwvTGluaz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA8IHBhZ2VOdW0gJiYgPExpbmsgdG89e2A/cGFnZT0ke2N1cnJlbnRQYWdlKzF9YH0gY2xhc3NOYW1lPSduZXh0JyBvbkNsaWNrPXtoYW5kbGVOZXh0fT7kuIvkuIDpobUgwrs8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvYXJjaGl2ZSd9PuWNmuWuouW9kuahozwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanN4JztcclxuXHJcbmNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgcG9zdExpc3Q6IFByb3BUeXBlcy5hcnJheVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4suafk+aWh+eroOWIl+ihqFxyXG4gICAgcmVuZGVyUG9zdExpc3QocG9zdExpc3QpIHtcclxuICAgICAgICByZXR1cm4gcG9zdExpc3QubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdW1tYXJ5ID0gcG9zdC5jb250ZW50LnNsaWNlKDAsMTUwKSArICcuLi4nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QtaXRlbVwiIGtleT17cG9zdFsnX2lkJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInBvc3QtaXRlbS10aW1lXCI+e3Bvc3QuY3JlYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBvc3QtaXRlbS1jYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7cG9zdC5jYXRlZ29yeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1zdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN1bW1hcnl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3Bvc3RMaXN0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghcG9zdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0TGlzdChwb3N0TGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCdcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuaW1wb3J0IHtjb3VudFBvc3QsIGdldFBvc3RCeVBhZ2V9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICAgICAgcGFnZU51bTogMCxcclxuICAgICAgICAgICAgbGltaXQ6IDYsXHJcbiAgICAgICAgICAgIHBvc3RMaXN0OiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJldiA9IHRoaXMuaGFuZGxlUHJldi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvdW50UG9zdCgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZU51bSA9IE1hdGguY2VpbChyZXMvdGhpcy5zdGF0ZS5saW1pdCk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZVF1ZXJ5KHBhZ2VOdW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIhumhte+8jOiOt+WPluaWh+eroOWIl+ihqFxyXG4gICAgX3BhZ2VRdWVyeShuZXdQYWdlTnVtPTAsIGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5LiN5Lyg5YWlY3VycmVudFBhZ2Xlj4LmlbDvvIzor7TmmI7mmK/lnKjpobXpnaLliqDovb3ml7bosIPnlKjmraTmlrnms5XvvIzorr7nva5jdXJyZW50UGFnZSA9IHVybOS4reeahHBhZ2Xlj4LmlbBcclxuICAgICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID8gY3VycmVudFBhZ2UgOiBwYXJzZUludCh0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIC8vIOWmguaenHVybOS4reeahHBhZ2Xlj4LmlbDlpKfkuo7mgLvpobXmlbDvvIzliJnliqDovb3nrKzkuIDpobVcclxuICAgICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID4gbmV3UGFnZU51bSA/IDEgOiBjdXJyZW50UGFnZTtcclxuICAgICAgICAvLyDnu4/ov4fkuIrpnaLnmoTlpITnkIbvvIzlpoLmnpxjdXJyZW50UGFnZeS+neeEtuS4jeWtmOWcqO+8jOWImem7mOiupOWKoOi9veesrOS4gOmhtVxyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPyBjdXJyZW50UGFnZSA6IDE7XHJcblxyXG4gICAgICAgIGdldFBvc3RCeVBhZ2UobmV3UGFnZU51bSwgY3VycmVudFBhZ2UsIHRoaXMuc3RhdGUubGltaXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBuZXdQYWdlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdDogcmVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuIvkuIDpobVcclxuICAgIGhhbmRsZU5leHQoKSB7XHJcbiAgICAgICAgbGV0IHtwYWdlTnVtLCBjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+PSBwYWdlTnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgdGhpcy5fcGFnZVF1ZXJ5KHBhZ2VOdW0sIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiK5LiA6aG1XHJcbiAgICBoYW5kbGVQcmV2KCkge1xyXG4gICAgICAgIGxldCB7cGFnZU51bSwgY3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VRdWVyeShwYWdlTnVtLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhZ2VOdW0sIGN1cnJlbnRQYWdlLCBwb3N0TGlzdH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcG9zdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hvbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0TGlzdCBwb3N0TGlzdD17cG9zdExpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bT17cGFnZU51bX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHQ9e3RoaXMuaGFuZGxlTmV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldj17dGhpcy5oYW5kbGVQcmV2fS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0hvbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==