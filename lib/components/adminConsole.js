'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Constants from './components/constants'

var AdminConsole = function (_React$Component) {
	_inherits(AdminConsole, _React$Component);

	//state instantiation
	function AdminConsole(props) {
		_classCallCheck(this, AdminConsole);

		var _this = _possibleConstructorReturn(this, (AdminConsole.__proto__ || Object.getPrototypeOf(AdminConsole)).call(this, props));

		_this.render = _this.render.bind(_this);
		return _this;
	}

	_createClass(AdminConsole, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			this.state = {};

			this.props = {};

			this.serverURL = "http://localhost:3000/scores";

			this.serverRequest = _jQuery2.default.get(this.serverURL, function (result) {
				var data = result[0];

				_this2.setState({
					gryffindor: data.gryffindor,
					slytherin: data.slytherin,
					ravenclaw: data.ravenclaw,
					hufflepuff: data.hufflepuff
				});
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this3 = this;

			var self = this;

			this.updatePoints = function () {
				return _jQuery2.default.get(_this3.serverURL, function (result) {

					var data = result[0];

					_this3.setState({
						gryffindor: data.gryffindor,
						slytherin: data.slytherin,
						ravenclaw: data.ravenclaw,
						hufflepuff: data.hufflepuff
					});
				});
			};

			this.addPoints = function (house) {
				return _jQuery2.default.post(_this3.serverURL, function (result) {

					_this3.state.house.value += 10;
				});
			};

			this.removePoints = function (house) {
				return $post(_this3.serverURL, function (result) {

					_this3.state.house.value -= 10;
				});
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Welcome Headmaster'
				),
				_react2.default.createElement(
					'h3',
					null,
					'Current Scores'
				),
				_react2.default.createElement(
					'div',
					{ id: 'headmasterScoreboard' },
					_react2.default.createElement(
						'div',
						{ id: 'headmasterScoreboard--gryffindor' },
						'Gryffindor: ',
						this.state.gryffindor
					),
					_react2.default.createElement(
						'div',
						{ id: 'headmasterScoreboard--slytherin' },
						'Slytherin: ',
						this.state.slytherin
					),
					_react2.default.createElement(
						'div',
						{ id: 'headmasterScoreboard--ravenclaw' },
						'Ravenclaw: ',
						this.state.ravenclaw
					),
					_react2.default.createElement(
						'div',
						{ id: 'headmasterScoreboard--hufflepuff' },
						'Hufflepuff: ',
						this.state.hufflepuff
					)
				),
				_react2.default.createElement(
					'button',
					{ id: 'addPoints--gryffindor', onclick: this.addPoints("gryffindor") },
					'Add 10 points to Gryffindor'
				),
				_react2.default.createElement(
					'button',
					{ id: 'removePoints--gryffindor', onclick: this.removePoints("gryffindor") },
					'Subdtract 10 points from Gryffindor'
				),
				_react2.default.createElement(
					'button',
					{ id: 'addPoints--slytherin', onclick: this.addPoints("slytherin") },
					'Add 10 points to Slytherin'
				),
				_react2.default.createElement(
					'button',
					{ id: 'removePoints--slytherin', onclick: this.removePoints("slytherin") },
					'Add 10 points to Slytherin'
				),
				_react2.default.createElement(
					'button',
					{ id: 'addPoints--ravenclaw', onclick: this.addPoints("ravenclaw") },
					'Add 10 points to Ravenclaw'
				),
				_react2.default.createElement(
					'button',
					{ id: 'removePoints--ravenclaw', onclick: this.removePoints("ravenclaw") },
					'Add 10 points to Ravenclaw'
				),
				_react2.default.createElement(
					'button',
					{ id: 'addPoints--hufflepuff', onclick: this.addPoints("hufflepuff") },
					'Add 10 points to Hufflepuff'
				),
				_react2.default.createElement(
					'button',
					{ id: 'removePoints--hufflepuff', onclick: this.removePoints("hufflepuff") },
					'Add 10 points to Hufflepuff'
				)
			);
		}
	}]);

	return AdminConsole;
}(_react2.default.Component);

exports.default = AdminConsole;