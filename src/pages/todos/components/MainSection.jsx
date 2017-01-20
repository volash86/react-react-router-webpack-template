import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
  render () {
    const { todos, actions } = this.props
    return (
      <section>
        <ul>
          {todos.items.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions}/>
          )}
        </ul>
      </section>
    )
  }
}

export default MainSection
