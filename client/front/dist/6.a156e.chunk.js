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
            timeList: {}
        };
        return _this;
    }

    _createClass(Archive, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _request.getPostList)().then(function (res) {
                _this2.initTimeList(res);
            });
        }
    }, {
        key: 'initTimeList',
        value: function initTimeList(postList) {
            var newTimeList = {};

            postList.forEach(function (post) {
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
    }, {
        key: 'render',
        value: function render() {
            if (!Object.keys(this.state.timeList).length) {
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
                        timeList: this.state.timeList })
                );
            }
        }
    }]);

    return Archive;
}(_react2.Component));

exports.default = Archive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeD83YTU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZy5qc3g/NWY1YSoqKioiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXJjaGl2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcz85ZDUwKioqKiJdLCJuYW1lcyI6WyJfcmVuZGVyUG9zdExpc3QiLCJwcm9wcyIsInRpbWVMaXN0IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJhIiwiYiIsIm1hcCIsIl9yZW5kZXJQb3N0TGlzdEJ5WWVhciIsInllYXIiLCJ0aW1lIiwibGVuZ3RoIiwicG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0Iiwic2xpY2UiLCJ0YWdzIiwiX3JlbmRlclRhZ3MiLCJ0YWciLCJBcmNoaXZlTGlzdCIsIkxvYWRpbmciLCJzdGF0ZSIsInRoZW4iLCJpbml0VGltZUxpc3QiLCJyZXMiLCJwb3N0TGlzdCIsIm5ld1RpbWVMaXN0IiwiZm9yRWFjaCIsInRpbWVBcnIiLCJzcGxpdCIsInB1c2giLCJzZXRTdGF0ZSIsIkFyY2hpdmUiLCJyZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsInRvVXBwZXJDYXNlIiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwianNvbiIsImNhdGNoIiwiYWxlcnQiLCJnZXRQb3N0TGlzdCIsImxpbWl0IiwiZ2V0Q2F0ZWdvcmllc0xpc3QiLCJnZXRQb3N0QnlJZCIsImlkIiwiZ2V0UG9zdEJ5VGFnIiwiZ2V0UG9zdEJ5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldFBvc3RCeVRpdGxlIiwiZ2V0VGFnIiwiZ2V0VGFnTnVtIiwiY291bnRQb3N0IiwiZ2V0UG9zdEJ5UGFnZSIsInBhZ2VOdW0iLCJjdXJyZW50UGFnZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSWE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0sscUJBQUtBLGVBQUwsQ0FBcUIsS0FBS0MsS0FBTCxDQUFXQyxRQUFoQztBQURMLGFBREo7QUFLSDs7O3dDQUVnQkEsUSxFQUFVO0FBQUE7O0FBQ3ZCO0FBQ0k7QUFDQUMsdUJBQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsSUFBdEIsQ0FBMkIsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsMkJBQVNBLElBQUVELENBQVg7QUFBQSxpQkFBM0IsRUFBeUNFLEdBQXpDLENBQTZDO0FBQUEsMkJBQVEsT0FBS0MscUJBQUwsQ0FBMkJQLFFBQTNCLEVBQXFDUSxJQUFyQyxDQUFSO0FBQUEsaUJBQTdDO0FBRko7QUFJSDs7OzhDQUVxQlIsUSxFQUFVUyxJLEVBQU07QUFBQTs7QUFDbEMsZ0JBQUdSLE9BQU9DLElBQVAsQ0FBWUYsUUFBWixFQUFzQlUsTUFBdEIsS0FBaUMsQ0FBcEMsRUFBdUM7QUFDdkMsZ0JBQUlGLE9BQU9DLElBQVg7O0FBRUEsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLEtBQUtELElBQVYsRUFBZ0IsV0FBVSxjQUExQjtBQUNJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLGNBQWQ7QUFDS0Esd0JBREw7QUFBQTtBQUNlUiw2QkFBU1EsSUFBVCxFQUFlRSxNQUQ5QjtBQUFBO0FBQUEsaUJBREo7QUFJSTtBQUFBO0FBQUE7QUFFUVYsNkJBQVNRLElBQVQsRUFBZUYsR0FBZixDQUFtQixnQkFBUTtBQUN2QiwrQkFDSTtBQUFBO0FBQUEsOEJBQUksS0FBS0ssS0FBS0MsS0FBZDtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxjQUFZRCxLQUFLLEtBQUwsQ0FBbEI7QUFBa0NBLHFDQUFLQztBQUF2Qyw2QkFESjtBQUVJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLFdBQWhCO0FBQUE7QUFFSTtBQUFBO0FBQUEsc0NBQU0sV0FBVSxXQUFoQjtBQUE2QkQseUNBQUtFLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixDQUFyQixFQUF1QixFQUF2QjtBQUE3QixpQ0FGSjtBQUdJO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLE1BQWhCO0FBQUE7QUFFUUgseUNBQUtJLElBQUwsQ0FBVUwsTUFBVixLQUFtQixDQUFuQixHQUF1QixPQUFLTSxXQUFMLENBQWlCTCxLQUFLSSxJQUF0QixDQUF2QixHQUFxRDtBQUY3RCxpQ0FISjtBQUFBO0FBQUE7QUFGSix5QkFESjtBQWVILHFCQWhCRDtBQUZSO0FBSkosYUFESjtBQTRCSDs7O29DQUVZQSxJLEVBQU07QUFDZixtQkFBT0EsS0FBS1QsR0FBTCxDQUFTLFVBQUNXLEdBQUQsRUFBUztBQUNyQix1QkFDSTtBQUFBO0FBQUEsc0JBQU0sS0FBS0EsR0FBWCxFQUFnQixXQUFVLDJCQUExQixFQUFzRCxhQUFXQSxHQUFYLE1BQXREO0FBQTBFQSwwQkFBTSxJQUFoRjtBQUFBO0FBQUEsaUJBREo7QUFHSCxhQUpNLENBQVA7QUFLSDs7Ozs7O2tCQUdVQyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNDNURGO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUNJLHVEQUFLLFdBQVUsT0FBZixHQURKO0FBRUksdURBQUssV0FBVSxPQUFmLEdBRko7QUFHSSx1REFBSyxXQUFVLE9BQWYsR0FISjtBQUlJLHVEQUFLLFdBQVUsT0FBZixHQUpKO0FBS0ksdURBQUssV0FBVSxPQUFmO0FBTEosYUFESjtBQVNIOzs7Ozs7a0JBR1VDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0kscUJBQVlwQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1RBLEtBRFM7O0FBR2YsY0FBS3FCLEtBQUwsR0FBYTtBQUNUcEIsc0JBQVU7QUFERCxTQUFiO0FBSGU7QUFNbEI7Ozs7NENBRW1CO0FBQUE7O0FBQ2hCLHdDQUNLcUIsSUFETCxDQUNVLGVBQU87QUFDVCx1QkFBS0MsWUFBTCxDQUFrQkMsR0FBbEI7QUFDSCxhQUhMO0FBSUg7OztxQ0FFWUMsUSxFQUFVO0FBQ25CLGdCQUFJQyxjQUFjLEVBQWxCOztBQUVBRCxxQkFBU0UsT0FBVCxDQUFpQixnQkFBUTtBQUNyQixvQkFBSUMsVUFBVWhCLEtBQUssV0FBTCxFQUFrQmlCLEtBQWxCLENBQXdCLEdBQXhCLEVBQTRCLENBQTVCLENBQWQ7QUFDQSxvQkFBSXBCLE9BQU9tQixRQUFRLENBQVIsQ0FBWDs7QUFFQSxvQkFBRyxDQUFDRixZQUFZakIsSUFBWixDQUFKLEVBQXNCO0FBQ2xCaUIsZ0NBQVlqQixJQUFaLElBQW9CLEVBQXBCO0FBQ0g7QUFDRGlCLDRCQUFZakIsSUFBWixFQUFrQnFCLElBQWxCLENBQXVCbEIsSUFBdkI7QUFDSCxhQVJEOztBQVVBLGlCQUFLbUIsUUFBTCxDQUFjO0FBQ1Y5QiwwQkFBVXlCO0FBREEsYUFBZDtBQUdIOzs7aUNBRVE7QUFDTCxnQkFBSSxDQUFDeEIsT0FBT0MsSUFBUCxDQUFZLEtBQUtrQixLQUFMLENBQVdwQixRQUF2QixFQUFpQ1UsTUFBdEMsRUFBOEM7QUFDMUMsdUJBQU8sc0RBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFDSTtBQUFBO0FBQUEsc0JBQVMsV0FBVSxTQUFuQjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFDSSxrQ0FBVSxLQUFLVSxLQUFMLENBQVdwQixRQUR6QjtBQUZKLGlCQURKO0FBT0g7QUFDSjs7Ozs7O2tCQUdVK0IsTzs7Ozs7Ozs7Ozs7Ozs7a0JDdkRTQyxPO0FBQVQsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLEdBQTFCLEVBQStCQyxJQUEvQixFQUFxQztBQUNoREYsYUFBU0EsT0FBT0csV0FBUCxFQUFUO0FBQ0FGLFVBQU0sK0JBQStCQSxHQUFyQzs7QUFFQSxRQUFJRCxXQUFXLEtBQWYsRUFBc0I7QUFDbEI7QUFDQUUsZUFBT0UsU0FBUDtBQUNILEtBSEQsTUFHTztBQUNIRixlQUFPQSxRQUFRRyxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FBZjtBQUNIOztBQUVELFdBQU9LLE1BQU1OLEdBQU4sRUFBVztBQUNkRDtBQURjLEtBQVgsRUFHRlosSUFIRSxDQUdHO0FBQUEsZUFBT0UsSUFBSWtCLElBQUosRUFBUDtBQUFBLEtBSEgsRUFJRkMsS0FKRSxDQUlJO0FBQUEsZUFBT0MsTUFBTSxVQUFOLENBQVA7QUFBQSxLQUpKLENBQVA7QUFLSDs7QUFFTSxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUNsQyxRQUFJWCxNQUFNVyx3QkFBc0JBLEtBQXRCLGVBQXVDLGFBQWpEO0FBQ0EsV0FBT2IsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07QUFJQSxJQUFNWSxnREFBb0IsU0FBcEJBLGlCQUFvQixDQUFDRCxLQUFELEVBQVc7QUFDeEMsUUFBSVgsTUFBTSxVQUFWLENBRHdDLENBQ2xCO0FBQ3RCQSxXQUFPVyxvQkFBa0JBLEtBQWxCLEdBQTRCLEVBQW5DO0FBQ0EsV0FBT2IsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSk07O0FBTUEsSUFBTWEsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxFQUFEO0FBQUEsV0FBUWhCLFFBQVEsS0FBUixFQUFlLFVBQVVnQixFQUF6QixDQUFSO0FBQUEsQ0FBcEI7QUFDQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNoQyxHQUFELEVBQVM7QUFDakMsUUFBSWlCLG9DQUFrQ2pCLEdBQWxDLE9BQUo7QUFDQSxXQUFPZSxRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0gsQ0FITTtBQUlBLElBQU1nQixnREFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxRQUFELEVBQWM7QUFDM0MsUUFBSWpCLHdDQUFzQ2lCLFFBQXRDLE9BQUo7QUFDQSxXQUFPbkIsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07QUFJQSxJQUFNa0IsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDeEMsS0FBRCxFQUFXO0FBQ3JDLFFBQUlzQiwrQkFBNkJ0QixLQUE3QixPQUFKO0FBQ0EsV0FBT29CLFFBQVEsS0FBUixFQUFlRSxHQUFmLENBQVA7QUFDSCxDQUhNOztBQUtBLElBQU1tQiwwQkFBUyxTQUFUQSxNQUFTO0FBQUEsV0FBTXJCLFFBQVEsS0FBUixFQUFlLEtBQWYsQ0FBTjtBQUFBLENBQWY7QUFDQSxJQUFNc0IsZ0NBQVksU0FBWkEsU0FBWSxDQUFDckMsR0FBRCxFQUFTO0FBQzlCLFFBQUlpQixvQ0FBa0NqQixHQUFsQyxlQUFKO0FBQ0EsV0FBT2UsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07O0FBS0EsSUFBTXFCLGdDQUFZLFNBQVpBLFNBQVksR0FBTTtBQUMzQixRQUFJckIsTUFBTSxjQUFWO0FBQ0EsV0FBT0YsUUFBUSxLQUFSLEVBQWVFLEdBQWYsQ0FBUDtBQUNILENBSE07QUFJQSxJQUFNc0Isd0NBQWdCLFNBQWhCQSxhQUFnQixHQUF5QztBQUFBLFFBQXZDQyxPQUF1Qyx1RUFBL0IsQ0FBK0I7QUFBQSxRQUE1QkMsV0FBNEIsdUVBQWhCLENBQWdCO0FBQUEsUUFBYmIsS0FBYSx1RUFBUCxDQUFPOztBQUNsRSxRQUFJYyxjQUFKO0FBQUEsUUFBVztBQUNQekIsZ0JBREo7O0FBR0l5QixZQUFRZCxTQUFTYSxjQUFjLENBQXZCLENBQVI7O0FBRUEsUUFBSUEsZUFBZUQsT0FBbkIsRUFBNEI7QUFDeEJ2Qiw4QkFBb0JXLEtBQXBCLGNBQWtDYyxLQUFsQztBQUNBLGVBQU8zQixRQUFRLEtBQVIsRUFBZUUsR0FBZixDQUFQO0FBQ0g7QUFDUixDQVZNLEMiLCJmaWxlIjoiNi5hMTU2ZS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY2xhc3MgQXJjaGl2ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyY2hpdmUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclBvc3RMaXN0KHRoaXMucHJvcHMudGltZUxpc3QpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICBfcmVuZGVyUG9zdExpc3QodGltZUxpc3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyDlhYjlr7nlr7nosaHlsZ7mgKfov5vooYzmjpLluo/vvIznhLblkI7pgY3ljobovpPlh7pcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGltZUxpc3QpLnNvcnQoKGEsYikgPT4gYi1hKS5tYXAoeWVhciA9PiB0aGlzLl9yZW5kZXJQb3N0TGlzdEJ5WWVhcih0aW1lTGlzdCwgeWVhcikgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyUG9zdExpc3RCeVllYXIodGltZUxpc3QsIHRpbWUpIHtcclxuICAgICAgICBpZihPYmplY3Qua2V5cyh0aW1lTGlzdCkubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHllYXIgPSB0aW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt5ZWFyfSBjbGFzc05hbWU9J2FyY2hpdmUtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYXJjaGl2ZS15ZWFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3llYXJ9IOW5tCAoe3RpbWVMaXN0W3llYXJdLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUxpc3RbeWVhcl0ubWFwKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Bwb3N0LyR7cG9zdFsnX2lkJ119YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Bvc3QtaW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NyZWF0ZWRBdCc+e3Bvc3QuY3JlYXRlZEF0LnNsaWNlKDAsMTApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGFncyc+5qCH562+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC50YWdzLmxlbmd0aCE9PTAgPyB0aGlzLl9yZW5kZXJUYWdzKHBvc3QudGFncykgOiAnICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgIF9yZW5kZXJUYWdzKHRhZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXt0YWd9IGNsYXNzTmFtZT1cImFydGljbGUtdGFnLWxpbmsgbm90ZWJvb2tcIiB0bz17YHRhZy8ke3RhZ30vYH0+e3RhZyArICcgICd9IDwvTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmNoaXZlTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdDVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvYWRpbmcuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBBcmNoaXZlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0FyY2hpdmVMaXN0LmpzeCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0TGlzdH0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XHJcblxyXG5jbGFzcyBBcmNoaXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpbWVMaXN0OiB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgZ2V0UG9zdExpc3QoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VGltZUxpc3QocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFRpbWVMaXN0KHBvc3RMaXN0KSB7XHJcbiAgICAgICAgbGV0IG5ld1RpbWVMaXN0ID0ge307XHJcblxyXG4gICAgICAgIHBvc3RMaXN0LmZvckVhY2gocG9zdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lQXJyID0gcG9zdFsnY3JlYXRlZEF0J10uc3BsaXQoXCItXCIsMik7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gdGltZUFyclswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFuZXdUaW1lTGlzdFt5ZWFyXSl7XHJcbiAgICAgICAgICAgICAgICBuZXdUaW1lTGlzdFt5ZWFyXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1RpbWVMaXN0W3llYXJdLnB1c2gocG9zdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0aW1lTGlzdDogbmV3VGltZUxpc3RcclxuICAgICAgICB9KTtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnRpbWVMaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYXJjaGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPuW9kuahozwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFyY2hpdmVMaXN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTGlzdD17dGhpcy5zdGF0ZS50aW1lTGlzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyY2hpdmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQXJjaGl2ZS5qc3giLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCAobWV0aG9kLCB1cmwsIGJvZHkpIHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9hcGkvJyArIHVybDtcclxuXHJcbiAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIC8vIGZldGNo55qER0VU5LiN5YWB6K645pyJYm9kee+8jOWPguaVsOWPquiDveaUvuWcqHVybOS4rVxyXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvZHkgPSBib2R5ICYmIEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2RcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gYWxlcnQoJ+aXoOazlei/nuaOpeacjeWKoeWZqC4nKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdCA9IChsaW1pdCkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGxpbWl0ID8gYHBvc3Q/bGltaXQ9JHtsaW1pdH0mc29ydD0xYCA6ICdwb3N0P3NvcnQ9MSc7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKVxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllc0xpc3QgPSAobGltaXQpID0+IHtcclxuICAgIGxldCB1cmwgPSAnY2F0ZWdvcnknOyAvL+aMieaXtumXtOWAkuW6j++8jOaWsC0+5penXHJcbiAgICB1cmwgKz0gbGltaXQgPyBgP2xpbWl0PSR7bGltaXR9YCA6ICcnO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlJZCA9IChpZCkgPT4gcmVxdWVzdCgnR0VUJywgJ3Bvc3QvJyArIGlkKTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeVRhZyA9ICh0YWcpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9jb25kaXRpb25zPXtcInRhZ3NcIjpcIiR7dGFnfVwifWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBsZXQgdXJsID0gYHBvc3Q/Y29uZGl0aW9ucz17XCJjYXRlZ29yeVwiOlwiJHtjYXRlZ29yeX1cIn1gO1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbGV0IHVybCA9IGBwb3N0P2xpa2U9e1widGl0bGVcIjpcIiR7dGl0bGV9XCJ9YDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhZyA9ICgpID0+IHJlcXVlc3QoJ0dFVCcsICd0YWcnKTtcclxuZXhwb3J0IGNvbnN0IGdldFRhZ051bSA9ICh0YWcpID0+IHtcclxuICAgIGxldCB1cmwgPSBgcG9zdD9jb25kaXRpb25zPXtcInRhZ3NcIjpcIiR7dGFnfVwifSZjb3VudD0xYDtcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50UG9zdCA9ICgpID0+IHtcclxuICAgIGxldCB1cmwgPSAncG9zdD9jb3VudD0xJztcclxuICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlQYWdlID0gKCBwYWdlTnVtPTAsIGN1cnJlbnRQYWdlPTEsIGxpbWl0PTIgKSA9PiB7XHJcbiAgICBsZXQgc3RhcnQsIC8vIOS7juesrOWHoOevh+aWh+eroOW8gOWni1xyXG4gICAgICAgIHVybDsgXHJcblxyXG4gICAgICAgIHN0YXJ0ID0gbGltaXQgKiAoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gcGFnZU51bSkge1xyXG4gICAgICAgICAgICB1cmwgPSBgcG9zdD9saW1pdD0ke2xpbWl0fSZza2lwPSR7c3RhcnR9JnNvcnQ9MWA7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG4gICAgICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9yZXF1ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==