/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(10);
	var fs = __webpack_require__(11);
	var path = __webpack_require__(12);
	var handlebars = __webpack_require__(13);

	var app = express();

	var index = fs.readFileSync(path.resolve(__dirname, '..', '..', 'public', 'index.html'), 'utf-8');
	var indexTemplate = handlebars.compile(index);

	// serve our static stuff like index.css
	app.use(express.static('public'));

	app.get('/favicon.ico', function (req, res) {
	    res.sendStatus(404);
	});

	app.get('*', function (req, res) {
	    // match the routes to the url
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	        // `RouterContext` is the what `Router` renders. `Router` keeps these
	        // `props` in its state as it listens to `browserHistory`. But on the
	        // server our app is stateless, so we need to use `match` to
	        // get these props before rendering.
	        var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

	        // dump the HTML into a template, lots of ways to do this, but none are
	        // really influenced by React Router, so we're just using a little
	        // function, `renderPage`
	        res.send(renderPage(appHtml));
	    });
	});

	function renderPage(appHtml) {
	    return indexTemplate({ appHtml: appHtml });
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	    console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "src\\server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _PocApp = __webpack_require__(5);

	var _PocApp2 = _interopRequireDefault(_PocApp);

	var _ModuleA = __webpack_require__(7);

	var _ModuleA2 = _interopRequireDefault(_ModuleA);

	var _ModuleB = __webpack_require__(8);

	var _ModuleB2 = _interopRequireDefault(_ModuleB);

	var _ModuleC = __webpack_require__(9);

	var _ModuleC2 = _interopRequireDefault(_ModuleC);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _PocApp2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _ModuleA2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/b(/:str)', component: _ModuleB2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/c', component: _ModuleC2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = PocApp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PocApp(props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h1',
	            null,
	            'POC App'
	        ),
	        _react2.default.createElement(
	            'nav',
	            null,
	            _react2.default.createElement(
	                _NavLink2.default,
	                { to: '/', onlyActiveOnIndex: true },
	                'A'
	            ),
	            _react2.default.createElement(
	                _NavLink2.default,
	                { to: '/b/abcde' },
	                'B'
	            ),
	            _react2.default.createElement(
	                _NavLink2.default,
	                { to: '/c' },
	                'C'
	            )
	        ),
	        props.children
	    );
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = NavLink;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NavLink(props) {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, props, { activeStyle: { color: 'red' } }));
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return _react2.default.createElement(
	        'h1',
	        null,
	        'Module A'
	    );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (props) {
	    return _react2.default.createElement(
	        'h1',
	        null,
	        'Module Bfdfd ',
	        props.params.str
	    );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return _react2.default.createElement(
	        'h1',
	        null,
	        'Module C'
	    );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("handlebars");

/***/ }
/******/ ]);