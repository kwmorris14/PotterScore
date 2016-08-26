import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

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
							<h2>potterscore home</h2>
					</div>
			)
	}
}
