webpackHotUpdate_N_E("pages/speakers",{

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
      case "GET_ALL_SUCCESS":
        return _objectSpread(_objectSpread({}, state), {}, {
          status: REQUEST_STATUS.SUCCESS,
          speakers: action.data
        });

      case "UPDATE_STATUS":
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.status
        });
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, {
    status: REQUEST_STATUS.LOADING,
    speakers: []
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.speakers,
      status = _useReducer$.status,
      dispatch = _useReducer[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      error = _useState2[0],
      setError = _useState2[1];

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
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatch({
                  status: REQUEST_STATUS.ERROR,
                  type: "UPDATE_STATUS"
                });
                setError(_context.t0);

              case 11:
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
              dispatch([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(speakers.slice(speakerIndex + 1))));
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              setStatus(REQUEST_STATUS.ERROR);
              setError(_context2.t0);

            case 12:
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
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }
  }, "Loading..."), hasErrored && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 28
    }
  }, "Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "ERROR: ", error.message)), success && __jsx("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
        lineNumber: 107,
        columnNumber: 29
      }
    }));
  })));
};

_s(Speakers, "lJhcUgKYUbundGOn4Mz8eBBA3/c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhdHVzIiwic3BlYWtlcnMiLCJkYXRhIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsImZldGNoU3BlYWtlcnMiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJzcGVha2VyUmVjIiwidG9nZ2xlZFNwZWFrZXJSZWMiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VySW5kZXgiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJpbmRleE9mIiwicHV0Iiwic2xpY2UiLCJzZXRTdGF0dXMiLCJpc0Zhdm9yaXRlIiwic3VjY2VzcyIsImlzTG9hZGluZyIsImhhc0Vycm9yZWQiLCJtZXNzYWdlIiwiZmlsdGVyIiwicmVjIiwidGFyZ2V0U3RyaW5nIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUNuQkMsU0FBTyxFQUFFLFNBRFU7QUFFbkJDLFNBQU8sRUFBRSxTQUZVO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUF2Qjs7QUFNQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLEVBQUQsQ0FGM0I7QUFBQSxNQUVaQyxX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QSxPQUFPLENBQUNDO0FBRGpCLE9BRVFELE9BRlI7QUFHSSxzQkFBZ0IsRUFBRTtBQUFBLGVBQU1OLHVCQUF1QixDQUFDTSxPQUFELENBQTdCO0FBQUEsT0FIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURDO0FBQUEsR0FKUixDQURMLENBYlIsQ0FESjtBQStCSCxDQXpHRDs7R0FBTTFCLFE7O0tBQUFBLFE7QUEwR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjk4NjQzNzM3ODUxZjBmMmIxOWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBTcGVha2VyU2VhcmNoQmFyIGZyb20gXCIuLi9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXJcIjtcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuLi9TcGVha2VyL1NwZWFrZXJcIjtcblxuY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gICAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXG4gICAgRVJST1I6IFwiZXJyb3JcIlxufTtcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiR0VUX0FMTF9TVUNDRVNTXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcnM6IGFjdGlvbi5kYXRhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfU1RBVFVTXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogYWN0aW9uLnN0YXR1c1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFt7c3BlYWtlcnMsIHN0YXR1c30sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcix7XG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcbiAgICAgICAgc3BlYWtlcnM6IFtdXG4gICAgfSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoU3BlYWtlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRfQUxMX1NVQ0NFU1NcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJVUERBVEVfU1RBVFVTXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaFNwZWFrZXJzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlclJlYykge1xuICAgICAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlYyA9IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcbiAgICAgICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnMubWFwKChzcGVha2VyKSA9PiBzcGVha2VyLmlkKS5pbmRleE9mKHNwZWFrZXJSZWMuaWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjLmlkfWAsIHRvZ2dsZWRTcGVha2VyUmVjKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCArIDEpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkVSUk9SKTtcbiAgICAgICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xuICAgIGNvbnN0IGhhc0Vycm9yZWQgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTcGVha2VyU2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cbiAgICAgICAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHRlcm1pbmFsIHByb21wdClcbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==