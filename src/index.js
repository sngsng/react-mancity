import React              from 'react'
import ReactDOM           from 'react-dom'
import {BrowserRouter}    from 'react-router-dom'
import './resources/css/app.css'
import * as serviceWorker from './serviceWorker'
import Routes             from './routes'

ReactDOM.render(
	<BrowserRouter>
		<Routes/>
	</BrowserRouter>
	, document.getElementById('root'))

serviceWorker.unregister()
