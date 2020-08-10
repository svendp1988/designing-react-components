webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/actions/request.js":
/*!********************************!*\
  !*** ./src/actions/request.js ***!
  \********************************/
/*! exports provided: GET_ALL_SUCCESS, GET_ALL_FAILURE, PUT_SUCCESS, PUT_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_SUCCESS", function() { return GET_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_FAILURE", function() { return GET_ALL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_SUCCESS", function() { return PUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_FAILURE", function() { return PUT_FAILURE; });
var GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
var GET_ALL_FAILURE = "GET_ALL_FAILURE";
var PUT_SUCCESS = "PUT_SUCCESS";
var PUT_FAILURE = "PUT_FAILURE";

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

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/request */ "./src/actions/request.js");






var _this = undefined,
    _jsxFileName = "C:\\_Projects\\designing-react-components\\src\\components\\Speakers\\Speakers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

var Speakers = function Speakers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case _actions_request__WEBPACK_IMPORTED_MODULE_9__["GET_ALL_SUCCESS"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          status: REQUEST_STATUS.SUCCESS,
          speakers: action.data
        });

      case _actions_request__WEBPACK_IMPORTED_MODULE_9__["PUT_SUCCESS"]:
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.status
        });

      case "FETCH_ERROR":
        return _objectSpread(_objectSpread({}, state), {}, {
          status: REQUEST_STATUS.ERROR,
          error: action.error
        });
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, {
    status: REQUEST_STATUS.LOADING,
    speakers: [],
    error: {}
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.speakers,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchSpeakers = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://localhost:4000/speakers");

              case 3:
                response = _context.sent;
                dispatch({
                  data: response.data,
                  type: "GET_ALL_SUCCESS"
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatch({
                  status: REQUEST_STATUS.ERROR,
                  type: "UPDATE_STATUS",
                  error: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchSpeakers() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchSpeakers();
  }, []);

  function onFavoriteToggleHandler(_x) {
    return _onFavoriteToggleHandler.apply(this, arguments);
  }

  function _onFavoriteToggleHandler() {
    _onFavoriteToggleHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(speakerRec) {
      var toggledSpeakerRec, speakerIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);
              speakerIndex = speakers.map(function (speaker) {
                return speaker.id;
              }).indexOf(speakerRec.id);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("http://localhost:4000/speakers/".concat(speakerRec.id), toggledSpeakerRec);

            case 5:
              dispatch({
                speakers: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(speakerIndex + 1))),
                status: REQUEST_STATUS.SUCCESS
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              dispatch({
                status: REQUEST_STATUS.ERROR,
                error: _context2.t0
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 8]]);
    }));
    return _onFavoriteToggleHandler.apply(this, arguments);
  }

  function toggleSpeakerFavorite(speakerRec) {
    return _objectSpread(_objectSpread({}, speakerRec), {}, {
      isFavorite: !speakerRec.isFavorite
    });
  }

  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADING;
  var hasErrored = status === REQUEST_STATUS.ERROR;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "Loading..."), hasErrored && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 28
    }
  }, "Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "ERROR: ", error.message)), success && __jsx("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, speakers.filter(function (rec) {
    var targetString = "".concat(rec.firstName, " ").concat(rec.lastName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (speaker) {
    return __jsx(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: speaker.id
    }, speaker, {
      onFavoriteToggle: function onFavoriteToggle() {
        return onFavoriteToggleHandler(speaker);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }));
  })));
};

