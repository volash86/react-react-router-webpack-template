import { combineReducers } from 'redux'
import * as actions from './actions'

const items = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case actions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default combineReducers({
  items
})
