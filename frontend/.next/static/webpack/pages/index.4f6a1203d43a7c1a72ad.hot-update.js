webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");



var _jsxFileName = "C:\\Users\\Jonathan Gomez\\Desktop\\sick-fits\\frontend\\components\\Pagination.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query {\n    _allProductsMeta {\n      count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function Pagination(_ref) {
  _s();

  var page = _ref.page;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(PAGINATION_QUERY),
      error = _useQuery.error,
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) return 'loading...';
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }, this);
  var count = data.allProductsMeta.count;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Sick Fits - Page ", page, " of ___"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Page __ of __"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Page ", data.count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Pagination, "MadqETWYtkFh3dDWW9IjxDLlwQw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c = Pagination;

var _c;

$RefreshReg$(_c, "Pagination");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbIlBBR0lOQVRJT05fUVVFUlkiLCJncWwiLCJQYWdpbmF0aW9uIiwicGFnZSIsInVzZVF1ZXJ5IiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsImNvdW50IiwiYWxsUHJvZHVjdHNNZXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQVFlLFNBQVNDLFVBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUNKLGdCQUFELENBREU7QUFBQSxNQUNuQ0ssS0FEbUMsYUFDbkNBLEtBRG1DO0FBQUEsTUFDNUJDLE9BRDRCLGFBQzVCQSxPQUQ0QjtBQUFBLE1BQ25CQyxJQURtQixhQUNuQkEsSUFEbUI7O0FBRTNDLE1BQUlELE9BQUosRUFBYSxPQUFPLFlBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8scUVBQUMscURBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUhnQyxNQUluQ0csS0FKbUMsR0FJekJELElBQUksQ0FBQ0UsZUFKb0IsQ0FJbkNELEtBSm1DO0FBSzNDLHNCQUNFLHFFQUFDLGdFQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLHdDQUF5QkwsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQUEsMEJBQVNJLElBQUksQ0FBQ0MsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztHQWhCdUJOLFU7VUFDV0UsdUQ7OztLQURYRixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmNmExMjAzZDQzYTdjMWE3MmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uU3R5bGVzIGZyb20gJy4vc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgX2FsbFByb2R1Y3RzTWV0YSB7XHJcbiAgICAgIGNvdW50XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UgfSkge1xyXG4gIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBBR0lOQVRJT05fUVVFUlkpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gJ2xvYWRpbmcuLi4nO1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcclxuICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLmFsbFByb2R1Y3RzTWV0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2luYXRpb25TdHlsZXM+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaWNrIEZpdHMgLSBQYWdlIHtwYWdlfSBvZiBfX188L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+UHJldjwvTGluaz5cclxuICAgICAgPHA+UGFnZSBfXyBvZiBfXzwvcD5cclxuICAgICAgPHA+UGFnZSB7ZGF0YS5jb3VudH0gSXRlbXMgVG90YWw8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TmV4dDwvTGluaz5cclxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=