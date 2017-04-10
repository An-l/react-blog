webpackJsonp([6],{

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

/***/ "./pages/Archive.jsx":
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
    Archive: {
        displayName: 'Archive'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Archive.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Archive = _wrapComponent('Archive')(function (_Component) {
    _inherits(Archive, _Component);

    function Archive(props) {
        _classCallCheck(this, Archive);

        var _this = _possibleConstructorReturn(this, (Archive.__proto__ || Object.getPrototypeOf(Archive)).call(this, props));

        _this.state = {
            postList: []
        };
        return _this;
    }

    _createClass(Archive, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _request.getPostList)().then(function (res) {
                _this2.setState({
                    postList: res
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!Object.keys(this.state.postList).length) {
                return _react3.default.createElement(_Loading2.default, null);
            } else {
                return _react3.default.createElement(
                    'section',
                    { className: 'archive' },
                    _react3.default.createElement(
                        'h2',
                        { className: 'title' },
                        '\u5F52\u6863'
                    ),
                    _react3.default.createElement(_ArchiveList2.default, {
                        postList: this.state.postList })
                );
            }
        }
    }]);

    return Archive;
}(_react2.Component));

exports.default = Archive;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeD83YTU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZy5qc3g/NWY1YSoqKioiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXJjaGl2ZS5qc3giXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInRpbWVMaXN0IiwiX2luaXRUaW1lTGlzdCIsInBvc3RMaXN0IiwibmV4dFByb3BzIiwibmV3VGltZUxpc3QiLCJsZW5ndGgiLCJmb3JFYWNoIiwidGltZUFyciIsInBvc3QiLCJzcGxpdCIsInllYXIiLCJwdXNoIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImEiLCJiIiwibWFwIiwicmVuZGVyUG9zdExpc3RCeVllYXIiLCJ0aW1lIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJzbGljZSIsInRhZ3MiLCJyZW5kZXJUYWdzIiwidGFnIiwicmVuZGVyUG9zdExpc3QiLCJwcm9wVHlwZXMiLCJhcnJheSIsIkFyY2hpdmVMaXN0IiwiTG9hZGluZyIsInRoZW4iLCJyZXMiLCJBcmNoaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNSSx5QkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBVTtBQURELFNBQWI7QUFIZTtBQU1sQjs7Ozs2Q0FFb0I7QUFDakIsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBS0gsS0FBTCxDQUFXSSxRQUE5QjtBQUNIOzs7a0RBRXlCQyxTLEVBQVc7QUFDakMsaUJBQUtGLGFBQUwsQ0FBbUJFLFVBQVVELFFBQTdCO0FBQ0g7O0FBSUE7Ozs7c0NBQ2FBLFEsRUFBVTtBQUNwQixnQkFBSUUsY0FBYyxFQUFsQjs7QUFFQUYscUJBQVNHLE1BQVQsSUFBbUJILFNBQVNJLE9BQVQsQ0FBaUIs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R0FESjtBQUVJLCtDQUFLLFdBQVUsT0FBZixHQUZKO0FBR0ksK0NBQUssV0FBVSxPQUFmLEdBSEo7QUFJSSwrQ0FBSyxXQUFVLE9BQWYsR0FKSjtBQUtJLCtDQUFLLFdBQVUsT0FBZjtBQUxKLEtBREo7QUFTSCxDQVZEOztrQkFZZUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmY7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdJLHFCQUFZakMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNURyxzQkFBVTtBQURELFNBQWI7QUFIZTtBQU1sQjs7Ozs0Q0FFbUI7QUFBQTs7QUFDaEIsd0NBQ0s4QixJQURMLENBQ1UsZUFBTztBQUNULHVCQUFLcEIsUUFBTCxDQUFjO0FBQ1ZWLDhCQUFVK0I7QUFEQSxpQkFBZDtBQUdILGFBTEw7QUFNSDs7O2lDQUVRO0FBQ0wsZ0JBQUksQ0FBQ3BCLE9BQU9DLElBQVAsQ0FBWSxLQUFLZixLQUFMLENBQVdHLFFBQXZCLEVBQWlDRyxNQUF0QyxFQUE4QztBQUMxQyx1QkFBTyxzREFBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUNJO0FBQUE7QUFBQSxzQkFBUyxXQUFVLFNBQW5CO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsT0FBZDtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUNJLGtDQUFVLEtBQUtOLEtBQUwsQ0FBV0csUUFEekI7QUFGSixpQkFESjtBQU9IO0FBQ0o7Ozs7OztrQkFHVWdDLE8iLCJmaWxlIjoiNi41Njk2NC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jbGFzcyBBcmNoaXZlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHBvc3RMaXN0OiBQcm9wVHlwZXMuYXJyYXlcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0aW1lTGlzdDoge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXRUaW1lTGlzdCh0aGlzLnByb3BzLnBvc3RMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuX2luaXRUaW1lTGlzdChuZXh0UHJvcHMucG9zdExpc3QpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAgLy8g5LuO6I635Y+W55qE5paH56ug5pWw57uE5Lit77yM5Yid5aeL5YyW5pe26Ze05YiX6KGo5a+56LGhXHJcbiAgICBfaW5pdFRpbWVMaXN0KHBvc3RMaXN0KSB7XHJcbiAgICAgICAgbGV0IG5ld1RpbWVMaXN0ID0ge307XHJcblxyXG4gICAgICAgIHBvc3RMaXN0Lmxlbmd0aCAmJiBwb3N0TGlzdC5mb3JFYWNoKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGltZUFyciA9IHBvc3RbJ2NyZWF0ZWRBdCddLnNwbGl0KFwiLVwiLDIpO1xyXG4gICAgICAgICAgICBsZXQgeWVhciA9IHRpbWVBcnJbMF07XHJcblxyXG4gICAgICAgICAgICBpZighbmV3VGltZUxpc3RbeWVhcl0pe1xyXG4gICAgICAgICAgICAgICAgbmV3VGltZUxpc3RbeWVhcl0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXS5wdXNoKHBvc3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGltZUxpc3Q6IG5ld1RpbWVMaXN0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8g5riy5p+T5paH56ug5YiX6KGoXHJcbiAgICByZW5kZXJQb3N0TGlzdCh0aW1lTGlzdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIOWFiOWvueWvueixoeWxnuaAp+i/m+ihjOaOkuW6j++8jOeEtuWQjumBjeWOhui+k+WHulxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aW1lTGlzdCkuc29ydCgoYSxiKSA9PiBiLWEpLm1hcCh5ZWFyID0+IHRoaXMucmVuZGVyUG9zdExpc3RCeVllYXIodGltZUxpc3QsIHllYXIpIClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5qC55o2u5bm05Lu95riy5p+T5paH56ug5YiX6KGoXHJcbiAgICByZW5kZXJQb3N0TGlzdEJ5WWVhcih0aW1lTGlzdCwgdGltZSkge1xyXG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHRpbWVMaXN0KS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICBsZXQgeWVhciA9IHRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3llYXJ9IGNsYXNzTmFtZT0nYXJjaGl2ZS1pdGVtJz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcmNoaXZlLXllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eWVhcn0g5bm0ICh7dGltZUxpc3RbeWVhcl0ubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGlzdFt5ZWFyXS5tYXAocG9zdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YHBvc3QvJHtwb3N0WydfaWQnXX1gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncG9zdC1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3JlYXRlZEF0Jz57cG9zdC5jcmVhdGVkQXQuc2xpY2UoMCwxMCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0YWdzJz7moIfnrb46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LnRhZ3MubGVuZ3RoIT09MCA/IHRoaXMucmVuZGVyVGFncyhwb3N0LnRhZ3MpIDogJyAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5riy5p+T5qCH562+5YiX6KGoXHJcbiAgICByZW5kZXJUYWdzKHRhZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXt0YWd9IGNsYXNzTmFtZT1cImFydGljbGUtdGFnLWxpbmsgbm90ZWJvb2tcIiB0bz17YHRhZy8ke3RhZ30vYH0+e3RhZyArICcgICd9IDwvTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyY2hpdmUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdExpc3QodGhpcy5zdGF0ZS50aW1lTGlzdCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyY2hpdmVMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXJjaGl2ZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3QxXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0M1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3Q0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2FkaW5nLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgQXJjaGl2ZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9BcmNoaXZlTGlzdC5qc3gnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcuanN4JztcclxuXHJcbmltcG9ydCB7Z2V0UG9zdExpc3R9IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5cclxuY2xhc3MgQXJjaGl2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwb3N0TGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGdldFBvc3RMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RMaXN0OiByZXNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXModGhpcy5zdGF0ZS5wb3N0TGlzdCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2FyY2hpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz7lvZLmoaM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcmNoaXZlTGlzdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdExpc3Q9e3RoaXMuc3RhdGUucG9zdExpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmNoaXZlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0FyY2hpdmUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==