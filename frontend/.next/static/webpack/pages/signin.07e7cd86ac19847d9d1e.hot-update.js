webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "C:\\Users\\Jonathan Gomez\\Desktop\\sick-fits\\frontend\\components\\SignUp.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation SIGNUP_MUTATION(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    createUser(data: { email: $email, name: $name, password: $password }) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
function SignUp() {
  _s();

  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    email: '',
    name: '',
    password: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(SIGNUP_MUTATION, {
    variables: inputs // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  }),
      _useMutation2 = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      signup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  } // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;


  function _handleSubmit() {
    _handleSubmit = Object(C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res;
      return C_Users_Jonathan_Gomez_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(inputs);
              _context.next = 4;
              return signup();

            case 4:
              res = _context.sent;
              console.log(res);
              resetForm();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "Sign Up For an Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Your Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign Up!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(SignUp, "gIL9+qt2Qv7qOWyn+b61LUGegpQ=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"]];
});

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanMiXSwibmFtZXMiOlsiU0lHTlVQX01VVEFUSU9OIiwiZ3FsIiwiU2lnblVwIiwidXNlRm9ybSIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msa0RBQUgsbUJBQXJCO0FBY2UsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUNhQyw0REFBTyxDQUFDO0FBQ2xEQyxTQUFLLEVBQUUsRUFEMkM7QUFFbERDLFFBQUksRUFBRSxFQUY0QztBQUdsREMsWUFBUSxFQUFFO0FBSHdDLEdBQUQsQ0FEcEI7QUFBQSxNQUN2QkMsTUFEdUIsWUFDdkJBLE1BRHVCO0FBQUEsTUFDZkMsWUFEZSxZQUNmQSxZQURlO0FBQUEsTUFDREMsU0FEQyxZQUNEQSxTQURDOztBQUFBLHFCQU1LQyxrRUFBVyxDQUFDVixlQUFELEVBQWtCO0FBQy9EVyxhQUFTLEVBQUVKLE1BRG9ELENBRS9EOztBQUYrRCxHQUFsQixDQU5oQjtBQUFBO0FBQUEsTUFNeEJLLE1BTndCO0FBQUE7QUFBQSxNQU1kQyxJQU5jLGtCQU1kQSxJQU5jO0FBQUEsTUFNUkMsT0FOUSxrQkFNUkEsT0FOUTs7QUFBQSxXQVVoQkMsWUFWZ0I7QUFBQTtBQUFBLElBaUIvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFyQitCO0FBQUEscVdBVS9CLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlaLE1BQVo7QUFGRjtBQUFBLHFCQUdvQkssTUFBTSxFQUgxQjs7QUFBQTtBQUdRUSxpQkFIUjtBQUlFRixxQkFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDQVgsdUJBQVM7O0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FWK0I7QUFBQTtBQUFBOztBQXVCL0Isc0JBQ0UscUVBQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVNLFlBQTlCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLDZDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLHFCQUFXLEVBQUMsV0FIZDtBQUlFLHNCQUFZLEVBQUMsTUFKZjtBQUtFLGVBQUssRUFBRVIsTUFBTSxDQUFDRixJQUxoQjtBQU1FLGtCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxxQkFBVyxFQUFDLG9CQUhkO0FBSUUsc0JBQVksRUFBQyxPQUpmO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNILEtBTGhCO0FBTUUsa0JBQVEsRUFBRUk7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLFVBSGQ7QUFJRSxzQkFBWSxFQUFDLFVBSmY7QUFLRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0QsUUFMaEI7QUFNRSxrQkFBUSxFQUFFRTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBa0NFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQ0Q7O0dBbEV1Qk4sTTtVQUNzQkMsb0QsRUFLUk8sMEQ7OztLQU5kUixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4wN2U3Y2Q4NmFjMTk4NDdkOWQxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5cclxuY29uc3QgU0lHTlVQX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFNJR05VUF9NVVRBVElPTihcclxuICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRwYXNzd29yZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlVXNlcihkYXRhOiB7IGVtYWlsOiAkZW1haWwsIG5hbWU6ICRuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkIH0pIHtcclxuICAgICAgaWRcclxuICAgICAgZW1haWxcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3NpZ251cCwgeyBkYXRhLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTlVQX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIC8vIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbnVwKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IGVycm9yID1cclxuICAvLyAgIGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuICAvLyAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJ1xyXG4gIC8vICAgICA/IGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmRcclxuICAvLyAgICAgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMj5TaWduIFVwIEZvciBhbiBBY2NvdW50PC9oMj5cclxuICAgICAgey8qIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+ICovfVxyXG5cclxuICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgIFlvdXIgTmFtZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBVcCE8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=