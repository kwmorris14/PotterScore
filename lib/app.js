'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _adminConsole = require('./components/adminConsole');

var _adminConsole2 = _interopRequireDefault(_adminConsole);

var _templateLayout = require('./components/templateLayout');

var _templateLayout2 = _interopRequireDefault(_templateLayout);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Constants from './components/constants'
ReactDOM.render(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(_reactRouter.Route, { component: _templateLayout2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/', component: _home2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/adminConsole', component: _adminConsole2.default })
), document.getElementById('hogwarts'));