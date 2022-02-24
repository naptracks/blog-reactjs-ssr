/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ \"./src/client/components/App.js\");\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Posts */ \"./src/client/components/Posts.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  component: _components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}, {\n  path: '/posts',\n  component: _components_Posts__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}]);\n\n//# sourceURL=webpack://dehef-blog/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/post.js":
/*!************************************!*\
  !*** ./src/client/actions/post.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"deletePost\": () => (/* binding */ deletePost),\n/* harmony export */   \"addPost\": () => (/* binding */ addPost),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ \"./src/client/utils/api.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // Get posts\n\nvar getPosts = function getPosts() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return _utils_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/posts');\n\n            case 3:\n              res = _context.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.GET_POSTS,\n                payload: res.data\n              });\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.POST_ERROR,\n                payload: {\n                  msg: _context.t0.response.statusText,\n                  status: _context.t0.response.status\n                }\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n}; // Delete post\n\nvar deletePost = function deletePost(id) {\n  return /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return _utils_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"/posts/\".concat(id));\n\n            case 3:\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.DELETE_POST,\n                payload: id\n              });\n              _context2.next = 9;\n              break;\n\n            case 6:\n              _context2.prev = 6;\n              _context2.t0 = _context2[\"catch\"](0);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.POST_ERROR,\n                payload: {\n                  msg: _context2.t0.response.statusText,\n                  status: _context2.t0.response.status\n                }\n              });\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 6]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n}; // Add post\n\nvar addPost = function addPost(formData) {\n  return /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return _utils_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/posts', formData);\n\n            case 3:\n              res = _context3.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.ADD_POST,\n                payload: res.data\n              });\n              _context3.next = 10;\n              break;\n\n            case 7:\n              _context3.prev = 7;\n              _context3.t0 = _context3[\"catch\"](0);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.POST_ERROR,\n                payload: {\n                  msg: _context3.t0.response.statusText,\n                  status: _context3.t0.response.status\n                }\n              });\n\n            case 10:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 7]]);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n}; // Get post\n\nvar getPost = function getPost(id) {\n  return /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return _utils_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/posts/\".concat(id));\n\n            case 3:\n              res = _context4.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.GET_POST,\n                payload: res.data\n              });\n              _context4.next = 10;\n              break;\n\n            case 7:\n              _context4.prev = 7;\n              _context4.t0 = _context4[\"catch\"](0);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_1__.POST_ERROR,\n                payload: {\n                  msg: _context4.t0.response.statusText,\n                  status: _context4.t0.response.status\n                }\n              });\n\n            case 10:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 7]]);\n    }));\n\n    return function (_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://dehef-blog/./src/client/actions/post.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_POSTS\": () => (/* binding */ GET_POSTS),\n/* harmony export */   \"POST_ERROR\": () => (/* binding */ POST_ERROR),\n/* harmony export */   \"DELETE_POST\": () => (/* binding */ DELETE_POST),\n/* harmony export */   \"ADD_POST\": () => (/* binding */ ADD_POST),\n/* harmony export */   \"GET_POST\": () => (/* binding */ GET_POST),\n/* harmony export */   \"ADD_COMMENT\": () => (/* binding */ ADD_COMMENT),\n/* harmony export */   \"REMOVE_COMMENT\": () => (/* binding */ REMOVE_COMMENT),\n/* harmony export */   \"FETCH_USERS\": () => (/* binding */ FETCH_USERS),\n/* harmony export */   \"REGISTER_SUCCESS\": () => (/* binding */ REGISTER_SUCCESS),\n/* harmony export */   \"USER_LOADED\": () => (/* binding */ USER_LOADED),\n/* harmony export */   \"LOGIN_SUCCESS\": () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT),\n/* harmony export */   \"REGISTER_FAIL\": () => (/* binding */ REGISTER_FAIL),\n/* harmony export */   \"AUTH_ERROR\": () => (/* binding */ AUTH_ERROR),\n/* harmony export */   \"LOGIN_FAIL\": () => (/* binding */ LOGIN_FAIL)\n/* harmony export */ });\n//POSTS TYPES\nvar GET_POSTS = 'get_posts';\nvar POST_ERROR = \"post_error\";\nvar DELETE_POST = \"delete_post\";\nvar ADD_POST = 'add_post';\nvar GET_POST = 'get_post'; //COMMENTS TYPES\n\nvar ADD_COMMENT = 'add_comment';\nvar REMOVE_COMMENT = 'remove_comment'; //USERS TYPES\n\nvar FETCH_USERS = 'fetch_users'; //AUTH TYPES\n\nvar REGISTER_SUCCESS = 'register_success';\nvar USER_LOADED = 'user_loaded';\nvar LOGIN_SUCCESS = 'login_success';\nvar LOGOUT = 'logout';\nvar REGISTER_FAIL = 'register_fail';\nvar AUTH_ERROR = 'auth_error';\nvar LOGIN_FAIL = 'login_fail';\n\n//# sourceURL=webpack://dehef-blog/./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/components/App.js":
