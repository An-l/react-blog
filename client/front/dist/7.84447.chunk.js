webpackJsonp([7],{

/***/ "./components/Animations.jsx":
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Rodal: {
        displayName: 'Rodal'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/components/Animations.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

// env
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;

var Dialog = function Dialog(props) {

    var className = 'rodal-dialog rodal-' + props.animation + '-' + props.animationType;
    var CloseButton = props.showCloseButton ? _react3.default.createElement('span', { className: 'rodal-close', onClick: props.onClose }) : null;
    var width = props.width,
        height = props.height,
        measure = props.measure,
        duration = props.duration,
        customStyles = props.customStyles;

    var style = {
        width: width + measure,
        height: height + measure,
        animationDuration: duration + 'ms',
        WebkitAnimationDuration: duration + 'ms'
    };

    var mergedStyles = Object.assign(style, customStyles);

    return _react3.default.createElement(
        'div',
        { style: mergedStyles, className: className },
        CloseButton,
        props.children
    );
};

var Rodal = _wrapComponent('Rodal')((_temp = _class = function (_Component) {
    _inherits(Rodal, _Component);

    function Rodal(props) {
        _classCallCheck(this, Rodal);

        var _this = _possibleConstructorReturn(this, (Rodal.__proto__ || Object.getPrototypeOf(Rodal)).call(this, props));

        _this.handleanimationEnd = _this.handleanimationEnd.bind(_this);
        _this.state = {
            isShow: false,
            animationType: 'leave'
        };
        return _this;
    }

    _createClass(Rodal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this._enter();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.visible && nextProps.visible) {
                this._enter();
            } else if (this.props.visible && !nextProps.visible) {
                this._leave();
            }
        }
    }, {
        key: '_enter',
        value: function _enter() {
            this.setState({
                isShow: true,
                animationType: '_enter'
            });
        }
    }, {
        key: '_leave',
        value: function _leave() {
            var state = isIE9 ? { isShow: false } : { animationType: 'leave' };
            this.setState(state);
        }
    }, {
        key: 'handleanimationEnd',
        value: function handleanimationEnd() {
            if (this.state.animationType === 'leave') {
                this.setState({ isShow: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;

            var mask = props.showMask ? _react3.default.createElement('div', { className: 'rodal-mask', style: props.customMaskStyles, onClick: props.onClose }) : null;
            var style = {
                display: state.isShow ? '' : 'none',
                WebkitAnimationDuration: props.duration + 'ms',
                animationDuration: props.duration + 'ms'
            };

            return _react3.default.createElement(
                'div',
                { style: style,
                    className: "rodal rodal-fade-" + state.animationType + ' ' + props.className,
                    onAnimationEnd: this.handleanimationEnd
                },
                mask,
                _react3.default.createElement(
                    Dialog,
                    _extends({}, props, { animationType: state.animationType }),
                    props.children
                )
            );
        }
    }]);

    return Rodal;
}(_react2.Component), _class.propTypes = {
    width: _react2.PropTypes.number,
    height: _react2.PropTypes.number,
    measure: _react2.PropTypes.string,
    visible: _react2.PropTypes.bool,
    showMask: _react2.PropTypes.bool,
    showCloseButton: _react2.PropTypes.bool,
    animation: _react2.PropTypes.string,
    duration: _react2.PropTypes.number,
    className: _react2.PropTypes.string,
    customStyles: _react2.PropTypes.object,
    customMaskStyles: _react2.PropTypes.object,
    onClose: _react2.PropTypes.func.isRequired
}, _class.defaultProps = {
    width: 400,
    height: 240,
    measure: 'px',
    visible: false,
    showMask: true,
    showCloseButton: true,
    animation: 'zoom',
    duration: 300,
    className: '',
    customStyles: {},
    customMaskStyles: {}
}, _temp));

exports.default = Rodal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/About.jsx":
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

var _Animations = __webpack_require__("./components/Animations.jsx");

var _Animations2 = _interopRequireDefault(_Animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    About: {
        displayName: 'About'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'C:/Users/li/Desktop/test/react/blog/client/front/src/pages/About.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var About = _wrapComponent('About')(function (_Component) {
    _inherits(About, _Component);

    function About(props) {
        _classCallCheck(this, About);

        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

        _this.state = {
            visible: false,
            animation: 'door'
        };
        return _this;
    }

    _createClass(About, [{
        key: 'show',
        value: function show(animation) {
            this.setState({
                animation: animation,
                visible: true
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({
                visible: false
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react3.default.createElement(
                'section',
                { className: 'about' },
                _react3.default.createElement(
                    'h2',
                    { className: 'title' },
                    '\u5173\u4E8E'
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    '\u5927\u56DB\u72D7\u4E00\u679A...'
                ),
                _react3.default.createElement(
                    'button',
                    { className: 'btn scale', onClick: this.show.bind(this, 'door') },
                    'show'
                ),
                _react3.default.createElement(
                    _Animations2.default,
                    { visible: this.state.visible,
                        onClose: this.hide.bind(this),
                        animation: this.state.animation },
                    _react3.default.createElement(
                        'div',
                        { className: 'header' },
                        'Rodal'
                    ),
                    _react3.default.createElement(
                        'div',
                        { className: 'body' },
                        'A React modal with animations.'
                    ),
                    _react3.default.createElement(
                        'button',
                        { className: 'rodal-confirm-btn', onClick: this.hide.bind(this) },
                        'ok'
                    ),
                    _react3.default.createElement(
                        'button',
                        { className: 'rodal-cancel-btn', onClick: this.hide.bind(this) },
                        'close'
                    )
                )
            );
        }
    }]);

    return About;
}(_react2.Component));

exports.default = About;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJpbkJyb3dzZXIiLCJ3aW5kb3ciLCJVQSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaXNJRTkiLCJpbmRleE9mIiwiRGlhbG9nIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJhbmltYXRpb24iLCJhbmltYXRpb25UeXBlIiwiQ2xvc2VCdXR0b24iLCJzaG93Q2xvc2VCdXR0b24iLCJvbkNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJtZWFzdXJlIiwiZHVyYXRpb24iLCJjdXN0b21TdHlsZXMiLCJzdHlsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiV2Via2l0QW5pbWF0aW9uRHVyYXRpb24iLCJtZXJnZWRTdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjaGlsZHJlbiIsImhhbmRsZWFuaW1hdGlvbkVuZCIsImJpbmQiLCJzdGF0ZSIsImlzU2hvdyIsInZpc2libGUiLCJfZW50ZXIiLCJuZXh0UHJvcHMiLCJfbGVhdmUiLCJzZXRTdGF0ZSIsIm1hc2siLCJzaG93TWFzayIsImN1c3RvbU1hc2tTdHlsZXMiLCJkaXNwbGF5IiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiUm9kYWwiLCJzaG93IiwiaGlkZSIsIkFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0EsSUFBTUEsWUFBWSxPQUFPQyxNQUFQLEtBQWtCLFdBQXBDO0FBQ0EsSUFBTUMsS0FBS0YsYUFBYUMsT0FBT0UsU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkJDLFdBQTNCLEVBQXhCO0FBQ0EsSUFBTUMsUUFBUUosTUFBTUEsR0FBR0ssT0FB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O0FBQUE7QUFBQTtBQU5KO0FBTkosYUFESjtBQWlCSDs7Ozs7O2tCQUdVdUIsSyIsImZpbGUiOiI3Ljg0NDQ3LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG4vLyBlbnZcclxuY29uc3QgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmNvbnN0IGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XHJcblxyXG5jb25zdCBEaWFsb2cgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHJvZGFsLWRpYWxvZyByb2RhbC0ke3Byb3BzLmFuaW1hdGlvbn0tJHtwcm9wcy5hbmltYXRpb25UeXBlfWA7XHJcbiAgICBjb25zdCBDbG9zZUJ1dHRvbiA9IHByb3BzLnNob3dDbG9zZUJ1dHRvbiA/IDxzcGFuIGNsYXNzTmFtZT1cInJvZGFsLWNsb3NlXCIgb25DbGljaz17cHJvcHMub25DbG9zZX0gLz4gOiBudWxsO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBtZWFzdXJlLCBkdXJhdGlvbiwgY3VzdG9tU3R5bGVzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgICAgICAgICAgIDogd2lkdGggKyBtZWFzdXJlLFxyXG4gICAgICAgIGhlaWdodCAgICAgICAgICAgICAgICAgIDogaGVpZ2h0ICsgbWVhc3VyZSxcclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbiAgICAgICA6IGR1cmF0aW9uICsgJ21zJyxcclxuICAgICAgICBXZWJraXRBbmltYXRpb25EdXJhdGlvbiA6IGR1cmF0aW9uICsgJ21zJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtZXJnZWRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBjdXN0b21TdHlsZXMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXttZXJnZWRTdHlsZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge0Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5jbGFzcyBSb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGhlaWdodCAgICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIG1lYXN1cmUgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHZpc2libGUgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBzaG93TWFzayAgICAgICAgIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uICA6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIGFuaW1hdGlvbiAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGR1cmF0aW9uICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGNsYXNzTmFtZSAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGN1c3RvbVN0eWxlcyAgICAgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGN1c3RvbU1hc2tTdHlsZXMgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIG9uQ2xvc2UgICAgICAgICAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgd2lkdGggICAgICAgICAgICA6IDQwMCxcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgIDogMjQwLFxyXG4gICAgICAgIG1lYXN1cmUgICAgICAgICAgOiAncHgnLFxyXG4gICAgICAgIHZpc2libGUgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICBzaG93TWFzayAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b24gIDogdHJ1ZSxcclxuICAgICAgICBhbmltYXRpb24gICAgICAgIDogJ3pvb20nLFxyXG4gICAgICAgIGR1cmF0aW9uICAgICAgICAgOiAzMDAsXHJcbiAgICAgICAgY2xhc3NOYW1lICAgICAgICA6ICcnLFxyXG4gICAgICAgIGN1c3RvbVN0eWxlcyAgICAgOiB7fSxcclxuICAgICAgICBjdXN0b21NYXNrU3R5bGVzIDoge30sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZWFuaW1hdGlvbkVuZCA9IHRoaXMuaGFuZGxlYW5pbWF0aW9uRW5kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uVHlwZTogJ2xlYXZlJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy52aXNpYmxlICYmIG5leHRQcm9wcy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VudGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnZpc2libGUgJiYgIW5leHRQcm9wcy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xlYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9lbnRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNTaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25UeXBlOiAnX2VudGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9sZWF2ZSgpIHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGlzSUU5IFxyXG4gICAgICAgICAgICA/IHsgaXNTaG93OiBmYWxzZSB9IFxyXG4gICAgICAgICAgICA6IHsgYW5pbWF0aW9uVHlwZTogJ2xlYXZlJyB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlYW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFuaW1hdGlvblR5cGUgPT09ICdsZWF2ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb3BzLCBzdGF0ZSB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBtYXNrID0gcHJvcHMuc2hvd01hc2sgPyA8ZGl2IGNsYXNzTmFtZT1cInJvZGFsLW1hc2tcIiBzdHlsZT17cHJvcHMuY3VzdG9tTWFza1N0eWxlc30gb25DbGljaz17cHJvcHMub25DbG9zZX0gLz4gOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5ICAgICAgICAgICAgICAgICA6IHN0YXRlLmlzU2hvdyA/ICcnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICBXZWJraXRBbmltYXRpb25EdXJhdGlvbiA6IHByb3BzLmR1cmF0aW9uICsgJ21zJyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gICAgICAgOiBwcm9wcy5kdXJhdGlvbiArICdtcydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gXHJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJvZGFsIHJvZGFsLWZhZGUtXCIgKyBzdGF0ZS5hbmltYXRpb25UeXBlICsgJyAnICsgcHJvcHMuY2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17dGhpcy5oYW5kbGVhbmltYXRpb25FbmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttYXNrfVxyXG4gICAgICAgICAgICAgICAgPERpYWxvZyB7Li4ucHJvcHN9IGFuaW1hdGlvblR5cGU9e3N0YXRlLmFuaW1hdGlvblR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvZGFsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQW5pbWF0aW9ucy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9BbmltYXRpb25zLmpzeCc7XHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAnZG9vcidcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhhbmltYXRpb24pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPuWFs+S6jjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD7lpKflm5vni5fkuIDmnpouLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzY2FsZVwiIG9uQ2xpY2s9e3RoaXMuc2hvdy5iaW5kKHRoaXMsICdkb29yJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJvZGFsIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhpZGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e3RoaXMuc3RhdGUuYW5pbWF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlJvZGFsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+QSBSZWFjdCBtb2RhbCB3aXRoIGFuaW1hdGlvbnMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb2RhbC1jb25maXJtLWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGlkZS5iaW5kKHRoaXMpfT5vazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm9kYWwtY2FuY2VsLWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGlkZS5iaW5kKHRoaXMpfT5jbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Sb2RhbD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0Fib3V0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=