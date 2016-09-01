import React from 'react'
import { Link } from 'react-router'

export default class AdminConsole extends React.Component {

	//state instantiation
	constructor(props) {
		super(props);

		this.render = this.render.bind(this);
	}

	componentWillMount(){
		this.state = housePointScores;
	}

	componentDidMount(){
		var self = this;

		var store = this.props.store;

		this.state = housePointScores;
	}

	addPointsGryffindor(){

	}

	addPointsSlytherin(){
		
	}

	addPointsRavenclaw(){
		
	}

	addPointsHufflepuff(){
		
	}

	removePointsGryffindor(){

	}

	removePointsSlytherin(){
		
	}

	removePointsRavenclaw(){
		
	}

	removePointsHufflepuff(){
		
	}

	render() {
			return(
					<div>
						<h2>Welcome Albus</h2>
						<button id="addPoints--gryffindor" value="Add Points For Gryffindor" onclick="addPointsGryffindor" />
						<button id="removePoints--gryffindor" value="Remove Points For Gryffindor" onclick="removePointsGryffindor" />

						<button id="addPoints--slytherin"  value="Add Points For Slytherin" onclick="addPointsSlytherin" />
						<button id="removePoints--slytherin"  value="Remove Points For Slytherin" onclick="removePointsSlytherin" />

						<button id="addPoints--ravenclaw"  value="Add Points For Ravenclaw" onclick="addPointsRavenclaw" />
						<button id="removePoints--ravenclaw"  value="Remove Points For Ravenclaw" onclick="removePointsRavenclaw" />

						<button id="addPoints--hufflepuff" value="Add Points For Hufflepuff" onclick="addPointsHufflepuff" />
						<button id="removePoints--hufflepuff" value="Remove Points For Hufflepuff" onclick="removePointsHufflepuff" />
					</div>
			)
	}
}

