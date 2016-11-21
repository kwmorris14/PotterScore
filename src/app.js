import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'
//import Constants from './components/constants'
import AdminConsole from './components/adminConsole'
import TemplateLayout from './components/templateLayout'
import Home from './components/home'
import { hashHistory } from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route component={TemplateLayout} />
		<Route path="/" component={Home} />
		<Route path="/adminConsole" component={AdminConsole} />
	</Router>
), document.getElementById('hogwarts'));
