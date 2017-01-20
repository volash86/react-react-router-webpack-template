import React, { Component, PropTypes } from 'react'

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render () {
    const { todo, deleteTodo } = this.props
    return (
      <div>
        <span>{todo.text}</span> <span onClick={() => deleteTodo(todo.id)}>X</span>
      </div>
    )
  }
}

export default TodoItem
