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

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.render = _this.render.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			var self = this;

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
			var self = this;

			// //For some reason, react doesn't want to use this funciton
			// this.updatePoints = $.get("http://localhost:3000/scores", (result) => {

			// 	var data = result[0];

			// 	this.setState({
			// 		gryffindor: data.gryffindor,
			// 		slytherin: data.slytherin,
			// 		ravenclaw: data.ravenclaw,
			//		hufflepuff: data.hufflepuff
			// 	});

			// });

			// //I will need more help making this auto update
			// setInterval(this.updatePoints, 2000)
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {

			this.serverRequest.abort();
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
					'Potterscore home'
				),
				_react2.default.createElement(
					'div',
					{ id: 'mainScoreboard' },
					_react2.default.createElement(
						'div',
						{ id: 'mainScoreboard--gryffindor' },
						'Gryffindor: ',
						this.state.gryffindor
					),
					_react2.default.createElement(
						'div',
						{ id: 'mainScoreboard--slytherin' },
						'Slytherin: ',
						this.state.slytherin
					),
					_react2.default.createElement(
						'div',
						{ id: 'mainScoreboard--ravenclaw' },
						'Ravenclaw: ',
						this.state.ravenclaw
					),
					_react2.default.createElement(
						'div',
						{ id: 'mainScoreboard--hufflepuff' },
						'Hufflepuff: ',
						this.state.hufflepuff
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						'button',
						{ id: 'mainScoreboard__requestPoints', onClick: '' },
						'Request Points'
					)
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;