_s(Speakers, "xvR2ugxLN37+szAKakgusdit25s=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiR0VUX0FMTF9TVUNDRVNTIiwiR0VUX0FMTF9GQUlMVVJFIiwiUFVUX1NVQ0NFU1MiLCJQVVRfRkFJTFVSRSIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInN0YXR1cyIsInNwZWFrZXJzIiwiZGF0YSIsImVycm9yIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hTcGVha2VycyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlciIsInNwZWFrZXJSZWMiLCJ0b2dnbGVkU3BlYWtlclJlYyIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInNwZWFrZXJJbmRleCIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImluZGV4T2YiLCJwdXQiLCJzbGljZSIsImlzRmF2b3JpdGUiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsZUFBZSxHQUFJLGlCQUF6QjtBQUNBLElBQU1DLGVBQWUsR0FBSyxpQkFBMUI7QUFDQSxJQUFNQyxXQUFXLEdBQUksYUFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUksYUFBckI7Ozs7Ozs7Ozs7Ozs7Ozs7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WDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFXdEIsS0FBSyxDQUFDdUIsT0FBakIsQ0FKVyxDQU5uQixFQVlLSCxPQUFPLElBQ0o7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLdEIsUUFBUSxDQUFDMEIsTUFBVCxDQUFnQixVQUFDQyxHQUFELEVBQVM7QUFDdEIsUUFBTUMsWUFBWSxHQUFHLFVBQUdELEdBQUcsQ0FBQ0UsU0FBUCxjQUFvQkYsR0FBRyxDQUFDRyxRQUF4QixFQUFtQ0MsV0FBbkMsRUFBckI7QUFDQSxXQUFPdEMsV0FBVyxDQUFDdUMsTUFBWixLQUF1QixDQUF2QixHQUEyQixJQUEzQixHQUFrQ0osWUFBWSxDQUFDSyxRQUFiLENBQXNCeEMsV0FBVyxDQUFDc0MsV0FBWixFQUF0QixDQUF6QztBQUNILEdBSEEsRUFJSWhCLEdBSkosQ0FJUSxVQUFDQyxPQUFEO0FBQUEsV0FDRCxNQUFDLHdEQUFEO0FBQ0ksU0FBRyxFQUFFQSxPQUFPLENBQUNDO0FBRGpCLE9BRVFELE9BRlI7QUFHSSxzQkFBZ0IsRUFBRTtBQUFBLGVBQU1OLHVCQUF1QixDQUFDTSxPQUFELENBQTdCO0FBQUEsT0FIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURDO0FBQUEsR0FKUixDQURMLENBYlIsQ0FESjtBQStCSCxDQW5IRDs7R0FBTXpCLFE7O0tBQUFBLFE7QUFvSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjRhNGY3M2JkN2YxMmNjYjcwYWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0VUX0FMTF9TVUNDRVNTID0gIFwiR0VUX0FMTF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0ZBSUxVUkUgPSAgIFwiR0VUX0FMTF9GQUlMVVJFXCI7XHJcbmV4cG9ydCBjb25zdCBQVVRfU1VDQ0VTUyA9ICBcIlBVVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBQVVRfRkFJTFVSRSA9ICBcIlBVVF9GQUlMVVJFXCI7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSBcIi4uL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhclwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4uL1NwZWFrZXIvU3BlYWtlclwiO1xuaW1wb3J0IHtHRVRfQUxMX1NVQ0NFU1MsIFBVVF9TVUNDRVNTfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9yZXF1ZXN0XCI7XG5cbmNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICAgIEVSUk9SOiBcImVycm9yXCJcbn07XG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBHRVRfQUxMX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcnM6IGFjdGlvbi5kYXRhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUFVUX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogYWN0aW9uLnN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJGRVRDSF9FUlJPUlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3tzcGVha2Vycywgc3RhdHVzLCBlcnJvcn0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcix7XG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcbiAgICAgICAgc3BlYWtlcnM6IFtdLFxuICAgICAgICBlcnJvcjoge31cbiAgICB9KTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hTcGVha2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnNcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVF9BTExfU1VDQ0VTU1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlVQREFURV9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaFNwZWFrZXJzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlclJlYykge1xuICAgICAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlYyA9IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcbiAgICAgICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnMubWFwKChzcGVha2VyKSA9PiBzcGVha2VyLmlkKS5pbmRleE9mKHNwZWFrZXJSZWMuaWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjLmlkfWAsIHRvZ2dsZWRTcGVha2VyUmVjKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICBzcGVha2VyczogW1xuICAgICAgICAgICAgICAgICAgICAuLi5zcGVha2Vycy5zbGljZSgwLCBzcGVha2VySW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVkU3BlYWtlclJlYyxcbiAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xuICAgIGNvbnN0IGhhc0Vycm9yZWQgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTcGVha2VyU2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cbiAgICAgICAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHRlcm1pbmFsIHByb21wdClcbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==