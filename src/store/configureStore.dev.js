import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../modules/rootReducers'
import DevTools from '../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const routerMd = routerMiddleware(browserHistory) // 通过dispatch 切换地址

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger(), routerMd),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/rootReducers', () => {
      const nextRootReducer = require('../modules/rootReducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