/*!**************************************!*\
  !*** ./src/client/components/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar App = function App(_ref) {\n  var isAuthenticated = _ref.isAuthenticated;\n\n  if (isAuthenticated) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null);\n};\n\nApp.propTypes = {\n  isAuthenticated: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuthenticated: state.auth.isAuthenticated\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(App));\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/App.js?");

/***/ }),

/***/ "./src/client/components/Posts.js":
/*!****************************************!*\
  !*** ./src/client/components/Posts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ \"./src/client/actions/post.js\");\n\n\n\n\n\nvar Posts = function Posts(_ref) {\n  var getPosts = _ref.getPosts,\n      posts = _ref.post.posts;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    getPosts();\n  }, [getPosts]);\n  console.log(posts);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Posts\"));\n};\n\nPosts.propTypes = {\n  getPosts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  post: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    post: state.post\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {\n  getPosts: _actions_post__WEBPACK_IMPORTED_MODULE_3__.getPosts\n})(Posts));\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/Posts.js?");

/***/ }),

/***/ "./src/client/reducers/comments.js":
/*!*****************************************!*\
  !*** ./src/client/reducers/comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  comments: [],\n  comment: null,\n  loading: true\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state.post), {}, {\n          comments: payload\n        }),\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.REMOVE_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state.post), {}, {\n          comments: state.post.comments.filter(function (comment) {\n            return comment.id !== payload;\n          })\n        }),\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://dehef-blog/./src/client/reducers/comments.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./src/client/reducers/post.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ \"./src/client/reducers/comments.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  post: _post__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  comments: _comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack://dehef-blog/./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/post.js":
/*!*************************************!*\
  !*** ./src/client/reducers/post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  posts: [],\n  post: null,\n  loading: true,\n  error: {}\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_POSTS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        posts: payload,\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: payload,\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        posts: [payload].concat(_toConsumableArray(state.posts)),\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.DELETE_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        posts: state.posts.filter(function (post) {\n          return post.id !== payload;\n        }),\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.POST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: payload,\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state.post), {}, {\n          comments: payload\n        }),\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.REMOVE_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state.post), {}, {\n          comments: state.post.comments.filter(function (comment) {\n            return comment.id !== payload;\n          })\n        }),\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://dehef-blog/./src/client/reducers/post.js?");

/***/ }),

/***/ "./src/client/utils/api.js":
/*!*********************************!*\
  !*** ./src/client/utils/api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\n\n\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'https://jsonplaceholder.typicode.com/',\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n/**\n intercept any error responses from the api\n and check if the token is no longer valid.\n **/\n\napi.interceptors.response.use(function (res) {\n  return res;\n}, function (err) {\n  if (err.response.status === 401) {\n    store.dispatch({\n      type: _actions_types__WEBPACK_IMPORTED_MODULE_1__.LOGOUT\n    });\n  }\n\n  return Promise.reject(err);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://dehef-blog/./src/client/utils/api.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])))));\n  return \"\\n    <!Doctype html>\\n    <html lang=\\\"fr\\\">\\n        <head>\\n            <title>Dehef Blog</title>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\".concat(content, \"</div>\\n            <script src=\\\"bundle.js\\\"></script>\\n        </body>\\n    </html>\\n\");\n});\n\n//# sourceURL=webpack://dehef-blog/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/helpers/store.js":
/*!******************************!*\
  !*** ./src/helpers/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n  return store;\n});\n\n//# sourceURL=webpack://dehef-blog/./src/helpers/store.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/store */ \"./src/helpers/store.js\");\n\n\n\n\nvar PORT = process.env.PORT || 3000;\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var store = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  res.send((0,_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, store));\n});\napp.listen(PORT, function () {\n  console.log(\"Server running on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://dehef-blog/./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;