webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/reducers/request.js":
/*!*********************************!*\
  !*** ./src/reducers/request.js ***!
  \*********************************/
/*! exports provided: REQUEST_STATUS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_STATUS", function() { return REQUEST_STATUS; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/request */ "./src/actions/request.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case _actions_request__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        records: action.records,
        status: REQUEST_STATUS.SUCCESS
      });

    case _actions_request__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        status: REQUEST_STATUS.ERROR,
        error: action.error
      });

    case _actions_request__WEBPACK_IMPORTED_MODULE_2__["PUT_SUCCESS"]:
      var records = state.records;
      var record = action.record;
      var recordIndex = records.map(function (rec) {
        return rec.id;
      }).indexOf(record.id);
      return _objectSpread(_objectSpread({}, state), {}, {
        records: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(records.slice(0, recordIndex)), [record], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(records.slice(recordIndex + 1)))
      });

    case _actions_request__WEBPACK_IMPORTED_MODULE_2__["PUT_FAILURE"]:
      console.log('PUT_FAILURE: Currently just loggin to console without refreshing records');
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsInJlY29yZHMiLCJzdGF0dXMiLCJHRVRfQUxMX0ZBSUxVUkUiLCJlcnJvciIsIlBVVF9TVUNDRVNTIiwicmVjb3JkIiwicmVjb3JkSW5kZXgiLCJtYXAiLCJyZWMiLCJpZCIsImluZGV4T2YiLCJzbGljZSIsIlBVVF9GQUlMVVJFIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHO0FBQzFCQyxTQUFPLEVBQUUsU0FEaUI7QUFFMUJDLFNBQU8sRUFBRSxTQUZpQjtBQUcxQkMsT0FBSyxFQUFFO0FBSG1CLENBQXZCOztBQU1QLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxnRUFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlJLGVBQU8sRUFBRUgsTUFBTSxDQUFDRyxPQUZwQjtBQUdJQyxjQUFNLEVBQUVWLGNBQWMsQ0FBQ0U7QUFIM0I7O0FBS0osU0FBS1MsZ0VBQUw7QUFDSSw2Q0FDT04sS0FEUDtBQUVJSyxjQUFNLEVBQUVWLGNBQWMsQ0FBQ0csS0FGM0I7QUFHSVMsYUFBSyxFQUFFTixNQUFNLENBQUNNO0FBSGxCOztBQUtKLFNBQUtDLDREQUFMO0FBQUEsVUFDWUosT0FEWixHQUN3QkosS0FEeEIsQ0FDWUksT0FEWjtBQUFBLFVBRVlLLE1BRlosR0FFdUJSLE1BRnZCLENBRVlRLE1BRlo7QUFHSSxVQUFNQyxXQUFXLEdBQUdOLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQSxPQUFaLEVBQTZCQyxPQUE3QixDQUFxQ0wsTUFBTSxDQUFDSSxFQUE1QyxDQUFwQjtBQUNBLDZDQUNPYixLQURQO0FBRUlJLGVBQU8seUdBQ0FBLE9BQU8sQ0FBQ1csS0FBUixDQUFjLENBQWQsRUFBaUJMLFdBQWpCLENBREEsSUFFSEQsTUFGRyxnR0FHQUwsT0FBTyxDQUFDVyxLQUFSLENBQWNMLFdBQVcsR0FBRyxDQUE1QixDQUhBO0FBRlg7O0FBUUosU0FBS00sNERBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQ0ksMEVBREo7QUFHQSw2Q0FDT2xCLEtBRFA7QUFFSU8sYUFBSyxFQUFFTixNQUFNLENBQUNNO0FBRmxCOztBQUlKO0FBQ0ksYUFBT1AsS0FBUDtBQWxDUjtBQXFDSCxDQXRDRDs7QUF3Q2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjBjNTM2ZTIxYjI4MzJhMWI5ZDE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dFVF9BTExfRkFJTFVSRSwgR0VUX0FMTF9TVUNDRVNTLCBQVVRfRkFJTFVSRSwgUFVUX1NVQ0NFU1N9IGZyb20gXCIuLi9hY3Rpb25zL3JlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBFUlJPUjogXCJlcnJvclwiXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEdFVF9BTExfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkczogYWN0aW9uLnJlY29yZHMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEdFVF9BTExfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUFVUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVjb3JkcyB9ID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVjb3JkIH0gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZEluZGV4ID0gcmVjb3Jkcy5tYXAoKHJlYykgPT4gcmVjLmlkKS5pbmRleE9mKHJlY29yZC5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5yZWNvcmRzLnNsaWNlKDAsIHJlY29yZEluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVjb3Jkcy5zbGljZShyZWNvcmRJbmRleCArIDEpXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBQVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAnUFVUX0ZBSUxVUkU6IEN1cnJlbnRseSBqdXN0IGxvZ2dpbiB0byBjb25zb2xlIHdpdGhvdXQgcmVmcmVzaGluZyByZWNvcmRzJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=