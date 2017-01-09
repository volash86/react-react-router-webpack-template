import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routeMap from './routers'
import './styles/less/app.less'

render(
  <Router routes={routeMap} history={hashHistory} />, document.getElementById('app')
)

