webpackHotUpdate(5,{

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "D:\\Project\\GitHub\\Nextjs-Graphql-MongoDB-Example\\pages\\index.js?entry";


var _reactApollo = __webpack_require__(412);

var _queries = __webpack_require__(434);

var _queries2 = _interopRequireDefault(_queries);

var _withData = __webpack_require__(449);

var _withData2 = _interopRequireDefault(_withData);

var _wrapper = __webpack_require__(492);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// callName มากจากไหน ../lib/queries ไปดูที่นี่เลยพรี่ๆ

var index = function index(_ref) {
  var _ref$data$callName = _ref.data.callName,
      callName = _ref$data$callName === undefined ? {} : _ref$data$callName;
  return _react2.default.createElement(_wrapper2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, callName.map(function (u, i) {
    return _react2.default.createElement("li", { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, " ", u.name, " ");
  })));
};

// ทำไม Wrapper --> จะมีตัวอย่าง Wrapper ตามมาทีหลังเนอะ

var queryComponent = (0, _reactApollo.graphql)(_queries2.default)(index);

exports.default = (0, _withData2.default)(queryComponent);

/* 
  เขียนแบบดูมีคลาส แบบไม่ให้คนอื่นอ่าน ให้คนอื่นอ่านออกยากๆก็ตามด่านล่างเลยพรี่ๆ ฮรี่ๆ 
  ใช้ Shorthand if else เท่โครต เท่ชิปหาย 5555555555555 ล้อเล่นขำๆนะ อิอิ
  
  const index = ({ data: { callName = {} }, loading, error }) =>
  loading ? (
    <div> loading... </div>
  ) : error ? (
    <div> error </div>
  ) : (
    <Wrapper>
      <ul>{callName.map((u, i) => <li key={i}> {u.name} </li>)}</ul>
    </Wrapper>
  );

  แต่เขียนแบบย่อเพราะผมขี้เกียจเขียน Return 55555 เหตุผลแค่นี้แหล่ะครับ
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJpbmRleCIsImRhdGEiLCJjYWxsTmFtZSIsIm1hcCIsInUiLCJpIiwibmFtZSIsInF1ZXJ5Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7QUFFQSxJQUFNLFFBQVEsU0FBUixBQUFRLFlBQUE7Z0NBQUEsQUFBRyxLQUFILEFBQVc7TUFBWCxBQUFXLDhDQUFYLEFBQXNCLEtBQXRCO3lCQUNaLHdCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBUyxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjsyQkFBVSxjQUFBLFFBQUksS0FBSixBQUFTO2tCQUFUO29CQUFBO0FBQUE7S0FBQSxFQUFjLE9BQWQsQUFBZ0IsTUFBMUIsQUFBVTtBQUZsQixBQUNaLEFBQ0UsQUFBSztBQUZUOztBQU1BOztBQUVBLElBQU0saUJBQWlCLDZDQUF2QixBQUF1QixBQUFlOztrQkFFdkIsd0JBQUEsQUFBUyxBOztBQUV4QiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0L0dpdEh1Yi9OZXh0anMtR3JhcGhxbC1Nb25nb0RCLUV4YW1wbGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Project\\GitHub\\Nextjs-Graphql-MongoDB-Example\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Project\\GitHub\\Nextjs-Graphql-MongoDB-Example\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lOGQxOTJhMGZiMjU5NDEwZmYzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDc5ZjlhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xyXG5cclxuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9saWIvcXVlcmllc1wiO1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uL2xpYi93aXRoRGF0YVwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy93cmFwcGVyXCI7XHJcblxyXG4vLyBjYWxsTmFtZSDguKHguLLguIHguIjguLLguIHguYTguKvguJkgLi4vbGliL3F1ZXJpZXMg4LmE4Lib4LiU4Li54LiX4Li14LmI4LiZ4Li14LmI4LmA4Lil4Lii4Lie4Lij4Li14LmI4LmGXHJcblxyXG5jb25zdCBpbmRleCA9ICh7IGRhdGE6IHsgY2FsbE5hbWUgPSB7fSB9fSkgPT4gKFxyXG4gIDxXcmFwcGVyPlxyXG4gICAgPHVsPntjYWxsTmFtZS5tYXAoKHUsIGkpID0+IDxsaSBrZXk9e2l9PiB7dS5uYW1lfSA8L2xpPil9PC91bD5cclxuICA8L1dyYXBwZXI+XHJcbik7XHJcblxyXG4vLyDguJfguLPguYTguKEgV3JhcHBlciAtLT4g4LiI4Liw4Lih4Li14LiV4Lix4Lin4Lit4Lii4LmI4Liy4LiHIFdyYXBwZXIg4LiV4Liy4Lih4Lih4Liy4LiX4Li14Lir4Lil4Lix4LiH4LmA4LiZ4Lit4LiwXHJcblxyXG5jb25zdCBxdWVyeUNvbXBvbmVudCA9IGdyYXBocWwocXVlcnkpKGluZGV4KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHF1ZXJ5Q29tcG9uZW50KTtcclxuXHJcbi8qIFxyXG4gIOC5gOC4guC4teC4ouC4meC5geC4muC4muC4lOC4ueC4oeC4teC4hOC4peC4suC4qiDguYHguJrguJrguYTguKHguYjguYPguKvguYnguITguJnguK3guLfguYjguJnguK3guYjguLLguJkg4LmD4Lir4LmJ4LiE4LiZ4Lit4Li34LmI4LiZ4Lit4LmI4Liy4LiZ4Lit4Lit4LiB4Lii4Liy4LiB4LmG4LiB4LmH4LiV4Liy4Lih4LiU4LmI4Liy4LiZ4Lil4LmI4Liy4LiH4LmA4Lil4Lii4Lie4Lij4Li14LmI4LmGIOC4ruC4o+C4teC5iOC5hiBcclxuICDguYPguIrguYkgU2hvcnRoYW5kIGlmIGVsc2Ug4LmA4LiX4LmI4LmC4LiE4Lij4LiVIOC5gOC4l+C5iOC4iuC4tOC4m+C4q+C4suC4oiA1NTU1NTU1NTU1NTU1IOC4peC5ieC4reC5gOC4peC5iOC4meC4guC4s+C5huC4meC4sCDguK3guLTguK3guLRcclxuICBcclxuICBjb25zdCBpbmRleCA9ICh7IGRhdGE6IHsgY2FsbE5hbWUgPSB7fSB9LCBsb2FkaW5nLCBlcnJvciB9KSA9PlxyXG4gIGxvYWRpbmcgPyAoXHJcbiAgICA8ZGl2PiBsb2FkaW5nLi4uIDwvZGl2PlxyXG4gICkgOiBlcnJvciA/IChcclxuICAgIDxkaXY+IGVycm9yIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPHVsPntjYWxsTmFtZS5tYXAoKHUsIGkpID0+IDxsaSBrZXk9e2l9PiB7dS5uYW1lfSA8L2xpPil9PC91bD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG5cclxuICDguYHguJXguYjguYDguILguLXguKLguJnguYHguJrguJrguKLguYjguK3guYDguJ7guKPguLLguLDguJzguKHguILguLXguYnguYDguIHguLXguKLguIjguYDguILguLXguKLguJkgUmV0dXJuIDU1NTU1IOC5gOC4q+C4leC4uOC4nOC4peC5geC4hOC5iOC4meC4teC5ieC5geC4q+C4peC5iOC4sOC4hOC4o+C4seC4mlxyXG4qL1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==