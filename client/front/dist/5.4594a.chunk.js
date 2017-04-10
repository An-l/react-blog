webpackJsonp([5],{

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
                _react3.default.createElement(_PostList2.default, { postList: postList })
            );
        }
    }]);

    return Search;
}(_react2.Component));

exports.default = Search;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9TZWFyY2guanN4Il0sIm5hbWVzIjpbInByb3BzIiwic3RhdGUiLCJzZWFyY2hWYWx1ZSIsInBhcmFtcyIsIm5hbWUiLCJwb3N0TGlzdCIsIl9nZXRQb3N0TGlzdCIsIm5leHRQcm9wcyIsInZhbHVlIiwidGhlbiIsInNldFN0YXRlIiwicmVzIiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSSxvQkFBWUEsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxNQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JDLElBQWxCLElBQTBCLEVBRDlCO0FBRVRDLHNCQUFVO0FBRkQsU0FBYjtBQUhlO0FBT2xCOzs7OzRDQUdtQjtBQUNoQixnQkFBSUgsY0FBYyxLQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JDLElBQXBDO0FBQ0EsaUJBQUtFLFlBQUwsQ0FBa0JKLFdBQWxCO0FBRUg7OztrREFDeUJLLFMsRUFBVztBQUNqQyxnQkFBSUwsY0FBY0ssVUFBVUosTUFBVixDQUFpQkMsSUFBbkM7QUFDQSxpQkFBS0UsWUFBTCxDQUFrQkosV0FBbEI7QUFDSDs7O3FDQUVZTSxLLEVBQU87QUFBQTs7QUFDaEIseUNBQWVBLEtBQWYsRUFDS0MsSUFETCxDQUNVLGVBQU87QUFDVCx1QkFBS0MsUUFBTCxDQUFjO0FBQ1ZSLGlDQUFhTSxLQURIO0FBRVZILDhCQUFVTTtBQUZBLGlCQUFkO0FBSUgsYUFOTDtBQU9IOzs7aUNBRVE7QUFBQSx5QkFDeUIsS0FBS1YsS0FEOUI7QUFBQSxnQkFDQUksUUFEQSxVQUNBQSxRQURBO0FBQUEsZ0JBQ1VILFdBRFYsVUFDVUEsV0FEVjs7O0FBR0wsbUJBQ0c7QUFBQTtBQUFBLGtCQUFTLFdBQVUsUUFBbkI7QUFDSztBQUFBO0FBQUEsc0JBQUksV0FBVSxPQUFkO0FBQUE7QUFBeUI7QUFBQTtBQUFBLDBCQUFNLFdBQVUsVUFBaEI7QUFBNEJBO0FBQTVCO0FBQXpCLGlCQURMO0FBRUssb0VBQVUsVUFBVUcsUUFBcEI7QUFGTCxhQURIO0FBTUg7Ozs7OztrQkFHVU8sTSIsImZpbGUiOiI1LjQ1OTRhLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdC5qc3gnO1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0QnlUaXRsZX0gZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XHJcblxyXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiB0aGlzLnByb3BzLnBhcmFtcy5uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgICBwb3N0TGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgc2VhcmNoVmFsdWUgPSB0aGlzLnByb3BzLnBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2dldFBvc3RMaXN0KHNlYXJjaFZhbHVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFZhbHVlID0gbmV4dFByb3BzLnBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2dldFBvc3RMaXN0KHNlYXJjaFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UG9zdExpc3QodmFsdWUpIHtcclxuICAgICAgICBnZXRQb3N0QnlUaXRsZSh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TGlzdDogcmVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cG9zdExpc3QsIHNlYXJjaFZhbHVlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWFyY2gnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUnPuaQnOe0ou+8mjxzcGFuIGNsYXNzTmFtZT0ndGFnLW5hbWUnPntzZWFyY2hWYWx1ZX08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxQb3N0TGlzdCBwb3N0TGlzdD17cG9zdExpc3R9Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9TZWFyY2guanN4Il0sInNvdXJjZVJvb3QiOiIifQ==