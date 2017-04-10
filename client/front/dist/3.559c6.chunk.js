webpackJsonp([3],{

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

var Pagination = _wrapComponent('Pagination')(function (_Component) {
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
                next = _props.next,
                prev = _props.prev;

            return _react3.default.createElement(
                'nav',
                { className: 'pagination' },
                currentPage > 1 && _react3.default.createElement(
                    _reactRouter.Link,
                    { to: '?page=' + (currentPage - 1), className: 'prev', onClick: prev },
                    '\xAB \u4E0A\u4E00\u9875'
                ),
                currentPage < pageNum && _react3.default.createElement(
                    _reactRouter.Link,
                    { to: '?page=' + (currentPage + 1), className: 'next', onClick: next },
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
}(_react2.Component));

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

var PostList = _wrapComponent('PostList')(function (_Component) {
    _inherits(PostList, _Component);

    function PostList() {
        _classCallCheck(this, PostList);

        return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
    }

    _createClass(PostList, [{
        key: 'render',
        value: function render() {
            var postList = this.props.postList;


            if (!postList.length) {
                return _react3.default.createElement(_Loading2.default, null);
            } else {
                return _react3.default.createElement(
                    'div',
                    { className: 'post-list' },
                    this._renderPostList(postList)
                );
            }
        }
    }, {
        key: '_renderPostList',
        value: function _renderPostList(postList) {
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
    }]);

    return PostList;
}(_react2.Component));

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
                _this2.pageQuery(pageNum);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                pageNum = _state.pageNum,
                currentPage = _state.currentPage,
                postList = _state.postList;


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
                        next: this.handleNext,
                        prev: this.handlePrev })
                );
            }
        }
    }, {
        key: 'pageQuery',
        value: function pageQuery() {
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
    }, {
        key: 'handleNext',
        value: function handleNext() {
            var _state2 = this.state,
                pageNum = _state2.pageNum,
                currentPage = _state2.currentPage;


            if (currentPage >= pageNum) {
                return;
            }

            currentPage++;
            this.pageQuery(pageNum, currentPage);
            this.setState({
                currentPage: currentPage
            });
        }
    }, {
        key: 'handlePrev',
        value: function handlePrev() {
            var _state3 = this.state,
                pageNum = _state3.pageNum,
                currentPage = _state3.currentPage;


            if (currentPage <= 1) {
                return;
            }

            currentPage--;
            this.pageQuery(pageNum, currentPage);
            this.setState({
                currentPage: currentPage
            });
        }
    }]);

    return Home;
}(_react2.Component));

