webpackJsonp([4],{

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

/***/ "./pages/Tag.jsx":
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
    Tag: {
        displayName: 'Tag'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Tag.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Tag = _wrapComponent('Tag')(function (_Component) {
    _inherits(Tag, _Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

        _this.state = {
            tagName: _this.props.params.name || '',
            postList: []
        };
        return _this;
    }

    _createClass(Tag, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var tagName = this.state.tagName;

            (0, _request.getPostByTag)(tagName).then(function (res) {
                _this2.setState({
                    tagName: tagName,
                    postList: res
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                postList = _state.postList,
                tagName = _state.tagName;


            return _react3.default.createElement(
                'section',
                { className: 'tag' },
                _react3.default.createElement(
                    'h2',
                    { className: 'title' },
                    '\u6807\u7B7E\uFF1A',
                    _react3.default.createElement(
                        'span',
                        { className: 'tag-name' },
                        tagName
                    )
                ),
                _react3.default.createElement(_PostList2.default, { postList: postList })
            );
        }
    }]);

    return Tag;
}(_react2.Component));

exports.default = Tag;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqKiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeD9iOWJlIiwid2VicGFjazovLy8uL3BhZ2VzL1RhZy5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcz85ZDUwKioiXSwibmFtZXMiOlsiTG9hZGluZyIsInBvc3RMaXN0IiwicHJvcHMiLCJsZW5ndGgiLCJfcmVuZGVyUG9zdExpc3QiLCJtYXAiLCJwb3N0Iiwic3VtbWFyeSIsImNvbnRlbnQiLCJzbGljZSIsInRpdGxlIiwiY3JlYXRlZEF0IiwiY2F0ZWdvcnkiLCJfX2h0bWwiLCJQb3N0TGlzdCIsInN0YXRlIiwidGFnTmFtZSIsInBhcmFtcyIsIm5hbWUiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJUYWciLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsInRvVXBwZXJDYXNlIiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwianNvbiIsImNhdGNoIiwiYWxlcnQiLCJnZXRQb3N0TGlzdCIsImxpbWl0IiwiZ2V0Q2F0ZWdvcmllc0xpc3QiLCJnZXRQb3N0QnlJZCIsImlkIiwiZ2V0UG9zdEJ5VGFnIiwidGFnIiwiZ2V0UG9zdEJ5Q2F0ZWdvcnkiLCJnZXRQb3N0QnlUaXRsZSIsImdldFRhZyIsImdldFRhZ051bSIsImNvdW50UG9zdCIsImdldFBvc3RCeVBhZ2UiLCJwYWdlTnVtIiwiY3VycmVudFBhZ2UiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdhO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUNJLHVEQUFLLFdBQVUsT0FBZixHQURKO0FBRUksdURBQUssV0FBVSxPQUFmLEdBRko7QUFHSSx1REFBSyxXQUFVLE9BQWYs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QXNDYixRQUF0QyxPQUFKO0FBQ0EsV0FBT1csUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07QUFJQSxJQUFNa0IsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDakMsS0FBRCxFQUFXO0FBQ3JDLFFBQUllLCtCQUE2QmYsS0FBN0IsT0FBSjtBQUNBLFdBQU9hLFFBQVEsS0FBUixFQUFlRSxHQUFmLENBQVA7QUFDSCxDQUhNOztBQUtBLElBQU1tQiwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsV0FBTXJCLFFBQVEsS0FBUixFQUFlLEtBQWYsQ0FBTjtBQUFBLENBQWY7QUFDQSxJQUFNc0IsZ0NBQVksU0FBWkEsU0FBWSxDQUFDSixHQUFELEVBQVM7QUFDOUIsUUFBSWhCLG9DQUFrQ2dCLEdBQWxDLGVBQUo7QUFDQSxXQUFPbEIsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07O0FBS0EsSUFBTXFCLGdDQUFZLFNBQVpBLFNBQVksR0FBTTtBQUMzQixRQUFJckIsTUFBTSxjQUFWO0FBQ0EsV0FBT0YsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07QUFJQSxJQUFNc0Isd0NBQWdCLFNBQWhCQSxhQUFnQixHQUF5QztBQUFBLFFBQXZDQyxPQUF1Qyx1RUFBL0IsQ0FBK0I7QUFBQSxRQUE1QkMsV0FBNEIsdUVBQWhCLENBQWdCO0FBQUEsUUFBYmIsS0FBYSx1RUFBUCxDQUFPOztBQUNsRSxRQUFJYyxjQUFKO0FBQUEsUUFBVztBQUNQekIsZ0JBREo7O0FBR0l5QixZQUFRZCxTQUFTYSxjQUFjLENBQXZCLENBQVI7O0FBRUEsUUFBSUEsZUFBZUQsT0FBbkIsRUFBNEI7QUFDeEJ2Qiw4QkFBb0JXLEtBQXBCLGNBQWtDYyxLQUFsQztBQUNBLGVBQU8zQixRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0g7QUFDUixDQVZNLEMiLCJmaWxlIjoiNC45NTI4OS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvYWRpbmcuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3R9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFwb3N0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0LWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJQb3N0TGlzdChwb3N0TGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyUG9zdExpc3QocG9zdExpc3QpIHtcclxuICAgICAgICByZXR1cm4gcG9zdExpc3QubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdW1tYXJ5ID0gcG9zdC5jb250ZW50LnNsaWNlKDAsMTUwKSArICcuLi4nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QtaXRlbVwiIGtleT17cG9zdFsnX2lkJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInBvc3QtaXRlbS10aW1lXCI+e3Bvc3QuY3JlYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBvc3QtaXRlbS1jYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7cG9zdC5jYXRlZ29yeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1zdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN1bW1hcnl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlUYWd9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgVGFnIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IHRoaXMucHJvcHMucGFyYW1zLm5hbWUgfHwgJycsXHJcbiAgICAgICAgICAgIHBvc3RMaXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCB0YWdOYW1lID0gdGhpcy5zdGF0ZS50YWdOYW1lO1xyXG5cclxuICAgICAgICBnZXRQb3N0QnlUYWcodGFnTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdExpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3QsIHRhZ05hbWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhZyc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+5qCH562+77yaPHNwYW4gY2xhc3NOYW1lPSd0YWctbmFtZSc+e3RhZ05hbWV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3QgcG9zdExpc3Q9e3Bvc3RMaXN0fS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvVGFnLmpzeCIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0IChtZXRob2QsIHVybCwgYm9keSkge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2FwaS8nICsgdXJsO1xyXG5cclxuICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgLy8gZmV0Y2jnmoRHRVTkuI3lhYHorrjmnIlib2R577yM5Y+C5pWw5Y+q6IO95pS+5ZyodXJs5LitXHJcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYm9keSA9IGJvZHkgJiYgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgn5peg5rOV6L+e5o6l5pyN5Yqh5ZmoLicpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0ID0gKGxpbWl0KSA9PiB7XHJcbiAgICBsZXQgdXJsID0gbGltaXQgPyBgcG9zdD9saW1pdD0ke2xpbWl0fSZzb3J0PTFgIDogJ3Bvc3Q/c29ydD0xJztcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzTGlzdCA9IChsaW1pdCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdjYXRlZ29yeSc7IC8v5oyJ5pe26Ze05YCS5bqP77yM5pawLT7ml6dcclxuICAgIHVybCArPSBsaW1pdCA/IGA/bGltaXQ9JHtsaW1pdH1gIDogJyc7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUlkID0gKGlkKSA9PiByZXF1ZXN0KCdHRVQnLCAncG9zdC8nICsgaWQpO1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5VGFnID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9YDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9jb25kaXRpb25zPXtcImNhdGVnb3J5XCI6XCIke2NhdGVnb3J5fVwifWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/bGlrZT17XCJ0aXRsZVwiOlwiJHt0aXRsZX1cIn1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFnID0gKCkgPT4gcmVxdWVzdCgnR0VUJywgJ3RhZycpO1xyXG5leHBvcnQgY29uc3QgZ2V0VGFnTnVtID0gKHRhZykgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2NvbmRpdGlvbnM9e1widGFnc1wiOlwiJHt0YWd9XCJ9JmNvdW50PTFgO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRQb3N0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHVybCA9ICdwb3N0P2NvdW50PTEnO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVBhZ2UgPSAoIHBhZ2VOdW09MCwgY3VycmVudFBhZ2U9MSwgbGltaXQ9MiApID0+IHtcclxuICAgIGxldCBzdGFydCwgLy8g5LuO56ys5Yeg56+H5paH56ug5byA5aeLXHJcbiAgICAgICAgdXJsOyBcclxuXHJcbiAgICAgICAgc3RhcnQgPSBsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBwYWdlTnVtKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGBwb3N0P2xpbWl0PSR7bGltaXR9JnNraXA9JHtzdGFydH0mc29ydD0xYDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3JlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9