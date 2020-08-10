webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/request */ "./src/actions/request.js");
/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/request */ "./src/reducers/request.js");





var _this = undefined,
    _jsxFileName = "C:\\_Projects\\designing-react-components\\src\\components\\Speakers\\Speakers.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Speakers = function Speakers() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_reducers_request__WEBPACK_IMPORTED_MODULE_9__["default"], {
    status: _reducers_request__WEBPACK_IMPORTED_MODULE_9__["REQUEST_STATUS"].LOADING,
    records: [],
    error: null
  }),
      _useReducer$ = _useReducer[0],
      speakers = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchSpeakers = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:4000/speakers");

              case 3:
                response = _context.sent;
                dispatch({
                  records: response.data,
                  type: _actions_request__WEBPACK_IMPORTED_MODULE_8__["GET_ALL_SUCCESS"]
                });
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("Loading data error", _context.t0);
                dispatch({
                  type: _actions_request__WEBPACK_IMPORTED_MODULE_8__["GET_ALL_FAILURE"],
                  error: _context.t0
                });

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
      var toggledSpeakerRec;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              toggledSpeakerRec = _objectSpread(_objectSpread({}, speakerRec), {}, {
                isFavorite: !speakerRec.isFavorite
              });
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("http://localhost:4000/speakers/".concat(speakerRec.id), toggledSpeakerRec);

            case 4:
              dispatch({
                type: _actions_request__WEBPACK_IMPORTED_MODULE_8__["PUT_SUCCESS"],
                record: toggledSpeakerRec
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              dispatch({
                type: _actions_request__WEBPACK_IMPORTED_MODULE_8__["PUT_FAILURE"],
                error: _context2.t0
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _onFavoriteToggleHandler.apply(this, arguments);
  }

  var success = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__["REQUEST_STATUS"].LOADING;
  var hasErrored = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__["REQUEST_STATUS"].ERROR;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 27
    }
  }, "Loading..."), hasErrored && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 28
    }
  }, "Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "ERROR: ", error.message)), success && __jsx("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, speakers.filter(function (rec) {
    var targetString = "".concat(rec.firstName, " ").concat(rec.lastName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (speaker) {
    return __jsx(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: speaker.id
    }, speaker, {
      onFavoriteToggle: function onFavoriteToggle() {
        return onFavoriteToggleHandler(speaker);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VSZWR1Y2VyIiwicmVxdWVzdFJlZHVjZXIiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJyZWNvcmRzIiwiZXJyb3IiLCJzcGVha2VycyIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hTcGVha2VycyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJHRVRfQUxMX0ZBSUxVUkUiLCJvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlciIsInNwZWFrZXJSZWMiLCJ0b2dnbGVkU3BlYWtlclJlYyIsImlzRmF2b3JpdGUiLCJwdXQiLCJpZCIsIlBVVF9TVUNDRVNTIiwicmVjb3JkIiwiUFVUX0ZBSUxVUkUiLCJzdWNjZXNzIiwiU1VDQ0VTUyIsImlzTG9hZGluZyIsImhhc0Vycm9yZWQiLCJFUlJPUiIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVtQkMsc0RBQVEsQ0FBQyxFQUFELENBRjNCO0FBQUEsTUFFWkMsV0FGWTtBQUFBLE1BRUNDLGNBRkQ7O0FBQUEsb0JBSW9DQyx3REFBVSxDQUFDQyx5REFBRCxFQUFnQjtBQUM3RUMsVUFBTSxFQUFF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RCxFQUFTO0FBQ3RCLFFBQU1DLFlBQVksR0FBRyxVQUFHRCxHQUFHLENBQUNFLFNBQVAsY0FBb0JGLEdBQUcsQ0FBQ0csUUFBeEIsRUFBbUNDLFdBQW5DLEVBQXJCO0FBQ0EsV0FBTzFDLFdBQVcsQ0FBQzJDLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0NKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQjVDLFdBQVcsQ0FBQzBDLFdBQVosRUFBdEIsQ0FBekM7QUFDSCxHQUhBLEVBSUlHLEdBSkosQ0FJUSxVQUFDQyxPQUFEO0FBQUEsV0FDRCxNQUFDLHdEQUFEO0FBQ0ksU0FBRyxFQUFFQSxPQUFPLENBQUNuQjtBQURqQixPQUVRbUIsT0FGUjtBQUdJLHNCQUFnQixFQUFFO0FBQUEsZUFBTXhCLHVCQUF1QixDQUFDd0IsT0FBRCxDQUE3QjtBQUFBLE9BSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEQztBQUFBLEdBSlIsQ0FETCxDQWJSLENBREo7QUErQkgsQ0FwRkQ7O0dBQU1oRCxROztLQUFBQSxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5lYTY1ZWRiMmRhZjY0NjY5NzY0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tIFwiLi4vU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyXCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XG5pbXBvcnQge0dFVF9BTExfRkFJTFVSRSwgR0VUX0FMTF9TVUNDRVNTLCBQVVRfRkFJTFVSRSwgUFVUX1NVQ0NFU1N9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3JlcXVlc3RcIjtcbmltcG9ydCByZXF1ZXN0UmVkdWNlciwge1JFUVVFU1RfU1RBVFVTfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcmVxdWVzdFwiO1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBbe3JlY29yZHM6IHNwZWFrZXJzLCBzdGF0dXMsIGVycm9yfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZXF1ZXN0UmVkdWNlcix7XG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcbiAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgfSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoU3BlYWtlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogR0VUX0FMTF9TVUNDRVNTXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGRhdGEgZXJyb3JcIiwgZSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQUxMX0ZBSUxVUkUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hTcGVha2VycygpO1xuICAgIH0sIFtdKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjID0ge1xuICAgICAgICAgICAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWMuaXNGYXZvcml0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB0b2dnbGVkU3BlYWtlclJlYyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUFVUX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiB0b2dnbGVkU3BlYWtlclJlY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQVVRfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xuICAgIGNvbnN0IGhhc0Vycm9yZWQgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTcGVha2VyU2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cbiAgICAgICAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHRlcm1pbmFsIHByb21wdClcbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==