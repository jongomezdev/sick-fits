webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");



var _jsxFileName = "C:\\Users\\Jonathan Gomez\\Desktop\\sick-fits\\frontend\\components\\SingleProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      price\n      description\n      id\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "SingleProduct__ProductStyles",
  componentId: "sc-1kapz8w-0"
})(["background:red;"]);
_c = ProductStyles;
var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function SingleProduct(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(SINGLE_ITEM_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 21
  }, this);
  var Product = data.Product;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductStyles, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["8MSTRONG | ", Product.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: Product.photo.image.publicUrlTransformed,
      alt: Product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "details",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: Product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: Product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(SingleProduct, "tP+6C5plfRwxqCbBj3cMUcL7Opk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c2 = SingleProduct;

var _c, _c2;

$RefreshReg$(_c, "ProductStyles");
$RefreshReg$(_c2, "SingleProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJTSU5HTEVfSVRFTV9RVUVSWSIsImdxbCIsIlNpbmdsZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIlByb2R1Y3QiLCJuYW1lIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1QkFBbkI7S0FBTUYsYTtBQUlOLElBQU1HLGlCQUFpQixHQUFHQyxrREFBSCxtQkFBdkI7QUFnQmUsU0FBU0MsYUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxrQkFDWEMsK0RBQVEsQ0FBQ0osaUJBQUQsRUFBb0I7QUFDM0RLLGFBQVMsRUFBRTtBQUNURixRQUFFLEVBQUZBO0FBRFM7QUFEZ0QsR0FBcEIsQ0FERztBQUFBLE1BQ3BDRyxJQURvQyxhQUNwQ0EsSUFEb0M7QUFBQSxNQUM5QkMsT0FEOEIsYUFDOUJBLE9BRDhCO0FBQUEsTUFDckJDLEtBRHFCLGFBQ3JCQSxLQURxQjs7QUFNNUMsTUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU8scUVBQUMscURBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVBpQyxNQVFwQ0MsT0FSb0MsR0FReEJILElBUndCLENBUXBDRyxPQVJvQztBQVM1QyxzQkFDRSxxRUFBQyxhQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtDQUFtQkEsT0FBTyxDQUFDQyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLFNBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUFSLENBQWNDLEtBQWQsQ0FBb0JDLG9CQUE5QjtBQUFvRCxTQUFHLEVBQUVKLE9BQU8sQ0FBQ0M7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtELE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJRCxPQUFPLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBckJ1QlosYTtVQUNXRSx1RDs7O01BRFhGLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjk4ZWE5YjZhMDkwNjExZmMyYTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFByb2R1Y3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XHJcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGlkXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVByb2R1Y3QoeyBpZCB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc3QgeyBQcm9kdWN0IH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdFN0eWxlcz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPjhNU1RST05HIHwge1Byb2R1Y3QubmFtZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxpbWcgc3JjPXtQcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e1Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgPGgyPntQcm9kdWN0Lm5hbWV9PC9oMj5cclxuICAgICAgICA8cD57UHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm9kdWN0U3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==