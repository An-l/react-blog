webpackJsonp([1],{

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

/***/ "./components/CloudTie.jsx":
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

var _loader = __webpack_require__("./utils/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CloudTie: {
        displayName: 'CloudTie'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/CloudTie.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var CloudTie = _wrapComponent('CloudTie')(function (_Component) {
    _inherits(CloudTie, _Component);

    function CloudTie(props) {
        _classCallCheck(this, CloudTie);

        var _this = _possibleConstructorReturn(this, (CloudTie.__proto__ || Object.getPrototypeOf(CloudTie)).call(this, props));

        window.cloudTieConfig = {
            url: document.location.href,
            sourceId: _this.props.id || '',
            productKey: "9ed327c62b594bce9dfb566815c7d1d6",
            target: "cloud-tie-wrapper"
        };
        window.yunManualLoad = true;
        (0, _loader2.default)(window);
        Tie.loader("aHR0cHM6Ly9hcGkuZ2VudGllLjE2My5jb20vcGMvbGl2ZXNjcmlwdC5odG1s", true);
        return _this;
    }

    _createClass(CloudTie, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement('div', { id: 'cloud-tie-wrapper', className: 'cloud-tie-wrapper' });
        }
    }]);

    return CloudTie;
}(_react2.Component));

exports.default = CloudTie;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./components/Tools.jsx":
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
    Tools: {
        displayName: 'Tools'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/Tools.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var Tools = _wrapComponent('Tools')(function (_Component) {
    _inherits(Tools, _Component);

    function Tools() {
        _classCallCheck(this, Tools);

        return _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).apply(this, arguments));
    }

    _createClass(Tools, [{
        key: '_toTop',
        value: function _toTop(e) {
            e.preventDefault();
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function (fn) {
                    setTimeout(fn, 17);
                };
            }
            var doc = document.body.scrollTop ? document.body : document.documentElement;
            Math.easeout(doc.scrollTop, 0, 8, function (value) {
                doc.scrollTop = value;
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react3.default.createElement(
                'div',
                { className: 'tools-wrap' },
                _react3.default.createElement('a', { className: 'iconfont icon-totop', href: '#', title: '\u56DE\u5230\u9876\u90E8', onClick: this._toTop.bind(this) }),
                _react3.default.createElement('a', { className: 'iconfont icon-comment', href: '#cloud-tie-wrapper', title: '\u53BB\u8BC4\u8BBA' })
            );
        }
    }]);

    return Tools;
}(_react2.Component));

Math.easeout = function (A, B, rate, callback) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;

    var step = function step() {
        A = A + (B - A) / rate;
        if (A < 1) {
            callback(B, true);
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);
    };
    step();
};

exports.default = Tools;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/Post.jsx":
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

