import React from 'react'
import { Link } from 'react-router'


export default class Dbops extends React.Component {
	/*CRUD Operations for Mongo DB*/

	//Instantiations
	constructor(props){
		super(props);
		
		this.state.userObject = {
			//instantiate user object
		};

		this.render = this.render.bind(this);
	}

	componentWillMount(){

		var self = this;

		this.state = self;

	}

	componentDidMount(){

	}

	//Create user - add other attributes later

	createUser(){

	}

	//Read user

	readUser(){
		
	}

	//Update user

	editUserInfo(){
		
		db.wizards.updateOne({
		
		})
	}

	upsertUserInfo(){

	}

	//Delete user

	deleteUserAccount(){

	}

	//Add score

	addPointsToHouse(){

	}

	//Subtract score
	subtractPointsFromHouse(){

	}

	//Create a new contest group
	createNewContest(){

	}


}
