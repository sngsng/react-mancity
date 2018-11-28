import React  from 'react'
import Layout from './components/layout/Layout'
import {Switch, Route} from 'react-router-dom'

import Home from './components/home'

const Routes = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" component={Home} exact/>
			</Switch>
		</Layout>
	)
}

export default Routes
