import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import todos from './todos/reducers'

const rootReducer = combineReducers({
  todos,
  routing
})

export default rootReducer
