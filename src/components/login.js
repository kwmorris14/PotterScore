import React from 'react'
import { Link } from 'react-router'

export default class Login extends React.Component {

	//state instantiation
	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

	componentDidMount(){
		var self = this;
		var store = this.props.store;
		this.state = {};
	}

	componentWillMount(){
		//stuff
	}

	render() {
		return(
			<div>
				<h2>Login Page</h2>
			</div>
		)
	}
}