var _classnames = __webpack_require__("../node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = __webpack_require__("../node_modules/react-router/es/index.js");

var _CloudTie = __webpack_require__("./components/CloudTie.jsx");

var _CloudTie2 = _interopRequireDefault(_CloudTie);

var _Tools = __webpack_require__("./components/Tools.jsx");

var _Tools2 = _interopRequireDefault(_Tools);

var _Loading = __webpack_require__("./components/Loading.jsx");

var _Loading2 = _interopRequireDefault(_Loading);

var _request = __webpack_require__("./utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Post: {
        displayName: 'Post'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/Post.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}
// import Changyan from '../components/Changyan.jsx';


var Post = _wrapComponent('Post')(function (_Component) {
    _inherits(Post, _Component);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this.state = {
            post: {},
            tocAcitve: false,
            loading: true
        };

        _this._tocToggle = _this._tocToggle.bind(_this);
        _this._tocShow = _this._tocShow.bind(_this);
        _this._tocHide = _this._tocHide.bind(_this);
        return _this;
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // console.log(this.props.params);
            var id = this.props.params.id;
            (0, _request.getPostById)(id).then(function (res) {
                _this2.setState({
                    post: res,
                    loading: false
                });
                _this2.props.stopLoading();
            });

            window.onclick = function () {
                _this2._tocHide();
            };
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.onclick = null;
        }
    }, {
        key: '_tocToggle',
        value: function _tocToggle(e) {
            e.stopPropagation();
            this.setState({
                tocAcitve: !this.state.tocAcitve
            });
        }
    }, {
        key: '_tocHide',
        value: function _tocHide(e) {
            // debugger
            // e.stopPropagation();
            this.setState({
                tocAcitve: false
            });
        }
    }, {
        key: '_tocShow',
        value: function _tocShow(e) {
            e.stopPropagation();
            this.setState({
                tocAcitve: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var post = this.state.post;


            if (this.props.loading) {
                return _react3.default.createElement(_Loading2.default, null);
            } else {
                return this._renderPost(post);
            }
        }

        // 渲染Toc的无状态组件

    }, {
        key: '_renderToc',
        value: function _renderToc(post) {
            var tocDropdownClass = (0, _classnames2.default)(['post-toc-dropdown', { 'active': this.state.tocAcitve }]);
            var tocClass = (0, _classnames2.default)(['post-toc-content', { 'active': this.state.tocAcitve }]);
            return _react3.default.createElement(
                'div',
                { className: 'post-toc' },
                _react3.default.createElement(
                    'a',
                    { title: '\u76EE\u5F55', className: tocDropdownClass },
                    _react3.default.createElement('i', { className: 'iconfont icon-category', onClick: this._tocToggle })
                ),
                _react3.default.createElement('div', { id: 'toc', className: tocClass,
                    onClick: this._tocShow,
                    dangerouslySetInnerHTML: { __html: post.toc } })
            );
        }

        // 渲染文章content的无状态组件

    }, {
        key: '_renderContent',
        value: function _renderContent(_ref) {
            var _ref$content = _ref.content,
                content = _ref$content === undefined ? '' : _ref$content;

            return _react3.default.createElement('div', { className: 'post-content',
                dangerouslySetInnerHTML: { __html: content } });
        }
    }, {
        key: '_renderTags',
        value: function _renderTags() {
            var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return tags.map(function (tag) {
                return _react3.default.createElement(
                    _reactRouter.Link,
                    { to: 'tag/' + tag, key: tag },
                    _react3.default.createElement(
                        'code',
                        { className: 'notebook' },
                        tag
                    ),
                    '\xA0'
                );
            });
        }
    }, {
        key: '_renderPost',
        value: function _renderPost(post) {
            return _react3.default.createElement(
                'section',
                { className: 'post' },
                _react3.default.createElement(
                    'header',
                    null,
                    _react3.default.createElement(
                        'div',
                        { className: 'post-meta' },
                        _react3.default.createElement(
                            'div',
                            { className: 'date' },
                            post.createdAt
                        )
                    ),
                    _react3.default.createElement(
                        'h1',
                        { className: 'post-title' },
                        post.title
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'post-info' },
                        _react3.default.createElement(
                            'p',
                            null,
                            '\u6DFB\u52A0\u5728\u5206\u7C7B\u300C',
                            _react3.default.createElement(
                                _reactRouter.Link,
                                { to: 'category/' + post.category },
                                _react3.default.createElement(
                                    'code',
                                    { className: 'notebook' },
                                    post.category
                                ),
                                '\xA0'
                            ),
                            '\u300D\u4E0B \uFF0C\u5E76\u88AB\u6DFB\u52A0\u300C',
                            this._renderTags(post.tags),
                            '\u300D\u6807\u7B7E \uFF0C\u6700\u540E\u4FEE\u6539\u4E8E',
                            _react3.default.createElement(
                                'i',
                                null,
                                post.updatedAt
                            )
                        )
                    )
                ),
                _react3.default.createElement(
                    'div',
                    { className: 'post-content' },
                    post.toc !== "" ? this._renderToc(post) : '',
                    post.content !== "" ? this._renderContent(post) : ''
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    '-- END --'
                ),
                _react3.default.createElement(_Tools2.default, null),
                _react3.default.createElement(_CloudTie2.default, { id: post['_id'] })
            );
        }
    }]);

    return Post;
}(_react2.Component));

