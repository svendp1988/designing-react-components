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
                  records: response.data,
                  type: _actions_request__WEBPACK_IMPORTED_MODULE_9__["GET_ALL_SUCCESS"]
                });
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("Loading data error", _context.t0);
                dispatch({
                  type: _actions_request__WEBPACK_IMPORTED_MODULE_9__["GET_ALL_FAILURE"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VSZWR1Y2VyIiwicmVxdWVzdFJlZHVjZXIiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJyZWNvcmRzIiwiZXJyb3IiLCJzcGVha2VycyIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hTcGVha2VycyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJHRVRfQUxMX0ZBSUxVUkUiLCJvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlciIsInNwZWFrZXJSZWMiLCJ0b2dnbGVkU3BlYWtlclJlYyIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInNwZWFrZXJJbmRleCIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImluZGV4T2YiLCJwdXQiLCJzbGljZSIsIlNVQ0NFU1MiLCJFUlJPUiIsImlzRmF2b3JpdGUiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRVpDLFdBRlk7QUFBQSxNQUVDQyxjQUZEOztBQUFBLG9CQUlvQ0Msd0RBQVUsQ0FBQ0MsMERBQUQs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NTAwZTY3NmU3MWQ1Y2Y4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tIFwiLi4vU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyXCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XG5pbXBvcnQge0dFVF9BTExfRkFJTFVSRSwgR0VUX0FMTF9TVUNDRVNTLCBQVVRfU1VDQ0VTU30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcmVxdWVzdFwiO1xuaW1wb3J0IHJlcXVlc3RSZWR1Y2VyLCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9yZXF1ZXN0XCI7XG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFt7cmVjb3Jkczogc3BlYWtlcnMsIHN0YXR1cywgZXJyb3J9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlcXVlc3RSZWR1Y2VyLHtcbiAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5MT0FESU5HLFxuICAgICAgICByZWNvcmRzOiBbXSxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICB9KTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hTcGVha2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnNcIik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBHRVRfQUxMX1NVQ0NFU1NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgZGF0YSBlcnJvclwiLCBlKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEdFVF9BTExfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaFNwZWFrZXJzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlclJlYykge1xuICAgICAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlYyA9IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcbiAgICAgICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnMubWFwKChzcGVha2VyKSA9PiBzcGVha2VyLmlkKS5pbmRleE9mKHNwZWFrZXJSZWMuaWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnMvJHtzcGVha2VyUmVjLmlkfWAsIHRvZ2dsZWRTcGVha2VyUmVjKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICBzcGVha2VyczogW1xuICAgICAgICAgICAgICAgICAgICAuLi5zcGVha2Vycy5zbGljZSgwLCBzcGVha2VySW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVkU3BlYWtlclJlYyxcbiAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkVSUk9SLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xuICAgIGNvbnN0IGhhc0Vycm9yZWQgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTcGVha2VyU2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cbiAgICAgICAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHRlcm1pbmFsIHByb21wdClcbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==