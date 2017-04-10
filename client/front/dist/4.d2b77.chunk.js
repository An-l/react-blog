webpackJsonp([4],{

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4PzVmNWEqKiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzeD9iOWJlIiwid2VicGFjazovLy8uL3BhZ2VzL1RhZy5qc3giXSwibmFtZXMiOlsiTG9hZGluZyIsInBvc3RMaXN0IiwibWFwIiwicG9zdCIsInN1bW1hcnkiLCJjb250ZW50Iiwic2xpY2UiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsImNhdGVnb3J5IiwiX19odG1sIiwicHJvcHMiLCJsZW5ndGgiLCJyZW5kZXJQb3N0TGlzdCIsInByb3BUeXBlcyIsImFycmF5IiwiUG9zdExpc3QiLCJzdGF0ZSIsInRhZ05hbWUiLCJwYXJhbXMiLCJuYW1lIiwidGhlbiIsInNldFN0YXRlIiwicmVzIiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDbEIsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSSwrQ0FBSyxXQUFVLE9BQWYsR0FESjtBQUVJLCtDQUFLLFdBQVUsT0FBZixHQUZKO0FBR0ksK0NBQUssV0FBVSxPQUFmLEdBSEo7QUFJSSwrQ0FBSyxXQUFVLE9BQWYsR0FKSjtBQUtJLCtDQUFLLFdBQVUsT0FBZjtBQUxKLEtBREo7QUFTSCxDQVZEOztrQkFZZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPSTt1Q0FDZUMsUSxFQUFVO0FBQ3JCLG1CQUFPQSxTQUFTQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLG9CQUFJQyxVQUFVRCxLQUFLRSxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsR0FBckIsSUFBNEIsS0FBMUM7O0FBRUEsdUJBQ0k7QUFBQTtBQUFBLHNCQUFTLFdBQVUsV0FBbkIsRUFBK0IsS0FBS0gsS0FBSyxLQUFMLENBQXBDO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLFdBQVUsaUJBQWQ7QUFDSTtBQUFBO0FBQUEsa0NBQU0sZUFBYUEsS0FBSyxLQUFMLENBQW5CO0FBQW1DQSxxQ0FBS0k7QUFBeEM7QUFESix5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsZ0JBQWhCO0FBQWtDSixxQ0FBS0s7QUFBdkM7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsb0JBQWhCO0FBQ0ksdURBQWlCTCxLQUFLTSxRQUQxQjtBQUVTTixxQ0FBS007QUFGZDtBQURKO0FBUEoscUJBREo7QUFlSSwyREFBSyxXQUFVLG1CQUFmO0FBQ0ksaURBQXlCLEVBQUNDLFFBQVFOLE9BQVQsRUFEN0I7QUFmSixpQkFESjtBQXFCSCxhQXhCTSxDQUFQO0FBeUJIOzs7aUNBRVE7QUFBQSxnQkFDQUgsUUFEQSxHQUNZLEtBQUtVLEtBRGpCLENBQ0FWLFFBREE7OztBQUdMLGdCQUFJLENBQUNBLFNBQVNXLE1BQWQsRUFBc0I7QUFDbEIsdUJBQU8sc0RBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxXQUFmO0FBQ0sseUJBQUtDLGNBQUwsQ0FBb0JaLFFBQXBCO0FBREwsaUJBREo7QUFLSDtBQUNKOzs7OzZCQTdDTWEsUyxHQUFZO0FBQ2ZiLGNBQVUsa0JBQVVjO0FBREwsQzs7a0JBZ0RSQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERmOztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0ksaUJBQVlMLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFHZixjQUFLTSxLQUFMLEdBQWE7QUFDVEMscUJBQVMsTUFBS1AsS0FBTCxDQUFXUSxNQUFYLENBQWtCQyxJQUFsQixJQUEwQixFQUQxQjtBQUVUbkIsc0JBQVU7QUFGRCxTQUFiO0FBSGU7QUFPbEI7Ozs7NENBR21CO0FBQUE7O0FBQ2hCLGdCQUFJaUIsVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQXpCOztBQUVBLHVDQUFhQSxPQUFiLEVBQ0tHLElBREwsQ0FDVSxlQUFPO0FBQ1QsdUJBQUtDLFFBQUwsQ0FBYztBQUNWSixvQ0FEVTtBQUVWakIsOEJBQVVzQjtBQUZBLGlCQUFkO0FBSUgsYUFOTDtBQU9IOzs7aUNBR1E7QUFBQSx5QkFDcUIsS0FBS04sS0FEMUI7QUFBQSxnQkFDQWhCLFFBREEsVUFDQUEsUUFEQTtBQUFBLGdCQUNVaUIsT0FEVixVQUNVQSxPQURWOzs7QUFHTCxtQkFDRztBQUFBO0FBQUEsa0JBQVMsV0FBVSxLQUFuQjtBQUNLO0FBQUE7QUFBQSxzQkFBSSxXQUFVLE9BQWQ7QUFBQTtBQUF5QjtBQUFBO0FBQUEsMEJBQU0sV0FBVSxVQUFoQjtBQUE0QkE7QUFBNUI7QUFBekIsaUJBREw7QUFFSyxvRUFBVSxVQUFVakIsUUFBcEI7QUFGTCxhQURIO0FBTUg7Ozs7OztrQkFHVXVCLEciLCJmaWxlIjoiNC5kMmI3Ny5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3QyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0NFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3Q1XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9hZGluZy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanN4JztcclxuXHJcbmNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgcG9zdExpc3Q6IFByb3BUeXBlcy5hcnJheVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4suafk+aWh+eroOWIl+ihqFxyXG4gICAgcmVuZGVyUG9zdExpc3QocG9zdExpc3QpIHtcclxuICAgICAgICByZXR1cm4gcG9zdExpc3QubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdW1tYXJ5ID0gcG9zdC5jb250ZW50LnNsaWNlKDAsMTUwKSArICcuLi4nO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QtaXRlbVwiIGtleT17cG9zdFsnX2lkJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0LWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3Bvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLW1ldGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cInBvc3QtaXRlbS10aW1lXCI+e3Bvc3QuY3JlYXRlZEF0fTwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBvc3QtaXRlbS1jYXRlZ29yeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2NhdGVnb3J5LyR7cG9zdC5jYXRlZ29yeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaXRlbS1zdW1tYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN1bW1hcnl9fT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3Bvc3RMaXN0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghcG9zdExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0TGlzdChwb3N0TGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlUYWd9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgVGFnIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IHRoaXMucHJvcHMucGFyYW1zLm5hbWUgfHwgJycsXHJcbiAgICAgICAgICAgIHBvc3RMaXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCB0YWdOYW1lID0gdGhpcy5zdGF0ZS50YWdOYW1lO1xyXG5cclxuICAgICAgICBnZXRQb3N0QnlUYWcodGFnTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdExpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3QsIHRhZ05hbWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhZyc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+5qCH562+77yaPHNwYW4gY2xhc3NOYW1lPSd0YWctbmFtZSc+e3RhZ05hbWV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3QgcG9zdExpc3Q9e3Bvc3RMaXN0fS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvVGFnLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=