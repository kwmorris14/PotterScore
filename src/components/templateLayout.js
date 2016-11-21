import React from 'react'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'
import $ from 'jQuery'
//import Constants from './components/constants'

export default class TemplateLayout extends React.Component {


	//state instantiation
	constructor(props) {
		super(props);

		this.state = {};

		this.render = this.render.bind(this);
	}

	componentWillMount(){

		var self = this;

		this.state = self;

		this.state = {};

		this.props.children = '<Link to="/" />'
	}

	componentDidMount(){
		this.state = {};

	}


	render() {
		return (
			<div>
				<header>
					Potterscore!
				</header>
				{this.props.children}
			</div>
		);
	}
}
