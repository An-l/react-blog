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

var PropTypes = _react3.default.PropTypes,
    Component = _react3.default.Component;

var propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    measure: PropTypes.string,
    visible: PropTypes.bool,
    showMask: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    animation: PropTypes.string,
    duration: PropTypes.number,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    customMaskStyles: PropTypes.object,
    onClose: PropTypes.func.isRequired
};

var defaultProps = {
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
};

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

var Rodal = _wrapComponent('Rodal')(function (_Component) {
    _inherits(Rodal, _Component);

    function Rodal(props) {
        _classCallCheck(this, Rodal);

        var _this = _possibleConstructorReturn(this, (Rodal.__proto__ || Object.getPrototypeOf(Rodal)).call(this, props));

        _this.animationEnd = _this.animationEnd.bind(_this);
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
                this.enter();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.visible && nextProps.visible) {
                this.enter();
            } else if (this.props.visible && !nextProps.visible) {
                this.leave();
            }
        }
    }, {
        key: 'enter',
        value: function enter() {
            this.setState({
                isShow: true,
                animationType: 'enter'
            });
        }
    }, {
        key: 'leave',
        value: function leave() {
            var state = isIE9 ? { isShow: false } : { animationType: 'leave' };
            this.setState(state);
        }
    }, {
        key: 'animationEnd',
        value: function animationEnd() {
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
                    onAnimationEnd: this.animationEnd
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
}(Component));

