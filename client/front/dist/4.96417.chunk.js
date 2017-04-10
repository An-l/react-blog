webpackJsonp([4],{

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
            tagName: '',
            postList: []
        };
        return _this;
    }

    _createClass(Tag, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var tagName = this.props.params.name;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9UYWcuanN4Il0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJ0YWdOYW1lIiwicG9zdExpc3QiLCJwYXJhbXMiLCJuYW1lIiwidGhlbiIsInNldFN0YXRlIiwicmVzIiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSSxpQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxFQURBO0FBRVRDLHNCQUFVO0FBRkQsU0FBYjtBQUhlO0FBT2xCOzs7OzRDQUdtQjtBQUFBOztBQUNoQixnQkFBSUQsVUFBVSxLQUFLRixLQUFMLENBQVdJLE1BQVgsQ0FBa0JDLElBQWhDOztBQUVBLHVDQUFhSCxPQUFiLEVBQ0tJLElBREwsQ0FDVSxlQUFPO0FBQ1QsdUJBQUtDLFFBQUwsQ0FBYztBQUNWTCw2QkFBU0EsT0FEQztBQUVWQyw4QkFBVUs7QUFGQSxpQkFBZDtBQUlILGFBTkw7QUFPSDs7O2lDQUdRO0FBQUEseUJBQ3FCLEtBQUtQLEtBRDFCO0FBQUEsZ0JBQ0FFLFFBREEsVUFDQUEsUUFEQTtBQUFBLGdCQUNVRCxPQURWLFVBQ1VBLE9BRFY7OztBQUdMLG1CQUNHO0FBQUE7QUFBQSxrQkFBUyxXQUFVLEtBQW5CO0FBQ0s7QUFBQTtBQUFBLHNCQUFJLFdBQVUsT0FBZDtBQUFBO0FBQXlCO0FBQUE7QUFBQSwwQkFBTSxXQUFVLFVBQWhCO0FBQTRCQTtBQUE1QjtBQUF6QixpQkFETDtBQUVLLG9FQUFVLFVBQVVDLFFBQXBCO0FBRkwsYUFESDtBQU1IOzs7Ozs7a0JBR1VNLEciLCJmaWxlIjoiNC45NjQxNy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3QuanN4JztcclxuXHJcbmltcG9ydCB7Z2V0UG9zdEJ5VGFnfSBmcm9tICcuLi91dGlscy9yZXF1ZXN0JztcclxuXHJcbmNsYXNzIFRhZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcclxuICAgICAgICAgICAgcG9zdExpc3Q6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHRhZ05hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5uYW1lO1xyXG5cclxuICAgICAgICBnZXRQb3N0QnlUYWcodGFnTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdExpc3Q6IHJlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3QsIHRhZ05hbWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhZyc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSc+5qCH562+77yaPHNwYW4gY2xhc3NOYW1lPSd0YWctbmFtZSc+e3RhZ05hbWV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3QgcG9zdExpc3Q9e3Bvc3RMaXN0fS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvVGFnLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=