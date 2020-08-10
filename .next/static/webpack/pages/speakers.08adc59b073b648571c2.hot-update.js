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
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), isLoading && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, "Loading..."), hasErrored && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 28
    }
  }, "Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "ERROR: ", error.message)), success && __jsx("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
        lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkVSUk9SIiwiU3BlYWtlcnMiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RhdHVzIiwic3BlYWtlcnMiLCJkYXRhIiwiZXJyb3IiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaFNwZWFrZXJzIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsIm9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyIiwic3BlYWtlclJlYyIsInRvZ2dsZWRTcGVha2VyUmVjIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwic3BlYWtlckluZGV4IiwibWFwIiwic3BlYWtlciIsImlkIiwiaW5kZXhPZiIsInB1dCIsInNsaWNlIiwiaXNGYXZvcml0ZSIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxTQURVO0FBRW5CQyxTQUFPLEVBQUUsU0FGVTtBQUduQkMsT0FBSyxFQUFFO0FBSFksQ0FBdkI7O0FBTUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVtQkMsc0RBQVEsQ0FBQyxFQUFELENBRjNCO0FBQUEsTUFFWkMsV0FGWTtBQUFBLE1BRUNDLGNBRkQ7O0FB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LEdBQTJCLElBQTNCLEdBQWtDSixZQUFZLENBQUNLLFFBQWIsQ0FBc0J4QyxXQUFXLENBQUNzQyxXQUFaLEVBQXRCLENBQXpDO0FBQ0gsR0FIQSxFQUlJaEIsR0FKSixDQUlRLFVBQUNDLE9BQUQ7QUFBQSxXQUNELE1BQUMsd0RBQUQ7QUFDSSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0M7QUFEakIsT0FFUUQsT0FGUjtBQUdJLHNCQUFnQixFQUFFO0FBQUEsZUFBTU4sdUJBQXVCLENBQUNNLE9BQUQsQ0FBN0I7QUFBQSxPQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREM7QUFBQSxHQUpSLENBREwsQ0FiUixDQURKO0FBK0JILENBbkhEOztHQUFNekIsUTs7S0FBQUEsUTtBQW9IU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuMDhhZGM1OWIwNzNiNjQ4NTcxYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSBcIi4uL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhclwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4uL1NwZWFrZXIvU3BlYWtlclwiO1xuXG5jb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcbiAgICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgICBFUlJPUjogXCJlcnJvclwiXG59O1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfQUxMX1NVQ0NFU1NcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTLFxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyczogYWN0aW9uLmRhdGFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBcIlVQREFURV9TVEFUVVNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBhY3Rpb24uc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIkZFVENIX0VSUk9SXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbe3NwZWFrZXJzLCBzdGF0dXMsIGVycm9yfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLHtcbiAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5MT0FESU5HLFxuICAgICAgICBzcGVha2VyczogW10sXG4gICAgICAgIGVycm9yOiB7fVxuICAgIH0pO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFNwZWFrZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vyc1wiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUX0FMTF9TVUNDRVNTXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX1NUQVRVU1wiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoU3BlYWtlcnMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlcihzcGVha2VyUmVjKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjID0gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xuICAgICAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+IHNwZWFrZXIuaWQpLmluZGV4T2Yoc3BlYWtlclJlYy5pZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgdG9nZ2xlZFNwZWFrZXJSZWMpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHNwZWFrZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKDAsIHNwZWFrZXJJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZWRTcGVha2VyUmVjLFxuICAgICAgICAgICAgICAgICAgICAuLi5zcGVha2Vycy5zbGljZShzcGVha2VySW5kZXggKyAxKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgge1xuICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTcGVha2VyRmF2b3JpdGUoc3BlYWtlclJlYykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3BlYWtlclJlYyxcbiAgICAgICAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjLmlzRmF2b3JpdGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XG4gICAgY29uc3QgaGFzRXJyb3JlZCA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXJcbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxuICAgICAgICAgICAge2hhc0Vycm9yZWQgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLXNlcnZlciBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxuICAgICAgICAgICAgICAgIGpzb24tc2VydmVyXCIgYXQgdGVybWluYWwgcHJvbXB0KVxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHtzdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vycy5maWx0ZXIoKHJlYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjLmZpcnN0TmFtZX0gJHtyZWMubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRydWUgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChzcGVha2VyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uc3BlYWtlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9