exports.default = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcz85ZDUwKiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwicHJvcHMiLCJwYWdlTnVtIiwiY3VycmVudFBhZ2UiLCJuZXh0IiwicHJldiIsIlBhZ2luYXRpb24iLCJwb3N0TGlzdCIsImxlbmd0aCIsIl9yZW5kZXJQb3N0TGlzdCIsIm1hcCIsInBvc3QiLCJzdW1tYXJ5IiwiY29udGVudCIsInNsaWNlIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJjYXRlZ29yeSIsIl9faHRtbCIsIlBvc3RMaXN0Iiwic3RhdGUiLCJsaW1pdCIsImhhbmRsZU5leHQiLCJiaW5kIiwiaGFuZGxlUHJldiIsInRoZW4iLCJNYXRoIiwiY2VpbCIsInJlcyIsInBhZ2VRdWVyeSIsIm5ld1BhZ2VOdW0iLCJwYXJzZUludCIsImxvY2F0aW9uIiwicXVlcnkiLCJwYWdlIiwic2V0U3RhdGUiLCJIb21lIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJ0b1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImpzb24iLCJjYXRjaCIsImFsZXJ0IiwiZ2V0UG9zdExpc3QiLCJnZXRDYXRlZ29yaWVzTGlzdCIsImdldFBvc3RCeUlkIiwiaWQiLCJnZXRQb3N0QnlUYWciLCJ0YWciLCJnZXRQb3N0QnlDYXRlZ29yeSIsImdldFBvc3RCeVRpdGxlIiwiZ2V0VGFnIiwiZ2V0VGFnTnVtIiwiY291bnRQb3N0IiwiZ2V0UG9zdEJ5UGFnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LCJmaWxlIjoiMy41NTljNi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvYWRpbmcuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3BhZ2VOdW0sIGN1cnJlbnRQYWdlLCBuZXh0LCBwcmV2fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J3BhZ2luYXRpb24nPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlID4gMSAmJiA8TGluayB0bz17YD9wYWdlPSR7Y3VycmVudFBhZ2UtMX1gfSBjbGFzc05hbWU9J3ByZXYnIG9uQ2xpY2s9e3ByZXZ9PsKrIOS4iuS4gOmhtTwvTGluaz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA8IHBhZ2VOdW0gJiYgPExpbmsgdG89e2A/cGFnZT0ke2N1cnJlbnRQYWdlKzF9YH0gY2xhc3NOYW1lPSduZXh0JyBvbkNsaWNrPXtuZXh0fT7kuIvkuIDpobUgwrs8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdpbmF0aW9uLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eycvYXJjaGl2ZSd9PuWNmuWuouW9kuahozwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCc7XHJcblxyXG5jbGFzcyBQb3N0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwb3N0TGlzdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIXBvc3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclBvc3RMaXN0KHBvc3RMaXN0KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXJQb3N0TGlzdChwb3N0TGlzdCkge1xyXG4gICAgICAgIHJldHVybiBwb3N0TGlzdC5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN1bW1hcnkgPSBwb3N0LmNvbnRlbnQuc2xpY2UoMCwxNTApICsgJy4uLic7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdC1pdGVtXCIga2V5PXtwb3N0WydfaWQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3QtaXRlbS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvcG9zdC8ke3Bvc3RbJ19pZCddfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwicG9zdC1pdGVtLXRpbWVcIj57cG9zdC5jcmVhdGVkQXR9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicG9zdC1pdGVtLWNhdGVnb3J5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvY2F0ZWdvcnkvJHtwb3N0LmNhdGVnb3J5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLXN1bW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3VtbWFyeX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QuanN4J1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4JztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCc7XHJcblxyXG5pbXBvcnQge2NvdW50UG9zdCwgZ2V0UG9zdEJ5UGFnZX0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgICAgICBwYWdlTnVtOiAwLFxyXG4gICAgICAgICAgICBsaW1pdDogNixcclxuICAgICAgICAgICAgcG9zdExpc3Q6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQcmV2ID0gdGhpcy5oYW5kbGVQcmV2LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY291bnRQb3N0KClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWdlTnVtID0gTWF0aC5jZWlsKHJlcy90aGlzLnN0YXRlLmxpbWl0KTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VRdWVyeShwYWdlTnVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlTnVtLCBjdXJyZW50UGFnZSwgcG9zdExpc3R9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXBvc3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdob21lJz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdExpc3QgcG9zdExpc3Q9e3Bvc3RMaXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW09e3BhZ2VOdW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0PXt0aGlzLmhhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY9e3RoaXMuaGFuZGxlUHJldn0vPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VRdWVyeShuZXdQYWdlTnVtPTAsIGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5LiN5Lyg5YWlY3VycmVudFBhZ2Xlj4LmlbDvvIzor7TmmI7mmK/lnKjpobXpnaLliqDovb3ml7bosIPnlKjmraTmlrnms5XvvIzorr7nva5jdXJyZW50UGFnZSA9IHVybOS4reeahHBhZ2Xlj4LmlbBcclxuICAgICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID8gY3VycmVudFBhZ2UgOiBwYXJzZUludCh0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIC8vIOWmguaenHVybOS4reeahHBhZ2Xlj4LmlbDlpKfkuo7mgLvpobXmlbDvvIzliJnliqDovb3nrKzkuIDpobVcclxuICAgICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID4gbmV3UGFnZU51bSA/IDEgOiBjdXJyZW50UGFnZTtcclxuICAgICAgICAvLyDnu4/ov4fkuIrpnaLnmoTlpITnkIbvvIzlpoLmnpxjdXJyZW50UGFnZeS+neeEtuS4jeWtmOWcqO+8jOWImem7mOiupOWKoOi9veesrOS4gOmhtVxyXG4gICAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPyBjdXJyZW50UGFnZSA6IDE7XHJcblxyXG4gICAgICAgIGdldFBvc3RCeVBhZ2UobmV3UGFnZU51bSwgY3VycmVudFBhZ2UsIHRoaXMuc3RhdGUubGltaXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBuZXdQYWdlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdDogcmVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0KCkge1xyXG4gICAgICAgIGxldCB7cGFnZU51bSwgY3VycmVudFBhZ2V9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPj0gcGFnZU51bSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIHRoaXMucGFnZVF1ZXJ5KHBhZ2VOdW0sIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVByZXYoKSB7XHJcbiAgICAgICAgbGV0IHtwYWdlTnVtLCBjdXJyZW50UGFnZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgdGhpcy5wYWdlUXVlcnkocGFnZU51bSwgY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Ib21lLmpzeCIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0IChtZXRob2QsIHVybCwgYm9keSkge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2FwaS8nICsgdXJsO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgLy8gZmV0Y2jnmoRHRVTkuI3lhYHorrjmnIlib2R577yM5Y+C5pWw5Y+q6IO95pS+5ZyodXJs5LitXHJcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9keSA9IGJvZHkgJiYgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgn5peg5rOV6L+e5o6l5pyN5Yqh5ZmoLicpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0ID0gKGxpbWl0KSA9PiB7XHJcbiAgICBsZXQgdXJsID0gbGltaXQgPyBgcG9zdD9saW1pdD0ke2xpbWl0fSZzb3J0PTFgIDogJ3Bvc3Q/c29ydD0xJztcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzTGlzdCA9IChsaW1pdCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdjYXRlZ29yeSc7IC8v5oyJ5pe26Ze05YCS5bqP77yM5pawLT7ml6dcclxuICAgIHVybCArPSBsaW1pdCA/IGA/bGltaXQ9JHtsaW1pdH1gIDogJyc7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUlkID0gKGlkKSA9PiByZXF1ZXN0KCdHRVQnLCAncG9zdC8nICsgaWQpO1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5VGFnID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9YDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9jb25kaXRpb25zPXtcImNhdGVnb3J5XCI6XCIke2NhdGVnb3J5fVwifWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/bGlrZT17XCJ0aXRsZVwiOlwiJHt0aXRsZX1cIn1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFnID0gKCkgPT4gcmVxdWVzdCgnR0VUJywgJ3RhZycpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGFnTnVtID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9JmNvdW50PTFgO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRQb3N0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdwb3N0P2NvdW50PTEnO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVBhZ2UgPSAoIHBhZ2VOdW09MCwgY3VycmVudFBhZ2U9MSwgbGltaXQ9MiApID0+IHtcclxuICAgIGxldCBzdGFydCwgLy8g5LuO56ys5Yeg56+H5paH56ug5byA5aeLXHJcbiAgICAgICAgdXJsOyBcclxuXHJcbiAgICAgICAgc3RhcnQgPSBsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBwYWdlTnVtKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGBwb3N0P2xpbWl0PSR7bGltaXR9JnNraXA9JHtzdGFydH0mc29ydD0xYDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3JlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9