import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory, RouteHandler} from 'react-router'

import TemplateLayout from './components/templateLayout'
import Home from './components/home'
import { hashHistory } from 'react-router'

//<Router history={browserHistory}>

ReactDOM.render((
	<Router history={hashHistory}>
		<Route component={TemplateLayout} />
		<Route path="/" component={Home} />
	</Router>
), document.getElementById('hogwarts'));
