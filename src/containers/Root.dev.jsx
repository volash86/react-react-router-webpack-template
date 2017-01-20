import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import routeMap from '../routers'
import DevTools from './DevTools'
import { Router } from 'react-router'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router routes={routeMap} history={history} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
