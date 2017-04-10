webpackJsonp([5],{

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
        key: 'renderNull',
        value: function renderNull() {
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
                postList.length ? _react3.default.createElement(_PostList2.default, { postList: postList }) : this.renderNull()
            );
        }
    }]);

    return Search;
}(_react2.Component));

exports.default = Search;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqKioiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3g/YjliZSoiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJMb2FkaW5nIiwicG9zdExpc3QiLCJtYXAiLCJwb3N0Iiwic3VtbWFyeSIsImNvbnRlbnQiLCJzbGljZSIsInRpdGxlIiwiY3JlYXRlZEF0IiwiY2F0ZWdvcnkiLCJfX2h0bWwiLCJwcm9wcyIsImxlbmd0aCIsInJlbmRlclBvc3RMaXN0IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJQb3N0TGlzdCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJwYXJhbXMiLCJuYW1lIiwiX2dldFBvc3RMaXN0IiwibmV4dFByb3BzIiwidmFsdWUiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJyZW5kZXJOdWxsIiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDbEIsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSSwrQ0FBSyxXQUFVLE9BQWYsR0FESjtBQUVJLCtDQUFLLFdBQVUsT0FBZixHQUZKO0FBR0ksK0NBQUssV0FBVSxPQUFmLEdBSEo7QUFJSSwrQ0FBSyxXQUFVLE9BQWYsR0FKSjtBQUtJLCtDQUFLLFdBQVUsT0FBZjtBQUxKLEtBREo7QUFTSCxDQVZEOztrQkFZZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPSTt1Q0FDZUMsUSxFQUFVO0FBQ3JCLG1CQUFPQSxTQUFTQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLG9CQUFJQyxVQUFVRCxLQUFLRSxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFB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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0MlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3QzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0NVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvYWRpbmcuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCc7XHJcblxyXG5jbGFzcyBQb3N0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHBvc3RMaXN0OiBQcm9wVHlwZXMuYXJyYXlcclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLLmn5Pmlofnq6DliJfooahcclxuICAgIHJlbmRlclBvc3RMaXN0KHBvc3RMaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHBvc3RMaXN0Lm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3VtbWFyeSA9IHBvc3QuY29udGVudC5zbGljZSgwLDE1MCkgKyAnLi4uJztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0LWl0ZW1cIiBrZXk9e3Bvc3RbJ19pZCddfT5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdC1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9wb3N0LyR7cG9zdFsnX2lkJ119YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tdGltZVwiPntwb3N0LmNyZWF0ZWRBdH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tY2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9jYXRlZ29yeS8ke3Bvc3QuY2F0ZWdvcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tc3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzdW1tYXJ5fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwb3N0TGlzdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIXBvc3RMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdExpc3QocG9zdExpc3QpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QuanN4JztcclxuXHJcbmltcG9ydCB7Z2V0UG9zdEJ5VGl0bGV9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogdGhpcy5wcm9wcy5wYXJhbXMubmFtZSB8fCAnJyxcclxuICAgICAgICAgICAgcG9zdExpc3Q6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gdGhpcy5wcm9wcy5wYXJhbXMubmFtZTtcclxuICAgICAgICB0aGlzLl9nZXRQb3N0TGlzdChzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxldCBzZWFyY2hWYWx1ZSA9IG5leHRQcm9wcy5wYXJhbXMubmFtZTtcclxuICAgICAgICB0aGlzLl9nZXRQb3N0TGlzdChzZWFyY2hWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFBvc3RMaXN0KHZhbHVlKSB7XHJcbiAgICAgICAgZ2V0UG9zdEJ5VGl0bGUodmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdExpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlck51bGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bvc3QtbnVsbCc+XHJcbiAgICAgICAgICAgICAgICA8aDM+5rKh5pyJ5om+5Yiw5paH56ug44CC6K+V6K+V5YW25a6D5pCc57Si77yfPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtwb3N0TGlzdCwgc2VhcmNoVmFsdWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+5pCc57Si77yaPHNwYW4gY2xhc3NOYW1lPSd0YWctbmFtZSc+e3NlYXJjaFZhbHVlfTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RMaXN0Lmxlbmd0aCA/IDxQb3N0TGlzdCBwb3N0TGlzdD17cG9zdExpc3R9Lz4gOiB0aGlzLnJlbmRlck51bGwoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL1NlYXJjaC5qc3giXSwic291cmNlUm9vdCI6IiJ9