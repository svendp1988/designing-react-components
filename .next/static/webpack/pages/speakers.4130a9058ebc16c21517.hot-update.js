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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/request */ "./src/actions/request.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case _actions_request__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        records: action.records,
        status: REQUEST_STATUS.SUCCESS
      });

    case _actions_request__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        status: REQUEST_STATUS.ERROR,
        error: action.error
      });

    case _actions_request__WEBPACK_IMPORTED_MODULE_1__["PUT_SUCCESS"]:
      var records = state.records;
      var record = action.record;
      var recordIndex = records.map(function (rec) {
        return rec.id;
      }).indexOf(record.id);
      return _objectSpread(_objectSpread({}, state), {}, {
        status: REQUEST_STATUS.ERROR,
        error: action.error
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3JlcXVlc3QuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsInJlY29yZHMiLCJzdGF0dXMiLCJHRVRfQUxMX0ZBSUxVUkUiLCJlcnJvciIsIlBVVF9TVUNDRVNTIiwicmVjb3JkIiwicmVjb3JkSW5kZXgiLCJtYXAiLCJyZWMiLCJpZCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUc7QUFDMUJDLFNBQU8sRUFBRSxTQURpQjtBQUUxQkMsU0FBTyxFQUFFLFNBRmlCO0FBRzFCQyxPQUFLLEVBQUU7QUFIbUIsQ0FBdkI7O0FBTVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9CLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLGdFQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUksZUFBTyxFQUFFSCxNQUFNLENBQUNHLE9BRnBCO0FBR0lDLGNBQU0sRUFBRVYsY0FBYyxDQUFDRTtBQUgzQjs7QUFLSixTQUFLUyxnRUFBTDtBQUNJLDZDQUNPTixLQURQO0FBRUlLLGNBQU0sRUFBRVYsY0FBYyxDQUFDRyxLQUYzQjtBQUdJUyxhQUFLLEVBQUVOLE1BQU0sQ0FBQ007QUFIbEI7O0FBS0osU0FBS0MsNERBQUw7QUFBQSxVQUNZSixPQURaLEdBQ3dCSixLQUR4QixDQUNZSSxPQURaO0FBQUEsVUFFWUssTUFGWixHQUV1QlIsTUFGdkIsQ0FFWVEsTUFGWjtBQUdJLFVBQU1DLFdBQVcsR0FBR04sT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0MsRUFBYjtBQUFBLE9BQVosRUFBNkJDLE9BQTdCLENBQXFDTCxNQUFNLENBQUNJLEVBQTVDLENBQXBCO0FBQ0EsNkNBQ09iLEtBRFA7QUFFSUssY0FBTSxFQUFFVixjQUFjLENBQUNHLEtBRjNCO0FBR0lTLGFBQUssRUFBRU4sTUFBTSxDQUFDTTtBQUhsQjtBQWpCUjtBQXdCSCxDQXpCRDs7QUEyQmVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjQxMzBhOTA1OGViYzE2YzIxNTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dFVF9BTExfRkFJTFVSRSwgR0VUX0FMTF9TVUNDRVNTLCBQVVRfU1VDQ0VTU30gZnJvbSBcIi4uL2FjdGlvbnMvcmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gICAgTE9BRElORzogXCJsb2FkaW5nXCIsXHJcbiAgICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcclxuICAgIEVSUk9SOiBcImVycm9yXCJcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX0FMTF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBhY3Rpb24ucmVjb3JkcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgR0VUX0FMTF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBQVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgeyByZWNvcmQgfSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgcmVjb3JkSW5kZXggPSByZWNvcmRzLm1hcCgocmVjKSA9PiByZWMuaWQpLmluZGV4T2YocmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==