import React from 'react'
import { Link } from 'react-router'
import $ from 'jQuery'

export default class Home extends React.Component {

	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

	componentWillMount(){
		var self = this;

		this.state = {};

		this.serverURL = "http://localhost:3000/scores";

		this.serverRequest = $.get(this.serverURL, (result) => {
			var data = result[0];

			this.setState({
				gryffindor: data.gryffindor,
				slytherin: data.slytherin,
				ravenclaw: data.ravenclaw,
	 			hufflepuff: data.hufflepuff
			});
		});
	}

	componentDidMount(){
		var self = this;
	}

	componentWillUnmount() {
    this.serverRequest.abort();
  	}

	render() {
			return(
					<div>
							<h2>Potterscore home</h2>
							<div id="mainScoreboard">
								<div id="mainScoreboard--gryffindor">Gryffindor: {this.state.gryffindor}

								</div>
								<div id="mainScoreboard--slytherin">Slytherin: {this.state.slytherin}

								</div>
								<div id="mainScoreboard--ravenclaw">Ravenclaw: {this.state.ravenclaw}

								</div>
								<div id="mainScoreboard--hufflepuff">Hufflepuff: {this.state.hufflepuff}

								</div>
								<button id="mainScoreboard__requestPoints" value="Request Points" />
							</div>
					</div>
			)
	}
}
