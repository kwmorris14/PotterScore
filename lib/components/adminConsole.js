'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
			this.state = housePointScores;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;

			var store = this.props.store;

			this.state = housePointScores;
		}
	}, {
		key: 'addPointsGryffindor',
		value: function addPointsGryffindor() {}
	}, {
		key: 'addPointsSlytherin',
		value: function addPointsSlytherin() {}
	}, {
		key: 'addPointsRavenclaw',
		value: function addPointsRavenclaw() {}
	}, {
		key: 'addPointsHufflepuff',
		value: function addPointsHufflepuff() {}
	}, {
		key: 'removePointsGryffindor',
		value: function removePointsGryffindor() {}
	}, {
		key: 'removePointsSlytherin',
		value: function removePointsSlytherin() {}
	}, {
		key: 'removePointsRavenclaw',
		value: function removePointsRavenclaw() {}
	}, {
		key: 'removePointsHufflepuff',
		value: function removePointsHufflepuff() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Welcome Albus'
				),
				_react2.default.createElement('button', { id: 'addPoints--gryffindor', value: 'Add Points For Gryffindor', onclick: 'addPointsGryffindor' }),
				_react2.default.createElement('button', { id: 'removePoints--gryffindor', value: 'Remove Points For Gryffindor', onclick: 'removePointsGryffindor' }),
				_react2.default.createElement('button', { id: 'addPoints--slytherin', value: 'Add Points For Slytherin', onclick: 'addPointsSlytherin' }),
				_react2.default.createElement('button', { id: 'removePoints--slytherin', value: 'Remove Points For Slytherin', onclick: 'removePointsSlytherin' }),
				_react2.default.createElement('button', { id: 'addPoints--ravenclaw', value: 'Add Points For Ravenclaw', onclick: 'addPointsRavenclaw' }),
				_react2.default.createElement('button', { id: 'removePoints--ravenclaw', value: 'Remove Points For Ravenclaw', onclick: 'removePointsRavenclaw' }),
				_react2.default.createElement('button', { id: 'addPoints--hufflepuff', value: 'Add Points For Hufflepuff', onclick: 'addPointsHufflepuff' }),
				_react2.default.createElement('button', { id: 'removePoints--hufflepuff', value: 'Remove Points For Hufflepuff', onclick: 'removePointsHufflepuff' })
			);
		}
	}]);

	return AdminConsole;
}(_react2.default.Component);

exports.default = AdminConsole;