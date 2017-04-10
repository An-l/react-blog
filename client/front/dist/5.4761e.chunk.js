webpackJsonp([5],{

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

/***/ "./pages/Search.jsx":
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

var _request = __webpack_require__("./utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Search: {
        displayName: 'Search'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Search.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Search = _wrapComponent('Search')(function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            searchValue: _this.props.params.name || '',
            postList: []
        };
        return _this;
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var searchValue = this.props.params.name;
            this._getPostList(searchValue);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var searchValue = nextProps.params.name;
            this._getPostList(searchValue);
        }
    }, {
        key: '_getPostList',
        value: function _getPostList(value) {
            var _this2 = this;

            (0, _request.getPostByTitle)(value).then(function (res) {
                _this2.setState({
                    searchValue: value,
                    postList: res
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                postList = _state.postList,
                searchValue = _state.searchValue;


            return _react3.default.createElement(
                'section',
                { className: 'search' },
                _react3.default.createElement(
                    'h2',
                    { className: 'title' },
                    '\u641C\u7D22\uFF1A',
                    _react3.default.createElement(
                        'span',
                        { className: 'tag-name' },
                        searchValue
                    )
                ),
                postList.length ? _react3.default.createElement(_PostList2.default, { postList: postList }) : this._renderNull()
            );
        }
    }, {
        key: '_renderNull',
        value: function _renderNull() {
            return _react3.default.createElement(
                'div',
                { className: 'post-null' },
                _react3.default.createElement(
                    'h3',
                    null,
                    '\u6CA1\u6709\u627E\u5230\u6587\u7AE0\u3002\u8BD5\u8BD5\u5176\u5B83\u641C\u7D22\uFF1F'
                )
            );
        }
    }]);

    return Search;
}(_react2.Component));

exports.default = Search;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqKioiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3g/YjliZSoiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9yZXF1ZXN0LmpzPzlkNTAqKioiXSwibmFtZXMiOlsiTG9hZGluZyIsInBvc3RMaXN0IiwicHJvcHMiLCJsZW5ndGgiLCJfcmVuZGVyUG9zdExpc3QiLCJtYXAiLCJwb3N0Iiwic3VtbWFyeSIsImNvbnRlbnQiLCJzbGljZSIsInRpdGxlIiwiY3JlYXRlZEF0IiwiY2F0ZWdvcnkiLCJfX2h0bWwiLCJQb3N0TGlzdCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJwYXJhbXMiLCJuYW1lIiwiX2dldFBvc3RMaXN0IiwibmV4dFByb3BzIiwidmFsdWUiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJfcmVuZGVyTnVsbCIsIlNlYXJjaCIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJib2R5IiwidG9VcHBlckNhc2UiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJqc29uIiwiY2F0Y2giLCJhbGVydCIsImdldFBvc3RMaXN0IiwibGltaXQiLCJnZXRDYXRlZ29yaWVzTGlzdCIsImdldFBvc3RCeUlkIiwiaWQiLCJnZXRQb3N0QnlUYWciLCJ0YWciLCJnZXRQb3N0QnlDYXRlZ29yeSIsImdldFBvc3RCeVRpdGxlIiwiZ2V0VGFnIiwiZ2V0VGFnTnVtIiwiY291bnRQb3N0IiwiZ2V0UG9zdEJ5UGFnZSIsInBhZ2VOdW0iLCJjdXJyZW50UGFnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR2E7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQ0ksdURBQUss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LFFBQXZDQyxPQUF1Qyx1RUFBL0IsQ0FBK0I7QUFBQSxRQUE1QkMsV0FBNEIsdUVBQWhCLENBQWdCO0FBQUEsUUFBYmIsS0FBYSx1RUFBUCxDQUFPOztBQUNsRSxRQUFJYyxjQUFKO0FBQUEsUUFBVztBQUNQekIsZ0JBREo7O0FBR0l5QixZQUFRZCxTQUFTYSxjQUFjLENBQXZCLENBQVI7O0FBRUEsUUFBSUEsZUFBZUQsT0FBbkIsRUFBNEI7QUFDeEJ2Qiw4QkFBb0JXLEtBQXBCLGNBQWtDYyxLQUFsQztBQUNBLGVBQU8zQixRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0g7QUFDUixDQVZNLEMiLCJmaWxlIjoiNS40NzYxZS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvYWRpbmcuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3R9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFwb3N0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0LWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJQb3N0TGlzdChwb3N0TGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyUG9zdExpc3QocG9zdExpc3QpIHtcclxuICAgICAgICByZXR1cm4gcG9zdExpc3QubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdW1tYXJ5ID0gcG9zdC5jb250ZW50LnNsaWNlKDAsMTUwKSArICcuLi4nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QtaXRlbVwiIGtleT17cG9zdFsnX2lkJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInBvc3QtaXRlbS10aW1lXCI+e3Bvc3QuY3JlYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBvc3QtaXRlbS1jYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7cG9zdC5jYXRlZ29yeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1zdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN1bW1hcnl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlUaXRsZX0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XHJcblxyXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiB0aGlzLnByb3BzLnBhcmFtcy5uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgICBwb3N0TGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgc2VhcmNoVmFsdWUgPSB0aGlzLnByb3BzLnBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2dldFBvc3RMaXN0KHNlYXJjaFZhbHVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gbmV4dFByb3BzLnBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2dldFBvc3RMaXN0KHNlYXJjaFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UG9zdExpc3QodmFsdWUpIHtcclxuICAgICAgICBnZXRQb3N0QnlUaXRsZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdDogcmVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3QsIHNlYXJjaFZhbHVlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWFyY2gnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPuaQnOe0ou+8mjxzcGFuIGNsYXNzTmFtZT0ndGFnLW5hbWUnPntzZWFyY2hWYWx1ZX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdC5sZW5ndGggPyA8UG9zdExpc3QgcG9zdExpc3Q9e3Bvc3RMaXN0fS8+IDogdGhpcy5fcmVuZGVyTnVsbCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlck51bGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QtbnVsbCc+XHJcbiAgICAgICAgICAgICAgICA8aDM+5rKh5pyJ5om+5Yiw5paH56ug44CC6K+V6K+V5YW25a6D5pCc57Si77yfPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvU2VhcmNoLmpzeCIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0IChtZXRob2QsIHVybCwgYm9keSkge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2FwaS8nICsgdXJsO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgLy8gZmV0Y2jnmoRHRVTkuI3lhYHorrjmnIlib2R577yM5Y+C5pWw5Y+q6IO95pS+5ZyodXJs5LitXHJcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9keSA9IGJvZHkgJiYgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgn5peg5rOV6L+e5o6l5pyN5Yqh5ZmoLicpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0ID0gKGxpbWl0KSA9PiB7XHJcbiAgICBsZXQgdXJsID0gbGltaXQgPyBgcG9zdD9saW1pdD0ke2xpbWl0fSZzb3J0PTFgIDogJ3Bvc3Q/c29ydD0xJztcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzTGlzdCA9IChsaW1pdCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdjYXRlZ29yeSc7IC8v5oyJ5pe26Ze05YCS5bqP77yM5pawLT7ml6dcclxuICAgIHVybCArPSBsaW1pdCA/IGA/bGltaXQ9JHtsaW1pdH1gIDogJyc7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUlkID0gKGlkKSA9PiByZXF1ZXN0KCdHRVQnLCAncG9zdC8nICsgaWQpO1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5VGFnID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9YDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9jb25kaXRpb25zPXtcImNhdGVnb3J5XCI6XCIke2NhdGVnb3J5fVwifWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/bGlrZT17XCJ0aXRsZVwiOlwiJHt0aXRsZX1cIn1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFnID0gKCkgPT4gcmVxdWVzdCgnR0VUJywgJ3RhZycpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGFnTnVtID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9JmNvdW50PTFgO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRQb3N0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdwb3N0P2NvdW50PTEnO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVBhZ2UgPSAoIHBhZ2VOdW09MCwgY3VycmVudFBhZ2U9MSwgbGltaXQ9MiApID0+IHtcclxuICAgIGxldCBzdGFydCwgLy8g5LuO56ys5Yeg56+H5paH56ug5byA5aeLXHJcbiAgICAgICAgdXJsOyBcclxuXHJcbiAgICAgICAgc3RhcnQgPSBsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBwYWdlTnVtKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGBwb3N0P2xpbWl0PSR7bGltaXR9JnNraXA9JHtzdGFydH0mc29ydD0xYDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3JlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9