Rodal.propTypes = propTypes;
Rodal.defaultProps = defaultProps;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FuaW1hdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0Fib3V0LmpzeCJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJ3aWR0aCIsIm51bWJlciIsImhlaWdodCIsIm1lYXN1cmUiLCJzdHJpbmciLCJ2aXNpYmxlIiwiYm9vbCIsInNob3dNYXNrIiwic2hvd0Nsb3NlQnV0dG9uIiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJjdXN0b21TdHlsZXMiLCJvYmplY3QiLCJjdXN0b21NYXNrU3R5bGVzIiwib25DbG9zZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiaW5Ccm93c2VyIiwid2luZG93IiwiVUEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImlzSUU5IiwiaW5kZXhPZiIsIkRpYWxvZyIsInByb3BzIiwiYW5pbWF0aW9uVHlwZSIsIkNsb3NlQnV0dG9uIiwic3R5bGUiLCJhbmltYXRpb25EdXJhdGlvbiIsIldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uIiwibWVyZ2VkU3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2hpbGRyZW4iLCJhbmltYXRpb25FbmQiLCJiaW5kIiwic3RhdGUiLCJpc1Nob3ciLCJlbnRlciIsIm5leHRQcm9wcyIsImxlYXZlIiwic2V0U3RhdGUiLCJtYXNrIiwiZGlzcGxheSIsIlJvZGFsIiwic2hvdyIsImhpZGUiLCJBYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsbUJBQUFBLFM7SUFBV0MsUyxtQkFBQUEsUzs7QUFDbkIsSUFBTUMsWUFBWTtBQUNkQyxXQUFtQkgsVUFBVUksTUFEZjtBQUVkQyxZQUFtQkwsVUFBVUksTUFGZjtBQUdkRSxhQUFtQk4sVUFBVU8sTUFIZjtBQUlk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QVMsS0FBS3lDLElBQUwsQ0FBVVgsSUFBVixDQUFlLElBQWYsQ0FBL0M7QUFBQTtBQUFBLHFCQUxKO0FBTUk7QUFBQTtBQUFBLDBCQUFRLFdBQVUsa0JBQWxCLEVBQXFDLFNBQVMsS0FBS1csSUFBTCxDQUFVWCxJQUFWLENBQWUsSUFBZixDQUE5QztBQUFBO0FBQUE7QUFOSjtBQU5KLGFBREo7QUFpQkg7Ozs7OztrQkFHVVksSyIsImZpbGUiOiI3LjE0YjM5LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSA9IFJlYWN0O1xyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgICB3aWR0aCAgICAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlaWdodCAgICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbWVhc3VyZSAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2aXNpYmxlICAgICAgICAgIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93TWFzayAgICAgICAgIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93Q2xvc2VCdXR0b24gIDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhbmltYXRpb24gICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGR1cmF0aW9uICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjdXN0b21TdHlsZXMgICAgIDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGN1c3RvbU1hc2tTdHlsZXMgOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25DbG9zZSAgICAgICAgICA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHdpZHRoICAgICAgICAgICAgOiA0MDAsXHJcbiAgICBoZWlnaHQgICAgICAgICAgIDogMjQwLFxyXG4gICAgbWVhc3VyZSAgICAgICAgICA6ICdweCcsXHJcbiAgICB2aXNpYmxlICAgICAgICAgIDogZmFsc2UsXHJcbiAgICBzaG93TWFzayAgICAgICAgIDogdHJ1ZSxcclxuICAgIHNob3dDbG9zZUJ1dHRvbiAgOiB0cnVlLFxyXG4gICAgYW5pbWF0aW9uICAgICAgICA6ICd6b29tJyxcclxuICAgIGR1cmF0aW9uICAgICAgICAgOiAzMDAsXHJcbiAgICBjbGFzc05hbWUgICAgICAgIDogJycsXHJcbiAgICBjdXN0b21TdHlsZXMgICAgIDoge30sXHJcbiAgICBjdXN0b21NYXNrU3R5bGVzIDoge30sXHJcbn07XHJcblxyXG4vLyBlbnZcclxuY29uc3QgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmNvbnN0IGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XHJcblxyXG5jb25zdCBEaWFsb2cgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHJvZGFsLWRpYWxvZyByb2RhbC0ke3Byb3BzLmFuaW1hdGlvbn0tJHtwcm9wcy5hbmltYXRpb25UeXBlfWA7XHJcbiAgICBjb25zdCBDbG9zZUJ1dHRvbiA9IHByb3BzLnNob3dDbG9zZUJ1dHRvbiA/IDxzcGFuIGNsYXNzTmFtZT1cInJvZGFsLWNsb3NlXCIgb25DbGljaz17cHJvcHMub25DbG9zZX0gLz4gOiBudWxsO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBtZWFzdXJlLCBkdXJhdGlvbiwgY3VzdG9tU3R5bGVzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgICAgICAgICAgIDogd2lkdGggKyBtZWFzdXJlLFxyXG4gICAgICAgIGhlaWdodCAgICAgICAgICAgICAgICAgIDogaGVpZ2h0ICsgbWVhc3VyZSxcclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbiAgICAgICA6IGR1cmF0aW9uICsgJ21zJyxcclxuICAgICAgICBXZWJraXRBbmltYXRpb25EdXJhdGlvbiA6IGR1cmF0aW9uICsgJ21zJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtZXJnZWRTdHlsZXMgPSBPYmplY3QuYXNzaWduKHN0eWxlLCBjdXN0b21TdHlsZXMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXttZXJnZWRTdHlsZXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAge0Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5jbGFzcyBSb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gdGhpcy5hbmltYXRpb25FbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25UeXBlOiAnbGVhdmUnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudmlzaWJsZSAmJiBuZXh0UHJvcHMudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnZpc2libGUgJiYgIW5leHRQcm9wcy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uVHlwZTogJ2VudGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYXZlKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gaXNJRTkgXHJcbiAgICAgICAgICAgID8geyBpc1Nob3c6IGZhbHNlIH0gXHJcbiAgICAgICAgICAgIDogeyBhbmltYXRpb25UeXBlOiAnbGVhdmUnIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW9uVHlwZSA9PT0gJ2xlYXZlJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTaG93OiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvcHMsIHN0YXRlIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IG1hc2sgPSBwcm9wcy5zaG93TWFzayA/IDxkaXYgY2xhc3NOYW1lPVwicm9kYWwtbWFza1wiIHN0eWxlPXtwcm9wcy5jdXN0b21NYXNrU3R5bGVzfSBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfSAvPiA6IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgICAgICAgICAgICAgIDogc3RhdGUuaXNTaG93ID8gJycgOiAnbm9uZScsXHJcbiAgICAgICAgICAgIFdlYmtpdEFuaW1hdGlvbkR1cmF0aW9uIDogcHJvcHMuZHVyYXRpb24gKyAnbXMnLFxyXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbiAgICAgICA6IHByb3BzLmR1cmF0aW9uICsgJ21zJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBcclxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicm9kYWwgcm9kYWwtZmFkZS1cIiArIHN0YXRlLmFuaW1hdGlvblR5cGUgKyAnICcgKyBwcm9wcy5jbGFzc05hbWV9IFxyXG4gICAgICAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXt0aGlzLmFuaW1hdGlvbkVuZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21hc2t9XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nIHsuLi5wcm9wc30gYW5pbWF0aW9uVHlwZT17c3RhdGUuYW5pbWF0aW9uVHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuUm9kYWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5Sb2RhbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2RhbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FuaW1hdGlvbnMuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQW5pbWF0aW9ucy5qc3gnO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ2Rvb3InXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz7lhbPkuo48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+5aSn5Zub54uX5LiA5p6aLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2NhbGVcIiBvbkNsaWNrPXt0aGlzLnNob3cuYmluZCh0aGlzLCAnZG9vcicpfT5cclxuICAgICAgICAgICAgICAgICAgICBzaG93XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSb2RhbCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oaWRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXt0aGlzLnN0YXRlLmFuaW1hdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Sb2RhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPkEgUmVhY3QgbW9kYWwgd2l0aCBhbmltYXRpb25zLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm9kYWwtY29uZmlybS1idG5cIiBvbkNsaWNrPXt0aGlzLmhpZGUuYmluZCh0aGlzKX0+b2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvZGFsLWNhbmNlbC1idG5cIiBvbkNsaWNrPXt0aGlzLmhpZGUuYmluZCh0aGlzKX0+Y2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUm9kYWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BYm91dC5qc3giXSwic291cmNlUm9vdCI6IiJ9