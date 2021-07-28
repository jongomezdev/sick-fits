webpackHotUpdate_N_E("pages/products/[page]",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: ALL_PRODUCTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PRODUCTS_QUERY", function() { return ALL_PRODUCTS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ "./components/Product.js");



var _jsxFileName = "C:\\Users\\Jonathan Gomez\\Desktop\\sick-fits\\frontend\\components\\Products.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n    allProducts(first: $first, skip: $skip) {\n      id\n      name\n      price\n      description\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var ProductListStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Products__ProductListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
_c = ProductListStyles;
function Products(_ref) {
  _s();

  var _this = this;

  var page = _ref.page;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_5__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_5__["perPage"],
      first: _config__WEBPACK_IMPORTED_MODULE_5__["perPage"]
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductListStyles, {
      children: data.allProducts.map(function (product) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
          product: product
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Products, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c2 = Products;

var _c, _c2;

$RefreshReg$(_c, "ProductListStyles");
$RefreshReg$(_c2, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0TGlzdFN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlByb2R1Y3RzIiwicGFnZSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImFsbFByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUgsbUJBQXhCO0FBaUJQLElBQU1DLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUF2QjtLQUFNRixpQjtBQU1TLFNBQVNHLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUNQLGtCQUFELEVBQXFCO0FBQzVEUSxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFSCxJQUFJLEdBQUdJLCtDQUFQLEdBQWlCQSwrQ0FEZDtBQUVUQyxXQUFLLEVBQUVELCtDQUFPQTtBQUZMO0FBRGlELEdBQXJCLENBREE7QUFBQSxNQUNqQ0UsSUFEaUMsYUFDakNBLElBRGlDO0FBQUEsTUFDM0JDLEtBRDJCLGFBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxPQURvQixhQUNwQkEsT0FEb0I7O0FBT3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCO0FBQ0EsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDSSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsaUJBQUQ7QUFBQSxnQkFDR0wsSUFBSSxDQUFDTSxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxPQUFEO0FBQUEsNEJBQ3BCLHFFQUFDLGdEQUFEO0FBQTBCLGlCQUFPLEVBQUVBO0FBQW5DLFdBQWNBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FuQnVCaEIsUTtVQUNXRSx1RDs7O01BRFhGLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW3BhZ2VdLjI5ODJmZTg1Y2M0YzhlYjNhNGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xyXG4gICAgYWxsUHJvZHVjdHMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogNjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxyXG4gICAgICBmaXJzdDogcGVyUGFnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSwgZXJyb3IsIGxvYWRpbmcpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQcm9kdWN0TGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0TGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==