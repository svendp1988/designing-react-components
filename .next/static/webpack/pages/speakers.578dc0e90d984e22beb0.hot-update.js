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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/request */ "./src/actions/request.js");
/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/request */ "./src/reducers/request.js");






var _this = undefined,
    _jsxFileName = "C:\\_Projects\\designing-react-components\\src\\components\\Speakers\\Speakers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Speakers = function Speakers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(_reducers_request__WEBPACK_IMPORTED_MODULE_10__["default"], {
    status: _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].LOADING,
    records: [],
    error: null
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchSpeakers = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
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
                  status: _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR,
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
    _onFavoriteToggleHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(speakerRec) {
      var toggledSpeakerRec, speakerIndex;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
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
                status: _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].SUCCESS
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              dispatch({
                status: _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR,
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

  var success = status === _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].LOADING;
  var hasErrored = status === _reducers_request__WEBPACK_IMPORTED_MODULE_10__["REQUEST_STATUS"].ERROR;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }, "Loading..."), hasErrored && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 28
    }
  }, "Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "ERROR: ", error.message)), success && __jsx("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
        lineNumber: 92,
        columnNumber: 29
      }
    }));
  })));
};

_s(Speakers, "Tz07MSmytexiDsW40+bvUeofN80=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VSZWR1Y2VyIiwicmVxdWVzdFJlZHVjZXIiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJyZWNvcmRzIiwiZXJyb3IiLCJzcGVha2VycyIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hTcGVha2VycyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIkVSUk9SIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJzcGVha2VyUmVjIiwidG9nZ2xlZFNwZWFrZXJSZWMiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VySW5kZXgiLCJtYXAiLCJzcGVha2VyIiwiaWQiLCJpbmRleE9mIiwicHV0Iiwic2xpY2UiLCJTVUNDRVNTIiwiaXNGYXZvcml0ZSIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVtQkMsc0RBQVEsQ0FBQyxFQUFELENBRjNCO0FBQUEsTUFFWkMsV0FGWTtBQUFBLE1BRUNDLGNBRkQ7O0FBQUEsb0JBSW9DQyx3REFBVSxDQUFDQywwREFBRCxFQUFnQjtBQUM3RUMsVUFBTSxFQUFFQyxpRUFBYyxDQUFDQyxPQURzRDtBQUU3RUMsV0FB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QUFBO0FBQUE7QUFBQSxrQkFMbEIsRUFNS0MsVUFBVSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0dBR1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhXLEVBSVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBVzFCLEtBQUssQ0FBQzJCLE9BQWpCLENBSlcsQ0FObkIsRUFZS0gsT0FBTyxJQUNKO0FBQUssYUFBUyxFQUFDLHVEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3ZCLFFBQVEsQ0FBQzJCLE1BQVQsQ0FBZ0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCLFFBQU1DLFlBQVksR0FBRyxVQUFHRCxHQUFHLENBQUNFLFNBQVAsY0FBb0JGLEdBQUcsQ0FBQ0csUUFBeEIsRUFBbUNDLFdBQW5DLEVBQXJCO0FBQ0EsV0FBT3pDLFdBQVcsQ0FBQzBDLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0NKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQjNDLFdBQVcsQ0FBQ3lDLFdBQVosRUFBdEIsQ0FBekM7QUFDSCxHQUhBLEVBSUlqQixHQUpKLENBSVEsVUFBQ0MsT0FBRDtBQUFBLFdBQ0QsTUFBQyx3REFBRDtBQUNJLFNBQUcsRUFBRUEsT0FBTyxDQUFDQztBQURqQixPQUVRRCxPQUZSO0FBR0ksc0JBQWdCLEVBQUU7QUFBQSxlQUFNTix1QkFBdUIsQ0FBQ00sT0FBRCxDQUE3QjtBQUFBLE9BSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQztBQUFBLEdBSlIsQ0FETCxDQWJSLENBREo7QUErQkgsQ0E5RkQ7O0dBQU0zQixROztLQUFBQSxRO0FBK0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy41NzhkYzBlOTBkOTg0ZTIyYmViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tIFwiLi4vU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyXCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XG5pbXBvcnQge0dFVF9BTExfU1VDQ0VTUywgUFVUX1NVQ0NFU1N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JlcXVlc3RcIjtcbmltcG9ydCByZXF1ZXN0UmVkdWNlciwge1JFUVVFU1RfU1RBVFVTfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcmVxdWVzdFwiO1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbe3JlY29yZHM6IHNwZWFrZXJzLCBzdGF0dXMsIGVycm9yfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZXF1ZXN0UmVkdWNlcix7XG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcbiAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgfSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoU3BlYWtlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJHRVRfQUxMX1NVQ0NFU1NcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJVUERBVEVfU1RBVFVTXCIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hTcGVha2VycygpO1xuICAgIH0sIFtdKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlZFNwZWFrZXJSZWMgPSB0b2dnbGVTcGVha2VyRmF2b3JpdGUoc3BlYWtlclJlYyk7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJJbmRleCA9IHNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT4gc3BlYWtlci5pZCkuaW5kZXhPZihzcGVha2VyUmVjLmlkKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB0b2dnbGVkU3BlYWtlclJlYyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZFNwZWFrZXJSZWMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCArIDEpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWMuaXNGYXZvcml0ZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcbiAgICBjb25zdCBoYXNFcnJvcmVkID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3BlYWtlclNlYXJjaEJhclxuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XG4gICAgICAgICAgICB7aGFzRXJyb3JlZCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXG4gICAgICAgICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB0ZXJtaW5hbCBwcm9tcHQpXG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8Yj5FUlJPUjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzLmZpbHRlcigocmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfSAke3JlYy5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwID8gdHJ1ZSA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlcihzcGVha2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=