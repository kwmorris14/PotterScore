import React from 'react'
import { Link } from 'react-router'
import $ from 'jQuery'
//import Constants from './components/constants'

export default class AdminConsole extends React.Component {

	//state instantiation
	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

	componentWillMount(){
		this.state = {};

		this.props = {};

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

		this.updatePoints = () => $.get(this.serverURL, (result) => {

			var data = result[0];

			this.setState({
				gryffindor: data.gryffindor,
				slytherin: data.slytherin,
				ravenclaw: data.ravenclaw,
				hufflepuff: data.hufflepuff
			});

			setInterval((this.updatePoints), 5000);

		});

		this.addPoints = (house) => $.post(this.serverURL, (result) => {

			//this.state.house.value += 10;

		})

		this.removePoints = (house) => $post(this.serverURL, (result) => {

			//this.state.house.value -= 10;

		})

	}

	render() {
		return(
				<div>
					<h2>Welcome Headmaster</h2>

					<h3>Current Scores</h3>

					<div id="headmasterScoreboard">
						<div id="headmasterScoreboard--gryffindor">Gryffindor: {this.state.gryffindor}

						</div>
						<div id="headmasterScoreboard--slytherin">Slytherin: {this.state.slytherin}

						</div>
						<div id="headmasterScoreboard--ravenclaw">Ravenclaw: {this.state.ravenclaw}

						</div>
						<div id="headmasterScoreboard--hufflepuff">Hufflepuff: {this.state.hufflepuff}

						</div>
					</div>

					<button id="addPoints--gryffindor" onclick={this.addPoints("gryffindor")}>Add 10 points to Gryffindor</button>
					<button id="removePoints--gryffindor" onclick={this.removePoints("gryffindor")}>Subdtract 10 points from Gryffindor</button>

					<button id="addPoints--slytherin" onclick={this.addPoints("slytherin")}>Add 10 points to Slytherin</button>
					<button id="removePoints--slytherin" onclick={this.removePoints("slytherin")}>Add 10 points to Slytherin</button>

					<button id="addPoints--ravenclaw" onclick={this.addPoints("ravenclaw")}>Add 10 points to Ravenclaw</button>
					<button id="removePoints--ravenclaw" onclick={this.removePoints("ravenclaw")}>Add 10 points to Ravenclaw</button>

					<button id="addPoints--hufflepuff" onclick={this.addPoints("hufflepuff")}>Add 10 points to Hufflepuff</button>
					<button id="removePoints--hufflepuff" onclick={this.removePoints("hufflepuff")}>Add 10 points to Hufflepuff</button>
				</div>
		)
	}
}

