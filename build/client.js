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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_pages_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/App */ \"./src/client/components/pages/App.js\");\n/* harmony import */ var _components_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/Dashboard */ \"./src/client/components/pages/Dashboard.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  component: _components_pages_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: '/dashboard',\n  component: _components_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack://dehef-blog/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_POSTS\": () => (/* binding */ GET_POSTS),\n/* harmony export */   \"POST_ERROR\": () => (/* binding */ POST_ERROR),\n/* harmony export */   \"DELETE_POST\": () => (/* binding */ DELETE_POST),\n/* harmony export */   \"ADD_POST\": () => (/* binding */ ADD_POST),\n/* harmony export */   \"GET_POST\": () => (/* binding */ GET_POST),\n/* harmony export */   \"ADD_COMMENT\": () => (/* binding */ ADD_COMMENT),\n/* harmony export */   \"REMOVE_COMMENT\": () => (/* binding */ REMOVE_COMMENT),\n/* harmony export */   \"FETCH_USERS\": () => (/* binding */ FETCH_USERS),\n/* harmony export */   \"USER_LOADED\": () => (/* binding */ USER_LOADED),\n/* harmony export */   \"LOGIN_SUCCESS\": () => (/* binding */ LOGIN_SUCCESS),\n/* harmony export */   \"LOGOUT\": () => (/* binding */ LOGOUT),\n/* harmony export */   \"AUTH_ERROR\": () => (/* binding */ AUTH_ERROR),\n/* harmony export */   \"LOGIN_FAIL\": () => (/* binding */ LOGIN_FAIL)\n/* harmony export */ });\n//POSTS TYPES\nvar GET_POSTS = 'get_posts';\nvar POST_ERROR = \"post_error\";\nvar DELETE_POST = \"delete_post\";\nvar ADD_POST = 'add_post';\nvar GET_POST = 'get_post'; //COMMENTS TYPES\n\nvar ADD_COMMENT = 'add_comment';\nvar REMOVE_COMMENT = 'remove_comment'; //USERS TYPES\n\nvar FETCH_USERS = 'fetch_users'; //AUTH TYPES\n\nvar USER_LOADED = 'user_loaded';\nvar LOGIN_SUCCESS = 'login_success';\nvar LOGOUT = 'logout';\nvar AUTH_ERROR = 'auth_error';\nvar LOGIN_FAIL = 'login_fail';\n\n//# sourceURL=webpack://dehef-blog/./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ \"./src/client/reducers/index.js\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-react */ \"@auth0/auth0-react\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n // createStore(<reducer> | <preloadedState> | <middleware>)\n\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, (0,redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_5___default()))); // use of hydrate for SSR\n// Auth0 Provider for Google auth\n// Redux Provider from\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_10__.Auth0Provider, {\n  domain: 'dev-8ctnv075.eu.auth0.com',\n  clientId: 'iNQycfejhx9IB6VFbq2SgLSnzQ4j4t3e',\n  redirectUri: window.location.origin\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_8__.renderRoutes)(_Routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])))))), document.getElementById('root'));\n\n//# sourceURL=webpack://dehef-blog/./src/client/client.js?");

/***/ }),

/***/ "./src/client/components/auth/Login.js":
/*!*********************************************!*\
  !*** ./src/client/components/auth/Login.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n //\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'login-box'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: 'orange'\n  }, \"Login\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/auth/Login.js?");

/***/ }),

/***/ "./src/client/components/layout/Container.js":
/*!***************************************************!*\
  !*** ./src/client/components/layout/Container.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Container = function Container(props) {\n  var center = props.center;\n  var styles = classnames__WEBPACK_IMPORTED_MODULE_1___default()('content', {\n    'center': center\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'container'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: styles\n  }, props.children));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/layout/Container.js?");

/***/ }),

/***/ "./src/client/components/layout/Layout.js":
/*!************************************************!*\
  !*** ./src/client/components/layout/Layout.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Navbar */ \"./src/client/components/ui/Navbar.js\");\n/* harmony import */ var _ui_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Footer */ \"./src/client/components/ui/Footer.js\");\n/* harmony import */ var _utils_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Aux */ \"./src/client/utils/Aux.js\");\n/* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Container */ \"./src/client/components/layout/Container.js\");\n\n\n\n\n // Layout.jst provides a navbar and a main container\n// Container<props: center>\n\nvar Layout = function Layout(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Aux__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    center: true\n  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/layout/Layout.js?");

/***/ }),

/***/ "./src/client/components/pages/App.js":
/*!********************************************!*\
  !*** ./src/client/components/pages/App.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/Login */ \"./src/client/components/auth/Login.js\");\n/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Layout */ \"./src/client/components/layout/Layout.js\");\n\n\n // App.js is the home page\n// route = '/'\n// You can log in with Auth0 connection (Google, Facebook)\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/pages/App.js?");

/***/ }),

/***/ "./src/client/components/pages/Dashboard.js":
/*!**************************************************!*\
  !*** ./src/client/components/pages/Dashboard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Layout */ \"./src/client/components/layout/Layout.js\");\n\n // Dashboard.js is the page where you end up once logged in\n// route='/dashboard'\n\nvar Dashboard = function Dashboard() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"title\"\n  }, \"Dashboard\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/pages/Dashboard.js?");

/***/ }),

/***/ "./src/client/components/ui/Footer.js":
/*!********************************************!*\
  !*** ./src/client/components/ui/Footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Footer = function Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'footer'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Footer\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/ui/Footer.js?");

/***/ }),

/***/ "./src/client/components/ui/Navbar.js":
/*!********************************************!*\
  !*** ./src/client/components/ui/Navbar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // COMPONENT: <Navbar/>\n// Consume by <Layout/>\n\nvar Navbar = function Navbar() {\n  var fakeLinks = ['new', 'for him', 'for her', 'home', 'gifts', 'sale', 'journal'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'navbar-container'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'navbar center'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"SEARCH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: 'logo.png',\n    alt: 'logo'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"OTHER\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: 'fake-links-container center'\n  }, fakeLinks.map(function (fl) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      className: \"fake-link\"\n    }, fl.toUpperCase());\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://dehef-blog/./src/client/components/ui/Navbar.js?");

/***/ }),

/***/ "./src/client/reducers/comments.js":
/*!*****************************************!*\
  !*** ./src/client/reducers/comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  comments: [],\n  comment: null,\n  loading: true\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state), {}, {\n          comments: payload\n        }),\n        loading: false\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.REMOVE_COMMENT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        post: _objectSpread(_objectSpread({}, state), {}, {\n          comments: state.comments.filter(function (comment) {\n            return comment.id !== payload;\n          })\n        }),\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://dehef-blog/./src/client/reducers/comments.js?");

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

/***/ "./src/client/utils/Aux.js":
/*!*********************************!*\
  !*** ./src/client/utils/Aux.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Aux: HOC\nvar aux = function aux(props) {\n  return props.children;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aux);\n\n//# sourceURL=webpack://dehef-blog/./src/client/utils/Aux.js?");

/***/ }),

/***/ "@auth0/auth0-react":
/*!*************************************!*\
  !*** external "@auth0/auth0-react" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@auth0/auth0-react");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/client.js");
/******/ 	
/******/ })()
;