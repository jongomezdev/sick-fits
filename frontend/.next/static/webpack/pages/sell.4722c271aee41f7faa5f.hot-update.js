webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "C:\\Users\\Jonathan Gomez\\Desktop\\sick-fits\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation CREATE_PRODUCT_MUTATION(\n    # Which variables are getting passed in? What types are they?\n    $name: String!\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        status: \"AVAILABLE\"\n        photo: { create: { image: $image, altText: $name } }\n      }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CREATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
function CreateProduct() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    image: '',
    name: 'Nice shirt',
    price: 34324,
    description: 'This is a comfy shirt!'
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: []
  }),
      _useMutation2 = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        return C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // Submit the inputfields to the backend:

                _context.next = 3;
                return createProduct();

              case 3:
                clearForm();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "Price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(CreateProduct, "RYAKW67IL5YWm7+bUw0UMSOGLYw=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsImNyZWF0ZVByb2R1Y3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msa0RBQUgsbUJBQTdCO0FBeUJlLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLDREQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsUUFBSSxFQUFFLFlBRnVEO0FBRzdEQyxTQUFLLEVBQUUsS0FIc0Q7QUFJN0RDLGVBQVcsRUFBRTtBQUpnRCxHQUFELENBRHhCO0FBQUEsTUFDOUJDLE1BRDhCLFlBQzlCQSxNQUQ4QjtBQUFBLE1BQ3RCQyxZQURzQixZQUN0QkEsWUFEc0I7QUFBQSxNQUNSQyxTQURRLFlBQ1JBLFNBRFE7QUFBQSxNQUNHQyxTQURILFlBQ0dBLFNBREg7O0FBQUEscUJBT1lDLGtFQUFXLENBQzNEWix1QkFEMkQsRUFFM0Q7QUFDRWEsYUFBUyxFQUFFTCxNQURiO0FBRUVNLGtCQUFjLEVBQUU7QUFGbEIsR0FGMkQsQ0FQdkI7QUFBQTtBQUFBLE1BTy9CQyxhQVArQjtBQUFBO0FBQUEsTUFPZEMsT0FQYyxrQkFPZEEsT0FQYztBQUFBLE1BT0xDLEtBUEssa0JBT0xBLEtBUEs7QUFBQSxNQU9FQyxJQVBGLGtCQU9FQSxJQVBGOztBQWV0QyxzQkFDRSxxRUFBQyxvREFBRDtBQUNFLFlBQVE7QUFBQSxrV0FBRSxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLGlCQUFDLENBQUNDLGNBQUYsR0FEUSxDQUVSOztBQUZRO0FBQUEsdUJBR0ZMLGFBQWEsRUFIWDs7QUFBQTtBQUlSTCx5QkFBUzs7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFY7QUFBQSw0QkFRRSxxRUFBQyxxREFBRDtBQUFjLFdBQUssRUFBRU87QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBVSxjQUFRLEVBQUVELE9BQXBCO0FBQTZCLG1CQUFXQSxPQUF4QztBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGtCQUFRLE1BRFY7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUUsRUFBQyxPQUhMO0FBSUUsY0FBSSxFQUFDLE9BSlA7QUFLRSxrQkFBUSxFQUFFUDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsd0NBRUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUUsRUFBQyxNQUZMO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxxQkFBVyxFQUFDLE1BSmQ7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0gsSUFMaEI7QUFNRSxrQkFBUSxFQUFFSTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFzQkU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUscUJBQVcsRUFBQyxPQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNGLEtBTGhCO0FBTUUsa0JBQVEsRUFBRUc7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQWlDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUEsK0NBRUU7QUFDRSxZQUFFLEVBQUMsYUFETDtBQUVFLGNBQUksRUFBQyxhQUZQO0FBR0UscUJBQVcsRUFBQyxhQUhkO0FBSUUsZUFBSyxFQUFFRCxNQUFNLENBQUNELFdBSmhCO0FBS0Usa0JBQVEsRUFBRUU7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRixlQTJDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUREOztHQXhFdUJQLGE7VUFDaUNDLG9ELEVBTUxTLDBEOzs7S0FQNUJWLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC40NzIyYzI3MWFlZTQxZjdmYWE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IENSRUFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9QUk9EVUNUX01VVEFUSU9OKFxyXG4gICAgIyBXaGljaCB2YXJpYWJsZXMgYXJlIGdldHRpbmcgcGFzc2VkIGluPyBXaGF0IHR5cGVzIGFyZSB0aGV5P1xyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgJHByaWNlOiBJbnQhXHJcbiAgICAkaW1hZ2U6IFVwbG9hZFxyXG4gICkge1xyXG4gICAgY3JlYXRlUHJvZHVjdChcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxyXG4gICAgICAgIHByaWNlOiAkcHJpY2VcclxuICAgICAgICBzdGF0dXM6IFwiQVZBSUxBQkxFXCJcclxuICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBpbWFnZTogJycsXHJcbiAgICBuYW1lOiAnTmljZSBzaGlydCcsXHJcbiAgICBwcmljZTogMzQzMjQsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb21meSBzaGlydCEnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIFN1Ym1pdCB0aGUgaW5wdXRmaWVsZHMgdG8gdGhlIGJhY2tlbmQ6XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xyXG4gICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cclxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cclxuICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgIE5hbWVcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9