exports.default = Post;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./utils/loader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loader;
function loader(e) {
	function t(e, t) {
		var n = document.createElement("script");
		return n.src = e, n.async = !1, n.charset = "utf-8", t ? l.appendChild(n) : h.appendChild(n), n;
	}

	function n(e, t) {
		var n = document.createElement("link");
		return n.rel = "stylesheet", n.type = "text/css", n.href = e, t ? l.appendChild(n) : h.appendChild(n), n;
	}

	function a(e) {
		if (!u) {
			for (var a, i = 0, r = e.length; i < r; i++) {
				a = e[i], d.test(a) && t(a, !1), c.test(a) && n(a, !1);
			}l.appendChild(h), u = !0;
		}
	}

	function i(e) {
		var t,
		    n,
		    a,
		    i,
		    r,
		    o,
		    d,
		    c = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
		for (o = e.length, r = 0, d = ""; r < o;) {
			do {
				t = c[255 & e.charCodeAt(r++)];
			} while (r < o && t == -1);
			if (t == -1) break;
			do {
				n = c[255 & e.charCodeAt(r++)];
			} while (r < o && n == -1);
			if (n == -1) break;
			d += String.fromCharCode(t << 2 | (48 & n) >> 4);
			do {
				if (a = 255 & e.charCodeAt(r++), 61 == a) return d;
				a = c[a];
			} while (r < o && a == -1);
			if (a == -1) break;
			d += String.fromCharCode((15 & n) << 4 | (60 & a) >> 2);
			do {
				if (i = 255 & e.charCodeAt(r++), 61 == i) return d;
				i = c[i];
			} while (r < o && i == -1);
			if (i == -1) break;
			d += String.fromCharCode((3 & a) << 6 | i);
		}
		return d;
	}

	function r(e, n) {
		var r;
		e = n ? i(e) : e, r = t(e, !0), r.onload = r.onreadystatechange = function () {
			this.readyState && "loaded" != this.readyState && "complete" != this.readyState || a(window.ne_cloud_files);
		}, r.onerror = function () {};
	}

	function o() {
		var e = navigator.userAgent.toLowerCase(),
		    t = "ipad" == e.match(/ipad/i),
		    n = "iphone os" == e.match(/iphone os/i),
		    a = "midp" == e.match(/midp/i),
		    i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
		    r = "ucweb" == e.match(/ucweb/i),
		    o = "android" == e.match(/android/i),
		    d = "windows ce" == e.match(/windows ce/i),
		    c = "windows mobile" == e.match(/windows mobile/i);
		return t || n || a || i || r || o || d || c;
	}
	var d = /\.js$/,
	    c = /\.css$/,
	    h = document.createDocumentFragment(),
	    u = !1,
	    l = document.head || document.getElementsByTagName("head")[0];
	window.yunManualLoad || window.yunModuleEnv || (o() ? r("aHR0cHM6Ly9hcGkuZ2VudGllLjE2My5jb20vbW9iaWxlL2xpdmVzY3JpcHQuaHRtbA==", !0) : r("aHR0cHM6Ly9hcGkuZ2VudGllLjE2My5jb20vcGMvbGl2ZXNjcmlwdC5odG1s", !0)), e.Tie = e.Tie || {}, e.Tie.loader = r;
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vfi9jbGFzc25hbWVzL2luZGV4LmpzP2RmMTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DbG91ZFRpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub29scy5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdC5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbG9hZGVyLmpzIl0sIm5hbWVzIjpbInByb3BzIiwid2luZG93IiwiY2xvdWRUaWVDb25maWciLCJ1cmwiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInNvdXJjZUlkIiwiaWQiLCJwcm9kdWN0S2V5IiwidGFyZ2V0IiwieXVuTWFudWFsTG9hZCIsIlRpZSIsImxvYWRlciIsIkNsb3VkVGllIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0IiwiZG9jIiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsIk1hdGgiLCJlYXNlb3V0IiwidmFsdWUiLCJfdG9Ub3AiLCJiaW5kIiwiQSIsIkIiLCJyYXRlIiwiY2FsbGJhY2siLCJzdGVwIiwiVG9vbHMiLCJzdGF0ZSIsInBvc3QiLCJ0b2NBY2l0dmUiLCJsb2FkaW5nIiwiX3RvY1RvZ2dsZSIsIl90b2NTaG93IiwiX3RvY0hpZGUiLCJwYXJhbXMiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJzdG9wTG9hZGluZyIsIm9uY2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJfcmVuZGVyUG9zdCIsInRvY0Ryb3Bkb3duQ2xhc3MiLCJ0b2NDbGFzcyIsIl9faHRtbCIsInRvYyIsImNvbnRlbnQiLCJ0YWdzIiwibWFwIiwidGFnIiwiY3JlYXRlZEF0IiwidGl0bGUiLCJjYXRlZ29yeSIsIl9yZW5kZXJUYWdzIiwidXBkYXRlZEF0IiwiX3JlbmRlclRvYyIsIl9yZW5kZXJDb250ZW50IiwiUG9zdCIsInQiLCJuIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiY2hhcnNldCIsImwiLCJhcHBlbmRDaGlsZCIsImgiLCJyZWwiLCJ0eXBlIiwiYSIsInUiLCJpIiwiciIsImxlbmd0aCIsImQiLCJ0ZXN0IiwiYyIsIm8iLCJBcnJheSIsImNoYXJDb2RlQXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJvbmxvYWQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwibmVfY2xvdWRfZmlsZXMiLCJvbmVycm9yIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ5dW5Nb2R1bGVFbnYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQUE7QUFDSCxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSSxzQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNUQSxLQURTOztBQUdkQyxlQUFPQyxjQUFQLEdBQXdCO0FBQ3JCQyxpQkFBS0MsU0FBU0MsUUFBVCxDQUFrQkMsSUFERjtBQUVyQkMsc0JBQVUsTUFBS1AsS0FBTCxDQUFXUSxFQUFYLElBQWlCLEVBRk47QUFHckJDLHdCQUFZLGtDQUhTO0FBSXJCQyxvQkFBUTtBQUphLFNBQXhCO0FBTURULGVBQU9VLGFBQVAsR0FB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QSxNQVFDZCxJQUFJLG9CQUFvQnJFLEVBQUVtRixLQUFGLENBQVEsaUJBQVIsQ0FSekI7QUFTQSxTQUFPaEMsS0FBS0MsQ0FBTCxJQUFVVSxDQUFWLElBQWVFLENBQWYsSUFBb0JDLENBQXBCLElBQXlCSyxDQUF6QixJQUE4QkgsQ0FBOUIsSUFBbUNFLENBQTFDO0FBQ0E7QUFDRCxLQUFJRixJQUFJLE9BQVI7QUFBQSxLQUNDRSxJQUFJLFFBREw7QUFBQSxLQUVDVixJQUFJdEUsU0FBUytGLHNCQUFULEVBRkw7QUFBQSxLQUdDckIsSUFBSSxDQUFDLENBSE47QUFBQSxLQUlDTixJQUFJcEUsU0FBU2dHLElBQVQsSUFBaUJoRyxTQUFTaUcsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FKdEI7QUFLQXBHLFFBQU9VLGFBQVAsSUFBd0JWLE9BQU9xRyxZQUEvQixLQUFnRGpCLE1BQU1MLEVBQUUsc0VBQUYsRUFBMEUsQ0FBQyxDQUEzRSxDQUFOLEdBQXNGQSxFQUFFLDhEQUFGLEVBQWtFLENBQUMsQ0FBbkUsQ0FBdEksR0FDSWpFLEVBQUVILEdBQUYsR0FBUUcsRUFBRUgsR0FBRixJQUFTLEVBRHJCLEVBRUlHLEVBQUVILEdBQUYsQ0FBTUMsTUFBTixHQUFlbUUsQ0FGbkI7QUFHQSxDIiwiZmlsZSI6IjEuM2U0YTUuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG9hZGVyIGZyb20gJy4uL3V0aWxzL2xvYWRlci5qcyc7XHJcblxyXG5jbGFzcyBDbG91ZFRpZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgIHdpbmRvdy5jbG91ZFRpZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCBcclxuICAgICAgICAgICAgc291cmNlSWQ6IHRoaXMucHJvcHMuaWQgfHwgJycsXHJcbiAgICAgICAgICAgIHByb2R1Y3RLZXk6IFwiOWVkMzI3YzYyYjU5NGJjZTlkZmI1NjY4MTVjN2QxZDZcIixcclxuICAgICAgICAgICAgdGFyZ2V0OiBcImNsb3VkLXRpZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cueXVuTWFudWFsTG9hZCA9IHRydWU7XHJcbiAgICAgICAgbG9hZGVyKHdpbmRvdyk7XHJcbiAgICAgICAgVGllLmxvYWRlcihcImFIUjBjSE02THk5aGNHa3VaMlZ1ZEdsbExqRTJNeTVqYjIwdmNHTXZiR2wyWlhOamNtbHdkQzVvZEcxc1wiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG91ZC10aWUtd3JhcHBlclwiIGNsYXNzTmFtZT1cImNsb3VkLXRpZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvdWRUaWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DbG91ZFRpZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVG9vbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgX3RvVG9wKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbikge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmbiwgMTcpO1xyXG4gICAgICAgICAgICB9O1x0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcD8gZG9jdW1lbnQuYm9keSA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICBNYXRoLmVhc2VvdXQoZG9jLnNjcm9sbFRvcCwgMCwgOCwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvYy5zY3JvbGxUb3AgPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b29scy13cmFwJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25mb250IGljb24tdG90b3BcIiBocmVmPVwiI1wiIHRpdGxlPVwi5Zue5Yiw6aG26YOoXCIgb25DbGljaz17dGhpcy5fdG9Ub3AuYmluZCh0aGlzKX0+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbmZvbnQgaWNvbi1jb21tZW50XCIgaHJlZj1cIiNjbG91ZC10aWUtd3JhcHBlclwiIHRpdGxlPVwi5Y676K+E6K66XCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYXRoLmVhc2VvdXQgPSBmdW5jdGlvbiAoQSwgQiwgcmF0ZSwgY2FsbGJhY2spIHtcclxuICAgIGlmIChBID09IEIgfHwgdHlwZW9mIEEgIT0gJ251bWJlcicpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBCID0gQiB8fCAwO1xyXG4gICAgcmF0ZSA9IHJhdGUgfHwgMjtcclxuICAgIFxyXG4gICAgbGV0IHN0ZXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQSA9IEEgKyAoQiAtIEEpIC8gcmF0ZTtcclxuICAgICAgICBpZiAoQSA8IDEpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soQiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2soQSwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH1cclxuICAgIHN0ZXAoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ub29scy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbi8vIGltcG9ydCBDaGFuZ3lhbiBmcm9tICcuLi9jb21wb25lbnRzL0NoYW5neWFuLmpzeCc7XHJcbmltcG9ydCBDbG91ZFRpZSBmcm9tICcuLi9jb21wb25lbnRzL0Nsb3VkVGllLmpzeCc7XHJcbmltcG9ydCBUb29scyBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xzLmpzeCc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZy5qc3gnO1xyXG5cclxuaW1wb3J0IHsgZ2V0UG9zdEJ5SWQgfSBmcm9tICcuLi91dGlscy9yZXF1ZXN0JztcclxuXHJcbmNsYXNzIFBvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9zdDp7fSxcclxuICAgICAgICAgICAgdG9jQWNpdHZlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX3RvY1RvZ2dsZSA9IHRoaXMuX3RvY1RvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3RvY1Nob3cgPSB0aGlzLl90b2NTaG93LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fdG9jSGlkZSA9IHRoaXMuX3RvY0hpZGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBhcmFtcyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XHJcbiAgICAgICAgZ2V0UG9zdEJ5SWQoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0OiByZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgICAgICAgdGhpcy5fdG9jSGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBfdG9jVG9nZ2xlKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRvY0FjaXR2ZTogIXRoaXMuc3RhdGUudG9jQWNpdHZlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvY0hpZGUoZSkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdG9jQWNpdHZlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2NTaG93KGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0b2NBY2l0dmU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Bvc3R9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyUG9zdChwb3N0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgIC8vIOa4suafk1RvY+eahOaXoOeKtuaAgee7hOS7tlxyXG4gICAgX3JlbmRlclRvYyAocG9zdCkge1xyXG4gICAgICAgIGNvbnN0IHRvY0Ryb3Bkb3duQ2xhc3MgPSBjbGFzc25hbWVzKFsncG9zdC10b2MtZHJvcGRvd24nLCB7J2FjdGl2ZSc6IHRoaXMuc3RhdGUudG9jQWNpdHZlfV0pXHJcbiAgICAgICAgY29uc3QgdG9jQ2xhc3MgPSBjbGFzc25hbWVzKFsncG9zdC10b2MtY29udGVudCcsIHsnYWN0aXZlJzogdGhpcy5zdGF0ZS50b2NBY2l0dmV9XSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zdC10b2MnID5cclxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwi55uu5b2VXCIgY2xhc3NOYW1lPXt0b2NEcm9wZG93bkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udCBpY29uLWNhdGVnb3J5XCIgb25DbGljaz17dGhpcy5fdG9jVG9nZ2xlfT48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidG9jXCIgY2xhc3NOYW1lPXt0b2NDbGFzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2NTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LnRvY319PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAgLy8g5riy5p+T5paH56ugY29udGVudOeahOaXoOeKtuaAgee7hOS7tlxyXG4gICAgX3JlbmRlckNvbnRlbnQgKHsgY29udGVudD0nJyB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgX3JlbmRlclRhZ3MgKCB0YWdzPVtdICkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRhZ3MubWFwKHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgdGFnLyR7dGFnfWB9IGtleT17dGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibm90ZWJvb2tcIj57dGFnfTwvY29kZT4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIF9yZW5kZXJQb3N0KHBvc3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPntwb3N0LmNyZWF0ZWRBdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDmt7vliqDlnKjliIbnsbvjgIxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgY2F0ZWdvcnkvJHtwb3N0LmNhdGVnb3J5fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJub3RlYm9va1wiPntwb3N0LmNhdGVnb3J5fTwvY29kZT4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDjgI3kuIsg77yM5bm26KKr5re75Yqg44CMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyVGFncyhwb3N0LnRhZ3MpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg44CN5qCH562+IO+8jOacgOWQjuS/ruaUueS6jiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPntwb3N0LnVwZGF0ZWRBdH08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zdC50b2MgIT09IFwiXCIgPyB0aGlzLl9yZW5kZXJUb2MocG9zdCkgOiAnJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0LmNvbnRlbnQgIT09IFwiXCIgPyB0aGlzLl9yZW5kZXJDb250ZW50KHBvc3QpIDogJycgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+LS0gRU5EIC0tPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8VG9vbHMgLz5cclxuICAgICAgICAgICAgICAgIDxDbG91ZFRpZSBpZD17cG9zdFsnX2lkJ119Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Qb3N0LmpzeCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRlcihlKSB7XHJcblx0ZnVuY3Rpb24gdChlLCB0KSB7XHJcblx0XHR2YXIgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRyZXR1cm4gbi5zcmMgPSBlLCBuLmFzeW5jID0gITEsIG4uY2hhcnNldCA9IFwidXRmLThcIiwgdCA/IGwuYXBwZW5kQ2hpbGQobikgOiBoLmFwcGVuZENoaWxkKG4pLCBuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuKGUsIHQpIHtcclxuXHRcdHZhciBuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0XHRyZXR1cm4gbi5yZWwgPSBcInN0eWxlc2hlZXRcIiwgbi50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBuLmhyZWYgPSBlLCB0ID8gbC5hcHBlbmRDaGlsZChuKSA6IGguYXBwZW5kQ2hpbGQobiksIG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGEoZSkge1xyXG5cdFx0aWYgKCF1KSB7XHJcblx0XHRcdGZvciAodmFyIGEsIGkgPSAwLCByID0gZS5sZW5ndGg7IGkgPCByOyBpKyspIGEgPSBlW2ldLCBkLnRlc3QoYSkgJiYgdChhLCAhMSksIGMudGVzdChhKSAmJiBuKGEsICExKTtcclxuXHRcdFx0bC5hcHBlbmRDaGlsZChoKSwgdSA9ICEwXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKGUpIHtcclxuXHRcdHZhciB0LCBuLCBhLCBpLCByLCBvLCBkLCBjID0gbmV3IEFycmF5KCgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksIDYyLCAoLTEpLCAoLTEpLCAoLTEpLCA2MywgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNTgsIDU5LCA2MCwgNjEsICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksICgtMSksIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAoLTEpLCAoLTEpLCAoLTEpLCAoLTEpLCAoLTEpLCAoLTEpLCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsICgtMSksICgtMSksICgtMSksICgtMSksICgtMSkpO1xyXG5cdFx0Zm9yIChvID0gZS5sZW5ndGgsIHIgPSAwLCBkID0gXCJcIjsgciA8IG87KSB7XHJcblx0XHRcdGRvIHQgPSBjWzI1NSAmIGUuY2hhckNvZGVBdChyKyspXTtcclxuXHRcdFx0d2hpbGUgKHIgPCBvICYmIHQgPT0gLTEpO1xyXG5cdFx0XHRpZiAodCA9PSAtMSkgYnJlYWs7XHJcblx0XHRcdGRvIG4gPSBjWzI1NSAmIGUuY2hhckNvZGVBdChyKyspXTtcclxuXHRcdFx0d2hpbGUgKHIgPCBvICYmIG4gPT0gLTEpO1xyXG5cdFx0XHRpZiAobiA9PSAtMSkgYnJlYWs7XHJcblx0XHRcdGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0IDw8IDIgfCAoNDggJiBuKSA+PiA0KTtcclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdGlmIChhID0gMjU1ICYgZS5jaGFyQ29kZUF0KHIrKyksIDYxID09IGEpIHJldHVybiBkO1xyXG5cdFx0XHRcdGEgPSBjW2FdXHJcblx0XHRcdH0gd2hpbGUgKHIgPCBvICYmIGEgPT0gLTEpO1xyXG5cdFx0XHRpZiAoYSA9PSAtMSkgYnJlYWs7XHJcblx0XHRcdGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoMTUgJiBuKSA8PCA0IHwgKDYwICYgYSkgPj4gMik7XHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHRpZiAoaSA9IDI1NSAmIGUuY2hhckNvZGVBdChyKyspLCA2MSA9PSBpKSByZXR1cm4gZDtcclxuXHRcdFx0XHRpID0gY1tpXVxyXG5cdFx0XHR9IHdoaWxlIChyIDwgbyAmJiBpID09IC0xKTtcclxuXHRcdFx0aWYgKGkgPT0gLTEpIGJyZWFrO1xyXG5cdFx0XHRkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKDMgJiBhKSA8PCA2IHwgaSlcclxuXHRcdH1cclxuXHRcdHJldHVybiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByKGUsIG4pIHtcclxuXHRcdHZhciByO1xyXG5cdFx0ICAgIGUgPSBuID8gaShlKSA6IGUsIHIgPSB0KGUsICEwKSwgXHJcbiAgICAgICAgICAgIHIub25sb2FkID0gci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSAmJiBcImxvYWRlZFwiICE9IHRoaXMucmVhZHlTdGF0ZSAmJiBcImNvbXBsZXRlXCIgIT0gdGhpcy5yZWFkeVN0YXRlIHx8IGEod2luZG93Lm5lX2Nsb3VkX2ZpbGVzKVxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgci5vbmVycm9yID0gZnVuY3Rpb24oKSB7fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbygpIHtcclxuXHRcdHZhciBlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHR0ID0gXCJpcGFkXCIgPT0gZS5tYXRjaCgvaXBhZC9pKSxcclxuXHRcdFx0biA9IFwiaXBob25lIG9zXCIgPT0gZS5tYXRjaCgvaXBob25lIG9zL2kpLFxyXG5cdFx0XHRhID0gXCJtaWRwXCIgPT0gZS5tYXRjaCgvbWlkcC9pKSxcclxuXHRcdFx0aSA9IFwicnY6MS4yLjMuNFwiID09IGUubWF0Y2goL3J2OjEuMi4zLjQvaSksXHJcblx0XHRcdHIgPSBcInVjd2ViXCIgPT0gZS5tYXRjaCgvdWN3ZWIvaSksXHJcblx0XHRcdG8gPSBcImFuZHJvaWRcIiA9PSBlLm1hdGNoKC9hbmRyb2lkL2kpLFxyXG5cdFx0XHRkID0gXCJ3aW5kb3dzIGNlXCIgPT0gZS5tYXRjaCgvd2luZG93cyBjZS9pKSxcclxuXHRcdFx0YyA9IFwid2luZG93cyBtb2JpbGVcIiA9PSBlLm1hdGNoKC93aW5kb3dzIG1vYmlsZS9pKTtcclxuXHRcdHJldHVybiB0IHx8IG4gfHwgYSB8fCBpIHx8IHIgfHwgbyB8fCBkIHx8IGNcclxuXHR9XHJcblx0dmFyIGQgPSAvXFwuanMkLyxcclxuXHRcdGMgPSAvXFwuY3NzJC8sXHJcblx0XHRoID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0dSA9ICExLFxyXG5cdFx0bCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdHdpbmRvdy55dW5NYW51YWxMb2FkIHx8IHdpbmRvdy55dW5Nb2R1bGVFbnYgfHwgKG8oKSA/IHIoXCJhSFIwY0hNNkx5OWhjR2t1WjJWdWRHbGxMakUyTXk1amIyMHZiVzlpYVd4bEwyeHBkbVZ6WTNKcGNIUXVhSFJ0YkE9PVwiLCAhMCkgOiByKFwiYUhSMGNITTZMeTloY0drdVoyVnVkR2xsTGpFMk15NWpiMjB2Y0dNdmJHbDJaWE5qY21sd2RDNW9kRzFzXCIsICEwKSksXHJcbiAgICAgZS5UaWUgPSBlLlRpZSB8fCB7fSwgXHJcbiAgICAgZS5UaWUubG9hZGVyID0gclxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvbG9hZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==